import AxiosInstance from '@/network/axiosInstance';
import {PostResponse} from '@/type';
import {createAsyncThunk} from '@reduxjs/toolkit';

const fetchNewFeed = createAsyncThunk(
  'newFeed/fetchPost',
  async (page: number, thunkApi) => {
    try {
      const response: PostResponse = await AxiosInstance().get(
        `post/new_feed?page=${page}`,
      );
      return response; // Trả về dữ liệu để lưu vào store (nếu cần)
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
const likePost = createAsyncThunk(
  'newFeed/likePost',
  async (postId: string, thunkApi) => {
    try {
      const response:any = await AxiosInstance().put(
        `post/reaction/${postId}`,
      );
      console.log('response',response.reaction)
      return response.reaction;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
// Sử dụng dispatch:
// dispatch(fetchNewFeed(page))
const fetchMyPost = createAsyncThunk(
  'newFeed/fetchMyPost',
  async (_, thunkApi) => {
    try {
      const response: PostResponse = await AxiosInstance().get(
        `post/getMypost`,
      );
      return response; // Trả về dữ liệu để lưu vào store (nếu cần)
    } catch (error) {
      console.log('error', error);  
      return thunkApi.rejectWithValue(error);
    }
  },
);
export const NewfeedAction = {fetchNewFeed,likePost, fetchMyPost};
