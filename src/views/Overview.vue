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
        <div
          class="card"
          v-for="workspace in workspaces.slice(0, 4) || []"
          :key="workspace.id"
        >
          <router-link
            :to="{
              name: 'workspace',
              params: { workspace: workspace.id },
            }"
          >
            <img :src="workspace.imageFile" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Recent news</span>
      </div>
      <div class="mainCard__body recentNews">
        <div class="card" v-for="newsItem in newsItems" :key="newsItem">
          <a :href="newsItem.link" target="_blank">
            <h1>{{ newsItem.title }}</h1>
            <p>{{ newsItem.description }}</p>
          </a>
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
import { store } from '../store';

export default {
  name: 'Overview',
  components: {
    Topbar,
    Sidebar,
  },
  data() {
    return {
      workspaces: [],
      newsItems: [],
    };
  },
  methods: {
    async getData() {
      const config = {
        headers: { Authorization: `Bearer ${store.token}` },
      };
      var test = await axios.get(
        'http://20.126.206.207/workspace/getworkspaces',
        config
      );
      console.log(test.data.collection);
      this.workspaces = test.data.collection;

      // News
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/https://www.sciencedaily.com/rss/top/health.xml',
          {
            headers: {
              origin: 'http://oefenpraktijk.nl/',
            },
          }
        )
        .then((res) => {
          let parser = new DOMParser();
          let xmlDoc = parser.parseFromString(res.data, 'text/xml');

          for (let index = 0; index < 12; index++) {
            this.newsItems.push({
              title: xmlDoc.getElementsByTagName('title')[index].innerHTML,
              link: xmlDoc.getElementsByTagName('link')[index].innerHTML,
              description: xmlDoc
                .getElementsByTagName('description')
                [index].innerHTML.substring(
                  0,
                  xmlDoc.getElementsByTagName('description')[index].innerHTML
                    .length - 13
                ),
            });
          }
          this.newsItems.splice(0, 2);
        });
    },
  },
  setup() {
    const { user } = useAuth0();
    return {
      user,
    };
  },
  mounted() {
    this.getData();
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

.recentNews > .card > a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  text-decoration: none;
  color: #000;
}

.recentNews > .card > a > h1 {
  font-size: 1.2rem;
  margin: 0;
  text-align: center;
}

.recentNews > .card > a > p {
  font-size: 0.8rem;
  margin: 0;
}

.card {
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
