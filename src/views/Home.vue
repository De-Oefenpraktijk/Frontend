<template>
  <div class="home">
    <Sidebar />
    <div class="main">
      <Topbar />
      <Overview />
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import Overview from '../components/Overview.vue';

export default {
  name: 'Home',
  components: {
    Topbar,
    Sidebar,
    Overview,
  },
};
</script>

<style>
.main {
  margin-left: 250px;
}
</style>
