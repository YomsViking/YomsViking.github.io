const BOT_USERNAME = 'YourOwnOracle_bot';
const BOT_ENABLED = true;

function orderService(service, options = {}) {
  if (!BOT_ENABLED) {
    alert('Заказ временно недоступен');
    return;
  }

  const params = new URLSearchParams({
    service: service,
    ...options
  });

  const url = `https://t.me/${BOT_USERNAME}?start=${params.toString()}`;
  window.location.href = url;
}