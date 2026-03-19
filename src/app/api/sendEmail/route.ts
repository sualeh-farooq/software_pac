import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const emailUser = process.env.NEXT_SECRET_EMAIL_USER;
    const emailPass = process.env.NEXT_SECRET_EMAIL_PASS;
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (!emailUser || !emailPass) {
      console.error("Missing email credentials: set NEXT_SECRET_EMAIL_USER and NEXT_SECRET_EMAIL_PASS in .env");
      return NextResponse.json(
        { message: "Email service is not configured" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { formType, token } = body;

    // reCAPTCHA verification
    if (recaptchaSecret && token) {
      try {
        const verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
        const response = await fetch(verifyUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: recaptchaSecret,
            response: token,
          }),
        });

        const { success, score } = await response.json();
        const isDev = process.env.NODE_ENV === "development";

        if (!isDev && (!success || score < 0.5)) {
          return NextResponse.json(
            { message: "Failed reCAPTCHA verification", score },
            { status: 400 }
          );
        }
      } catch (captchaError) {
        console.error("reCAPTCHA verification error:", captchaError);
        if (process.env.NODE_ENV === "production") {
          return NextResponse.json({ message: "Error verifying reCAPTCHA" }, { status: 400 });
        }
      }
    }

    // Configure transporter with environment variables
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    let mailOptions;
    let clientMailOptions;

    // Route to correct template based on formType
    if (formType === "partner") {
      // PARTNER FORM
      const { firstName, lastName, company, email, phone, businessPhone, website, industry } = body;
      
      mailOptions = {
        from: email,
        to: emailUser,
        subject: "New Partnership Inquiry - Black Flag Funding",
        html: getPartnerAdminTemplate({ firstName, lastName, company, email, phone, businessPhone, website, industry }),
      };

      clientMailOptions = {
        from: `Black Flag Funding <${emailUser}>`,
        to: email,
        subject: "Partnership Inquiry Received - Black Flag Funding",
        html: getPartnerClientTemplate({ firstName, lastName, company }),
      };
    } else if (formType === "funding") {
      // BUSINESS FUNDING FORM
      const { name, legalName, phone, email, timeInBusiness, monthlyRevenue, desiredFunding, industry } = body;
      
      mailOptions = {
        from: email,
        to: emailUser,
        subject: "New Funding Request - Black Flag Funding",
        html: getFundingAdminTemplate({ name, legalName, phone, email, timeInBusiness, monthlyRevenue, desiredFunding, industry }),
      };

      clientMailOptions = {
        from: `Black Flag Funding <${emailUser}>`,
        to: email,
        subject: "Funding Request Received - Black Flag Funding",
        html: getFundingClientTemplate({ name, legalName }),
      };
    } else {
      // MAIN CONTACT FORM
      const { firstName, lastName, phone, email, note } = body;
      
      mailOptions = {
        from: email,
        to: emailUser,
        subject: "New Contact Form Submission - Black Flag Funding",
        html: getContactAdminTemplate({ firstName, lastName, phone, email, note }),
      };

      clientMailOptions = {
        from: `Black Flag Funding <${emailUser}>`,
        to: email,
        subject: "We Received Your Message - Black Flag Funding",
        html: getContactClientTemplate({ firstName, lastName }),
      };
    }

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(clientMailOptions);
    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}


