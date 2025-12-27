// order.js — отладочная версия
function orderService(service, options = {}) {
  if (!window.Telegram || !Telegram.WebApp) {
    alert('Пожалуйста, откройте сайт через Telegram-бот');
    return;
  }

  // Показываем, что кнопка сработала и WebApp доступен
  alert(
    'Заказ готов к отправке!\n' +
    'Service: ' + service + '\n' +
    'window.Telegram = ' + typeof window.Telegram + '\n' +
    'Telegram.WebApp = ' + typeof Telegram.WebApp
  );

  // Здесь можно раскомментировать для настоящей отправки
  // Telegram.WebApp.sendData(JSON.stringify({ service, options }));
  // Telegram.WebApp.close();
}