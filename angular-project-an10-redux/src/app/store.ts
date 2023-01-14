import { Action } from 'redux';
import { tassign } from 'tassign';
import { COUNT_INCREMENT } from './actions';

export interface IAppState {
  count: number;
  /* messaging?: {
    newMessages: number;
  }; */
}

export const INITIAL_STATE: IAppState = {
  count: 0,
  /* messaging: {
    newMessages: 5,
  }, */
};

export function rootReducer(
  state: Map<string, any>,
  action: Action
): Map<string, any> {
  switch (action.type) {
    case COUNT_INCREMENT:
      //   return { count: state.count + 1 };
      //   return Object.assign({}, state, { count: state.count + 1 });
      //   return tassign(state, { count: state.count + 1 });
      return state.set('count', state.get('count') + 1);
  }
  return state;
}
