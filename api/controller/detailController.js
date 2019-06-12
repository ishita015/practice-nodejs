const User = require('../model/detailModel');

exports.addUser = async (req, res) =>{
    console.log('init');
    const user = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        cell:req.body.cell,
        email:req.body.email,
        password: req.body.password
    });
    try{
        const result = await user.save();
        res.status(201).json({
            msg: "Added Successfully",
            body: result,
            success: true
        })
    }
    catch(err) {
        res.status(400).json({
            msg: "Backend Error",
            body: err,
            success: false
      })
    }
} 