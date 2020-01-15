import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const InfoPanel = (props) => {
  const header = {
    'font-size': '20px',
  };
  const info = {
    'font-size': '20px',
  };
  return (
    <ListGroup style={{'text-align': 'left'}}>
      <ListGroupItem color="info">Instructions</ListGroupItem>
      <ListGroupItem>
        <p style={header}>1. Download info from <a href="https://www.facebook.com/dyi/?x=AdnpXjz0c8dP5FT2&referrer=yfi_settings">Facebook</a></p>
        <p style={info}>(Check only "Messages", choose a date range, and ensure setting: "Format: JSON")</p>
      </ListGroupItem>
      <ListGroupItem>
        <p style={header}>2. Open inbox and chat folder, and drag and drop all JSON files</p>
      </ListGroupItem>
      <ListGroupItem>
        <p style={header}>3. Make adjustments to vocab lists or add JSON files to extend list</p>
      </ListGroupItem>
      <ListGroupItem>
        <p style={header}>Note: Although we are sending message contents to a private server for translation, no information is stored about any users.</p>
      </ListGroupItem>
    </ListGroup>
  );

}

export default InfoPanel;
