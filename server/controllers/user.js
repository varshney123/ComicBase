
var User = require("../models/users");
var Series = require("../models/series");
var Season = require("../models/seasons");
var Comic = require("../models/comics");
 var FileSystem =require('fs');
 var Comment=require("../models/comments")


exports.postcomments = function (req, res) {
    var comment = new Comment({
        Comic_ID: req.body.Comic_ID,
        Comment: req.body.Comment,
        created_at: new Date(),
        updated_at: ""
    });

    comment.save(function (err, response) {
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

exports.searchcomment = function (req, res) {
    console.log(req.params._id);
    var Comic_ID = req.params._id;

    Comment.find({
        Comic_ID: Comic_ID
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
        Series_ID:req.body.Series_ID,
        Comic_Name: req.body.Comic_Name,
        Comic_Image: req.body.Comic_Image,
        Comic_Data: req.body.Comic_Data,
        Comic_Comments: req.body.Comic_Comments,
        created_at: new Date(),
        updated_at: ""
    });


    // comic.save(function (err, aakash) {
    //     if (err) {
    //         return res.json(req, res, err);
    //     }

let image = comic.Comic_Image;
let imageGroup=comic.Comic_Name;
let matches = image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/)

// An empty object
let response = {}

if (matches.length !== 3) {
 return new Error('Invalid input string')
}
// Image type (i.e. image/jpeg)
response.type = matches[1]
 console.log(matches[1]+'match 1');
// Image base64 data
response.data = new Buffer(matches[2], 'base64')
 //console.log(matches[2]+'match 2');
 

var data = imageNameData(image);

function imageNameData(data) {
    console.log("inside function")
        var imageName =  imageGroup+  '_' + Math.random();
        if (data.indexOf('image/jpeg') > -1) {
            return imageName + '.jpeg';
        }
        if (data.indexOf('image/png') > -1) {
            return imageName + '.png';
        }
        if (data.indexOf('image/gif') > -1) {
            return imageName + '.gif';
        }
}


 var imageName = '/home/user/Desktop/localcomicbase/series_node' + '/' + data;
//console.log(imageName);
FileSystem.writeFile(imageName, response.data, function (error) {
   // console.log(response.data);
 if (error) throw error
})
   comic.Comic_Image=data;
   //console.log(comic.Comic_Image);
   comic.save(function (err, aakash) {
        if (err) {
            return res.json(req, res, err);
        }


        res.json({
            "status": true,
            "respData": {
                "data": aakash
            }
        })

    });
};

exports.getcomics = function (req, res) {
    Comic.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }
      

     //   console.log(response[loop].Comic_Image);
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
exports.searchSeason = function (req, res) {
    console.log(req.params._id);
    var id = req.params._id;

    Season.find({
        Series_ID: id
    }, function (err, response) {
       // console.log(response);
        if (err) {
            return res.json(err);
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
exports.searchComic = function (req, res) {
    console.log(req.params._id);
    var id = req.params._id;

    Comic.find({
        Season_ID: id
    }, function (err, response) {
       // console.log(response);
        if (err) {
            return res.json(err);
        }
        for(var loop=0;loop<response.length;loop++)
{
 response[loop].Comic_Image='http://localhost:4000/'+ response[loop].Comic_Image;
 console.log(response[loop].Comic_Image);

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





