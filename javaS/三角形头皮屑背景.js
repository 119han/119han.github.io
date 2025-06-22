const container = document.getElementById('三角形头皮屑背景');
const triangleCount = 80; // 三角形的数量

// 创建三角形
function createTriangles() {
    for (let i = 0; i < triangleCount; i++) {
        const triangle = document.createElement('div');
        triangle.className = 'triangle';

        const colors = ['rgb(255, 255, 255, 0.5)', 'rgb(255, 255, 255, 0.6)', 'rgb(255, 255, 255, 0.7)', 'rgb(255, 255, 255, 0.1)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        triangle.style.borderBottomColor = randomColor;

        // 随机位置
        triangle.style.left = `${Math.random() * 100}vw`;
        triangle.style.top = `${Math.random() * 100}vh`;

        // 随机大小（通过调整border宽度）
        const size = Math.random() * 4 + 3;
        triangle.style.borderLeftWidth = `${size}px`;
        triangle.style.borderRightWidth = `${size}px`;
        triangle.style.borderBottomWidth = `${size * 2}px`;

        // 随机漂浮速度
        triangle.dataset.speedX = (Math.random() - 0.5) * 0.1;
        triangle.dataset.speedY = (Math.random() - 0.5) * 0.1;

        container.appendChild(triangle);
    }
}

// 更新三角形位置
function updateTriangles() {
    const triangles = document.querySelectorAll('.triangle');

    triangles.forEach(triangle => {
        let left = parseFloat(triangle.style.left) || 0;
        let top = parseFloat(triangle.style.top) || 0;
        const speedX = parseFloat(triangle.dataset.speedX);
        const speedY = parseFloat(triangle.dataset.speedY);

        left += speedX;
        top += speedY;

        // 如果三角形移出容器，则重置到另一侧
        if (left > 100) left = -20;
        if (left < -20) left = 100;
        if (top > 100) top = -20;
        if (top < -20) top = 100;

        triangle.style.left = `${left}vw`;
        triangle.style.top = `${top}vh`;
    });

    requestAnimationFrame(updateTriangles);
}

// 初始化
createTriangles();
updateTriangles();