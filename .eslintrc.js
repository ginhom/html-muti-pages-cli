module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true //至此es6语法检查
  },
  extends: 'eslint:recommended', //表示使用默认的规则进行校验
  //"extends":"standard",
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'html', //检查.html中的javascript中的语法错误，执行npm run link就行

    //The eslint-plugin- prefix can be omitted from the plugin name.
    'standard',
    'promise'
  ],
  rules: {
    //规则有3个等级：off（0）、warn（1）和error（2）。off表示禁用这条规则，warn表示给出警告，并不会导致检查不通过，而error则会导师检查不通过
    // "indent": [//缩进
    //     "error",//可以用2代替error
    //     "tab"
    // ],
    // "linebreak-style": [
    //     "error",
    //     "unix"//如果是在window平台上开发的话，就要改成""windows"
    // ],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [2, 'never'],
    'semi-spacing': [2, { before: false, after: true }],
    'no-console': 'off' //不检查console.log的语法，忽略它
  },
  globals: {
    //声明在代码中自定义的全局变量
    document: true,
    navigator: true,
    window: true,
    $: true ////添加支持jquery语法检查，不然会出现 '$'is no-undef,这也可以在env中添加“jquery:true”解决
  }
}
