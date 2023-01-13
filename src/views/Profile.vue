<template>
  <Sidebar />
  <div class="main">
    <Topbar :title="Profile" />

    <div class="profile">
      <div class="mainCard left-card">
        <div class="mainCard__header">
            <span>{{ user.firstName + '\'s profile'}}</span>
        </div>
        <div class="profile_image">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile_image" />
        </div>
        <div class="personal_details">
          <div>
            <label>First Name</label>
            <input class="input-default" type="text" placeholder="First Name" v-model="user.firstName" v-if="isOwnProfile()" />
            <input class="input-default" type="text" placeholder="First Name" v-model="user.firstName" readonly v-else />
          </div>
          <div>
            <label>Last Name</label>
            <input class="input-default" type="text" placeholder="Last Name" v-model="user.lastName" v-if="isOwnProfile()" />
            <input class="input-default" type="text" placeholder="Last Name" v-model="user.lastName" readonly v-else />
          </div>
          <div>
            <label>Email</label>
            <input class="input-default" type="text" placeholder="Email" v-model="user.emailAddress" v-if="isOwnProfile()" />
            <input class="input-default" type="text" placeholder="Email" v-model="user.emailAddress" readonly v-else />
          </div>
          <div>
            <label>Residence place</label>
            <input class="input-default" type="text" placeholder="Residence" v-model="user.residencePlace" v-if="isOwnProfile()" />
            <input class="input-default" type="text" placeholder="Residence" v-model="user.residencePlace" readonly v-else />
          </div>
          <div class="buttons" v-if="isOwnProfile()">
            <button @click="saveChanges">Save changes</button>
            <button @click="changePassword">Change password</button>
          </div>
          <div class="btn btn--blue follow-button" v-if="isOwnProfile() == false" @click="sendFollowRequest()" style="cursor: pointer">Make connection</div>
        </div>
      </div>
      <div class="right-card">
        <div class="mainCard">
          <div class="mainCard__header">
            <div class="header-action">
              <span>Educations</span>
              <div class="addNew btn" v-if="isOwnProfile()" @click="showModal = true" style="cursor: pointer">Add</div>
            </div>
          </div>
          <div class="educations">
            <div v-for="education in educations" :key="education">
              <div class="education" style="cursor: no-drop" title="Remove education">
                <p>{{ education.name }} -</p>
                <p>{{ education.location }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="mainCard">
          <div class="mainCard__header">
            <div class="header-action">
              <span>Specializations</span> 
              <div class="addNew btn" v-if="isOwnProfile()" @click="showModalSpecialization = true"
                style="cursor: pointer">
                Add
              </div>
            </div>
          </div>
          <div class="educations">
            <div v-for="specialization in specializations" :key="specialization">
              <div class="education" style="cursor: no-drop" title="Remove specialization">
                <p>{{ specialization.name }}</p>
              </div>
            </div>
          
          </div>
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
            <option v-for="education in allEducations" :key="education.id" :value="education">
              {{ education.name }} || {{ education.school }}
            </option>
          </select>
        </div>
      </template>
    </modal>
  </Teleport>
  <Teleport to="body">
    <modal :show="showModalSpecialization" @close="showModalSpecialization = false" @save="saveSpecialization">
      <template #header>
        <h3>Add education to your profile</h3>
      </template>
      <template #body>
        <div class="modal-body">
          <label>Specialization name</label>
          <select v-model="chosenSpecialization">
            <option v-for="specialization in allSpecializations" :key="specialization.id" :value="specialization">
              {{ specialization.name }}
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
      showModalSpecialization: false,
      allEducations: [],
      allSpecializations: [],
      chosenSpecialization: {},
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
    await axios
      .get('http://20.126.206.207/specialization/getallspecializations', {
        headers: {
          Authorization: `Bearer ${store.token}`,
        },
      })
      .then((res) => {
        this.allSpecializations = res.data.collection;
      });
  },
  methods: {
    getUserId() {
      console.log(this.$route.params.id);
    },
    isOwnProfile() {
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
          console.log('Successfull saved!');
        })
        .catch((err) => {
          console.log('Something went wrong!');
        });
      this.showModal = false;
    },
    async saveSpecialization() {
      this.user.specializations.push(this.chosenSpecialization.id);
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
          console.log('Successfull saved!');
        })
        .catch((err) => {
          console.log('Something went wrong!');
        });
      this.showModalSpecialization = false;
    },
    async sendFollowRequest() {
      console.log(store.userId);
      console.log(this.user.id);
      await axios
        .post(
          `http://20.126.206.207/person/followuser`,
          {
            person1: store.userId,
            person2: this.user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          }
        )
        .then((res) => {
          console.log('Successfull saved!');
        })
        .catch((err) => {
          console.log(err);
        });
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
      console.log(this.educations);
      this.user.educations.forEach(async (education) => {
        await axios
          .get(`http://20.126.206.207/education/geteducation/${education}`, {
            headers: {
              Authorization: `Bearer ${store.token}`,
            },
          })
          .then((res) => {
            console.log(res);
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

}

.left-card {
  flex: 0 0 50%;
}

.right-card {
  flex: 0 0 50%;
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
  margin-bottom: 20px;
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

.follow-button {
  margin-top: 20px;
  padding: 20px;
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
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.educations .education {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  background: linear-gradient(0, #181818 0%, #424242 100%);
  color: #fff;
  display: flex;
  align-items: center;
}

.addNew {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 6px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
}
</style>
