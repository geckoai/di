import {GDInjectable} from "../../src";

@GDInjectable()
export class UserService {
  public getName() {
    return '小明';
  }

  public getAge() {
    return 20;
  }
}