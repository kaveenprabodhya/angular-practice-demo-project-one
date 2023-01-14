import { VoteComponent } from './vote.component';

describe('event emitter', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes;
    component.voteChanged.subscribe((x) => {
      totalVotes = x;
    });
    component.upVote();
    expect(totalVotes).not.toBeNull();
  });
});
