<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Forum" />
    <div class="sub-topbar">
      <div class="search">
        <input type="text" placeholder="Search topic" />
      </div>
      <div class="new">
        <button>New Topic</button>
      </div>
    </div>
    <div class="filters">
      <select id="category">
        <option value="all">All categories</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <select id="tag">
        <option value="all">All tags</option>
        <option value="tag1">Tag 1</option>
        <option value="tag2">Tag 2</option>
        <option value="tag3">Tag 3</option>
      </select>
      <div class="sortOn">
        <a>Latest</a>
        <a>Most liked</a>
      </div>
    </div>
    <div class="topics">
      <table>
        <tr>
          <th>Topic</th>
          <th>Category</th>
          <th>Replies</th>
          <th>Likes</th>
          <th>Date</th>
        </tr>
        <tr
          v-for="topic in topics"
          :key="topic.id"
          @click="$router.push(`/topic/${topic.id}`)"
        >
          <td>{{ topic.title }}</td>
          <td>Uncategorised</td>
          <td>{{ topic.comments.length }}</td>
          <td>69</td>
          <td>{{ randomDate() }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import axios from 'axios';

export default {
  name: 'Forum',
  components: {
    Topbar,
    Sidebar,
  },
  data() {
    return {
      topics: [],
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
  padding: 0 20px;
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
}

.topics table tr:first-child {
  background-color: #000000;
  color: #ffffff;
}
.topics table tr:nth-child(even) {
  background-color: #c5c5c5;
}
</style>
