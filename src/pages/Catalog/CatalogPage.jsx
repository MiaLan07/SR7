import { useEffect, useState } from 'react'
import './CatalogPage.css'
import ItemCatalog from '../../components/ItemCatalog';
import Footer from '../../components/Footer';

export default function CatalogPage() {
    const [search, setSearch] = useState('');
    const items = [
        { id: 1, name: 'Футбольный мяч', imageURL: "https://www.foroffice.ru/upload/iblock/fbf/6111.30_6_tif_1000x1000.jpg", cost: '5000' },
        { id: 2, name: 'Баскетбольный мяч', imageURL: "https://avatars.mds.yandex.net/get-mpic/5214322/img_id6337866037159710704.jpeg/orig", cost: '7500' },
        { id: 3, name: 'Теннисная ракетка', imageURL: "https://i.pinimg.com/originals/0b/9d/18/0b9d183e47ade6646fa511084063cb37.jpg", cost: '4000'},
        { id: 4, name: 'Велосипед', imageURL: 'https://avatars.mds.yandex.net/i?id=e1d8a650de759612f078c5afece6b0ec_l-5659646-images-thumbs&n=13', cost: '10000' },
        { id: 5, name: 'Гантели', imageURL: 'https://cdn1.ozone.ru/s3/multimedia-w/6341032568.jpg', cost: '2000'}
    ];
    const [showedItems, setShowedItems] = useState(items)

    useEffect(() => {
        if(search.trim() === '') {
            setShowedItems(items)
        } else {
            setShowedItems(prevItem => (
                items.filter(itm => 
                    itm.name.toLowerCase().includes(search.toLowerCase())
                )
            ))
        }
    }, [search])

    return (
        <>
        <div className="catalog page">
            <h1>Каталог наших спортивных товаров</h1>
            <div className='search'>
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Название'
                />
            </div>
            <ItemCatalog items={showedItems} />
        </div>
        <Footer/>
        </>
    )
}