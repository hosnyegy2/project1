function setActiveTab(activeTab) {
        const allTabs = document.querySelectorAll('.tab-button');
        allTabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
    }

    // دالة لإنشاء التواريخ في التابات
    // دالة لتحويل رقم اليوم إلى اسم اليوم
    function getDayName(dateString) {
        const days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
        const date = new Date(dateString);
        return days[date.getDay()];
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

            tab.onclick = function() {
                loadMatchesForDate(date);
                setActiveTab(tab); // تعيين التاب النشط
            };

            tabsContainer.appendChild(tab);

            // تعيين التاب الذي يتوافق مع تاريخ اليوم كنشط عند التحميل
            if (index === 2) { // اليوم الحالي هو التاب الثالث
                tab.classList.add('active');
                loadMatchesForDate(date); // تحميل مباريات اليوم
            }
        });
    }

    // دالة لتحميل المباريات لتاريخ محدد
    function loadMatchesForDate(date) {
        const matches = matchData[date];
        const matchesContainer = document.getElementById('matches-container');
        const noMatchesMessage = document.getElementById('no-matches');

        matchesContainer.innerHTML = ''; // تفريغ المحتوى القديم

        // عرض تاريخ اليوم
        /*const dateHeader = document.createElement('h3');
        dateHeader.innerText = `تاريخ: ${date}`;
        matchesContainer.appendChild(dateHeader);*/

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
                .done(function(script, textStatus) {
                    console.log("Script loaded successfully: " + textStatus);
                })
                .fail(function(jqxhr, settings, exception) {
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
    setInterval(function() {
        const now = new Date();
        if (now.getHours() === 0 && now.getMinutes() === 0) {
            loadMatchesForDate(new Date().toISOString().split('T')[0].replace(/-/g, '/'));
        }
    }, 60000); // تحديث كل دقيقة
