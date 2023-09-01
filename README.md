# 프로젝트 세팅

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

- 생산성 증가를 위해 자체적인 lint 규칙을 설정

---

# API 관리

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

# Custom Hooks

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

❓ 선정 이유

- 요청이 필요한 컴포넌트마다 요청 로직을 구현할 필요가 없도록 hooks를 구현하여 사용한 점이 재사용성 측면에서 효율적이라고 생각하여 선정했습니다.


# Error Page

- page

```javascript
const ErrorPage = () => {
	const navigate = useNavigate();

	const returnToMainPage = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return (
		<PageContainer>
			<div>
				<Header>사용할 수 없는 페이지 입니다.</Header>
			</div>
			<div>
				<Subheader>
					이용에 불편을 드려 죄송합니다 <br /> 주소를 다시 한 번 확인해주세요
				</Subheader>
			</div>
			<ButtonWrapper>
				<Button onClick={returnToMainPage}>메인 페이지로</Button>
			</ButtonWrapper>
		</PageContainer>
	);
};
```

1. Router를 통해 잘못된 경로로 접속했을 경우 렌더링
2. 메인 페이지로 이동하는 기능 구현

---

# Route

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

1. 관심사 분리를 기준으로 path의 요소들을 분리하여 관리
2. 가독성 증대를 위해 path의 요소들을 선언하여 Router에서 사용

---

# 무한스크롤

```tsx
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

```tsx
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
