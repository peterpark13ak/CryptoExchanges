import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { themeBreakPoints } from '../../themes/commons';

interface Props {
    image: React.ReactNode;
    text: string;
    textColor?: string;
    onClick: (event: MouseEvent) => void;
}

const LogoLink = styled.a<any>`
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 33px;
    font-family: 'Work Sans', sans-serif;
    text-decoration: none;
`;

const LogoText = styled.h1<{ textColor?: string }>`
    color: #6DC9B9;
    display: none;
    // font-size: 26px;
    font-weight: 600;
    margin-left: 10px;
    text-decoration: none;

    @media (min-width: ${themeBreakPoints.xxl}) {
        display: block;
    }
`;

LogoText.defaultProps = {
    textColor: '#000',
};

export const Logo: React.FC<Props> = props => {
    const { image, text, textColor, onClick, ...restProps } = props;
    return (
        <LogoLink onClick={onClick} {...restProps}>
            {image}
            <LogoText textColor={textColor}>{text}</LogoText>
        </LogoLink>
    );
};
