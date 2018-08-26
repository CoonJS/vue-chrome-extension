const ls = require('local-storage');

export default class LocalStorage {
  getValue(key) {
    return ls.get(key);
  }

  setValue(key, value) {
    ls.set(key, value);
  }
}