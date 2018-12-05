/**
 * Sample MobX Class
 */
import { action, observable, decorate } from "mobx"

class AppStoreClass {
  /////////////// Observable ///////////////

  AppData = []

  ///////////////// Drivers /////////////////

  Create() {
    // do something
  }
  Read() {
    // do something
  }
  Update() {
    // do something
  }
}

decorate(AppStoreClass, {
  AppData: observable,
  Create: action,
  Read: action,
  Update: action,
})

export default AppStoreClass
