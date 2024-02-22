import Button from '../button/button'
import Image from '/assets/img/product.png'
import {Link} from 'react-router-dom'
import '../../assets/css/style.css'

export default function Card ({name, price, id}) {
    return(
        <div className="catalog-product">
            <img src={Image} alt="" className="catalog-product-img"/>
            <p className="catalog-product-name">{name}</p>
            <p className="catalog-product-price">{price}</p>
            <Button title="Купить" />
            <Link className='link' to={`${id}`}>Подробнее</Link>
        </div>
    ); 
}