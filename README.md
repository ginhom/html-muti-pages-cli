# html-muti-pages-cli
使用webpack快速构建多页面前台项目。

## 思路
- 1、把公共部分html抽取出来，如页头、导航、页脚；
- 2、使用handlebars作为模板，把各公共部分组成一个完整的html文件

## 目录结构
```
├── README.md
├── build    
│   ├── dev-server.js   //使用express作为研发调试服务器
│   ├── webpack.base.config.js   //webpack公共配置
│   ├── webpack.config.dev.js     //研发环境配置
│   └── webpack.config.prod.js   //生产环境配置
├── package.json
├── postcss.config.js  //postcss配置
└── src
    ├── js
    │   └── common.js  //公共js定义
    ├── layout
    │   ├── footer.hbs  //页脚模板
    │   ├── header.hbs  //页头模板
    │   ├── index.js  //模板函数,用于生成一个完整的html文件
    │   ├── layout.hbs  //布局模板
    │   └── top-nav.hbs //顶部导航模板
    └── pages
        └── test    //测试单页面
            ├── content.hbs   //测试单页内容模板
            └── index.js      //配置页面参数，生成一个完整的html文件