const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const {postFav} = require('../controllers/postFav');
const {getFavs} = require('../controllers/getFavs');
const {deleteFav} = require('../controllers/deleteFav');
const {postUser} = require('../controllers/postUser');
const {login} = require('../controllers/login');


router.get("/onsearch/:id", getCharById);
router.get('/detail/:detailId', getCharDetail);

router.get('/fav',getFavs) 
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

router.get("/login", login)
router.post("/login", postUser)

module.exports = router;