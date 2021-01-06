////--CREATING SERVER--////
const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

////--STATIC CONTENT FOR APP--////
app.use(express.static('public'));

////--DATA PARSING FOR APP--////
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

////--SET HANDLEBARS--//// 
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

////--ALLOW ACCESS TO ROUTES BY IMPORT--////
const routes = require('./controllers/burgers_controllers.js');

app.use(routes);

////--START SERVER TO BEGIN LISTENING--////
app.listen(PORT, () => 
    console.log(`Server listening on: http://localhost:${PORT}`)
);