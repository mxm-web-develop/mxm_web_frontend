<script lang="ts" setup>
import Mxm_icon from "./mxm_icon.vue";
import { computed, ref } from "vue";
import ToolbarList from "./toolbarList.vue";
// const props = defineProps<{

// }>
const emit = defineEmits(["activeOnchange", "wrappedOnchange"]);

const data = ref<{
  wrapped: boolean;
  actived: string | undefined;
  coverPage: boolean;
}>({
  wrapped: false,
  actived: undefined,
  coverPage: true,
});
const controlList = [
  {
    iconName: "icon-image-text",
  },
  {
    iconName: "icon-comment",
  },
  {
    iconName: "icon-music",
  },
];
const itemOnclick = (item: any) => {
  if (data.value.actived !== item.iconName) {
    data.value.actived = item.iconName;
  } else {
    data.value.actived = undefined;
  }
  emit("activeOnchange", data.value.actived);
};
const isActived = computed(() => {
  return function (iconName: string) {
    if (data.value.actived === iconName) {
      return true;
    } else {
      console.log("bupipei", iconName, data.value.actived);

      return false;
    }
  };
});
</script>

<template>
  <div
    class="
      z-30
      bg-slate-800
      fixed
      top-5
      right-5
      md:top-10 md:right-20
      shadow
      px-3
      pb-2
      pt-3
      rounded-full
    "
  >
    <div class="flex flex-row-reverse items-center">
      <div class="action cursor-pointer">
        <div v-if="data.wrapped" @click="() => (data.wrapped = false)">
          <Mxm_icon icon-name="icon-gengduo" iconfont :size="18"></Mxm_icon>
        </div>

        <div v-else @click="() => (data.wrapped = true)">
          <Mxm_icon
            icon-name="icon-undraw_handcrafts_curved_arrow"
            iconfont
            :size="18"
          ></Mxm_icon>
        </div>
      </div>
      <div v-if="!data.wrapped" class="flex items-center">
        <ToolbarList
          v-for="(i, index) in controlList"
          :key="index"
          :icon-name="i.iconName"
          @click="itemOnclick(i)"
          :isActived="isActived(i.iconName)"
        ></ToolbarList>
      </div>
    </div>
  </div>
</template>
