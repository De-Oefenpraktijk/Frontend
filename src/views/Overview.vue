<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Overview" />
    <div class="statistics">
      <div class="statistics__card">
        <div class="statistics__card__header">
          <span @click="">Messages</span>
        </div>
        <h1>{{ this.$root.mockData.overview.messages }}</h1>
      </div>
      <div class="statistics__card">
        <div class="statistics__card__header">
          <span>Notifications</span>
        </div>
        <h1>{{ this.$root.mockData.overview.notifications }}</h1>
      </div>
      <div class="statistics__card">
        <div class="statistics__card__header">
          <span>Active posts</span>
        </div>

        <h1>{{ this.$root.mockData.overview.activePosts }}</h1>
      </div>
      <div class="statistics__card">
        <div class="statistics__card__header">
          <span>Upcoming events</span>
        </div>

        <h1>{{ this.$root.mockData.overview.upcomingEvents }}</h1>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Workspaces</span>
      </div>
      <div class="mainCard__body">

        <div class="card" v-for="(workspace) in workspaces.slice(0,2)" :key="workspace.id">
          <img
            src="https://via.placeholder.com/200x300?text=" + {{index}}.{{workspace.name}}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Recent news</span>
      </div>
      <div class="mainCard__body recentNews">
        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>

        <div class="card">
          <img
            src="https://via.placeholder.com/200x100?text=News"
            alt="profile picture"
          />
          <p>
            In life you need colors. From all of us here, I want to wish you
            happy painting and God bless, my friends. The least little bit can
            do so much. Isn't that fantastic that you can make whole mountains
            in minutes?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import axios from 'axios';

export default {
  name: 'Overview',
  components: {
    Topbar,
    Sidebar,
  },
  setup(){
    const { user } = useAuth0();
     const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp2M0F6YndkMzFmWmFldzJOcW1GVSJ9.eyJpc3MiOiJodHRwczovL29lZmVucHJha3RpamsuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5vZWZlbnByYWt0aWprLm5sIiwiaWF0IjoxNjcxMTAxNjgyLCJleHAiOjE2NzExODgwODIsImF6cCI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0Iiwic2NvcGUiOiJyZWFkOnVzZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOnVzZXIiXX0.0_rZRzHP9DMC-6gfzPO130EkdenLLjXocXui4pECcVLIITobi5GHF5N2C0Ug5-_FUC7T2Qq-GSZ5cELAlMhg-QMsWRu9g1CX9gnfNIvoqSqg4VPu_wZ9BWMQ7NtdgxJyp6mxdToVerR_0q7A1KSYXwodwQEkEqMmh3aTA9Wh8pKPhVvZCe9iTW-sGd7LIUnxaA7zojZk-2yGPAzNr5a-8RU40zOVDa5yJLsyz1PSdD2f2RITbkaOEX_DWSkLFvwdqqZBx1Eihh4rFxwK9n0jYYiuxCz7M_B3NHMIyxnsU8sbRdjaJ6vvwE4I2smYVYwncuDLEKqOMpZeXjmWgimRUQ";
      const config = {
            headers: { Authorization: `Bearer ${token}` }};
    const workspaces = axios.get('http://20.126.206.207/workspace/getworkspaces', config)
    return {
      workspaces,
      user
    };
  },
  async mounted(){
  }
};
</script>

<style scoped>
.statistics {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.statistics__card {
  flex: 1 1 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.statistics__card__header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #f5f5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.recentNews > .card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
