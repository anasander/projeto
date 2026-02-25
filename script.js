let contactForm = document.getElementById('stations-contact-form');

contactForm.addEventListener('submit', sendForm);

function sendForm(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos obrigatórios marcados com *");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido (ex: nome@empresa.com)");
        return;
    }

    alert("Formulário enviado com sucesso!");
    contactForm.reset();
}