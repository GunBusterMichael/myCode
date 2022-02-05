# URL && location 对象

## 1. URL

### 1.1 URL 的定义

统一资源定位器 (Uniform Resource Location, URL) 是互联网上的标准资源的地址。

互联网上的每个文件都有一个唯一的 URL 。URL 包含的信息可以指出文件的位置，并告诉浏览器如何处理它。

### 1.2 URL 的一般语法格式

```URL
protocol://host[:port]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=carol&age=20#link
```

| 组成     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| protocol | 通讯协议。常见的通讯协议有：http、ftp、maito……               |
| host     | 主机（域名）。例如：www.itcast.cn                            |
| port     | （可选）端口，省略时为默认端口。http的默认端口为 80          |
| path     | 路径，是由 0 或多个 / 隔开的字符串，一般用来表示主机上的一个目录或一个文件地址 |
| query    | 参数，格式为键值对。通过 & 分割每一个键值对                  |
| fragment | 片段，以 # 开头，常用来表示锚点、链接                        |

## 2. location 对象

### 2.1 location 对象的定义

Window 对象提供了一个 ==location 属性==。该属性用于==获取或设置窗体的 URL== ，并可以被用于==解析 URL== 。

因为这个属性==返回==的是==一个对象==，所以这个属性也被称为 location 对象。

### 2.2 location 对象的属性

http://www.itcast.cn/index.html?name=carol&age=20#link

| location 对象属性       | 返回值                                          | 举例                                                     |
| ----------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| location.href（重要）   | 获取或设置整个 URL                              | 'http://www.itcast.cn/index.html?name=carol&age=20#link' |
| location.host           | 返回主机（域名）                                | 'www.itcast.cn'                                          |
| location.port           | 返回端口号。如果 URL 中没写端口，则返回空字符串 | ''                                                       |
| location.pathname       | 返回路径                                        | '/index.html'                                            |
| location.search（重要） | 返回参数                                        | '?name=carol&age=20'                                     |
| location.hash           | 返回片段                                        | '#link'                                                  |

