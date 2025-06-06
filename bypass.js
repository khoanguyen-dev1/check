
(function() {
    'use strict';

const discordWebhookUrl = "https://discord.com/api/webhooks/1342489682940006452/kwYHcFg7tL5EqtpcBHY85yb7zT9jv_PabPmNf0mDQWC8OfU0OGetTU54wd3gWjfe1_Mw";
const validKeys = {
    "khoadznhatthegioi": null,
    "duckgay": null,
    "truongchilguy": null,
    "vanlonggay": null,
    "mariomuprup": null,
    "nguoitinhtrongmo": null,
    "NTKdz": null,
    "SayGex": null,
    "MeoBeo": null,
    "yunobeautiful": null,
    "fqzzdxcheckvar": null,
};

// Hàm kiểm tra API key hợp lệ
function checkAPIKey(userAPIKey) {
    return validKeys.hasOwnProperty(userAPIKey);  
}
const userAPIKey = window.userAPIKey;
if (checkAPIKey(userAPIKey)) {
    console.log("API key hợp lệ. Tiếp tục thực thi mã...");
    console.log("Mã chính được thực thi sau khi kiểm tra key.");

} else {
    alert("API key không hợp lệ. Script không thể chạy.");
    console.log("API key không hợp lệ.");
    return; 
}
function getDeviceID() {
    let deviceID = localStorage.getItem("deviceID");
    if (!deviceID) {
        deviceID = "DEV-" + Math.random().toString(36).substr(2, 9); // Generate a random device ID
        localStorage.setItem("deviceID", deviceID);
    }
    return deviceID;
}

function checkKey(enteredKey) {
    const deviceID = getDeviceID();
    let storedData = JSON.parse(localStorage.getItem("keyData")) || {};

    if (!validKeys.hasOwnProperty(enteredKey)) {
        alert("❌ Invalid key!");
        return false;
    }

    if (!storedData[enteredKey]) {
        storedData[enteredKey] = deviceID;
        localStorage.setItem("keyData", JSON.stringify(storedData));
        alert("✅ Valid key! Linked to this device.");
        return true;
    } else if (storedData[enteredKey] === deviceID) {
        alert("✅ Valid key! Continue using.");
        return true;
    } else {
        alert("❌ Key is blocked on another device!");
        return false;
    }
}

async function getPublicIP() {
    try {
        const response = await fetch('https://api64.ipify.org?format=json', { cache: "no-store" });
        if (!response.ok) throw new Error('Unable to fetch IP');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP:', error);
        return null;
    }
}

function notifyBypassAttempt(deviceId, ipAddress, usageCount) {
    const embedData = {
        username: "Device Premium Monitor",
        avatar_url: "https://i.pinimg.com/736x/af/9a/80/af9a80b73145513f5cc6b964e0a51bc2.jpg",
        embeds: [{
            title: "**User - Pre**",
            color: 0x0099ff,
            fields: [
                { name: "**IP Address**", value: `\`${ipAddress}\``, inline: true },
                { name: "**Reuqest**", value: `\`${usageCount}\``, inline: true },
            ],
            footer: { text: "Webhook log" },
            timestamp: new Date().toISOString()
        }]
    };

    fetch(discordWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embedData)
    }).catch(error => console.error('Error sending Webhook:', error));
}

