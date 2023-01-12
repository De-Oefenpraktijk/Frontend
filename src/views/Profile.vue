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
          <label>Residence place</label>
          <input
            type="text"
            placeholder="Residence"
            v-model="user.residencePlace"
          />
          <div class="buttons" v-if="isOwnProfile()">
            <button @click="saveChanges">Save changes</button>
            <button @click="changePassword">Change password</button>
          </div>
        </div>
      </div>
      <div class="right">
        <h1>Educations</h1>
        <div class="educations">
          <div v-for="education in educations" :key="education">
            <div class="education">
              <p>{{ education.name }} -</p>
              <p>{{ education.location }}</p>
            </div>
          </div>
          <p class="newEducation" @click="showModal = true">+</p>
        </div>
        <h1>Specializations</h1>
        <div class="educations">
          <div v-for="specialization in specializations" :key="specialization">
            <div class="education">
              <p>{{ specialization.name }}</p>
            </div>
          </div>
          <p class="newEducation">+</p>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false" @save="saveEducation">
      <template #header>
        <h3>Add education to your profile</h3>
      </template>
      <template #body>
        <div class="modal-body">
          <label>Education name</label>
          <!-- select with options of allEducations, where the chosen education is stored -->
          <select v-model="chosenEducation">
            <option
              v-for="education in allEducations"
              :key="education.id"
              :value="education"
            >
              {{ education.name }} || {{ education.school }}
            </option>
          </select>
        </div>
      </template>
    </modal>
  </Teleport>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import { store } from '../store.js';
import axios from 'axios';
import Modal from '../components/Modal.vue';

export default {
  name: 'Profile',
  components: {
    Sidebar,
    Topbar,
    Modal,
  },
  data() {
    return {
      user: {},
      educations: [],
      specializations: [],
      showModal: false,
      allEducations: [],
      chosenEducation: {},
    };
  },
  async mounted() {
    await this.getUserDetails();
    await axios
      .get('http://20.126.206.207/education/geteducations', {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      })
      .then((res) => {
        this.allEducations = res.data.collection;
      });
  },
  methods: {
    getUserId() {
      console.log(this.$route.params.id);
    },
    isOwnProfile() {
      console.log('test');
      if (store.userId == this.$route.params.id) {
        return true;
      }
      return false;
    },
    async saveEducation() {
      this.user.educations.push(this.chosenEducation.id);

      await axios
        .put(
          `http://20.126.206.207/user/updateuser/${this.user.id}`,
          {
            emailAddress: this.user.emailAddress,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            residencePlace: this.user.residencePlace,
            enrollmentDate: this.user.enrollmentDate,
            id: this.user.id,
            residencePlace: this.user.residencePlace,
            role: this.user.role,
            username: this.user.username,
            educations: this.user.educations,
            specializations: this.user.specializations,
          },
          {
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          }
        )
        .then((res) => {
          console.log("Successfull saved!");
        })
        .catch((err) => {
          console.log("Something went wrong!");
        });
        this.showModal = false;
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

      this.user.educations.forEach(async (education) => {
        await axios
          .get(`http://20.126.206.207/education/geteducation/${education}`, {
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          })
          .then((res) => {
            this.educations.push(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      this.user.specializations.forEach(async (specialization) => {
        await axios
          .get(
            `http://20.126.206.207/specialization/getspecialization/${specialization}`,
            {
              headers: {
                Authorization: `Bearer ${store.token}`,
              },
            }
          )
          .then((res) => {
            this.specializations.push(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    async saveChanges() {
      await axios
        .put(
          `http://20.126.206.207/user/updateuser/${this.$route.params.id}`,
          {
            emailAddress: this.user.emailAddress,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            residencePlace: this.user.residencePlace,
            enrollmentDate: this.user.enrollmentDate,
            id: this.user.id,
            residencePlace: this.user.residencePlace,
            role: this.user.role,
            username: this.user.username,
            educations: this.educations,
            specializations: this.specializations,
          },
          {
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          }
        )
        .then((res) => {
          this.$router.push(`/`);
          alert('Changes saved!');
        })
        .catch((err) => {
          alert('Something went wrong, please try again later');
        });
    },
    changePassword() {
      var options = {
        method: 'POST',
        url: 'https://oefenpraktijk.eu.auth0.com/dbconnections/change_password',
        headers: { 'content-type': 'application/json' },
        data: {
          client_id: 'CzLZTVeBEJ4cRvuMDuQvwOI0320x8Leo',
          email: this.user.emailAddress,
          connection: 'Username-Password-Authentication',
        },
      };

      axios
        .request(options)
        .then(function (response) {
          alert(response.data);
        })
        .catch(function (error) {
          console.error(error);
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

.personal_details button:hover {
  background-color: #5e5e5e;
  color: #ffffff;
  cursor: pointer;
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
