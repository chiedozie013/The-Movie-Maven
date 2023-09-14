/**
 * @jest-environment jsdom
 */
const counter = (comments) => {
  const count = comments.length;
  if (count <= 0) {
    return 'No comment';
  }
  if (count > 999) {
    return '999+';
  }
  return count.toString();
};

describe('comment counter', () => {
  it('returns "No comment" if there are no comments', () => {
    const comments = [];
    expect(counter(comments)).toEqual('No comment');
  });

  it('returns the number of comments if it is less than or equal to 999', () => {
    const comments = ['comment 1', 'comment 2', 'comment 3'];
    expect(counter(comments)).toEqual('3');
  });

  it('returns "999+" if there are more than 999 comments', () => {
    const comments = new Array(1000).fill('comment');
    expect(counter(comments)).toEqual('999+');
  });
});
