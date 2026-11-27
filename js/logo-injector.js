// Inject shared page chrome once for every page that loads this script.
document.addEventListener('DOMContentLoaded', function() {
    const main = document.querySelector('main');
    if (!main) {
        return;
    }

    // NetSciX 2027 and NetSci 2027 logos at the top right of the page
    // content, in date order. style.css reserves the space for them, so
    // they never move the content.
    const logoRow = document.createElement('div');
    logoRow.className = 'logo-row';
    logoRow.innerHTML =
        '<a href="https://netscix2027.github.io/" target="_blank" rel="noopener" class="logo-row-link">' +
            '<img src="images/netscix2027-logo.png" alt="NetSciX 2027 Hong Kong" class="logo-row-image netscix">' +
        '</a>' +
        '<a href="https://netsci2027.github.io/" target="_blank" rel="noopener" class="logo-row-link">' +
            '<img src="images/netsci2027-logo.svg" alt="NetSci 2027" class="logo-row-image">' +
            '<span class="logo-row-caption">Dresden 2027</span>' +
        '</a>';
    main.insertBefore(logoRow, main.firstChild);

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
                    <a href="https://brain.tsinghua.edu.cn/en/Research1/Research_Centers/Complex_Network_Intelligence_Center.htm" target="_blank" rel="noopener noreferrer">
                        <img src="images/output_CCNI_transparent.png" alt="Center for Complex Network Intelligence" style="height: 150px; width: auto; background: #eee; display: block;">
                    </a>
                </div>
                <div class="logo-placeholder">
                    <a href="https://brain.tsinghua.edu.cn/en/index.htm" target="_blank" rel="noopener noreferrer">
                        <img src="images/thbi3.png" alt="Tsinghua Laboratory of Brain and Intelligence" style="width: 250px; height: 150px; background: #eee; display: block;">
                    </a>
                </div>
            </div>
            <div class="logos centered">
                <div class="logo-placeholder">
                    <img src="images/thups2.png" alt="Department of Psychological and Cognitive Sciences, Tsinghua University" style="width: 400px; height: 80px; background: #eee; display: block;">
                </div>
                <div class="logo-placeholder">
                    <img src="images/thucs.png" alt="Department of Computer Science and Technology, Tsinghua University" style="width: 350px; height: 120px; background: #eee; display: block;">
                </div>
            </div>
        </div>
    `;
});
