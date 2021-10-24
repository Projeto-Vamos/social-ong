import axios from "axios"
const PORT =  8088
let HOST =`http://localhost:${PORT}`
// switch(process.env.REACT_APP_ENVIRONMENT){
//     case 'production':
//         HOST = "http://api-projetovamos-com.umbler.net"
//         break
//     case 'test':
//         HOST = "http://api-projetotesti-com.umbler.net"
//         break 
//     default:
//         HOST = `http://localhost:${PORT}`
// }

const PATH = "sistema"
export const API_ADDRESS = `${HOST}/${PATH}`
export const STATIC_SERVER_ADDRESS = `${HOST}/`
//url base
export const api = axios.create({ baseURL: API_ADDRESS })

console.log("ENVIROMENT", process.env.REACT_APP_ENVIRONMENT);
console.log("HOST", HOST);

export default api
