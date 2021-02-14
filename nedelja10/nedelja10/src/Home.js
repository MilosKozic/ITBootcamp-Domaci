

const Home=({products})=>{
    return(
        <div>
            { products.map(product => <Product key={product.id} product={product}/>)}
        </div>
    )
}

const Product=({product})=>{
    return(
        <div>
        <p>{product.name} -- {product.category}</p>
       </div>
    )
}

export default Home