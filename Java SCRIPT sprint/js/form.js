// Classe de contato
class Contato {
    constructor(nome, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {

    // Impede a página de recarregar
    event.preventDefault();

    // Captura os dados do formulário
    let data = new Contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    // Mostra os dados no console
    console.log(data);

    // Alerta visual
   alert("Obrigado " + data.nome + ", sua mensagem foi enviada com sucesso!");

    // Limpa TODOS os campos do formulário
    form.reset();
}