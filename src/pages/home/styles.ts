import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 0 18rem;
    height: 100vh;
    ul, li{
        list-style: none;
        
    }

    ul{
        margin-top: 3rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }
`

export const CardContainer = styled.div`
    position: absolute;
    width: 100%;
    border: none;
    border-radius: 0.62rem;
    top: -10%;
    left: 50%;
    padding: 2.5rem 2rem;
    transform: translate(-50%, -10%);
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

export const FillContainer = styled.div`
    width: 100%;
    height: 212px;
    position: relative;
`

export const SearchInputContainer = styled.div`
    display: flex;
    margin-top: 4.5rem;
    flex-direction:column;
    gap: 1rem;;
    div{
        display: flex;
        justify-content: space-between;


        h2{
            color: ${props =>props.theme.baseSubtitle}
        }

        span{
            color: ${props => props.theme.baseSpan};
        }
    }

    input{
        padding: 0.75rem 1rem;
        border: 1px solid ${props => props.theme.baseBorder};
        border-radius: 0.5rem;
        background-color: ${props => props .theme.baseInput};

        &::placeholder{
            color: ${props => props.theme.baseLabel};
        }

        &:active{
            outline: 1px solid ${props => props.theme.blue};
        }

        &:focus{
            outline: 1px solid ${props => props.theme.blue};
        }
    }

`