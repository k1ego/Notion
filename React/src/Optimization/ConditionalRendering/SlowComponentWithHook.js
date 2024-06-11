// В данной ситуации у нас для не авторизованных 
// пользователей будет вызываться хук useVerySlowHook()
// хотя он им не нужен, но они будут все равно ждать

// import React from 'react';

// 	const useIsAuthorized = () => {
// 		return false;
// 	}

// const useVerySlowHook = () => {
// 	let startTime = perfomance.now();

// 	while (perfomance.now() - startTime < 1000) {}
// };

// export function SlowComponentWithHook() {
// 	const isAuthorized = useIsAuthorized();
// 	useVerySlowHook();

// 	if (!isAuthorized) {
// 		return null;
// 	}

// 	return <div>VerySlow</div>;
// }

// ============

// Conditional Rendering:

import React from 'react';

export const useIsAuthorized = () => {
	return false;
};

const useVerySlowHook = () => {
	let startTime = perfomance.now();
	while (perfomance.now() - startTime < 1000) {}
};

export function SlowComponentWithHook() {
	useVerySlowHook();
	return <div>VerySlow</div>;
}
