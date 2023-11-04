import styled from "styled-components";
import banner from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
    background-image: url(${banner});
    display:flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 296px;
`