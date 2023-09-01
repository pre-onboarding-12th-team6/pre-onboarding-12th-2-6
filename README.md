# TEAM6 - github issue application

프리온보딩 2주차에 진행한 과제물입니다. <br/>
기간 : 2023.08.29. ~ 2023.09.01. <br />

<a href='https://resonant-sopapillas-f1ec03.netlify.app/' target='_blank'>👉 배포 링크 👈 </a>

## 👥 팀원

<table border>
  <tbody>
    <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/106734517?v=4"  alt=""/><br />
        <a href="https://github.com/iziz9">
          <img src="https://img.shields.io/badge/강현주-1E90FF?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/94212747?s=96&v=4"  alt=""/><br />
        <a href="https://github.com/NR0617">
          <img src="https://img.shields.io/badge/오나래-1E90FF?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/80497049?s=96&v=4"  alt=""/>
        <a href="https://github.com/thumbthing">
          <img src="https://img.shields.io/badge/이민구-1E90FF?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/68311202?s=96&v=4"  alt=""/>
        <a href="https://github.com/slowteady">
          <img src="https://img.shields.io/badge/이용민-1E90FF?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/110447844?s=96&v=4"  alt=""/>
        <a href="https://github.com/337yj">
          <img src="https://img.shields.io/badge/이윤정-1E90FF?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>
<br/>

## 실행 방법

1. 로컬 환경에 프로젝트 복사본 생성

```
git clone https://github.com/pre-onboarding-12th-team6/pre-onboarding-12th-2-6
```

2. 프로젝트 폴더로 이동

```
cd pre-onboarding-12th-2-6
```

3. 프로젝트 종속성 설치

```
npm install
```

4. 프로젝트 실행

```
npm start
```

## 기술 스택

<img src='https://user-images.githubusercontent.com/123078739/234895132-18ab503a-fcc7-486d-b89a-cb0cc1f7796b.svg' />
<img src='https://user-images.githubusercontent.com/123078739/234895162-42f905c6-765d-44d2-bcb1-b011286ef6b2.svg' />
<img src='https://camo.githubusercontent.com/6cafef69921d1cdf4aac79e0b96cfb4d58c2cfa08d791d31178da11e3d75f78c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6178696f732d3541323945343f7374796c653d666f722d7468652d6261646765266c6f676f3d6178696f73266c6f676f436f6c6f723d7768697465' />
<img src='https://user-images.githubusercontent.com/123078739/234895191-c1198a7b-9e2e-499a-8e61-c3b87bf8e2c2.svg' />
<img src='https://camo.githubusercontent.com/2350f320fdbfd9c83a5b01c23d90d29021f8f296075425b78603ba24d816818e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f70726574746965722d4637423933453f7374796c653d666f722d7468652d6261646765266c6f676f3d7072657474696572266c6f676f436f6c6f723d626c61636b' />
<img src='https://user-images.githubusercontent.com/123078739/234895185-7fd6c334-faca-4520-8551-2f20b32f085e.svg' />
<img src='https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white' />

## 프로젝트 구조

```
📂src/
	api/
		axiosInstance.js
		request.js
	common/
		Header.jsx
		Loading.jsx
	detail/
		DetailPage.jsx
	error/
		ErrorPage.jsx
	hooks/
		useApiHook.js
		useInfiniteScroll.js
	main/
		AdBanner.jsx
		IssueItem.jsx
		MainPage.jsx
	routes/
		routePath.js
		Router.jsx
	util/
		dateParsing.js
	app.jsx
	globalStyles.js
	index.jsx
```

- 프로젝트 규모가 작기 때문에 관리해야 할 파일이 많지 않았기 때문에 폴더 구조에서 불필요한 depth를 줄여 개발 편의성을 높이기 위해 위와 같은 구조를 사용했습니다.
- src 폴더 아래 각 페이지 또는 기능의 이름을 폴더로 생성하고, 하위에 해당 폴더에서 필요한 컴포넌트를 넣는 방식으로 구성했습니다.

## Best Practice

> 논리적인 디렉토리 구조, 코드의 가독성과 재사용성을 기준으로 중심 기능별 최선의 방법을 선정했습니다.

### 1. API 관리

```js
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
	if (ACCESS_TOKEN) {
		config.headers.Authorization = ACCESS_TOKEN;
	}

	return config;
});
```

- axios 인스턴스 생성을 하고 인터셉터를 이용하여 토큰 유무에 따른 헤더 설정을 분기처리 했습니다.
- API 요청 주소와 토큰을 .env 파일을 사용하여 환경 변수로 관리했습니다.

```js
import { axiosInstance as apiClient } from './axiosInstance';

export const ORGANIZATION = 'Facebook';
export const REPOSITORY = 'React';
const PATH = `${ORGANIZATION}/${REPOSITORY}/issues`.toLowerCase();

export const getIssuesList = (params) => {
	return apiClient.get(PATH, params);
};

export const getIssuesDetail = (id) => {
	return apiClient.get(`${PATH}/${id}`);
};
```

