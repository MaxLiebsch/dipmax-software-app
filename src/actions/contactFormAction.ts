interface ContactFormState {
  message: string;
}

export async function contactFormAction(
  prevState: ContactFormState | null,
  formData: FormData
) {
  const { name, email, subject, message } = Object.fromEntries(formData);
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, subject, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return { message: "form.failed" };
    }

    return { message: "form.success" };
  } catch (error) {
    return { message: "form.failed" };
  }
}
