<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Calendar" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Calendar',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style></style>
