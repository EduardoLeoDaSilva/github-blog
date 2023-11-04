import styled from "styled-components";

export const HomeContainer = styled.main`
    position: relative;
    /* padding: 0 16.75rem; */
        
`

export const CardContainer = styled.div`
    position: absolute;
    max-width: 864px;
    border: none;
    border-radius: 0.62rem;
    top: 20%;
    left: 50%;
    padding: 2.5rem 2rem;
    transform: translate(-50%, -20%);
    display: flex;
    gap: 2rem;
    background-color: ${props => props.theme.baseProfile};

    img {
        max-width: 148px;
        max-height: 148px;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
`

export const CardBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: space-between;

    &>div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        div{
            display: flex;
        }

        h2{
            display: inline-flex;
            font-size: 1.5rem;
        }
        a{
            margin-left: auto ;
        }

    }

    p, span{
        font-size: 1rem;
        color: ${props => props.theme.baseText};
    }

    footer{
        display: flex;
        gap: 1.5rem;
    }

    footer span{
        color: ${props => props.theme.baseSubtitle};
    }

`