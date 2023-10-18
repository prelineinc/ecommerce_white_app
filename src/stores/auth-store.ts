import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: (): Auth => emptyAuth,
  actions: {},
  getters: {},
});

const emptyAuth: Auth = {
  id: 'aaa',
  name: 'adfads',
};
export interface Auth {
  id: string;
  name: string;
}
