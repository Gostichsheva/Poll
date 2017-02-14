import model from './model';
import each from 'lodash/each';
import assign from 'lodash/assign';

const MAKE_VOTE = 'MAKE_VOTE';
const UPDATE_USER = 'UPDATE_USER';

let initialState = {
  users: {}
};

export function makeVote(theme, id) {
    return {
        type: MAKE_VOTE,
        theme, id
    };
}

export function updateUser(theme) {
    return {
        type: UPDATE_USER,
        theme
    };
}

/**
 ** Преобразование начального состояния
**/
each(model, (theme, key) => {
    if (key !== "theme") {
      each(theme, value => {
          value.rating = 0;
          initialState[key] = initialState[key] || {};
          initialState[key][value.id] = value;
      });
    }
    else {
      each(theme, value => {
          initialState[key] = initialState[key] || {};
          initialState[key][value] = {
            id: value,
            name: value
          };
      });
    }
    initialState[key].summ = 0;
});

export function votes(state = initialState, action) {
    switch (action.type) {

        case MAKE_VOTE:
            const newRating = state[action.theme][action.id].rating + 1;
            const newSumm = state[action.theme].summ + 1;
            return assign({}, state, {
              [action.theme]: {
                [action.id]: {
                  rating: newRating
                },
                summ: newSumm
              }
            });

        case UPDATE_USER:
          let userName = localStorage.getItem('username');
          if (!userName) {
              userName = localStorage.setItem('username', 'poll');
          }
          const newUser = (state.users[userName] && state.users[userName].slice()) || [];
          newUser.push(action.theme);
          return assign({}, state, {
            users: {
              [userName]: newUser
            }
          });
          break;

        default:
            return state;
    }
};
