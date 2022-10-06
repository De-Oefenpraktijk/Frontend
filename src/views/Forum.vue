<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Forum" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Forum',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style></style>
