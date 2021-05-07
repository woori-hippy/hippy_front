# Hippy_Front

## About

2021 우리은행 온택트 해커톤 프론트 엔드 프로젝트입니다.

## Skills

- React
- Redux, Redux-saga : 상태관리 툴입니다.
- react-rouoter : CSR 툴입니다.
- material ui : 2021년 4월 28일 기준 material ui의 알파버전입니다. sx라는 프로퍼티가 추가되어 쉽게 커스텀 스타일링을 해줄 수 있게 되었습니다.

## Directory 구조

이 프로젝트는 MVP 패턴를 따르고 있습니다.

src
├─ api/ : API 통신할때 쓰는 코드들입니다.
├─ components/ : View를 담당하는 컴포넌트입니다.
├─ container/ : Presenter를 담당하는 컴포넌트입니다. Redux의 상태 조회와 handle 함수를 정의하여 컴포넌트에게 넘겨줍니다.
├─ lib/ : 코드의 중복을 줄여주는 유틸 함수가 정의되어 있습니다.
├─ modules/ : Model기능을 담당하는 코드입니다. Reducer와 Saga들이 기능별로 구분되어 작성되어 있습니다.
├─ pages/
├─ App.jsx : 각 Route에 대한 페이지를 정의합니다.
└─ index.js : 앱의 진입점입니다. Redux와 Redux-saga를 적용합니다.
