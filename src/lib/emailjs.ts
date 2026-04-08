import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string;

export interface ContactPayload {
  name:       string;
  from_email: string;
  message:    string;
  time:       string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error("EmailJS is not configured. Please set the VITE_EMAILJS_* environment variables.");
  }

  const result = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    payload as unknown as Record<string, unknown>,
    { publicKey: PUBLIC_KEY },
  );

  if (result.status !== 200) {
    throw new Error(`EmailJS error ${result.status}: ${result.text}`);
  }
}
