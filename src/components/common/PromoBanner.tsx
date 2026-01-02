// import React, { useEffect, useState, useRef } from "react";

// /**
//  * PromoBanner (responsive)
//  *
//  * Props:
//  *  - code (string)
//  *  - discount (number)
//  *  - expiresAt (ISO string)
//  *  - ctaHref (string)
//  *  - minPayoutNote (string)
//  *
//  * Improvements:
//  *  - Fully responsive layout for small -> large screens
//  *  - Better accessibility (aria-live, aria-labels, keyboard focus)
//  *  - Copy fallback if navigator.clipboard isn't available
//  *  - Reduced motion respect
//  *  - Safer interval handling and react to changes in expiresAt
//  */
// export default function PromoBanner({
//   code = "2SOFFNOW",
//   discount = 25,
//   expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
//   ctaHref = "https://billing.infectedgamehosting.com/register.php",
//   minPayoutNote = "",
// }) {
//   // remaining milliseconds until expiration
//   const [remainingMs, setRemainingMs] = useState(() => {
//     if (typeof window === "undefined") return 0;
//     const parsed = Date.parse(expiresAt);
//     return Number.isNaN(parsed) ? 0 : Math.max(0, parsed - Date.now());
//   });

//   const [copied, setCopied] = useState(false);
//   const [visible, setVisible] = useState(true);
//   const timerRef = useRef(null);
//   const expiresMsRef = useRef(
//     Number.isNaN(Date.parse(expiresAt)) ? 0 : Date.parse(expiresAt)
//   );

//   // update expiration ref if prop changes
//   useEffect(() => {
//     const parsed = Date.parse(expiresAt);
//     expiresMsRef.current = Number.isNaN(parsed) ? 0 : parsed;
//     // Immediately update remaining time when prop changes
//     setRemainingMs(Math.max(0, expiresMsRef.current - Date.now()));
//   }, [expiresAt]);

//   // tick every second (or less often if expired)
//   useEffect(
//     () => {
//       // clear any previous timer
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//         timerRef.current = null;
//       }

//       function tick() {
//         const rem = Math.max(0, expiresMsRef.current - Date.now());
//         setRemainingMs(rem);
//         if (rem <= 0) {
//           // stop ticking once expired
//           if (timerRef.current) {
//             clearInterval(timerRef.current);
//             timerRef.current = null;
//           }
//         }
//       }

//       // initial tick
//       tick();

//       // only set interval if we still have time
//       if (expiresMsRef.current > Date.now()) {
//         timerRef.current = setInterval(tick, 1000);
//       }

//       return () => {
//         if (timerRef.current) clearInterval(timerRef.current);
//         timerRef.current = null;
//       };
//     },
//     [
//       /* deps intentionally empty — expiration is tracked via expiresMsRef which is updated above */
//     ]
//   );

//   // auto-hide some seconds after expiration (gives user time to see "expired")
//   useEffect(() => {
//     if (remainingMs <= 0) {
//       const t = setTimeout(() => setVisible(false), 8000);
//       return () => clearTimeout(t);
//     }
//   }, [remainingMs]);

//   // copy handler with fallback
//   async function handleCopy() {
//     const text = String(code ?? "");
//     if (!text) return;

//     // Try async clipboard API first
//     if (navigator?.clipboard?.writeText) {
//       try {
//         await navigator.clipboard.writeText(text);
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//         return;
//       } catch (err) {
//         // continue to fallback
//         // eslint-disable-next-line no-console
//         console.warn(
//           "Async clipboard write failed, falling back to execCommand",
//           err
//         );
//       }
//     }

//     // Fallback: create temporary textarea and select
//     try {
//       const textarea = document.createElement("textarea");
//       textarea.value = text;
//       textarea.setAttribute("readonly", "");
//       textarea.style.position = "absolute";
//       textarea.style.left = "-9999px";
//       document.body.appendChild(textarea);
//       textarea.select();
//       const ok = document.execCommand("copy");
//       document.body.removeChild(textarea);
//       if (ok) {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000);
//       } else {
//         throw new Error("execCommand copy returned false");
//       }
//     } catch (err) {
//       // eslint-disable-next-line no-console
//       console.error("Copy fallback failed", err);
//       setCopied(false);
//     }
//   }

