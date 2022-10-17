<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Workspaces" />
    <div class="mainCard">
      <div class="mainCard__body">
        <div class="card">
          <router-link
            :to="{
              name: 'workspace',
              params: { workspace: 'Couple and Family' },
            }"
          >
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
              alt="profile picture"
            />
          </router-link>
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Sleep"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Forensic"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Gero"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Introversion"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=High+Intelligent"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Stress"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Friendship"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
export default {
  name: 'Workspaces',
  components: {
    Sidebar,
    Topbar,
  },
};
</script>

<style scoped></style>
