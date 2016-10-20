# natural language processing  

## description  
  > Nodejs环境下自然语言处理工具，包含分词标注，情感分析等。  

## simple to use  
  ```
  let {oops} = require('nlp_sf');
  console.log(oops.divide('这是待分词文本，调用oops接口直接分词并且统计词频。'))
  ```

## [installation](https://www.npmjs.com/package/nlp_sf)  
  ```
  npm install nlp_sf
  ```

## file structure  
  |  
  |  
  +--lib----系统支持库  
  |  
  |  
  +--assets----测试文件  
  |  
  |  
  +--examples----测试程序  
  |  
  |  
  +--index.js----原生nlpir接口  
  |  
  |  
  +--oops.js----封装oops接口  
  |  
  |  
  +--package.json  
  |  
  |  
  +--readme.md  
  
## api  

  - [nlpir](#nlpir)  
  - [oops](#oops)  

### nlpir  
  **description**  
  > 原生自然语言处理工具，包含分词标注，情感分析等。

  **loading**  
  first you need to load nlpir. this is the preferred method:  
  ```
  let nlp = require('nlp_sf');
  let {nlpir} = nlp;
  ```

  optionally, you also can load nlpir by the method:  
  ```
  let {nlpir} = require('nlp_sf');
  ```

  **.init()**  
  ```
  nlpir.init();
  ```

  **.exit()**  
  ```
  nlpir.exit();
  ```

### oops  
  **description**  
  > 封装自然语言处理工具，包含分词并统计词频，情感分析等。  

  **loading**  
  first you need to load oops. this is the preferred method:  
  ```
  let nlp = require('nlp_sf');
  let {oops} = nlp;
  ```

  optionally, you also can load oops by the method:  
  ```
  let {oops} = require('nlp_sf');
  ```

  **.divide(params)**  
  simply, method to divide a string and return array consist of the top 100 words sort by frequency.  
  ```
  let arr = oops.divide('这是待分词文本，调用oops接口直接分词并且统计词频。');
  ```

  custom divide params:  
  ```
  let path = require('path');
  let text = '这是待分词文本，调用oops接口直接分词并且统计词频。';
  let userDict = '../assets/userDict.txt';
  userDict = path.join(__dirname, userDict);
  let dict = {
    userDict,
    userWord: ['两国关系 n']
  };
  let query = {
    top: 20,
    freq: 0,
    len: 1,
    tags: ['n']
  };
  let params = {
    text,
    dict,
    query
  }
  let arr = oops.divide(params);
  ```
