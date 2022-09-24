import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Define a type for the slice state
interface UserState {
  email: string;
}

// Define the initial state using that type
const initialState: UserState = {
  email: '',
};

export const counterSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateUser: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { updateUser } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.users.email;

export default counterSlice.reducer;
