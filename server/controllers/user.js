
var User = require("../models/users");
var Series = require("../models/series");
var Season = require("../models/seasons");
var Comic = require("../models/comics");

exports.postusers = function (req, res) {
    var user = new User({
        UserType_ID: req.body.UserType_ID,
        username: req.body.username,
        password: req.body.password,
        created_at: new Date(),
        updated_at: ""
    });

    user.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        }
        )

    });
};

exports.getusers = function (req, res) {
    User.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        });
    })
}

exports.postseries = function (req, res) {
    var series = new Series({

        Series_ID: req.body.Series_ID,
        Series_Name: req.body.Series_Name,
        Series_Data: req.body.Series_Data,
        created_at: new Date(),
        updated_at: ""
    });

    series.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        })

    });
};

exports.getseries = function (req, res) {
    Series.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        });
    })
}

exports.postseasons = function (req, res) {
    var seasons = new Season({
        Season_Name: req.body.Season_Name,
        Season_Data: req.body.Season_Data,
        Series_ID: req.body.Series_ID,
        Season_ID: req.body.Season_ID,
        Starts_On: req.body.Starts_On,
        Ends_On: req.body.Ends_On,
        created_at: new Date(),
        updated_at: ""
    });

    seasons.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        })

    });
};

exports.getseasons = function (req, res) {
    Season.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        });
    })
}


exports.postcomics = function (req, res) {
    var comic = new Comic({
        Season_ID: req.body.Season_ID,
        Comic_ID: req.body.Comic_ID,
        Comic_Name: req.body.Comic_Name,
        Comic_Image: req.body.Comic_Image,
        Comic_Data: req.body.Comic_Data,
        Comic_Comments: req.body.Comic_Comments,
        created_at: new Date(),
        updated_at: ""
    });

    comic.save(function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        })

    });
};

exports.getcomics = function (req, res) {
    Comic.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json({
            "status": true,
            "respData": {
                "data": response
            }
        });
    })
}
exports.searchdata = function (req, res) {
    console.log(req.params.reg);
    var regex = RegExp(req.params.reg);

    Comic.find({
        Comic_Name: regex
    }, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }
        if ((response || []).length === 0) {
            return res.json({
                "status": false,
                "respData": {
                    "data": "no results found"
                }
            });
        }
        return res.json({
            "status": true,
            "respData": {
                "data": response
            }
        });
    })
};
exports.checkusers = function (req, res) {

    username1 = req.body.username;
    password1 = req.body.password;
    console.log(username1);
    User.find({
        username: username1,
        password: password1
    }, function (err, response) {
        if (err) {
            res.json(err);
        }
        if (response) {
            res.json({
                "status": true,
                "respData": {
                    "data": response
                }
            });
        }
        else {
            res.json({
                "status": false,
                "respData": {
                    "data": "user does not exist"
                }
            });
        }
    });
}
exports.updateUsers = function (req, res) {
    var username = req.body.username;
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            res.json(err);
        }
        var UserType_ID = req.body.UserType_ID
        var password = req.body.password;
        user.password = password;
        user.UserType_ID = UserType_ID;
        user.updated_at = new Date();

        user.save(function (err, response) {
            if (err) {
                res.json(err);
            }

            res.json({
                "status": true,
                "respData": {
                    "data": response
                }
            });
        })
    })
}

exports.deleteUsers = function (req, res) {
    var username = req.params.username;
    User.findOne({ username: username }, function (err, user) {
        if (err) {
            res.json(err);
        }

        if (user) {
            User.remove({ username: username }, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    "status": true,
                    "respData": {
                        "data": "success"
                    }
                });
            })
        } else {
            res.json({
                "status": false,
                "respData": {
                    "data": "User Does not Exist"
                }
            });
        }

    })
}

exports.updateSeries = function (req, res) {
    var _id = req.body._id;
    Series.findOne({ _id: _id }, function (err, series) {
        if (err) {
            res.json(err);
        }
        var Series_Name = req.body.Series_Name;
        var Series_Data = req.body.Series_Data;
        series.Series_Name = Series_Name;
        series.Series_Data = Series_Data;
        series.updated_at = new Date();

        series.save(function (err, response) {
            if (err) {
                res.json(err);
            }

            res.json({
                "status": true,
                "respData": {
                    "data": response
                }
            });
        })
    })
}

exports.deleteSeries = function (req, res) {
    var _id = req.params._id;
    Series.findOne({ _id: _id }, function (err, series) {
        if (err) {
            res.json(err);
        }

        if (series) {
            Series.remove({ _id: _id }, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    "status": true,
                    "respData": {
                        "data": "success"
                    }
                });
            })
        } else {
            res.json({
                "status": false,
                "respData": {
                    "data": "User Does not Exist"
                }
            });
        }

    })
}
exports.updateSeasons = function (req, res) {
    var _id = req.body._id;
    Season.findOne({ _id: _id }, function (err, season) {
        if (err) {
            res.json(err);
        }
        var Season_Name = req.body.Season_Name;
        var Season_Data = req.body.Season_Data;
        var Starts_On = req.body.Starts_On;
        var Ends_On = req.body.Ends_On;
        season.Season_Name = Season_Name;
        season.Season_Data = Season_Data;
        season.Starts_On = Starts_On;
        season.Ends_On = Ends_On;
        season.updated_at = new Date();

        season.save(function (err, response) {
            if (err) {
                res.json(err);
            }

            res.json({
                "status": true,
                "respData": {
                    "data": response
                }
            });
        })
    })
}

exports.deleteSeasons = function (req, res) {
    var _id = req.params._id;
    Season.findOne({ _id: _id }, function (err, season) {
        if (err) {
            res.json(err);
        }

        if (season) {
            Season.remove({ _id: _id }, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    "status": true,
                    "respData": {
                        "data": "success"
                    }
                });
            })
        } else {
            res.json({
                "status": false,
                "respData": {
                    "data": "User Does not Exist"
                }
            });
        }

    })
}
exports.updateComics = function (req, res) {
    var _id = req.body._id;
    Comic.findOne({ _id: _id }, function (err, comic) {
        if (err) {
            res.json(err);
        }
        var Comic_Name = req.body.Comic_Name;
        var Comic_Image = req.body.Comic_Image;
        var Comic_Data = req.body.Comic_Data;
        var Comic_Comments = req.body.Comic_Comments;
        comic.Comic_Name = Comic_Name;
        comic.Comic_Image = Comic_Image;
        comic.Comic_Data = Comic_Data;
        comic.Comic_Comments = Comic_Comments;
        comic.updated_at = new Date();

        comic.save(function (err, response) {
            if (err) {
                res.json(err);
            }

            res.json({
                "status": true,
                "respData": {
                    "data": response
                }
            });
        })
    })
}

exports.deleteComics = function (req, res) {
    var _id = req.params._id;
    Comic.findOne({ _id: _id }, function (err, comic) {
        if (err) {
            res.json(err);
        }

        if (comic) {
            Comic.remove({ _id: _id }, function (err) {
                if (err) {
                    res.json(err);
                }

                res.json({
                    "status": true,
                    "respData": {
                        "data": "success"
                    }
                });
            })
        } else {
            res.json({
                "status": false,
                "respData": {
                    "data": "User Does not Exist"
                }
            });
        }

    })
}





