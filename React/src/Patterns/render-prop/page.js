// суть в том, что из главного компонента можно прокинуть данные в render props функци, а компоненты могут их приянть. И еще если render функции типизировать, то у каждой функции могут быть свои пропсы, то есть нам не нужно все пихать в контекст как в compoundComponents, здесь можно точечно передать нужное. Нужно это, например, чтобы передать в popup какие-то части контента

import React from 'react';

const Layout = ({
	renderHeader,
	renderFooter,
	renderMainContent,
	renderSidebarLeft,
	renderSidebarRight,
}) => {
	const [isOpen, setIsOpen] = useState();
	return (
	<div>
		<header className='header'>{renderHeader?.()}</header>
		<button onClick={() => setIsOpen(!isOpen)} >ClickMe</button>
		<div>
			<div className='sidebarLeft'>{renderSidebarLeft?.(isOpen)}</div>
			<div className='mainContent'>{renderMainContent?.()}</div>
			<div className='sidebarRight'>{renderSidebarRight?.(isOpen)}</div>
		</div>
		<footer className='footer'>{renderFooter?.()}</footer>
	</div>
	);
};

export default function RenderProp() {
	return <Layout renderHeader={() => <header>Hello</header>} 
	renderMainContent={() => <div>MainContent</div>}
	renderFooter={() => <footer>Footer</footer>} 
	renderSidebarLeft={(isOpen) => <div>{isOpen ? "Open" : "Closed"}</div>}/>;
}
