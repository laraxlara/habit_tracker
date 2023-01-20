import { v4 as uuidv4 } from 'uuid';

export const INITIAL_STATE = {
    id: '',
    title: '',
    description: '',
}

export const ACTIONS = {
    ADD_NEW_HABIT: 'add_new_habit',
    DELETE_HABIT: 'delete_habit'
}

export const habitsReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_HABIT:
            return {
                ...state,
                id: uuidv4(),
                [action.payload.name]: action.payload.value,
            }
        default: 
            return state
    }
}