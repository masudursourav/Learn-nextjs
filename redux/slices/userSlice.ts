import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface UserState {
  data: [] | null;
  loading: boolean;
  error: string | null;
}
export const getUsers = createAsyncThunk('user', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
});

export const initialState: UserState = {
  data: [],
  loading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      });
  },
});

export default userSlice.reducer;
