<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Search" />
    <div class="searchbar">
      <div class="searchbar-icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <form>
        <input type="search" class="searchbar-input" v-model="search" />
        <button type="button" class="searchbar-button" v-on:click="getData">
          Search
        </button>
      </form>
    </div>
    <!-- Testing purposes -->
    <table class="table table-sm table-light table-bordered">
      <tbody>
        <tr v-for="(result, index) in result" :key="index">
          <td>{{ result.Firstname }}</td>
          <td>{{ result.Username }}</td>
          <td>{{ result.Email }}</td>
          <td>{{ result.Role }}</td>
        </tr>
      </tbody>
    </table>

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
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import axios from 'axios';
import { store } from '../store.js'

export default {
  name: 'Search',
  components: {
    Topbar,
    Sidebar,
  },
  data: function () {
    return {
      result: [],
      search: ""
    };
  },
  watch: {
    search: function (val) {
      if (!val) {
        this.result = [];
      }
    }
  },
  methods: {
    getData: function () {
      const config = {
        headers: {
          Authorization: `Bearer ${store.token} `
        }
      }
      const url = `http://20.126.206.207/Person/getAllUsers`;
      axios.get(url, config)
        .then(data => {
          data.data.collection.forEach(element => {
            this.result.push(element.Values.n.Properties)
          });
          console.log(this.result)
        });
    }
  }
}
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
