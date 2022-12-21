<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Workspaces" />
    <div class="mainCard">
      <div class="mainCard__body">
        <div
          class="card"
          v-for="workspace in workspaces || []"
          :key="workspace.id"
        >
          <router-link
            :to="{
              name: 'workspace',
              params: { workspace: workspace.id },
            }"
          >
            <img
              :src="
                'https://via.placeholder.com/200x300?text=' + workspace.name
              "
              alt="profile picture"
            />
          </router-link>
        </div>
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
