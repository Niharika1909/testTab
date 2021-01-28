import React from 'react'
import './SummaryTab.css';
import BookDealTile from './components/bookDeal-tile/BookDealTile.js';

function SummaryTab() {

  return (
    <div className="SummaryTab">
      <BookDealTile/>
    </div>
  );
}

export default SummaryTab;