import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Ballpit from "./UI/BallPit";
import NotificationModal from "./UI/NotificationModal"; // notification modal
import { FaLinkedin, FaGithub } from "react-icons/fa"

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
      pageGradient: "from-[#f4f4f6] via-[#e0e0e5] to-[#d1d1d8]",
  ballpit: ["#AF47D2", "#E8FFCE", "#98EECC", "#F9E400", "#D2FF72"],
  headingLight: "#fefefe",
  headingAccent: "#D2FF72",   // electric cyan
  subheading: "#c7c7c7",
  subheadingAccent: "#9c9c9c",
  paragraph: "#9a9a9a",
  formText: "#333333",
  formAccent: "#D2FF72",
  inputBg: "bg-white/20",
  inputBorder: "border-gray-300",
  buttonGradient: "from-[#D2FF72] to-[#FFF7D1]",   // cyan → blue
  buttonHoverGradient: "from-[#0040ff] via-[#00aaff] to-[#99ccff]",
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
        <div className="h-screen flex flex-col lg:flex-row  items-center justify-center lg:justify-around relative overflow-hidden px-6 lg:px-16 gap-12">
          
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
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* LEFT TEXT BLOCK */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <h2
            style={{ color: colors.subheading }}
            className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight mb-4 drop-shadow-md leading-tight"
          >
            Your <span style={{ color: colors.subheadingAccent }}>search</span> ends here...
          </h2>
          <h1
            style={{ color: colors.headingLight }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-bold mb-6 drop-shadow-lg leading-tight"
          >
            LET's <span style={{ color: colors.headingAccent }}>MAKE IT</span> HAPPEN ✨
          </h1>
          <p
            style={{ color: colors.paragraph }}
            className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Let’s connect and bring your ideas to life. Drop a quick message and I’ll get back to you soon.
          </p>
        </div>

        {/* RIGHT FORM CARD */}
       <motion.div
  initial={{ opacity: 0, scale: 0.95, x: 50 }}
  whileInView={{ opacity: 1, scale: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="w-full max-w-md px-4 sm:px-0"
>
  <div
    className={`backdrop-blur-xl border ${colors.inputBorder} shadow-lg rounded-3xl p-6 sm:p-8 md:p-10`}
    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
  >
    <h3
      style={{ color: colors.formText }}
      className="text-2xl sm:text-3xl font-semibold mb-6 text-center sm:text-left"
    >
      Send a <span style={{ color: colors.formAccent, fontWeight: 600 }}>Message</span>
    </h3>
    <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        className={`w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl ${colors.inputBg} ${colors.inputBorder} focus:ring-2 outline-none transition placeholder-gray-400`}
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        className={`w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl ${colors.inputBg} ${colors.inputBorder} focus:ring-2 outline-none transition placeholder-gray-400`}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        className={`w-full px-4 sm:px-5 py-2 sm:py-3 rounded-xl ${colors.inputBg} ${colors.inputBorder} focus:ring-2 outline-none transition placeholder-gray-400`}
      />
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        className={`w-full py-3 sm:py-4 bg-gradient-to-r ${colors.buttonGradient} text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition relative overflow-hidden group`}
      >
        <span className="relative z-10">🌟 Send Message</span>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${colors.buttonHoverGradient} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg`}
        />
      </motion.button>
    </form>

    {/* Social Icons */}
    <div className="flex justify-center space-x-6 mt-6">
      <a
        href="https://www.linkedin.com/in/sasi-kumar-kolli-6596b9259"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 transition text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/sasikumar272004"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700  transition text-2xl"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</motion.div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Third;
