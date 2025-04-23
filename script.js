document.addEventListener('DOMContentLoaded', () => {
  const expandableServices = document.querySelectorAll('.expandable');

  expandableServices.forEach(service => {
    service.addEventListener('click', () => {
      service.classList.toggle('open');
    });
  });
});