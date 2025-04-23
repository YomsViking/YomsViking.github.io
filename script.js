document.addEventListener('DOMContentLoaded', () => {
  const expandableServices = document.querySelectorAll('.expandable');

  expandableServices.forEach(service => {
    service.querySelector('.service-header').addEventListener('click', () => {
      service.classList.toggle('open');
    });
  });
});