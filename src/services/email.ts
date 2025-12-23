import emailjs from '@emailjs/browser';

emailjs.init({
  publicKey: process.env.REACT_APP_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    throttle: 10000
  }
});

export const sendEmail = async (to: string, templateParams: any) => {
  const response = await emailjs.send(process.env.REACT_APP_SERVICE_ID || '', process.env.REACT_APP_TEMPLATE_ID || '', templateParams, {
    from_name: process.env.REACT_APP_FROM_EMAIL || '',
    to_name: to
  } as any);
};
