import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {SliceName} from "@/redux/constant";
import {fetchUserById} from "@/redux/action";
import {useLogger} from "@/utils";

interface AppState {
    isLoading: boolean;
}

const logger = useLogger("Test")
const initialState: AppState = {
    isLoading: false
};
const appSlice = createSlice({
    name: SliceName.APP,
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
      
    }
});
export const {setLoading} = appSlice.actions;
export const appReducer = appSlice.reducer;
