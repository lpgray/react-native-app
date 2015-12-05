/*jslint node: true, esnext: true */
/* globals module, require */

import {TASK_DATA} from './data';

const Server = {
  getTasks(callback) {
    callback(null, TASK_DATA);
  },

  getTask(id, callback) {
    for (let i = 0,l = TASK_DATA.length; i<l ; i++) {
      if (TASK_DATA[i].id === id) {
        callback(null, TASK_DATA[i]);
        return;
      }
    }
  }
};

export default Server;
