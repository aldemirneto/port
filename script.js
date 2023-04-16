<!-- Add this script tag at the end of the <body> tag -->
<script>
  // Theme toggler
  const themeToggler = document.getElementById('theme-toggler');
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('w3-black');
    document.body.classList.toggle('w3-white');
  });

  // Language switcher
  const languageSwitcher = document.getElementById('language-switcher');
  languageSwitcher.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    if (currentLang === 'en') {
      document.documentElement.lang = 'pt';
      // TODO: Change the text of your elements to Portuguese here
    } else {
      document.documentElement.lang = 'en';
      // TODO: Change the text of your elements back to English here
    }
  });
</script>


if (currentLang === 'en') {
  document.documentElement.lang = 'pt';
  document.querySelector('#home h1').textContent = 'Portfólio de Aldemir.';
  // Add more translations here
} else {
  document.documentElement.lang = 'en';
  document.querySelector('#home h1').textContent = 'Portfolio of Aldemir.';
  // Add more translations here
}
