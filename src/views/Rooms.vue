<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Rooms" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Rooms',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style></style>
