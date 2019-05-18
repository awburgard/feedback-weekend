const express = require('./node_modules/express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
    const feedbackQuery = `SELECT * FROM "feedback" ORDER BY "feeling" ASC;`;
    pool.query(feedbackQuery)
    .then((response)=>{
        res.send(response.rows)
    })
    .catch((err)=>{
        console.log('Error getting data from the database', err);
        res.sendStatus(500);
    })
})

router.post('/', (req, res)=>{
    const fbObject = req.body;
    const feedbackQuery = `INSERT INTO "feedback" ("feeling",  "understanding", "support", "comments")
                            VALUES ($1, $2, $3, $4);`;
    pool.query(feedbackQuery, [fbObject.feeling, fbObject.understanding, fbObject.support, fbObject.comments])
    .then((res) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log('Error saving to database:', err)
        res.sendStatus(500)
    });
});


module.exports = router;