//   // small helpers
//   function pad(n) {
//     return String(n).padStart(2, "0");
//   }

//   function formatRemaining(ms) {
//     if (ms <= 0) return "Expired";
//     const totalSeconds = Math.floor(ms / 1000);
//     const days = Math.floor(totalSeconds / (24 * 3600));
//     const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     const timePart = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//     return days > 0 ? `${days}d ${timePart}` : timePart;
//   }

//   if (!visible) return null;

//   return (
//     <div
//       role="region"
//       aria-label="Promotional banner"
//       className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[92vw] max-w-[min(92vw,900px)] sm:w-[calc(100%-2rem)]"
//       style={{ pointerEvents: "auto" }}
//     >
//       <div className="relative">
//         <div
//           className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 p-3 sm:p-4 rounded-2xl backdrop-blur-sm"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(11,11,15,0.92), rgba(8,8,10,0.84))",
//             border: "1px solid rgba(57,255,20,0.08)",
//             boxShadow: "0 10px 40px rgba(3,3,3,0.6)",
//           }}
//         >
//           {/* Left: discount badge + countdown */}
//           <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
//             <div
//               className="flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
//               style={{
//                 background:
//                   "linear-gradient(90deg, rgba(57,255,20,0.12), rgba(46,232,15,0.06))",
//                 color: "#ffffff",
//                 border: "1px solid rgba(57,255,20,0.16)",
//                 minWidth: 64,
//                 textAlign: "center",
//               }}
//             >
//               <span className="text-[13px] sm:text-sm">{discount}% OFF</span>
//             </div>

//             <div
//               className="ml-1 text-[12px] sm:text-sm text-[#c8cbd0] font-medium hidden"
//               aria-live="polite"
//               role="status"
//             >
//               {remainingMs > 0 ? (
//                 <div className="flex items-center gap-2">
//                   {/* hide "Ends in" on xs to save space */}
//                   <span className="hidden xs:hidden sm:inline">Ends in</span>
//                   <span className="ml-1 font-semibold text-[#39ff14] truncate">
//                     {formatRemaining(remainingMs)}
//                   </span>
//                 </div>
//               ) : (
//                 <span className="text-[#ff6b6b] font-semibold">
//                   Offer expired
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Middle: main CTA + note; grows to take available space */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-1 min-w-0">
//             <a
//               href={ctaHref}
//               className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold text-black bg-gradient-to-r from-[#39ff14] to-[#2ee80f] shadow-[0_8px_30px_rgba(57,255,20,0.15)] transition-transform motion-safe:duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39ff14]"
//               style={{ minWidth: 96 }}
//               aria-label="Claim discount offer"
//             >
//               <span className="text-sm sm:text-base leading-none white-space-nowrap">
//                 Claim Offer
//               </span>
//             </a>

//             <div className="text-center text-[12px] sm:text-sm text-[#c8cbd0] min-w-0">
//               <div className="font-medium truncate">
//                 Save <span className="text-[#39ff14]">{discount}%</span>{" "}
//                 <span className="hidden sm:inline">—</span>{" "}
//                 <span className="sm:ml-1 font-mono text-[#39ff14] truncate">
//                   {code}
//                 </span>
//               </div>
//               {minPayoutNote ? (
//                 <div className="text-[10px] sm:text-xs text-[#9aa0a6] mt-0.5 truncate">
//                   {minPayoutNote}
//                 </div>
//               ) : null}
//             </div>
//           </div>

//           {/* Right: copy + close */}
//           <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
//             <div
//               className="inline-flex items-center gap-2 px-2 py-1 rounded-full select-none"
//               style={{
//                 background: "rgba(255,255,255,0.02)",
//                 border: "1px solid rgba(255,255,255,0.04)",
//               }}
//             >
//               <span className="text-xs sm:text-sm font-semibold text-[#c8cbd0] hidden sm:inline">
//                 Use code:
//               </span>

