<template>
  <Sidebar />
  <div class="main">
    <Topbar title="Categories" />
    <!-- <div class="categories">
      <div class="categories__content">
        <div class="categories__content__item">
          <div class="categories__content__item__image">
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
              alt=""
            />
          </div>
        </div>
        <div class="categories__content__item">
          <div class="categories__content__item__image">
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
              alt=""
            />
          </div>
        </div>
        <div class="categories__content__item">
          <div class="categories__content__item__image">
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
              alt=""
            />
          </div>
        </div>
        <div class="categories__content__item">
          <div class="categories__content__item__image">
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
              alt=""
            />
          </div>
        </div>
        <div class="categories__content__item">
          <div class="categories__content__item__image">
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
              alt=""
            />
          </div>
        </div>
        <div class="categories__content__item">
          <div class="categories__content__item__image">
            <img
              src="https://via.placeholder.com/200x300?text=Couple+And+Family"
            />
          </div>
        </div>
      </div>
    </div> -->
    <div class="overview">
      <div class="overview__cards">
        <div class="overview__cards__card">
          <div class="overview__cards__card__body">
            <div class="overview__cards">
              <router-link
                :to="{
                  name: 'category',
                  params: { category: 'Couple and Family' },
                }"
              >
                <div class="overview__cards__card">
                  <div class="overview__cards__card__body">
                    <img
                      src="https://via.placeholder.com/200x300?text=Couple+And+Family"
                      alt="profile picture"
                    />
                  </div>
                </div>
              </router-link>
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
            <div class="overview__cards">
              <div class="overview__cards__card">
                <div class="overview__cards__card__body">
                  <img
                    src="https://via.placeholder.com/200x300?text=Introversion"
                    alt="profile picture"
                  />
                </div>
              </div>
              <div class="overview__cards__card">
                <div class="overview__cards__card__body">
                  <img
                    src="https://via.placeholder.com/200x300?text=High+Intelligent"
                    alt="profile picture"
                  />
                </div>
              </div>
              <div class="overview__cards__card">
                <div class="overview__cards__card__body">
                  <img
                    src="https://via.placeholder.com/200x300?text=Stress"
                    alt="profile picture"
                  />
                </div>
              </div>
              <div class="overview__cards__card">
                <div class="overview__cards__card__body">
                  <img
                    src="https://via.placeholder.com/200x300?text=Friendship"
                    alt="profile picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
export default {
  name: 'Categories',
  components: {
    Sidebar,
    Topbar,
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

.overview__cards__card,
a {
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
  cursor: pointer;
}

.overview__cards__card__body img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.overview__cards__card__body p {
  margin: 15px;
  text-align: center;
}
</style>
