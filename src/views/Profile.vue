<template>
    <Sidebar />
  <div class="main">
    <Topbar :title="$route.params.workspace" />
    <div class="profile">
        <div class="profile__header">
        <div class="profile__header__left">
            <div class="profile__header__left__image">
            <img src="https://i.imgur.com/4Z5wQ0x.jpg" alt="profile" />
            </div>
            <div class="profile__header__left__name">
                <h1>{{ user }}</h1>
            <p>Software Engineer</p>
            </div>
        </div>
        <div class="profile__header__right">
            <div class="profile__header__right__button">
            <button>Follow</button>
            </div>
            <div class="profile__header__right__button">
            <button>Message</button>
            </div>
        </div>
        </div>
        <div class="profile__body">
        <div class="profile__body__left">
            <div class="profile__body__left__info">
            <div class="profile__body__left__info__item">
                <h1>John Doe</h1>
                <p>Software Engineer</p>
            </div>
            </div>
            <div class="profile__body__left__about">
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                condimentum, nisl ut aliquam luctus.
            </p>
            </div>
        </div>
        <div class="profile__body__right">
            <div class="profile__body__right__item">
            <h1>Experience</h1>
            </div>
            <div class="profile__body__right__item">
                </div>
                </div>
                </div>
                </div>
            </div>

</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import { useAuth0 } from '@auth0/auth0-vue';


export default {
  name: 'Forum',
  components: {
    Topbar,
    Sidebar,
  },
  setup(){
    const { user } = useAuth0();


  }
};
</script>
<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  background-color: #f5f5f5;
}

.profile__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: #fff;   
}

.profile__header__left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.profile__header__left__image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}

.profile__header__left__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile__header__left__name {
  margin-left: 20px;
}

.profile__header__left__name h1 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
}

.profile__header__left__name p {
  font-size: 16px;
  font-weight: 400;
  color: #777;
}

.profile__header__right {
  display: flex;
  flex-direction: row;
}

.profile__header__right__button {
  margin-left: 20px;
}

.profile__header__right__button button {
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.profile__body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 92%;
  height: calc(100% - 100px);
  padding: 20px;
}

.profile__body__left {
  width: 30%;
}

.profile__body__left__info {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
}

.profile__body__left__info__item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
}

.profile__body__left__info__item h1 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.profile__body__left__info__item p {
  font-size: 16px;
  font-weight: 400;
  color: #777;
}

.profile__body__left__about {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: #fff;
  padding: 20px;
}

.profile__body__left__about h1 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.profile__body__left__about p {
  font-size: 16px;
  font-weight: 400;
  color: #777;
}

.profile__body__right {
  width: 65%;
}

.profile__body__right__item {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
}

.profile__body__right__item h1 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.profile__body__right__item__articles {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.profile__body__right__item__articles__item {
  display: flex;
  flex-direction: row;
  width: 30%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.profile__body__right__item__articles__item:hover {
  border: 1px solid #333;
}

.profile__body__right__item__articles__item img {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
}

.profile__body__right__item__articles__item__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
}

.profile__body__right__item__articles__item__info h1 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.profile__body__right__item__articles__item__info p {
  font-size: 14px;
  font-weight: 400;
  color: #777;
}

@media screen and (max-width: 768px) {
  .profile {
    width: 100%;
    height: 100%;
  }

  .profile__body {
    flex-direction: column;
  }

  .profile__body__left {
    width: 100%;
    margin-bottom: 20px;
  }

  .profile__body__right {
    width: 100%;
  }
}





</style>