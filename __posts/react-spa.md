---
title: React Router 직접 만들어보기
date: '2023-07-10'
description: React에서 SPA를 지원하는 Router를 직접 만들어 보는 과정을 담았습니다.
categories:
  - Frontend
  - React
tags:
  - react-router
  - implementation
---

## 목표

```tsx
<Router>
  <Route path="/" component={<Root />} />
  <Route path="/about" component={<About />} />
</Router>
```

1. 위 코드가 동작하도록 `<Router>`와 `<Route>` 컴포넌트를 만든다.
2. 하나의 페이지에서 다른 페이지로 이동할 수 있다.
3. 브라우저 인터페이스(뒤로가기/앞으로가기 버튼)를 이용해 페이지를 이동할 수 있다.

## 구현 방식

자세한 구현 내용은 [여기](https://velog.io/@foreknowledge/React-Router-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0)서 확인할 수 있습니다.
