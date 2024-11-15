import React from "react";
import { Linkedin, Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="text-white-600 body-font bg-[#002b3f]">
        <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img
                src="/logo2.png"
                className="w-10 h-10 text-white p-2 bg-white rounded-full"
                alt="Logo"
              />
              <span className="ml-3 text-xl">Structures Limited</span>
            </div>
            <div className="mt-4 text-sm text-white">
              <p>
                <span className="font-semibold">Address:</span> St # 7A, Khattak
                Plaza, Hostel City, Chak Shahzad, Islamabad.
              </p>
              <p>
                <span className="font-semibold">Phone Number:</span> +92 323
                1540189
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                official@structureslimited.com
              </p>
            </div>

            <div className="flex justify-center mt-6 space-x-4">
              <a
                href="https://www.linkedin.com/company/structures-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/923231540189"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <img
                  src="https://www.svgrepo.com/show/510342/whatsapp.svg"
                  alt="WhatsApp"
                  style={{ width: "24px", height: "24px", filter: "invert(1)" }}
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61562891199756&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/structureslimited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:hr@structureslimited.com" className="text-white">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13283.599943570918!2d73.14343535904348!3d33.659753272913235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb45066e966d%3A0x2e40adc5ec5fdb53!2sStructures%20Limited!5e0!3m2!1sen!2s!4v1731393334615!5m2!1sen!2s"
              width="full"
              height="200"
              className="m-2"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

        <hr />

        <div className="bg-[#002b3f]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-center items-center">
            <p className="text-white text-sm text-center sm:text-left">
              © 2024 Structures Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
