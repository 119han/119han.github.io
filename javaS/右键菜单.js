const menu = document.getElementById('context-menu');
let lastClickTime = 0;

// 阻止默认右键菜单
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();

    // 防止快速重复点击
    const now = Date.now();
    if (now - lastClickTime < 300) return;
    lastClickTime = now;

    showMenu(e.clientX, e.clientY);
});

// 显示菜单
function showMenu(x, y) {
    // 边界检测
    const maxX = window.innerWidth - menu.offsetWidth - 10;
    const maxY = window.innerHeight - menu.offsetHeight - 10;

    menu.style.left = `${Math.min(x, maxX)}px`;
    menu.style.top = `${Math.min(y, maxY)}px`;
    menu.style.display = 'block';

    // 添加淡入动画
    menu.style.opacity = '1';
}

// 隐藏菜单
function hideMenu() {
    menu.style.opacity = '0';
    setTimeout(() => {
        menu.style.display = 'none';
    }, 150);
}

// 点击处理
function handleClick(action) {
    hideMenu();

    // 根据点击项执行不同操作
    switch (action) {
        case 'html':
            window.location.replace("/index.html");
            break;
        case 'wxt':
            window.location.replace('/wangxiaotao/wxt.html');
            break;
        case 'xyx':
            window.location.replace('/xyx.html');
            break;
        case 'yyq':
            window.location.replace('/yyq.html');
            break;
        case '右键背景':
            window.location.replace('/右键背景.html');
            break;
        case 'AI聊天网页':
            window.location.replace('/bot聊天/bot.html');
            break;
        case 'yxbot':
            window.location.replace('/bot聊天/yxbot/lt.html');
            break;
        case 'alsbot':
            window.location.replace('/bot聊天/alsbot/lt.html');
            break;
        case 'wxtbot':
            window.location.replace('/bot聊天/wxtbot/lt.html');
            break;
    }
}

// 页面点击隐藏菜单
document.addEventListener('click', hideMenu);

// 滚动隐藏菜单
document.addEventListener('scroll', hideMenu);

// 针对不同元素的右键菜单（示例）
//document.addEventListener('contextmenu', (e) => {
//    const target = e.target;

//    if (target.tagName === 'A') {
        // 链接专属菜单项
//        const linkMenu = document.createElement('div');
//        linkMenu.className = 'menu-item';
//        linkMenu.textContent = '打开链接';
//        linkMenu.onclick = () => window.open(target.href);
//        menu.appendChild(linkMenu);
//    }
//});

// 添加子菜单支持
function createSubMenu(parentItem, items) {
    const subMenu = document.createElement('div');
    subMenu.className = 'sub-menu';
    // 添加样式和菜单项...

    parentItem.addEventListener('mouseenter', () => {
        // 显示子菜单逻辑
    });

    return subMenu;
}


//随机三角形漂浮
const container = document.getElementById('context-menu');
const triangleCount = 20; // 三角形的数量

// 创建三角形
function createTriangles() {
    for (let i = 0; i < triangleCount; i++) {
        const triangle = document.createElement('div');
        triangle.className = 'triangle';

        const colors = ['rgb(255, 255, 255, 0.5)', 'rgb(255, 255, 255, 0.6)', 'rgb(255, 255, 255, 0.1)'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        triangle.style.borderBottomColor = randomColor;

        // 随机位置
        triangle.style.left = `${Math.random() * 50}vw`;
        triangle.style.top = `${Math.random() * 50}vh`;

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
        if (left > 10) left = 0;
        if (left < 0) left = 10;
        if (top > 28) top = 0;
        if (top < 0) top = 28;

        triangle.style.left = `${left}vw`;
        triangle.style.top = `${top}vh`;
    });

    requestAnimationFrame(updateTriangles);
}

// 初始化
createTriangles();
updateTriangles();