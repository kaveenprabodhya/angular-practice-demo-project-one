import { greet } from './greet';

describe('greet', () => {
  it('should inclue a name', () => {
    const result = greet('kaveen');
    expect(result).toContain('kaveen');
  });
});
