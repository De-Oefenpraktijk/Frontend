<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Messages" />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Messages',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style></style>
