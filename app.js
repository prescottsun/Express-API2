// Required nodes
const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    compression = require('compression'),
    helmet = require('helmet'),
    app = express()
    ;

app.listen(8080, function(){
    console.log('listening on port 8080');
});

// Middleware
app.use(compression());
app.use(helmet());

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

// Routes
const rootController = require('./routes/index'),
    dataController = require('./routes/data'),
    secretController = require('./routes/secret')
;

// Epxress use the router we exported
app.use('/', rootController),
app.use('/data', dataController),
app.use('/secret', secretController)
;