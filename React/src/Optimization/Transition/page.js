import React, { useState, useTransition } from 'react';
import { SlowComponent } from './SlowComponent';

// Опять же здесь будет очень долго прогрузка компонента при нажатии на кнопку 'show'

// ==============

export default function Transition() {
	const [isVisible, setIsVisible] = useState(false);
	const [isPending, startTransition] = useTransition();
	return (
		<div>
			{/* <button onClick={() => startTransition(() => setIsVisible(!isVisible))}>
        {isVisible ? "hide" : "show"}
      </button>
      {isPending && <span>Ждем...</span>} */}
			<button onClick={() => setIsVisible(!isVisible)}>
				{isVisible ? 'hide' : 'show'}
			</button>
			{isVisible && <SlowComponent />}
		</div>
	);
}


// ================
// теперь будем использовать хук useTransition
// теперь изменение состояния обернули в startTransition
// то есть когда у нас происходит переход - интерфейс не блокируется и мы большую 
// операцию как бы выносим в фон, а интерфейс продолжает быть отзывчивым
// а большой компонент рендериться в фоне и не блокирует пользователя


export default function Transition() {
	const [isVisible, setIsVisible] = useState(false);
	const [isPending, startTransition] = useTransition();
	return (
		<div>
			<button onClick={() => startTransition(() => setIsVisible(!isVisible))}>
        {isVisible ? "hide" : "show"}
      </button>
      {isPending && <span>Ждем...</span>}
			{isVisible && <SlowComponent />}
		</div>
	);
}