<template>
  <!-- 4 rounded cards in a flexbox -->
  <div class="overview">
    <div class="overview__cards">
      <div class="overview__cards__card">
        <div class="overview__cards__card__header">
          <span>Messages</span>
        </div>
        <div class="overview__cards__card__body">
          <h1>2</h1>
        </div>
      </div>
      <div class="overview__cards__card">
        <div class="overview__cards__card__header">
          <span>Notifications</span>
        </div>
        <div class="overview__cards__card__body">
          <h1>0</h1>
        </div>
      </div>
      <div class="overview__cards__card">
        <div class="overview__cards__card__header">
          <span>Active posts</span>
        </div>
        <div class="overview__cards__card__body">
          <h1>1</h1>
        </div>
      </div>
      <div class="overview__cards__card">
        <div class="overview__cards__card__header">
          <span>Upcoming events</span>
        </div>
        <div class="overview__cards__card__body">
          <h1>3</h1>
        </div>
      </div>
    </div>
    <div class="overview__cards">
      <div class="overview__cards__card">
        <div class="overview__cards__card__header">
          <span>Rooms</span>
        </div>
        <div class="overview__cards__card__body">
          <div class="overview__cards">
            <div class="overview__cards__card">
              <div class="overview__cards__card__body">
                <img
                  src="https://via.placeholder.com/200x300?text=Couple+And+Family"
                  alt="profile picture"
                />
              </div>
            </div>
            <div class="overview__cards__card">
              <div class="overview__cards__card__body">
                <img
                  src="https://via.placeholder.com/200x300?text=Sleep"
                  alt="profile picture"
                />
              </div>
            </div>
            <div class="overview__cards__card">
              <div class="overview__cards__card__body">
                <img
                  src="https://via.placeholder.com/200x300?text=Forensic"
                  alt="profile picture"
                />
              </div>
            </div>
            <div class="overview__cards__card">
              <div class="overview__cards__card__body">
                <img
                  src="https://via.placeholder.com/200x300?text=Gero"
                  alt="profile picture"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.overview__cards__card__body img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
