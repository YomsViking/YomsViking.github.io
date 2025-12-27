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

  Telegram.WebApp.sendData(JSON.stringify(data));
  Telegram.WebApp.close();
}