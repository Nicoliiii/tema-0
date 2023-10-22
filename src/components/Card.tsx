import Button from './Button'

type Props = {
    imgSrc?: string
    title?: string
    description?: string
 }

export default function Card({
    imgSrc = '/imagem.jpg', 
    title = 'Lorem ipsum dolor it', 
    description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate fugiat expedita magnam, nesciunt eum facere quia laboriosam aliquam fugit ad saepe ratione unde'
    }: Props) 
{
    return <div>
        <img src={imgSrc} alt="TODO:" />
        <h3 className="my-10">{title}</h3>
        <p className="mb-10">{description}</p>
        <Button dark>More</Button>
    </div>    
}