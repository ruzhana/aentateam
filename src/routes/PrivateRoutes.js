import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';


// const DashboardComponent = lazy(() => import('./dashboard'));
const OverviewComponent = lazy(() => import('./overview'));
const ContactsComponent = lazy(() => import('./contacts'));
const OverviewTwoComponent = lazy(() => import('./overviewTwo'));
const OverviewThreeComponent = lazy(() => import('./overviewThree'));
const IdeasComponent = lazy(() => import('./ideas'));
const IdeasTwoComponent = lazy(() => import('./ideasTwo'));
const IdeasThreeComponent = lazy(() => import('./ideasThree'));
const DeasComponent = lazy(() => import('./deas'));
const DeasTwoComponent = lazy(() => import('./deasTwo'));
const DeasThreeComponent = lazy(() => import('./deasThree'));
const DeasFourComponent = lazy(() => import('./deasFour'));
const DeasFiveComponent = lazy(() => import('./deasFive'));
const DeasSixComponent = lazy(() => import('./deasSix'));
const hardwOneComponent = lazy(() => import('./hardwOne'));
const hardwTwoComponent = lazy(() => import('./hardwTwo'));
const hardwThreeComponent = lazy(() => import('./hardwThree'));
const hardwFourComponent = lazy(() => import('./hardwFour'));
const hardwFiveComponent = lazy(() => import('./hardwFive'));
const hardwSixComponent = lazy(() => import('./hardwSix'));
const hardwSevenComponent = lazy(() => import('./hardwSeven'));
const hardwEightComponent = lazy(() => import('./hardwEight'));
const hardwNineComponent = lazy(() => import('./hardwNine'));
const hardwTenComponent = lazy(() => import('./hardwTen'));
const hardwElevenComponent = lazy(() => import('./hardwEleven'));
const hardwTwelveComponent = lazy(() => import('./hardwTwelve'));


const hardwfOneComponent = lazy(() => import('./hardwfOne'));
const hardwfTwoComponent = lazy(() => import('./hardwfTwo'));
const hardwfThreeComponent = lazy(() => import('./hardwfThree'));
const hardwfbOneComponent = lazy(() => import('./hardwfbOne'));
const hardwfbTwoComponent = lazy(() => import('./hardwfbTwo'));
const docOneComponent = lazy(() => import('./docOne'));
const docTwoComponent = lazy(() => import('./docTwo'));
const docThreeComponent = lazy(() => import('./docThree'));
const docFourComponent = lazy(() => import('./docFour'));
const docFiveComponent = lazy(() => import('./docFive'));
const docSixComponent = lazy(() => import('./docSix'));
const docSevenComponent = lazy(() => import('./docSeven'));
const docEightComponent = lazy(() => import('./docEight'));
const docNineComponent = lazy(() => import('./docNine'));






const softOneComponent = lazy(() => import('./softOne'));
const softTwoComponent = lazy(() => import('./softTwo'));
const softThreeComponent = lazy(() => import('./softThree'));
const softFourComponent = lazy(() => import('./softFour'));
const softFiveComponent = lazy(() => import('./softFive'));
const softSixComponent = lazy(() => import('./softSix'));


const softwOneComponent = lazy(() => import('./softwOne'));
const softwTwoComponent = lazy(() => import('./softwTwo'));
const softwThreeComponent = lazy(() => import('./softwThree'));
const softwFiveComponent = lazy(() => import('./softwFive'));
const softwSixComponent = lazy(() => import('./softwSix'));
const softwSevenComponent = lazy(() => import('./softwSeven'));
const softwEightComponent = lazy(() => import('./softwEight'));
const softwNineComponent = lazy(() => import('./softwNine'));
const softwTenComponent = lazy(() => import('./softwTen'));
const softwElevenComponent = lazy(() => import('./softwEleven'));
const softwFourComponent = lazy(() => import('./softwFour'));
const softwTwelveComponent = lazy(() => import('./softwTwelve'));
const softwThirteenComponent = lazy(() => import('./softwThirteen'));
const wardOneComponent = lazy(() => import('./wardOne'));
const wardTwoComponent = lazy(() => import('./wardTwo'));
const wardThreeComponent = lazy(() => import('./wardThree'));

