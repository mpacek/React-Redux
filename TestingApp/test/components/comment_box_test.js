import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// Use describe to group similar tests
describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a a correnct class', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
