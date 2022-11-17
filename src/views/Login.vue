<template>
  <div class="login">
    <img src="../../public/logo.svg" alt="logo" />
    <div class="login_text">
      <h1>Oefenpraktijk</h1>
    </div>
    <Button class="login_button" @click="signIn"> Sign in</Button>
    <Button class="login_button" @click="signInUsingMinddistrict">
      Sign in using Minddistrict
    </Button>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
    const { loginWithRedirect } = useAuth0();
    return {
      signIn: () => {
        loginWithRedirect();
      },
    };
  },
  mounted() {
    this.$router.push({ path: '/login' });
  },
  name: 'Login',
  methods: {
    signInUsingMinddistrict() {
      alert('Not implemented yet...');
    },
  },
};
</script>

<style scoped>
.login {
  display: grid;
  place-items: center;
  align-content: center;
  background-color: #f5f5f5;
  height: 100vh;
}

.login_text {
  color: gray;
}

.login_button {
  margin-top: 10px;
  padding: 20px;
  width: 250px;
  background-color: #0071ce;
  color: white;
  border: none;
  border-radius: 15px;
  font-size: 18px;
}

.login_button:hover {
  background-color: gray;
  cursor: pointer;
}
</style>
