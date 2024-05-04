import {GDInjectable} from "../../../../src";

@GDInjectable()
export class StorageService {
  private name: number = new Date().getTime()

  public getName() {
    return this.name;
  }

  public updateName() {
    this.name = new Date().getTime();
  }
}