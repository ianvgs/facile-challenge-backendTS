import express from 'express';
import db from './models';
const app = express();
const port = process.env.PORT||3000;
import cors from 'cors';
import bodyParser from 'body-parser'
import routes from './routes'


db.sequelize.sync().then(() => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*")
        app.use(cors());
        next();
        })
        app.use(bodyParser.urlencoded({ extended: true }))        
        app.use(bodyParser.json())
        app.use(routes)
    app.listen(port, () => {
        console.log(`estou sendo executando na porta ${port}`)
    })

})


