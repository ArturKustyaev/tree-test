import { FC, PropsWithChildren, useState } from 'react'
import { getRandomData } from 'utils'
import { DataContext } from './DataContext'

const data: TreeItem[] = getRandomData()

interface DataContextProviderProps extends PropsWithChildren {}

export const DataContextProvider: FC<DataContextProviderProps> = ({ children }): JSX.Element => {
	const [filteredData, setFilteredData] = useState<TreeItem[]>(data)

	return (
		<DataContext.Provider value={{ data, filteredData, setFilteredData }}>
			{children}
		</DataContext.Provider>
	)
}
