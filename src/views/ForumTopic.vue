<template>
  <Sidebar />
  <div class="main">
    <Topbar :title="topic.title" />
    <!-- breadcrumbs navigation -->
    <div class="breadcrumbs">
      <div class="breadcrumbs__item">
        <router-link to="/forum">Forum</router-link>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
      </svg>
      <div class="breadcrumbs__item">
        <router-link :to="`/forum/${topic.category}`">{{ topic.category }}</router-link>
      </div>
      <div class="breadcrumbs__item">{{ topic.title }}</div>
    </div>
    <div class="mainCard">
    <div class="topic">
        <div class="topic-header flex">
            <img class="profile-picture"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            />
          <span class="topic-username">{{ topic.userName }}</span>
          <span class="topic-time">1 hour ago</span>
        </div>
        <div class="topic-body">
          <p>{{ topic.formBody }}</p>
        </div>
        <div class="topic-comment">
          <small>comment as <span class="comment-as">{{ this.store.username }}</span></small>
          <textarea class="input-default" v-model="comment"></textarea>
          <div class="btn btn--blue" @click="save()">Post</div>
        </div>
      </div>
      
      <div class="comments">
        <div
          class="comment"
          v-for="comment in topic.comments"
          :key="comment.id"
        >
          <div class="commentBody">
            <div class="topic-header flex">
                <img class="profile-picture"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                />
                <span class="topic-username">{{ comment.userName }}</span>
                <span class="topic-time">1 hour ago</span>
            </div>

            <div class="topic-body">
              <p>{{ comment.text }}</p>
            </div>
          </div>
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
  setup() {
    return { store };
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
          console.log(this.topic);
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
          userName: this.store.username,
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
  padding: 20px 12px;
  border-bottom: 1px solid rgb(228, 220, 220);
}
.topic-username {
  font-size: 14px;
  font-weight: 600;
  margin-left: 10px;
}

.topic-time {
  font-size: 12px;
  opacity: 0.75;
  margin-left: 30px;
}
.topic-body {
 margin: 0 0 4px 0;
 font-size: 14px;
 border-left: 3px solid rgb(232, 234, 238);
 padding-left: 20px;
}

.profile-picture {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
}

.topic-comment {
  margin-top: 40px;
  display: block;
}

.topic-comment textarea {
  box-sizing: border-box;
  max-width: 600px;
  margin-bottom: 10px;
}

.comment {
  margin: 12px 0 0;
  padding: 12px 20px 0;
  border-radius: 10px;
}

.comment-as {
  color: rgb(0, 140, 255);
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
  max-width: 100%;
  max-height: 400px;

}

</style>
