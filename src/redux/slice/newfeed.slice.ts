import {Post, PostResponse} from '@/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewfeedAction} from '../action/newfeed.action';

export interface NewFeedState {
  posts: Post[];
  currentPage: number;
  status: 'idle' | 'loading' | 'failed';
}
const initialState: NewFeedState = {
  posts: [],
  currentPage: 1,
  status: 'idle',
};
const newfeedSate = createSlice({
  name: 'newFeedSate',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(NewfeedAction.fetchNewFeed.fulfilled, (state, action) => {
        state.status = 'idle';
        const page = action.meta.arg;
        state.currentPage = page;
        if (page === 1) {
          state.posts = action.payload.posts;
        } else {
          state.posts = state.posts.concat(action.payload.posts);
        }
      })
      .addCase(NewfeedAction.fetchNewFeed.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(NewfeedAction.fetchNewFeed.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});
export const newFeedReducer = newfeedSate.reducer;
