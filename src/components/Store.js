import Card from "./Card"

const Store =(props)=> {

    // console.log(props)
    
    //map through props.products and create cardComponents
    const cardComponents = props.products.map(product => {
        return (
            <Card 
                key={product.id}
                id={product.id}
                product={product.product}
                price={product.price}
            />
        )
    })

    return (
        <main className="main">
            <div className="container">
                <h2 className="display-3 text-capitalize">our products</h2>
                <section className="section row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {cardComponents}
                </section>
            </div>
        </main>
    )
}

export default Store