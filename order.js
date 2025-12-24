(function () {
  const BOT_NAME = 'YourBot'; // ← замени один раз

  window.orderService = function (service, options = {}) {
    let payload = service;

    // доп. опции (на будущее)
    if (options.voice) payload += '_voice';
    if (options.urgent) payload += '_urgent';

    // Если открыто внутри Telegram WebApp
    if (window.Telegram && Telegram.WebApp) {
      Telegram.WebApp.openTelegramLink(
        https://t.me/${BOT_NAME}?start=${payload}
      );
    } else {
      // Обычный браузер
      window.location.href = https://t.me/${BOT_NAME}?start=${payload};
    }
  };
})();
