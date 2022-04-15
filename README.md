# getGitlabCfg

download gitlab repo given file for some use, for example configure

# Usage

```sh
const getCfg = require('getgitlabcfg');
getCfg({
  token: 'xxx', //gitlab token
  host: 'http://git.xxx.com', //gitlab host
  projectId: 'xxxx',
  src: 'xxx/xxx/xxx.js', //repo file path
  branch: 'master',
  dist: './config.js'
});
```
