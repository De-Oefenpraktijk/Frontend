<script setup>
import { useAuth0 } from '@auth0/auth0-vue';

const { logout, user } = useAuth0();

defineProps({
  title: String,
});
</script>

<template>
  <div class="topbar">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <div>
      <div class="topbar__profile">
        <div class="topbar__profile__dropdown">
          <div class="topbar__profile__dropdown__button">
            <span>{{ user.name }}</span>
            <font-awesome-icon icon="fa-solid fa-chevron-down" />
          </div>
          <div class="topbar__profile__dropdown__content">
            <ul>
              <router-link to="/about">
                <li>
                  <font-awesome-icon icon="fa-solid fa-user" />
                  <span>Profile</span>
                </li>
              </router-link>
              <li @click="logout">
                <font-awesome-icon
                  icon="fa-solid fa-arrow-right-from-bracket"
                />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
        <img src="https://via.placeholder.com/150" alt="profile picture" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.topbar {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.topbar__profile {
  display: flex;
  align-items: center;
  margin-right: 50px;
}

.topbar__profile__dropdown__button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.topbar__profile__dropdown__button:hover {
  background-color: #eee;
}

.topbar__profile__dropdown__button span {
  margin-right: 10px;
}

.topbar__profile__dropdown__content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.topbar__profile__dropdown__content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.topbar__profile__dropdown__content ul li {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a4a6b3;
  padding: 10px 20px;
  height: 2rem;
  color: #a4a6b3;
}

.topbar__profile__dropdown__content ul li svg {
  margin-right: 15px;
  width: 20px;
}

.topbar__profile__dropdown__content ul a {
  text-decoration: none;
}

.topbar__profile__dropdown__content ul li:hover {
  background-color: #eee;
  cursor: pointer;
}

.topbar__profile__dropdown:hover .topbar__profile__dropdown__content {
  display: block;
}

.topbar__profile__dropdown:hover
  .topbar__profile__dropdown__content
  ul
  li
  span {
  color: #000;
}
</style>
