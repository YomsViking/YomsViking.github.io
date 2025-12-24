function handleClick(category) {
  switch (category) {
    case 'astrology':
      window.location.href = 'astrology.html';
      break;
    case 'tarot':
      window.location.href = 'tarot.html';
      break;
    case 'numerology':
      window.location.href = 'numerology.html';
      break;
    default:
      console.warn('Неизвестная категория:', category);
  }
}