// LÓGICA PARA MENU-HAMBURGUER
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


// LÓGICA PARA SCROLL DOS LINKS DE SESSÃO
function scrollSuave(event, destinoId) {
    event.preventDefault();
    const destino = document.getElementById(destinoId);
    window.scroll({
        top: destino.offsetTop,
        behavior: 'smooth'
    });
}

document.querySelectorAll('.link-sessao').forEach(link => {
    link.addEventListener('click', (event) => {
        const destinoID = event.target.getAttribute('href').substring(1);
        scrollSuave(event, destinoID);
    });
});


// LÓGICA PARA BOTÃOO VOLTAR AO TOPO
window.onscroll = function () {
    const voltarAoTopo = document.getElementById('voltar-ao-topo');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      voltarAoTopo.classList.remove('escondido');
    } else {
      voltarAoTopo.classList.add('escondido');
    }
  };
  
  function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }