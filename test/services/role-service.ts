import {GDInjectable} from "../../src";
import {UserService} from "./user-service";

@GDInjectable()
export class RoleService {
  public constructor(public userService: UserService) {
  }
}