/**
 * Created by gaoying on 2017/10/31.
 */


// export default {
//   post: function (url, [body], [options]) {
//     return this.$http.get(url, [body], [options]);
//   },
//   delete: function () {
//     return this.delete(url, [options])
//   },
//   put: function () {
//     return this.put(url, [body], [options])
//   },
//   patch: function (url, [body], [options]) {
//     return this.patch(url, [body], [options])
//   }
// }
import Vue from 'vue';
export function get(url, [options] = []) {
  return Vue.http.get(url, [options]);
}