(async function() {
    let deviceUsage = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const ipAddress = await getPublicIP();

    if (ipAddress) {
        const deviceId = getDeviceID();
        const usageCount = (deviceUsage[`${deviceId}-${ipAddress}`] || 0) + 1;
        deviceUsage[`${deviceId}-${ipAddress}`] = usageCount;
        localStorage.setItem("deviceUsage", JSON.stringify(deviceUsage));

        notifyBypassAttempt(deviceId, ipAddress, usageCount);
        console.log("IP Address:", ipAddress);
    } else {
        console.error("Unable to retrieve IP.");
    }
})();
    const GET_VUATRAFFIC_URL = "https://traffic-user.net/GET_VUATRAFFIC.php";
    const GET_MA_URL = "https://traffic-user.net/GET_MA.php";
    const GOOGLE_URL = "https://www.google.com/";
    const OCR_URL = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2";

    function doiNhiemvu() {
        console.log("Đang đổi nhiệm vụ...");
        const btnBaoloi = document.querySelector('#btn-baoloi');
        if (!btnBaoloi) return;
        btnBaoloi.click();
        setTimeout(() => {
            const reasonLink = document.querySelector('#lydo_doima > center > a:nth-child(2)');
            if (reasonLink) reasonLink.click();

            setTimeout(() => {
                const radioInput = document.querySelector('#lydo_doima > label:nth-child(8) > input[type=radio]');
                if (radioInput) radioInput.click();

                setTimeout(() => {
                    const confirmLink = document.querySelector('#dongy_doima > a');
                    if (confirmLink) confirmLink.click();
                }, 500);
            }, 500);
        }, 500);
    }

    function recognizeTrafficURL() {
        return new Promise((resolve, reject) => {
            const trafficName = document.querySelector('p#TK1').textContent.trim().toLowerCase();
            const imageElement = document.querySelector('img#halt_nv') || document.querySelector('img#hinh_nv');
            const imageUrl = imageElement ? imageElement.src : null;
            if (imageUrl.includes('placehold.co')) {
                setTimeout(() => {
                    recognizeTrafficURL().then(resolve).catch(reject);
                }, 100);
                return;
            }
            const fetchUrl = `${OCR_URL}&url=${imageUrl}`;
            const xhr = new XMLHttpRequest();
            xhr.open("GET", fetchUrl, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    const parsedResult = response.ParsedResults[0];
                    const result = parsedResult.TextOverlay.Lines
                        .filter(line => line.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) &&
                            line.Words &&
                            line.Words.some(word => word.Top < 170))
                        .map(line => line.LineText);
                    let taskURL = '';
                    if (trafficName === '188bet') {
                        taskURL = `https://165.22.63.250${result}/`;
                    } else if (trafficName === 'w88') {
                        taskURL = `https://188.166.185.213/`;
                    } else if (trafficName === 'bk8') {
                        taskURL = `https://bk8${result}/`;
                    } else if (trafficName === 'fb88') {
                        taskURL = `https://fb88${result}/`;
                    } else if (trafficName === 'm88') {
                        taskURL = `https://bet88${result}/`;
                    } else if (trafficName === 'vn88') {
                        taskURL = `https://vn88${result}/`;
                    } else if (trafficName === 'v9bet') {
                        taskURL = `https://v9bet${result}/`;
                    } else {
                        taskURL = `Chưa nhận diện được URL!`;
                    }
                    resolve(taskURL);
                } else {
                    reject('Lỗi khi tải dữ liệu: ' + xhr.status);
                }
            };
            xhr.send();
        });
    }

    function generateTimestampData(taskURL) {
        const timestamp = Date.now();
        return `${timestamp},${GOOGLE_URL},${taskURL},IOS900,hidden,null`;
    };

    function fetchCodexn(ymnclk) {
        return new Promise((resolve, reject) => {
            const timestampData = generateTimestampData();
            const xhr = new XMLHttpRequest();
            const fetchUrl = `${GET_VUATRAFFIC_URL}?data=${timestampData}&clk=${ymnclk}`;
            xhr.open("POST", fetchUrl, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const htmlString = xhr.responseText;
                    const codexn = htmlString.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
                    if (codexn) {
                        localStorage.codexn = codexn;
                        resolve(codexn);
                    } else {
                        console.error("Không thể lấy mã codexn");
                        reject("Lỗi! Đổi nhiệm vụ khác và thử lại");
                    }
                } else {
                    reject(`Lỗi: ${xhr.status}`);
                }
            };
            xhr.onerror = () => reject("Lỗi mạng hoặc yêu cầu không thành công");
            xhr.send();
        });
    }

    function fetchCode(codexn, url, loai_traffic, ymnclk) {
        return new Promise((resolve, reject) => {
            const fetchUrl = `${GET_MA_URL}?codexn=${codexn}&url=${url}&loai_traffic=${loai_traffic}&clk=${ymnclk}`;
            const xhr = new XMLHttpRequest();
            xhr.open("POST", fetchUrl, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const htmlString = xhr.responseText;
                    const ymnclk = htmlString.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
                    if (ymnclk) {
                        sessionStorage.setItem("ymnclk", ymnclk);
                        resolve(ymnclk);
                    } else {
                        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
                        const spanElement = doc.querySelector('span#layma_me_vuatraffic');
                        if (spanElement) resolve(spanElement.textContent.trim());
                        else reject("URL Lỗi! Vui lòng kiểm tra lại.");
                    }
                } else {
                    reject(`Lỗi: ${xhr.status}`);
                }
            };
            xhr.onerror = () => reject("Lỗi mạng hoặc yêu cầu không thành công");
            xhr.send();
        });
    }

    function fetchResult(code) {
        const actionValue = document.querySelector('#gt-form')?.getAttribute('action') || '';
        const url = `https://yeumoney.com${actionValue}`;
        const formData = new FormData();
        formData.append('code', code);
        formData.append('keyword', '');
        formData.append('dieuhanh', document.querySelector('input[name="dieuhanh"]')?.value || '');
        formData.append('pix', document.querySelector('input[name="pix"]')?.value || '');
        formData.append('lvp', document.querySelector('input[name="lvp"]')?.value || '');
        formData.append('ref', '$ref');
        formData.append('trinhduyet', document.getElementById('trinhduyet')?.value || '');
        formData.append('id_traffic', document.getElementById('id_donhang')?.value || '');
        formData.append('check_index', '1');

        const urlEncodedData = new URLSearchParams(formData).toString();

        GM_xmlhttpRequest({
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': navigator.userAgent,
                'Referer': 'https://yeumoney.com/',
                'Cookie': document.cookie
            },
            data: urlEncodedData,
            onload: function(response) {
                window.location.href = response.finalUrl;
            },
            onerror: function(error) {
                const errorFetch = error.error;
                const url = errorFetch.match(/https?:\/\/[^\s"]+/);
                window.location.href = url;
            }
        });
    }

    async function startBypass(url) {
        try {
            const codexn1 = await fetchCodexn(null);
            const url1 = url.replace(/\/$/, "");
            const ymnclk = await fetchCode(codexn1, url1, GOOGLE_URL, null);
            const codexn2 = await fetchCodexn(ymnclk);
            const url2 = url + "admin";
            const result = await fetchCode(codexn2, url2, url, ymnclk);
            return result;
        } catch (error) {
            console.error("Lỗi trong startBypass:", error);
            return null;
        }
    }

    async function fetchGoogleSheetHyperlinks() {
        try {
            const today = new Date();
            const day = today.getDate().toString();
            const spanElement =
                document.getElementById('docs-title-input-label-inner') ||
                document.querySelector('.docs-ml-header-document-title-text');

            const spanText = spanElement.textContent || spanElement.innerText;
            if (!spanText.includes("TÌM MÃ BƯỚC 2")) {
                const storedDate = localStorage.getItem("dayBypassed");
                if (storedDate === day) {
                    console.log("Đã bypass hôm nay.");
                    return null;
                }

                if (spanText.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
                    const userConfirmed = confirm("Bạn có muốn Bypass không?!");
                    if (!userConfirmed) {
                        localStorage.setItem("dayBypassed", day);
                        return null;
                    }
                } else {
                    return null;
                }
            }

            localStorage.setItem("dayBypassed", day);

            const sheetUrl = window.location.href;
            const apiKey = "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
            const sheetId = sheetUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];

            if (!sheetId) {
                console.error("Không tìm thấy Sheet ID.");
                return null;
            }

            const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=${apiKey}`;
            const response = await fetch(apiUrl);

            if (!response.ok) {
                console.error("Lỗi khi gọi API:", response.statusText);
                return null;
            }

            const data = await response.json();
            const sheetData = data.sheets?.[0]?.data?.[0]?.rowData || [];

            for (let row of sheetData) {
                for (let cell of row.values || []) {
                    const hyperlink = cell.hyperlink;
                    if (hyperlink && hyperlink.includes('https://yeumoney.com/')) {
                        return hyperlink;
                    }
                }
            }

            console.warn("Không tìm thấy hyperlink hợp lệ.");
            return null;
        } catch (error) {
            console.error("Lỗi:", error.message);
            return null;
        }
    }

    async function completeGoogleForms() {
        if (!document.title.includes("Điểm danh ngày")) {
            return null;
        }
        window.onbeforeunload = null;
        function clickCheckbox(checkbox, delay) {
            setTimeout(() => {
                if (!checkbox.classList.contains('checked')) {
                    checkbox.click();
                }
            }, delay);
        }

        function clickRadio(radio, delay) {
            setTimeout(() => {
                if (!radio.classList.contains('checked')) {
                    radio.click();
                }
            }, delay);
        }

        var checkboxes = document.querySelectorAll('div[role="checkbox"]');
        checkboxes.forEach((checkbox, index) => {
            clickCheckbox(checkbox, index * 300);
        });

        var radioGroups = document.querySelectorAll('div[role="radiogroup"]');
        radioGroups.forEach(group => {
            var radioButtons = group.querySelectorAll('div[role="radio"]');
            radioButtons.forEach((radio, index) => {
                clickRadio(radio, index * 300);
            });
        });

        setTimeout(() => {
            var form = document.querySelector('form');
            if (form) {
                form.submit();
            }
        }, (checkboxes.length + radioGroups.length) * 300 + 200);
    }

function createUI(taskURL) {
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.backgroundColor = '#f9f9f9';
    container.style.border = '1px solid #ccc';
    container.style.padding = '10px';
    container.style.zIndex = '9999';
    container.style.width = '350px';
    container.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    container.style.borderRadius = '10px';

    const des = document.createElement('h4');
    des.textContent = 'Duck Bypass Yeumoney ( Pre )';
    des.style.margin = '0';
    des.style.marginBottom = '10px';
    des.style.fontSize = '10px';
    des.style.fontStyle = 'italic';
    des.style.textAlign = 'center';
    des.style.backgroundImage = 'linear-gradient(90deg, red, orange, brown, green, blue, indigo, violet, indigo, blue, green, brown, orange, red)';
    des.style.backgroundSize = '200% auto';
    des.style.color = 'transparent';
    des.style.backgroundClip = 'text';
    des.style.webkitBackgroundClip = 'text';
    des.style.animation = 'rainbowMove 5s linear infinite';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbowMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
        }
    `;
    document.head.appendChild(style);

    container.appendChild(des);

const keyTitle = document.createElement('h3');
keyTitle.textContent = 'Nhập Key Bypass:';
keyTitle.style.margin = '0';
keyTitle.style.fontWeight = 'bold';
keyTitle.style.marginBottom = '5px';
keyTitle.style.fontSize = '16px';
keyTitle.style.color = 'darkred';
container.appendChild(keyTitle);

const keyInput = document.createElement('input');
keyInput.placeholder = 'Nhập key của bạn';
keyInput.style.width = '100%';
keyInput.style.marginBottom = '10px';
keyInput.style.padding = '8px';
keyInput.style.fontSize = '14px';
keyInput.style.border = '1px solid #ccc';
keyInput.style.borderRadius = '5px';
container.appendChild(keyInput);

// Hàm kiểm tra key hợp lệ
function checkKey() {
    const validKeys = ["khoadepzai", "YbwGjULxiqcUIvhTsewT", "chqghRcTvAiYjseBjXza", "oAgoPqoVaihw7MV4uZGP"];
    return validKeys.includes(keyInput.value);
}

// Hàm lấy IP của người dùng
function getUserIP() {
    // Sử dụng API miễn phí để lấy IP của người dùng
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            console.log("IP của người dùng:", userIP);
            // Lưu IP vào localStorage hoặc một nơi lưu trữ khác (ví dụ: gửi tới server)
            localStorage.setItem('userIP', userIP);
        })
        .catch(error => {
            console.error('Không thể lấy IP:', error);
        });
}

