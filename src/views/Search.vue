<template>
  <Sidebar />
  <div class="main">
    
    <Topbar title="Search" />
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Search Oefenpraktijk users</span>
      </div>
      <div class="user-search">
        <div class="search-actions">
          <div class="searchbar-wrapper">
            <label for="search-users">Search</label>
            <div class="searchbar">
              <div class="searchbar-icon">
                <font-awesome-icon
                  icon="fa-solid fa-magnifying-glass"
                  class="searchbar-button"
                  @click="getData"
                />
                </div>
                <input
                  type="search"
                  id="search-users"
                  class="searchbar-input"
                  placeholder="Names, educations, skills e.g."
                  v-model="search"
                />
              </div>
            </div>
            <!-- static dropdown button called filters -->
            <div class="btn btn--light btn--fake">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filters
            </div>
          </div>
          <small v-if="noResults">Sorry, no results for {{ search }}</small>
        <div class="results">
              <div class="result" v-for="(r, i) in results"
            :key="i"
            @click="$router.push({ path: `/profile/${r.Id}` })">
                <div style="background-color: transparent">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    alt="profile picture"
                  />
                </div>
                <div class="name">{{ r.Firstname }} {{ r.Lastname }}</div>
                <div v-for="education in r.Educations" v-bind:key="education" class="badge">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  <span>{{ education.name }} - {{ education.location }}</span>
                </div>
                <div
                  v-for="specialization in r.Specializations"
                  v-bind:key="specialization"
                  class="badge badge--green"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  <span>{{ specialization.name }}</span>
                </div>
              </div>
        </div>
      </div>
    </div>

    <div class="mainCard">
      <div class="mainCard__header">
        <span>Suggested users</span>
      </div>
      <div class="persons">
        <div class="person" v-for="(user, index) in (frozenList = sortedList)" @click="$router.push({ path: `/profile/${user.Id}` })" v-show="index < 6 ">

          <div class="person-header">
          <div class="person-background"></div>
            <img class="profile-picture"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="profile picture"
            />
          </div>
          <div class="name">
            <h3>{{ user.Firstname + ' ' + user.Lastname}}</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Related news</span>
      </div>
      <div class="mainCard__body news">
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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

        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
        <div class="card">
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
    <div class="mainCard">
      <div class="mainCard__header">
        <h2>Related forum questions</h2>
      </div>
      <div class="mainCard__body forum">
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
        <div class="card">
          <p>It's a super day, so why not make a beautiful sky?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import axios from 'axios';
import { store } from '../store.js';
import { computed } from 'vue';
import { useVueFuse } from 'vue-fuse';

export default {
  name: 'Search',
  components: {
    Topbar,
    Sidebar,
  },
  async setup() {
    let suggestedUsers = [];
    let userdata = [];
    const testdata = [
      { ID: 1, Naam: 'Bar', School: 'Fontys Hogescholen' },
      { ID: 2, Naam: 'Bob Ross', School: 'Avans Hogeschool' },
      { ID: 3, Naam: 'John Doe', School: 'Technische Universiteit Eindhoven' },
      { ID: 4, Naam: 'Qux Baz', School: 'Hogeschool Zuyd' },
      { ID: 5, Naam: 'Foo', School: 'Expivi University' },
      { ID: 6, Naam: 'Lorem', School: 'Hogeschool Ipsum' },
    ];
    let educations = [];

    //Get Request
    await axios
      .get('http://20.126.206.207/Person/getAllUsers', {
        headers: {
          Authorization: `Bearer ${store.token} `,
        },
      })
      .then((response) => {
        response.data.collection.forEach((element) => {
          //Data gets pushed to empty list testdata
          userdata.push(element.Values.n.Properties);
        });

        userdata.forEach(async (result) => {
          let amountEducation = result.Educations.length;
          console.log(amountEducation);
          result.Educations.forEach(async (education) => {
            console.log(education);
            await axios
              .get(
                `http://20.126.206.207/education/geteducation/${education}`,
                {
                  headers: {
                    Authorization: `Bearer ${store.token}`,
                  },
                }
              )
              .then((res) => {
                educations = res.data;
                result.Educations.push(res.data);
                console.log(educations);
              })
              .catch((err) => {
                console.log(err);
              });
          });

          console.log(result.Educations);
          result.Educations.splice(0, amountEducation);
          console.log(result.Educations);
        });

        userdata.forEach(async (result) => {
          let amountSpecializations = result.Specializations.length;
          result.Specializations.forEach(async (specialization) => {
            console.log(specialization);
            await axios
              .get(
                `http://20.126.206.207/specialization/getspecialization/${specialization}`,
                {
                  headers: {
                    Authorization: `Bearer ${store.token}`,
                  },
                }
              )
              .then((res) => {
                specialization = res.data;
                result.Specializations.push(res.data);
                console.log(specialization);
              })
              .catch((err) => {
                console.log(err);
              });
          });

          console.log(result.Specializations);
          result.Specializations.splice(0, amountSpecializations);
          console.log(result.Specializations);
        });
        
      });
    //Vue fuse magic
    let sort = false;
    let updatedList = [];
    let searchQuery = '';
    console.log(userdata);
    console.log(testdata);
    const currentRow = [];
    const sortTable = (col) => {
      sort.value = true;
      // Use of _.sortBy() method
      updatedList.value = sortBy(userdata, col);
    };
    //sort the list
    const sortedList = computed(() => {
      if (sort.value) {
        return updatedList.value;
      } else {
        return userdata;
      }
    });

    // Filter Search
    const { search, results, noResults } = useVueFuse(sortedList, {
      keys: [
        { name: 'Firstname', weight: 1 },
        { name: 'Username', weight: 1 },
        { name: 'Lastname', weight: 1 },
      ],
    });
    return {
      sortedList,
      sortTable,
      searchQuery,
      currentRow,
      search,
      results,
      noResults,
    };
  },

  // data: function () {
  //   return {
  //     result: [],
  //     // search: ""
  //   };
  // },
  // watch: {
  //   search: function (val) {
  //     if (!val) {
  //       this.result = [];
  //     }
  //   }
  // },
  methods: {
    getData: function () {},
  },
};
</script>

