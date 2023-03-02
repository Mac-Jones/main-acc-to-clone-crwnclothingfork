import { createSlice } from '@reduxjs/toolkit'; // replace userReducer oldtype
// import { USER_ACTION_TYPES } from './user.types';

//redux toolkit creates action and types

const INITIAL_STATE = {
	currentUser: null,
	test: [3, 1, 2],
};

export const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
	},
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

//
//
// export const userReducer = (state = INITIAL_STATE, action) => {
// 	const { type, payload } = action;

// 	switch (type) {
// 		case USER_ACTION_TYPES.SET_CURRENT_USER:
// 			return { ...state, currentUser: payload };
// 		default:
// 			return state;
// 	}
// };
