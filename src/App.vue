<script setup lang="ts">
import Scrollview from './layouts/Scrollview/index.vue';
import Page from './layouts/Page/index.vue';

</script>

<template>
  <div class="app">


 <Scrollview>
      <Page>
           page-1
      </Page>
      <Page>
           page-2
      </Page>
 </Scrollview>
   </div>
</template>

<style>
.app{
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
</style>

