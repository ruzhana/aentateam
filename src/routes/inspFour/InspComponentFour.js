import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'




function InspFourComponent() {
    return (
        <div>
        
<p>Чеклист инспекции на поле</p>
<p>Присутствуют члены команды драйв</p>
<p>Тренер (обязательно), Драйвер 1 (обязательно);  Драйвер 2 (необязательно)</p>
<p> Правила Driver Station и Robot Controller Hardware</p>
<p>Driver Station состоит только из одного устройства Android (круг): Motorola Moto G 2nd Generation, Motorola Moto G 3rd Generation, Motorola Moto G4 Play, Motorola Moto G5, Motorola G5 Plus, Motorola Moto E4, Motorola Moto E5, Motorola Moto E5 Play или REV Driver Hub.</p>
<p>Смартфон Контроллер робота Android-устройство (если используется) одной из следующих моделей (круг): Motorola Moto G 2nd Generation, Motorola Moto G 3rd Generation, Motorola Moto G4 Play, Motorola Moto G5, Motorola G5 Plus, Motorola Moto E4, Motorola Moto  E5, Motorola Moto E5 Play.  USB interface Android-устройства подключается только к REV Expansion Hub или USB hub.</p>
<p>Сенсорный экран Driver Station доступен и виден персоналу на поле.
</p>
<p> Driver Station состоит не более чем из двух разрешенных геймпадов (Logitech F310, Xbox 360, проводной Sony DualShock 4 для PS4, проводной контроллер Etpark для PS4) или игрового контроллера Quadstick в любом сочетании.</p>
<p> Присутствует не более одного (1) дополнительного внешнего USB hub с питанием или без питания от батареи.
</p>
<p> Присутствует не более одной (1) дополнительной внешней батареи COTS USB, подключенной к порту USB-C REV Driver Hub, или USB hub, подключенного к Android смартфону.</p>
<p>Имеется не более одной (1) дополнительной внешней батареи COTS USB, подключенной к порту USB-C REV Driver Hub или USB hub, подключенному к Android смартфону.</p>
<p>Driver Station USB-интерфейс Android смартфона (если используется) подключается только к кабелю Mini USB to OTG или комбинации кабелей, подключенных к одному USB hub, или к одному USB-кабелю геймпада, подключенному к OTG Micro Adapter.
Driver Station Carrier(при наличии) соответствует требованиям.
</p>
<p>Android-устройство Driver Station воспроизводит только разрешенные звуки.
</p>
<p>Правила Driver Station(DS) и Robot Controller(RC) Software
</p>
<p>Android–смартфон(ы), REV Driver Hub и REV Control Hub отмечены указанием официального номера команды, за которым следует -DS или –RC соответственно.
Операционная система Android удовлетворяет требованиям: Motorola Moto G 2nd Generation, Motorola Moto G 3rd Genertion, Motorola Moto G4 Play - версии 6.0 или выше. Все остальные разрешенные устройства Android – версии 7.0 или выше.
Приложения DS и RC имеют версию 8.0 или выше, и приложения DS и RC имеют одинаковые номера версий. Приложение RC не установлено на DS, а приложение DS не установлено на RC.
</p>
<p>Операционная система REV Driver Hub (если используется) версии 1.2.0 или выше.
</p>
<p>В REV Driver Hub (если используется) отключен Bluetooth и включен Wi-Fi.
</p>
<p>REV Control Hub(если используется) операционная система версии 1.1.2 или выше, а версия встроенного ПО 1.8.2 или выше.</p>
<p>Версия прошивки(firmware) REV Expansion Hub (если используется) - 1.8.2 или выше.
В REV Control Hub (если используется) включен Wi-Fi, Bluetooth выключен, а пароль отличается от значения по умолчанию “password”.
</p>
<p>Android cмартфоны (если они используются) переведены в режим полета, Wi-Fi включен, а Bluetooth выключен.</p>
<p>Устройства Android не подключены ни к каким локальным сетям.</p>
<p>Все сохраненные Wi-Fi Direct Group и Wi-Fi connectors на устройствах Android были удалены.</p>
<p>Связь между роботом и Driver Station осуществляется только через приложения RC и DS. Внеполосная связь не разрешена.</p>
<p>Driver Station использует официальное приложение FTC Driver Station для управления роботом.</p>
<p>Приложение FTC Robot Controller на смартфоне Android (если используется) является приложением по умолчанию, приложение запускается, и никаких других сообщений не появляется.</p>
<p>Контроллер робота настроен на правильный канал Wi-Fi (если того требуют соревнования).</p>
<p>Работа робота проверена на игровом поле</p>
<p>Контроллер робота соединяется с Driver Station.</p>
<p>Робот правильно переключается между автономной работой и работой, управляемой драйвером.</p>
<p>Робот запускается и останавливается по команде от Driver Station.</p>
<p>Команда понимает, как отключить своего робота, если судья проинструктирует ее сделать это.
</p>
<p>Информация о процессе очередности, представленная на игровом поле
Команда понимает, что изменения в программном обеспечении не разрешены в Queue Area.
</p>
<p>Команда понимает, что расписание матчей - это всего лишь приблизительная информация. Матчи могут начаться до или после запланированного времени. Отслеживание изменении в расписании и появление при необходимости является ответственностью команды.</p>
<p>Команда знает, что они несут ответственность за прикрепление маркера Альянса, предоставленного их командой, с двух сторон своего робота, прежде чем они дойдут до игрового поля соревнований.</p>

         
        </div>
    );
}

export default InspFourComponent;