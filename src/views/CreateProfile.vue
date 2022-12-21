<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form>
      <label>
        Voornaam
        <input type="text" v-model="firstName" />
      </label>
      <label>
        Achternaam
        <input type="text" v-model="lastName" />
      </label>
      <label>
        Email
        <input type="email" v-model="emailAddress" />
      </label>
      <label>
        Gebruikersnaam
        <input type="text" v-model="username" />
      </label>
      <label>
        Land
        <input type="text" v-model="residencePlace" />
      </label>
      <div @click="createProfile">Sign up</div>
    </form>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import axios from "axios";
import { store } from "../store";

export default {
  data() {
    const auth0 = useAuth0();
    return {
      user: auth0.user,
      firstName: "",
      lastName: "",
      username: "",
      emailAddress: "",
      residencePlace: "",
      alert: "",
    };
  },
  methods: {
    async createProfile() {
      const config = {
        headers: { Authorization: `Bearer ${store.token}` },
      };
      const userId = this.user.sub.split("|")[1];
      var body = {
        firstName: this.firstName,
        lastName: this.lastName,
        username: this.username,
        emailAddress: this.emailAddress,
        residencePlace: this.residencePlace,
        enrollmentDate: "2022-12-15T11:31:53.817Z",
        id: userId,
      };
      console.log(body);
      console.log("pray");
      console.log(userId);
      var request = await axios.put(
        "http://20.126.206.207/User/updateuser/" + userId,
        body,
        config
      ).then(()=>{
        this.$router.push('/');
      }
      ).catch(() =>{
        this.alert = "Error";
      })
    },
  },
};
</script>

<style scoped>
button,
input {
  display: block;
  margin-bottom: 10px;
}

#alert {
  color: red;
  margin-bottom: 10px;
}
</style>