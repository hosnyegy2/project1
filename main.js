jQuery(document).ready(function ($) {

    "use strict";
 
    function openTabs(evt, tabsyName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabsyName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    
    function dodajAktywne(elem) {
        var a = document.getElementsByTagName('button');
        for (i = 0; i < a.length; i++) {
            a[i].classList.remove('active')
        }
        elem.classList.add('active');
    }

    function setURL(url) {
        document.getElementById('iframe').src = url;
    }

});
//////////////////////////////////////
function dodajAktywne(elem) {
    // get all 'a' elements
    var a = document.getElementsByTagName('button');
    // loop through all 'a' elements
    for (i = 0; i < a.length; i++) {
        // Remove the class 'active' if it exists
        a[i].classList.remove('active')
    }
    // add 'active' classs to the element that was clicked
    elem.classList.add('active');
}

function setURL(url) {
    document.getElementById('egy_strame').src = url;
}
///////////////////////////////////////////////////////
////////////////////////////////////////////////////
function openTabs(evt, tabsyName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabsyName).style.display = "block";
    evt.currentTarget.className += " active";
}

// دالة لعرض التاريخ في التابات Today, Yesterday, Tomorrow
    function displayDateInTabs() {
        var today = new Date();

        // الحصول على اليوم، الشهر، والسنة
        var day = today.getDate();
        var month = today.getMonth() + 1; // الأشهر تبدأ من 0 في الجافاسكريبت
        var year = today.getFullYear();

        // تنسيق التاريخ بالشكل المطلوب (DD/MM/YYYY)
        var formattedDate = day + '/' + month + '/' + year;

        // إضافة التاريخ إلى تبويب مباريات اليوم
        var todayElement = document.querySelector('#Today .titleG');
        if (todayElement) {
            todayElement.innerHTML += ' - ' + formattedDate;
        }

        // إضافة التاريخ إلى تبويب مباريات الأمس (نقص يوم واحد)
        var yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        var formattedYesterday = yesterday.getDate() + '/' + (yesterday.getMonth() + 1) + '/' + yesterday.getFullYear();

        var yesterdayElement = document.querySelector('#yesterday .titleG');
        if (yesterdayElement) {
            yesterdayElement.innerHTML += ' - ' + formattedYesterday;
        }

        // إضافة التاريخ إلى تبويب مباريات الغد (زيادة يوم واحد)
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        var formattedTomorrow = tomorrow.getDate() + '/' + (tomorrow.getMonth() + 1) + '/' + tomorrow.getFullYear();

        var tomorrowElement = document.querySelector('#Tomorrow .titleG');
        if (tomorrowElement) {
            tomorrowElement.innerHTML += ' - ' + formattedTomorrow;
        }
    }

    // استدعاء الدالة لعرض التاريخ
    displayDateInTabs();


    // وظيفة لنقل المحتويات
    function moveContent() {
        var yesterdayContent = document.getElementById('yesterday').innerHTML;
        var todayContent = document.getElementById('Today').innerHTML;
        var tomorrowContent = document.getElementById('Tomorrow').innerHTML;

        // نقل مباريات اليوم إلى مباريات الأمس
        document.getElementById('yesterday').innerHTML = todayContent;

        // نقل مباريات الغد إلى مباريات اليوم
        document.getElementById('Today').innerHTML = tomorrowContent;

        // إفراغ محتوى مباريات الغد
        document.getElementById('Tomorrow').innerHTML = '';
    }

    // فحص الساعة كل دقيقة
    setInterval(function() {
        var currentTime = new Date();

        // إذا كانت الساعة 12:00 صباحًا
        if (currentTime.getHours() === 0 && currentTime.getMinutes() === 0) {
            moveContent();
        }
    }, 60000); // 


