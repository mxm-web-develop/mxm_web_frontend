<script setup lang="ts">
import {
  ref,
  computed,
  onBeforeMount,
} from "vue";
import gsap from 'gsap';
import animate from "./animate";
import { POSITONS } from "./mxmModal.types";


export interface MxmModalType {
  modelValue: boolean;
  title?: string;
  telTo?: string;
  remove?: () => void;
  // component:any
  content?: string;
  mode?: "image" | "dialog" | "frame" | "toast";
  mode_type?: "glass" | "material";
  themeColor?: "white" | "black";
  width?: string;
  height?: string;
  position?: 'r'|'l'|'t'|'b';
  //   用于toast模式的自动关闭
  duration?: number;
  clickOutSide?:boolean;
  onBeforeClose?:()=>any;
  src?: string;
}

const props = withDefaults(defineProps<MxmModalType>(), {
  show: false,
  telTo: "body",
  mode_type: "material",
  mode: "toast",
  themeColor: "black",
  src:'',
  position: POSITONS.LEFT
});
const boxSetting = ref({
  height: "",
  width: "",
});
const emit = defineEmits(["update:modelValue"]);
const modalBox = ref(null);
const updateValue = (val: boolean) => {

  emit("update:modelValue", val);
};
onBeforeMount(() => {
  if (props.width) {
    boxSetting.value.width = props.width;
  }
  if (props.height) {
    boxSetting.value.height = props.height;
  }
  if (!props.width) {
    if (props.mode === "dialog") {
      boxSetting.value.width = "375px";
      if(!props.height) {
        boxSetting.value.height = "195px";
      }
    } else if (props.mode === "frame") {
      if (props.position === 'r' || props.position === 'l') {
        if (!props.height) {
          boxSetting.value.height = "100vh";
        }
        boxSetting.value.width = "375px";
      } else {
        if (!props.height) {
          console.log(props.height,'you de');
          
          boxSetting.value.height = "550px";
        }
        boxSetting.value.width = "100vw";
      }
    }
  }
});



const getAnimateMethod = (mode:string,reverse?:boolean,position?:string):any=>{
    const isreverse = reverse?"-reverse":''
    const hasPosition = position?`-${position}`:''
    return mode+isreverse+hasPosition
}


const fadeInEnter = (e: Element, done: any) => {
  gsap.from(e, { duration: 0.2, opacity: 0 });
  done();
};
const maskStyle = computed(() => {
  let style='';
  if (props.mode_type === "material") {
    style += "bg-black-mask";
  } else {
    style = "backdrop-filter backdrop-blur-sm backdrop-brightness-95";
    if (props.themeColor === "black") {
      style += " bg-black-mask backdrop-blur-sm backdrop-brightness-95";
    }
  }
  if (props.mode === "toast") {
    style += "mxm-modal-mask-toast";
  }
  return style;
});

const toastBoxStyle = computed(() => {
  let style = "";
  if (props.mode_type === "material") {
    if (props.themeColor === "black") {
      style += " bg-gray-900 p-6";
    } else {
      style += " bg-white p-6";
    }
  } else {
  }
  return style;
});
const dialogStyle = computed(() => {
  let style = "centerd";
  if (props.mode_type === "material") {
  } else {
    style += "px-6 py-3 backdrop-filter backdrop-blur-sm backdrop-brightness-105";
    if (props.themeColor === "black") {
      style += " bg-black-dialog text-gray-100";
    }
  }
  return style;
});

const boxStyle = computed(() => {
  let style = "shadow-md ";
  if (props.mode !== "frame") {
    style += "centerd";
  } else {
    if (props.position === 'r') {
      style += "fixed top-0 right-0 h-full";
    } else if (props.position === 'l') {
      style += "fixed top-0 left-0 h-full";
    } else if (props.position ==='t') {
      style += "fixed top-0 left-0 w-full";
    } else if (props.position === 'b') {
      style += "fixed bottom-0 left-0 w-full";
    }
  }
  return style;
});

const frameStyle = computed(() => {
  let style = "";
  if (props.mode_type === "material") {
    if (props.themeColor === "black") {
      style += "text-gray-100  bg-gray-700 p-6";
    } else {
      style += " bg-white p-6";
    }
  } else {
      if (props.themeColor === "black") {
          style += ' text-gray-100  bg-black-dialog backdrop-filter backdrop-blur-sm backdrop-brightness-95 '
      }else if(props.themeColor === "white") {
          style += ' text-gray-100 text-gray-700  backdrop-filter backdrop-blur-sm backdrop-brightness-95 '
    }
  }
  return style;
});

const boxMoveIn = (e: Element, done: any) => {
  let name
  props.mode === 'frame'?
  name=  getAnimateMethod(props.mode,false,props.position):
  name=  getAnimateMethod(props.mode,false)
  animate[name](e)
}

const handleCancel = async () => {
    props.onBeforeClose? await props.onBeforeClose():''   
    setTimeout(async ()=>{
        let name
        props.mode === 'frame'?
        name=  getAnimateMethod(props.mode,true,props.position):
        name=  getAnimateMethod(props.mode,true)
        await animate[name](modalBox.value)
        updateValue(false);
        props.remove && props.remove();
    })
};
</script>

<template>
  <Teleport :to="telTo">
    <div class="mxm-modal" v-if="modelValue">
      <div class="mxm-modal-container">
        <transition appear @enter="fadeInEnter" :css="false">
          <!-- :class='mode ==="toast"?"mxm-modal-mask-toast":""' -->
          <div
            class="mxm-modal-mask"
            :class="maskStyle"
            @click="handleCancel"
          ></div>
        </transition>
        <transition appear @enter="boxMoveIn" :css="false">
          <div class="mxm-modal-box" :class="boxStyle" ref="modalBox">
            <div
              v-if="mode === 'toast'"
              class="flex flex-col bg-white shadow-md px-5 py-3 w-auto"
            >
              <div class="px-5 text-lg font-medium">{{ title }}</div>
              <div class =' text-sm'>{{ content }}</div>
            </div>
            <div
              v-else-if="mode === 'dialog'"
              :class="dialogStyle"
              :style="{ width: boxSetting.width, height: boxSetting.height }"
            >
              <slot name="dialog">
                <div></div>
              </slot>
            </div>
            <div
              v-else-if="mode === 'frame'"
              :class="frameStyle"
              :style="{ width: boxSetting.width, height: boxSetting.height }"
            >
              <div class=' absolute right-5 top-5' @click="handleCancel"> close</div>
              <slot name="frame">
                <div></div>
              </slot>
            </div>
            <div
              v-else-if="mode === 'image'"
              :class="frameStyle"
              :style="{ width: boxSetting.width, height: boxSetting.height }"
            >
                <img src="" alt="">
            </div>
          </div>
        </transition>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.mxm-modal {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}
.mxm-modal-container {
  height: 100%;
  width: 100%;
}
.mxm-modal-mask {
  height: 100%;
  width: 100%;
  z-index: 99;
}
.mxm-modal-mask-toast {
  background: rgba(0, 0, 0, 0);
}
.mxm-modal-box {
  width: auto;
  height: auto;
  z-index: 100;
}
.centerd {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.bg-black-mask {
  background: rgba(0, 0, 0, 0.1);
}
.bg-black-dialog {
  background: rgba(0, 0, 0, 0.2);
}
</style>