// PARTNER FORM TEMPLATES
function getPartnerAdminTemplate(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc">
    <tr>
      <td align="center" style="padding:40px 20px">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#9E1B20 0%,#D4434A 100%);padding:40px 30px;text-align:center">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700">New Partnership Inquiry</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px">Black Flag Funding</p>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:40px 30px">
              <div style="background:#f8fafc;border-left:4px solid #9E1B20;padding:20px;margin-bottom:30px;border-radius:8px">
                <h2 style="margin:0 0 20px;color:#1A1C1F;font-size:20px;font-weight:600">Partner Details</h2>
                <table width="100%" cellpadding="8" cellspacing="0" border="0">
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600;width:40%">Name:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.firstName} ${data.lastName}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Company:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.company}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Email:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Phone:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.phone}</td>
                  </tr>
                  ${data.businessPhone ? `<tr><td style="color:#666;font-size:14px;font-weight:600">Business Phone:</td><td style="color:#1A1C1F;font-size:14px">${data.businessPhone}</td></tr>` : ''}
                  ${data.website ? `<tr><td style="color:#666;font-size:14px;font-weight:600">Website:</td><td style="color:#1A1C1F;font-size:14px">${data.website}</td></tr>` : ''}
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Industry:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.industry}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#1A1C1F;padding:20px 30px;text-align:center">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:14px">&copy; ${new Date().getFullYear()} Black Flag Funding. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function getPartnerClientTemplate(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc">
    <tr>
      <td align="center" style="padding:40px 20px">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)">
          <tr>
            <td style="background:linear-gradient(135deg,#9E1B20 0%,#D4434A 100%);padding:40px 30px;text-align:center">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700">Thank You, ${data.firstName}!</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px">We received your partnership inquiry</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px">
              <p style="margin:0 0 20px;color:#1A1C1F;font-size:16px;line-height:1.6">Dear ${data.firstName} ${data.lastName},</p>
              <p style="margin:0 0 20px;color:#666;font-size:15px;line-height:1.6">Thank you for your interest in partnering with Black Flag Funding. We've received your inquiry and our team will review it shortly.</p>
              <div style="background:#f8fafc;border-left:4px solid #9E1B20;padding:20px;margin:30px 0;border-radius:8px">
                <h3 style="margin:0 0 15px;color:#1A1C1F;font-size:18px;font-weight:600">What's Next?</h3>
                <ul style="margin:0;padding-left:20px;color:#666;font-size:14px;line-height:1.8">
                  <li>Our partnership team will review your application</li>
                  <li>We'll reach out within 1-2 business days</li>
                  <li>We'll discuss partnership opportunities and next steps</li>
                </ul>
              </div>
              <p style="margin:0;color:#666;font-size:15px;line-height:1.6">If you have any questions, feel free to reply to this email.</p>
            </td>
          </tr>
          <tr>
            <td style="background:#1A1C1F;padding:20px 30px;text-align:center">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:14px">&copy; ${new Date().getFullYear()} Black Flag Funding. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// FUNDING FORM TEMPLATES
function getFundingAdminTemplate(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc">
    <tr>
      <td align="center" style="padding:40px 20px">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)">
          <tr>
            <td style="background:linear-gradient(135deg,#9E1B20 0%,#D4434A 100%);padding:40px 30px;text-align:center">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700">New Funding Request</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px">Black Flag Funding</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px">
              <div style="background:#f8fafc;border-left:4px solid #9E1B20;padding:20px;margin-bottom:30px;border-radius:8px">
                <h2 style="margin:0 0 20px;color:#1A1C1F;font-size:20px;font-weight:600">Business Information</h2>
                <table width="100%" cellpadding="8" cellspacing="0" border="0">
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600;width:40%">Contact Name:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Business Name:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.legalName}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Email:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Phone:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Time in Business:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.timeInBusiness}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Monthly Revenue:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.monthlyRevenue}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Desired Funding:</td>
                    <td style="color:#1A1C1F;font-size:14px;font-weight:700;color:#9E1B20">${data.desiredFunding}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Industry:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.industry}</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#1A1C1F;padding:20px 30px;text-align:center">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:14px">&copy; ${new Date().getFullYear()} Black Flag Funding. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function getFundingClientTemplate(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc">
    <tr>
      <td align="center" style="padding:40px 20px">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)">
          <tr>
            <td style="background:linear-gradient(135deg,#9E1B20 0%,#D4434A 100%);padding:40px 30px;text-align:center">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700">Thank You, ${data.name}!</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px">Your funding request has been received</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px">
              <p style="margin:0 0 20px;color:#1A1C1F;font-size:16px;line-height:1.6">Dear ${data.name},</p>
              <p style="margin:0 0 20px;color:#666;font-size:15px;line-height:1.6">Thank you for choosing Black Flag Funding. We've received your funding request for <strong>${data.legalName}</strong> and our team is reviewing it now.</p>
              <div style="background:#f8fafc;border-left:4px solid #9E1B20;padding:20px;margin:30px 0;border-radius:8px">
                <h3 style="margin:0 0 15px;color:#1A1C1F;font-size:18px;font-weight:600">Next Steps</h3>
                <ul style="margin:0;padding-left:20px;color:#666;font-size:14px;line-height:1.8">
                  <li>Our funding specialists will review your application</li>
                  <li>We'll contact you within 24 hours to discuss options</li>
                  <li>We'll work together to find the best funding solution</li>
                </ul>
              </div>
              <p style="margin:0;color:#666;font-size:15px;line-height:1.6">We're committed to helping your business grow. If you have any questions, don't hesitate to reach out.</p>
            </td>
          </tr>
          <tr>
            <td style="background:#1A1C1F;padding:20px 30px;text-align:center">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:14px">&copy; ${new Date().getFullYear()} Black Flag Funding. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

