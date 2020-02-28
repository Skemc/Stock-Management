
const initialState = {
    items: [
        {
            id: 1,
            name: "Macbook",
            price: "7000$"
        },
        {
            id: 2,
            name: "HP probook",
            price: "4000$"
        },
        {
            id: 3,
            name: "Lenovo",
            price: "5000$"
        }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state,
                items: state.items.concat(action.payload)
            };
        case 'DELETE_ITEM':
            return {...state,
                items: state.items.filter((item, i) => {
                    return i !== action.payload;
                })
            };

        default:
            return state;
    }
}
