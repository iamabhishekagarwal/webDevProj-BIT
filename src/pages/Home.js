import React, { useEffect } from 'react'
import CarouselComponent from '../components/CarouselComponent'
function Home(props) {
    useEffect(()=>{
        props.setProgress(50)
        setTimeout(()=>{
            props.setProgress(100)
        },500)
    },[])
return (
<>
    <CarouselComponent/>
</>
)
}

export default Home
