import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/cookieSlice"
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"
import videoRecordReducer from "./slices/videoRecordSlice"
import themeReducer from "./slices/themeSlice"
import langReducer from "./slices/langSlice"
import modalReducer from "./slices/modalSlice"
import errorsReducer from "./slices/errorSlice"
import uiReducer from "./slices/uiSlice"


export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    user: userReducer,
    videoRecord: videoRecordReducer,
    theme: themeReducer,
    language: langReducer,
    modal: modalReducer,
    errors: errorsReducer,
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          'videoRecord/setStream',
          'videoRecord/setRecordedVideo',
          'videoRecord/setRecordsToSend'
        ],
        // Ignore these paths in the state
        ignoredPaths: [
          'videoRecord.stream',
          'videoRecord.recordedVideos',
          'videoRecord.recordsToSend'
        ],

      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type GetState = typeof store.getState