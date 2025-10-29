const ThreeFilterForm = require('../models/form.cjs');
const sendEmail = require('../utils/sendmail.cjs');
const fillCon=async(req,res)=>{
  try {
    const {firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer, partDescription, } = req.body;
console.log('req',req)
    const newForm = new ThreeFilterForm({firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer, partDescription,});
await newForm.save();

     const subject = 'New Contact Form Submission';
        const html = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #0056b3;">New Contact Submission</h2>
        <p><strong> Name:</strong> ${firstName}  ${lastName}</p>
        
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Part:</strong> ${part}</p>
        <p><strong>Modality:</strong> ${modality}</p>
        <p><strong>Manufacturer:</strong> ${manufacturer}</p>
        <p><strong>Part Description:</strong> ${partDescription}</p>
        <hr/>
        <p style="font-size: 13px; color: #888;">This message was generated automatically from your website form.</p>
      </div>
          
         
        `;

        // Send email asynchronously
       await sendEmail({
            subject,
            html,
               text: `New form submission from ${firstName} ${lastName}`, 
            to: 'alishazmina7@gmail.com',  // receiver
            from: process.env.GMAIL_USER    // authenticated sender
        }).catch(err => console.error('Email failed:', err));


    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: 'Server error while submitting form' });
  }
};

module.exports=fillCon