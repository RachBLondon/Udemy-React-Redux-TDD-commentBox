import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';


describe('CommentList',()=>{
  let component;

  beforeEach(()=>{
    const props = {comments: ["hello", "world", "other new comment"]};
    component = renderComponent(CommentList, null, props );
  });

  it('shows an LI for each comment', ()=>{
    expect(component.find('li').length).to.equal(3)
  });

  it('shows each comment that is provided', ()=>{
    expect(component).to.contain('hello');
    expect(component).to.contain('world');
    expect(component).to.contain('other new comment');
  });
});
