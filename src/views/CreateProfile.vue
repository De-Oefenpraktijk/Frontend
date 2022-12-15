<template>
  <div id="app">
    <div id="alert" v-if="alert">{{ alert }}</div>

    <form @submit.prevent="CreateProfile">
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
      <button type="submit">Sign up</button>
    </form>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import axios from 'axios';
  // Initialize Userfront
  Userfront.init("demo1234");
  const {user } = useAuth0();
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        username: user.nickname,
        emailAddress: user.email,
        residencePlace: "",
        alert: ""
      };
    },
    methods: {
      
    }

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