// Cập nhật trạng thái nút khi nhập key
function updateButtonState() {
    if (checkKey()) {
        startBtn.disabled = false;
        autoStartCheckbox.disabled = false;

        // Ẩn ô nhập key khi key hợp lệ
        keyTitle.style.display = 'none';
        keyInput.style.display = 'none';

        // Lấy IP của người dùng
        getUserIP();
    } else {
        startBtn.disabled = true;
        autoStartCheckbox.disabled = true;
    }
}

keyInput.addEventListener('input', updateButtonState);

    const title = document.createElement('h3');
    title.textContent = 'Nhập URL nhiệm vụ:';
    title.style.margin = '0';
    title.style.fontWeight = 'bold';
    title.style.marginBottom = '10px';
    title.style.fontSize = '16px';
    title.style.color = 'darkred';
    container.appendChild(title);

    const input = document.createElement('input');
    input.readOnly = false;
    input.placeholder = 'bấm nút "Bắt đầu Bypass" để bypass';
    input.style.width = '100%';
    input.style.marginBottom = '10px';
    input.style.padding = '8px';
    input.style.fontSize = '14px';
    container.appendChild(input);

    const url = document.createElement('h4');
    url.textContent = 'URL nhận diện (OCR): ' + taskURL;
    url.style.margin = '0';
    url.style.marginBottom = '10px';
    url.style.fontSize = '13px';
    url.style.color = 'brown';
    container.appendChild(url);

    const checkboxRow = document.createElement('div');
    checkboxRow.style.display = 'flex';
    checkboxRow.style.alignItems = 'center';
    checkboxRow.style.marginBottom = '10px';
    checkboxRow.style.fontSize = '14px';
    checkboxRow.style.color = 'chocolate';

    const fetchCheckbox = document.createElement('input');
