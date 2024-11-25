import emailjs from "@emailjs/browser";

interface SendEmailProp {
  sender: string;
  receiver: string;
}

export async function sendEmailEmailjs({ sender, receiver }: SendEmailProp) {
  const templateParams = {
    sender,
    receiver,
  };

  return await emailjs.send(
    import.meta.env.VITE_EMAIL_SERVICE_ID,
    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
    templateParams,
    {
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    }
  );
}