- alias 설정으로 보다 직관적인 함수명을 사용하였습니다.
- Organization Name과 Repository Name을 상수로 관리하여 헤더 레이아웃쪽에서 재활용 할 수 있도록 했습니다.

❓ 선정 이유

- axios 인스턴스 사용으로 코드 중복을 효과적으로 줄일 수 있다고 생각되어 선정했습니다.
- Organization Name과 Repository Name을 재활용하여 HTTP 요청과 헤더 레이아웃 양쪽에 사용한 점을 긍정적으로 생각하여 선정했습니다.

### 2. Custom Hooks

```js
function useApiHook(fetchFunction, params) {
 const [issues, setIssues] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const [isError, setIsError] = useState(false);
 const [hasNextPage, setHasNextPage] = useState(false);

 useEffect(() => {
  async function fetchData() {
   setIsLoading(true);
   setIsError(false);

   try {
    const response = await fetchFunction(params);
                  .
                  .
                  .

   } catch (err) {
    setIsLoading(false);
    setIsError(true);

    if (err instanceof Error) {
     alert(`Error: ${err.message}`);
    } else {
     alert(ERROR_MESSAGES);
    }
   }
  }
  fetchData();
 }, [fetchFunction, params]);

 return { issues, isLoading, isError, hasNextPage };
}
```

- 요청에 필요한 함수, 파라미터를 인자로 받아 필요한 state들을 리턴해주는 Custom Hook을 구현했습니다.
- 로딩, 에러, 페이지 여부 상태를 리턴해주어 상태에 따른 처리가 수월한 환경을 구성했습니다.
- 커스텀 훅 naming convention에 맞게 훅의 이름을 `use-` 로 시작하도록 명칭을 지정했습니다.

❓ 선정 이유

- 요청이 필요한 컴포넌트마다 불필요한 state를 생성하지 않고 요청 로직을 구현할 필요가 없도록 hooks를 구현하여 사용한 점이 재사용성 측면에서 효율적이라고 생각하여 선정했습니다.

### 3. Route

- Path Properties

```javascript
const routePath = {
	home: { path: '/', name: 'Home' },
	issues: { path: '/issues', name: 'Issues' },
	detailIssue: { path: '/issues/:id', name: 'IssuesDetail' },
	errorRedirect: { path: '*', name: 'ErrorRedirect' },
	error: { path: '/error', name: 'Error' },
};
```

- Router

```javascript
const Path = {
	home: routePath.home.path,
	issues: routePath.issues.path,
	detailIssue: routePath.detailIssue.path,
	errorRedirect: routePath.errorRedirect.path,
	error: routePath.error.path,
};

const Router = () => {
	const routes = useRoutes([
		{
			path: Path.home,
			element: <Navigate to={Path.issues} />,
			replace: true,
		},
		{
			path: Path.issues,
			element: <MainPage />,
		},
		{
			path: Path.detailIssue,
			element: <DetailPage />,
		},
		{
			path: Path.errorRedirect,
			element: <Navigate to={Path.error} />,
			replace: true,
		},
		{
			path: Path.error,
			element: <ErrorPage />,
		},
	]);

	return routes;
};
```

```javascript
function App() {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
}
```

- 관심사 분리를 기준으로 path의 요소들을 분리하여 관리하였습니다.
- 관리의 편의성과 가독성 증대를 위해 pathname을 객체로 분리하여 Router에서 사용하였습니다.
- root, error 경로 접근 시 replace 처리하여 history 사용을 방지시켰습니다.

❓ 선정 이유

- useRoutes 데이터의 객체화, 이슈 핸들링 처리를 하여 코드 관리하는데 효율적이라 생각해서 선정하였습니다.

### 4. Date Parsing 유틸 함수 사용

```js
// src/util/dateParsing.js

export const dateParsing = (created_at) => {
	return new Date(created_at).toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
};
```

- issueItem과 detail 컴포넌트에서는 불필요한 state 사용을 줄이기 위해 `useApiHook` 커스텀 훅을 통해 내려받은 리턴값을 사용해 화면을 렌더링합니다.
- 리턴된 값 중 텍스트로 표시해야 하는 `create_at`가 '0000-00-00T00:00:00' 형식으로 구성되었기 때문에 파싱이 필요했는데, 두 군데서 같은 로직을 사용하기 때문에 회의를 통해 util 폴더를 생성해 함수로 분리하기로 하였습니다.

### 5. 무한스크롤

```js
import { useCallback, useRef } from 'react';

function useInfiniteScroll(hasNextPage, setPage) {
	const observer = useRef();

	const lastItemRef = useCallback(
		(node) => {
			if (observer.current) {
				observer.current.disconnect();
			}
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasNextPage) {
					setPage((prevPage) => prevPage + 1);
				}
			});

			if (node) {
				observer.current.observe(node);
			}
		},
		[hasNextPage, setPage],
	);

	return lastItemRef;
}

export default useInfiniteScroll;
```