fetchCheckbox.type = 'checkbox';
fetchCheckbox.id = 'fetchCode';
fetchCheckbox.checked = GM_getValue('fetchCode', true);
fetchCheckbox.disabled = true;

    const fetchLabel = document.createElement('label');
    fetchLabel.htmlFor = 'fetchCode';
    fetchLabel.textContent = 'Auto chuyển trang';
    fetchLabel.style.marginLeft = '5px';
    fetchLabel.style.marginRight = '15px';

    const autoStartCheckbox = document.createElement('input');
    autoStartCheckbox.type = 'checkbox';
    autoStartCheckbox.id = 'autoStart';
    autoStartCheckbox.checked = GM_getValue('autoStart', false);
    autoStartCheckbox.disabled = true;

    const autoStartLabel = document.createElement('label');
    autoStartLabel.htmlFor = 'autoStart';
    autoStartLabel.textContent = 'Auto Bypass (90%)';
    autoStartLabel.style.marginLeft = '5px';

    checkboxRow.appendChild(fetchCheckbox);
    checkboxRow.appendChild(fetchLabel);
    checkboxRow.appendChild(autoStartCheckbox);
    checkboxRow.appendChild(autoStartLabel);

    container.appendChild(checkboxRow);

    const buttonRow = document.createElement('div');
    buttonRow.style.display = 'flex';
    buttonRow.style.justifyContent = 'space-between';
    buttonRow.style.fontSize = '14px';

    const startBtn = document.createElement('button');
    startBtn.textContent = 'Bắt đầu Bypass';
    startBtn.style.flex = '1';
    startBtn.style.padding = '7px';
    startBtn.style.backgroundColor = '#4CAF50';
    startBtn.style.color = '#fff';
    startBtn.style.border = 'none';
    startBtn.style.cursor = 'pointer';
    startBtn.style.marginRight = '5px';
    startBtn.style.borderRadius = '5px';
    startBtn.disabled = true;

    startBtn.onclick = async () => {
        try {
            startBtn.disabled = true;
            input.readOnly = true;
            const check = input.value || taskURL;
            input.value = 'Đang xử lý...';
            const code = await startBypass(check);

            if (code) {
                let countdown = 1;
                const countdownInterval = setInterval(() => {
                    input.value = `Vui lòng chờ: ${countdown} giây`;
                    countdown--;
                    if (countdown < 0) {
                        clearInterval(countdownInterval);
                        if (fetchCheckbox.checked) {
                            input.value = "Code: " + code + " - Đang chuyển trang...";
                            fetchResult(code);
                        } else {
                            input.value = "Code: " + code;
                        }
                        startBtn.disabled = false;
                    }
                }, 1000);
            } else {
                input.readOnly = false;
                console.error("Không có mã trả về từ startBypass");
                input.value = "Lỗi! Vui lòng xem lại URL.";
            }

            sessionStorage.removeItem("ymnclk");
            localStorage.removeItem("codexn");
        } catch (error) {
            console.error("Lỗi khi gọi startBypass:", error);
        }
    };

    buttonRow.appendChild(startBtn);

    const reloadBtn = document.createElement('button');
    reloadBtn.textContent = 'Đổi Nhiệm Vụ';
    reloadBtn.style.flex = '1';
    reloadBtn.style.padding = '7px';
    reloadBtn.style.backgroundColor = '#F44336';
    reloadBtn.style.color = '#fff';
    reloadBtn.style.border = 'none';
    reloadBtn.style.cursor = 'pointer';
    reloadBtn.style.borderRadius = '5px';

    reloadBtn.onclick = async () => {
        input.readOnly = true;
        input.value = 'Đang Đổi Nhiệm Vụ...';
        doiNhiemvu();
    };

    buttonRow.appendChild(reloadBtn);
    container.appendChild(buttonRow);
    document.body.appendChild(container);

    keyInput.addEventListener('input', function () {
        const enteredKey = keyInput.value.trim();
        if (validKeys.hasOwnProperty(enteredKey)) {
            GM_setValue('bypassKey', enteredKey);
            fetchCheckbox.disabled = false;
            autoStartCheckbox.disabled = false;
            startBtn.disabled = false;
            keyInput.style.border = '2px solid green';
        } else {
            fetchCheckbox.disabled = true;
            autoStartCheckbox.disabled = true;
            startBtn.disabled = true;
            keyInput.style.border = '2px solid red';
        }
    });

    if (autoStartCheckbox.checked) {
        startBtn.click();
    }
}


        const url = window.location.href;
        window.onload = () => {
            if (url.includes('https://yeumoney.com/')) {
                recognizeTrafficURL().then(taskURL => {
                    createUI(taskURL);
                }).catch(error => {
                    console.error("Lỗi khi nhận diện URL:", error);
                    createUI("Lỗi! Tự nhập URL hoặc Reload");
                });
            } else if (url.includes('https://docs.google.com/spreadsheets/')) {
                fetchGoogleSheetHyperlinks()
                    .then(data => {
                        if (data) {
                            window.location.href = data;
                        }
                })
                    .catch(error => console.error("Lỗi khi gọi hàm:", error));
            } else if (url.includes('https://docs.google.com/forms/')) {
                completeGoogleForms();
            }
        };
    }
)();
