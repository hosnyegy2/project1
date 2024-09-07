jQuery(document).ready(function ($) {

    "use strict";
    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });


    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });


    jQuery('.right-sidebar,#main-wrapper,.left-sidebar').theiaStickySidebar({
        // Settings
        additionalMarginTop: 80,
        additionalMarginBottom: 30
    });


    $("#description").bind("click", function () {
        $("#description").trigger("change")
    }), $("div.radiobox").click(function () {
        $("html,body").animate({
            scrollTop: $("#inputform").offset().top - 100
        }, "slow")
    }), $("ul.contwraplist_six li").click(function () {
        $("ul li.liststyle_menuitemshow").removeClass("liststyle_menuitemshow"), $(this).closest("li").addClass("liststyle_menuitemshow")
    }), $("ul.contwraplist_five li").click(function () {
        $("ul li.liststyle_menuitemshow").removeClass("liststyle_menuitemshow"), $(this).closest("li").addClass("liststyle_menuitemshow")
    }), $("input:radio[name=type]").click(function () {
        $("input:radio[name=" + $(this).attr("name") + "]").parent().removeClass("menuitemshow"), $(this).parent().addClass("menuitemshow"), document.getElementById("inputform").style.display = "block", $(this).val(), $("#preview").css("color", "#ff0000fa")
    }), $("#description").bind("click", function () {
        $("#description").trigger("change")
    }), $(document).on("load input propertychange change click keyup onsubmit input paste", "textarea[name='description']", function () {
        $("#preview").val($(this).val())
    });

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




    window.smoothScroll = function (target) {
        var scrollContainer = target;
        do {
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
        var targetY = 0;
        do {
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);
        scroll = function (c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () {
                scroll(c, a, b, i);
            }, 20);
        }
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    }
    $(document).on('click', '#search-toggle', function () {
        $(".search-form-wrapper").css("display", "block");
    });
    $(document).ready(function () {
        $(".search-form-overlay").click(function () {
            $(".search-form-wrapper").css("display", "none");
        });
    });
    $("#main-menu-toggle").click(function () {
        $(".kora-top-nav").slideToggle(300);
    });

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

    $('.menu_icon_cont').click(function () {
        $('.kora-top-nav').slideToggle();
    });

    //jQuery('.right-sidebar,#main-wrapper,.left-sidebar').theiaStickySidebar({
    //    // Settings
    //    additionalMarginTop: 10,
    //    additionalMarginBottom: 30
    //});
    //    


    $(window).scroll(function () {
        if ($(this).scrollTop() > $('#header-wrapper').height()) {
            $('#header-wrapper').addClass('scrolled');
        } else {
            $('#header-wrapper').removeClass('scrolled');
        }
    });
    //////////////////////////////////////

    //scroll-top
    var scrollButton = $('#scroll-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            $("#scroll-top").addClass("show");
        } else {
            $("#scroll-top").removeClass("show");
        }

    });
    //click on button
    scrollButton.click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600, "linear").animate({
            scrollTop: 0
        }, 200).animate({
            scrollTop: 0
        }, 150).animate({
            scrollTop: 0
        }, 50);
    });
    //End scroll-top
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
    document.getElementById(tabsyName).style.display = "flex";
    evt.currentTarget.className += " active";
}
