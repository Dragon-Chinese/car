import { getImgList, getCate } from '../../api/index.js'

const state = {
  list: [],
  cateimg: [],
  page: 1,
  id: 0,
  isshowSwiper : false,
}

const mutations = {
  updateList: (satet, {list}) => {
    state.list = list
    state.cateimg = []
  },
  updateCate: (state, {list}) => {
    state.page++
    state.cateimg = state.cateimg.concat(list)
  },
  showAll: (state, payload) => {
    state.id = payload
  },
  showSwiper : (state , payload) => {
      state.isshowSwiper = payload;
  },
}

const actions = {
  getImageList ({commit}, payload) {
    console.log(payload)
    getImgList(payload)
      .then(res => {
        res.json()
          .then(body => {
            if (body.code === 1) {
              commit('updateList', {list: body.data})
            } else {
              alert(body.msg)
            }
          })
      })
  },
  getCateimg ({commit, state}, payload) {
    getCate(state.id, state.page)
      .then(res => {
        res.json()
          .then(body => {
            if (body.code === 1) {
              commit('updateCate', {list: body.data.List})
            } else {
              alert(body.msg)
            }
          })
      })
  },
  showAll ({commit}, payload) {
    commit('showAll', payload)
  },
  showSwiper({commit} , payload) {
      commit('showSwiper' , payload)
  },
}

export default {
  state,
  mutations,
  actions
}
