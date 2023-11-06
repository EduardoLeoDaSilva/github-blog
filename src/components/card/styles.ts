import styled from "styled-components";

export const CardContainer  = styled.div`
    display: grid;
    grid-template-areas:
    "title title since"
    "content content content";
    padding: 2rem;
    background-color: ${props => props.theme.basePost};
    border: 2px solid transparent;
    border-radius: 0.62rem;
    gap: 1.25rem;

    &:hover{
        border: 2px solid ${props => props.theme.baseLabel};
    }

    h2 {
        grid-area: title;
        font-size: 1.25rem;
        color: ${props => props.theme.baseSubtitle};
    }

    span{
        grid-area: since;
        color: ${props => props.theme.baseSpan};
        font-size: 0.87rem;
        justify-self: end;
    }

    p {
        grid-area: content;
        color: ${props => props.theme.baseText};
    }

`