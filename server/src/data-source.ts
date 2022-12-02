import { DataSource } from "typeorm";

require('dotenv').config()

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: process.env.POSTGREE_USER,
    password: process.env.POSTGREE_PASSWORD,
    database: process.env.POSTGREE_DATABASE,

    synchronize: false,
    logging: true,

    entities: ['src/entities/*.ts'],

    migrations: ['src/migrations/*.ts']
    
})

AppDataSource.initialize()
.then(() => console.log('Database inicializado com sucesso'))
.catch((err) => console.log('Erro na conecção com o banco', err))