<style scoped>

.user-search {
  padding: 20px 12px;
}

.searchbar {
  display: flex;
  padding: 0.8rem 1rem;
  width: 260px;
  font-size: .85rem;
  line-height: 1.4;
  color: #4a4c50;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #d4d4d4;
  -webkit-box-shadow: inset 0 1px 3px 0 rgb(0 0 0 / 13%), inset 0 2px 1px 0 rgb(0 0 0 / 5%);
  box-shadow: inset 0 1px 3px 0 rgb(0 0 0 / 13%), inset 0 2px 1px 0 rgb(0 0 0 / 5%);
  cursor: auto!important;
  border-radius: 5px;
  -webkit-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -o-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.searchbar-icon {
  margin-right: 10px;
  width: 16px;
}

.searchbar-icon svg {
  margin: 0;
}

.searchbar-input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  width: 100%;
}

.searchbar-wrapper {
  display: flex;
  align-items: center;
}

.searchbar-wrapper label {
  margin-right: 12px;
  font-weight: 600;
  font-size: 14px;
}

.searchbar-input::placeholder {
  color: #b3b3b3;
}

.searchbar-input:focus::placeholder {
  color: transparent;
}

.searchbar-button {
  margin-left: 20px;
  cursor: pointer;
}

.results {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #e4e3e9;
  padding: 14px;
  transition: 200ms;
}

.results:empty {
  display: none;
}

.result {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 6px;
  padding: 6px 8px;
  border: 1px solid #dfdce2;
  cursor: pointer;
  transition: color 200ms;
}

.result:hover {
  color: rgb(22, 115, 255);
}

.result .name {
  font-size: 16px;
  font-weight: 600;
  margin-left: 16px;
  min-width: 160px;
}

.result:not(:last-child) {
  margin-bottom: 10px;
}

.result .badge {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  background: linear-gradient(0, #181818 0%, #424242 100%);
  color: #fff;
  display: flex;
  align-items: center;
}

.result .badge.badge--green {
  background: linear-gradient(0, #222552 0%, #6071a8 100%);
}

.result .badge svg {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.result img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  overflow: hidden;
}

.persons {
  display: flex;
  padding: 0 12px;
  flex-wrap: wrap;
  gap: 10px;
}

.person {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  border: 1px solid #e3e2e7;
  flex: 0 0 calc(20% - 10px);
  width: 100%;
  box-sizing: border-box;;
  cursor: pointer;
  margin: 10px 0;
}

.person .person-header {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80px;
  position: relative;
}

.person .person-header .person-background {
  position: absolute;
  width: 100%;
  height: 70%;
  top: 0;
  background-color: #242836;
}

.person .person-header .profile-picture {
  z-index: 5;
  position: relative;
}

.person .profile-picture {
  width: 50px;
  height: 50px;
}

.card__image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin: 20px;
}

.card__details h3 {
  background-color: #cccccc;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px;
}

.card__details h3:first-of-type {
  margin-left: 100px;
}

.card__details {
  display: flex;
  align-items: center;
}

.forum > .card,
.news > .card {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
