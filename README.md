# @nicolaz/qrcode

跨浏览器的 JavaScript 版 QRCode 生成库。Fork 自 [QRcode](https://github.com/davidshimjs/qrcodejs)，使其支持 ESM 环境。

## 安装

```
npm i @nicolaz/qrcode
```

## 使用

````js
import QRCode from '@nicolaz/qrcode';
````

### 原生 JavaScript 中

````js
new QRCode(document.getElementById('qrcode'), 'http://www.baidu.com');
````

### React

```react
function QRCode({ url }) {
  const el = useRef(null);
  useEffect(() => {
    new QRCode(el.current, url);
  }, []);

  return (
    <div ref={el} className="qrcode" />
  );
}
```

## API

### 构造函数参数

#### Element

**Type:** HTMLElement | String

如果是 `String` 则认为是元素的 ID 选择器

#### Options

**Type:** Object | String

如果是 `Object` 则认为是一个配置对象：

| 属性         | 描述          | 默认值                  |
| ------------ | ------------- | ----------------------- |
| text         | QRCode 数据源 |                         |
| width        | 渲染宽度      | 256                     |
| height       | 渲染高度      | 256                     |
| colorDark    | 前景色        | `"#000000"`             |
| colorLight   | 背景色        | `"#ffffff"`             |
| correctLevel | 容错级别      | `QRCode.correctLevel.H` |

##### QRCode.correctLevel

* QRCode.correctLevel.L
* QRCode.correctLevel.M
* QRCode.correctLevel.Q
* QRCode.correctLevel.H

### 实例方法

#### qrcode.clear()

清除 QR code

#### qrcode.makeCode(text)

重新渲染另一个 QR code

## License

[MIT](https://github.com/nicolaszhao/qrcode/blob/master/LICENSE) © [nicolaszhao](https://github.com/nicolaszhao)

