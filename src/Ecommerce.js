import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addToCart,deleteToCart} from './actions/index'
import './Ecommerce.css'
import {Card,Button,Row,Col, Container} from 'react-bootstrap'
import dressimage from './Images/dres.jpg'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import begimage from './Images/beg.jpg'
import heelimage from './Images/heel.jpg'
import heelsimage from './Images/heels.jpg'
import shoeimage from './Images/shoe.jpg'
import purseimage from './Images/purse.jpg'
export default function Ecommerce(){
    const myState = useSelector((state)=> state.changeNumber);
    const dispatch = useDispatch();
    const cardinfo=[
        { id:1,
            img:dressimage,
            title:"Short Frock",
            text:"Available in different size"
    },
    {
        id:2,
        img:heelsimage,
        title:"Heels",
        text:"Available in different styles"
},
{
    id:3,
    img:heelimage, 
    title:"Short Heels",
    text:"Available in different styles"
},
{ 
    id:4,
    img:purseimage,
    title:"Hand Bag",
    text:"Available in different colors"
},
{
    id:5,
    img:shoeimage,
    title:"Shoes",
    text:"Available in different colors"
},
{   id:6,
    img:begimage,
    title:"Styles bag",
    text:"Available in different colors"
},
];
const renderCard=(card,index)=>{
  
    
    return(
        <>
        
        <Card style={{display:'inline-block',borderRadius:'20px'}} className="card" key={index} >
    
  <Card.Img variant="top" src={card.img} />
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      {card.text}  
    </Card.Text> 
    
    <Row   >
        <Col  >
        {
            myState.length > 0 ?  myState.map((res,inx)=>{
         return  (res.id-1) == index ? <Button  onClick={ ()=> dispatch(addToCart(card)) }
            style={{fontSize:'13px',margin:'4px',zIndex:5,position:"absolute"}} disabled={true}  variant="info">
            Add to Cart
            </Button>:<Button disabled={(res.id-1) == index ? true:false}   onClick={ ()=> dispatch(addToCart(card)) }
            style={{fontSize:'13px',margin:'4px',zIndex:0,position:"absolute"}}  variant="primary">
            Add to Cart
            </Button>
            }) :<Button  onClick={ ()=> dispatch(addToCart(card)) }
            style={{fontSize:'13px',margin:'4px',}}  variant="primary">
            Add to Cart
            </Button>
        }
    
    
    
    <Button onClick={ ()=> dispatch(deleteToCart()) } style={{fontSize:'13px',zIndex:10,position:"relative",
    left:"50%"
}} variant="danger">Delete to Cart</Button>
    </Col>
    </Row>
  </Card.Body>
  
</Card>

        </>
    )
}
    return(
        <>
        <div  >
      
        {
            cardinfo.map(renderCard)
        }
        </div>
        </>
    )
}