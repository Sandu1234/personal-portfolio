import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BlogCard = ({ imagePath, title, excerpt, readMoreUrl }) => {
  return (
    <Card style={{
      width: '18rem',
      height: '100%', // Optionally set a fixed height if necessary
      marginBottom: '20px',
      background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
      border: 'none',
      borderRadius: '15px',
      color: 'white',
      overflow: 'hidden', // Ensure the image doesn't overflow the card boundaries
    }}>
      <Card.Img variant="top" src={imagePath} style={{
        width: '100%', // Set image width to 100% of the container
        height: 'auto', // Set image height to auto to maintain aspect ratio
        objectFit: 'cover' // Ensure the image covers the area without stretching
      }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>
        <Button variant="light" href={readMoreUrl} style={{
          background: 'white',
          color: 'black',
          borderColor: 'white',
        }}
        onMouseOver={(e) => e.currentTarget.style.color = 'grey'}
        onMouseOut={(e) => e.currentTarget.style.color = 'black'}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
