<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Workspaces" />
    <div class="mainCard">
      <div class="mainCard__body">
        <div class="card" v-for="(workspace) in workspaces.slice(0,2)" :key="workspace.id">
                    <router-link
            :to="{
              name: 'workspace',
              params: { workspace: index.workspace.id },
            }"
          >
          <img
            src="https://via.placeholder.com/200x300?text=" + {{index}}.{{workspace.name}}
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
import {store} from '../store';
export default {
  name: 'Workspaces',
  components: {
    Sidebar,
    Topbar,
  },
  data(){
    return{
    workspaces: []
    }
  },
  methods:{
    async getData(){
      const config = {
            headers: { Authorization: `Bearer ${store.token}` }};
     this.workspaces = await axios.get('http://20.126.206.207/workspace/getworkspaces', config)
    }
  },
  mounted(){
    this.getData();
  }
};
</script>

<style scoped></style>
