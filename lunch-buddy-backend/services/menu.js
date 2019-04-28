const express = require('express');
const menuRouter = express.Router();
const axios = require('axios');
const url = 'https://developers.zomato.com/api/v2.1/dailymenu';

menuRouter.get('/', (req, res) => {
    const { res_id } = req.body;

    axios.get(url, {
        params: {
            'user-key': 'cd295cc49e5c8dfd776d34174be1b9af',
            res_id: res_id,
        }
    })
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = menuRouter;

//16507624
