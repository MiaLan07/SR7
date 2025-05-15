import './ItemCatalog.css'

export default function ItemCatalog({ items }) {

    return (
        <div className="itemsCat">
            {items && items.map((item, i) => (
                <div className="item" key={i}>
                    <h5>{item.name}</h5>
                    <img src={item.imageURL} alt="Изображение товара"/>
                    <p>{item.cost}</p>
                </div>
            ))}
        </div>
    )
}