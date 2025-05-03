import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "server.mpi.ktv.mybluehostin.me", 
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_PORT == 465,  // Use TLS for 465, else use STARTTLS (587)
    pool: true,
    maxConnections: 5,
    maxMessages: 10,
    auth: {
        user: process.env.SMTP_USER || "info@sumadhurafolium.co",
        pass: process.env.SMTP_PASS || "City@12345#"
    }
});

// Test the transporter connection before running the server
transporter.verify((error, success) => {
    if (error) {
        console.error('Error setting up transporter:', error);
    } else {
        console.log('SMTP transporter is ready to send emails');
    }
});

const sendEmail = async(req, res)=>{
    if (!req.body.email || !req.body.number) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const emailContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email from Brikzy</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
            }
    
            .email-container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
    
            h1 {
                color: #1a73e8;
                font-size: 24px;
                text-align: center;
                margin-bottom: 20px;
            }
    
            h4 {
                font-size: 16px;
                line-height: 1.6;
                color: #555;
            }
    
            .email-content {
                padding: 15px;
                background-color: #fafafa;
                border-radius: 6px;
                margin-bottom: 20px;
            }
    
            .email-content p {
                margin: 5px 0;
            }
    
            .footer {
                text-align: center;
                font-size: 14px;
                color: #999;
                margin-top: 20px;
            }
    
            .footer a {
                color: #1a73e8;
                text-decoration: none;
            }
    
            .footer p {
                margin: 5px 0;
            }
    
            .brikzy-logo {
                max-width: 100px;
                margin: 10px 0;
                display: block;
                margin-left: auto;
                margin-right: auto;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <!-- Company Logo -->
            <img src="https://brikzy.in/logo1.png" alt="Brikzy Logo" class="brikzy-logo" />
    
            <!-- Email Heading -->
            <h1>New Enquiry from Brikzy</h1>
    
            <!-- Email Content -->
            <div class="email-content">
                <h4>
                    <strong>Name:</strong> ${req.body.name}<br>
                    <strong>Email:</strong> ${req.body.email}<br>
                    <strong>Mobile Number:</strong> ${req.body.number}<br>
                    ${req.body.country_code ? `<strong>Country Code:</strong> ${req.body.country_code}<br>` : ''}
                    ${req.body.message ? `<strong>Message:</strong> ${req.body.message}<br>` : ''}
                </h4>
            </div>
    
            <!-- Footer Section -->
            <div class="footer">
                <p>&copy; 2025 Brikzy. All rights reserved.</p>
                <p><a href="https://www.brikzy.in">Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>
    `;


    // Send email to company and admin
    try {
        const result = await transporter.sendMail({
            from: `"${req.body.name}" <m2ndigitalagency@gmail.com>`,
            to: req.body.company_email || 'info@mndigital.in',
            subject: `New Enquiry from Brikzy`,
            html: emailContent,
            replyTo: req.body.email
        });
        res.status(200).json({
            success: true,
            message: "Processing your request, we will notify you shortly.",
            data: result
        });
    } catch (error) {
        console.error("Error sending email:", error); // Log detailed error on server side
        res.status(500).json({
            success: false,
            message: "Something went wrong, please try again later.",
            error: error.message
        });
    }
}

export default sendEmail