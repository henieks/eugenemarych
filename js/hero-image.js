const svgIconButton = document.getElementById('svgIcon');
function toggleSvgAndImage() {
   const svgIcon = svgIconButton.querySelector("svg");
   const heroImage = document.querySelector('.hero-image');

   if (svgIcon.dataset.toggled === 'true') {
      // Вернуть оригинальный SVG
      svgIcon.innerHTML = `
           <g fill="none" stroke="#6C6C6C" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/><path d="M16.681 16.673A8.7 8.7 0 0 1 12 18q-5.4 0-9-6q1.908-3.18 4.32-4.674m2.86-1.146A9 9 0 0 1 12 6q5.4 0 9 6q-1 1.665-2.138 2.87M3 3l18 18"/></g>
       `;
      svgIcon.dataset.toggled = 'false';
      heroImage.classList.remove("show");
   } else {
      // Изменить SVG
      svgIcon.innerHTML = `
           <g fill="none" stroke="#ffb800" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/><path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6"/></g>
       `;
      svgIcon.dataset.toggled = 'true';
      heroImage.classList.add("show");
   }
}
svgIconButton.addEventListener("click", toggleSvgAndImage)
