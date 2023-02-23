import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },
    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function DashboardComponent() {
    const classes = useStyles();
    return (
        <div>
            <h3>History</h3>
            <h5>AENTA, FIRST Tech Challenge Team 22940, is a team of students from the National School of Physics and Math, Almaty, Kazakhstan. The team was created in the summer of 2022 by 10th grade student Omar Aruzhan, who had experience in the FIRST LEGO League. Initially, AENTA consisted of five members. The name of the team is the initials of the names of the first squad members themselves. In the year of its creation, the team succeeded in many ways and won the Champion's Award at the National Stage of the FIRST Global Challenge in Kazakhstan.</h5>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-12-at-20.43.47.jpeg" alt="pict"  sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"/>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-12-at-20.43.47-1.jpeg" alt="pict"  sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"/>
            <img src="https://www.linkpicture.com/q/WhatsApp-Image-2023-02-12-at-20.43.46.jpeg" alt="pict"  sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"/>
        </div>
    );
}

export default DashboardComponent;
