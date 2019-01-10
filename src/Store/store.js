import { observable, action } from "mobx";

class MyStore {
  @observable num = 0;

  @action.bound async incrementAsync() {
    await new Promise(resolve => {
      setTimeout(() => {
        this.num += 1;
        resolve();
      }, 1000);
    });
  }
}

const mofu = new MyStore();
export default mofu;
