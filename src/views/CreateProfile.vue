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
    
        createProfile(){
            var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp2M0F6YndkMzFmWmFldzJOcW1GVSJ9.eyJpc3MiOiJodHRwczovL29lZmVucHJha3RpamsuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5vZWZlbnByYWt0aWprLm5sIiwiaWF0IjoxNjcwODM0MDM2LCJleHAiOjE2NzA5MjA0MzYsImF6cCI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0Iiwic2NvcGUiOiJyZWFkOnVzZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOnVzZXIiXX0.AQ0CWIGwKnni-bQzsEIHN3MdZm7JdtKKlE1L972JEDSPo0WnVn9UW3wNTYmzBdhPhiliPp4o7WFMdIKz_W_StsdHEq9nC8INdctStn-xnE5vUdOnIvKXlgZsKWvsiZkrLOOA1oqymeyB3Zg1WGozuG8Ma7BDY5wk6czNj_rDNUv7IjDdZuARCA8uu1XYZ1urjVIIP_xiahjDpuLYrG7N7n02Po99QHVNQJWpey8wa2f7VYQODJ87ahYwRlpMMRRsdBJCrz2so2OXmNNyEfZeBm_OsXzzzHwLPRSH3GLwBj9Z1jbbPu37m5N-kGAbh5tG2-ONYaoadndgt-rdPlSHmw"
    const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
    const userId = this.user.sub.split('|')[1];
    var body = {
        firstName: this.firstName, lastName: this.lastName, username: this.username, emailAddress: this.emailAddress, residencePlace: this.residencePlace, id: userId
    };
    var request = await axios.post("https://localhost:7147/api/v1/User/InsertUser", body, config);
    if(request.status == 200){
      this.$router.push({ path: '/' });
    }
    else{
      this.alert = "Passwords must match";
    }
        }
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