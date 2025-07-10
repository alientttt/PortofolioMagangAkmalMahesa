const ContactSection = () => {
  return (
    <section id="contact" className="py-20 text-typo z-50">
      <div className="max-w-4xl mx-auto px-6 text-center text-typo">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
          Looking for Internship Experience
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Ready to learn, grow, and contribute to your team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:akmalmahesa67@gmail.com"
            className="btn btn-lg bg-[#3A2B32] text-white border-none hover:bg-transparent hover:text-[#3A2B32] hover:shadow-xl transition-all duration-300 flex items-center"
          >
            <i className="ri-mail-line mr-2"></i>
            Send Email
          </a>

          <a
            href="https://wa.me/6289699008547" // ganti dengan nomor WhatsApp kamu (format internasional, tanpa tanda +)
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-outline border-white hover:bg-[#3A2B32] hover:text-white transition-all duration-300 flex items-center"
          >
            <i className="ri-phone-line mr-2"></i>
            Whatsapp
          </a>
        </div>

        {/* <!-- Social Links --> */}
        <div className="flex justify-center gap-6 text-typo">
          <a
            href="https://github.com/alientttt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <i className="ri-github-line text-xl"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            <i className="ri-linkedin-line text-xl"></i>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            <i className="ri-twitter-line text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/mhesa083?igsh=MTc3MjRlNTMxNzdmNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            <i className="ri-instagram-line text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
