<template>
  <Sidebar />
  <div class="main">
    <Topbar :title="topic.title" />
    <div class="new">
      <button @click="showModal = true">Add comment</button>
    </div>
    <div class="topic">
      <div class="topicBody">
        <div class="left">
          <div class="profilePicture">
            <img src="https://i.imgur.com/0X0X0X0.png" />
          </div>
          <p>{{ topic.userName }}</p>
        </div>

        <div class="topicOfzo">
          <p>{{ topic.formBody }}</p>
        </div>
      </div>
      <hr />
      <div class="comments">
        <div
          class="comment"
          v-for="comment in topic.comments"
          :key="comment.id"
        >
          <div class="commentBody">
            <div class="left">
              <div class="profilePicture">
                <img src="https://i.imgur.com/0X0X0X0.png" />
              </div>
              <p>{{ comment.userName }}</p>
            </div>

            <div class="commentOfzo">
              <p>{{ comment.text }}</p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false" @save="save">
      <template #header>
        <h3>Add comment</h3>
      </template>
      <template #body>
        <div class="form">
          <textarea v-model="comment"></textarea>
        </div>
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
      topic: [],
      showModal: false,
      comment: '',
    };
  },
  mounted() {
    this.getTopic();
  },
  methods: {
    getTopic() {
      axios
        .get('http://20.126.194.16/api/v1/ForumPost/' + this.$route.params.id)
        .then((response) => {
          this.topic = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    save() {
      axios
        .post('http://20.126.194.16/api/v1/Comment', {
          text: this.comment,
          formPostId: this.$route.params.id,
          userId: '1',
          userName: 'Username',
        })
        .then((response) => {
          this.getTopic();
          this.showModal = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.topic {
  margin: 0 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  min-height: 90vh;
}

.topicBody {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.topicOfzo {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 40px;
}

.profilePicture {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.profilePicture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.comment {
  margin: 20px 0;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
}

.commentBody {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.commentOfzo {
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-left: 40px;
}

.comment .profilePicture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.comment .profilePicture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.new {
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
  margin-bottom: 20px;
  margin-right: 60px;
}

.new button {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: #f2f2f2;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
}

.new button:hover {
  background-color: #e6e6e6;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #000000;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  resize: none;
  outline: none;
}
</style>
