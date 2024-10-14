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

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
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
