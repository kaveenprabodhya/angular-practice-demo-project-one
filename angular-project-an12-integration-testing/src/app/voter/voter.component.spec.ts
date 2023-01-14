import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
  });

  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.vote-count'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('21');
  });

  it('should highlighted the upvoted button if i have upvoted', () => {
    component.myVote = 1;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.bi-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
  });

  it('should increase totalVotes when i click vote-button', () => {
    let button = fixture.debugElement.query(By.css('.bi-menu-up'));
    button.triggerEventHandler('click', null);
    expect(component.totalVotes).toBe(1);
  });
});
