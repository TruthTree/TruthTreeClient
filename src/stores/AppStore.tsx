/**
 * Sample MobX Class
 */
import { action, observable, decorate } from "mobx"

class AppStoreClass {
  /////////////// Observable ///////////////

  MapData: string[] = ["foo"]

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
  MapData: observable,
  Create: action,
  Read: action,
  Update: action,
})

export default AppStoreClass
