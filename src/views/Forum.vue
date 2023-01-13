<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Forum" />

    <div class="mainCard">
      <div class="content-padding">
      <div class="btn btn--blue" style="margin-bottom:20px;" @click="showModal = true">New Topic</div>
        <div class="search-actions">
        <input class="input-default" type="text" placeholder="Search topic" />
        <div class="btn btn--light btn--fake">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          Categories
        </div>
        <div class="btn btn--light btn--fake">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
          Tags
        </div>
      </div>
      </div>
    </div>

    <div class="topics">
          <div class="topic" v-for="topic in topics" :key="topic.id" @click="$router.push(`/topic/${topic.id}`)">
            <div class="flex">
            <span class="topic__title">{{ topic.title }}</span>
            <span class="topic__category">Uncategorised</span>
            </div>
            <span class="topic__username">posted by <span>@{{ topic.userName }}</span></span>
            <div class="topic__actions">
              
              <div class="btn btn--light"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>{{ topic.comments.length }}</div>
            </div>
          </div>
      </div>

  </div>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false" @save="postTopic">
      <template #header>
        <h3>New Topic</h3>
      </template>
      <template #body>
        <form>
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title" />
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <select id="category">
              <option value="uncategorised">Uncategorised</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tags">Tags</label>
            <select id="tags">
              <option value="notags">No tags</option>
            </select>
          </div>
          <div class="form-group">
            <label for="content">Content</label>
            <textarea id="content" v-model="content"></textarea>
          </div>
        </form>
      </template>
    </modal>
  </Teleport>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import axios from 'axios';
import Modal from '../components/Modal.vue';
import { store } from '../store.js';

export default {
  name: 'Forum',
  components: {
    Topbar,
    Sidebar,
    Modal,
  },
  data() {
    return {
      topics: [],
      showModal: false,
      title: '',
      content: '',
    };
  },
  mounted() {
    this.getTopics();
  },
  methods: {
    getTopics() {
      axios
        .get('http://20.126.194.16/api/v1/ForumPost')
        .then((response) => {
          this.topics = response.data;
          console.log(this.topics);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    randomDate() {
      const start = new Date(2020, 0, 1);
      const end = new Date();
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      ).toDateString();
    },
    postTopic() {
      axios
        .post('http://20.126.194.16/api/v1/ForumPost', {
          title: this.title,
          formBody: this.content,
          userId: store.userId,
          userName: store.username,
        })
        .then((resp) => {
          this.$router.push(`/topic/${resp.data}`);
        });
    },
  },
};
</script>

<style scoped>
.sub-topbar {
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  margin-bottom: 20px;
  margin-right: 60px;
}

.search {
  margin-right: 20px;
}

.forum-search {
  padding: 20px 12px;
}

.search-actions {
  display: flex;
}

.search input {
  width: 300px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px;
}

.new {
  display: flex;
  justify-content: center;
  align-items: center;
}

.new button {
  width: 100px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #000000;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
}

.new button:hover {
  background-color: #454545;
}

.topics .topic {
  padding: 14px 8px;
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 20px;
  border: 1px solid #e3e2e7;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.topic .topic__username {
  font-size: 12px;
  color: rgb(37, 131, 255);
}

.topic .topic__title {
  font-size: 20px;
  font-weight: 600;
}

.topic .topic__category {
  font-size: 10px;
  padding: 8px 5px;
  line-height: 10px;
  margin: auto 0;
  background-color: #000;
  border-radius: 6px;
  color: #fff;
  margin-left: 6px;
}

.filters {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 20px;
}

.filters select {
  margin: 20px;
  width: 200px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
}

.sortOn a {
  margin: 20px;
  color: #000000;
  font-weight: bold;
  text-decoration: none;
}

.sortOn a:hover {
  color: #ffaa00;
}

.topics {
  padding: 0 12px;
}

.topics table {
  width: 100%;
  border-collapse: collapse;
}

.topics table th {
  text-align: left;
  padding: 10px;
  border-bottom: 1px solid #000000;
}

.topics table td {
  padding: 10px;
  border-bottom: 1px solid #000000;
}

.topics table tr:hover {
  background-color: #f2f2f2;
  cursor: pointer;
}

.topics table tr:first-child {
  background-color: #000000;
  color: #ffffff;
}

.topics table tr:first-child:hover {
  cursor: auto;
}

.topics table tr:nth-child(even) {
  background-color: #c5c5c5;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px;
}

.form-group:last-child {
  width: 90%;
}

.form-group label {
  margin-bottom: 10px;
}

.form-group input {
  width: 300px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px;
}

.form-group select {
  width: 300px;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 0 10px;
}

textarea {
  width: 100%;
  height: 200px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px;
  resize: none;
}
</style>
