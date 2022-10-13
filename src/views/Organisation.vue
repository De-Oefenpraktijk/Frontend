<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Organisation" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Organisation',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style scoped></style>
