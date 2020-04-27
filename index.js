import React from 'react'
	import ReactDOM from 'react-dom'
	import Chess from './Chess'
	import { DndProvider } from 'react-dnd'
	import Backend from 'react-dnd-html5-backend'

	function App() {
		return (
			<div className="App">
				<DndProvider backend={Backend}>
					<Chess />
				</DndProvider>
			</div>
		)
	}

	const rootElement = document.getElementById('root')
	ReactDOM.render(<App />, rootElement)
