var sur = document.getElementById('welcome');
var ag1 = document.getElementById('anime1gif');
var surText = [
    'Welcomee!', 'to', 'Re Links',
    'I' , 'hope', 'you',
    'are', 'happy', 'with',
    'the', 'service', 'we', 'provide',
    `with`, `♡`
];
var borText = [
    `Aren't`, `you`, `tired`, `of`, `waiting?,`, 
    `after`, `you`, `enter`, `I'll`, `give`, `you`, `lots`, `of`, 
    `entertainment`
];
if (location.reload == location.reload) {
    let i = -1;
    let n = -1;
    let x = -1;
    ag1.src = 'anime1.gif';
    var sendBor = setInterval(() => {
        i++;
        if (i > 60) {
            x++;
            setTimeout(() => {
                sur.innerHTML += ' ' + borText[x];
            }, 100); 
            if (x == 13) {
                clearInterval(sendBor);
            }
        } else if (i == 60) {
            setInterval(() => {
                ag1.src = 'anime2.gif';
            }, 4799);
            sur.innerHTML = '';
            clearInterval(agif1);
        } 
    }, 1000);
    var sendSur = setInterval(() => {
        n++;
        sur.innerHTML += ' ' + surText[n];
        if (n === 14) {
            clearInterval(sendSur);
        }
    }, 1000);
}
var featuresData = [
    `Search anime & Download anime`,
    `Streaming anime`,
    `Whatsapp number generator`,
    `Other`
];
var agif1 = setInterval(() => {
    ag1.src = 'anime1.gif';
}, 4800);
function docs() {
    let cn = document.getElementById('Content');
    document.getElementById('img-gif').style.opacity = '0';
    cn.style.opacity = '0';
    setTimeout(() => {
        document.getElementById('img-gif').remove();
    }, 2000);
    setTimeout(() => {
        var b = 0;
        document.body.style.overflow = 'auto';
        cn.style.height = '85%';
        cn.style.overflow = 'auto';
        cn.style.margin = '0 0 0 150%';
        setTimeout(() => {
            cn.style.opacity = '1';
            cn.style.margin = '0';
            cn.innerHTML = `
                <div class="TitleC">
                    <div>
                        <h2>Features:</h2>
                        <h2>Status:</h2>
                    </div>
                </div>
                <div id="FI" class="FeaturesItem">

                </div>
            `;
            let fii = document.getElementById('FI');
            let v = -1;
            var sendFeaturesData = setInterval(() => {
                v++;
                fii.innerHTML += '<div class="FI-I">' + 
                `<p class="FI-IP">` +
                featuresData[v] + 
                `</p>` +
                `<p class="FI-Status">` +
                `<i class="fa-solid fa-triangle-exclamation"></i>` +
                `&nbsp;Under Maintenance` +
                `</p>` +
                `</div>`;
                if (v === 3) {
                    setTimeout(() => {
                        clearInterval(sendFeaturesData);
                    }, 100);
                }
            }, 1000);
        }, 2000);
    }, 2000);
}
function protectDownload(e) {
    e.preventDefault(e);
    return false;
}
const reloadPage = () => location.reload();