import {GDModule} from "../../src";
import {Config} from "./config.module";
import {ConfigService} from "./config.service";

@GDModule({
  imports: [Config],
  providers: [],
  exports: [],
})
export class Application {
  public constructor(private configService: ConfigService, private config: Config) {
    configService.getName() // bob
  }
}