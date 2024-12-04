 // دالة لجلب مباراة واحدة حسب ID
 async function fetchMatchById(matchId) {
     // إظهار رسالة التحميل
     document.getElementById("loading-message").style.display = 'block';
     document.getElementById("match-content").style.display = 'none'; // إخفاء المحتوى أثناء التحميل

     try {
         const response = await fetch(`https://coldady.com/matches/match_detail.php?matchId=${matchId}`);
         const data = await response.json();
         console.log("البيانات المسترجعة: ", data);

         // استخدام البيانات الموجودة داخل matchSample
         const match = data.matchSample;

         if (match) {
             displayMatch(match, data.matchFormation, data.matchAnalysis, data.matchSK); // تمرير بيانات التشكيل والتقرير أيضاً
         } else {
             displayError("عذرًا، لم يتم العثور على المباراة المطلوبة.");
         }
     } catch (error) {
         console.error("خطأ أثناء جلب البيانات:", error);
         displayError("حدث خطأ أثناء جلب البيانات.");
     } finally {
         // بعد تحميل البيانات، إخفاء رسالة التحميل وعرض المحتوى
         document.getElementById("loading-message").style.display = 'none';
         document.getElementById("match-content").style.display = 'block';
     }
 }

 // دالة لعرض تفاصيل المباراة
 function displayMatch(match, matchFormation, analysis, matchSK) {
     // Parse the start_play date and add 2 hours
     const startPlayDate = new Date(match.start_play);
     startPlayDate.setHours(startPlayDate.getHours() + 2);

     const formattedStartPlay = startPlayDate.toISOString().split('T')[0] + ' ' + startPlayDate.toTimeString().split(' ')[0];

     const venueName = matchFormation.venue_name || 'لم يتم تحديد الملعب';
     const weather = matchFormation.weather || "غير معروف";
     const temperature = matchFormation.temperature || "غير محدد";
     const referee = matchFormation.referee || "لم يحدد بعد";


     function formatTimeUtc(utcTime) {
         const timeString = `1970-01-01T${utcTime}Z`;
         const date = new Date(timeString);
         let hours = date.getHours();
         let minutes = date.getMinutes();
         const ampm = hours >= 12 ? 'PM' : 'AM';
         hours = hours % 12;
         hours = hours ? hours : 12;
         minutes = minutes < 10 ? '0' + minutes : minutes;
         return hours + ':' + minutes + ' ' + ampm;
     }

     // عرض المحتوى
     const content = `
        <div class="match">
            <div class="m_block egy_sports_item ${match.status === 'Fixture' ? 'notstarted' : match.status === 'Played' ? 'finshed' : match.status === 'Playing' ? 'live' : match.status === 'Uncertain' ? 'finshed' : 'soon'}" style="background: url(${match.bg_logo || 'https://allfootball-static.dongqiudi.com/n/dist/static/img/videoMatchBannerBg.42eb49b.jpg'});background-size: cover;">
                <a href="#" class="ElGadwl ${match.status === 'Fixture' ? 'notstarted' : match.status === 'Played' ? 'endded' : match.status === 'Playing' ? 'runing' : match.status === 'Uncertain' ? 'Uncertain' : 'notstarted'}" title="${match.team_A_name} ضد ${match.team_B_name} فى ${match.competition_name || 'غير معروف'}" style="background: url(${match.bg_logo || 'https://allfootball-static.dongqiudi.com/n/dist/static/img/videoMatchBannerBg.42eb49b.jpg'});background-size: cover;background-position: center;">
               <div class="competition-info-single"><span class="competition-info-single-name">${match.competition_name} <img alt="${match.competition_name}" src="${match.competition_logo || 'https://media.gemini.media/img/yallakora/IOSTeams/YK-Generic-team-logo.png'}"  width="24" /></span><span style="margin: 0 5px;">-</span>
               <span class="gameweek"> الجولة ${match.gameweek}</span></div>
                <div class="Gadwl-Top" style="border: 0;">
                    <div class="Fareeq-r">
                        <img alt="${match.team_A_name}" src="${match.team_A_logo || 'https://media.gemini.media/img/yallakora/IOSTeams/YK-Generic-team-logo.png'}" />
                        <span>${match.team_A_name}</span>
                    </div>
                    <div class="Fareeq-c">
                        <span class="bouton ${match.status === 'Fixture' ? 'notstarted' : match.status === 'Played' ? 'endded' : match.status === 'Playing' ? 'runing' : 'notstarted'}">${match.status === 'Fixture' ? 'لم تبدأ' : match.status === 'Played' ? 'انتهت' : match.status === 'Playing' ? 'جارية الان' : match.status === 'Uncertain' ? 'لم تبدأ' : match.status}</span>
                        <div>
                            <div class="fc_time result_match">
                                ${(match.fs_A === "" && match.fs_B === "") 
                                ? `<span id="time">${formatTimeUtc(match.time_utc)}</span>` 
                                : `<span id="hdaf1">${match.fs_A || 0}</span> - <span id="hdaf2">${match.fs_B || 0}</span>
                               `}
                                ${(match.status !== "Played" && match.status !== "Fixture" && match.status !== "Uncertain" && match.status !== "") 
                                    ? `<span id="playing_show_time">
                                        ${match.playing_show_time && match.playing_show_time !== "" 
                                            ? (match.playing_show_time === "HT" 
                                                ? `<span class="playing_show_time-HT">استراحة</span>` 
                                                : match.playing_show_time) 
                                            : ""}
                                       </span>` 
                                : ""}
                            </div>

                            <div class="date stay" data-start="${match.start_play}" data-gameends="${formattedStartPlay}" id="${match.match_id}"></div>
                        </div>
                        </div>
                        <div class="Fareeq-l">
                        <img alt="${match.team_B_name}" src="${match.team_B_logo || 'https://media.gemini.media/img/yallakora/IOSTeams/YK-Generic-team-logo.png'}" />
                        <span>${match.team_B_name}</span>
                        </div>
                    </div>
                </a>
            </div>
            <!-- محتوى التابات -->
            <div class="tab-content active">
                <div class="match-info" style="text-align: right;">
                <h3>مباراة ${match.team_A_name} ضد ${match.team_B_name} في ${match.competition_name}</h3>
                <p>تُعتبر مباراة ${match.team_A_name} ضد ${match.team_B_name} واحدة من أبرز مباريات ${match.competition_name} حيث يتواجه الفريقان اليوم ${formatDate(match.start_play)} في مباراة مثيرة تُعزز من تنافسية البطولة. تُقام المباراة على ملعب ${venueName}، والذي يُعتبر من الملاعب المميزة فى بطولة ${match.competition_name}.</p>
                <h3>موعد مباراة ${match.team_A_name} ضد ${match.team_B_name}</h3>
                <p>تُقام مباراة ${match.team_A_name} ضد ${match.team_B_name} اليوم ${formatDate(match.start_play)}، في تمام الساعة ${formatTime(match.start_play)} بتوقيت القاهرة. سيتابع عشاق كرة القدم هذه المباراة بحماس كبير، إذ تعتبر واحدة من المباريات المنتظرة في بطولة ${match.competition_name}.</p>
                <h3>تفاصيل البث المباشر</h3>
                <p>يمكنكم متابعة أحداث المباراة عبر موقعنا كول دادى سبورت حيث نوفر تغطية شاملة لبث مباشر للمباراة، ويقدم موقعنا <a href="https://sport.coldady.com" rel="noopener" target="_new" data-abc="true">كول دادى سبورت</a> تحديثات مستمرة وتحليلات دقيقة لكافة لحظات المباراة، مما يضمن للمشاهدين متابعة مستمرة لأهم الأحداث والتفاصيل.</p>
                <h3>ملعب المباراة</h3>
                <p>تُقام مباراة ${match.team_A_name} و${match.team_B_name} على ملعب ${venueName} وسط أجواء مميزة، حيث يُتوقع أن يكون الطقس  ${weather==='Partly Cloudy' ? 'غائم جزئياً' : weather==='Overcast' ? 'ملبد بالغيوم' : weather==='Sunny' ? 'مشمس' : weather==='Cloudy with Rain' ? 'غائم ممطر' : weather}. تبلغ درجة الحرارة حوالي ${temperature}، مما يُعزز من إثارة المباراة ويجعلها تحديًا إضافيًا للاعبين في تقديم أفضل أداء ممكن وسط تلك الظروف المناخية هذه. هذا الطقس قد يلعب دورًا في أسلوب اللعب ويُضيف عنصرًا تكتيكيًا يجب على الفريقين أخذه بعين الاعتبار خلال المباراة.</p>
                <h3>حكم المباراة</h3>
                <p>حكم المباراة هو الشخصية المسؤولة عن إدارة اللقاء والتحكيم بين الفريقين بشكل عادل وفقًا لقوانين اللعبة. يتمتع الحكم بخبرة كبيرة تمكنه من اتخاذ القرارات الحاسمة في اللحظات المهمة خلال المباراة. اليوم، يتولى قيادة هذا اللقاء الحكم <a data-abc="true" href="https://www.yallakora.com" rel="noopener" target="_new">${referee}</a>، والذي يُعرف بمسيرته المهنية الحافلة وتميزه في إدارة المباريات على مختلف المستويات.</p>
                <p>تعد مباراة ${match.team_A_name} ضد ${match.team_B_name} مواجهة من العيار الثقيل في ${match.competition_name}، حيث يتطلع كل من الفريقين إلى تقديم أداء قوي والمنافسة على النقاط الثلاث.</p>
                </div>
                
                <div class="teams-formations">
                    <h2>تشكيل الفريقين</h2>
                    <div class="team-formation">
                        <div id="teamAPlayers">
                            <h3>فريق ${match.team_A_name}</h3>
                            <!-- سيتم طباعة لاعبي الفريق الأول هنا -->
                            <ul id="teamAPlayersList">
                                <!-- سيتم ملء العناصر هنا بواسطة JavaScript -->
                            </ul>
                        </div>
                        <!-- قسم لاعبي الفريق الثاني -->
                        <div id="teamBPlayers">
                            <h3>فريق ${match.team_B_name}</h3>
                            <ul id="teamBPlayersList">
                                <!-- سيتم ملء العناصر هنا بواسطة JavaScript -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
     document.getElementById("match-content").innerHTML = content;

     // طباعة تفاصيل لاعبي الفريق الأول (team_A) من مصفوفة lineups
     let teamAPlayersContent;

     // التحقق من وجود team_A
     if (matchFormation && matchFormation.team_A) {
         // التحقق من وجود lineups وصلاحية أن تكون مصفوفة
         if (matchFormation.team_A.lineups && Array.isArray(matchFormation.team_A.lineups)) {
             // معالجة العناصر إذا كانت موجودة ومصفوفة
             teamAPlayersContent = matchFormation.team_A.lineups.map(player => {
                 return `
                <li>
                    <span>${player.shirtnumber || 'غير متوفر'}</span>
                    <span>${player.person || 'غير متوفر'}</span>
                    <span>
                      ${player.position_x === 'AM' ? 'لاعب وسط مهاجم' :
                      player.position_x === 'GK' ? 'حارس مرمى' :
                      player.position_x === 'DM' ? 'لاعب وسط' :
                      player.position_x === 'D1' ? 'مدافع' :
                      player.position_x === 'A' ? 'مهاجم' :
                      player.position_x}
                   </span>
                </li>
            `;
             }).join('');
         } else {
             // إذا كانت lineups غير موجودة أو ليست مصفوفة
             teamAPlayersContent = `<li>لا توجد معلومات عن لاعبي فريق ${match.team_A_name}.</li>`;

         }
     } else {
         // إذا كانت team_A غير موجودة
         teamAPlayersContent = `<li>لا توجد معلومات متاحة عن التشكيل الان.</li>`;
     }

     // طباعة النتيجة أو استخدامها
     console.log(teamAPlayersContent);

     // طباعة تفاصيل لاعبي الفريق الثاني (team_B) من مصفوفة lineups
     let teamBPlayersContent;

     // التحقق من وجود team_B
     if (matchFormation && matchFormation.team_B) {
         // التحقق من وجود lineups وصلاحية أن تكون مصفوفة
         if (matchFormation.team_B.lineups && Array.isArray(matchFormation.team_B.lineups)) {
             // معالجة العناصر إذا كانت موجودة ومصفوفة
             teamBPlayersContent = matchFormation.team_B.lineups.map(player => {
                 return `
                <li>
                    <span>${player.shirtnumber || 'غير متوفر'}</span>
                    <span>${player.person || 'غير متوفر'}</span>
                   <span>
                      ${player.position_x === 'AM' ? 'لاعب وسط مهاجم' :
                      player.position_x === 'GK' ? 'حارس مرمى' :
                      player.position_x === 'DM' ? 'لاعب وسط' :
                      player.position_x === 'D1' ? 'مدافع' :
                      player.position_x === 'A' ? 'مهاجم' :
                      player.position_x}
                  </span>

                </li>
            `;
             }).join('');
         } else {
             // إذا كانت lineups غير موجودة أو ليست مصفوفة
             teamBPlayersContent = `<li>لا توجد معلومات عن لاعبي فريق ${match.team_B_name}.</li>`;
         }
     } else {
         // إذا كانت team_B غير موجودة
         teamBPlayersContent = `<li>لا توجد معلومات متاحة عن التشكيل الان.</li>`;
     }

     // طباعة النتيجة أو استخدامها
     console.log(teamBPlayersContent);

     // إضافة تفاصيل اللاعبين للمحتوى
     document.getElementById("teamAPlayersList").innerHTML = teamAPlayersContent;
     document.getElementById("teamBPlayersList").innerHTML = teamBPlayersContent;

 }

 // دالة لعرض رسالة خطأ
 function displayError(message) {
     const content = `<p>${message}</p>`;
     document.getElementById("match-content").innerHTML = content;
 }

 // دالة لتنسيق التاريخ
 function formatDate(dateString) {
     const date = new Date(dateString);
     const day = String(date.getDate()).padStart(2, '0');
     const month = String(date.getMonth() + 1).padStart(2, '0');
     const year = date.getFullYear();
     return `${year}/${month}/${day}`;
 }

 // دالة لتنسيق الوقت وإضافة صباحًا/مساءً
 function formatTime(dateString) {
     const date = new Date(dateString);
     let hours = date.getHours();
     const minutes = String(date.getMinutes()).padStart(2, '0');
     const period = hours >= 12 ? 'مساءً' : 'صباحًا';
     hours = hours % 12 || 12; // تحويل الساعة إلى صيغة 12 ساعة
     return `${hours}:${minutes} ${period}`;
 }
