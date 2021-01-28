import SummaryTab from '../SummaryTab';
import BookDealTile from '../components/bookDeal-tile/BookDealTile.js';
import { shallow } from "enzyme";

describe('Summary Tab', () => {

  it('Summary Tab Renders', () => {
    let wrapper = shallow(<SummaryTab/>);
    expect(wrapper).toBeTruthy();
  });

  it('BookDeal Renders', () => {
    let wrapper = shallow(<BookDealTile/>);
    expect(wrapper).toBeTruthy();
  });

});