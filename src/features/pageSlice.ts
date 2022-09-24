import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  AnyAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { API } from '../Api';
import { RootState } from '../app/store';

interface AdapterProp {
  _id?: string;
  emoji: string;
  title: string;
  subPages: string[];
}

const pageAdapter = createEntityAdapter({
  selectId: (page: AdapterProp) => page.title,
});

const initialState = pageAdapter.getInitialState({
  status: 'idle',
});

export const fetchPages = createAsyncThunk('pages/fetchPages', async () => {
  const res = await axios.get(API.GET_PAGES);
  return res.data;
});

export const addNewPage = createAsyncThunk(
  'pages/addNewPage',
  async (params: AdapterProp) => {
    const res = await axios.post(API.ADD_PAGE, {
      ...params,
    });
    return res.data;
  }
);

export const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPages.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.status = 'success';
        pageAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.status = 'failed';
      })
      .addCase(addNewPage.fulfilled, pageAdapter.addOne);
  },
});

export const getPageStatus = (state: RootState) => state.pages.status;

export const {
  selectAll: selectAllPages,
  selectById: selectPageById,
  selectIds: selectPageIds,
  selectEntities: selectPages,
} = pageAdapter.getSelectors((state: RootState) => state.pages);

export default pageSlice.reducer;
