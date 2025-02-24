import { GDModule } from "../../src";
import { ConfigService } from "./config.service";

@GDModule({
  // provider providers
  providers: [ConfigService],
  exports: [ConfigService],
})
export class Config {
  constructor(private service: ConfigService) {
    service.getName(); // alice
    service.setName("bob");
  }
}