//               <button
//                 onClick={handleCopy}
//                 aria-label={`Copy promo code ${code}`}
//                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#39ff14] transition"
//                 style={{
//                   background: "linear-gradient(90deg,#101012,#0b0b0f)",
//                   border: "1px solid rgba(57,255,20,0.12)",
//                   color: "#39ff14",
//                 }}
//               >
//                 <span className="truncate max-w-[7ch] sm:max-w-[12ch]">
//                   {code}
//                 </span>
//                 <span
//                   className={`text-xs px-2 py-0.5 rounded-full font-medium ${
//                     copied ? "bg-white/10" : "bg-white/5"
//                   }`}
//                 >
//                   {copied ? "Copied" : "Copy"}
//                 </span>
//               </button>
//             </div>

//             <button
//               onClick={() => setVisible(false)}
//               aria-label="Close promo"
//               className="p-2 rounded-full hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/20"
//               title="Close"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-4 w-4 text-[#c8cbd0]"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Copied toast (accessible) */}
//         <div
//           aria-hidden={!copied}
//           className={`absolute -top-9 left-1/2 transform -translate-x-1/2 transition-opacity duration-200 ${
//             copied ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//         >
//           <div
//             className="px-3 py-1 rounded-full text-sm font-semibold"
//             role="status"
//             aria-live="polite"
//             style={{
//               background: "rgba(57,255,20,0.12)",
//               border: "1px solid rgba(57,255,20,0.18)",
//               color: "#39ff14",
//             }}
//           >
//             Copied!
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";

