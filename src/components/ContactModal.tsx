import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
  Copy,
  Mail,
  Send,
  ExternalLink,
  Phone,
  Github,
  Linkedin,
  MapPin,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-Stack Web Architecture (React/Node/PostgreSQL)',
    message: '',
  });

  const myEmail = 'likithskarthik@gmail.com';
  const myPhone = '+91-9014918875';

  const copyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(myPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const constructEmailContent = () => {
    const subject = `Portfolio Inquiry from ${formData.name || 'Visitor'} [${formData.projectType}]`;
    const body = `Hi Surya,\n\nName: ${formData.name}\nEmail: ${formData.email}\nDomain: ${formData.projectType}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`;
    return { subject, body };
  };

  const openGmailWeb = () => {
    const { subject, body } = constructEmailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      myEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const openMailto = () => {
    const { subject, body } = constructEmailContent();
    const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const copyMessageSummary = () => {
    const { subject, body } = constructEmailContent();
    navigator.clipboard.writeText(`To: ${myEmail}\nSubject: ${subject}\n\n${body}`);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Optional background submission via Web3Forms if key exists
    const accessKey = (import.meta as any).env?.VITE_WEB3FORMS_KEY;
    if (accessKey) {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: `Portfolio Contact: ${formData.name} - ${formData.projectType}`,
            message: `Domain: ${formData.projectType}\n\nMessage: ${formData.message}`,
          }),
        });
      } catch (err) {
        console.warn('Web3Forms background dispatch failed, using mail client:', err);
      }
    }

    // Automatically trigger mailto link so user's mail client opens pre-filled
    openMailto();

    setIsSubmitting(false);
    setFormSent(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-8 text-[#D7E2EA] shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10 overflow-hidden my-8"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-purple-400 font-mono flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Contact
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                  Let&apos;s Build Together
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Direct Contact Cards */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Email Card with 1-click open */}
              <div className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-between gap-2 hover:border-purple-500/30 transition-all">
                <a
                  href={`mailto:${myEmail}`}
                  className="flex items-center gap-2.5 overflow-hidden group flex-1"
                  title="Click to open email"
                >
                  <div className="w-8 h-8 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center text-purple-300 flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-[#D7E2EA]/60 font-mono">EMAIL DIRECTLY</div>
                    <div className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-purple-300 transition-colors">
                      {myEmail}
                    </div>
                  </div>
                </a>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/20 hover:border-white/50 bg-white/5 flex items-center gap-1 flex-shrink-0 transition-colors text-white"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-3.5 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-between gap-2 hover:border-emerald-500/30 transition-all">
                <a
                  href={`tel:${myPhone}`}
                  className="flex items-center gap-2.5 overflow-hidden group flex-1"
                  title="Click to call"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-900/30 border border-emerald-500/20 flex items-center justify-center text-emerald-300 flex-shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] text-[#D7E2EA]/60 font-mono">PHONE / WHATSAPP</div>
                    <div className="text-xs sm:text-sm font-medium text-white truncate group-hover:text-emerald-300 transition-colors">
                      {myPhone}
                    </div>
                  </div>
                </a>
                <button
                  onClick={copyPhone}
                  className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/20 hover:border-white/50 bg-white/5 flex items-center gap-1 flex-shrink-0 transition-colors text-white"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>

            {/* Quick Form or Success State */}
            {formSent ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6 flex flex-col items-center justify-center text-center gap-4 mt-3"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-wide text-white">
                    Email Ready to Send!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/70 max-w-sm mt-1">
                    Your message has been pre-formatted for <strong className="text-white">{myEmail}</strong>. Click below to dispatch it instantly:
                  </p>
                </div>

                {/* 1-Click Launch Buttons */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <button
                    onClick={openGmailWeb}
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/30 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Gmail (Web)</span>
                  </button>

                  <button
                    onClick={openMailto}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#222222] hover:bg-[#2a2a2a] border border-white/10 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Mail App</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs pt-1">
                  <button
                    onClick={copyMessageSummary}
                    className="text-[#D7E2EA]/60 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {copiedSummary ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedSummary ? 'Copied Full Message' : 'Copy Message Text'}</span>
                  </button>
                  <span className="text-white/20">&bull;</span>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-purple-400 hover:underline"
                  >
                    Edit Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Surya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-[#181818] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="surya@tech.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-[#181818] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Technical Domain
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl bg-[#181818] border border-white/10 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-400 transition-colors"
                  >
                    <option value="Full-Stack Web Architecture (React/Node/PostgreSQL)">
                      01 - Full-Stack Web Architecture (React / tRPC / PostgreSQL)
                    </option>
                    <option value="TinyML & Edge AI (ESP32/TFLM/CNN)">
                      02 - TinyML &amp; Edge AI (ESP32 / TFLM / Quantized CNN)
                    </option>
                    <option value="Autonomous Robotics & ROS 2 (LIDAR/SLAM)">
                      03 - Autonomous Robotics &amp; ROS 2 (LIDAR / SLAM)
                    </option>
                    <option value="Computer Vision & Gesture Recognition (OpenCV)">
                      04 - Computer Vision &amp; Gesture Recognition (OpenCV)
                    </option>
                    <option value="Embedded Systems & Hardware IoT">
                      05 - Embedded Hardware &amp; IoT (Arduino Mega / Sensors)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/70 mb-1.5 font-medium">
                    Message / Project Goals
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your initiative, timeline, or engineering goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl bg-[#181818] border border-white/10 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                    outline: '2px solid #FFFFFF',
                    outlineOffset: '-3px',
                  }}
                  className="w-full rounded-full py-3 text-sm uppercase tracking-widest font-medium text-white flex items-center justify-center gap-2 hover:brightness-110 active:scale-98 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Preparing Email...' : 'Send Message'}</span>
                </button>
              </form>
            )}

            {/* Social Footnote */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D7E2EA]/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Hyderabad, India &bull; GITAM University
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/nlskarthik007"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" /> GitHub <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href="https://linkedin.com/in/nlskarthik007"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
