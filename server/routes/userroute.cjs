const router=require('express').Router()
const formCon=require('../controllers/formcon.cjs')
const formVal=require('../middleware/formval.cjs')

const renCon=require('../controllers/rencon.cjs')
const renVal=require('../middleware/renval.cjs')

router.post('/form',formVal,formCon)
router.post('/rental',renVal,renCon)


module.exports=router