function fadeOut(){
    const box = document.getElementById('fadeBox');
    box.classList.add('hidden');
}
function fadeIn(){
    const box = document.getElementById('fadeBox');
    box.classList.remove('hidden');
}
document.getElementById('Menu').onclick=function(){
    document.getElementById('Nume').classList.toggle('show');
};
$(document).ready(function(){
    $('.hamburger').click(function(){
      $('#Nume').toggleClass('open');
    });
    $('.has-submenu > a').click(function(e){
      e.preventDefault();
      $(this).parent().toggleClass('open');
    });
  });