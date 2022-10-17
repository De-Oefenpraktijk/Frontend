<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Calendar" />
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Upcoming</span>
      </div>
      <div class="mainCard__body upcomingCards">
        <div class="card">
          <div>
            <h1>How COVID digitalised mental health</h1>
            <h2>Dr. Lisa Bélanger - Kellylee Evans</h2>
          </div>
          <button class="active">Join</button>
        </div>
        <div class="card">
          <div>
            <h1>The effects of yoga</h1>
            <h2>Dr. Lisa Bélanger - Kellylee Evans</h2>
          </div>
          <button class="upcoming">
            <div>Add to agenda</div>
            <div class="upcoming__date">19-10-2022</div>
          </button>
        </div>
        <div class="card">
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
    <div class="mainCard">
      <div class="mainCard__header">
        <span>All</span>
      </div>
      <div class="mainCard__body allEvents">
        <div class="card">
          <h3>25-10-2022</h3>
          <h3>How COVID digitalised mental health</h3>
        </div>
        <div class="card">
          <h3>30-11-2022</h3>
          <h3>How COVID digitalised mental health</h3>
        </div>
        <div class="card">
          <h3>05-12-2022</h3>
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
.card h1 {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 20px 20px 0 20px;
}

.card h2 {
  font-size: 1rem;
  font-weight: 400;
  margin: 5px 20px 20px 20px;
}

.card button {
  background-color: #363740;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  height: 50px;
}

.card button:hover {
  background-color: #696a74;
  transition-duration: 0.4s;
}

.card button.active {
  background-color: #00b87c;
  color: #fff;
}

.card button.active:hover {
  background-color: #038b5e;
  transition-duration: 0.4s;
}

.card button div {
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

.upcomingCards > .card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.allEvents {
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.allEvents > .card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 30px;
  margin: 10px 0;
  width: 90%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.allEvents > .card h3 {
  margin-right: 15px;
}
</style>
