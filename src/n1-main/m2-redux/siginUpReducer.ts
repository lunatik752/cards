type InitialStateType = typeof initialState

const initialState = {
}

export const registerReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {

        default :
            return state;
    }
}

// action types


// action creators


// Thunk



