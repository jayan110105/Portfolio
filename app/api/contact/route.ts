import nodemailer from "nodemailer";

interface RequestBody {
    name: string;
    email: string;
    message: string;
}

interface MailOptions {
    from: string;
    to: string | undefined;
    subject: string;
    text: string;
}

export async function POST(request: Request): Promise<Response> {
    try {
        const body: RequestBody = await request.json(); // Parse incoming JSON body
        const { name, email, message } = body;

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: "gmail", // Replace with your email provider
            auth: {
                user: process.env.EMAIL_USER as string,
                pass: process.env.EMAIL_PASS as string,
            },
        });

        // Mail options
        const mailOptions: MailOptions = {
            from: email,
            to: process.env.EMAIL_TO, // Your receiving email
            subject: `New Message from ${name}`,
            text: `Message: ${message}\nFrom: ${name} (${email})`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
    }
}