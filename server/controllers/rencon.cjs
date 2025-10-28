const FilterForm = require('../models/rental.cjs');
const RenCon=async(req,res)=>{
  try {
    const {firstName,lastName,companyName,email,phoneNumber,rentalService , partDescription, } = req.body;
console.log('req',req)
  const newForm = new FilterForm({
  firstName,
  lastName,
  companyName,
  email,
  phoneNumber,
  rentalService: rentalService?.value || rentalService, // ✅ extract value if it's an object
  partDescription,
});


    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: 'Server error while submitting form' });
  }
};

module.exports=RenCon