```js
// main/MainPage.jsx

const lastItemRef = useInfiniteScroll(hasNextPage, setPage);
...
<IssuesItem ref={lastItemRef} key={issue.number} issues={issue} />
```

- 관심사 분리를 위해 Custom Hook으로 구현하였습니다.
- `IntersectionObserver`를 사용하여 페이지의 끝에 도달하면 다음 페이지로 이동할 수 있도록 설정하였습니다.
- 마지막 항목인 경우, `ref={lastItemRef}`를 설정하여 `IntersectionObserver`가 활성화되도록 합니다.
- 스크롤이 진행됨에 따라 `lastItemRef` 함수가 호출되고, `IntersectionObserver`에 의해 마지막 항목이 화면에 나타나면 `setPage`를 통해 다음 페이지를 로드하게 됩니다.

❓ 선정 이유

- Custom Hook을 사용하여 코드를 모듈화하고 별도의 함수로 분리함으로써 관심사를 분리하고 코드의 유지보수성을 향상시킬 수 있어 선정하였습니다.
- Custom Hook을 이용하면 다른 컴포넌트에서도 쉽게 재사용할 수 있고 확장성을 높일 수 있을 것 같아 선정하였습니다.

## 팀 규칙

### 커밋 컨벤션

🗒️ Pull Request rule

1. 제목은 이와 같이 작성한다: [작성자 이니셜] 타입키워드: 작업설명 / e.g. [YNL] chore: 라우터돔 세팅
2. feature 브랜치는 **반드시** develop 브랜치로만 PR한다. master 브랜치로 병합 요청시 PR요청을 취소한다. (또는 관리자 권한으로 취소시킬 수 있다.)

🗒️ commit message rule

1. 제목과 본문을 빈 행으로 구분한다.
2. 최대한 한글로 작성한다.
3. 제목은 50글자 내로 제한한다.
4. 제목 끝에 마침표를 찍지 않는다.
5. 제목은 명령문으로 사용하며, 과거형을 사용하지 않는다.
6. 어떻게 보다는 무엇과 왜
7. 아래 표를 참고하여 접두로 사용한다.

| Type 키워드 | 사용 시점                                                             |
| ----------- | --------------------------------------------------------------------- |
| feat        | 새로운 기능 추가                                                      |
| fix         | 버그 수정                                                             |
| docs        | 문서 수정                                                             |
| style       | 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)기능 수정이 없는 경우 |
| design      | 사용자 UI 디자인 변경 (CSS 등)                                        |
| test        | 테스트 코드, 리팩토링 테스트 코드 추가                                |
| refactor    | 코드 리팩토링                                                         |
| build       | 빌드 파일 수정                                                        |
| ci          | CI 설정 파일 수정                                                     |
| chore       | 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)                |
| rename      | 파일 혹은 폴더명을 수정만 한 경우                                     |
| remove      | 파일을 삭제만 한 경우                                                 |

### 코드관리 전략

- git-flow

  - `main` : 배포를 위한 브랜치
  - `develop` : 개발 소스의 최신 버전을 정리한 브랜치
  - `feature` : 신규 작업 수행 시 기본적으로 사용하는 브랜치

- 브랜치를 병합하기 전, `git fetch origin` 명령을 수행하여 최신버전을 반드시 확인한다.

- 커밋 메시지는 개인이 식별하기 쉽도록 자유롭게 작성하되,
  develop 브런치에 반영할 때의 메세지는 `[작업자 이니셜] 작업내용 요약` 으로 통일한다.

- Pull Request는 최소 1개의 팀원 리뷰로 approve 상태일 때 merge할 수 있다.

### 프로젝트 세팅

- coding convention rule

```json
// lint
{
	"parser": "@babel/eslint-parser",
	"extends": ["react-app", "eslint:recommended", "prettier"],
	"rules": {
		"no-var": "error",
		"no-multiple-empty-lines": "error",
		"no-console": ["error", { "allow": ["log", "warn", "error", "info"] }],
		"eqeqeq": "error",
		"dot-notation": "error",
		"no-unused-vars": "error",
		"no-alert": "off",
		"react/jsx-filename-extension": ["warn", { "extensions": [".jsx"] }],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"js": "never",
				"jsx": "never"
			}
		]
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [".js", ".jsx"]
			}
		}
	}
}
```

```json
//prettier
{
	"printWidth": 80,
	"tabWidth": 2,
	"useTabs": true,
	"semi": true,
	"singleQuote": true,
	"bracketSpacing": true
}
```

- 자체적으로 Lint 규칙을 설정하여 협업을 위한 컨벤션을 맞추어 생산성을 증대 시켰습니다.

---
