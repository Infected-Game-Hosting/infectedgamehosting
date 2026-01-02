// utils/hash.ts
export async function sha256Hex(input: string): Promise<string> {
  if (
    typeof window === "undefined" ||
    !("crypto" in window && "subtle" in (window.crypto as any))
  ) {
    // fallback to plain value (not recommended) or return input
    return input;
  }
  const enc = new TextEncoder();
  const data = enc.encode(input.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

/**
// in contact form submit handler
async function onSubmit(formData) {
  const hashed = await sha256Hex(formData.email);
  identifyClarity(hashed, undefined, undefined, formData.name); // identifies Clarity with hashed email
  // send hashed to backend so backend can map the email -> hashed value
  await fetch("/api/save-contact", { method: "POST", body: JSON.stringify({ hashedEmail: hashed, email: formData.email /* optionally, with consent *}) });
}



// After user logs in or you have their user id:
identifyClarity(user.id, undefined, undefined, user.email);

// Add tags for filtering in Clarity (e.g., role, plan)
setClarityTag("plan", "starter");
setClarityTag("isAdmin", ["true"]);

// Record a custom event
clarityEvent("checkout-start");
clarityEvent("coupon-applied");

// Consent (call when user accepts your cookie banner)
clarityConsent(true);
// If user declines:
clarityConsent(false);

// Upgrade session priority if you want to force-record (example)
upgradeClarity("high-value-cart");


*/
