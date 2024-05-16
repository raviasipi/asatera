import { AnyAction, combineReducers, configureStore, Middleware, ThunkDispatch } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import themeReducer from './slices/themeSlice'

const development:boolean = process.env.NODE_ENV === 'development'
const middleware: Middleware[] =[]

// if(development){
//   const logger = createLogger({
//     collapsed:(getState, action, logEntry) => !logEntry?.error,
//   })
//   middleware.push(logger)
// }

const reducer = combineReducers({
  auth:authReducer,
  theme: themeReducer,
})

export const store = configureStore({
  reducer,
  middleware:(getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware
  ],
  devTools: development
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export default store