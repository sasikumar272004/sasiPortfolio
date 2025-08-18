import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Ballpit from "./UI/BallPit";
import NotificationModal from "./UI/NotificationModal"; // notification modal

const Third = () => {
  const formRef = useRef();
  const [notification, setNotification] = useState({ show: false, type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hc0hosc",      // Service ID
        "template_bocprd7",     // Template ID
        formRef.current,
        "vgXiVVXv3TwFTl0VC"    // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          formRef.current.reset();
          setNotification({ show: true, type: "success", message: "Message sent successfully! 🌟" });
          setTimeout(() => setNotification({ ...notification, show: false }), 4000); // auto-close
        },
        (error) => {
          console.log(error.text);
          setNotification({ show: true, type: "error", message: "Failed to send message. ❌" });
          setTimeout(() => setNotification({ ...notification, show: false }), 4000); // auto-close
        }
      );
  };

  const colors = {
    pageGradient: "from-[#f5f5f5] via-[#ebebeb] to-[#e0e0e0]",
    ballpit: ["#d8c4f7", "#F6F1E9", "#FFFADC", "#F5EA5A"],
    headingLight: "#fafafa",
    headingAccent: "#b0a898",
    subheading: "#d6d6d6",
    subheadingAccent: "#a89f8f",
    paragraph: "#a0a0a0",
    formText: "#555555",
    formAccent: "#b0a898",
    inputBg: "bg-white/30",
    inputBorder: "border-white/20",
    buttonGradient: "from-[#d6c6b8] to-[#b0a898]",
    buttonHoverGradient: "from-[#e0d1c3] via-[#d6c6b8] to-[#b0a898]",
  };

  return (
    <div
      id="contact"
      className={`h-[100vh] relative bg-gradient-to-br ${colors.pageGradient}`}
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)" }}
    >
      {/* Notification Modal */}
      <NotificationModal show={notification.show} type={notification.type} message={notification.message} />

      <div className="fixed h-[100vh] w-full bottom-0">
        <div className="h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-around relative overflow-hidden px-6 lg:px-16 gap-12">
          
          {/* Ballpit Background Layer */}
          <div className="absolute inset-0 z-0">
            <Ballpit
              count={70}
              gravity={0.25}
              friction={1}
              wallBounce={1}
              followCursor={true}
              colors={colors.ballpit}
            />
          </div>

          {/* LEFT TEXT BLOCK */}
          <div className="text-left max-w-full lg:max-w-[50%] z-10 px-4 sm:px-6">
            <h2
              style={{ color: colors.subheading }}
              className="text-5xl sm:text-6xl lg:text-7xl font-extralight mb-4 drop-shadow-md"
            >
              Your <span style={{ color: colors.subheadingAccent }}>search</span> ends here...
            </h2>
            <h1
              style={{ color: colors.headingLight }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-lg"
            >
              LET's <span style={{ color: colors.headingAccent }}>MAKE IT</span> HAPPEN ✨
            </h1>
            <p
              style={{ color: colors.paragraph }}
              className="text-lg sm:text-xl leading-relaxed max-w-xl"
            >
              Let’s connect and bring your ideas to life. Drop a quick message and I’ll get back to you soon.
            </p>
          </div>

          {/* RIGHT FORM CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full max-w-md px-4 sm:px-0"
          >
            <div
              className={`backdrop-blur-xl border ${colors.inputBorder} shadow-lg rounded-3xl p-8 sm:p-10`}
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <h3
                style={{ color: colors.formText }}
                className="text-2xl font-semibold mb-6"
              >
                Send a <span style={{ color: colors.formAccent, fontWeight: 600 }}>Message</span>
              </h3>
              <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className={`w-full px-5 py-3 rounded-xl ${colors.inputBg} ${colors.inputBorder} focus:ring-2 outline-none transition placeholder-gray-400`}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  className={`w-full px-5 py-3 rounded-xl ${colors.inputBg} ${colors.inputBorder} focus:ring-2 outline-none transition placeholder-gray-400`}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className={`w-full px-5 py-3 rounded-xl ${colors.inputBg} ${colors.inputBorder} focus:ring-2 outline-none transition placeholder-gray-400`}
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className={`w-full py-3 bg-gradient-to-r ${colors.buttonGradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition relative overflow-hidden group`}
                >
                  <span className="relative z-10">🌟 Send Message</span>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${colors.buttonHoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg`}
                  />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Third;
