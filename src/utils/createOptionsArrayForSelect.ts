const createOptionsArrayForSelect = (arr: any[], {value, label}: {value: string, label: string}) => {
  return arr.map(data => ({value: data[value], label: data[label]}))
}
export default createOptionsArrayForSelect