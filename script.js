function handleClick(category) {
  const pageMap = {
    astrology: 'astrology.html',
    numerology: 'numerology.html',
    tarot: 'tarot.html',
    coffee: 'coffee.html',
    'human-design': 'human.html'
  };

  if (pageMap[category]) {
    window.location.href = pageMap[category];
  } else {
    alert('Эта категория пока не реализована');
  }
}
