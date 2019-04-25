const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller')
const ctrlClinic = require('../controllers/clinic.visit.controller')
const ctrlDailyInfo = require('../controllers/daily.info.controller')
const ctrlTips = require('../controllers/tips.controller')


const auth = require('../config/auth')

//User Routes
router.post('/register', ctrlUser.register)
router.post('/authenticate', ctrlUser.authenticate)

//Patient Routes
router.get('/nurse/patients', auth.verifyJwtToken, ctrlUser.getPatients)

//Clinical Vist Routes
router.post('/nurse/clinic', auth.verifyJwtToken, ctrlClinic.create)
router.get('/nurse/clinic', ctrlClinic.list)
router.get('/nurse/clinic/:id', auth.verifyJwtToken, ctrlClinic.getClinicbyId)
router.post('/nurse/clinic/:id', auth.verifyJwtToken, ctrlClinic.updateClinic)
router.delete('/nurse/clinic/:id', auth.verifyJwtToken, ctrlClinic.deleteClinic)
router.get('/nurse/clinic/patient/:id', auth.verifyJwtToken, ctrlClinic.getClinicbyPatientId)

//Daily Info Routes
//--Patient Role
router.post('/patient/daily', auth.verifyJwtToken, ctrlDailyInfo.create)
router.get('/patient/daily', auth.verifyJwtToken, ctrlDailyInfo.listbyId)
router.get('/patient/daily/:id', auth.verifyJwtToken, ctrlDailyInfo.getDailyInfobyId)
router.post('/patient/daily/:id', auth.verifyJwtToken, ctrlDailyInfo.updateDailyInfo)
router.delete('/patient/daily/:id', auth.verifyJwtToken, ctrlDailyInfo.deleteDailyInfo)

//--Nurse Role
router.get('/nurse/daily', auth.verifyJwtToken, ctrlDailyInfo.list)
router.get('/nurse/daily/:id', auth.verifyJwtToken, ctrlDailyInfo.getDailyInfobyId)


//Tips Routes
//-Nurse Role
router.post('/nurse/tips', auth.verifyJwtToken, ctrlTips.create)
router.get('/nurse/tips', auth.verifyJwtToken, ctrlTips.list)
router.get('/nurse/tips/:id', auth.verifyJwtToken, ctrlTips.getTipsbyId)
router.post('/nurse/tips/:id', auth.verifyJwtToken, ctrlTips.updateTips)
router.delete('/nurse/tips/:id', auth.verifyJwtToken, ctrlTips.deleteTips)

//-Patient Role
router.get('/patient/tips', auth.verifyJwtToken, ctrlTips.listbyId)
router.get('/patient/tips/:id', auth.verifyJwtToken, ctrlTips.getTipsbyId)


module.exports = router;