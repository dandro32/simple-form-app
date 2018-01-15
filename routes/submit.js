var express = require('express');
var router = express.Router();
var FormSubmit = require('./../models/form-submit');

router.route('/')
    .get(function(req, res) {
        FormSubmit.find(function(err, formSubmit) {
            if (err)
                res.send(err);
            res.json(formSubmit)
        });
    })
    .post(function(req, res) {
        var submit = new FormSubmit();
        submit.firstname = req.body.firstname;
        submit.lastname = req.body.lastname;
        submit.email = req.body.email;
        submit.date = req.body.date;

        submit.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Data successfully added!' });
        });
    });

module.exports = router;