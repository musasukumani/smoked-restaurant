"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.checkValidity()) { setSent(true); event.currentTarget.reset(); } };
  return <form className="contact-form" onSubmit={submit}><div className="field-row"><label>Name<input required name="name" autoComplete="name" placeholder="Your name"/></label><label>Email<input required type="email" name="email" autoComplete="email" spellCheck={false} placeholder="you@example.com"/></label></div><div className="field-row"><label>Phone<input type="tel" name="phone" autoComplete="tel" placeholder="Your phone number"/></label><label>Subject<input required name="subject" autoComplete="off" placeholder="Reservation, event or question"/></label></div><label>Message<textarea required name="message" autoComplete="off" rows={6} placeholder="Include your preferred date, time and group size"/></label><button className="green-button" type="submit">Send your enquiry <ArrowRight aria-hidden="true"/></button>{sent && <p className="form-success" role="status" aria-live="polite">Thanks. Your enquiry has been received.</p>}</form>;
}
