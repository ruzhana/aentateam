import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useHistory } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import {
    IconAgents,
    IconArticles,
    IconContacts,
    IconIdeas,
    IconLogout,
    IconOverview,
    IconSettings,
    IconSubscription,
    IconTickets,
    IconAwards,
    IconSearch
} from 'assets/icons';
import { convertSlugToUrl } from 'resources/utilities';
import LogoComponent from './LogoComponent';
import Menu from './MenuComponent';
import MenuItem from './MenuItemComponent';

const useStyles = createUseStyles({
    separator: {
        borderTop: ({ theme }) => `1px solid ${theme.color.Black}`,
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    }
});

function SidebarComponent() {
    const { push } = useHistory();
    const theme = useTheme();
    const classes = useStyles({ theme });
    const isMobile = window.innerWidth <= 1080;

    async function logout() {
        push(SLUGS.login);
    }

    function onClick(slug, parameters = {}) {
        push(convertSlugToUrl(slug, parameters));
    }

    return (
        <Menu isMobile={isMobile}>
            <div style={{ paddingTop: 30, paddingBottom: 30 }}>
                <LogoComponent />
            </div>
            <MenuItem
                id={SLUGS.overview}
                items={[SLUGS.overviewTwo, SLUGS.overviewThree]}
                title='About Us'
                icon={IconOverview}
            >
                <MenuItem
                    id={SLUGS.overview}
                    title='Team Members'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.overview)}
                />
                <MenuItem
                    id={SLUGS.overviewTwo}
                    title='History'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.overviewTwo)}
                />
                <MenuItem
                    id={SLUGS.overviewThree}
                    title='Nominations'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.overviewThree)}
                />
            </MenuItem>
            {/* <MenuItem
                id={SLUGS.ideas}
                items={[SLUGS.ideasTwo, SLUGS.ideasThree]}
                title='Learn'
                icon={IconIdeas}
            >
                <MenuItem
                    id={SLUGS.ideas}
                    title='Webinars'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ideas)}
                />
                <MenuItem
                    id={SLUGS.ideasThree}
                    title='Course on stepik.org'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.ideasThree)}
                />
            </MenuItem> */}
        

<MenuItem
                id={SLUGS.deas}
                items={[SLUGS.deasTwo, SLUGS.deasThree, SLUGS.deasFour, SLUGS.deasFive, SLUGS.deasSix, SLUGS.ideas]}
                title='Learn'
                icon={IconSearch}
            >
                <MenuItem
                    id={SLUGS.deas}
                    title='Hardware'
                    level={2}
                    icon={IconSettings}
                    onClick={() => onClick(SLUGS.deas)}
                />
                <MenuItem
                    id={SLUGS.deasTwo}
                    title='Software'
                    level={2}
                    icon={IconIdeas}
                    onClick={() => onClick(SLUGS.deasTwo)}
                />
                <MenuItem
                    id={SLUGS.deasThree}
                    title='Inspections'
                    level={2}
                    icon={IconTickets}
                    onClick={() => onClick(SLUGS.deasThree)}
                />
                <MenuItem
                    id={SLUGS.deasFour}
                    title='Documentation'
                    level={2}
                    icon={IconArticles}
                    onClick={() => onClick(SLUGS.deasFour)}
                />
                <MenuItem
                    id={SLUGS.deasFive}
                    title='Interview'
                    level={2}
                    icon={IconContacts}
                    onClick={() => onClick(SLUGS.deasFive)}
                />
                <MenuItem
                    id={SLUGS.deasSix}
                    title='Awards'
                    level={2}
                    icon={IconSubscription}
                    onClick={() => onClick(SLUGS.deasSix)}
                />
                 <MenuItem
                    id={SLUGS.ideas}
                    title='Webinars'
                    level={2}
                    icon={IconAgents}
                    onClick={() => onClick(SLUGS.ideas)}
                />
            </MenuItem>

            <MenuItem
                id={SLUGS.contacts}
                title='Contacts Us'
                icon={IconContacts}
                onClick={() => onClick(SLUGS.contacts)}
            />
           
        </Menu>
    );
}

export default SidebarComponent;
