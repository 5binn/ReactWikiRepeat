**주요 차이점 비교**

| 항목        | React          | Vue            | Next.js               | Node.js          |
| ----------- | -------------- | -------------- | --------------------- | ---------------- |
| 역할        | UI 라이브러리  | UI 프레임워크  | React 기반 프레임워크 | 런타임 환경      |
| 렌더링 방식 | CSR/SSR 지원   | CSR/SSR 지원   | SSR/SSG 지원          | 서버 실행 환경   |
| 사용        | 프론트엔드 SPA | 프론트엔드 SPA | SEO와 퍼포먼스 최적화 | 백엔드/서버 개발 |
| 생태계      | 커뮤니티 중심  | 커뮤니티 중심  | Vercel 중심           | NPM 중심         |

React: 유연성과 확장성을 중시하며, 다양한 프레임워크와 조합 가능.<br/>
Vue: 간결하고 빠른 개발 속도를 원하는 경우 적합.<br/>
Next.js: React 프로젝트에서 SSR/SSG 및 SEO가 필요한 경우 적합.<br/>
Node.js: JavaScript 기반 서버 및 백엔드 개발 시 필수.<br/>

- Refs:
  컴포넌트가 "기억"해야 할 정보가 있지만 해당 정보로 인해 새로운 렌더링이 발생하고 싶지 않을 때는 ref를 사용
- Effect:
  컴포넌트가 렌더링될 때마다 React는 화면을 업데이트한 후 useEffect 내의 코드를 실행. 다시 말해, useEffect는 렌더링이 화면에 반영될 때까지 코드의 실행을 "지연"

```JS
useEffect(() => {
  // 이것은 모든 렌더링 이후에 실행됩니다.
});

useEffect(() => {
  // 이것은 마운트될 때만 실행됩니다 (컴포넌트가 처음 나타날 때)
}, []);

useEffect(() => {
  // 이것은 마운트될 때 실행되며, a 또는 b가 마지막 렌더링 이후에 변경된 경우에도 실행됩니다.
}, [a, b]);
```
