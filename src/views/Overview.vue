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
    var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp2M0F6YndkMzFmWmFldzJOcW1GVSJ9.eyJpc3MiOiJodHRwczovL29lZmVucHJha3RpamsuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5vZWZlbnByYWt0aWprLm5sIiwiaWF0IjoxNjcxMDA5NTkxLCJleHAiOjE2NzEwOTU5OTEsImF6cCI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0Iiwic2NvcGUiOiJyZWFkOnVzZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOnVzZXIiXX0.hjXh4Rx_V4hPkOWm2ok_w2IAufpsYTV95TXWpFrYiI3CQG_hBFdQ3a-XPQgTg2jeym7oRt_n5iNhLIDwODJY69SN-w6oWqE4GnVPGTyVxnPXIkMzVkuruj2fgTWLqgAvk5nIKovOoI6I5slm_Vh_wkessnrGanRi8XpUo0oIloGrBT8dFHWrVpwVVfXxEn0nd8fS96jcNbmZSZJgWF6a_0LXu8oOUqOrSYK_vZTY5Eu36GXFlLB3Nv6WTbmfkS0q9ewX6AIrAlgXM6DUHxkCssviJeeAT5PQ9RyMritx7XdPmK-nyxBnsdJG_jiP6pSho5VEnGFZbBMASjIMHBxnVQ"
    const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
    const userId = this.user.sub.split('|')[1];
    console.log('test1');
    try{
      await axios.get('https://localhost:7147/api/v1/User/GetUserById/' + userId, config);
    }
    catch(error){
      console.log(error);
      this.$router.push({ path: '/createProfile' });
    }
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
