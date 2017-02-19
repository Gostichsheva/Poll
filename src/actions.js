import each from 'lodash/each';
import merge from 'lodash/merge';
import model from './model';
import entities from 'html-entities';

let initialState = {
  users: {},
  ratingSumm: {},
};

const MAKE_VOTE = 'MAKE_VOTE';
const UPDATE_USER = 'UPDATE_USER';
const RECEIVE_QUOTES = 'RECEIVE_QUOTES';

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

function receiveQuotes(json) {
  return {
    type: RECEIVE_QUOTES,
    quotes: json.value.map(quote => {
      return {
        id: quote.id,
        name: entities.AllHtmlEntities.decode(quote.joke),
        description: quote.categories.join(' ')
      }
    })
  }
}

export function fetchQuotes() {
  return dispatch => {
    return fetch('http://api.icndb.com/jokes/random/5')
        .then(r => r.json())
        .then(json => dispatch(receiveQuotes(json)));
  }
}

/**
 ** Преобразование начального состояния
**/
function transformModel(initialState, model) {

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
              name: value,
              rating: 0
            };
        });
      }
      initialState.ratingSumm[key] = 0;
  });

  return initialState;
}

export function votes(state = transformModel(initialState, model), action) {
    switch (action.type) {

        case MAKE_VOTE:
            const newRating = state[action.theme][action.id].rating + 1;
            const newSumm = state.ratingSumm[action.theme] + 1;
            const result = merge(state, {
              [action.theme]: {
                [action.id]: {
                  rating: newRating
                }
              },
              ratingSumm: {
                [action.theme]: newSumm
              }
            });
            return result;

        case UPDATE_USER:
          let userName = localStorage.getItem('username');
          if (!userName) {
              userName = localStorage.setItem('username', 'poll');
          }
          const newUser = (state.users[userName] && state.users[userName].slice()) || [];
          newUser.push(action.theme);
          return merge(state, {
            users: {
              [userName]: newUser
            }
          });

          case RECEIVE_QUOTES:
            const newState = merge(state, transformModel({
              ratingSumm: {}
            }, {
              quotes: action.quotes
            }));
            return newState;

        default:
            return state;
    }
};
