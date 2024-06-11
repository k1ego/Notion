// Вот так компонент будет грузится очень долго

// import React from 'react'
// import { SlowComponent } from './slowComponents'

// export default function StateLocation() {
// 	const [count, setCount] = useState(0)
// 	return (
// 		<div>
// 			<button onClick={() => setCount((count) => 			count + 1)}>{count}</button>
// 			<SlowComponent />
// 		</div>
// 	)
// }

// а это мы используем stateLocation

import React from 'react';
import { SlowComponent } from './slowComponents';

const CountComponent = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<button onClick={() => setCount(count => count + 1)}>{count}</button>
		</>
	);
};

export default function StateLocation() {
	return (
		<div>
			<CountComponent />
			<SlowComponent />
		</div>
	);
}

// то есть при изменении состояния useState будет перерендереваться только CountComponent