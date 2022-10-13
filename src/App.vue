<template>
  <router-view />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mulish');
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      mockData: {
        name: 'John Doe',
        profilePicture:
          'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        overview: {
          messages: 2,
          notifications: 1,
          activePosts: 3,
          upcomingEvents: 2,
        },
        relatedPeople: [
          {
            name: 'Jane Doe',
            profilePicture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            properties: ['Stress', 'Depression', 'GGZ Helmond'],
          },
          {
            name: 'Marieke Doe',
            profilePicture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            properties: ['Stress', 'Depression', 'GGZ Helmond'],
          },
          {
            name: 'Frits Doe',
            profilePicture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            properties: ['Stress', 'Depression', 'GGZ Helmond'],
          },
          {
            name: 'Johnan Doe',
            profilePicture:
              'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
            properties: ['Stress', 'Depression', 'GGZ Helmond'],
          },
        ],
        workspaces: [
          {
            id: 1,
            name: 'Couple and Family',
            image:
              'https://img.freepik.com/free-photo/antiaging-beauty-treatment_23-2149123569.jpg',
            privateRooms: [
              {
                id: 1,
                name: 'Private room 1',
              },
              {
                id: 2,
                name: 'Private room 2',
              },
              {
                id: 3,
                name: 'Private room 3',
              },
            ],
          },
          {
            id: 2,
            name: 'Sleep Psychology',
            image:
              'https://img.freepik.com/free-photo/young-man-lying-bed_155003-2253.jpg',
            privateRooms: [
              {
                id: 1,
                name: 'Private room 1',
              },
              {
                id: 2,
                name: 'Private room 2',
              },
              {
                id: 3,
                name: 'Private room 3',
              },
            ],
          },
          {
            id: 3,
            name: 'Forensic',
            image:
              'https://img.freepik.com/free-vector/fingerprints-icons-set_1284-21834.jpg',
            privateRooms: [
              {
                id: 1,
                name: 'Private room 1',
              },
              {
                id: 2,
                name: 'Private room 2',
              },
              {
                id: 3,
                name: 'Private room 3',
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
