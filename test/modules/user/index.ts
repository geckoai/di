import {GDModule} from "../../../src";
import {Db} from "../db";

@GDModule({
  imports: [Db]
})
export class User {
  public constructor(public db: Db) {

  }
}