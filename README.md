# crewSNS-front
### React/Redux/Redux-Thunk/Antdesign UI 를 사용한 SNS서비스 :: [프론트앤드]
---
## 2021.01.08
### `main.js login.js notLogin.js`컴포넌트 구현
- 해당 컴포넌트는 첫 화면에 보여지는 화면으로 좌측에 로그인할 수 있는 컴포넌트와 중앙에 `post.js`인 포스트 데이터들을 볼 수 있다.
- `login.js` :: 로그인을 하지 않았을 경우 보여지는 컴포넌트로, 로그인 or 회원가입을 선택할 수 있다.
- `notLogin.js` :: 로그인을 했을 경우 보여지는 화면으로, 사용자 닉네임과 로그아웃을 선택할 수 있다.

## 2021.01.09
### `post.js`컴포넌트 구현
- `React.layz`를 `post.js`컴포넌트에 적용
  > ```javascript
  > //Suspense를 import
  > import React, { Suspense } from 'react';
  > 
  > //component를 impor할 때 React.lazy()를 사용한다
  > const Post = React.lazy(() => import('./post'));
  > 
  > //import한 post컴포넌트는 Suspense로 감싸주고 fallback은 post컴포넌트가 보여지기 전까지 보여줄 내용을 적어준다.
  > <Suspense fallback={<div>loading...</div>}>
  >     <Post />
  > </Suspense>
  > ```
- `post.js`컴포넌트 image에 [react-layzload](https://www.npmjs.com/package/react-lazyload) 적용
  >```javascript
  >//내가 설정한 옵션
  ><LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} height="300px"></LazyLoad>
  >```
  > 
- 테스트 이미지는 [unsplash](https://unsplash.com/) 사용

## 2021.01.10
### `signUp.js`컴포넌트 구현

## 2021.01.18
### `redux toolkit :: createSlice, createAsyncThunk` 작업 수행
- `configure.js`  :: `@reduxjs/toolkit`의 `configureStore`를 사용하여 store를 생성하고 옵션으로 `reducer`값을 주었다. `reducer`는 `index.js`의 `rootReducer`를 import한 것이다.

- `index.js` :: `redux`의 `combineReducers`를 사용하여 여러개의 reducer를 하나로 묶어서 `rootReducer`를 통해 export한다.

- `storePost.js` :: 게시글, 즉 post와 관련된 작업을 진행하는 부분으로 `createSlice createAsyncThunk`를 통해 로직을 작성한다. 기존의 `redux`와 사용방법이 많이 달라 배우는데 오랜 시간이 걸린 부분이다.

- `storeUser.js` :: 사용자에 대한 정보 데이터와 관련된 작업을 진행하는 기능이며 `storePost.js`의 `createSlice createAsyncThunk`를 사용했다.