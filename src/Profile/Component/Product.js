import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import propTypes from 'prop-types'

const Product = (props) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title>{props.brand}</Card.Title>
        <Card.Text>{props.model}</Card.Text>
        <Card.Text>{props.price} $</Card.Text>
        <Card.Text>Availble   {props.Available}</Card.Text>
        <Button onClick={()=> props.handleName(props.price)}>Info</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

Product.defaultProps = {
  Available: 'in stock'
}

Product.propTypes = {
    brand: propTypes.string.isRequired,
}


export default Product