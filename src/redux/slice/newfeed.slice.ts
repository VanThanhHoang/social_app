import {Post, PostResponse} from '@/type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NewfeedAction} from '../action/newfeed.action';
import { upLoadPost } from '../action/post.action';
import { ToastAndroid } from 'react-native';

export interface NewFeedState {
  posts: Post[];
  currentPage: number;
  status: 'idle' | 'loading' | 'failed';
  isLastPage: boolean;
}
const initialState: NewFeedState = {
  posts: [],
  currentPage: 1,
  status: 'idle',
  isLastPage: false,
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
        if (!action.payload.nextPage) {
          state.isLastPage = true;
        }
        if (action.payload.posts.length === 0) {
          return;
        }
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
      })
      .addCase(NewfeedAction.likePost.fulfilled, (state, action) => {
        const reaction = action.payload;
        console.log('reaction*****', reaction);
        const postId = action.meta.arg;
        const postIndex = state.posts.findIndex(post => post._id === postId);
        state.posts[postIndex].isLiked = !state.posts[postIndex].isLiked;
        state.posts[postIndex].reactions = reaction;

      })      .addCase(upLoadPost.fulfilled, (state, action) => {
        const post = action.payload;
        state.posts.unshift(post);
        ToastAndroid.show('Đã đăng pic của bạn', ToastAndroid.LONG);
      });;
  },
});
export const newFeedReducer = newfeedSate.reducer;
