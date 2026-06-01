// Inject shared page chrome once for every page that loads this script.
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (!main) {
        return;
    }

    const logoRow = document.createElement('div');
    logoRow.className = 'logo-row';
    logoRow.innerHTML = '<img src="images/netsci4.png" alt="NetSci 2026" class="logo-row-image">';
    main.parentNode.insertBefore(logoRow, main);

    const sponsorsSlot = document.querySelector('[data-sponsors]');
    if (!sponsorsSlot) {
        return;
    }

    sponsorsSlot.innerHTML = `
        <h2>Gold Sponsor</h2>
        <div class="logo-rows">
            <div class="logos centered gold-sponsor">
    <div class="logo-placeholder">
        <a href="https://www.sparsemindai.com/?lang=en" target="_blank" rel="noopener noreferrer">
            <img src="images/sparsemind.png" alt="Sparsemind AI" style="max-width: 360px; width: 100%; height: auto; background: #eee; display: block;">
        </a>
    </div>
</div>
        </div>
        <h2>Sponsors</h2>
        <div class="logo-rows">
            <div class="logos centered">
                <div class="logo-placeholder">
                    <img src="images/output_CCNI_transparent.png" alt="Center for Complex Network Intelligence" style="height: 150px; width: auto; background: #eee; display: block;">
                </div>
                <div class="logo-placeholder">
                    <img src="images/thbi3.png" alt="Tsinghua Laboratory of Brain and Intelligence" style="width: 250px; height: 150px; background: #eee; display: block;">
                </div>
            </div>
            <div class="logos centered">
                <div class="logo-placeholder">
                    <img src="images/thups2.png" alt="Tsinghua University Press" style="width: 400px; height: 80px; background: #eee; display: block;">
                </div>
                <div class="logo-placeholder">
                    <img src="images/thucs.png" alt="Tsinghua University" style="width: 350px; height: 120px; background: #eee; display: block;">
                </div>
            </div>
        </div>
    `;
});
