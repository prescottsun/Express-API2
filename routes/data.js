const express = require('express'),
    router = express.Router();

const data = {
    dataSet: [
        {letter: 'a', number: 1},
        {letter: 'b', number: 2},
        {letter: 'c', number: 3}
    ]
};

router.get('/', (req, res) => {
    res.status(200).render('template', {
        locals: {
            title: 'A Data Set',
            dataArray: data.dataSet
        },
        partials: {
            partial: 'partial-data'
        }
    });
});

module.exports = router;