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