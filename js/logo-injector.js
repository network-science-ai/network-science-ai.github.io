// Inject logo row before main content
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (main) {
        const logoRow = document.createElement('div');
        logoRow.className = 'logo-row';
        logoRow.innerHTML = '<img src="images/netsci4.png" alt="NetSci 2026" class="logo-row-image">';
        main.parentNode.insertBefore(logoRow, main);
    }
});
