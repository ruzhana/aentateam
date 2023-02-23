import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function softwFiveComponent() {
    return (
        <div>
            <h3>Phone Pairing</h3>
            <p>Introduction</p>
            <p>The recent generation of apps (6.2, 7.0 and 7.1) is extremely reliable for pairing, including between all models of legal phones.</p>
            <p>When the Android phones have been suitably prepared, pairing via Wi-Fi Direct is fast and usually automatic. Here is a procedure that addresses various pre-existing conditions that can impede pairing.</p>
            <p>This article does not cover the REV Control Hub or REV Driver Hub.</p>
            <p>Legal Phones</p>
            <p>As of Freight Frenzy in 2021-2022, these are legal phones: - Motorola Moto G 2nd Generation - Motorola Moto G 3rd Generation - Motorola Moto G4 Play (XT1607, XT1609) - Motorola Moto G5 - Motorola Moto G5 Plus - Motorola Moto E4 (XT1765, XT1765PP, XT1766, XT1767) - Motorola Moto E5 (XT1920) - Motorola Moto E5 Play (XT1921)</p>
            <p>Phone Cleanup and Prep</p>
            <p>1. On RC phone: if needed, select Settings/Accounts/Google/select/3 dots/Remove account/confirm. Repeat for any other accounts. Also remove any non-FIRST Tech Challenge apps/games that might run in the background or attempt updates.</p>
           <p>2. On RC phone: force quit (swipe away) all apps, including the RC app.</p>
           <p>3. RC phone, Apps/Settings/Wi-Fi. Manually select and Forget any saved Networks.</p>
           <p>4. RC phone, still in WiFi menu: navigate to Wi-Fi Direct menu (via More Settings or Advanced).</p>
           <li>Select and forget/disconnect any connections with Peer Devices, including the current phone pairing. This may take a few tries; OK to give up if disconnect not acknowledged.
            <li>If the top item shows ‘Created Group’, Disconnect it.</li>
            <li>If you inadvertently create an Invitation pop-up on the other phone, Decline on the other phone and Cancel on this phone. In rare cases, the Invite prompt is underneath any open windows on the RC phone.</li>
            <li>Pairing will be done later in the apps; see below.</li>
           </li>
           <li>Select and Forget all Remembered Groups, including ANY phone pairings. (This can also be done from Advanced RC Settings from either app.) Your goal after steps d1 and d2: ‘Not visible’, no ‘Peer devices’, no ‘Remembered groups’.</li>
           <li>If needed, Rename/Configure phone now to legal name, e.g. 12345-A-RC or 12345-RC. (This can also be done from Settings in each app.)</li>
           <li>Optional for Moto phones only: Configure device/Limit 2 devices, ‘Inactivity timeout’ Never, check box ‘Auto connect remembered groups’. (Note: timeout is not persistent, re-check occasionally.)</li>
           <p>5. Force quit to device home screen. Swipe down twice from top, do this in order:</p>
           <li>Airplane Mode ON</li>
           <li>Wi-Fi ON (usually toggles off when Airplane Mode is turned on), then Done</li>
           <li>Bluetooth OFF</li>
           <li>Location OFF, only for Android 6.x or 7.x</li>
           <p>6. repeat above steps on DS phone.</p>
           <p>Pairing</p>
           <p>1. On RC phone: open the current season’s RC app (now 7.0 or 7.1). Check Self Inspect for any RC issues.</p>
           <p>2. On DS phone: open the current season’s DS app (now 7.0, 7.0.1 or 7.1). Check Self Inspect for any DS issues.</p>
           <p>3. On DS phone: Menu (3 dots)/Settings. Confirm ‘Pairing Method’ is Wi-Fi Direct. Open ‘Pair with Robot Controller’. (Do not pair using phone/Android menu.)</p>
           <p>4. Filter can remain on, be patient and wait for the app to find the matching device. Or turn off Filter to see all devices within a few seconds. Choose the corresponding RC phone, touch Back, and Back again to return to the DS home screen.</p>
           <p>5. Look at RC phone, accept the Invitation there. In rare cases, the Invite prompt is underneath any open windows on the RC phone. Pairing will happen within seconds.</p>
           <p>Summary</p>
           <p>The above procedure may seem long, but it covers conditions that should not have been present in the first place. Going forward, pairing will be fast and reliable – usually automatic.</p>
        </div>
    );
}

export default softwFiveComponent;
