import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

import data from "../data"

const Single =()=> {

    const params = useParams()

    const [product, setProduct] = useState({})

    useEffect(()=> {
        setProduct(data[params.id - 1])
    }, [])

    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <img src="https://via.placeholder.com/550x350" alt="placeholder img" className="img-fluid image" />
                    </div>
                    <div className="col-5">
                        <h2 className="display-4 text-capitalize">{product.product}</h2>
                        <p className="price-text">{product.price}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Single