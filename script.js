function loadMatchesForToday() {
    const today = new Date();

    // دالة للتحقق مما إذا كان التوقيت الصيفي مفعلًا
    function isDaylightSavingTime() {
        const now = new Date();
        const january = new Date(now.getFullYear(), 0, 1); // يناير (الشتاء)
        const july = new Date(now.getFullYear(), 6, 1); // يوليو (الصيف)

        return Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) !== now.getTimezoneOffset();
    }
    // حساب فرق التوقيت بناءً على الصيف أو الشتاء لوقت عرض الجدول فقط
    const hoursToAdd = isDaylightSavingTime() ? 3 : 2; // 3 ساعات للصيف و 2 للشتاء
    const egyptTime = new Date(today.getTime() + (hoursToAdd * 60 * 60 * 1000)); // تعديل وقت عرض الجدول فقط

    const formattedDate = egyptTime.toISOString().split('T')[0].replace(/-/g, '/'); // الحصول على تاريخ اليوم بصيغة YYYY/MM/DD
    const matches = matchData[formattedDate];
    const matchesContainer = document.getElementById('matches-container');
    const noMatchesMessage = document.getElementById('no-matches');

    matchesContainer.innerHTML = ''; // تفريغ المحتوى القديم

    if (matches && matches.length > 0) {
        noMatchesMessage.style.display = 'none'; // إخفاء رسالة لا يوجد مباريات

        const currentTime = new Date(); // الحصول على الوقت الحالي

        matches.forEach(match => {
            const matchStartTime = new Date(match.timeStart);
            const matchEndTime = new Date(match.timeEnd);
            let status = '';

            // تحديد حالة المباراة بناءً على الوقت الحالي
            const timeDiff = matchStartTime - currentTime; // الفرق في الوقت بين بدء المباراة والوقت الحالي

            if (timeDiff > 0 && timeDiff <= 30 * 60 * 1000) {
                status = 'started'; // المباراة ستبدأ قريباً (خلال 30 دقيقة)
            } else if (currentTime < matchStartTime) {
                status = 'notstarted'; // المباراة لم تبدأ بعد
            } else if (currentTime >= matchStartTime && currentTime <= matchEndTime) {
                status = 'running'; // المباراة جارية
            } else {
                status = 'ended'; // المباراة انتهت
            }

            const matchElement = `
                <div class="m_block egy_sports_item ${status}">
                    <!-- مباراة ${match.fareq1.name} ضد ${match.fareq2.name} فى ${match.btola} -->
                    <a href="${match.gameUrl}" class="ElGadwl" title="${match.fareq1.name} ضد ${match.fareq2.name} فى ${match.btola}">
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

        setTimeout(() => {
            sortMatches();
        }, 100);

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
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// دالة لتعيين التاب النشط
function setActiveTab(activeTab) {
    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

// دالة لتحويل رقم اليوم إلى اسم اليوم باللغة العربية
function getDayName(dateString) {
    const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    const date = new Date(dateString);
    return days[date.getDay()];
}

// دالة لتحديث العنوان بناءً على اليوم والتاريخ
function setDayAndDateInTitle(dateString) {
    const titleElement = document.querySelector('.titleG');
    const dayName = getDayName(dateString);
    titleElement.innerText = `مباريات يوم ${dayName}`;
}

// دالة للتحقق مما إذا كان التوقيت الصيفي مفعلًا في مصر بناءً على تواريخ محددة
function isDaylightSavingTimeInEgypt(date) {
    const year = date.getFullYear();

    const aprilLastFriday = new Date(year, 3, 30);
    while (aprilLastFriday.getDay() !== 5) {
        aprilLastFriday.setDate(aprilLastFriday.getDate() - 1);
    }

    const octoberLastThursday = new Date(year, 9, 31);
    while (octoberLastThursday.getDay() !== 4) {
        octoberLastThursday.setDate(octoberLastThursday.getDate() - 1);
    }

    return date >= aprilLastFriday && date < octoberLastThursday;
}

// دالة لحساب الوقت حسب التوقيت المصري الصيفي أو الشتوي
function adjustTimeForEgypt(date) {
    date.setHours(0, 0, 0, 0);
    const hoursToAdd = isDaylightSavingTimeInEgypt(date) ? 3 : 2;
    return new Date(date.getTime() + (hoursToAdd * 60 * 60 * 1000));
}

let matchData = null; // تعيين null للتأكد من أن البيانات لم يتم تحميلها بعد

// دالة لجلب بيانات المباريات من ملف JSON
function loadMatchData() {
    fetch('https://raw.githack.com/hosnyegy2/project1/main/moled.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            matchData = data; // تخزين البيانات في المتغير matchData
            createTabs(); // استدعاء الدالة لإنشاء التابات بعد تحميل البيانات
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// دالة لإنشاء التواريخ في التابات
function createTabs() {
    if (!matchData) {
        console.warn("matchData لم يتم تحميله بعد."); // التأكد من تحميل البيانات
        return;
    }
    const tabsContainer = document.getElementById('tabs-container');
    tabsContainer.innerHTML = ''; // مسح التابات القديمة

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const egyptTime = adjustTimeForEgypt(today);

    const dates = [];
    for (let i = -2; i <= 2; i++) {
        const date = new Date(egyptTime);
        date.setDate(egyptTime.getDate() + i);
        const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '/');
        dates.push(formattedDate);
    }

    dates.forEach((date, index) => {
        const tab = document.createElement('button');
        tab.classList.add('tab-button');
        tab.innerHTML = `<div>${getDayName(date)}</div><div>${date}</div>`;
        tab.style.display = 'flex';
        tab.style.flexDirection = 'column';
        tab.style.alignItems = 'center';

        tab.onclick = function () {
            if (matchData) { // التأكد من أن البيانات محملة قبل محاولة عرض المباريات
                loadMatchesForDate(date);
                setActiveTab(tab);
                setDayAndDateInTitle(date);
            }
        };

        tabsContainer.appendChild(tab);

        if (index === 2 && matchData) {
            tab.classList.add('active');
            loadMatchesForDate(date);
            setDayAndDateInTitle(date);
        }
    });
}

// دالة لتحميل المباريات لتاريخ محدد
function loadMatchesForDate(dateString) {
    if (!matchData) {
        console.warn("matchData لم يتم تحميله بعد."); // التأكد من تحميل البيانات
        return;
    }
    const matches = matchData[dateString];
    const matchesContainer = document.getElementById('matches-container');
    const noMatchesMessage = document.getElementById('no-matches');

    matchesContainer.innerHTML = '';

    if (matches && matches.length > 0) {
        noMatchesMessage.style.display = 'none';
        const currentTime = new Date();

        matches.forEach(match => {
            const matchStartTime = new Date(match.timeStart);
            const matchEndTime = new Date(match.timeEnd);
            let status = '';

            const timeDiff = matchStartTime - currentTime;

            if (timeDiff > 0 && timeDiff <= 30 * 60 * 1000) {
                status = 'started';
            } else if (currentTime < matchStartTime) {
                status = 'notstarted';
            } else if (currentTime >= matchStartTime && currentTime <= matchEndTime) {
                status = 'running';
            } else {
                status = 'ended';
            }

            const matchElement = `
                <div class="m_block egy_sports_item ${status}">
                    <a href="${match.gameUrl}" class="ElGadwl" title="${match.fareq1.name} ضد ${match.fareq2.name} فى ${match.btola}">
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

        $.getScript("https://raw.githack.com/hosnyegy2/project1/main/custom.js")
            .done(function (script, textStatus) {
                console.log("Script loaded successfully: " + textStatus);
                setTimeout(() => {
                    sortMatches();
                }, 100);
            })
            .fail(function (jqxhr, settings, exception) {
                console.error("Error loading script: " + exception);
            });
    } else {
        noMatchesMessage.style.display = 'block';
    }
}

loadMatchData();

// دالة لترتيب المباريات حسب حالتها
function sortMatches() {
    const matchesContainer = document.getElementById('matches-container');
    const matches = Array.from(matchesContainer.getElementsByClassName('egy_sports_item'));

    const order = {
        'running': 1,
        'started': 2,
        'notstarted': 3,
        'ended': 4
    };

    matches.sort((a, b) => {
        const aClass = Object.keys(order).find(key => a.classList.contains(key)) || 'ended';
        const bClass = Object.keys(order).find(key => b.classList.contains(key)) || 'ended';

        return order[aClass] - order[bClass];
    });

    // تفريغ الحاوية ثم إضافة المباريات بالترتيب الجديد
    matchesContainer.innerHTML = '';
    matches.forEach(match => matchesContainer.appendChild(match));

    console.log("مباريات بعد الفرز:", matches); // طباعة المباريات بعد الفرز
}

// استدعاء الدالة لجلب بيانات المباريات عند تحميل الصفحة

// تعيين مؤقت لتحديث البيانات عند الساعة 12:00 صباحاً
setInterval(function () {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        loadMatchesForDate(new Date().toISOString().split('T')[0].replace(/-/g, '/'));
    }
}, 60000);
