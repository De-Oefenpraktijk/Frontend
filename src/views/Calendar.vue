<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Calendar" />
    <div class="overview">
      <h3>Upcoming</h3>
      <div class="overview__cards">
        <div class="overview__cards__card">
          <div class="overview__cards__card__body">
            <div>
              <h1>How COVID digitalised mental health</h1>
              <h2>Dr. Lisa Bélanger - Kellylee Evans</h2>
            </div>
            <button class="active">Join</button>
          </div>
        </div>
        <div class="overview__cards__card">
          <div class="overview__cards__card__body">
            <div>
              <h1>The effects of yoga</h1>
              <h2>Dr. Lisa Bélanger - Kellylee Evans</h2>
            </div>
            <button class="upcoming">
              <div>Add to agenda</div>
              <div class="upcoming__date">19-10-2022</div>
            </button>
          </div>
        </div>
        <div class="overview__cards__card">
          <div class="overview__cards__card__body">
            <div>
              <h1>3 steps to a stressfree life</h1>
              <h2>Dr. Lisa Bélanger - Kellylee Evans</h2>
            </div>
            <button class="upcoming">
              <div>Add to agenda</div>
              <div class="upcoming__date">21-10-2022</div>
            </button>
          </div>
        </div>
      </div>
      <h3>All</h3>
      <div class="card__body__item">
        <div class="card__body__item__date">
          <h3>25-10-2022</h3>
        </div>
        <div class="card__body__item__details">
          <h3>How COVID digitalised mental health</h3>
        </div>
      </div>
      <div class="card__body__item">
        <div class="card__body__item__date">
          <h3>30-11-2022</h3>
        </div>
        <div class="card__body__item__details">
          <h3>How COVID digitalised mental health</h3>
        </div>
      </div>
      <div class="card__body__item">
        <div class="card__body__item__date">
          <h3>05-12-2022</h3>
        </div>
        <div class="card__body__item__details">
          <h3>How COVID digitalised mental health</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Calendar',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style scoped>
.overview {
  margin-right: 50px;
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
}

.overview__cards__card__header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #f5f5f5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.overview__cards__card__header span {
  margin-left: 10px;
}

.overview__cards__card__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  width: 100%;
  cursor: pointer;
}

.overview__cards__card__body h1 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 20px 20px 0 20px;
}

.overview__cards__card__body h2 {
  font-size: 1rem;
  font-weight: 400;
  margin: 5px 20px 20px 20px;
}

.overview__cards__card__body button {
  background-color: #363740;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  height: 50px;
}

.overview__cards__card__body button:hover {
  background-color: #696a74;
  transition-duration: 0.4s;
}

.overview__cards__card__body button.active {
  background-color: #00b87c;
  color: #fff;
}

.overview__cards__card__body button.active:hover {
  background-color: #038b5e;
  transition-duration: 0.4s;
}

.overview__cards__card__body button div {
  margin: 20px;
}

.upcoming {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.upcoming__date {
  background-color: #ffffff;
  color: #363740;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
}

.card__body__item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card__body__item__date {
  margin-left: 20px;
}

.card__body__item__details h3 {
  margin-left: 60px;
}
</style>
