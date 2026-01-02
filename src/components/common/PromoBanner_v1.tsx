import React, { useEffect, useState, useRef } from "react";

/**
 * PromoBanner
 *
 * Props:
 *  - code (string)         : promo code shown & copied (default "2SOFFNOW")
 *  - discount (number)     : percent discount (default 25)
 *  - expiresAt (string)    : ISO/UTC expiration timestamp (required ideally)
 *  - ctaHref (string)      : link when user clicks CTA (checkout/register)
 *  - minPayoutNote (string): optional small note line
 *
 * Example:
 * <PromoBanner
 *   code="2SOFFNOW"
 *   discount={25}
 *   expiresAt="2025-11-29T12:00:00Z"
 *   ctaHref="https://billing.infectedgamehosting.com/cart.php"
 * />
 */
export default function PromoBanner({
  code = "2SOFFNOW",
  discount = 25,
  expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  ctaHref = "https://billing.infectedgamehosting.com/register.php",
  minPayoutNote = "",
}) {
  const [remainingMs, setRemainingMs] = useState(() => {
    // avoid mismatch in SSR: compute on client in useEffect; initial value 0 for server
    if (typeof window === "undefined") return 0;
    return Math.max(0, Date.parse(expiresAt) - Date.now());
  });
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);
  const expiresMsRef = useRef(Date.parse(expiresAt));

  // Start ticking on client
  useEffect(() => {
    // Protect from invalid dates
    if (Number.isNaN(expiresMsRef.current)) {
      setRemainingMs(0);
      return;
    }

    function tick() {
      const rem = Math.max(0, expiresMsRef.current - Date.now());
      setRemainingMs(rem);
      if (rem <= 0) {
        clearInterval(timerRef.current);
      }
    }
    // set immediate then interval (avoids second delay)
    tick();
    timerRef.current = setInterval(tick, 1000);
    return () => clearInterval(timerRef.current);
  }, [expiresAt]);

  useEffect(() => {
    if (remainingMs <= 0) {
      // Auto-hide after expiry (optional): keep visible but show "expired"
      // here we keep visible for 8s then hide to avoid sudden disappearances
      const t = setTimeout(() => setVisible(false), 8000);
      return () => clearTimeout(t);
    }
  }, [remainingMs]);

  // copy-to-clipboard
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // fallback: select input (not implemented here) — keep a simple failure state
      setCopied(false);
      console.error("Copy failed", err);
    }
  }

  function formatRemaining(ms) {
    if (ms <= 0) return "Expired";
    const sec = Math.floor(ms / 1000);
    const days = Math.floor(sec / (24 * 3600));
    const hrs = Math.floor((sec % (24 * 3600)) / 3600);
    const mins = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    if (days > 0) return `${days}d ${hrs}h ${mins}m`;
    if (hrs > 0) return `${hrs}h ${mins}m ${seconds}s`;
    if (mins > 0) return `${mins}m ${seconds}s`;
    return `${seconds}s`;
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Promotional banner"
      className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 w-[min(980px,92%)] sm:w-[720px] lg:w-[880px] pointer-events-auto"
    >
      <div className="relative">
        {/* Glass card */}
        <div
          className="flex items-center justify-between gap-4 p-3 sm:p-4 rounded-full glass-card"
          style={{
            background: "rgba(11,11,15,0.82)", // matches page bg #0b0b0f but slightly translucent
            border: "1px solid rgba(57,255,20,0.08)",
            boxShadow: "0 8px 30px rgba(57,255,20,0.06)",
          }}
        >
          {/* Left: discount label */}
          <div className="flex items-center gap-3">
            <div
              className="px-3 py-1 rounded-full text-sm font-semibold"
              style={{
                background:
                  "linear-gradient(90deg, rgba(57,255,20,0.12), rgba(46,232,15,0.06))",
                color: "#ffffff",
                border: "1px solid rgba(57,255,20,0.18)",
              }}
            >
              {discount}% OFF
            </div>

            {/* Countdown */}
            <div
              className="text-sm text-[#c8cbd0] font-medium"
              aria-live="polite"
              role="status"
            >
              {remainingMs > 0 ? (
                <>
                  <span className="hidden sm:inline">Offer ends in</span>{" "}
                  <span className="ml-2 font-semibold text-[#39ff14]">
                    {formatRemaining(remainingMs)}
                  </span>
                </>
              ) : (
                <span className="text-[#ff6b6b] font-semibold">
                  Offer expired
                </span>
              )}
            </div>
          </div>

          {/* Middle: CTA / note */}
          <div className="flex-1 flex items-center justify-center gap-4">
            <a
              href={ctaHref}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-black bg-gradient-to-r from-[#39ff14] to-[#2ee80f] shadow-[0_8px_30px_rgba(57,255,20,0.15)] hover:translate-y-[-1px] transition-transform"
            >
              Claim Offer
            </a>

            {/* Small note on mobile or general */}
            <div className="text-sm text-[#c8cbd0] text-center">
              <div className="font-medium">
                Save <span className="text-[#39ff14]">{discount}%</span> on your
                order — one-time code
              </div>
              {minPayoutNote ? (
                <div className="text-xs text-[#9aa0a6] mt-0.5">
                  {minPayoutNote}
                </div>
              ) : null}
            </div>
          </div>

          {/* Right: Promo code + copy */}
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span className="text-xs sm:text-sm font-semibold text-[#c8cbd0]">
                Use code:
              </span>
              <button
                onClick={handleCopy}
                aria-label={`Copy promo code ${code}`}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-sm sm:text-base font-semibold"
                style={{
                  background: "linear-gradient(90deg,#101012,#0b0b0f)",
                  border: "1px solid rgba(57,255,20,0.12)",
                  color: "#39ff14",
                }}
              >
                <span>{code}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    copied ? "bg-white/10" : "bg-white/5"
                  }`}
                >
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </div>

            {/* Close (hide) */}
            <button
              onClick={() => setVisible(false)}
              aria-label="Close promo"
              className="p-2 rounded-full hover:bg-white/5 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#c8cbd0]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Tiny toast for "Copied!" on top-center of widget */}
        <div
          aria-hidden={!copied}
          className={`absolute -top-9 left-1/2 transform -translate-x-1/2 transition-opacity ${
            copied ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(57,255,20,0.12)",
              border: "1px solid rgba(57,255,20,0.18)",
              color: "#39ff14",
            }}
          >
            Copied!
          </div>
        </div>
      </div>
    </div>
  );
}
