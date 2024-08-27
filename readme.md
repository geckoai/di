# di
The @geckoai/di a tiny inversion of control container for JavaScript.

[![npm (scoped)](https://img.shields.io/npm/v/@geckoai/di)](https://www.npmjs.com/package/@geckoai/di)

## Installing

```shell
npm i reflect-metadata @geckoai/class-mirror @geckoai/di
#or
yarn add reflect-metadata @geckoai/class-mirror @geckoai/di
```

## Example Usage

### Crate application

```ts
import {GDModule} from "../../src";

@GDModule({
  imports: [],
  providers: [],
  exports: [],
})
export class Application {
  public constructor() {}
}
```


### Import modules

> config.service.ts

```ts
import {GDInjectable} from "../../src";

@GDInjectable()
export class ConfigService {
  private name: string = "alice"
  public setName(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}
```

> config.module.ts

```ts
import {GDModule} from "../../src";
import {ConfigService} from "./config.service";

@GDModule({
  // provider providers
  providers: [ConfigService],
  exports: [ConfigService],
})
export class Config {
  constructor(private service: ConfigService) {
    service.getName() // alice
    service.setName('bob');
  }
}
```

```ts
import {assert} from 'chai';
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

const app = EnvironmentInjector.run(Application);
asset.equal(app.configService, config.configService);
```



## Documentation
- [ApiDocs](https://geckoai.github.io/di/)
- [samples](https://github.com/geckoai/di/tree/master/sample)


## Issues
Create [issues](https://github.com/geckoai/di/issues) in this repository for anything related to the Class Decorator. When creating issues please search for existing issues to avoid duplicates.


## License

```
/**
 * MIT License
 * Copyright (c) 2021 RanYunLong<549510622@qq.com> @geckoai/di
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
```

Licensed under the [MIT](https://github.com/geckoai/di/blob/master/LICENSE) License.
