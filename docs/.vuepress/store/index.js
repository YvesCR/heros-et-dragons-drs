import Vue from 'vue'
import Vuex from 'vuex'

import spellFilters from './modules/spellFilters'
import magicItemFilters from './modules/magicItemFilters'
import monsterFilters from './modules/monsterFilters'

import mySpells from './modules/mySpells'
import myMonsters from './modules/myMonsters'
import myMagicItems from './modules/myMagicItems'

Vue.use(Vuex)

import Cookies from 'js-cookie'

export default new Vuex.Store({
  modules: {
    spellFilters,
    magicItemFilters,
    monsterFilters,
    mySpells,
    myMonsters,
    myMagicItems
  },

  state: {
    loading: false,
    drawer: false,
    rightDrawer: false,
    hasRightDrawer: false,
    inRightDrawer: null,
    isThemeDark: false,
    isOpenAboutDialog: false,
  },

  getters: {
    loading: state => state.loading,
    drawer: state => state.drawer,
    rightDrawer: state => state.rightDrawer,
    hasRightDrawer: state => state.hasRightDrawer,
    inRightDrawer: state => state.inRightDrawer,
    isThemeDark: state => state.isThemeDark,
    isOpenAboutDialog: state => state.isOpenAboutDialog,
  },

  actions: {
    updateLoading: ({ commit }, payload) => {
      commit('setLoading', payload)
    },
    updateDrawer: ({ commit }, payload) => {
      commit('setDrawer', payload)
    },
    updateRightDrawer: ({ commit }, payload) => {
      commit('setRightDrawer', payload)
    },
    updateHasRightDrawer: ({ commit }, payload) => {
      commit('setHasRightDrawer', payload)
    },
    updateInRightDrawer: ({ commit }, payload) => {
      commit('setInRightDrawer', payload)
    },
    isThemeDark: ({ commit }, payload) => {
      commit('setIsThemeDark', payload)
    },
    isOpenAboutDialog: ({ commit }, payload) => {
      commit('setIsOpenAboutDialog', payload)
    },
  },

  mutations: {
    setLoading: (state, payload) => {
      state.loading = payload
    },
    setDrawer: (state, payload) => {
      state.drawer = payload
    },
    setRightDrawer: (state, payload) => {
      state.rightDrawer = payload
    },
    setHasRightDrawer: (state, payload) => {
      state.hasRightDrawer = payload
    },
    setInRightDrawer: (state, payload) => {
      state.inRightDrawer = payload
    },
    setIsThemeDark: (state, payload) => {
      state.isThemeDark = payload
      console.log(payload)
      Cookies.set('heros-et-dragons-is-dark', state.isThemeDark)
    },
    setIsOpenAboutDialog: (state, payload) => {
      state.isOpenAboutDialog = payload
    },
  },
})
