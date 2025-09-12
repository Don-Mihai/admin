const themeImg = document.querySelector('.theme-img');
const root = document.querySelector('body');
let isDark = false;

const darkStyles = {
  '--color-base': '#fff',
  '--color-container': 'rgb(199, 198, 198)',
};
const lightStyles = {
  '--color-base': 'rgb(199, 198, 198)',
  '--color-container': '#fff',
};

themeImg.addEventListener('click', () => {
  if (isDark) {
    Object.entries(lightStyles).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  } else {
    Object.entries(darkStyles).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }
  isDark = !isDark;
});

//todo: вынести цвета темы на бэкенды
//todo: сделать смнеу изображений для темы на реакте
