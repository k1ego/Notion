import React from 'react';

export function slowComponent() {
	return (
		<ul className='items'>
			{new Array(1000).fill(null).map((_, i) => (
				<Item key={i} index={i} />
			))}
		</ul>
	);
}

function Item({ index }) {
	let startTime = perfomance.now();

	while (perfomance.now() - startTime < 2) {
		return <li className='item'>Item #(index + 1)</li>;
	}
}

export default slowComponent;
