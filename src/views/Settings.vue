<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Settings" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Settings',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style scoped></style>
