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

## 2021.01.19
### `createAsyncThunk` 작업 및 데이터 작업
- `storePost.js` :: `createAsyncThunk`에서 API를 활용하여 이미지 데이터 받아오는 작업을 수행하였고, `initialState`에 받아온 데이터를 `forEach`를 활용하여 입력하는 작업진행.

- `post.js` :: 댓글기능을 입력하고 입력받은 댓글을 `storePost.js`의 `initialState`에 넣는 작업진행.

## 2021.01.20
### `postAdd.js` 컴포넌트 작업
- `postAdd.js` 컴포넌트는 포스트를 등록하기 위한 컴포넌트이다. 이 과정에서 이미지를 추가하는 부분에서 많은 어려움이 있었다. 초반에는 `Ant Design`의 `Upload`를 사용했는데 생각보다 기능 부분에서 활용할 수 있는 부분이 적어 `input`태그를 사용.

- 다음으로 데이터를 전송하기 위해서 `formData`를 사용했는데 `formData`에 대한 부분에 경험이 많이 없어서 어떻게 동작하고 어떤식으로 데이터가 전송되며, 어떻게 사용해야 하는지를 잘 몰라 짧은 시간안에 속성으로 습득함. 하지만 `formData`에 대한 부분은 나중에라도 자세히 학습을 할 필요.

- 따라서 `postAdd.js` 컴포넌트에서 타이틀, 콘텐츠, 이미지를 전부 작성하면 `formData.append`를 사용해 추가하고 `dispatch`로 바로 store에 전송했다. 향후 백엔드까지 구현하면 store에서 바로 API로 백엔드에 전송할 예정.

## 2021.01.21
### `storeUser.js` 회원가입 리덕스 작업, `signUp.js` 컴포넌트 회원가입 작업
- `storeUser.js`에서 회원가입 처리를 위한 리덕스 작업을 진행했다. 또한 리덕스 스토어 값에 따라 컴포넌트 화면부분도 처리해야 하는 과정까지 진행하였다.

- `storeUser.js initialState`의 `loading, error, regist`를 가지고 `signUp.js`컴포넌트 로직을 처리했다.

- `loading, regist`가 `true`인 경우 회원가입 성공으로, `loading`은 `false, error`가 `ture`인 경우는 회원가입 실패로 처리했다.

## 2021.01.22
### `storeUser.js` 로그인 리덕스 작업, `notLogin.js` 컴포넌트 로그인 작업
- `storeUser.js`에서 로그인 처리를 위한 리덕스 작업을 진행했다. 그리고 axios로 로그인 요청을 보낼 때 옵션을 추가해주었다.

- `axios`로 로그인 요청은 `cookie`를 받아야 하는데 `frontend, backend` 양쪽에서 모두 작업을 해주어야 한다. `frontend`의 `axios` 옵션은 `withCredentials : true`로 해주면 된다.

- `withCredentials`를 `true`로 변경해주면 자격증명을 사용하여 크로스사이트 접근 제어 요청을 할 수 있다.

## 2021.01.22
### `storePost.js` 포스트 등록 작업
- `storePost.js`에서 포스트 등록 처리를 위한 작업과 동시에 리덕스 작업까지 진행했다.

- 지금까지 진행했던 작업 중에서 어려웠던 작업으로 작업과정 중 많은 고민과 여러 이슈들을 처리 했다.

- 추가 기능으로는 사용자가 업로드한 이미지를 미리보기 위한 작업을 진행했는데, 우선 사용자가 선택한 이미지를 우선 서버에 올리고 서버에서 응답한 주소값으로 보여주었다.

- 미리 보여주는 이미지를 실제로 업로드할 이미지가 아니기 때문에 서버에서 응답해준 이미지 링크를 따로 `store`에 저장하였다.

- `store`에 이미지 링크를 저장하였으므로 저장한 이미지 링크로 미리보기 기능을 구현했고, 이미지를 삭제할 수 있는 버튼을 넣어서 이미지 삭제를 누르면 `store`에서 삭제하도록 했다. 최종적으로 남은 이미지 링크가 업로드할 이미지인 것이다.

- 포스트를 업로드할 데이터는 formData를 사용했다.