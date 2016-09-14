# QRCode 的 javascript 生成库

支持跨浏览器的html5 canvas和table元素。原来的[QRcode](https://github.com/davidshimjs/qrcodejs)，
只能通过引入外部文件的方式引入qrcode，为此在这基础上封装了一层[UMD](https://github.com/umdjs/umd)。

## install

`npm install qrcode2 --save`

## usage

````
<div id="qrcode"></div>
<script>
import QRcode from 'qrcode2';

new QRCode(document.getElementById("qrcode"), "http://www.hujiang.com");
</script>
````

或者配置一些选项：
````
<div id="qrcode"></div>
<script>
import QRcode from 'qrcode2';

var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://www.hujiang.com",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});
</script>
````

