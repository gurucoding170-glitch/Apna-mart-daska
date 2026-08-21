import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  const phoneNumber = "+923056241497"; // Apna WhatsApp number yahan badlein (format: +92...)
  const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=Hello!%20I%20have%20an%20inquiry%20regarding%20Daska Mart.`;

  return (
    <div className="pt-24 pb-16 px-4 md:px-6 max-w-5xl mx-auto text-gold-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold gold-gradient-text mb-3">
          Contact Us
        </h1>
        <p className="text-sm md:text-base text-gold-100/70 max-w-xl mx-auto">
          Have questions or need assistance with your order? Reach out to us directly or visit our local store in Daska.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="bg-cocoa-900/40 border border-gold-300/15 p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-gold-300/10 rounded-xl text-gold-300 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gold-50">Store Address</h3>
              <p className="text-sm text-gold-100/70 mt-1">
                sialkot Road, Near College Road, Daska, Punjab, Pakistan
              </p>
            </div>
          </div>

          <div className="bg-cocoa-900/40 border border-gold-300/15 p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-gold-300/10 rounded-xl text-gold-300 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gold-50">Phone Number</h3>
              <p className="text-sm text-gold-100/70 mt-1">+92 305 6241497</p>
            </div>
          </div>

          <div className="bg-cocoa-900/40 border border-gold-300/15 p-6 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-gold-300/10 rounded-xl text-gold-300 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gold-50">Working Hours</h3>
              <p className="text-sm text-gold-100/70 mt-1">
                Monday – Sunday: 8:00 AM – 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Direct WhatsApp Call to Action */}
        <div className="bg-cocoa-900/40 border border-gold-300/15 p-8 rounded-2xl text-center flex flex-col items-center justify-center h-full">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-4">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gold-50 mb-2">Need Instant Support?</h3>
          <p className="text-sm text-gold-100/70 mb-6 max-w-sm">
            Chat directly with our team on WhatsApp for quick order updates or product inquiries.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
