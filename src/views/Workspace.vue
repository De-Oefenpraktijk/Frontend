<template>
  <Sidebar />
  <div class="main">
    <Topbar :title="workspace.name" />
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Private rooms</span>
      </div>
      <div class="mainCard__body">
        <div class="card" @click="showModal = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            style="fill: #1a1a1a"
          >
            <path
              d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21,16h-5v5 c0,0.553-0.448,1-1,1s-1-0.447-1-1v-5H9c-0.552,0-1-0.447-1-1s0.448-1,1-1h5V9c0-0.553,0.448-1,1-1s1,0.447,1,1v5h5 c0.552,0,1,0.447,1,1S21.552,16,21,16z"
            ></path>
          </svg>
          <p>Create new room</p>
        </div>
        <div class="card">
          <router-link :to="{ name: 'room', query: { id: 'testroom1' } }">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              style="enable-background: new 0 0 512 512"
              xml:space="preserve"
            >
              <g id="XMLID_1_">
                <path
                  id="XMLID_5_"
                  d="M175.9,256H15.8v-64.2h160.1v-64.2l95.9,95.9l-95.9,96.8V256z M496.2,0v416.1L304.4,512v-95.9H111.7V287.7
		h32.6v95.9h160.1V95.9l128.5-64.2H144.3v128.5h-31.7V0H496.2z"
                />
              </g>
            </svg>
            <p>Test room 1</p>
          </router-link>
        </div>
        <div class="card">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g id="XMLID_1_">
              <path
                id="XMLID_5_"
                d="M175.9,256H15.8v-64.2h160.1v-64.2l95.9,95.9l-95.9,96.8V256z M496.2,0v416.1L304.4,512v-95.9H111.7V287.7
		h32.6v95.9h160.1V95.9l128.5-64.2H144.3v128.5h-31.7V0H496.2z"
              />
            </g>
          </svg>
          <p>Test room 2</p>
        </div>
        <div class="card">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <g id="XMLID_1_">
              <path
                id="XMLID_5_"
                d="M175.9,256H15.8v-64.2h160.1v-64.2l95.9,95.9l-95.9,96.8V256z M496.2,0v416.1L304.4,512v-95.9H111.7V287.7
		h32.6v95.9h160.1V95.9l128.5-64.2H144.3v128.5h-31.7V0H496.2z"
              />
            </g>
          </svg>
          <p>Test room 3</p>
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Most recent attachments</span>
      </div>
      <div class="mainCard__body">
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#4CAF50"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FFF"
              d="M32 15H39V18H32zM32 25H39V28H32zM32 30H39V33H32zM32 20H39V23H32zM25 15H30V18H25zM25 25H30V28H25zM25 30H30V33H25zM25 20H30V23H25z"
            ></path>
            <path fill="#2E7D32" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M19.129,31l-2.411-4.561c-0.092-0.171-0.186-0.483-0.284-0.938h-0.037c-0.046,0.215-0.154,0.541-0.324,0.979L13.652,31H9.895l4.462-7.001L10.274,17h3.837l2.001,4.196c0.156,0.331,0.296,0.725,0.42,1.179h0.04c0.078-0.271,0.224-0.68,0.439-1.22L19.237,17h3.515l-4.199,6.939l4.316,7.059h-3.74V31z"
            ></path>
          </svg>
          <p>effectiveness_ techniques.xslx</p>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #7950f2"
          >
            <path
              fill="#FF8A65"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FBE9E7"
              d="M24 29H38V31H24zM24 33H38V35H24zM30 15c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6h-6V15z"
            ></path>
            <path
              fill="#FBE9E7"
              d="M32,13v6h6C38,15.687,35.313,13,32,13z"
            ></path>
            <path fill="#E64A19" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M16.828,17H12v14h3v-4.823h1.552c1.655,0,2.976-0.436,3.965-1.304c0.988-0.869,1.484-2.007,1.482-3.412C22,18.487,20.275,17,16.828,17z M16.294,23.785H15v-4.364h1.294c1.641,0,2.461,0.72,2.461,2.158C18.755,23.051,17.935,23.785,16.294,23.785z"
            ></path>
          </svg>
          <p>evaluation_ of_ effectiveness_ techniques.pptx</p>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#2196F3"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FFF"
              d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"
            ></path>
            <path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"
            ></path>
          </svg>
          <p>word_file.docx</p>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#e53935"
              d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28	C42,40.209,40.209,42,38,42z"
            ></path>
            <path
              fill="#fff"
              d="M34.841,26.799c-1.692-1.757-6.314-1.041-7.42-0.911c-1.627-1.562-2.734-3.45-3.124-4.101 c0.586-1.757,0.976-3.515,1.041-5.402c0-1.627-0.651-3.385-2.473-3.385c-0.651,0-1.237,0.391-1.562,0.911 c-0.781,1.367-0.456,4.101,0.781,6.899c-0.716,2.018-1.367,3.97-3.189,7.42c-1.888,0.781-5.858,2.604-6.183,4.556 c-0.13,0.586,0.065,1.172,0.521,1.627C13.688,34.805,14.273,35,14.859,35c2.408,0,4.751-3.32,6.379-6.118 c1.367-0.456,3.515-1.107,5.663-1.497c2.538,2.213,4.751,2.538,5.923,2.538c1.562,0,2.148-0.651,2.343-1.237 C35.492,28.036,35.297,27.32,34.841,26.799z M33.214,27.905c-0.065,0.456-0.651,0.911-1.692,0.651 c-1.237-0.325-2.343-0.911-3.32-1.692c0.846-0.13,2.734-0.325,4.101-0.065C32.824,26.929,33.344,27.254,33.214,27.905z M22.344,14.497c0.13-0.195,0.325-0.325,0.521-0.325c0.586,0,0.716,0.716,0.716,1.302c-0.065,1.367-0.325,2.734-0.781,4.036 C21.824,16.905,22.019,15.083,22.344,14.497z M22.214,27.124c0.521-1.041,1.237-2.864,1.497-3.645 c0.586,0.976,1.562,2.148,2.083,2.669C25.794,26.213,23.776,26.604,22.214,27.124z M18.374,29.728 c-1.497,2.473-3.059,4.036-3.905,4.036c-0.13,0-0.26-0.065-0.391-0.13c-0.195-0.13-0.26-0.325-0.195-0.586 C14.078,32.136,15.77,30.899,18.374,29.728z"
            ></path>
          </svg>
          <p>pdf_file.pdf</p>
        </div>
      </div>
    </div>
    <div class="mainCard">
      <div class="mainCard__header">
        <span>Most recent forms</span>
      </div>
      <div class="mainCard__body">
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#2196F3"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FFF"
              d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"
            ></path>
            <path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"
            ></path>
          </svg>
          <p>standard_form.docx</p>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#2196F3"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FFF"
              d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"
            ></path>
            <path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"
            ></path>
          </svg>
          <p>form2.docx</p>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#2196F3"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FFF"
              d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"
            ></path>
            <path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"
            ></path>
          </svg>
          <p>another_form.docx</p>
        </div>
        <div class="card">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            style="fill: #000000"
          >
            <path
              fill="#2196F3"
              d="M41,10H25v28h16c0.553,0,1-0.447,1-1V11C42,10.447,41.553,10,41,10z"
            ></path>
            <path
              fill="#FFF"
              d="M25 15.001H39V17H25zM25 19H39V21H25zM25 23.001H39V25.001H25zM25 27.001H39V29H25zM25 31H39V33.001H25z"
            ></path>
            <path fill="#0D47A1" d="M27 42L6 38 6 10 27 6z"></path>
            <path
              fill="#FFF"
              d="M21.167,31.012H18.45l-1.802-8.988c-0.098-0.477-0.155-0.996-0.174-1.576h-0.032c-0.043,0.637-0.11,1.162-0.197,1.576l-1.85,8.988h-2.827l-2.86-14.014h2.675l1.536,9.328c0.062,0.404,0.111,0.938,0.143,1.607h0.042c0.019-0.498,0.098-1.051,0.223-1.645l1.97-9.291h2.622l1.785,9.404c0.062,0.348,0.119,0.846,0.17,1.511h0.031c0.02-0.515,0.073-1.035,0.16-1.563l1.503-9.352h2.468L21.167,31.012z"
            ></path>
          </svg>
          <p>last_form.docx</p>
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Create new room</h3>
      </template>
      <template #body>
        <form>
          <div class="form__group">
            <label for="roomName">Room name</label>
            <input type="text" id="roomName" />
          </div>
          <div class="form__group">
            <label for="userName">Invite user</label>
            <select id="userName">
              <option value="marietje">Marietje</option>
              <option value="elise">Elise</option>
              <option value="johan">Johan</option>
              <option value="frits">Frits</option>
            </select>
          </div>
          <div class="form__group">
            <label for="date">Date and time</label>
            <input type="datetime-local" id="date" />
          </div>
        </form>
      </template>
    </modal>
  </Teleport>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';
import Modal from '../components/Modal.vue';
import axios from 'axios';
import {store} from '../store';

export default {
  name: 'Workspace',
  components: {
    Topbar,
    Sidebar,
    Modal,
  },
  data() {
    return {
      showModal: false,
      workspace,
    };
  },
    methods:{
    async getData(){
      const config = {
            headers: { Authorization: `Bearer ${store.token}` }};
     this.workspace = await axios.get('http://20.126.206.207/room/' + route.params.workspace, + "/" + store.user.id, config)
    }
  },
  mounted(){
    this.getData();
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.$forceUpdate;
      }
    );
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.card svg {
  height: 50%;
  width: 50%;
}

.card p,
.card a {
  text-align: center;
  text-decoration: none;
  color: #000;
}

.form__group {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.form__group label {
  margin: 5px;
}

.form__group input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.form__group input:focus {
  outline: none;
  border: 1px solid #000;
}

select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

select:focus {
  outline: none;
  border: 1px solid #000;
}
</style>
