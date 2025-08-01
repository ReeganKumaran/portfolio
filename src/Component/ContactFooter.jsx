import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  Heart,
} from "lucide-react";
import { useTheme } from "../Context/Theme";

const ContactFooter = () => {
  const { theme } = useTheme();
  console.log(theme);
  // console.log(`text-[${textColor}] `)
  return (
    <div className="font-libertinus bg-black">
      <div
        style={{
          backgroundImage: "linear-gradient(to left, #000000ff, #3b3b3bff)",
        }}
        className="py-12 "
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3
            className="text-3xl font-bold  mb-4 "
            style={{ color: theme.text }}
          >
            Let's Connect
          </h3>
          <p className=" mb-8 text-lg" style={{ color: theme.text }}>
            Have a project in mind or want to discuss how we can help? Drop us a
            message and we'll get back to you.
          </p>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your name (optional)"
              className="w-full px-4 bg-white py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />

            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />

            <textarea
              rows="3"
              placeholder="Tell us about your project or how we can help..."
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gravitorix</h3>
            <p className="text-gray-600 mb-6">
              Transforming businesses through innovative technology solutions
              and strategic partnerships.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "News", "Contact"].map(
                (link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Solutions</h4>
            <ul className="space-y-2">
              {[
                "Enterprise",
                "Small Business",
                "Startups",
                "E-commerce",
                "Healthcare",
              ].map((solution, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Raj Studio in front of KFC yellow color House, Kovilpatti
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+91 73490 12242"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +91 73490 12242
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:contact@gravitorix.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  contact@gravitorix.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by
            Gravitorix © 2025
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
