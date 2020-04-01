import {setUrlParams} from '@theme/util/filterHelpers'

export default {
  namespaced: true,

  state: {
    search: '',
    mustBeConcentration: undefined,
    mustBeRitual: undefined,
    classes: [
      { label: "Barde", value: false },
      { label: "Clerc", value: false },
      { label: "Druide", value: false },
      { label: "Ensorceleur/Sorcelame", value: false },
      { label: "Magicien", value: false },
      { label: "Ombrelame", value: false },
      { label: "Paladin", value: false },
      { label: "Rôdeur", value: false },
      { label: "Sorcier", value: false },
    ],
    levels: [
      { level: 0, value: false },
      { level: 1, value: false },
      { level: 2, value: false },
      { level: 3, value: false },
      { level: 4, value: false },
      { level: 5, value: false },
      { level: 6, value: false },
      { level: 7, value: false },
      { level: 8, value: false },
      { level: 9, value: false },
    ],
    schools: [
      { label: "Abjuration", value: false },
      { label: "Enchantement", value: false },
      { label: "Divination", value: false },
      { label: "Évocation", value: false },
      { label: "Illusion", value: false },
      { label: "Invocation", value: false },
      { label: "Nécromancie", value: false },
      { label: "Transmutation", value: false },
    ],
    componentVerbal: undefined,
    componentSomatic: undefined,
    componentMaterial: undefined,
  },

  getters: {
    search: state => state.search,
    mustBeConcentration: state => state.mustBeConcentration,
    mustBeRitual: state => state.mustBeRitual,
    classes: state => state.classes,
    levels: state => state.levels,
    schools: state => state.schools,
    componentVerbal: state => state.componentVerbal,
    componentSomatic: state => state.componentSomatic,
    componentMaterial: state => state.componentMaterial,
  },

  actions: {
    updateSearch: ({ commit }, payload) => {
      commit('setSearch', payload)
    },
    updateMustBeConcentration: ({ commit }, payload) => {
      commit('setMustBeConcentration', payload)
    },
    updateMustBeRitual: ({ commit }, payload) => {
      commit('setMustBeRitual', payload)
    },
    updateClasses: ({ commit }, payload) => {
      commit('setClasses', payload)
    },
    resetClasses: ({ commit }) => {
      commit('resetClasses')
    },
    updateLevels: ({ commit }, payload) => {
      commit('setLevels', payload)
    },
    resetLevels: ({ commit }) => {
      commit('resetLevels')
    },
    updateSchools: ({ commit }, payload) => {
      commit('setSchools', payload)
    },
    resetSchools: ({ commit }) => {
      commit('resetSchools')
    },
    updateComponentVerbal: ({ commit }, payload) => {
      commit('setComponentVerbal', payload)
    },
    updateComponentSomatic: ({ commit }, payload) => {
      commit('setComponentSomatic', payload)
    },
    updateComponentMaterial: ({ commit }, payload) => {
      commit('setComponentMaterial', payload)
    },
  },

  mutations: {
    setSearch: (state, payload) => {
      state.search = payload
    },
    setMustBeConcentration: (state, payload) => {
      state.mustBeConcentration = payload
    },
    setMustBeRitual: (state, payload) => {
      state.mustBeRitual = payload
    },
    setClasses: (state, payload) => {
      state.classes = payload
    },
    resetClasses: (state) => {
      state.classes = [
        { label: "Barde", value: false },
        { label: "Clerc", value: false },
        { label: "Druide", value: false },
        { label: "Ensorceleur/Sorcelame", value: false },
        { label: "Magicien", value: false },
        { label: "Ombrelame", value: false },
        { label: "Paladin", value: false },
        { label: "Rôdeur", value: false },
        { label: "Sorcier", value: false },
      ]
    },
    setLevels: (state, payload) => {
      state.levels = payload
    },
    resetLevels: (state) => {
      state.levels = [
        { level: 0, value: false },
        { level: 1, value: false },
        { level: 2, value: false },
        { level: 3, value: false },
        { level: 4, value: false },
        { level: 5, value: false },
        { level: 6, value: false },
        { level: 7, value: false },
        { level: 8, value: false },
        { level: 9, value: false },
      ]
    },
    setSchools: (state, payload) => {
      state.schools = payload
    },
    resetSchools: (state) => {
      state.schools = [
        { label: "Abjuration", value: false },
        { label: "Enchantement", value: false },
        { label: "Divination", value: false },
        { label: "Évocation", value: false },
        { label: "Illusion", value: false },
        { label: "Invocation", value: false },
        { label: "Nécromancie", value: false },
        { label: "Transmutation", value: false },
      ]
    },
    setComponentVerbal: (state, payload) => {
      state.componentVerbal = payload
    },
    setComponentSomatic: (state, payload) => {
      state.componentSomatic = payload
    },
    setComponentMaterial: (state, payload) => {
      state.componentMaterial = payload
    },
  }

}
