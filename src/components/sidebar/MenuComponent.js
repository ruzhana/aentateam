import React, { useState } from 'react';
import { useTheme } from 'react-jss';
import { slide as Menu } from 'react-burger-menu';

const getMenuStyles = ({ theme }) => ({
    bmBurgerButton: {
        position: 'absolute',
        width: 26,
        height: 20,
        left: 30,
        top: 40,
        zIndex: 19
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: theme.color.black
    },
    bmCrossButton: {
        display: 'none'
    },
    bmCross: {
        background: theme.color.black
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        width: 255,
        zIndex: 30
    },
    bmMenu: {
        background: theme.color.veryBlack
    },
    bmItem: {
        outline: 'none',
        '&:focus': {
            outline: 'none'
        }
    },
    bmMorphShape: {
        fill: theme.color.veryBlack
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 20
    }
});

function MenuComponent({ children, isMobile }) {
    const theme = useTheme();
    const menuStyles = getMenuStyles({ theme });
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            isOpen={!isMobile || isOpen}
            noOverlay={!isMobile}
            disableCloseOnEsc
            styles={menuStyles}
            onStateChange={(state) => setIsOpen(state.isOpen)}
        >
            {children}
        </Menu>
    );
}

export default MenuComponent;
