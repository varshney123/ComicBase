var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

router.route('/v1/users')
  .post(userController.postusers)
  .get(userController.getusers)
  .put(userController.updateUsers)

router.route('/v1/comments')
  .post(userController.postcomments)

router.route('/v1/series')
  .post(userController.postseries)
  .get(userController.getseries)
  .put(userController.updateSeries)

router.route('/v1/seasons')
  .post(userController.postseasons)
  .get(userController.getseasons)
  .put(userController.updateSeasons)


router.route('/v1/comics')
  .post(userController.postcomics)
  .get(userController.getcomics)
  .put(userController.updateComics)


router.route('/v1/Verify')
  .post(userController.checkusers);

router.route('/v1/Search/:reg')
  .get(userController.searchdata);

router.route('/v1/SearchSeason/:_id')
  .get(userController.searchSeason);
  
router.route('/v1/SearchComic/:_id')
  .get(userController.searchComic); 

router.route('/v1/SearchComment/:_id')
  .get(userController.searchcomment);  

router.route('/v1/users/:username')
  .delete(userController.deleteUsers)

router.route('/v1/series/:_id')
  .delete(userController.deleteSeries)

router.route('/v1/seasons/:_id')
  .delete(userController.deleteSeasons)

router.route('/v1/comics/:_id')
  .delete(userController.deleteComics)

router.route('/v1/verifyemail/:id')
  .get(userController.verifyemail)
  
module.exports = router;