//vuex文件入口
import Vuex from "vuex";
import Vue from "vue";
import state from "./state";
import * as getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV === "development";
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugin: debug ? [createLogger()] : []
});
