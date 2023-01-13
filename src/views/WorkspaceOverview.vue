<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Workspaces" />
    <div class="mainCard__body">
        <div
          class="card workspace-card"
          v-for="workspace in workspaces || []"
          :key="workspace.id"
        >
          <router-link
            :to="{
              name: 'workspace',
              params: { workspace: workspace.id },
            }"
          >
            <div class="workspace-card-content-wrapper">
              <div class="workspace-card-content">
              <span class="workspace-card-content__title">{{ workspace.name }}</span>
              </div>
            </div>
            <img :src="workspace.imageFile" />
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import axios from 'axios';
import { store } from '../store';
export default {
  name: 'Workspaces',
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {
      workspaces: [],
    };
  },
  methods: {
    async getData() {
      const config = {
        headers: { Authorization: `Bearer ${store.token}` },
      };
      var test = await axios.get(
        'http://20.126.206.207/workspace/getworkspaces',
        config
      );
      console.log(test.data.collection);
      this.workspaces = test.data.collection;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.card {
  max-width: 280px;
}
</style>
