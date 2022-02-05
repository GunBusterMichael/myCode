window.addEventListener('load', function () {
    var preview_img = this.document.querySelector('.preview_img');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    var bigImg = this.document.querySelector('.bigImg');

    // 1. 鼠标经过（mouseover）和离开（mouseout） preview_img，就显示和隐藏黄色遮挡层 mask 和大预览图 big
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    });

    // 2. 黄色遮挡层 mask 移动跟随鼠标移动
    preview_img.addEventListener('mousemove', function (e) {
        // 2.1 计算鼠标在 preview_img 中的坐标 (x, y)
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 2.2 计算黄色遮挡层 mask 左上角在 preview_img 中的坐标 (maskX, maskY)
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetWidth / 2;
        // 2.3 计算黄色遮挡层 mask 的最大移动距离 MaximumMovingDistanceOfMask
        var maskMaxDistance = preview_img.offsetHeight - mask.offsetHeight;
        // 2.3 限制黄色遮挡层 mask 在 x 轴的移动距离
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMaxDistance) {
            maskX = maskMaxDistance;
        };
        // 2.4 限制黄色遮挡层 mask 在 y 轴的移动距离
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMaxDistance) {
            maskY = maskMaxDistance;
        };
        // 2.5 将黄色遮挡层 mask 左上角在 preview_img 中的坐标赋值给黄色遮挡层 mask 的 left 和 top
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';

        /*
            3. 移动大图 bigImg
                3.1 大图移动距离 = 黄色遮挡层移动距离 * 大图最大移动距离 / 遮挡层最大移动举例
        */
        var bigMaxDistance = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMaxDistance / maskMaxDistance;
        var bigY = maskY * bigMaxDistance / maskMaxDistance;
        bigImg.style.left = - bigX + 'px';
        bigImg.style.top = - bigY + 'px';
    })
})
