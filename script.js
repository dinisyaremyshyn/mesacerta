function enviarWhats(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;
  const telefone = '351930950229';

  const texto = `Olá! O meu nome é ${nome}, ${mensagem}`;
  const msgFormatada = encodeURIComponent(texto);

  const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

  console.log(url)
  
  window.open(url, '_blank');
}

AOS.init();

function abrirModal() {
  const modal = document.getElementById('janela-modal');
  modal.classList.add('abrir');

  modal.addEventListener('click', (e) => {
    if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
      modal.classList.remove('abrir');
    }
  });
}
