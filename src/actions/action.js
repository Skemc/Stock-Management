import { LOGIN, VIEW_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export function login() {
    return function (dispatch) {
        fetch('https://barefoot-nomad-staging.herokuapp.com/api/auth/facebook')
            .then(res => res.json())
            .then(data => dispatch({
                type: LOGIN,
                payload: data
            }));
    }
};

export const displayItem = () => dispatch => {
    return items => dispatch({
            type: VIEW_ITEMS,
            payload: items
        });
};

export const createItem = payload => {
    return {
        type: ADD_ITEM,
        payload: payload
    };
};

export const deleteItem = payload => {
    return {
        type: DELETE_ITEM,
        payload: payload
    };
}