import Card from '../../components/card/card'
import {Catalog} from '../../data'
import { useState } from 'react'
import '../../assets/css/style.css'

export default function catalog() {
    const[query,setQuery] = useState("")

    function search (e){
        setQuery(e.target.value)
    }
    const filterdProducts = Catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
  return (
      <>
      <div className="catalog">
          <h1 className="catalog-title">Каталог</h1>
          <div className="container">
              <div className="catalog-filtr">
                  <a href="" className="catalog-filtr-link">Все</a>
                  <a href="" className="catalog-filtr-link">Шины/колеса</a>
                  <a href="" className="catalog-filtr-link">Масла</a>
                  <a href="" className="catalog-filtr-link">Ароматизаторы</a>
              </div>
              <input onChange={search} type="search" name='search' placeholder='Поиск'></input><br /><br />
              <br />
              <div className="catalog-products">
                  {filterdProducts.length ?
                  filterdProducts.map((card, index) => {
                      return(
                          <Card key={index} {...card}/>
                      )
                  })
                  :
                  <h2>По запросу "{query}" ничего не найдено</h2>
                }
              </div>
          </div>
      </div>
      </>
  );
}