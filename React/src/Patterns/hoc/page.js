import React, { useCallback } from 'react';

// Hight orger components
// Суть хоков - можно создать новый компонент, который будет содераджать в себе какую то логику, то есть она будет переиспользоваться. То есть по сути это своего рода фабрика компонентов с авторизацией.



const useIsAuthorized = () => {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const switchAuthorized = useCallback(() => {
		setIsAuthorized(currentValue => !currentValue);
	}, []);
	return { isAuthorized, switchAuthorized };
};

const AuthorizedComponent = () => {
	return <div>Только для авторизованных</div>;
};

const UnauthorizedComponent = () => {
	return <div>Только для не авторизованных</div>;
};

const withAuthorize = ({ Authorized, UnAuthorized }) => {
	return function withAuthorizeComponent(props) {
		const { isAuthorized } = useIsAuthorized();
		return isAuthorized ? <Authorized {...props} /> : <UnAuthorized {...props}/>;
	};
};


const CustomComponent = withAuthorize({
	Authorized: AuthorizedComponent,
	UnAuthorized: UnauthorizedComponent,
})

export default function Hoc() {
	const { isAuthorized, switchAuthorized } = useIsAuthorized();
	return (
		<div>
			<button onClick={switchAuthorized}>
				{isAuthorized ? 'LogOut' : 'LogIn'}
			</button>
			<CustomComponent prop1="Hello"/>
		</div>
	);
}
