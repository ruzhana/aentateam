import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function hardwTwelveComponent() {
    return (
        <div>
            <h3>Виды 3D-печати</h3>
            <p>Существует несколько различных видов 3D-печати. FDM (моделирование осаждения Fd) (также известное как изготовление нити Fd) экструдирует расплавленную нить на участок и является наиболее распространенным типом, на котором мы сосредоточимся в этом руководстве. SLA (стереолитография) и SLS (лазерное спекание ive) - оба варианта 3D-печати пластмасс, но они, как правило, более сложны, дороги или имеют другие недостатки в приложениях FTC. По этим причинам они не рекомендуются.</p>
            <p>3D-печать на металле (SLS и другие) также становится все более доступной, но не входит в рамки данного руководства.</p>
            <p>Преимущества 3D-печати </p>
            <li>3D-печать позволяет настраивать размеры и идеально оптимизировать; например, команды могут напечатать катушку точного диаметра, необходимого для оптимальной скорости, или ременной шкив с определенным количеством зубьев. </li>
            <li>3D-печать позволяет командам легко переключаться между наборами и отдельными деталями, поскольку не все наборы имеют адаптивные крепления или кронштейны. </li>
            <li>Отличным примером этого являются адаптеры Nexus mecanum для 3D-печати. 3D-печать позволяет командам изготавливать детали, которые в противном случае были бы невозможны из таких материалов, как алюминий, из-за ограничений на механическую обработку. </li>
            <li>3D-печать позволяет командам создавать настраиваемое снятие напряжения с проводов и соединений. Это грандиозный проект, и он стоит вашего времени.</li>
           <p>Недостатки 3D-печати </p>
           <li>Если на соревнованиях у вас закончились запасные части для 3D-печати, скорее всего, вам не повезло. Командам рекомендуется распечатать как минимум по одному набору каждой отдельной части, напечатанной на 3D-принтере, в качестве запасных частей для соревнований.</li>
           <li>Компоненты, напечатанные на 3D-принтере, как правило, слабее других материалов, таких как алюминий. Однако печать в правильной ориентации может быть очень эффективной - у команд есть крючки для 3D-печати и другие детали для обслуживания роботов FRC® (сто двадцать фунтов) и FTC (сорок фунтов).</li>
           <li>Детали, напечатанные на 3D-принтере, следует загружать только в одной ориентации. То есть, если робот подвешивает крюк, единственная нагрузка должна приходиться на нижнюю поверхность изогнутой части крюка. Постарайтесь максимально избавиться от боковых нагрузок, чтобы предотвратить выход части из строя. </li>
           <li>Размер деталей, напечатанных на 3D-принтере, зависит от размера вашей печатной платы. Печать больших и толстых отпечатков может занять много времени (за ночь) и может привести к сбою. 3D-печать может обойтись довольно дорого, хотя нити накала можно найти по разумной цене у онлайн-продавцов, таких как Amazon.</li>
           <p>Обычные нити </p>
           <p>Практически для каждой детали, которая должна быть напечатана на 3D-принтере для FTC, PLA (или PLA, Pro и т.д.) и / или PETG удовлетворят всем требованиям по прочности, долговечности и эстетике. Эти два типа нитей накаливания, безусловно, наиболее просты в печати и продаются многими производителями по разумным ценам. Большинство других представленных здесь нитей предлагают очень специфические преимущества (люблю ВАС), которые достигаются ценой усилий, времени и денег.
</p>
<p>PLA (полимолочная кислота)
</p>
<p>Наиболее распространенной нитью для 3D-печати является полимолочная кислота, или PLA. Это пластик, изготовленный из биологических источников, таких как кукурузный крахмал и сахарный тростник. PLA является жестким, но более хрупким материалом, чем другие варианты нити накала, и при печати имеет тенденцию к незначительной деформации. ЛЮФТ хорошо подходит для большинства деталей робота, но он может плохо выдерживать ударные нагрузки (удары по деталям), и поэтому такие детали должны быть сконструированы соответствующим образом.</p>
<li>Диапазон температур горячей установки PLA составляет от 190 ° до 230 ° C</li>
<li>Температура слоя PLA колеблется от 20 ° до 60 ° C, но для PLA подогрев слоя строго не требуется.</li>
<p>Существует множество вариаций PLAY, продаваемых разными производителями, например, PLA love или PLA Pro. В состав этих нитей входят различные добавки для повышения прочности, пригодности для печати и других свойств. Несмотря на свою дороговизну, эти продукты могут значительно повысить производительность PLA и покрыть его недостатки.</p>
<p>PETG (полиэтилентерефталатгликоль)</p>
<p>PETG можно описать как повышение силы для игры. Печатать на нем не сложно, но часто в нем заметно больше перетяжек и других незначительных артефактов. Хотя технически он обладает меньшей прочностью на растяжение, чем PLA, он гораздо менее хрупкий и лучше выдерживает удары при незначительном изгибе. Это отличный вариант для деталей FTC, которым недостаточно быть ударопрочными из PLA. Его более высокая термостойкость также означает, что он не деформируется при высокой температуре окружающей среды, например, в горячем автомобиле.</p>
<li>Температура нагрева PETG колеблется в диапазоне от 230 ° до 260 ° C</li>
<li>Температура слоя PETG колеблется от 60°-80° C</li>
<p>Менее распространенные нити</p>
<p>Эти нити менее прочны, чем перечисленные выше, но все равно могут обнаружить множество случаев на роботе FTC. Обычно они различаются из-за специфических свойств материала, таких как гибкость или долговечность. Однако они часто поставляются с существенными препятствиями для печати, которые не позволяют некоторым принтерам печатать их "из коробки", а иногда и значительно дороже.</p>
<p>АBS (акрилонитрилбутадиенстирол)</p>
<p>ABS была стандартной нитью для печати до того, как PLAY стала коммерчески доступной. Вы, наверное, уже играли в кубики LEGO. Он выдерживает высокие нагрузки и достаточно пластичен. Это связано с трудностями печати, часто требуется корпус для повышения температуры окружающей среды и предотвращения сильного деформирования деталей. Улучшения прочности по сравнению с ЛЮФТОМ легче найти в PETG, поэтому детали ABS не так распространены в FTC. Однако ABS вполне доступен по цене, продаваемый по тем же ценам, что и PLAY.</p>
<li>Температура нагрева ABS варьируется от 230 °-250 ° C</li>
<li>Температура слоя ABS колеблется от 100°-120 ° C</li>
<li>Корпус настоятельно рекомендуется для предотвращения деформации</li>
<p>Из-за сложности печати ABS и его ограничений можно было бы рассмотреть альтернативы, такие как ASA, которые обладают аналогичными свойствами при гораздо лучшей возможности печати.</p>
<p>TPU/TPE (термопластичный полиуретан/термопластичный эластомер)</p>
<p>TPU и TPE являются распространенными печатными нитями, которые широко используются благодаря своим свойствам гибкого материала. Это позволяет печатать детали, которые можно легко сгибать. Продаваемый ниже многих различных дюрометров (показатель твердости / гибкости материала по шкале твердости по Шору), высокая ударопрочность TPU / TPE и адгезия слоев делают его не только универсальной нитью, но и чрезвычайно долговечной. В FTC TPU / TPE используются в таких ролях, как печатные впускные клапаны в пространстве трубы, а также изготовленные на заказ ремни для применения с низкой нагрузкой.</p>
<li>Температура нагрева TPU / TPE колеблется от 210 °-250 ° C</li>
<li>TPU / TPE обычно не нуждается в подогреваемом слое, но если он используется, температура не должна превышать 60 ° C, так как это приведет к слиянию вас с печатным слоем.</li>
<li>TPU / TPE имеет тенденцию поглощать много влаги из воздуха, и поэтому, скорее всего, его потребуется высушить до и, возможно, во время печати.</li>
<li>Настоятельно рекомендуется использовать экструдер с прямым приводом</li>
<p>Экзотические нити</p>
<p>В FTC редко возникает какая-либо необходимость в этих нитях. Они обеспечивают чрезвычайно хорошие свойства материала для деталей, которые должны подвергаться воздействию высоких нагрузок и неблагоприятных условий окружающей среды. Все они намного дороже, чем любая из перечисленных выше нитей, и создают множество проблем при печати.</p>
<p>Нейлон</p>
<p>Нейлоновые нити могут быть заполнены стеклом, углеродным волокном или чистыми. Нейлон обладает такой ударопрочностью, что во многих ситуациях его часть может изгибаться в сторону, вместо того чтобы полностью сломаться. Иногда нейлон используется для деталей, таких как колесные накладки на трансмиссиях, и в тех местах, где он неоднократно подвергается ударам и помятостям. Нейлон требует очень высоких температур, как правило, требует оболочки и обязательно должен быть высушен до (и во время) печати.</p>
<li>Температура нагрева нейлона колеблется в диапазоне от 240 ° до 260 ° C</li>
<li>Температура нейлонового слоя колеблется от 55° до 80° C</li>
<li>Нейлон печально известен тем, что впитывает влагу из воздуха, и его следует тщательно высушивать до и во время печати. Невыполнение этого требования, вероятно, приведет к тому, что деталь станет практически непригодной для использования.</li>
<li>Рекомендуемый корпус</li>
<p>Наполненный углеродным волокном</p>
<p>Многие нити также продаются с добавлением крошечных кусочков углеродного волокна, смешанных с самой нитью. Хотя часто считается, что эти нити повышают прочность, вместо этого они должны быть более жесткими и способствовать улучшению качества печати нитей из нейлона. Нити, наполненные углеродным волокном, обычно требуют более высоких температур и сопла из закаленной стали, но если вы можете печатать чистые варианты этих нитей, вы сможете печатать их аналоги, наполненные углеродным волокном.</p>
<p>Поликарбонат (ПК)</p>
<p>Поликарбонат и его разновидности - это очень, очень прочные технические материалы. ПК блистает своим умением быть очень жестким и чрезвычайно хорошо выдерживать ударные нагрузки. ПК также требует сухости, наличия принтера, способного выдерживать очень высокие температуры, и корпуса. Это очень сложный материал для печати, и часто он очень дорогой. Нет никаких причин когда-либо нуждаться в печатных деталях из поликарбоната в FTC, поскольку нет случаев, требующих его прочности. </p>
<p>Существует несколько смесей для ПК, печать на которых может быть намного проще, ярким примером является PolyMaker PolyMax PC. Это более простой в печати компьютер с более низкой температурой, который сохраняет многие преимущества чистого ПК. Полилит не такой ударопрочный, но намного дешевле. И то, и другое гораздо проще печатать, чем на чистом ПК.</p>
<li>Диапазон температур нагрева ПК от 250°-320 ° C</li>
<li>Температура слоя ПК колеблется от 80°до 140° C</li>
<li>Требуемое ограждение</li>
<li>Нить накала должна оставаться сухой</li>
<p>Высококачественные экзотические нити</p>
<p>Есть несколько других материалов, которые могут обладать очень высокими преимуществами и демонстрировать возможности 3D-печати, но их не следует печатать, если вы не очень уверены в своих навыках печати и практически не имеете опыта работы с FTC. Эти материалы включают, но не ограничиваются ими, Delrin (гомополимер ацеталь полиоксиметилена), PEI (полиэфиримид, торговая марка ULTEM), PEEK (полиэфирэфиркетон) и PEKK (Полиэфиркетонекетон). Эти материалы чрезвычайно прочны для печати, требуют высоких температур (иногда до такой степени, что сопло из закаленной стали начинает плавиться) и чрезвычайно дороги.</p>
        </div>
    );
}

export default hardwTwelveComponent;
