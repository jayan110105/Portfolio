'use server';

import axios from 'axios';

export async function handleSubmit(formData: FormData): Promise<void> {
  try {
    // Convert FormData into a plain object
    const data = Object.fromEntries(formData.entries());

    // Resolve the absolute URL for the API endpoint
    const apiUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api/contact" // Development URL
        : `${process.env.NEXT_PUBLIC_SITE_URL}/api/contact`; // Production URL

    // Send the POST request
    await axios.post(apiUrl, data, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message.");
  }
}
