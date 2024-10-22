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

        matches.forEach(match => {
            // هنا نترك توقيت المباراة كما هو دون تعديل
            const matchTime = new Date(match.timeStart);

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
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
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
    const dayName = getDayName(dateString); // الحصول على اسم اليوم
    titleElement.innerText = `مباريات ${dayName} - ${dateString}`; // تغيير النص داخل عنصر titleG
}

// دالة لإنشاء التواريخ في التابات
function createTabs() {
    const tabsContainer = document.getElementById('tabs-container');
    tabsContainer.innerHTML = '';

    // الحصول على التاريخ الحالي
    const today = new Date();

    // إنشاء مصفوفة للتواريخ المطلوبة (يومان قبل، يومان بعد)
    const dates = [];
    for (let i = -2; i <= 2; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i); // تعديل التاريخ حسب قيمة i (يومين قبل ويومين بعد)
        const formattedDate = date.toISOString().split('T')[0].replace(/-/g, '/'); // تنسيق التاريخ
        dates.push(formattedDate); // إضافة التاريخ إلى المصفوفة
    }

    // إنشاء التابات بناءً على التواريخ المحسوبة
    dates.forEach((date, index) => {
        const tab = document.createElement('button');
        tab.classList.add('tab-button');
        tab.innerHTML = `
            <div>${getDayName(date)}</div>
            <div>${date}</div>
        `;
        tab.style.display = 'flex';
        tab.style.flexDirection = 'column'; // لجعل اسم اليوم فوق التاريخ
        tab.style.alignItems = 'center'; // محاذاة محتويات التاب في المنتصف

        tab.onclick = function () {
            loadMatchesForDate(date);
            setActiveTab(tab); // تعيين التاب النشط
            setDayAndDateInTitle(date); // تعيين العنوان بعد الضغط على التاب
        };

        tabsContainer.appendChild(tab);

        // تعيين التاب الذي يتوافق مع تاريخ اليوم كنشط عند التحميل
        if (index === 2) { // اليوم الحالي هو التاب الثالث
            tab.classList.add('active');
            loadMatchesForDate(date); // تحميل مباريات اليوم
            setDayAndDateInTitle(date); // تعيين العنوان عند التحميل لأول مرة
        }
    });
}

// دالة لتحميل المباريات لتاريخ محدد
function loadMatchesForDate(date) {
     function isDaylightSavingTime() {
        const now = new Date();
        const january = new Date(now.getFullYear(), 0, 1); // يناير (الشتاء)
        const july = new Date(now.getFullYear(), 6, 1); // يوليو (الصيف)
        return Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) !== now.getTimezoneOffset();
    }

    // هنا نقوم بتعديل توقيت عرض الجدول بناءً على التوقيت الصيفي أو الشتوي
    const today = new Date();
    const hoursToAdd = isDaylightSavingTime() ? 3 : 2; // 3 ساعات للصيف و 2 للشتاء
    const adjustedDate = new Date(today.getTime() + hoursToAdd * 60 * 60 * 1000);

    // تنسيق التاريخ كما هو مطلوب
    const formattedDate = adjustedDate.toISOString().split('T')[0].replace(/-/g, '/');
    
    const matches = matchData[formattedDate];
    const matchesContainer = document.getElementById('matches-container');
    const noMatchesMessage = document.getElementById('no-matches');


    matchesContainer.innerHTML = ''; // تفريغ المحتوى القديم

    if (matches && matches.length > 0) {
        noMatchesMessage.style.display = 'none'; // إخفاء رسالة لا يوجد مباريات

        matches.forEach(match => {
            const matchElement = `
                <div class="m_block egy_sports_item ">
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
        // استدعاء الكود من الرابط الخارجي
        $.getScript("https://raw.githack.com/hosnyegy2/project1/main/custom.js")
            .done(function (script, textStatus) {
                console.log("Script loaded successfully: " + textStatus);
            })
            .fail(function (jqxhr, settings, exception) {
                console.error("Error loading script: " + exception);
            });

    } else {
        // إظهار رسالة "لا يوجد مباريات" إذا لم يكن هناك مباريات في تاريخ اليوم
        noMatchesMessage.style.display = 'block';
    }
}

// استدعاء الدالة عند تحميل الصفحة
createTabs();

// تعيين مؤقت لتحديث البيانات عند الساعة 12:00 صباحاً
setInterval(function () {
    const now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0) {
        loadMatchesForDate(new Date().toISOString().split('T')[0].replace(/-/g, '/'));
    }
}, 60000); // تحديث كل دقيقة
