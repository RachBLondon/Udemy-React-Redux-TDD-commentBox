import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';

import { SAVE_COMMENT } from '../../src/actions/types';


describe('comments reducer', ()=>{
  it ('handles action with unknown type', ()=>{
    // expect(commentReducer()).to.be.instanceof(Array);
    expect(commentReducer(undefined, {})).to.eql([]);
    //eql is a deep comparison.
  });

  it ('SAVE_COMMENT', ()=>{
    const action = { type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment']);
  });
})
