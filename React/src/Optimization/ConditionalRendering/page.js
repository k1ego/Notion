import React from 'react';

import { SlowComponentWithHook, useIsAuthorized } from './SlowComponentWithHook';

export default function CanditioanlRendering() {
	const isAuthorized = useIsAuthorized();
	return (
		<div>
			{isAuthorized && <SlowComponentWithHook />}
		</div>
	)
}
