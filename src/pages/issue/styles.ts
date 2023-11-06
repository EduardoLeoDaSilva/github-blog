import styled from "styled-components"

export const IssueContainer = styled.main`
    padding: 0 18rem;
        
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
        gap: 1.25rem;
        div{
            display: flex;
            justify-content: space-between;
        }

        a{
            display: flex;
            align-items: center;
            gap: 1rem;
            text-transform: uppercase;
            color: ${props => props.theme.blue}
        }

        h1{
            font-size: 1.5rem;
            color: ${props => props.theme.baseTitle}
        }

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

export const RepoContent = styled.div`
    padding: 2.5rem 2rem;

    pre{
        background-color: #4F6173;
        padding: 1rem;
    }
`
