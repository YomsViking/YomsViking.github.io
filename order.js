(function () {
  if (window.Telegram && Telegram.WebApp) {
    Telegram.WebApp.ready();
  }
})();

function orderService(service, options = {}) {
  if (!window.Telegram || !Telegram.WebApp) {
    alert('Откройте сайт через Telegram-бот');
    return;
  }

  Telegram.WebApp.sendData(JSON.stringify({
    service,
    options
  }));

  Telegram.WebApp.close();
}