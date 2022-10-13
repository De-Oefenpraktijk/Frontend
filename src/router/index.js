import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'overview',
    component: () => import('../views/Overview.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue'),
  },
  {
    path: '/workspaces',
    name: 'workspaces',
    component: () => import('../views/WorkspaceOverview.vue'),
  },
  {
    path: '/workspace/:workspace',
    name: 'workspace',
    component: () => import('../views/Workspace.vue'),
  },
  {
    path: '/workspace/:workspace/room',
    name: 'room',
    component: () => import('../views/Room.vue'),
  },
  {
    path: '/messages',
    name: 'messages',
    component: () => import('../views/Messages.vue'),
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/Calendar.vue'),
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/Articles.vue'),
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import('../views/Forum.vue'),
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
  },
  {
    path: '/organisation',
    name: 'organisation',
    component: () => import('../views/Organisation.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
