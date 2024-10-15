// البيانات الديناميكية لكل يوم
const matchData = {
    "2024/10/15": [{
            "id": 246,
            "gameUrl": "",
            "fareq1": {
                "name": "باراجواي",
                "logo": "https://img.btolat.com/teamslogo/13867.png?v=404"
            },
            "fareq2": {
                "name": "فنزويلا",
                "logo": "https://img.btolat.com/teamslogo/17504.png?v=818"
            },
            "btola": " تصفيات أمريكا الجنوبية لكأس العالم ",
            "timeStart": "2024/10/16 2:00 AM",
            "timeEnd": "2024/10/16 4:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
            },
        {
            "id": 247,
            "gameUrl": "",
            "fareq1": {
                "name": "أوروجواي",
                "logo": "https://img.btolat.com/teamslogo/17412.png?v=74"
            },
            "fareq2": {
                "name": "الإكوادور",
                "logo": "https://img.btolat.com/teamslogo/8848.png?v=92"
            },
            "btola": " تصفيات أمريكا الجنوبية لكأس العالم ",
            "timeStart": "2024/10/16 2:00 AM",
            "timeEnd": "2024/10/16 4:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
            },
        {
            "id": 248,
            "gameUrl": "",
            "fareq1": {
                "name": "الأرجنتين",
                "logo": "https://img.btolat.com/teamslogo/5886.png?v=13"
            },
            "fareq2": {
                "name": "بوليفيا",
                "logo": "https://img.btolat.com/teamslogo/6979.png?v=155"
            },
            "btola": " تصفيات أمريكا الجنوبية لكأس العالم ",
            "timeStart": "2024/10/16 3:00 AM",
            "timeEnd": "2024/10/16 5:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
            },
        {
            "id": 249,
            "gameUrl": "",
            "fareq1": {
                "name": "البرازيل",
                "logo": "https://img.btolat.com/teamslogo/7084.png?v=176"
            },
            "fareq2": {
                "name": "بيرو",
                "logo": "https://img.btolat.com/teamslogo/13898.png?v=739"
            },
            "btola": " تصفيات أمريكا الجنوبية لكأس العالم ",
            "timeStart": "2024/10/16 3:45 AM",
            "timeEnd": "2024/10/16 5:45 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
            }
        ],
    "2024/10/16": [{
        "id": 244,
        "gameUrl": "https://sport.coldady.com/2024/10/2024-2025_15.html",
        "fareq1": {
            "name": "كوريا الجنوبية",
            "logo": "https://img.btolat.com/teamslogo/12303.png?v=149"
        },
        "fareq2": {
            "name": "العراق",
            "logo": "https://img.btolat.com/teamslogo/11499.png?v=748"
        },
        "btola": "تصفيات آسيا لكأس العالم",
        "timeStart": "2024/10/15 2:00 PM",
        "timeEnd": "2024/10/15 4:00 PM",
        "score": {
            "team1": 0,
            "team2": 0
        }
        }]
};

function loadMatchesForToday() {
    const today = new Date().toISOString().split('T')[0].replace(/-/g, '/'); // الحصول على تاريخ اليوم بصيغة YYYY/MM/DD
    const matches = matchData[today];
    const matchesContainer = document.getElementById('matches-container');
    const noMatchesMessage = document.getElementById('no-matches');

    matchesContainer.innerHTML = ''; // تفريغ المحتوى القديم

    if (matches && matches.length > 0) {
        noMatchesMessage.style.display = 'none'; // إخفاء رسالة لا يوجد مباريات

        matches.forEach(match => {
            const matchElement = `
                    <div class="m_block egy_sports_item">
                        <!-- مباراة ${match.fareq1.name} ضد ${match.fareq2.name} فى ${match.btola} -->
                        <a href="${match.gameUrl}" class="ElGadwl" title="${match.fareq1.name} ضد ${match.fareq2.name}">
                            <div class="Gadwl-Top">
                                <div class="Fareeq-r">
                                    <img alt="${match.fareq1.name}" src="${match.fareq1.logo}" />
                                    <span>${match.fareq1.name}</span>
                                </div>
                                <div class="Fareeq-c">
                                    <span class="bouton">
                                        <p id="msmsma" style="font-size: 13px;">جاري التحميل</p>
                                    </span>
                                    <div>
                                        <div class="fc_time">
                                             <span id="hdaf1">${match.score.team1}</span> - <span id="hdaf2">${match.score.team2}</span>
                                        </div>
                                        <div class="date stay" data-start="${match.timeStart}" data-gameends="${match.timeEnd}" id="${match.id}"></div>
                                        <div class="timer-status">
                                            <span class="timer"></span>
                                            <span class="status"></span>
                                        </div>
                                        <div class="progress-bar-container">
                                            <div class="progress-bar" style="width: 0%;"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="Fareeq-l">
                                    <img alt="${match.fareq2.name}" src="${match.fareq2.logo}" />
                                    <span>${match.fareq2.name}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
            matchesContainer.innerHTML += matchElement;
        });

    } else {
        // إظهار رسالة "لا يوجد مباريات اليوم" إذا لم يكن هناك مباريات في تاريخ اليوم
        noMatchesMessage.style.display = 'block';
    }
}

// استدعاء الدالة عند تحميل الصفحة
loadMatchesForToday();

// تعيين مؤقت لتحديث البيانات عند الساعة 12:00 صباحاً
setInterval(function () {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        loadMatchesForToday();
    }
}, 60000); // تحديث كل دقيقة
