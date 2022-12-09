import { Options } from 'sequelize';
import {ConfigService} from "../common/config.service";
export interface IDatabaseOptions {
    development: Options,
    production: Options,
}
export const databaseConfig: IDatabaseOptions = {
    development: {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'zl_alex',
        database: 'form-data',
        timezone: '+08:00',
        pool:{
            max:5,
            min:1
        },
    },
    production: {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'zl_alex',
        database: ConfigService.getField('dbName')||"form-data",
        timezone: '+08:00',
        pool:{
            max:100,
            min:1
        },
        // dialectOptions: {
        //     useUTC:false,
        //     // dateStrings: true,
        //     // typeCast:  (field: any, next: any) => { // for reading from database
        //     //     if (field.type === 'DATETIME') {
        //     //         return field.toLocaleString
        //     //     }
        //     //     return next()
        //     // },
        // },
    },
}
