
const circle = document.querySelector('.hover-circle');
document.addEventListener('mousemove', e => {
  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';
});
