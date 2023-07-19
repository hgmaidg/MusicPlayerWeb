import { configureStore } from '@reduxjs/toolkit';
import {
    featureSlice,
    loginSlice,
    radioSlice,
    sidebarSlice,
    statusSlice,
    themeSlice,
    uploadSlice,
} from './sliceReducer';

const store = configureStore({
    reducer: {
        feature: featureSlice.reducer,
        status: statusSlice.reducer,
        sidebar: sidebarSlice.reducer,
        theme: themeSlice.reducer,
        login: loginSlice.reducer,
        radio: radioSlice.reducer,
        upload: uploadSlice.reducer,
    },
});
export default store;
