// البيانات الديناميكية لكل يوم
const matchData = {

    "2024/10/16": [],
    "2024/10/17": [
        {
            "id": 256,
            "gameUrl": "https://sport.coldady.com/2024/10/galatasaray-vs-roma.html",
            "fareq1": {
                "name": "غلطة سراي",
                "logo": "https://img.btolat.com/teamslogo/17029.png?v=354"
            },
            "fareq2": {
                "name": "روما",
                "logo": "https://img.btolat.com/teamslogo/11998.png?v=815"
            },
            "btola": "دوري أبطال أوروبا للسيدات",
            "timeStart": "2024/10/17 7:45 PM",
            "timeEnd": "2024/10/17 9:45 PM",
            "score": {
                "team1": 1,
                "team2": 6
            }
        },
        {
            "id": 257,
            "gameUrl": "https://sport.coldady.com/2024/10/real-madrid-vs-celtic-match.html",
            "fareq1": {
                "name": "ريال مدريد",
                "logo": "https://img.btolat.com/teamslogo/16110.png?v=376"
            },
            "fareq2": {
                "name": "سيلتك",
                "logo": "https://upload.wikimedia.org/wikipedia/ar/thumb/3/35/Celtic_FC.svg/180px-Celtic_FC.svg.png"
            },
            "btola": "دوري أبطال أوروبا للسيدات",
            "timeStart": "2024/10/17 7:45 PM",
            "timeEnd": "2024/10/17 9:45 PM",
            "score": {
                "team1": 4,
                "team2": 0
            }
        },
        {
            "id": 262,
            "gameUrl": "https://sport.coldady.com/2024/10/17.html",
            "fareq1": {
                "name": "العقبة",
                "logo": "https://www.jfa.jo/images/team1/60662de4e7046.png"
            },
            "fareq2": {
                "name": "الأهلي",
                "logo": "https://www.jfa.jo/images/team1/60662dd51ebe8.png"
            },
            "btola": "الدوري الأردني للمحترفين",
            "timeStart": "2024/10/17 7:45 PM",
            "timeEnd": "2024/10/17 9:45 PM",
            "score": {
                "team1": 1,
                "team2": 3
            }
        },
        {
            "id": 263,
            "gameUrl": "https://sport.coldady.com/2024/10/17_17.html",
            "fareq1": {
                "name": "شباب الأردن",
                "logo": "https://www.jfa.jo/images/team1/60662dd08caf1.png"
            },
            "fareq2": {
                "name": "الوحدات",
                "logo": "https://www.jfa.jo/images/team1/60662db3a8f96.png"
            },
            "btola": "الدوري الأردني للمحترفين",
            "timeStart": "2024/10/17 7:45 PM",
            "timeEnd": "2024/10/17 9:45 PM",
            "score": {
                "team1": 0,
                "team2": 2
            }
        }
    ],
    "2024/10/18": [
        {
            "id": 264,
            "gameUrl": "https://sport.coldady.com/2024/10/2024-2025_18.html",
            "fareq1": {
                "name": "الخور",
                "logo": "https://img.btolat.com/teamslogo/14500.png?v=692"
            },
            "fareq2": {
                "name": "الريان",
                "logo": "https://img.btolat.com/teamslogo/14502.png?v=750"
            },
            "btola": "الدوري القطري",
            "timeStart": "2024/10/18 5:30 PM",
            "timeEnd": "2024/10/18 7:30 PM",
            "score": {
                "team1": 2,
                "team2": 1
            }
},
        {
            "id": 265,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018.html",
            "fareq1": {
                "name": "الخليج",
                "logo": "https://img.btolat.com/teamslogo/15006.png?v=809"
            },
            "fareq2": {
                "name": "الأهلي السعودي",
                "logo": "https://img.btolat.com/teamslogo/14990.png?v=643"
            },
            "btola": "الدوري السعودي",
            "timeStart": "2024/10/18 5:45 PM",
            "timeEnd": "2024/10/18 7:45 PM",
            "score": {
                "team1": 0,
                "team2": 3
            }
},
        {
            "id": 266,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_18.html",
            "fareq1": {
                "name": "الهلال السعودي",
                "logo": "https://img.btolat.com/teamslogo/15001.png?v=23"
            },
            "fareq2": {
                "name": "الفيحاء",
                "logo": "https://img.btolat.com/teamslogo/14998.png?v=170"
            },
            "btola": "الدوري السعودي",
            "timeStart": "2024/10/18 6:00 PM",
            "timeEnd": "2024/10/18 8:00 PM",
            "score": {
                "team1": 3,
                "team2": 0
            }
},
        {
            "id": 267,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_16.html",
            "fareq1": {
                "name": "السد",
                "logo": "https://img.btolat.com/teamslogo/14503.png?v=105"
            },
            "fareq2": {
                "name": "الشحانية",
                "logo": "https://img.btolat.com/teamslogo/14509.png?v=56"
            },
            "btola": "الدوري القطري",
            "timeStart": "2024/10/18 7:30 PM",
            "timeEnd": "2024/10/18 9:30 PM",
            "score": {
                "team1": 4,
                "team2": 2
            }
},
        {
            "id": 270,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_23.html",
            "fareq1": {
                "name": "الغرافة",
                "logo": "https://img.btolat.com/teamslogo/14497.png?v=925"
            },
            "fareq2": {
                "name": "أم صلال",
                "logo": "https://img.btolat.com/teamslogo/14513.png?v=0"
            },
            "btola": "الدوري القطري",
            "timeStart": "2024/10/18 7:30 PM",
            "timeEnd": "2024/10/18 9:30 PM",
            "score": {
                "team1": 3,
                "team2": 1
            }
},
        {
            "id": 271,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_11.html",
            "fareq1": {
                "name": "نهضة الزمامرة",
                "logo": "https://img.btolat.com/teamslogo/29802.png?v=925"
            },
            "fareq2": {
                "name": "نهضة بركان",
                "logo": "https://img.btolat.com/teamslogo/13127.png?v=137"
            },
            "btola": "الدوري المغربي",
            "timeStart": "2024/10/18 8:00 PM",
            "timeEnd": "2024/10/18 10:00 PM",
            "score": {
                "team1": 1,
                "team2": 3
            }
},
        {
            "id": 268,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_9.html",
            "fareq1": {
                "name": "الشباب السعودي",
                "logo": "https://img.btolat.com/teamslogo/15017.png?v=438"
            },
            "fareq2": {
                "name": "النصر السعودي",
                "logo": "https://img.btolat.com/teamslogo/15010.png?v=992"
            },
            "btola": "الدوري السعودي",
            "timeStart": "2024/10/18 9:00 PM",
            "timeEnd": "2024/10/18 11:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 269,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_69.html",
            "fareq1": {
                "name": "بوروسيا دورتموند",
                "logo": "https://img.btolat.com/teamslogo/10303.png?v=260"
            },
            "fareq2": {
                "name": "سانت باولي",
                "logo": "https://img.btolat.com/teamslogo/10603.png?v=240"
            },
            "btola": "الدوري الالماني",
            "timeStart": "2024/10/18 9:30 PM",
            "timeEnd": "2024/10/18 11:30 PM",
            "score": {
                "team1": 1,
                "team2": 0
            }
},

        {
            "id": 272,
            "gameUrl": "https://sport.coldady.com/2024/10/20241018_36.html",
            "fareq1": {
                "name": "الشباب الرياضي السالمي",
                "logo": "https://img.btolat.com/teamslogo/29803.png?v=237"
            },
            "fareq2": {
                "name": "الرجاء البيضاوي",
                "logo": "https://img.btolat.com/teamslogo/13126.png?v=490"
            },
            "btola": "الدوري المغربي",
            "timeStart": "2024/10/18 10:00 PM",
            "timeEnd": "2024/10/19 12:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
}
    ],
    "2024/10/19": [
        {
            "id": 273,
            "gameUrl": "",
            "fareq1": {
                "name": "توتنهام هوتسبر",
                "logo": "https://img.btolat.com/teamslogo/9406.png?v=155"
            },
            "fareq2": {
                "name": "وست هام يونايتد",
                "logo": "https://img.btolat.com/teamslogo/9427.png?v=444"
            },
            "btola": "الدوري الإنجليزي",
            "timeStart": "2024/10/19 2:30 PM",
            "timeEnd": "2024/10/19 4:30 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 274,
            "gameUrl": "",
            "fareq1": {
                "name": "باير ليفركوزن",
                "logo": "https://img.btolat.com/teamslogo/10281.png?v=980"
            },
            "fareq2": {
                "name": "آينتراخت فرانكفورت",
                "logo": "https://img.btolat.com/teamslogo/10347.png?v=515"
            },
            "btola": "الدوري الالماني",
            "timeStart": "2024/10/19 4:30 PM",
            "timeEnd": "2024/10/19 6:30 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 275,
            "gameUrl": "",
            "fareq1": {
                "name": "الترجي الجرجيسي",
                "logo": "https://img.btolat.com/teamslogo/16960.png?v=692"
            },
            "fareq2": {
                "name": "الترجي التونسي",
                "logo": "https://img.btolat.com/teamslogo/16933.png?v=814"
            },
            "btola": "الدوري التونسي",
            "timeStart": "2024/10/19 5:00 PM",
            "timeEnd": "2024/10/19 7:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 276,
            "gameUrl": "",
            "fareq1": {
                "name": "مانشستر يونايتد",
                "logo": "https://img.btolat.com/teamslogo/9260.png?v=82"
            },
            "fareq2": {
                "name": "برينتفورد",
                "logo": "https://img.btolat.com/teamslogo/9059.png?v=398"
            },
            "btola": "الدوري الإنجليزي",
            "timeStart": "2024/10/19 5:00 PM",
            "timeEnd": "2024/10/19 7:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 277,
            "gameUrl": "",
            "fareq1": {
                "name": "ميلان",
                "logo": "https://img.btolat.com/teamslogo/11938.png?v=918"
            },
            "fareq2": {
                "name": "أودينيزي",
                "logo": "https://img.btolat.com/teamslogo/12051.png?v=679"
            },
            "btola": "الدوري الايطالي",
            "timeStart": "2024/10/19 7:00 PM",
            "timeEnd": "2024/10/19 9:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 278,
            "gameUrl": "",
            "fareq1": {
                "name": "بورنموث",
                "logo": "https://img.btolat.com/teamslogo/9053.png?v=839"
            },
            "fareq2": {
                "name": "آرسنال",
                "logo": "https://img.btolat.com/teamslogo/9002.png?v=593"
            },
            "btola": "الدوري الإنجليزي",
            "timeStart": "2024/10/19 7:30 PM",
            "timeEnd": "2024/10/19 9:30 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 279,
            "gameUrl": "",
            "fareq1": {
                "name": "بايرن ميونخ",
                "logo": "https://img.btolat.com/teamslogo/10285.png?v=46"
            },
            "fareq2": {
                "name": "شتوتجارت",
                "logo": "https://img.btolat.com/teamslogo/10646.png?v=579"
            },
            "btola": "الدوري الالماني",
            "timeStart": "2024/10/19 7:30 PM",
            "timeEnd": "2024/10/19 9:30 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 280,
            "gameUrl": "",
            "fareq1": {
                "name": "اتحاد جدة",
                "logo": "https://img.btolat.com/teamslogo/15003.png?v=672"
            },
            "fareq2": {
                "name": "القادسية السعودي",
                "logo": "https://img.btolat.com/teamslogo/15013.png?v=662"
            },
            "btola": "الدوري السعودي",
            "timeStart": "2024/10/19 9:00 PM",
            "timeEnd": "2024/10/19 11:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 281,
            "gameUrl": "",
            "fareq1": {
                "name": "يوفنتوس",
                "logo": "https://img.btolat.com/teamslogo/11922.png?v=381"
            },
            "fareq2": {
                "name": "لاتسيو",
                "logo": "https://img.btolat.com/teamslogo/11925.png?v=289"
            },
            "btola": "الدوري الايطالي",
            "timeStart": "2024/10/19 9:45 PM",
            "timeEnd": "2024/10/19 11:45 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 282,
            "gameUrl": "",
            "fareq1": {
                "name": "الوداد البيضاوي",
                "logo": "https://img.btolat.com/teamslogo/13137.png?v=519"
            },
            "fareq2": {
                "name": "شباب المحمدية",
                "logo": "https://img.btolat.com/teamslogo/13129.png?v=671"
            },
            "btola": "الدوري المغربي",
            "timeStart": "2024/10/19 10:00 PM",
            "timeEnd": "2024/10/20 12:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 283,
            "gameUrl": "",
            "fareq1": {
                "name": "باريس سان جيرمان",
                "logo": "https://img.btolat.com/teamslogo/10061.png?v=97"
            },
            "fareq2": {
                "name": "ستراسبورج",
                "logo": "https://img.btolat.com/teamslogo/10124.png?v=711"
            },
            "btola": "الدوري الفرنسي",
            "timeStart": "2024/10/19 10:00 PM",
            "timeEnd": "2024/10/20 12:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 284,
            "gameUrl": "",
            "fareq1": {
                "name": "سيلتا فيجو",
                "logo": "https://img.btolat.com/teamslogo/15934.png?v=418"
            },
            "fareq2": {
                "name": "ريال مدريد",
                "logo": "https://img.btolat.com/teamslogo/16110.png?v=376"
            },
            "btola": "الدوري الاسباني",
            "timeStart": "2024/10/19 10:00 PM",
            "timeEnd": "2024/10/20 12:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
}
    ],
    "2024/10/20": [],
    "2024/10/21": [],
    "2024/10/22": [],
    "2024/10/23": [],
    "2024/10/24": [],
    "2024/10/25": [],
    "2024/10/26": [],
    "2024/10/27": [],
    "2024/10/28": [],
    "2024/10/29": [],
    "2024/10/30": [],
    "2024/10/31": []

};