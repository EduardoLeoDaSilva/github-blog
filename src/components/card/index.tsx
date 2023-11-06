import { memo } from "react";
import { CardContainer } from "./styles";

interface CardProps{
    title: string;
    timeCreated: string;
    content: string;
}

function Card(props : CardProps) {
    return (
        <CardContainer>
            <h2>{props.title}</h2>
            <span>{props.timeCreated}</span>
            <p>{props.content}</p>
        </CardContainer>
    );
}

export default memo(Card)