// CONTACT FORM TEMPLATES
function getContactAdminTemplate(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc">
    <tr>
      <td align="center" style="padding:40px 20px">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)">
          <tr>
            <td style="background:linear-gradient(135deg,#9E1B20 0%,#D4434A 100%);padding:40px 30px;text-align:center">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700">New Contact Message</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px">Black Flag Funding</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px">
              <div style="background:#f8fafc;border-left:4px solid #9E1B20;padding:20px;margin-bottom:30px;border-radius:8px">
                <h2 style="margin:0 0 20px;color:#1A1C1F;font-size:20px;font-weight:600">Contact Details</h2>
                <table width="100%" cellpadding="8" cellspacing="0" border="0">
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600;width:30%">Name:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.firstName} ${data.lastName}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Email:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="color:#666;font-size:14px;font-weight:600">Phone:</td>
                    <td style="color:#1A1C1F;font-size:14px">${data.phone}</td>
                  </tr>
                  ${data.note ? `<tr><td style="color:#666;font-size:14px;font-weight:600;vertical-align:top">Message:</td><td style="color:#1A1C1F;font-size:14px;line-height:1.6">${data.note}</td></tr>` : ''}
                </table>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#1A1C1F;padding:20px 30px;text-align:center">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:14px">&copy; ${new Date().getFullYear()} Black Flag Funding. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function getContactClientTemplate(data: any) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f8fafc">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8fafc">
    <tr>
      <td align="center" style="padding:40px 20px">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1)">
          <tr>
            <td style="background:linear-gradient(135deg,#9E1B20 0%,#D4434A 100%);padding:40px 30px;text-align:center">
              <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700">Thank You, ${data.firstName}!</h1>
              <p style="margin:10px 0 0;color:rgba(255,255,255,0.9);font-size:16px">We received your message</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 30px">
              <p style="margin:0 0 20px;color:#1A1C1F;font-size:16px;line-height:1.6">Dear ${data.firstName} ${data.lastName},</p>
              <p style="margin:0 0 20px;color:#666;font-size:15px;line-height:1.6">Thank you for reaching out to Black Flag Funding. We've received your message and our team will get back to you shortly.</p>
              <div style="background:#f8fafc;border-left:4px solid #9E1B20;padding:20px;margin:30px 0;border-radius:8px">
                <h3 style="margin:0 0 15px;color:#1A1C1F;font-size:18px;font-weight:600">What Happens Next?</h3>
                <ul style="margin:0;padding-left:20px;color:#666;font-size:14px;line-height:1.8">
                  <li>Our team will review your inquiry</li>
                  <li>We'll respond within 1 business day</li>
                  <li>We'll provide the information you need</li>
                </ul>
              </div>
              <p style="margin:0;color:#666;font-size:15px;line-height:1.6">We appreciate your interest in our services and look forward to speaking with you soon.</p>
            </td>
          </tr>
          <tr>
            <td style="background:#1A1C1F;padding:20px 30px;text-align:center">
              <p style="margin:0;color:rgba(255,255,255,0.7);font-size:14px">&copy; ${new Date().getFullYear()} Black Flag Funding. All Rights Reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}