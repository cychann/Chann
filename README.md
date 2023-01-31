# [React] Shopping Mall Application

https://chann.netlify.app/

## 적용 개념

- Context API
- React Query
- Firebase Authentication
- Firebase Realtime Database
- Cloudinary Media Upload
- tailwind CSS

## 구현 내용

### 1. 로그인, 로그아웃

Firebase Authentication -> 로그인, 로그아웃, 사용자 변경감지 기능 구현

Context API -> 사용자 정보를 관리하는 user Context를 정의. 필요한 컴포넌트에서 user 정보 조회 가능

![ezgif com-gif-maker (26)](https://user-images.githubusercontent.com/66055587/215784064-023483dd-7790-47af-a510-e4a824bbd5ef.gif)

### 2. 메인 페이지

Firebase Realtime Database + React Query -> 상품 목록 조회

![ezgif com-gif-maker (34)](https://user-images.githubusercontent.com/66055587/215796551-e8465979-9f2f-403e-bdb2-dbaa70a032aa.gif)

### 3. 제품 등록 페이지

등록된 admin user만 제품 등록 페이지로 접근 가능하도록 설정

Firebase Realtime Database + React Query -> 제품 등록 기능 구현

Cloudinary Media Upload -> 이미지 업로드 및 저장

![ezgif com-gif-maker (32)](https://user-images.githubusercontent.com/66055587/215787222-e8acbf75-f758-46f5-bc2e-ff326c376e73.gif)

### 4. 제품 상세 페이지

![ezgif com-gif-maker (28)](https://user-images.githubusercontent.com/66055587/215785233-1bf53715-ecd9-454e-83d9-ed94332d544d.gif)

### 5. 제품 카테고리 페이지

![ezgif com-gif-maker (29)](https://user-images.githubusercontent.com/66055587/215785380-17310382-af1a-498c-ae3b-15203edf0394.gif)

### 6. 좋아요

Firebase Realtime Database + React Query -> 좋아요 목록 추가, 삭제, 읽기 기능 구현

![ezgif com-gif-maker (30)](https://user-images.githubusercontent.com/66055587/215785572-db5935ec-5d04-44af-803a-1827ba629381.gif)

### 7. 장바구니

Firebase Realtime Database + React Query -> 장바구니 목록 추가, 변경, 삭제, 읽기 기능 구현

![ezgif com-gif-maker (31)](https://user-images.githubusercontent.com/66055587/215785688-142066fa-f26e-4233-9b20-04802f048d60.gif)

### 8. 반응형

![ezgif com-gif-maker (36)](https://user-images.githubusercontent.com/66055587/215799808-357129d5-572c-45b0-b655-96c59239857a.gif)
