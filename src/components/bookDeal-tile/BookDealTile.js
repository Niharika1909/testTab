import {
 Accordion,
 Button
} from '@deere/ux.uxframe-react';
import React from 'react';

function BookDealTile() {

 return (
  <div>
   <Accordion data-testid="Accordion" defaultActiveKey="bookDeal-tile">
    <Accordion.Item id="bookDeal-tile" title="Book Deal">
     <div className="BookDealAccordion">
      <Button variant="outline-primary">Book Deal</Button>
     </div>
    </Accordion.Item>
   </Accordion>
  </div>
 );
}

export default BookDealTile;