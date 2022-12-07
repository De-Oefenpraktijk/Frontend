<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Search" />
    <div class="searchbar">
      <div class="searchbar-icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input type="text" class="searchbar-input" placeholder="Search..." />
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <h2>Related people</h2>
      </div>
      <div class="mainCard__body persons">
        <div class="card person">
          <div class="card__image">
            <img src="https://via.placeholder.com/150" alt="profile picture" />
          </div>
          <div class="card__name">
            <h3>John Doe</h3>
          </div>
          <div class="card__details">
            <h3>Stress</h3>
            <h3>Depression</h3>
            <h3>GGZ Helmond</h3>
          </div>
        </div>
        <div class="card person">
          <div class="card__image">
            <img src="https://via.placeholder.com/150" alt="profile picture" />
          </div>
          <div class="card__name">
            <h3>John Doe</h3>
          </div>
          <div class="card__details">
            <h3>Stress</h3>
            <h3>Depression</h3>
            <h3>GGZ Helmond</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <h2>Related news</h2>
      </div>
      <div class="mainCard__body news">
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
        <div class="card">
          <img src="https://via.placeholder.com/200x100?text=News" alt="profile picture" />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <h2>Related forum questions</h2>
      </div>
      <div class="mainCard__body forum">
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
      </div>
    </div>
  </div>
  {{ewa}}
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import Axios from 'axios';
export default {
  name: 'Search',
  components: {
    Topbar,
    Sidebar,
  },
  setup() {
    const { getAccessTokenSilently} = useAuth0();
    return {
      getAccessTokenSilently
    };
  },
  data() {
    return {
      ewa: '',
    },

      Axios.get('http://20.126.206.207/Person/getUser?username=Rense013', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp2M0F6YndkMzFmWmFldzJOcW1GVSJ9.eyJpc3MiOiJodHRwczovL29lZmVucHJha3RpamsuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5vZWZlbnByYWt0aWprLm5sIiwiaWF0IjoxNjcwMjMyODM4LCJleHAiOjE2NzAzMTkyMzgsImF6cCI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0Iiwic2NvcGUiOiJyZWFkOnVzZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOnVzZXIiXX0.KvhlhywFiBliyLx0g3GVcWLPQVzsRFyhkf9Ou8fMRA0yS6CY3e3RL2tMDEj1B2fX-aSLyU5mzic49oI-Fo6os3bMej9EzAnztaclz1h_rHtdV9J_vTKMbzKmGRSsY9zX7enlLj0DMOQ4FbvrBH-_p2iCNt0VBin-DR__Tzym7LEpy4JlXHGieHeIbB4D6G5pBww0TzbPsueqKtl0OZqrmtG0AIekuCyzXcxMjKtsmr_RIoHWRo0SJOLDfqcsE9pdtAYc825bIFG2SsjNS-WF25rXsyPkGk7IJ9Q83e07dJH_L84oYVW55SBSiFFCeJmUz2m4FiidcbSSsUmNXax3DQ',
        }
      })
        .then(response => (this.ewa = response))
        .catch((error) => {
          console.log(error);
        });
  },
  methods: {
    async getAccessToken() {
      const token = await this.getAccessTokenSilently();
      // localStorage.setItem('token', token);
    },
  },
};

</script>

<style scoped>
.searchbar {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  margin-top: 50px;
  padding: 10px;
  width: 400px;
}

.searchbar-icon {
  margin-right: 10px;
}

.searchbar-input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  width: 100%;
}

.searchbar-input::placeholder {
  color: #b3b3b3;
}

.searchbar-input:focus::placeholder {
  color: transparent;
}

.persons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.person {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #ebe9e9;
  width: 100%;
  margin: 10px 0;
}

.card__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
}

.card__details h3 {
  background-color: #cccccc;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px;
}

.card__details h3:first-of-type {
  margin-left: 100px;
}

.card__details {
  display: flex;
  align-items: center;
}

.forum>.card,
.news>.card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
