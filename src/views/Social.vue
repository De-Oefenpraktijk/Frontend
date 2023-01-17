<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Social" />
  </div>
</template>



<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Social',
  components: {
    Topbar,
    Sidebar,
  },
  data() {
    return {
      openRequests: [],
      friends: [],
    };
  },
  methods: {
    async getWorkspaceData() {
      const config = {
        headers: { Authorization: `Bearer ${store.token}` },
      };
      var test = await axios.get(
        'http://20.126.206.207/getRequest/'
      ).then((response) => {
        this.openRequests = response.data.openRequests;
      });
    },
  }
};
</script>

<style scoped></style>
