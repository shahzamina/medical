const ThreeFilterForm = require('../models/form.cjs');
const fillCon=async(req,res)=>{
  try {
    const {firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer, partDescription, } = req.body;
console.log('req',req)
    const newForm = new ThreeFilterForm({firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer, partDescription,});

    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: 'Server error while submitting form' });
  }
};

module.exports=fillCon