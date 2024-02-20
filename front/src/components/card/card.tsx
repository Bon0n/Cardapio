import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string
}

export function Card(dados : CardProps) {
    const data = []
    return (
        <div className="card">
            <img src={dados.image}/>
            <h2>{dados.title}</h2>
            <p>
                <b>Valor: </b> 
                {dados.price}
            </p>
        </div>
    )
}
