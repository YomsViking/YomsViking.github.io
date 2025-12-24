(function () {
  const BOT_NAME = 'TestBot'; // любое имя для теста

  window.orderService = function (service, options = {}) {
    let payload = service;

    if (options.voice) payload += '_voice';

    window.location.href = `https://t.me/${BOT_NAME}?start=${payload}`;
  };
})();