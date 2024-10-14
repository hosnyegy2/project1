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


function checkTime(showTime, hideTime, iframeSrc) {
  const now = new Date();

  // عرض iframe وإخلاء المسئولية إذا كنا في الوقت المحدد أو بعده وقبل ساعتين من الوقت المحدد
  if (now >= showTime && now <= hideTime) {
    if ($("#myIframe").attr('src') === '') {
      $("#myIframe").attr('src', iframeSrc); // تعيين مصدر iframe
      document.getElementById('myIframe').style.display = 'block'; // إظهار iframe
      document.getElementById('disclaimer').style.display = 'block'; // إظهار إخلاء المسئولية
    }
  } 
  // إخفاء iframe وإخلاء المسئولية بعد مرور الساعتين
  else if (now > hideTime) {
    document.getElementById('myIframe').style.display = 'none'; // إخفاء iframe
    document.getElementById('disclaimer').style.display = 'none'; // إخفاء إخلاء المسئولية
    $("#myIframe").attr('src', ''); // إزالة مصدر iframe
  }
}

// استدعاء checkTime كل دقيقة
function startTimer(showTime, hideTime, iframeSrc) {
  setInterval(function() {
    checkTime(showTime, hideTime, iframeSrc);
  }, 60000);  // كل 60 ثانية (دقيقة واحدة)

  // التحقق الفوري عند تحميل الصفحة
  checkTime(showTime, hideTime, iframeSrc);
}

function checkTimeAndContent() {
        const oldContent = document.getElementById('old-content');
        const newContent = document.getElementById('new-content');
        const noMatchesMessage = document.getElementById('no-matches');
        
        // التحقق مما إذا كان المحتوى فارغًا
        if (!oldContent.innerHTML.trim() && !newContent.innerHTML.trim()) {
            // إذا كان كلاهما فارغين، إظهار رسالة "لا يوجد مباريات اليوم"
            noMatchesMessage.style.display = 'block';
        } else {
            noMatchesMessage.style.display = 'none';
            
            const currentTime = new Date();
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            
            // تحقق مما إذا كانت الساعة 12:00 صباحًا
            if (currentHour === 0 && currentMinute === 0) {
                // إخفاء المحتوى القديم
                oldContent.style.display = 'none';
                
                // إظهار المحتوى الجديد
                newContent.style.display = 'block';
            }
        }
    }

    // استدعاء الدالة مباشرة عند تحميل الصفحة للتحقق
    checkTimeAndContent();

    // تعيين مؤقت يتحقق من الوقت كل دقيقة
    setInterval(checkTimeAndContent, 60000); // 60000 مللي ثانية = 1 دقيقة

