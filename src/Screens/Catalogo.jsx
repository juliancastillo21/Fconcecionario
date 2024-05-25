import React from 'react'
import {VehicleList} from './VehicleList'

const Catalogo =()=>{
    const vehicles=[
        {
           id: 4,
           urlImagen:'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
           description:'carro muy bonito',
           price: 25000, 
        },
        {
            id:5,
            urlImagen:'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
            description:'carro muy feo ',
            price: 15000, 
        },
        {
            id:6,
            urlImagen:'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
            description:'carro normal  ',
            price: 11000, 
        },
        {
            id:7,
            urlImagen:'https://st1.uvnimg.com/d4/4a/006304a74db4902c0b4d8d8026c8/chevrolet-corvette-c8-stingray-2020-1280-08.jpg',
            description:'carro ya usado  ',
            price: 100, 
        }
    ];
    return <VehicleList vehicles={vehicles}/>;
}

export default Catalogo
