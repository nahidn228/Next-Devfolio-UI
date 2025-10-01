"use client";

import { Cover } from "@/components/ui/cover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin } from "lucide-react";
import { useRef, FormEvent } from "react";
import { toast } from "sonner";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const firstName = form.current.user_name1.value;
    const lastName = form.current.user_name2.value;
    const message = form.current.message.value;
    const user_email = form.current.user_email.value;

    if (!firstName || !lastName || !message || !user_email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_qhagd56",
        "template_ixjefxm",
        form.current,
        "TaidNrDtbWZlrfLKl"
      )
      .then(
        () => {
          toast.success("Thank you for reaching out! 🎉");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  const contacts = [
    {
      icon: <MapPin className="w-5 h-5 " />,
      label: "Dhaka, Bangladesh",
    },
    {
      icon: <Mail className="w-5 h-5 " />,
      label: "nahid228@gmail.com",
      href: "mailto:nahid228@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 " />,
      label: "+880 1798324439",
      href: "tel:+8801798324439",
    },
    
  
  ];

  return (
    <div id="contact" className="max-w-[900px] mx-auto my-10 p-4 rounded-2xl">
      <h2 className="text-center text-4xl font-bold pb-10 md:pb-20">
        Do you have a project? <Cover>Let&apos;s Discuss</Cover>
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 ">
        {/* Left Section - Contact Info and Text */}
        <div className="lg:w-1/2 w-full  ">
          <p className="text-blue-400 text-base font-bold mb-2">● Contact Me</p>

          <p className=" text-lg mt-4 max-w-lg">
            Are you ready to take your project to the next level? Whether
            you&apos;re looking for a new website, a web application, or simply
            need advice.
          </p>

          <div className="mt-10 space-y-6">
            {contacts.map((contact, idx) => (
              <div key={idx} className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/20 bg-opacity-20 flex-shrink-0">
                  {contact.icon}
                </div>
                <div>
                  <h3 className=" text-lg font-semibold">
                    {contact.label}
                  </h3>
                  {contact.href && (
                    <a
                      href={contact.href}
                      className=" text-muted-foreground transition-colors"
                    >
                      {contact.label}
                    </a>
                  )}
                  {!contact.href && (
                    <p className="text-muted-foreground">{contact.label}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:w-1/2 p-6 bg-white/5 backdrop-blur-md rounded-xl shadow-md dark:bg-black">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
            Send a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  name="user_name1"
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  name="user_name2"
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="user_email"
                placeholder="your@email.com"
                type="email"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your message"
                className="h-40 resize-none"
              />
            </div>

            <Button
              type="submit"
              className="mt-2 w-full bg-primary text-white transition-all"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
