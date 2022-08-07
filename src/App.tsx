import { TreeList } from 'components'
import { DataContextProvider } from 'services'
import classes from './App.module.scss'

function App() {
	return (
		<DataContextProvider>
			<div className={classes.app}>
				<TreeList />
			</div>
		</DataContextProvider>
	)
}

export default App
