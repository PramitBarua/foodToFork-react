import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAILURE,
} from './ActionTypes';
import { getAllRecipe } from './getAllRecipeAction';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// declare middlewares
const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const store = mockStore({});

const mock = new MockAdapter(axios);

// firing up the test Suite
describe('Testing loadAllRecipe()', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const apiEndpoint = '/someapi';

  it('should get all recipes', () => {
    mock.onGet(apiEndpoint).reply(200, {
      data: {
        number: 1,
        offset: 0,
        results: [
          {
            id: 1417223,
            image: 'https://spoonacular.com/recipeImages/1417223-312x231.jpg',
            imageType: 'jpg',
            title: 'Bacon Egg and Cheese Breakfast Pizza',
          },
        ],
      },
      totalResults: 5000,
    });

    let expectedActions = [
      { type: SEARCH_RECIPES_REQUEST },
      {
        type: SEARCH_RECIPES_SUCCESS,
        body: {
          data: {
            number: 1,
            offset: 0,
            results: [
              {
                id: 1417223,
                image:
                  'https://spoonacular.com/recipeImages/1417223-312x231.jpg',
                imageType: 'jpg',
                title: 'Bacon Egg and Cheese Breakfast Pizza',
              },
            ],
          },
          totalResults: 5000,
        },
      },
    ];

    store
      .dispatch(getAllRecipe(apiEndpoint))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('when api call fails', () => {
    mock.onGet('not an api').reply(400, {
      response: {
        data: {
          message: 'Request failed with status code 400',
        },
        status: 'failure',
        code: 400,
      },
    });

    let expectedActions = [
      { type: SEARCH_RECIPES_REQUEST },
      {
        type: SEARCH_RECIPES_FAILURE,
        error: {
          response: {
            data: {
              message: 'Request failed with status code 400',
            },
            status: 'failure',
            code: 400,
          },
        },
      },
    ];
    store.dispatch(getAllRecipe('not an api')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
