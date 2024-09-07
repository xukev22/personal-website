"use server";

import { Resend } from "resend";
import React from "react";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  return !(value || typeof value !== "string" || value.length > maxLength);
};

const getErrorMessage = (error: unknown) => {
  let message = "Something went wrong :(";

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  }

  return message;
};

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (validateString(message, 10000)) {
    return {
      error: "Invalid message",
    };
  }

  if (validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender",
    };
  }

  console.log("run on server");
  console.log(senderEmail);
  console.log(message);

  let data;
  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "xukev22@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      //   text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }
  return { data };
};
