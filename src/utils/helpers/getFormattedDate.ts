export const getFormattedDate = (timestamp: number) => {
	const date = new Date(timestamp)

	const day = date.getDate()
	const month = date.getMonth() + 1
	const year = date.getFullYear()

	return `${addZeroToDate(day)}.${addZeroToDate(month)}.${year}`
}

const addZeroToDate = (value: number) => {
	if (value < 10) return `0${value}`
	return value
}
