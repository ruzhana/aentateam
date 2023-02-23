import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


function onbotOneComponent() {
    return (
        <div>
            <h3>Java бағдарламалау тілі</h3>
         <p>Операциялық режим дегеніміз не?</p>
         <p>Әдеттегі FIRST Tech Challenge матчында команданың роботы ұпай жинау үшін әртүрлі
тапсырмаларды орындауы керек.
Мысалы, команда өз роботының жарыс алаңындағы ақ сызық бойымен жүруін,
содан кейін «а» ұпайын алғанын қалауы мүмкін
ойын элементі матч кезінде өздігінен мақсатқа айналады. Командалар «іс
режимдері» деп аталатын бағдарламаларды жазады (олроботының әрекетін көрсету үшін «операциялық режимдер» дегенді білдіреді. Бұл
жұмыс режимдері роботта жұмыс істейді
Driver Station телефонында таңдалғаннан кейін контроллер телефоны.
FIRST Tech Challenge-ге қатысатын командалардың әртүрлі бағдарламалау
құралдары бар.
өздерінің жұмыс режимдерін жасау үшін пайдаланыңыз. Бұл құжат FTC OnBot Java
бағдарламалау құралын қалай пайдалану керектігін түсіндіреді
FTC роботы үшін жұмыс режимін жазу.</p>
<p>FTC OnBot Java бағдарламалау құралы</p>
<p>FTC OnBot Java бағдарламалау құралы робот арқылы қызмет көрсететін
пайдаланушыға ыңғайлы бағдарламалау құралы болып табылады.
Контроллер телефоны. Пайдаланушы осы құралды пайдаланып роботы үшін
реттелетін жұмыс режимдерін жасай алады, содан кейін осы операцияны сақтай
алады
режимдерін тікелей робот контроллеріне орнатыңыз. Пайдаланушылар Java
көмегімен жұмыс режимдерін жазады. Жұмыс режимдері құрастырылған
робот контроллерінде өте жылдам, содан кейін жұмыс уақытында робот контроллері
арқылы динамикалық түрде жүктеледі.</p>
<p>Бұл құжаттағы мысалдар робот контроллеріне қосылу үшін Windows ноутбугі
пайдаланылады. Бұл
Windows ноутбук компьютерінде Javascript қосылған веб-шолғыш орнатылған, ол
FTC-ге қол жеткізу үшін пайдаланылады
OnBot Java бағдарламалау құралы.</p>
<p>Creating Your First Op Mode</p>
<p>Егер сіз ноутбукты робот контроллерінің Бағдарлама және басқару сымсыз желісіне
сәтті қоссаңыз, онда сіз бірінші жұмыс режимін жасауға дайынсыз. Бұл бөлімде сіз
бірінші жұмыс режимі үшін бағдарлама логикасын жасау үшін OnBot Java
бағдарламалау құралын пайдаланасыз.</p>
<p>1. Ноутбукте веб-шолғышты іске қосыңыз (БІРІНШІ Google Chrome пайдалану
ұсынылады) және робот контроллерінің Бағдарлама және басқару экранында
көрсетілетін веб-мекенжайды табыңыз. Маңызды ескерту: Егер робот контроллері
Android смартфоны болса, Бағдарлама және басқару серверіне кіру мекенжайы
«192.168.49.1:8080».</p>
<p>2. Веб-шолғышыңыздың бағдарламалау режимінің серверіне қосылғанын тексеріңіз.
Егер ол қосылған болса
бағдарламалау режимінің сервері сәтті іске қосылса, Robot Controller Console
көрсетіледі.</p>
<p>3. Экранның жоғарғы жағындағы “OnBotJava” сөзін басыңыз. Бұл браузерді OnBot
Java-ға ауыстырады бағдарламалау режимі</p>
<p>4. OnBot Java пайдаланушы интерфейсін қараңыз. Сол жақта жобаның шолғыш
тақтасы бар. Ішінде жоғарғы оң жақ бұрышында бастапқы кодты өңдеу тақтасы бар.
Төменгі оң жақ бұрышта орналасқан хабарлар тақтасы.</p>
<p>5. Жаңа файл жасау үшін жоба шолғышының аумағында «+» белгісін басыңыз. Бұл
түймені басу Жаңа іске қосылады Файл диалогтық терезесі. Бұл диалогтық терезеде
жаңа файлды теңшеуге болатын бірнеше параметрлер бар.</p>
<p>Бұл мысал үшін Жаңа файл тілқатысу терезесіндегі Файл атауы ретінде
“MyFIRSTJavaOpMode” параметрін көрсетіңіз.</p>
<p>Үлгі ашылмалы тізім басқару элементін пайдаланып, қол жетімді үлгі операциясы
тізімінен «BlankLinearOpMode» таңдаңыз.
режимдері (жоғарыдағы суретті қараңыз).</p>
<p>“BlankLinearOpMode” параметрін таңдау арқылы OnBot Java редакторы автоматты
түрде жұмыс істейді сіз үшін негізгі LinearOpMode құрылымын жасаңыз.</p>
<p>Бұл жаңа файл теле-басқарылатын (яғни, драйвер) ретінде конфигурацияланатынына
көз жеткізу үшін «TeleOp» деп белгіленген опцияны тексеріңіз.
басқарылатын) жұмыс режимі.</p>
<p>Сондай-ақ, «Конфигурацияланған жабдық үшін орнату коды» опциясын тексеріңіз.
Бұл опция қосылса, OnBot Java редакторы робот контроллері үшін аппараттық
конфигурация файлын автоматты түрде қарайды жұмыс режимінде
конфигурацияланған құрылғыларға кіру үшін қажет кодты жасаңыз.</p>
<p>Жаңа жұмыс режимін жасау үшін «OK» түймесін басыңыз.</p>
<p>6. OnBot Java пайдаланушы интерфейсінің өңдеу тақтасында жаңадан жасалған
жұмыс режимін көруіңіз керек.</p>
<p>Құттықтаймыз, сіз бірінші операциялық режиміңізді жасадыңыз! Қазіргі уақытта
жұмыс режимі көп нәрсені істемейді, бірақ сіз жасайсыз
соңында оны пайдалырақ ету үшін өзгертіңіз.</p>
<p>Операциялық режиміңіздің құрылымын тексеру</p>
<p>Жұмыс режимін робот контроллері орындайтын тапсырмалар тізімі ретінде
қарастыру пайдалы болуы мүмкін. Сызықтық операция үшін
режимінде робот контроллері осы тапсырмалар тізімін ретімен өңдейді.
Пайдаланушылар басқару циклдерін де пайдалана алады (мысалыРобот контроллері сызықтық жұмыс режимінде белгілі бір тапсырмаларды
қайталауы (немесе қайталауы) үшін уақытша цикл ретінде).</p>
<p>Егер сіз операциялық режимді роботқа арналған нұсқаулар тізімі ретінде ойласаңыз,
сіз жасаған нұсқаулардың бұл жинағы орындалады
команда мүшесі «MyFIRSTJavaOpMode» деп аталатын операциялық режимді таңдаған
сайын роботпен орындалады.
осы робот контроллері үшін қолжетімді жұмыс режимдерінің тізімі.
Жаңадан жасалған жұмыс режимінің құрылымын қарастырайық. Міне, жұмыс
режимі мәтінінің көшірмесі (кейбіреулерін алып тастағанда
түсініктемелер, бума анықтамасы және кейбір импорттық бума мәлімдемелері):</p>
<p>code</p>
<p>TeleOp режимінің басында класс анықтамасынан бұрын пайда болатын аннотация
бар. Бұл аннотацияда айтылған
бұл теле-басқарылатын (яғни, драйвер басқаратын) жұмыс режимі:</p>
<p>Егер сіз осы жұмыс режимін автономды жұмыс режиміне өзгерткіңіз келсе,
«@TeleOp» сөзін Оның орнына "@Autonomous" аннотациясы.Үлгі кодынан операциялық режим Java класы ретінде анықталғанын көруге болады.
Бұл мысалда жұмыс режимі атауы «MyFIRSTJavaOpMode» деп аталады және ол
LinearOpMode сыныбынан сипаттамаларды иемденеді.</p>
<p>code</p>
<p>Сондай-ақ, OnBot Java редакторы осы жұмыс режимі үшін бес жеке мүше
айнымалысын жасағанын көре аласыз. Мыналар айнымалы мәндерде OnBot Java
редакторы анықтаған бес конфигурацияланған құрылғыға сілтемелер болады робот
контроллерінің конфигурация файлы.</p>
<p>code</p>
<p>Содан кейін runOpMode деп аталатын қайта анықталған әдіс бар. LinearOpMode
түріндегі әрбір операциялық режим міндетті түрде бұл әдісті жүзеге асыру. Бұл әдіс
пайдаланушы операциялық режимді таңдап, іске қосқанда шақырылады.</p>
<p>code</p>
<p>runOpMode әдісінің басында операциялық режим сілтемелерді алу үшін hardwareMap
деп аталатын нысанды пайдаланады. Robot Controller конфигурация файлында
тізімделген аппараттық құрылғылар:</p>
<p>code</p>
<p>HardwareMap нысаны runOpMode әдісінде пайдалануға қолжетімді. Ол HardwareMap
типті объект болып табылады сынып.</p>
<p>Ескертпе: Жұмыс режимінде белгілі бір құрылғыға сілтемені алуға әрекеттенген кезде,
сіз ат HardwareMap.get әдісінің екінші аргументі ретінде анықтау үшін пайдаланылған
атқа сәйкес келуі керек конфигурация файлындағы құрылғыны таңдаңыз. Мысалы,
тұрақты ток қозғалтқышы бар конфигурация файлын жасасаңыз «motorTest» деп
аталады, содан кейін осы моторды шығарып алу үшін дәл осы атауды (регистрді
ескереді) пайдалануыңыз керек.hardwareMap нысаны. Егер атаулар сәйкес келмесе,
жұмыс режимі мұны көрсететін ерекше жағдайды шығарады ол құрылғыны таба
алмайды.</p>
<p>Мысалдың келесі бірнеше мәлімдемелерінде жұмыс режимі пайдаланушыны
жалғастыру үшін бастау түймешігін басуға шақырады.Ол runOpMode әдісінде қол
жетімді басқа нысанды пайдаланады. Бұл нысан телеметрия және оп деп аталады
режимі Driver Station-ға жіберілетін хабарды қосу үшін addData әдісін пайдаланады.
Одан кейін жұмыс режимі шақырады хабарды драйвер станциясына жіберу үшін
жаңарту әдісі. Содан кейін күту үшін waitForStart әдісін шақырады пайдаланушы
жұмыс режимін іске қосу үшін драйвер станциясындағы іске қосу түймесін басады.</p>
<p>code</p>
<p>Ескертпе: Робот басталмайтынына көз жеткізу үшін барлық желілік жұмыс
режимдерінде waitForStart мәлімдемесі болуы керек
драйвер іске қосу түймесін басқанша жұмыс режимін орындау.</p>
<p>code</p>
<p>Жұмыс режимі уақытша циклде қайталанатындықтан, ол «Күй» индексімен
телеметриялық хабарламаларды жіберуді жалғастырады және Driver Station-да
көрсетілетін «Running» хабары.</p>
<p>Жұмыс режимін құру</p>
<p>Операциялық режимді жасағанда немесе өңдегенде OnBot Java редакторы .java
файлын файлдық жүйеге автоматты түрде сақтайды.
Робот контроллері. Дегенмен, робот контроллерінде өзгертулерді орындамас бұрын,
алдымен құрастыру керек жұмыс режимін орнатыңыз және оны Java мәтіндік
файлынан FTC роботына динамикалық түрде жүктеуге болатын екілік файлға
түрлендіріңіз. Контроллер қолданбасы.</p>
<p>Жұмыс режиміне қанағаттансаңыз және құрастыруға дайын болсаңыз, Құрастыру
түймесін басыңыз (бұл түймесі бар түйме).
құрастыру процесін бастау үшін кілт белгісі, төмендегі суретті қараңыз). Құру процесі
барлығын құрастыратынын ескеріңіз Робот контроллеріндегі .java файлдары.Хабарламалардың төменгі оң жағында орналасқан хабарлар тақтасында пайда
болуын көруіңіз керек
терезе. Егер сіздің құрастыруыңыз сәтті болса, «Құрастыру сәтті аяқталды!» деген
жазуды көруіңіз керек. хабарлар тақтасындағы хабар.</p>
<p>Екілік файлдарды жаңартылған жұмыс режимдерімен құрастырғаннан кейін, олар
робот контроллерінде іске қосуға дайын. Мысал операциялық режимді іске қоспас
бұрын, құрастыру процесінде мәселе туындаса не болатынын көрейік</p>
<p>Құрылым хабарларының ақаулықтарын жою</p>
<p>Алдыңғы бөлімде құрастыру процесі бірқалыпты өтті. Қате тудыру үшін жұмыс
режимін сәл өзгертейік құрастыру процесінде.
OnBot Java терезесінің өңдеу тақтасында «жеке Servo servoTest;» деп оқитын жолды
іздеңіз. Бұл операциялық режим класс анықтамасының басына жақын жерде пайда
болуы керек. «Серво» сөзін өзгертіңіз «Zervo» сөзі:</p>
<p>Сондай-ақ, пайдаланушыға жұмыс режимі инициализацияланғанын хабарлайтын
телеметрия мәлімдемесін өзгертейік және
мәлімдеме келесідей болуы үшін екі аргументтің бірін алып тастаңыз:</p>
<p>Екінші аргументті жойған кезде өзгертілген жолдың жанында кішкене «x» пайда
болуы керек екенін ескеріңіз addData мәлімдемесі. Бұл «x» мәлімдемеде синтаксистік
қате бар екенін көрсетеді.
Жұмыс режимін өзгерткеннен кейін құрастыру түймесін басып, қандай қате туралы
хабарлар пайда болатынын көруге болады.
Операциялық режимді бірінші рет құруға әрекет жасағанда, «өрнек қатесінің заңсыз
басталуы» пайда болуы керек. Бұл
себебі addData әдісінде оның екінші аргументі жоқ. OnBot Java жүйесі де сізді келесіге
бағыттайды
қатесі бар файлды және қате орын алған файлдағы орынды.</p>
<p>Бұл мысалда проблемалық файл
«org/firstinspires/ftc/teamcode/MyFIRSTJavaOpMode.java» деп аталады және
қате 62-жолдың 37-бағанында орын алады. Құрастыру процесі барлық .java
файлдарын құрастыратынын ескеру маңызды.Робот контроллері. Егер басқа файлда қате болса (сіз қазір өңделмеген) сізге қажет
болады ақаулықты тудырған файлды анықтау үшін файл атауын қараңыз. Бұл
мәлімдемені бастапқы, дұрыс пішініне қайтарайық:</p>
<p>addData мәлімдемесін түзетіп болғаннан кейін, не болып жатқанын көру үшін
құрастыру түймесін қайта басыңыз. OnBot Java жүйесі деп аталатын бастапқы
файлда «Zervo» таңбасын таба алмайтынына шағымдануы керек
“org/firstinspires/ftc/teamcode/MyFIRSTJavaOpMode.java” 51-жолдың 13-бағанында.
Мәлімдемені бастапқы пішініне қайтару керек, содан кейін құрастыру түймесін басып,
операцияның орындалғанын тексеру керек режимі дұрыс құрастырылады.</p>
<p>Операциялық режимді іске қосу</p>
<p>Жұмыс режимін сәтті қайта құрсаңыз, жұмыс режимін іске қосуға дайынсыз. Driver
Station жұмыс істемейтінін тексеріңіз робот контроллеріне қосылған. Сіз мысалы
операциялық режимді теле-басқарылатын операция деп белгілегендіктен режимінде
ол «TeleOp» операциялық режимі ретінде тізімде болады. Driver Station жүйесінде
қолжетімді жұмыс режимдерінің тізімін көрсету үшін «TeleOp» ашылмалы тізім
басқаруын пайдаланыңыз. таңдаңыз тізімнен операциялық режиміңізді
(«MyFIRSTJavaOpMode») таңдаңыз.</p>
<p>Жұмыс режимін инициализациялау үшін INIT түймесін басыңыз.
Операциялық режим runOpMode әдісіндегі операторларды waitForStart операторына
дейін орындайды. Ол
одан кейін жалғастыру үшін бастау түймесін (үшбұрышты пішінді таңбамен
көрсетілген) басқанша күтіңіз.
Бастау түймесін басқаннан кейін жұмыс режимі қайталануды жалғастырады және
«Күй: Орындалуда» хабарын жібереді. жүргізуші станциясына. Жұмыс режимін
тоқтату үшін төртбұрышты тоқтату түймесін басыңыз.</p>
<p>Құттықтаймыз! Сіз бірінші java op режимін іске қостыңыз!</p>
<p>Моторды басқару үшін жұмыс режимін өзгерту</p>
<p>REV Expansion Hub үшін қосылған және конфигурацияланған тұрақты ток
қозғалтқышын басқару үшін жұмыс режимін өзгертейік. Бағдарлама циклінің кодын
келесідей етіп өзгертіңіз:</p>
<p>Қосылған кодты қарасаңыз, біз бұрын мақсатты қуат деп аталатын жаңа
айнымалыны анықтағанымызды көресіз біз while циклін енгіземіз.</p>
<p>while циклінің басында біз tgtPower айнымалысын геймпад1 сол жағындағы теріс
мәнге тең етіп орнатамыз</p>
<p>gamepad1 нысаны runOpMode әдісінде қол жеткізуге болады. күйін білдіреді
Driver станциясындағы №1 геймпад. Жарыс кезінде пайдаланылатын F310
геймпадтары үшін Джойстиктің Y мәні джойстик ең жоғарғы күйінде болғанда -1-ден,
джойстик орнында болғанда +1-ге дейін ауытқиды. ең төменгі позиция. Жоғарыдағы
мысал кодында солға басу үшін left_stick_y мәнін жоққа шығарасыз Джойстикті алға
жылжыту қозғалтқышқа оң қуат беруіне әкеледі. Бұл мысалда түсінік екенін ескеріңіз
қозғалтқыш үшін алға және артқа ерікті. Дегенмен, джойстик y мәнін жоққа шығару
тұжырымдамасы мүмкін практикада өте пайдалы болады.</p>
<p>Келесі мәлімдемелер жинағы motorTest қуатын tgtPower айнымалысымен ұсынылған
мәнге орнатады. The арқылы жіберілетін деректер жинағына мақсатты қуат пен
нақты қозғалтқыш қуатының мәндері қосылады Driver Station-ға телеметриялық
механизм.</p>
<p>Осы жаңа мәлімдемелерді қосу үшін жұмыс режимін өзгерткеннен кейін құрастыру
түймесін басып, оны тексеріңіз операциялық режим сәтті құрылды.</p>
<p>Геймпад қосылған операциялық режимді іске қосу</p>
<p>Жұмыс режимі геймпадтан кіріс алады және тұрақты ток қозғалтқышын басқару
үшін осы кірісті пайдаланады. Жұмыс режимін іске қосу үшін, Logitech F310
геймпадын драйвер станциясына жалғау керек. Геймпадты телефонға қоспас бұрын,
геймпадтың төменгі жағындағы қосқыш күйіне орнатылғанын тексеріңіз «X»
позициясы.</p>
<p>Micro USB OTG адаптер кабелі арқылы геймпадты драйвер станциясына қосыңыз.
Сіздің операциялық режиміңіздің мысалы №1 пайдаланушы немесе драйвер ретінде
белгіленген геймпадтан енгізуді іздейді. түймесін басыңыз
Logictech F310 контроллеріндегі «Бастау» және «А» түймелерін бір уақытта геймпад
ретінде белгілеңіз. №1 пайдаланушы. Бастау түймешігі мен B түймелерін бір уақытта
басу геймпадты белгілейтінін ескеріңіз №2 пайдаланушы.
Егер сіз геймпадты №1 пайдаланушы ретінде сәтті тағайындасаңыз, мәтіннің үстінде
кішкене геймпад белгішесін көруіңіз керек Driver Station экранының жоғарғы оң жақ
бұрышындағы "Пайдаланушы 1". №1 геймпадта белсенділік болған кезде, кішкентай
белгішені жасыл түспен бөлектеу керек. Белгіше жоқ болса немесе сіз жасаған кезде
жасыл түспен бөлектелмесе геймпадты пайдалансаңыз, геймпадқа қосылуда ақау
бар.</p>
<p>«MyFIRSTJavaOpMode» операциялық режимін таңдаңыз, инициализациялаңыз және
іске қосыңыз. Кез келген уақытта ескеру маңызды
операциялық режимді қайта құру үшін ағымдағы жұмыс режимін іске қосуды
тоқтатып, содан кейін жаңа ғана енгізілген өзгерістерден бұрын оны қайта бастау
керек. салынған күшіне енеді.
Егер сіз геймпадты дұрыс конфигурациялаған болсаңыз, сол жақ джойстик
қозғалтқыштың қозғалысын басқаруы керек. Сен сияқты жұмыс режимін іске
қосыңыз, абай болыңыз және айналмалы қозғалтқышқа ештеңе түсіп
қалмағаныңызға көз жеткізіңіз. Назар аударыңыз, Пайдаланушы №1 геймпад
белгішесі джойстикті жылжытқан сайын жасыл түсті бөлектеу керек. Сондай-ақ
мақсатты қуат екенін ескеріңіз және нақты қозғалтқыш қуаты мәндері драйвер
станциясындағы телеметрия аймағында көрсетілуі керек.</p>
          
           
        </div>
    );
}

export default onbotOneComponent;
