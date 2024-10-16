function loadMatchesForToday() {
    // الحصول على الوقت الحالي ثم إضافة 3 ساعات فقط لعرض الجدول
    const today = new Date();
    const egyptTime = new Date(today.getTime() + (3 * 60 * 60 * 1000)); // إضافة 3 ساعات لتوقيت عرض الجدول
    const formattedDate = today.toISOString().split('T')[0].replace(/-/g, '/'); // الحصول على تاريخ اليوم الفعلي بدون تعديل
    const matches = matchData[formattedDate];
    const matchesContainer = document.getElementById('matches-container');
    const noMatchesMessage = document.getElementById('no-matches');

    matchesContainer.innerHTML = ''; // تفريغ المحتوى القديم

    if (matches && matches.length > 0) {
        noMatchesMessage.style.display = 'none'; // إخفاء رسالة لا يوجد مباريات

        matches.forEach(match => {
            // عرض التوقيت الفعلي للمباراة بدون تعديل فارق التوقيت
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
