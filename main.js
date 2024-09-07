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
  
    //////////////////////////////////////
    //////////////////////////////////////
    jQuery(document).ready(function ($) {
        $("a#tom").click(function () {
            $(".titleG").html("اهم مباريات الغد");
        });
        $("a#tod").click(function () {
            $(".titleG").html("اهم مباريات اليوم");
        });
        $("a#yas").click(function () {
            $(".titleG").html("نتائج مباريات الامس")
        });
    });

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
