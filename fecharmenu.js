document.addEventListener('DOMContentLoaded', function() {
    // Obtém todos os links do menu
    const menuLinks = document.querySelectorAll('.menu a');

    // Adiciona um evento de clique a cada link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Fecha o menu
            document.getElementById('side-menu').checked = false;
        });
    });
});
