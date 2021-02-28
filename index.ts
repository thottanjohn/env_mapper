/* import { x } from './env'; */
require('dotenv').config();
export default function envMapper(mapper:any){
    for (const property in mapper) {
        process.env[property] = process.env[mapper[property]];
        console.log(`${property}: ${mapper[property]}`);
    }
}

/* let test = envMapper(x);
console.log('DB_NAME',process.env.DB_NAME);
console.log('CLIENT_ID',process.env.CLIENT_ID); */