require('dotenv').config();
export default function envMapper(mapper:any){
    for (const property in mapper) {
        process.env[property] = process.env[mapper[property]];
    }
}