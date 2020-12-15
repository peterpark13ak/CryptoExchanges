import { ThemeModalStyle, ThemeProperties } from './commons';
import { DefaultTheme } from './default_theme';

const modalThemeStyle: ThemeModalStyle = {
    content: {
        backgroundColor: '#061324',
        borderColor: '#000',
        bottom: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '0',
        left: 'auto',
        maxHeight: '90%',
        minWidth: '350px',
        overflow: 'hidden',
        padding: '16px',
        position: 'relative',
        right: 'auto',
        top: 'auto',
    },
    overlay: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        zIndex: '12345',
    },
};

const darkThemeColors: ThemeProperties = {
    background: 'linear-gradient(112.45deg, #0B213E 0%, #061324 100%), #0E1B2C',
    backgroundERC721: '#000',
    borderColor: '#5A5A5A',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
    buttonBuyBackgroundColor: '#0FEE90',
    buttonCollectibleSellBackgroundColor: '#F91A4F',
    buttonConvertBackgroundColor: '#050F1B',
    buttonConvertBorderColor: '#000',
    buttonConvertTextColor: '#fff',
    buttonErrorBackgroundColor: '#FF6534',
    buttonPrimaryBackgroundColor: '#002979',
    buttonQuaternaryBackgroundColor: '#00AE99',
    buttonSecondaryBackgroundColor: '#3CB34F',
    buttonSellBackgroundColor: '#F91A4F',
    buttonTertiaryBackgroundColor: '#F6851B',
    buttonTextColor: '#fff',
    cardImageBackgroundColor: '#EBF0F5',
    cardBackgroundColor: '#061324',
    cardBorderColor: '#061324',
    cardTitleColor: '#fff',
    cardTitleOwnerColor: '#3CB34F',
    chartColor: '#00AE99',
    darkBlue: '#002979',
    darkGray: '#474747',
    darkerGray: '#666',
    dropdownBackgroundColor: '#0C1F3D',
    dropdownBorderColor: '#000',
    dropdownTextColor: '#fff',
    errorButtonBackground: '#FF6534',
    errorCardBackground: '#FAF4EF',
    errorCardBorder: '#F39E4B',
    errorCardText: '#F68C24',
    ethBoxActiveColor: '#00AE99',
    ethBoxBorderColor: '#5A5A5A',
    ethSetMinEthButtonBorderColor: '#999',
    ethSliderThumbBorderColor: '#5A5A5A',
    ethSliderThumbColor: '#202123',
    gray: '#808080',
    green: ' #0FEE90',
    iconLockedColor: '#fff',
    iconUnlockedColor: '#5A5A5A',
    inactiveTabBackgroundColor: '#06172B',
    lightGray: '#B9B9B9',
    logoERC20Color: '#fff',
    logoERC20TextColor: '#6CC5B0',
    logoERC721Color: '#00AE99',
    logoERC721TextColor: '#fff',
    marketsSearchFieldBackgroundColor: '#050F1B',
    marketsSearchFieldBorderColor: '#050F1B',
    marketsSearchFieldTextColor: '#BFBFBF',
    modalSearchFieldBackgroundColor: '#fff',
    modalSearchFieldBorderColor: '#fff',
    modalSearchFieldPlaceholderColor: '#DEDEDE',
    modalSearchFieldTextColor: '#000',
    myWalletLinkColor: '#fff',
    notificationActive: '#F8F8F8',
    notificationIconColor: '#fff',
    notificationsBadgeColor: '#ff6534',
    numberDecimalsColor: '#5A5A5A',
    red: '#F91A4F',
    rowActive: '#050F1B',
    rowOrderActive: '#5A5A5A',
    simplifiedTextBoxColor: '#050F1B',
    stepsProgressCheckMarkColor: '#202123',
    stepsProgressStartingDotColor: '#fff',
    stepsProgressStepLineColor: '#5A5A5A',
    stepsProgressStepLineProgressColor: '#fff',
    stepsProgressStepTitleColor: '#5A5A5A',
    stepsProgressStepTitleColorActive: '#fff',
    tableBorderColor: '#0B213E',
    tdColor: '#fff',
    textColorCommon: '#fff',
    textDark: '#666',
    textInputBackgroundColor: '#050F1B',
    textInputBorderColor: '#050F1B',
    textInputTextColor: '#fff',
    textLight: '#999',
    textLighter: '#666',
    thColor: '#B9B9B9',
    tooltipBackgroundColor: '#000',
    tooltipTextColor: '#fff',
    topbarBackgroundColor: '#061324',
    topbarBorderColor: '#061324',
    topbarSeparatorColor: '#5A5A5A',
};

export class DarkTheme extends DefaultTheme {
    constructor() {
        super();
        this.componentsTheme = darkThemeColors;
        this.modalTheme = modalThemeStyle;
    }
}
