import type { PropsWithChildren } from "react";
import Button from './Button'

type Props = {
    imgSrc: string
    title: string
    description: string
 }

export default function Card(props: Props) {
    return <div className="basis-0 w-full">
        <img src={props.imgSrc} alt="TODO:" />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Button dark>More</Button>
    </div>    
}