<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__header__title">
        <img src="../../public/logo.svg" alt="logo" />
        <h1>Oefenpraktijk</h1>
      </div>
    </div>
    <div class="sidebar__menu">
      <ul>
        <router-link to="/">
          <li :class="{'router-link-active': $route.path === '/'}">
            <font-awesome-icon icon="fa-solid fa-chart-pie" />
            <span>Overview</span>
          </li>
        </router-link>
        <router-link to="/search">
          <li :class="{'router-link-active': $route.path === '/search'}">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <span>Search</span>
          </li>
        </router-link>
        <router-link to="/workspaces">
          <li :class="{'router-link-active': $route.path === '/workspaces'}">
            <font-awesome-icon icon="fa-solid fa-people-roof" />
            <span>Workspaces</span>
          </li>
        </router-link>
        <router-link to="/messages">
          <li :class="{'router-link-active': $route.path === '/messages'}">
            <font-awesome-icon icon="fa-solid fa-message" />
            <span>Messages</span>
          </li>
        </router-link>
        <router-link to="/calendar">
          <li :class="{'router-link-active': $route.path === '/calendar'}">
            <font-awesome-icon icon="fa-regular fa-calendar" />
            <span>Calendar</span>
          </li>
        </router-link>
        <router-link to="/articles">
          <li :class="{'router-link-active': $route.path === '/articles'}">
            <font-awesome-icon icon="fa-solid fa-book" />
            <span>Articles</span>
          </li>
        </router-link>
        <router-link to="/forum">
          <li :class="{'router-link-active': $route.path === '/forum'}">
            <font-awesome-icon icon="fa-solid fa-rectangle-list" />
            <span>Forum</span>
          </li>
        </router-link>
      </ul>
      <ul>
        <router-link to="/settings">
          <li :class="{'router-link-active': $route.path === '/settings'}">
            <font-awesome-icon icon="fa-solid fa-gear" />
            <span>Settings</span>
          </li>
        </router-link>
        <router-link to="/organisation">
          <li :class="{'router-link-active': $route.path === '/organisation'}">
            <font-awesome-icon icon="fa-solid fa-users" />
            <span>Organisation</span>
          </li>
        </router-link>
        <router-link
          :to="{
            path: `/profile/${this.store.userId}`,
          }"
        >
          <li>
            <font-awesome-icon icon="fa-solid fa-users" />
            <span>Profile</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  background-color: #1f1f2b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 300px;
  left: 0;
  top: 0;
  z-index: 1;
}

.sidebar__header {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.sidebar__header__title {
  display: flex;
  align-items: center;
  color: #dfe0eb;
}

.sidebar__header__title h1 {
  font-size: 1.6rem;
  font-weight: 500;
}

.sidebar__header__title img {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

.sidebar__menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 15px;
}

.sidebar__menu ul:first-child {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(238, 238, 238, 0.082);
}


.sidebar__menu ul li {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #dadbe4;
  padding: 8px 20px;
  height: 2rem;
}

.sidebar__menu a {
  text-decoration: none;
  color: #a4a6b3;
}

.sidebar__menu ul li svg {
  margin-right: 15px;
  width: 20px;
}

.sidebar__menu ul li:hover, .router-link-active {
  background-color: rgba(238, 238, 238, 0.089);
}
</style>

<script>
import { store } from '../store';

export default {
  name: 'Sidebar',
  data() {
    return {
      store,
    };
  },
};
</script>
