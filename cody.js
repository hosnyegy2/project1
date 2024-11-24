jQuery(document).ready(function ($) {
    function isDaylightSavingTime() {
        return moment().isDST(); // استخدام مكتبة moment للتحقق من التوقيت الصيفي
    }

    $("a.ElGadwl .date").each(function () {
        var t = $(this),
            a = t.data("start"),
            e = t.data("gameends"),
            r = moment(a, "YYYY-MM-DD HH:mm:ss"),
            n = moment(e, "YYYY-MM-DD HH:mm:ss"),
            s = moment.utc().format("YYYY-MM-DD HH:mm:ss");

        var hoursToSubtract = isDaylightSavingTime(); // تحديد الفارق الزمني

        var m = r.subtract(hoursToSubtract, "hours").diff(s, "minutes"),
            o = n.subtract(hoursToSubtract, "hours").diff(s, "minutes");

        switch (true) {
            case m > 30:
                var i = moment.utc(a).subtract(hoursToSubtract, "hours").toDate();
                t.parent().text(moment(i).format("LT"));
                i = moment(i).format("YYYY-MM-DD HH:mm:ss");
                t.countdowntimer({ dateAndTime: i });
                break;

            case m > 0:
                i = moment.utc(a).subtract(hoursToSubtract, "hours").toDate();
                t.parent().text(moment(i).format("LT"));
                i = moment(i).format("YYYY-MM-DD HH:mm:ss");
                t.countdowntimer({ dateAndTime: i });
                break;

            case o > 0:
                i = moment.utc(a).subtract(hoursToSubtract, "hours").toDate();
                break;

            default:
                i = moment.utc(a).subtract(hoursToSubtract, "hours").toDate();
        }
    });
});
