import { createContext } from 'react'

interface IDataContext {
	data: TreeItem[]
	filteredData: TreeItem[]
	setFilteredData: (data: TreeItem[]) => void
}

const initialState: IDataContext = {
	data: [],
	filteredData: [],
	setFilteredData: () => {},
}

export const DataContext = createContext<IDataContext>(initialState)
