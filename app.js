const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//set global app configuration variable for templating
app.set('view engine', 'ejs');
//if we wanted seperate engines for seperate views
app.set('views', 'views')

const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {docTitle:'Page Not Found'});
})

app.listen(3000)
