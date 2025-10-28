const router=require('express').Router()
const formCon=require('../controllers/formcon.cjs')
const formVal=require('../middleware/formval.cjs')


router.post('/form',formVal,formCon)

module.exports=router