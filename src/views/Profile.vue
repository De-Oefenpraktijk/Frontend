<template>
  <Sidebar />
  <div class="main">
    <Topbar :title="Profile" />
    <div class="profile">
      <div class="left">
        <div class="profile_image">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile_image"
          />
        </div>
        <div class="personal_details">
          <label>First Name</label>
          <input
            type="text"
            placeholder="First Name"
            v-model="user.firstName"
          />
          <label>Last Name</label>
          <input type="text" placeholder="Last Name" v-model="user.lastName" />
          <label>Email</label>
          <input type="text" placeholder="Email" v-model="user.emailAddress" />
          <div class="buttons">
            <button>Save changes</button>
            <button>Change password</button>
          </div>
        </div>
      </div>
      <div class="right">
        <h1>Educations</h1>
        <div class="educations">
          <div v-for="education in user.educations" :key="education">
            <div class="education">
              <p>{{ education }}</p>
            </div>
          </div>
          <p class="newEducation">+</p>
        </div>
        <h1>Specializations</h1>
        <div class="educations">
          <div
            v-for="specialization in user.specializations"
            :key="specialization"
          >
            <div class="education">
              <p>{{ specialization }}</p>
            </div>
          </div>
          <p class="newEducation">+</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'Profile',
  components: {
    Sidebar,
    Topbar,
  },
  data() {
    return {
      user: {},
    };
  },
  async mounted() {
    await this.getUserDetails();
  },
  methods: {
    getUserId() {
      console.log(this.$route.params.id);
    },
    async getUserDetails() {
      await axios
        .get(
          `http://20.126.206.207/user/getuserbyid/${this.$route.params.id}`,
          {
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          }
        )
        .then((res) => {
          this.user = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  height: 80vh;
}

.left {
  width: 50%;
  height: 100%;
  background-color: #c8c8c8;
  border-radius: 10px;
  padding: 20px;
}

.profile_image {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile_image img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.personal_details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.personal_details input {
  width: 300px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  padding: 10px;
}

.personal_details .buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.personal_details button {
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  color: #5e5e5e;
}

.right {
  width: 50%;
  height: 100%;
  background-color: #c8c8c8;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}

.right h1 {
  font-size: 20px;
}

.educations,
.specializations {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  height: 180px;
}

.educations .education {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d1d1d1;
  border-radius: 10px;
  margin: 10px;
  height: 40px;
  padding: 0 10px;
}

.educations .newEducation {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d1d1d1;
  border-radius: 10px;
  margin: 10px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #5e5e5e;
}
</style>
