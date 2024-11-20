<?php
header('Content-Type: application/json'); // تحديد نوع المحتوى إلى JSON

// السماح فقط لمدونتك على Blogger
$allowed_origins = ['https://wow-match.blogspot.com', 'https://programslessons.blogspot.com'];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}

// الرابط الأساسي لجلب البيانات
$baseUrl = 'https://match.allfootballapp.com/app/oldMatchList/leagueMatchList?language=ar-EG&init=1';

// التحقق مما إذا كانت هناك معلمات إضافية مثل `cid` و `start`
if (isset($_GET['cid'])) {
    $cid = intval($_GET['cid']); // تأكد من أن `cid` عدد صحيح
    $baseUrl .= "&cid=$cid"; // إضافة `cid` إلى الرابط
} else {
    // إذا لم يتم إرسال `cid`، يمكننا تحديد قيمة افتراضية أو إعطاء استجابة خطأ
    echo json_encode(['error' => 'قيمة cid غير موجودة']);
    exit;
}

// إضافة معلمة `start` إذا كانت موجودة في الـ URL
if (isset($_GET['start_play'])) {
    $start_play = $_GET['start_play']; // تاريخ البداية
    // إضافة `start_play` إلى الرابط
    $baseUrl .= "&start_play=$start_play";
}

// قم بتهيئة cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $baseUrl); // رابط البيانات
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // تجاوز مشاكل SSL إذا كانت موجودة
curl_setopt($ch, CURLOPT_TIMEOUT, 10); // تحديد مهلة زمنية لجلب البيانات

// تنفيذ الطلب
$data = curl_exec($ch);

// إذا حدث خطأ في cURL
if (curl_errno($ch)) {
    echo json_encode(['error' => 'cURL error: ' . curl_error($ch)]);
} elseif ($data === false || empty($data)) {
    echo json_encode(['error' => 'No data received']);
} else {
    // إذا تم جلب البيانات بنجاح
    // إعادة البيانات للمتصفح بتنسيق JSON
    echo $data;
}

curl_close($ch);
?>
