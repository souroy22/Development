import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = ({data}) => {
  return (
    <Card style={{ width: '19rem', height: '600px', margin: '10px' }}>
      <Card.Img style={{ height: '250px' }} variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {
               data.description.length > 80 ? data.description.slice(0, 80) + '...' : data.description
          }
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;