<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Articles" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Articles',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style></style>
