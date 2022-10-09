const express = require('express');
const Profiles = require('../models/profiles');

const router = express.Router();

// Saving Profiles
router.post('/profiles/save', (req, res) => {
    let newProfile = new Profiles(req.body);
    newProfile.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Profiles Saved Successfully"
        });
    });
});

// Retrieving Profiles
router.get('/profiles', (req, res) => {
    Profiles.find().exec((err, profiles) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:true,
            existingProfiles: profiles
        });
    });
});

// Update Profiles
router.put('/profile/update/:id', (req, res) => {
    Profiles.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, profile) =>{
            if(err){
                return res.status(400).json({error: err});
            }
            return res.status(200).json({
                success: "Updated Successfully"
            });
        }
    );
});

// Delete Profile
router.delete('/profile/delete/:id', (req, res) => {
    Profiles.findByIdAndRemove(req.params.id).exec((err, deletedProfile) => {
        if(err){
            return res.status(400).json({
                message: "Delete Unsuccessfull"
            });
        }
        return res.json({
            message: "Deleted Successfully", deletedProfile
        });
    });
});

module.exports = router;