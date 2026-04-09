// "use client";

// import { useState } from "react";
// import { motion } from "motion/react";
import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Hugo Lomba for software development opportunities, collaborations and freelance projects.",
};

export default function ContactPage() {
  return <ContactForm />;
}
