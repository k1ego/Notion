// нужно для создания сложных компонентов

import React, { useCallback, useContext, useState } from 'react';

// ================

// const Toggle = ({ initialValue }) => {
// 	const [isOn, setIsOn] = useState(initialValue);
// 	return (
// 		<div>
// 			<button onClick={() => setIsOn(!isOn)}>Switch</button>
// 			{isOn && <span>on</span>}
// 			{!isOn && <span>off</span>}
// 		</div>
// 	);
// };

// const ToggleWithNewButton = ({ initialValue }) => {
// 	const [isOn, setIsOn] = useState(initialValue);
// 	return (
// 		<div>
// 			{isOn && <span>on</span>}
// 			{!isOn && <span>off</span>}
// 			<button onClick={() => setIsOn(!isOn)}>Switch</button>
// 		</div>
// 	);
// };

// Так неудобно, тк компонент созадли просто заново

// ================

// Суть Compound использовать useContext:

const ToggleContext = React.createContext(false);

const ToggleCompound = ({ children, initialValue }) => {
	const [isOn, setIsOn] = useState(initialValue);
	return (
		<ToggleContext.Provider value={{ isOn, setIsOn }}>
			{children}
		</ToggleContext.Provider>
	);
};

// делать компоненты вот такими составными - необязательно, можно сделать просто отдельными компонентами, просто они все будут использоваться совместо потому что внутри эти компоненты будут использовать Context

ToggleCompound.TextOn = function TextOn() {
	const { isOn } = useContext(ToggleContext);

	if (!isOn) {
		return null;
	}

	return <span>on</span>;
};

ToggleCompound.TextOff = function TextOff() {
	const { isOn } = useContext(ToggleContext);

	if (isOn) {
		return null;
	}

	return <span>off</span>;
};

ToggleCompound.SwitchButton = function SwitchButton() {
	const { setIsOn } = useContext(ToggleContext);
	return <button onClick={() => setIsOn(isOn => !isOn)}>Switch</button>;
};

// ===============

const MenuContext = React.createContext(false);

const MenuAccordion = ({ children }) => {
	const [activeGroup, setActiveGroup] = useState();

	const switchGroup = useCallback((title) => {
		setActiveGroup(activeTitle => activeTitle === title ? undefined : title)
	}, []);

	return (
		<MenuContext.Provider value={{ activeGroup, switchGroup }}>
			{children}
		</MenuContext.Provider>
	);
};

MenuAccordion.Group = function MenuGroup({ children, title }) {
	const {activeGroup, switchGroup} = useContext(MenuContext);
	return (
		<div>
			<button onClick={() => switchGroup(title)} >{title}</button>
			{activeGroup === title && <div>{children}</div>}
		</div>
	);
};

MenuAccordion.Item = function MenuItem({ children, title }) {
	return <div>{title}</div>;
};

export default function CompoundComponents() {
	return (
		<div>
			{/* <Toggle initialValue={false} />
			<ToggleWithNewButton initialValue={false} /> */}
			<ToggleCompound initialValue={false}>
				<ToggleCompound.TextOn />
				<ToggleCompound.TextOff />
				<ToggleCompound.SwitchButton />
			</ToggleCompound>

			{/* ============== */}
			<MenuAccordion>
				<MenuAccordion.Item title='Главная' />
				<MenuAccordion.Group title='Фильм'>
					<MenuAccordion.Item title='Топ' />
					<MenuAccordion.Item title='Популярные' />
					<MenuAccordion.Item title='Мои любимые' />
				</MenuAccordion.Group>
				<MenuAccordion.Group title='Сериал'>
					<MenuAccordion.Item title='Топ' />
					<MenuAccordion.Item title='Популярные' />
					<MenuAccordion.Item title='Мои любимые' />
				</MenuAccordion.Group>
				<MenuAccordion.Group title='Служебное'>
					<MenuAccordion.Item title='О нас' />
					<MenuAccordion.Item title='Вопросы' />
					<MenuAccordion.Item title='Ответы' />
				</MenuAccordion.Group>
			</MenuAccordion>
		</div>
	);
}
