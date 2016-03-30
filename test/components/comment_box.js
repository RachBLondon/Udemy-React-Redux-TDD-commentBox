import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// use descrive to group together similar tests
describe('CommentBox', () => {

let component;

  beforeEach(()=> {
    component = renderComponent(CommentBox);
  });

  it('has the correct class', ()=>{
    expect(component).to.have.class('comment_box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;

  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;

  });

  describe('entering some text', ()=>{
    beforeEach(()=> {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('Shows that text', ()=>{
      expect(component.find('textarea')).to.have.value('new comment');
       });

    it('When submitted, clears the input', ()=>{
        component.simulate('submit')
        expect(component.find('textarea')).to.have.value('');
    });



  });



});
