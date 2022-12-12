<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Overview" />
    <div class="statistics">
      <div class="statistics__card">
        <div class="statistics__card__header">
          <span>Messages</span>
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
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Couple+And+Family"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Sleep"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Forensic"
            alt="profile picture"
          />
        </div>
        <div class="card">
          <img
            src="https://via.placeholder.com/200x300?text=Gero"
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
    return {
      user
    };
  },
  async mounted(){
    var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp2M0F6YndkMzFmWmFldzJOcW1GVSJ9.eyJpc3MiOiJodHRwczovL29lZmVucHJha3RpamsuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5vZWZlbnByYWt0aWprLm5sIiwiaWF0IjoxNjcwODM0MDM2LCJleHAiOjE2NzA5MjA0MzYsImF6cCI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0Iiwic2NvcGUiOiJyZWFkOnVzZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOnVzZXIiXX0.AQ0CWIGwKnni-bQzsEIHN3MdZm7JdtKKlE1L972JEDSPo0WnVn9UW3wNTYmzBdhPhiliPp4o7WFMdIKz_W_StsdHEq9nC8INdctStn-xnE5vUdOnIvKXlgZsKWvsiZkrLOOA1oqymeyB3Zg1WGozuG8Ma7BDY5wk6czNj_rDNUv7IjDdZuARCA8uu1XYZ1urjVIIP_xiahjDpuLYrG7N7n02Po99QHVNQJWpey8wa2f7VYQODJ87ahYwRlpMMRRsdBJCrz2so2OXmNNyEfZeBm_OsXzzzHwLPRSH3GLwBj9Z1jbbPu37m5N-kGAbh5tG2-ONYaoadndgt-rdPlSHmw"
    const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
    const userId = this.user.sub.split('|')[1];
    await axios.get('https://localhost:7147/api/v1/User/GetUserById/' + userId, config);
    console.log('ai');
    console.log(i);

  },
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
