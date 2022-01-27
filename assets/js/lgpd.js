// let lgpdUrl = 'http://alfaclin.com.br/index.html';
let lgpdHtml = `
  <div class="lgpd">
  <div class="lgpd-left">
    Utilizamos Cookies para oferecer a melhor </br> Experiência possível em nosso Site.
    <a href="LGPD.html" target="blank">Saiba mais</a>
  </div>
  <div class="lgpd-right">
    <button>Aceitar</button>
  </div>
</div>
`
let lsContent = localStorage.getItem('lgpd');
  if (!lsContent ) {
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdbutton = lgpdArea.querySelector('button');
    
    lgpdbutton.addEventListener('click', () => {
        
        lgpdArea.remove()
        localStorage.setItem('lgpd', 'Usuario')
    })
  }