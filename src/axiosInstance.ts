import axios from 'axios'


export interface IResponse<D> {
    data:D
    status:string
}
const instance = axios.create({
    baseURL:'/api'
})
const libItem= {
    "owned":false,
    "libName":"dayjs",
    "des":"类似moment.js的时间戳转换库，但是体积很小。使用简单",
    "github":"https://github.com/iamkun/dayjs",
    "npm":"https://www.npmjs.com/package/dayjs",
    "env":0,
    "cdn":"",
    "state":1
}
export type LIB_ITEM = typeof libItem

export default instance