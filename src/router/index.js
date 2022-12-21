import { authGuard } from '@auth0/auth0-vue';
import { createRouter as createVueRouter, createWebHistory } from 'vue-router';

export function createRouter(app) {
  return new createVueRouter({
    routes: [
      // {
      //   path: '/login',
      //   name: 'Login',
      //   component: () => import('../views/Login.vue'),
      // },
      {
        path: '/',
        name: 'overview',
        component: () => import('../views/Overview.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('../views/Search.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/workspaces',
        name: 'workspaces',
        component: () => import('../views/WorkspaceOverview.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/workspace/:workspace',
        name: 'workspace',
        component: () => import('../views/Workspace.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/workspace/:workspace/room',
        name: 'room',
        component: () => import('../views/Room.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/messages',
        name: 'messages',
        component: () => import('../views/Messages.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('../views/Calendar.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/articles',
        name: 'articles',
        component: () => import('../views/Articles.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/forum',
        name: 'forum',
        component: () => import('../views/Forum.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/Settings.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/organisation',
        name: 'organisation',
        component: () => import('../views/Organisation.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/profile/:id',
        name: 'Profile',
        component: () => import('../views/Profile.vue'),
        beforeEnter: authGuard,
      },
      {
        path: '/createProfile',
        name: 'CreateProfile',
        component: () => import('../views/CreateProfile.vue'),
        props: true,
        beforeEnter: authGuard,
      },
    ],
    history: createWebHistory(),
  });
}
