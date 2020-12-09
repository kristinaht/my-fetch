import { createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser], //first argument can be an array of input selectors.last argument gets the return of the input selector, in this case the user reducer below
  user => user.currentUser
);