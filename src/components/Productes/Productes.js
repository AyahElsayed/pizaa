import React  from 'react'
// import axios from 'axios'
import {ProductData} from './data'
import {
    ProductBtn,
    ProductCard,
    ProductContainer,
    ProductDesc,
    ProductHeading,
    ProductImg,
    ProductInfo,
    ProductItems,
    ProductPrice,
    ProductTiltle
} from './style'
function Productes() {
    // const [data, setdata] = useState({})
    // const showcards = () =>{
    //     axios.get('')
    //     .then(res=>{
    //         console.log(res)
    //     })
    // }
    // useEffect(() => {
    //     // showcards()
    // }, [])
    return (
        <ProductContainer>
            <ProductHeading>
                Choose your favourite
            </ProductHeading>
            <ProductItems>
                {ProductData.map((product ) => {
                    return (
                        <ProductCard key={product.id}>
                            <ProductImg src={product.img}/>
                            <ProductInfo>
                                <ProductTiltle>{product.name} </ProductTiltle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductBtn>{product.button}</ProductBtn>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}

            </ProductItems>
        </ProductContainer>
    )
}

export default Productes
