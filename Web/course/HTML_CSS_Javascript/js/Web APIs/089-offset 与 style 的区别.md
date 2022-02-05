# offset 与 style 的区别

| offset                                                       | style                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| offset 可以得到==任意样式表==中的样式值                      | style 只能得到==行内样式表==中的样式值                       |
| offset 系列属性得到的==数值没有单位==                        | style.width 和 style.height 获得的是带==有单位的字符串==     |
| offsetWidth 和 offsetHeight ==包含 width \|\| height + padding + border== | style.width 和 style.height ==不包含 padding 和 border==     |
| offset 系列属性是==只读==属性，只能获取不能赋值              | style.width 和 style.height 是==可读写属性==，可以获取可以赋值 |
| ***offset 适合于==获取==元素大小和位置***                    | ***style 适合==更改==元素宽高***                             |

