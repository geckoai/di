import {GDModule} from "../../../src";
import {StorageService} from "./services/storageService";

@GDModule({
  providers: [StorageService],
  exports: [StorageService]
})
export class Db {
  public constructor(public storageService: StorageService) {}
}