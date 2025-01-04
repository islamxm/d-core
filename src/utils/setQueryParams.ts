type T = {
  baseUrl: string,
  params: {[key: string]: string}
}

const setQueryParams = ({
  baseUrl,
  params
}: T) => {
  let url: string = baseUrl
  let paramsArr: string[] = []
  for (let key in params) {
    paramsArr = [...paramsArr, `${key}=${params[key]}`]
  }
  return `${url}?${paramsArr.join('&')}`
}

export default setQueryParams;