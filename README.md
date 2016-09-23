# QRCode
JavaScript版本的QR Code生成库，支持跨浏览器兼容性，实现原理是使用html5的canvas和table绘制。原来的[QRcode](https://github.com/davidshimjs/qrcodejs)，
只能在script中引入外部文件的方式引入qrcode。为此在这基础上封装了一层[UMD](https://github.com/umdjs/umd)。

## 用法

1. 使用[npm](https://docs.npmjs.com)安装到你的项目中：`npm install qrcode2 --save`
2. 使用commonjs或者es6模块方式导入：
````
var QRCode = require('qrcode2');
//
// 或者
import QRCode from 'qrcode2';
````

3. 实例化`QRCode`对象：
````
new QRCode(document.getElementById('qrcode'), 'http://www.baidu.com');
//
// 或者配置一些选项：
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://www.hujiang.com",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
````

## 参数

* Element (HTMLElement|String)：HTML元素对象，或者元素id选择器
* Options (Object|String)：可选参数对象或者qr code的源数据
    * Options.width：渲染宽度，默认（256）
    * Options.height：渲染高度，默认（256）
    * Options.colorDrak：渲染前景色，默认（#000000）
    * Options.colorLight：渲染背景色，默认（#ffffff）
    * Options.CorrectLevel：容错级别，默认（QRCode.CorrectLevel.L）可设置为：
    ````
    QRCode.CorrectLevel.L
    QRCode.CorrectLevel.M
    QRCode.CorrectLevel.Q
    QRCode.CorrectLevel.H
    ````

## 方法

* clear：清除QR code
* makeCode(text: String)：重新绘制QR code
