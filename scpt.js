var menu=document.getElementById('menu');
menu.onclick=function menu(){
    document.getElementById('menu').classList.toggle('active');
    document.getElementsByTagName('ul')[0].classList.toggle('active');
    document.getElementsByTagName('section')[0].classList.toggle('active');
}