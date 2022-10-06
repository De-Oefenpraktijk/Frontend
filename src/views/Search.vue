<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Search" />
    <div class="searchbar">
      <div class="searchbar-icon">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <input type="text" class="searchbar-input" placeholder="Search..." />
    </div>
    <div class="card">
      <div class="card__header">
        <h2>Related people</h2>
      </div>
      <div class="card__body">
        <div class="card__body__item">
          <div class="card__body__item__image">
            <img src="https://via.placeholder.com/150" alt="profile picture" />
          </div>
          <div class="card__body__item__name">
            <h3>John Doe</h3>
          </div>
          <div class="card__body__item__details">
            <h3>Stress</h3>
            <h3>Depression</h3>
            <h3>GGZ Helmond</h3>
          </div>
        </div>
        <div class="card__body__item">
          <div class="card__body__item__image">
            <img src="https://via.placeholder.com/150" alt="profile picture" />
          </div>
          <div class="card__body__item__name">
            <h3>John Doe</h3>
          </div>
          <div class="card__body__item__details">
            <h3>Stress</h3>
            <h3>Depression</h3>
            <h3>GGZ Helmond</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card__header">
        <h2>Related news</h2>
      </div>

      <div class="overview__cards">
        <div class="overview__cards__card">
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
        <div class="overview__cards__card">
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
        <div class="overview__cards__card">
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
        <div class="overview__cards__card">
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
      <div class="overview__cards">
        <div class="overview__cards__card">
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
        <div class="overview__cards__card">
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
        <div class="overview__cards__card">
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
        <div class="overview__cards__card">
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
    <div class="card">
      <div class="card__header">
        <h2>Related forum questions</h2>
      </div>

      <div class="overview__cards">
        <div class="overview__cards__card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="overview__cards__card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="overview__cards__card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
      </div>
      <div class="overview__cards">
        <div class="overview__cards__card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="overview__cards__card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="overview__cards__card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Search',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style>
.searchbar {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  margin-top: 50px;
  padding: 10px;
  width: 400px;
}

.searchbar-icon {
  margin-right: 10px;
}

.searchbar-input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  width: 100%;
}

.searchbar-input::placeholder {
  color: #b3b3b3;
}

.searchbar-input:focus::placeholder {
  color: transparent;
}

.card {
  margin-top: 50px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 50px;
  background-color: #f2f2f2;
}

.card__header {
  padding: 5px 0 5px 30px;
}

.card__body {
  padding: 20px;
}

.card__body__item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: #ebe9e9;
}

.card__body__item__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
}

.card__body__item__details h3 {
  background-color: #cccccc;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px;
}

.card__body__item__details h3:first-of-type {
  margin-left: 100px;
}

.card__body__item__details {
  display: flex;
  align-items: center;
}

.overview__cards {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.overview__cards__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin: 20px;
}

.overview__cards__card img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.overview__cards__card p {
  margin: 15px;
  text-align: center;
}
</style>
