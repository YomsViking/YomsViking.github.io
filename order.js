function orderService(service, options = {}) {
  // Проверка, что сайт открыт внутри Telegram
  if (!window.Telegram || !Telegram.WebApp) {
    alert('Пожалуйста, откройте сайт через Telegram-бот');
    return;
  }

  const data = {
    service: service,
    options: options
  };

  // Отправляем данные боту
  Telegram.WebApp.sendData(JSON.stringify(data));

  // Закрываем WebApp
  Telegram.WebApp.close();
}