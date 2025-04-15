document.getElementById('passwordForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单的默认提交行为

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;
    const correctPassword = '1145'; // 在这里设置正确的密码

    if (password === correctPassword) {
        window.location.href = 'xyx.html'; // 跳转到目标网页
    } else {
        alert('密码错误，请重试。');
    }
});