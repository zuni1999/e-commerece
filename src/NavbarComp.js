import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Navbar,Container, Nav} from 'react-bootstrap'
import Switch from 'react-bootstrap/esm/Switch';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Route} from 'react-router-dom'
import Ecommerce from './Ecommerce';
export default function NavbarComp(){
    const mState = useSelector((state)=> state.changeNumber);
    
    return(
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
  <Navbar.Brand href="#home">Ecommerce Site</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end" >
    
    <ShoppingBasketIcon style={{color:'white',height:'8vh',width:'8vw'}}  /><span className="text-secondary"> {mState.length}</span>
  </Navbar.Collapse>
  </Container>
</Navbar>

  <Switch>
      <Route pathname="/home" component={Ecommerce} />
  </Switch>
        </>
    )
}