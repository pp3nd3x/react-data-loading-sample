// import { getUserInfo } from './api';

const getUserInfo = () => {
  const getData = new Promise(resolve => {
    console.log('promise started');
    setTimeout(resolve, 15000);
  });
  getData.then(x => console.log('userInfo resolved'));
  return getData;
};

const promises = {
  userInfo: getUserInfo
};

class DataLoader {
  constructor(promise) {
    this._self = this;
    this._status = null; // [''pending', 'fulfilled', 'rejected', 'cancelled']
    this._promise = promise;
    this._pro = null;
    this._error = null;
    this._data = null;
    this._onInit = null;
    this._onSuccess = null;
    this._onFail = null;
    // this.init = this.init.bind(this);
    // this.accept = this.accept.bind(this);
    // this.init = this.init.bind(this);
    // this.getStatus = this.getStatus.bind(this);
    // this.setOnSuccess = this.setOnSuccess.bind(this);
    // this.setOnFail = this.setOnFail.bind(this);
    // this.cancel = this.cancel.bind(this);
  }

  accept(visitor) {
    visitor.visit(self);
  }

  init() {
    this._status = 'pending';
    // this._onInit.call();
    console.log('Promise', this.promise);
    this._pro = new Promise(resolve => {
      this._promise
        .call()
        .then(result => {
          if (this._status !== 'cancelled') {
            console.log('Promise then');
            this._status = 'fulfilled';
            this._data = result;
            this._onSuccess.call();
            resolve(this);
          }
        })
        .catch(error => {
          if (this._status !== 'cancelled') {
            console.log('Promise catch');
            this._status = 'rejected';
            this._error = error;
            this._onFail.call();
          }
        });
    });
    return this._pro;
  }

  getStatus() {
    return this._status;
  }

  setOnSuccess(callback) {
    this._onSuccess = callback;
  }

  setOnFail(callback) {
    this._onFail = callback;
  }

  cancel() {
    this._status = 'cancelled';
    this._data = null;
  }
}

const myDataLoader = new DataLoader(promises['userInfo']);
myDataLoader.setOnSuccess(() => console.log('YEAHHH!!'));

// const loaders = {
//   client1: new DataLoader(promises['userInfo']),
//   client2: new DataLoader(promises['userInfo']),
//   client3: new DataLoader(promises['userInfo']),
//   client4: new DataLoader(promises['userInfo']),
//   client5: new DataLoader(promises['userInfo'])
// };

// export default loaders;
