# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.1.2 (2021-01-10)

**Note:** Version bump only for package @typescript-runtime-schema/transform





## 0.1.1 (2021-01-10)

**Note:** Version bump only for package @typescript-runtime-schema/transform





# 0.1.0 (2021-01-10)


### Bug Fixes

* **transform:** Fix a bug where a type literal is misrepresented in the final output ([a4894cf](https://github.com/simonlovesyou/typescript-schema/commit/a4894cfa4ba50b78d97d2e91cba14296c75163a8))
* **transform:** Fix issue where a CallExpression was not properly traversed if it had another CallExpression as a distant parent ([b79c533](https://github.com/simonlovesyou/typescript-schema/commit/b79c533f93b4f7f1d90e01b996ce2f501533d169))
* **transform:** Update the finding of root identifier for library to not include imports ([682afea](https://github.com/simonlovesyou/typescript-schema/commit/682afea37924d56b52dc53a8e9b53a86383388f8))


### Features

* **library:** Add support for null validation ([367a3b2](https://github.com/simonlovesyou/typescript-schema/commit/367a3b25d3d75ea7a3d67299feb8cf5efa28e196))
* **library:** Add support for void validation ([b3943da](https://github.com/simonlovesyou/typescript-schema/commit/b3943da19e4440b16fd940c9d127acfe1289bbfa))
* **transform:** Add additionalProperties to TypeLiteralNode ([7723ac5](https://github.com/simonlovesyou/typescript-schema/commit/7723ac56188b00a736267666d05884f80b2a5387))
* **transform:** Add currying to the transpiled source code ([487a6db](https://github.com/simonlovesyou/typescript-schema/commit/487a6dbc665b08d55b1f2d727c0942fda36e0a7e))
* **transform:** Add default false value for additional properties in interfaces ([41c614f](https://github.com/simonlovesyou/typescript-schema/commit/41c614fd49a3973996f8d68cb2911cedcd262b2e))
* **transform:** Add merging of intersection types ([eeca34d](https://github.com/simonlovesyou/typescript-schema/commit/eeca34db3319dd21550ab43a32df678e715a4524))
* **transform:** Add support for any validation ([9b49bd9](https://github.com/simonlovesyou/typescript-schema/commit/9b49bd9346813a5baae30f949c1685502aa6603b))
* **transform:** Add support for Array utility type ([02556a8](https://github.com/simonlovesyou/typescript-schema/commit/02556a88cfb156ef10c2808a3757a21e4dbfbe81))
* **transform:** Add support for boolean validation ([7169891](https://github.com/simonlovesyou/typescript-schema/commit/71698910256e2162eed1ad171ddf49d738472158))
* **transform:** Add support for Extract & Exclude utility types ([51fad07](https://github.com/simonlovesyou/typescript-schema/commit/51fad07a7cd8a52a87d80df7d90018b60558988e))
* **transform:** Add support for heritage for interfaces ([b6afd5e](https://github.com/simonlovesyou/typescript-schema/commit/b6afd5ec31849e8c83024651b3452c5606ac7da0))
* **transform:** Add support for index signatures ([a56c03b](https://github.com/simonlovesyou/typescript-schema/commit/a56c03b9e9b2ec16c64d7247017ec76076516998))
* **transform:** Add support for interfaces ([b2a8008](https://github.com/simonlovesyou/typescript-schema/commit/b2a800880e78e8b920e40d25ff4b719d8ad198d6))
* **transform:** Add support for intersection ([b5ece23](https://github.com/simonlovesyou/typescript-schema/commit/b5ece23e8fd887dec7410a55a7c20588e54b1072))
* **transform:** Add support for keyof operator ([aa67a37](https://github.com/simonlovesyou/typescript-schema/commit/aa67a375fe01e06ef2fbf1a47c47fc604a29223d))
* **transform:** Add support for merging nested extends for interfaces ([a1d5e01](https://github.com/simonlovesyou/typescript-schema/commit/a1d5e01bdd8d370ba42eb3c9bcc87f39df99c9e1))
* **transform:** Add support for naive object validation ([12cf987](https://github.com/simonlovesyou/typescript-schema/commit/12cf9870a37974426aebc10a7dc0dfe41aac8018))
* **transform:** Add support for NonNullable utility type ([7a23a64](https://github.com/simonlovesyou/typescript-schema/commit/7a23a64bf9aba358123b7e409f3f7de5820fd9c4))
* **transform:** Add support for Omit utility type ([6ae995c](https://github.com/simonlovesyou/typescript-schema/commit/6ae995cdfe856b8063b7f2d51ca3dd5d5561b112))
* **transform:** Add support for Partial utility type ([f9f7c59](https://github.com/simonlovesyou/typescript-schema/commit/f9f7c595aafb28611a6437a87c5c1e19eb65e37f))
* **transform:** Add support for Pick utility type ([a8bb1d0](https://github.com/simonlovesyou/typescript-schema/commit/a8bb1d0cd658ab174ba0872e689ebb5ac1c84393))
* **transform:** Add support for Pick utility type ([b2bf830](https://github.com/simonlovesyou/typescript-schema/commit/b2bf830b701963da23c6f33a772f417d666a42e7))
* **transform:** Add support for Record utility type ([b20a78e](https://github.com/simonlovesyou/typescript-schema/commit/b20a78ea04f1a75ee04c88e72d0e72f5c094936b))
* **transform:** Add support for required properties ([bccf9d0](https://github.com/simonlovesyou/typescript-schema/commit/bccf9d0b28ee00c8e117cfe331c9a35d986d9e37))
* **transform:** Add support for required properties in type literal nodes ([897b564](https://github.com/simonlovesyou/typescript-schema/commit/897b564f0cea1d89e18739dcd6105c117370134a))
* **transform:** Add support for tuples ([5f20c67](https://github.com/simonlovesyou/typescript-schema/commit/5f20c67dd462d5d5cbb10f75fe16f186f24703cd))
* **transform:** Add support for undefined values ([c4297fe](https://github.com/simonlovesyou/typescript-schema/commit/c4297fe8ecebb3df4062ff7e54651e22ed12328b))
* **transform:** Add support for union types ([ec99370](https://github.com/simonlovesyou/typescript-schema/commit/ec993705d912cca2c2eb89ae4f2181c016fc5c10))
* **transform:** Add support for unions ([ecc3b78](https://github.com/simonlovesyou/typescript-schema/commit/ecc3b78b9c12de4d37bbc43b0bdb21b14a92bbee))
* **transform:** Add title to interfaces ([2dfbaf7](https://github.com/simonlovesyou/typescript-schema/commit/2dfbaf7cacc44162ba5e11bd000950ea483a7f84))
* **transform:** Almost a working version ([91203f7](https://github.com/simonlovesyou/typescript-schema/commit/91203f7562d724a38c1889f30d05c39ddfcaf52b))
* **transform:** Change the resulting schema for typescript enums ([8c357b7](https://github.com/simonlovesyou/typescript-schema/commit/8c357b7601a89a2c20a32543899371c4de030155))
* **transform:** Create type array for the schema descriptor instead of array of json schemas ([e213427](https://github.com/simonlovesyou/typescript-schema/commit/e21342713bff54147aebf8d23cd45ae657840087))
* **transform:** Merge interfaces by (currently only a single) heritage ([4a433c2](https://github.com/simonlovesyou/typescript-schema/commit/4a433c27cc947d42f6c0aecd98aa112f6dc7fa56))
* **transform:** Update existing CallExpression instead of creating a new one ([1d25383](https://github.com/simonlovesyou/typescript-schema/commit/1d253833a5c2282f041b97bd94c08b844194d3e3))
