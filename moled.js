// البيانات الديناميكية لكل يوم
const matchData = {

    "2024/10/16": [],
    "2024/10/17": [],
    "2024/10/18": [],
    "2024/10/19": [
        {
            "id": 273,
            "gameUrl": "https://sport.coldady.com/2024/10/tottenham-hotspur-vs-west-ham-match.html",
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
                "team1": 4,
                "team2": 1
            }
},
        {
            "id": 274,
            "gameUrl": "https://sport.coldady.com/2024/10/bayer-leverkusen-vs-eintracht-frankfurt-match.html",
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
                "team1": 2,
                "team2": 1
            }
},
        {
            "id": 275,
            "gameUrl": "https://sport.coldady.com/2024/10/bayer-leverkusen-vs-eintracht-frankfurt-match.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_45.html",
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
                "team1": 2,
                "team2": 1
            }
},
        {
            "id": 277,
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_96.html",
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
                "team1": 1,
                "team2": 0
            }
},
        {
            "id": 278,
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_1.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/match-between-bayern-munich-and-stuttgart.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_69.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_50.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_34.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/match-between-paris-saint-germain-and-strasbourg.html",
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
            "gameUrl": "https://sport.coldady.com/2024/10/blog-post_548.html",
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
    "2024/10/20": [
        {
            "id": 286,
            "gameUrl": "",
            "fareq1": {
                "name": "إمبولي",
                "logo": "https://img.btolat.com/teamslogo/11867.png?v=633"
            },
            "fareq2": {
                "name": "نابولي",
                "logo": "https://img.btolat.com/teamslogo/11947.png?v=385"
            },
            "btola": "الدوري الايطالي",
            "timeStart": "2024/10/20 1:30 PM",
            "timeEnd": "2024/10/20 3:30 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 287,
            "gameUrl": "",
            "fareq1": {
                "name": "ولفرهامبتون",
                "logo": "https://img.btolat.com/teamslogo/9446.png?v=997"
            },
            "fareq2": {
                "name": "مانشستر سيتي",
                "logo": "https://img.btolat.com/teamslogo/9259.png?v=545"
            },
            "btola": "الدوري الإنجليزي",
            "timeStart": "2024/10/20 4:00 PM",
            "timeEnd": "2024/10/20 6:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 288,
            "gameUrl": "",
            "fareq1": {
                "name": "بيراميدز",
                "logo": "https://img.btolat.com/teamslogo/23165.png?v=927"
            },
            "fareq2": {
                "name": "الزمالك",
                "logo": "https://img.btolat.com/teamslogo/8959.png?v=450"
            },
            "btola": "كاس السوبر المصري",
            "timeStart": "2024/10/20 4:05 PM",
            "timeEnd": "2024/10/20 6:05 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 289,
            "gameUrl": "",
            "fareq1": {
                "name": "أتلتيكو مدريد",
                "logo": "https://img.btolat.com/teamslogo/15692.png?v=534"
            },
            "fareq2": {
                "name": "ليجانيس",
                "logo": "https://img.btolat.com/teamslogo/15833.png?v=457"
            },
            "btola": "الدوري الاسباني",
            "timeStart": "2024/10/20 5:15 PM",
            "timeEnd": "2024/10/20 7:15 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 290,
            "gameUrl": "",
            "fareq1": {
                "name": "ليفربول",
                "logo": "https://img.btolat.com/teamslogo/9249.png?v=24"
            },
            "fareq2": {
                "name": "تشيلسي",
                "logo": "https://img.btolat.com/teamslogo/9092.png?v=38"
            },
            "btola": "الدوري الإنجليزي",
            "timeStart": "2024/10/20 6:30 PM",
            "timeEnd": "2024/10/20 8:30 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 291,
            "gameUrl": "",
            "fareq1": {
                "name": "الأهلي",
                "logo": "https://img.btolat.com/teamslogo/8883.png?v=658"
            },
            "fareq2": {
                "name": "سيراميكا كليوباترا",
                "logo": "https://img.btolat.com/teamslogo/33716.png?v=636"
            },
            "btola": "كاس السوبر المصري",
            "timeStart": "2024/10/20 8:00 PM",
            "timeEnd": "2024/10/20 10:00 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 292,
            "gameUrl": "",
            "fareq1": {
                "name": "روما",
                "logo": "https://img.btolat.com/teamslogo/11998.png?v=815"
            },
            "fareq2": {
                "name": "إنتر ميلان",
                "logo": "https://img.btolat.com/teamslogo/11917.png?v=328"
            },
            "btola": "الدوري الايطالي",
            "timeStart": "2024/10/20 9:45 PM",
            "timeEnd": "2024/10/20 11:45 PM",
            "score": {
                "team1": 0,
                "team2": 0
            }
},
        {
            "id": 293,
            "gameUrl": "",
            "fareq1": {
                "name": "برشلونة",
                "logo": "https://img.btolat.com/teamslogo/15702.png?v=616"
            },
            "fareq2": {
                "name": "إشبيلية",
                "logo": "https://img.btolat.com/teamslogo/16175.png?v=306"
            },
            "btola": "الدوري الاسباني",
            "timeStart": "2024/10/20 10:00 PM",
            "timeEnd": "2024/10/21 12:00 AM",
            "score": {
                "team1": 0,
                "team2": 0
            }
}
    ],
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
