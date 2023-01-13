<template>
  <Sidebar />
  <div class="main">
    <Topbar :title="'Room - ' + $route.query.id" />
    <div id="meet"></div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Topbar from '../components/Topbar.vue';

export default {
  name: 'Room',
  components: {
    Topbar,
    Sidebar,
  },
  data: () => ({
    api: null,
    username: 'rabie',
  }),
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.$forceUpdate;
      }
    );
  },
  mounted() {
    this.openRoom();
  },
  methods: {
    startConference() {
      var _this = this;
      try {
        const domain = 'meet.jit.si';
        const options = {
          roomName: this.$route.query.id,
          height: 600,
          parentNode: document.querySelector('#meet'),
          interfaceConfigOverwrite: {
            filmStripOnly: false,
            SHOW_JITSI_WATERMARK: true,
          },
          configOverwrite: {
            disableSimulcast: false,
          },
        };

        this.api = new JitsiMeetExternalAPI(domain, options);
        this.api.addEventListener('videoConferenceJoined', () => {
          console.log('Local User Joined');

          _this.api.executeCommand('displayName', _this.username);
        });
        this.api.addEventListener('videoConferenceLeft', () => {
          this.$router.push('/');
        });
      } catch (error) {
        console.error('Failed to load Jitsi API', error);
      }
    },
    openRoom() {
      if (window.JitsiMeetExternalAPI) {
        var person = prompt('Please enter your name:', 'Rabie');
        if (person != null || person != '') this.username = person;
        this.startConference();
      } else alert('Jitsi Meet API script not loaded');
    },
  },
};
</script>

<style scoped></style>
