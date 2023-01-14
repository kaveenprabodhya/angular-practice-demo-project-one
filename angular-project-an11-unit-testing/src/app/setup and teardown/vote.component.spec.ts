import { VoteComponent } from './vote.component';

describe('vote component', () => {
  let voteComponent: VoteComponent;

  beforeEach(() => {
    voteComponent = new VoteComponent();
  });

  it('should increment votes when upvoted', () => {
    voteComponent.upVote();
    const result = voteComponent.totalVotes;
    expect(result).toBe(1);
  });
  it('should decrement votes when downvoted', () => {
    voteComponent.downVote();
    const result = voteComponent.totalVotes;
    expect(result).toBe(-1);
  });
});