const kazOneComponent = lazy(() => import('./kazOne'));
const kazTwoComponent = lazy(() => import('./kazTwo'));
const kazThreeComponent = lazy(() => import('./kazThree'));
const kazFourComponent = lazy(() => import('./kazFour'));
const kazFiveComponent = lazy(() => import('./kazFive'));
const kazSixComponent = lazy(() => import('./kazSix'));

const inspOneComponent = lazy(() => import('./inspOne'));
const inspTwoComponent = lazy(() => import('./inspTwo'));
const inspThreeComponent = lazy(() => import('./inspThree'));
const inspFourComponent = lazy(() => import('./inspFour'));

const javaOneComponent = lazy(() => import('./javaOne'));
const javaTwoComponent = lazy(() => import('./javaTwo'));
const javaThreeComponent = lazy(() => import('./javaThree'));

const onbotOneComponent = lazy(() => import('./onbotOne'));
const onbotTwoComponent = lazy(() => import('./onbotTwo'));
const onbotThreeComponent = lazy(() => import('./onbotThree'));

const interOneComponent = lazy(() => import('./interOne'));
const interTwoComponent = lazy(() => import('./interTwo'));
const interThreeComponent = lazy(() => import('./interThree'));









function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.overview} component={OverviewComponent} />
                <Route exact path={SLUGS.overviewTwo} component={OverviewTwoComponent} />
                <Route exact path={SLUGS.overviewThree} component={OverviewThreeComponent} />
                <Route exact path={SLUGS.ideasTwo} component={IdeasTwoComponent} />
                <Route exact path={SLUGS.ideasThree} component={IdeasThreeComponent} />
                <Route exact path={SLUGS.ideas} component={IdeasComponent} />
                <Route exact path={SLUGS.contacts} component={ContactsComponent} />
                <Route exact path={SLUGS.deasTwo} component={DeasTwoComponent} />
                <Route exact path={SLUGS.deasThree} component={DeasThreeComponent} />
                <Route exact path={SLUGS.deasFour} component={DeasFourComponent} />
                <Route exact path={SLUGS.deasFive} component={DeasFiveComponent} />
                <Route exact path={SLUGS.deasSix} component={DeasSixComponent} />
                <Route exact path={SLUGS.deas} component={DeasComponent} />
                <Route exact path={SLUGS.hardwOne} component={hardwOneComponent} />
                <Route exact path={SLUGS.hardwTwo} component={hardwTwoComponent} />
                <Route exact path={SLUGS.hardwThree} component={hardwThreeComponent} />
                <Route exact path={SLUGS.hardwFour} component={hardwFourComponent} />
                <Route exact path={SLUGS.hardwFive} component={hardwFiveComponent} />
                <Route exact path={SLUGS.hardwSix} component={hardwSixComponent} />
                <Route exact path={SLUGS.hardwSeven} component={hardwSevenComponent} />
                <Route exact path={SLUGS.hardwEight} component={hardwEightComponent} />
                <Route exact path={SLUGS.hardwNine} component={hardwNineComponent} />
                <Route exact path={SLUGS.hardwTen} component={hardwTenComponent} />
                <Route exact path={SLUGS.hardwEleven} component={hardwElevenComponent} />
                <Route exact path={SLUGS.hardwTwelve} component={hardwTwelveComponent} />

                <Route exact path={SLUGS.hardwfOne} component={hardwfOneComponent} />
                <Route exact path={SLUGS.hardwfTwo} component={hardwfTwoComponent} />
                <Route exact path={SLUGS.hardwfThree} component={hardwfThreeComponent} />
                <Route exact path={SLUGS.hardwfbOne} component={hardwfbOneComponent} />
                <Route exact path={SLUGS.hardwfbTwo} component={hardwfbTwoComponent} />
                <Route exact path={SLUGS.docOne} component={docOneComponent} />
                <Route exact path={SLUGS.docTwo} component={docTwoComponent} />
                <Route exact path={SLUGS.docThree} component={docThreeComponent} />
                <Route exact path={SLUGS.docFour} component={docFourComponent} />
                <Route exact path={SLUGS.docFive} component={docFiveComponent} />
                <Route exact path={SLUGS.docSix} component={docSixComponent} />
                <Route exact path={SLUGS.docSeven} component={docSevenComponent} />
                <Route exact path={SLUGS.docEight} component={docEightComponent} />
                <Route exact path={SLUGS.docNine} component={docNineComponent} />

                <Route exact path={SLUGS.softOne} component={softOneComponent} />
                <Route exact path={SLUGS.softTwo} component={softTwoComponent} />
                <Route exact path={SLUGS.softThree} component={softThreeComponent} />
                <Route exact path={SLUGS.softFour} component={softFourComponent} />
                <Route exact path={SLUGS.softFive} component={softFiveComponent} />
                <Route exact path={SLUGS.softSix} component={softSixComponent} />


                <Route exact path={SLUGS.softwOne} component={softwOneComponent} />
                <Route exact path={SLUGS.softwTwo} component={softwTwoComponent} />
                <Route exact path={SLUGS.softwThree} component={softwThreeComponent} />
                <Route exact path={SLUGS.softwFour} component={softwFourComponent} />
                <Route exact path={SLUGS.softwFive} component={softwFiveComponent} />
                <Route exact path={SLUGS.softwSix} component={softwSixComponent} />
                <Route exact path={SLUGS.softwSeven} component={softwSevenComponent} />
                <Route exact path={SLUGS.softwEight} component={softwEightComponent} />
                <Route exact path={SLUGS.softwNine} component={softwNineComponent} />
                <Route exact path={SLUGS.softwTen} component={softwTenComponent} />
                <Route exact path={SLUGS.softwEleven} component={softwElevenComponent} />
                <Route exact path={SLUGS.softwTwelve} component={softwTwelveComponent} />  
                <Route exact path={SLUGS.softwThirteen} component={softwThirteenComponent} />    
                <Route exact path={SLUGS.wardOne} component={wardOneComponent} />    
                <Route exact path={SLUGS.wardTwo} component={wardTwoComponent} />    
                <Route exact path={SLUGS.wardThree} component={wardThreeComponent} />    

                <Route exact path={SLUGS.kazOne} component={kazOneComponent} />    
                <Route exact path={SLUGS.kazTwo} component={kazTwoComponent} />    
                <Route exact path={SLUGS.kazThree} component={kazThreeComponent} />    
                <Route exact path={SLUGS.kazFour} component={kazFourComponent} />    
                <Route exact path={SLUGS.kazFive} component={kazFiveComponent} />    
                <Route exact path={SLUGS.kazSix} component={kazSixComponent} />    

                <Route exact path={SLUGS.inspOne} component={inspOneComponent} />    
                <Route exact path={SLUGS.inspTwo} component={inspTwoComponent} />    
                <Route exact path={SLUGS.inspThree} component={inspThreeComponent} />    
                <Route exact path={SLUGS.inspFour} component={inspFourComponent} />  

                <Route exact path={SLUGS.javaOne} component={javaOneComponent} />
                <Route exact path={SLUGS.javaTwo} component={javaTwoComponent} />
                <Route exact path={SLUGS.javaThree} component={javaThreeComponent} /> 

                <Route exact path={SLUGS.onbotOne} component={onbotOneComponent} />
                <Route exact path={SLUGS.onbotTwo} component={onbotTwoComponent} />
                <Route exact path={SLUGS.onbotThree} component={onbotThreeComponent} />

                <Route exact path={SLUGS.interOne} component={interOneComponent} />
                <Route exact path={SLUGS.interTwo} component={interTwoComponent} />
                <Route exact path={SLUGS.interThree} component={interThreeComponent} />

   
    
    
  


                <Redirect to={SLUGS.overview} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