export default function PromoBanner({
  code = "2SOFFNOW",
  discount = 25,
  expiresAt = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
  ctaHref = "https://billing.infectedgamehosting.com/register.php",
  minPayoutNote = "",
}) {
  // CRITICAL: Don't render anything until client-side hydration is complete
  const [mounted, setMounted] = useState(false);

  const [remainingMs, setRemainingMs] = useState(0);
  const [copied, setCopied] = useState(false);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const expiresMsRef = useRef(0);

  // Mount detection - prevents SSR/hydration mismatch
  useEffect(() => {
    setMounted(true);
    const parsed = Date.parse(expiresAt);
    expiresMsRef.current = Number.isNaN(parsed) ? 0 : parsed;
    setRemainingMs(Math.max(0, expiresMsRef.current - Date.now()));
  }, []);

  // Update expiration ref if prop changes
  useEffect(() => {
    if (!mounted) return;
    const parsed = Date.parse(expiresAt);
    expiresMsRef.current = Number.isNaN(parsed) ? 0 : parsed;
    setRemainingMs(Math.max(0, expiresMsRef.current - Date.now()));
  }, [expiresAt, mounted]);

  // Tick every second
  useEffect(() => {
    if (!mounted) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    function tick() {
      const rem = Math.max(0, expiresMsRef.current - Date.now());
      setRemainingMs(rem);
      if (rem <= 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }
    }

    tick();

    if (expiresMsRef.current > Date.now()) {
      timerRef.current = setInterval(tick, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [mounted]);

  // Auto-hide after expiration
  useEffect(() => {
    if (!mounted) return;
    if (remainingMs <= 0) {
      const t = setTimeout(() => setVisible(false), 8000);
      return () => clearTimeout(t);
    }
  }, [remainingMs, mounted]);

  async function handleCopy() {
    const text = String(code ?? "");
    if (!text) return;

    if (navigator?.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      } catch (err) {
        console.warn(
          "Async clipboard write failed, falling back to execCommand",
          err
        );
      }
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textarea);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Copy fallback failed", err);
      setCopied(false);
    }
  }

  function pad(n: number) {
    return String(n).padStart(2, "0");
  }

  function formatRemaining(ms: number) {
    if (ms <= 0) return "Expired";
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const timePart = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return days > 0 ? `${days}d ${timePart}` : timePart;
  }

  // Don't render anything during SSR or if not visible
  if (!mounted || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Promotional banner"
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[92vw] max-w-[min(92vw,900px)] sm:w-[calc(100%-2rem)]"
      style={{ pointerEvents: "auto" }}
    >
      <div className="relative">
        <div
          className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 p-3 sm:p-4 rounded-2xl backdrop-blur-sm"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,11,15,0.92), rgba(8,8,10,0.84))",
            border: "1px solid rgba(57,255,20,0.08)",
            boxShadow: "0 10px 40px rgba(3,3,3,0.6)",
          }}
        >
          {/* Left: discount badge + countdown */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div
              className="flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap"
              style={{
                background:
                  "linear-gradient(90deg, rgba(57,255,20,0.12), rgba(46,232,15,0.06))",
                color: "#ffffff",
                border: "1px solid rgba(57,255,20,0.16)",
                minWidth: 64,
                textAlign: "center",
              }}
            >
              <span className="text-[13px] sm:text-sm">{discount}% OFF</span>
            </div>

            <div
              className="ml-1 text-[12px] sm:text-sm text-[#c8cbd0] font-medium hidden"
              aria-live="polite"
              role="status"
            >
              {remainingMs > 0 ? (
                <div className="flex items-center gap-2">
                  <span className="hidden xs:hidden sm:inline">Ends in</span>
                  <span className="ml-1 font-semibold text-[#39ff14] truncate">
                    {formatRemaining(remainingMs)}
                  </span>
                </div>
              ) : (
                <span className="text-[#ff6b6b] font-semibold">
                  Offer expired
                </span>
              )}
            </div>
          </div>

          {/* Middle: main CTA + note */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-1 min-w-0">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold text-black bg-gradient-to-r from-[#39ff14] to-[#2ee80f] shadow-[0_8px_30px_rgba(57,255,20,0.15)] transition-transform motion-safe:duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#39ff14]"
              style={{ minWidth: 96 }}
              aria-label="Claim discount offer"
            >
              <span className="text-sm sm:text-base leading-none whitespace-nowrap">
                Claim Offer
              </span>
            </a>

            <div className="text-center text-[12px] sm:text-sm text-[#c8cbd0] min-w-0">
              <div className="font-medium truncate">
                Save <span className="text-[#39ff14]">{discount}%</span>{" "}
                <span className="hidden sm:inline">—</span>{" "}
                <span className="sm:ml-1 font-mono text-[#39ff14] truncate">
                  {code}
                </span>
              </div>
              {minPayoutNote ? (
                <div className="text-[10px] sm:text-xs text-[#9aa0a6] mt-0.5 truncate">
                  {minPayoutNote}
                </div>
              ) : null}
            </div>
          </div>

          {/* Right: copy + close */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <div
              className="inline-flex items-center gap-2 px-2 py-1 rounded-full select-none"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span className="text-xs sm:text-sm font-semibold text-[#c8cbd0] hidden sm:inline">
                Use code:
              </span>

              <button
                onClick={handleCopy}
                aria-label={`Copy promo code ${code}`}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#39ff14] transition"
                style={{
                  background: "linear-gradient(90deg,#101012,#0b0b0f)",
                  border: "1px solid rgba(57,255,20,0.12)",
                  color: "#39ff14",
                }}
              >
                <span className="truncate max-w-[7ch] sm:max-w-[12ch]">
                  {code}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    copied ? "bg-white/10" : "bg-white/5"
                  }`}
                >
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            </div>

            <button
              onClick={() => setVisible(false)}
              aria-label="Close promo"
              className="p-2 rounded-full hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/20"
              title="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#c8cbd0]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
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

        {/* Copied toast */}
        <div
          aria-hidden={!copied}
          className={`absolute -top-9 left-1/2 transform -translate-x-1/2 transition-opacity duration-200 ${
            copied ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="px-3 py-1 rounded-full text-sm font-semibold"
            role="status"
            aria-live="polite"
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
