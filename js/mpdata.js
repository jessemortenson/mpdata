const run = () => {
  // navigation
  const navActivator = document.querySelector('.nav-activator');
  const nav = document.querySelector('nav');
  navActivator.addEventListener('click', (click) => {
    nav.classList.toggle('active');
    click.preventDefault();
  });
}

if (document.readyState!=='loading') run();
else if (document.addEventListener) document.addEventListener('DOMContentLoaded', run);
else document.attachEvent('onreadystatechange', function(){
  if (document.readyState==='complete') run();
});
