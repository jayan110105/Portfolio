'use server'

export async function handleSubmit(formData: FormData) {
  // Handle form submission here
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  // For now, let's just log the data
  console.log({ name, email, message })

  // In a real application, you would send an email or save to a database here

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return

  // return { success: true, message: 'Message sent successfully!' }
}
