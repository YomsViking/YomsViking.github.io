// order.js — полный рабочий вариант
alert('order.js LOADED'); // временная проверка, убрать после теста

function orderService(service, options = {}) {
  if (!window.Telegram || !Telegram.WebApp) {
    alert('Пожалуйста, откройте сайт через Telegram-бот');
    return;
  }

  const data = {
    service: service,
    options: options
  };

  Telegram.WebApp.sendData(JSON.stringify(data));
  Telegram.WebApp.close();
}