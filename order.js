alert('order.js LOADED');

function orderService(service, options = {}) {
  alert(
    'window.Telegram = ' + typeof window.Telegram +
    '\nTelegram.WebApp = ' + typeof window.Telegram?.WebApp
  );
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