function handleClick(category) {
  switch (category) {
    case 'astrology': window.location.href = 'astrology.html'; break;
    case 'numerology': window.location.href = 'numerology.html'; break;
    case 'tarot': window.location.href = 'tarot.html'; break;
    case 'coffee': window.location.href = 'coffee.html'; break;
    case 'human': window.location.href = 'human.html'; break;
    default: alert('Категория не найдена');
  }
}
