'use server'

import axios from 'axios'

export async function handleSubmit(formData: FormData): Promise<void> {
  try {
    const data = Object.fromEntries(formData.entries());
    await axios.post("/api/contact", data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}
