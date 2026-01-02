import React from "react";

export default function SupportSectionUpdated() {
  const whmcsLink = "https://billing.infectedgamehosting.com/submitticket.php";
  const discordLink = "https://discord.gg/9km6nJnXpy";

  const supportImage =
    "https://res.cloudinary.com/dpnsseamh/image/upload/v1764414701/SCREENSHOTS_GUIDE_1_imbpol.png"; // uploaded image from user
  const discordImage =
    "https://res.cloudinary.com/dpnsseamh/image/upload/v1764416099/baner_1_fsz6j6.jpg";

  return (
    <section id="support" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#050b0d]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* TOP ROW: left text, right visual chat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Text block */}
          <div className="bg-[#0c1618] border border-[#1c2e30] rounded-3xl p-10 flex items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0f2420] border border-[#1a3832] text-[#39ff14] mb-6">
                {/* Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                24/7 - 365 <span className="text-[#39ff14]">Support</span>
              </h2>

              <p className="text-[#9ca3af] text-base md:text-lg leading-relaxed mb-8">
                Our friendly support team is available day and night to assist
                you with any question or concern. Expect a quick response and
                expert knowledge. Whether you need help with your server, game,
                bot, or any technical matter, we&apos;re here to help!
              </p>

              <a
                href={whmcsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-[#39ff14] text-black font-bold rounded-xl hover:bg-[#32e012] transition-transform transform hover:scale-105 shadow-[0_10px_30px_rgba(57,255,20,0.12)]"
              >
                Submit a Ticket
              </a>
            </div>
          </div>

          {/* Right - Chat visual */}
          <div className="relative bg-[#05090a] border border-[#0f1a1b] rounded-3xl overflow-hidden p-6 flex items-center justify-center">
            {/* Decorative circuit lines - only on large screens */}
            <img
              src={discordImage}
              alt="Decorative background"
              className="hidden lg:block absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
            />
          </div>
        </div>

        {/* BOTTOM ROW: big rounded card with left text and right screenshot */}
        <div className="bg-[#0c1618] border border-[#1c2e30] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            {/* Left - Big text block */}
            <div className="p-10 flex items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                  Join Our
                  <br />
                  <span className="text-[#39ff14]">Discord Server</span>
                </h3>

                <p className="text-[#9ca3af] text-base md:text-lg mb-8 max-w-xl">
                  Get real-time updates, chat with other server owners, and get
                  instant help from our community. It&apos;s the fastest way to
                  get connected.
                </p>

                <a
                  href={discordLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold rounded-xl transition-transform transform hover:scale-105 shadow-[0_10px_30px_rgba(88,101,242,0.12)]"
                >
                  Join Now
                </a>
              </div>
            </div>

            {/* Right - Screenshot mockup */}
            <div className="p-6 lg:p-10 flex items-center justify-center">
              <div className="w-full max-w-[520px] rounded-xl overflow-hidden border border-[#1a2b2c] shadow-lg">
                <img
                  src={supportImage}
                  alt="Discord screenshot"
                  className="w-full h-[260px] sm:h-[320px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
