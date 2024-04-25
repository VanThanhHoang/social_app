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

// Sử dụng dispatch:
// dispatch(fetchNewFeed(page))

export const NewfeedAction = {fetchNewFeed};
