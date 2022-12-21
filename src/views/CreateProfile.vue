<template>
  <div id="form">
    <form @submit.prevent="saveUser">
      <h1>Complete your account</h1>
      <div class="input">
        <label>First name</label>
        <input type="text" v-model="firstName" />
      </div>
      <div class="input">
        <label>Last name</label>
        <input type="text" v-model="lastName" />
      </div>
      <div class="input">
        <label>Username</label>
        <input type="text" v-model="username" />
      </div>
      <div class="input">
        <label>Residence Place</label>
        <input type="text" v-model="residencePlace" style="margin-bottom: 0" />
        <label style="margin-bottom: 20px; font-size: 12px">Optional</label>
      </div>
      <button>Save</button>
      <p class="error">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #363740;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: #ffffff;
  width: 40%;
  border-radius: 40px;
  -webkit-box-shadow: 0px 0px 5px 10px rgba(94, 94, 94, 1);
  -moz-box-shadow: 0px 0px 5px 10px rgba(94, 94, 94, 1);
  box-shadow: 0px 0px 5px 10px rgba(94, 94, 94, 1);
}

input {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #363740;
  border-radius: 10px;
  outline: none;
  width: 100%;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

button {
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #363740;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #585968;
}

.error {
  margin-top: 30px;
  color: red;
}
</style>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      residencePlace: '',
      error: '',
      user: {},
    };
  },
  mounted() {
    console.log(store.userId);
  },
  methods: {
    async saveUser() {
      if (this.firstName === '') {
        this.error = 'Please enter your first name!';
        return;
      }
      if (this.lastName === '') {
        this.error = 'Please enter your last name!';
        return;
      }
      if (this.username === '') {
        this.error = 'Please enter your username!';
        return;
      }

      await axios
        .get(`http://20.126.206.207/person/getuser?username=${this.username}`, {
          headers: {
            Authorization: `Bearer ${store.token}`,
          },
        })
        .then((resp) => {
          if (resp.data.collection.length > 0) {
            this.error = 'Username already exists!';
          } else {
            axios
              .get(`http://20.126.206.207/user/getuserbyid/${store.userId}`, {
                headers: {
                  Authorization: `Bearer ${store.token}`,
                },
              })
              .then((resp) => {
                this.user = resp.data;
                console.log(this.user.emailAddress);
                axios
                  .put(
                    `http://20.126.206.207/user/updateuser/${store.userId}`,
                    {
                      id: store.userId,
                      firstName: this.firstName,
                      lastName: this.lastName,
                      username: this.username,
                      emailAddress: this.user.emailAddress,
                      password: this.user.password,
                      enrollmentDate: this.user.enrollmentDate,
                      role: this.user.role,
                      educations: this.user.educations,
                      specializations: this.user.specializations,
                      residencePlace: this.user.residencePlace,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${store.token}`,
                      },
                    }
                  )
                  .then((resp) => {
                    console.log(resp);
                    this.$router.push({
                      name: 'overview',
                    });
                  });
              });
          }
        });
    },
  },
};
</script>
