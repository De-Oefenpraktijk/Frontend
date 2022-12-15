<template>
  <router-view />
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import axios from 'axios';

export default {
  name: 'App',
  setup() {
    const { isAuthenticated, user, getAccessTokenSilently  } = useAuth0();
    return {
      isAuthenticated,
      user,
      getAccessTokenSilently
      
    };
  },
  async mounted(){
    const token = await getAccessTokenSilently();
    console.log(token);
    try{

      console.log('test')
      const accesstoken = await useAuth0.getTokenSilently();
      console.log(accesstoken);

      const auth0Id = this.user.sub;
      const userId = auth0Id.replace('auth0|', '');
      const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imp2M0F6YndkMzFmWmFldzJOcW1GVSJ9.eyJpc3MiOiJodHRwczovL29lZmVucHJha3RpamsuZXUuYXV0aDAuY29tLyIsInN1YiI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0QGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5vZWZlbnByYWt0aWprLm5sIiwiaWF0IjoxNjcxMTAxNjgyLCJleHAiOjE2NzExODgwODIsImF6cCI6IlNab0NFWkJvMDVCc21DWW1TZmMwYTR0Q3VCZXZzTkM0Iiwic2NvcGUiOiJyZWFkOnVzZXIiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOnVzZXIiXX0.0_rZRzHP9DMC-6gfzPO130EkdenLLjXocXui4pECcVLIITobi5GHF5N2C0Ug5-_FUC7T2Qq-GSZ5cELAlMhg-QMsWRu9g1CX9gnfNIvoqSqg4VPu_wZ9BWMQ7NtdgxJyp6mxdToVerR_0q7A1KSYXwodwQEkEqMmh3aTA9Wh8pKPhVvZCe9iTW-sGd7LIUnxaA7zojZk-2yGPAzNr5a-8RU40zOVDa5yJLsyz1PSdD2f2RITbkaOEX_DWSkLFvwdqqZBx1Eihh4rFxwK9n0jYYiuxCz7M_B3NHMIyxnsU8sbRdjaJ6vvwE4I2smYVYwncuDLEKqOMpZeXjmWgimRUQ";
      const config = {
            headers: { Authorization: `Bearer ${token}` }
                };
     console.log(axios.get('http://20.126.206.207/user/getuserbyid/' + userId, config));
    }
    catch(error){
      console.log(error);
    }
    

  },
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
