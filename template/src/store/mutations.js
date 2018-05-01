import * as types from "./mutations-types";

const mutations = {
  [types.SET_TOKEN](state, token) {
    state.token = token;
    wx.setStorageSync("__token__", token);
  },
  [types.LOGOUT](state) {
    state.token = "";
    wx.removeStorageSync("__token__");
  }
};

export default mutations;
