import { createApp } from 'vue';
import { createAuth0 } from '@auth0/auth0-vue';
import './style.css';
import App from './App.vue';
import { createRouter } from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import the icons you want to use */
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPeopleRoof } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// Make BootstrapVue available throughout your project

/* add icons to the library */
library.add(
  faChartPie,
  faMagnifyingGlass,
  faPeopleRoof,
  faMessage,
  faCalendar,
  faBook,
  faRectangleList,
  faGear,
  faUsers,
  faUser,
  faChevronDown,
  faArrowRightFromBracket
);
createApp(App)
  .use(createRouter(App))
  .use(
    createAuth0({
      domain: 'oefenpraktijk.eu.auth0.com',
      client_id: 'CzLZTVeBEJ4cRvuMDuQvwOI0320x8Leo',
      audience: 'https://api.oefenpraktijk.nl',
      redirect_uri: window.location.origin,
      cacheLocation: 'localstorage',
    })
  )
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
