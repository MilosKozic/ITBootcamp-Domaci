import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

const Categories=({products})=>{
    let categories=[...new Set(products.map(el=>el.category))]
    console.log(categories)
    return(
        <div>
            <br/>
            {categories.map(el=> <div key={el}><Link to={`categories/${el}`}>{el}</Link></div>)}
        </div>
    )
}

export const Category=({products})=>{
    
    let { category } = useParams()
   let categoryProducts= products.filter(el=>el.category==category)
   console.log(categoryProducts)
  return(
      <div>
          <br/>
          {categoryProducts.length==1? categoryProducts[0].name.toUpperCase() :categoryProducts.map(el=><p key={el.id}>{el.name}</p>) }
      
      </div>
  )
}

export default Categories