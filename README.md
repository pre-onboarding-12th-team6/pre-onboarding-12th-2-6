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
