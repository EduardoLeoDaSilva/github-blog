import { Outlet } from "react-router-dom";
import { HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg'
export function DefaultLayout() {
    return (
        <>
            <HeaderContainer>
                <img src={logo}/>
            </HeaderContainer>
            <Outlet />
        </>
    );
}