# Error Page

- page

```javascript
const ErrorPage = () => {
	const navigate = useNavigate();

	const returnToMainPage = useCallback(() => {
		navigate('/');
	}, [navigate]);

	const returnToPreviousPage = useCallback(() => {
		navigate(-1);
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
				<Button onClick={returnToPreviousPage}>이전 페이지로</Button>
				<Button onClick={returnToMainPage}>메인 페이지로</Button>
			</ButtonWrapper>
		</PageContainer>
	);
};
```

1. Router를 통해 잘못된 경로로 접속했을 경우 렌덜이
2. 이전 페이지, 메인 페이지로 이동하는 기능 구현

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
			element: <Navigate to={routePath.error.path} />,
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
		<div className="App">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
}
```

1. 관심사 분리를 기준으로 path의 요소들을 분리하여 관리
2. 가독성 증대를 위해 path의 요소들을 선언하여 Router에서 사용

---
