document.addEventListener("DOMContentLoaded", () => {
    const tg = window.Telegram.WebApp;
    
    // Устанавливаем тему Telegram
    document.body.style.background = tg.themeParams.bg_color || "#ffffff";

    // Показываем имя пользователя
    const user = tg.initDataUnsafe.user;
    document.getElementById("user-name").textContent = user ? user.first_name : "Гость";

    // Кнопка отправки данных
    document.getElementById("send-data").addEventListener("click", () => {
        tg.sendData(JSON.stringify({ message: "Привет из Mini App!" }));
    });

    // Показываем веб-приложение
    tg.expand();
});