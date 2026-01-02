import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowLeft, Loader2, X } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/server-nav";
import { Helmet } from "react-helmet-async";

// Form validation schema
const affiliateSchema = z.object({
  streamerName: z.string().min(2, "Streamer/Brand name is required"),
  email: z.string().email("Please enter a valid email address"),
  discordTag: z.string().optional(),
  mainPlatform: z.string().min(1, "Please select your main platform"),
  channelUrl: z.string().url("Please enter a valid channel URL"),
  averageViewers: z.string().min(1, "Average viewers is required"),
  followers: z.string().min(1, "Followers/Subscribers count is required"),
  mainGames: z.string().min(2, "Please list your main games"),
  contentDescription: z
    .string()
    .min(20, "Please provide at least 20 characters describing your content"),
  promotionPlan: z
    .string()
    .min(
      20,
      "Please describe how you plan to promote us (minimum 20 characters)"
    ),
  currentlyUsing: z.string().min(1, "Please select an option"),
  usageDetails: z.string().optional(),
  preferredCode: z
    .string()
    .min(2, "Please enter your preferred affiliate code"),
  additionalInfo: z.string().optional(),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type AffiliateFormData = z.infer<typeof affiliateSchema>;

const platformOptions = [
  "Twitch",
  "YouTube",
  "Kick",
  "TikTok",
  "Facebook Gaming",
  "Other",
];

export default function AffiliateOnboarding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [socialTags, setSocialTags] = useState<string[]>([]);
  const [socialInput, setSocialInput] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<AffiliateFormData>({
    resolver: zodResolver(affiliateSchema),
    defaultValues: {
      agreeTerms: false,
    },
  });

  const currentlyUsing = watch("currentlyUsing");

  const addSocialTag = () => {
    if (socialInput.trim() && !socialTags.includes(socialInput.trim())) {
      setSocialTags([...socialTags, socialInput.trim()]);
      setSocialInput("");
    }
  };

  const removeSocialTag = (tagToRemove: string) => {
    setSocialTags(socialTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSocialKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSocialTag();
    }
  };

  const onSubmit = async (data: AffiliateFormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Discord webhook URL
      const DISCORD_WEBHOOK_URL =
        "https://discord.com/api/webhooks/1445023092215644321/V3nVIQWtckIUNVaqWQP1RGfex-Cy7ZmvsioxrzI824kQ8fTM8y4z4vmIme2pHTOJw7o6";

      // Format the data for Discord
      const discordPayload = {
        embeds: [
          {
            title: "🎮 New Streamer Affiliate Application",
            color: 0x39ff14,
            fields: [
              {
                name: "👤 Streamer/Brand Name",
                value: data.streamerName,
                inline: true,
              },
              {
                name: "📧 Email",
                value: data.email,
                inline: true,
              },
              {
                name: "💬 Discord Tag",
                value: data.discordTag || "Not provided",
                inline: true,
              },
              {
                name: "📺 Main Platform",
                value: data.mainPlatform,
                inline: true,
              },
              {
                name: "🔗 Channel URL",
                value: data.channelUrl,
                inline: false,
              },
              {
                name: "👥 Average Viewers",
                value: data.averageViewers,
                inline: true,
              },
              {
                name: "📊 Followers/Subscribers",
                value: data.followers,
                inline: true,
              },
              {
                name: "🎮 Main Games",
                value: data.mainGames,
                inline: false,
              },
              {
                name: "📝 Content Description",
                value: data.contentDescription,
                inline: false,
              },
              {
                name: "📢 Promotion Plan",
                value: data.promotionPlan,
                inline: false,
              },
              {
                name: "🖥️ Currently Using Our Servers",
                value:
                  data.currentlyUsing === "yes"
                    ? `Yes - ${data.usageDetails || "No details provided"}`
                    : "No",
                inline: false,
              },
              {
                name: "🎫 Preferred Affiliate Code",
                value: data.preferredCode,
                inline: true,
              },
              {
                name: "🌐 Social Media",
                value:
                  socialTags.length > 0
                    ? socialTags.join(", ")
                    : "Not provided",
                inline: false,
              },
              {
                name: "💭 Additional Information",
                value: data.additionalInfo || "None provided",
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "Infected Game Hosting - Affiliate Program",
            },
          },
        ],
      };

      // Send to Discord
      const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordPayload),
      });

      if (!response.ok) {
        throw new Error("Failed to send application");
      }

      // Redirect to client signup page
      window.location.href =
        "https://billing.infectedgamehosting.com/register.php";
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        "Failed to submit application. Please try again or contact support."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Register For Our Affiliate Porgram | InfectedGameHosting</title>
        <meta
          name="description"
          content="Register For Our Affiliate Porgram."
        />
        <meta
          property="og:title"
          content="Register For Our Affiliate Porgram | InfectedGameHosting "
        />
        <meta
          property="og:description"
          content="Register For Our Affiliate Porgram."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://infectedgamehosting.com/affiliate"
        />
        <meta property="og:image" content="/opengraph-image.png" />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-black text-white py-40 px-4 sm:px-6 lg:px-8">
        <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.5);
        }
        .neon-button {
          background: linear-gradient(90deg, #39ff14, #2ee80f);
          color: #000;
          font-weight: 700;
          border-radius: 8px;
          box-shadow: 0 6px 30px rgba(57, 255, 20, 0.18);
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .neon-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(57, 255, 20, 0.28);
        }
        .neon-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: #39ff14 !important;
          box-shadow: 0 0 0 2px rgba(57, 255, 20, 0.1) !important;
        }
        .checkbox-custom {
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .checkbox-custom:checked {
          background: #39ff14;
          border-color: #39ff14;
        }
        .checkbox-custom:checked::after {
          content: "✓";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #000;
          font-weight: bold;
          font-size: 14px;
        }
        .section-title {
          color: #39ff14;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(57, 255, 20, 0.2);
        }
      `}</style>

        <div className="max-w-7xl mx-auto pb-12">
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-[#c8cbd0] hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-white to-[#39ff14] bg-clip-text text-transparent">
              Streamer Affiliation Application
            </h1>
            <p className="text-[#c8cbd0] text-lg">
              Thank you for your interest in becoming an affiliate of Infected
              Game Hosting. Please fill out the form below with your details.
            </p>
          </div>

          {/* Form Container */}
          <div className="glass-card p-6 sm:p-8">
            <div>
              {/* Section: Basic / Contact Info */}
              <div className="mb-8">
                <h2 className="section-title">Basic / Contact Information</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Streamer/Brand Name */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Streamer / Brand Name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("streamerName")}
                      type="text"
                      placeholder="Your streamer or brand name"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.streamerName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.streamerName.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                    <p className="text-xs text-[#9aa0a6] mt-1">
                      Use the same email you'll use for account signup
                    </p>
                  </div>

                  {/* Discord Tag */}
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Discord Tag{" "}
                      <span className="text-[#9aa0a6]">(Optional)</span>
                    </label>
                    <input
                      {...register("discordTag")}
                      type="text"
                      placeholder="username#1234"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Channel & Stats */}
              <div className="mb-8">
                <h2 className="section-title">Channel & Stats</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Main Platform */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Main Streaming Platform{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("mainPlatform")}
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white transition-all"
                    >
                      <option value="">Select a platform</option>
                      {platformOptions.map((platform) => (
                        <option key={platform} value={platform}>
                          {platform}
                        </option>
                      ))}
                    </select>
                    {errors.mainPlatform && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mainPlatform.message}
                      </p>
                    )}
                  </div>

                  {/* Channel URL */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Channel URL <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("channelUrl")}
                      type="url"
                      placeholder="https://twitch.tv/yourname"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.channelUrl && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.channelUrl.message}
                      </p>
                    )}
                  </div>

                  {/* Average Viewers */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Average Live Viewers{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("averageViewers")}
                      type="text"
                      placeholder="e.g., 50-100"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.averageViewers && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.averageViewers.message}
                      </p>
                    )}
                  </div>

                  {/* Followers */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Followers / Subscribers{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("followers")}
                      type="text"
                      placeholder="e.g., 5,000"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.followers && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.followers.message}
                      </p>
                    )}
                  </div>

                  {/* Main Games */}
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Main Games You Stream{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("mainGames")}
                      type="text"
                      placeholder="e.g., Minecraft, Rust, ARK"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.mainGames && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mainGames.message}
                      </p>
                    )}
                  </div>

                  {/* Content Description */}
                  <div className="lg:col-span-2">
                    <label className="block text-sm font-semibold mb-2">
                      Content & Community Vibe{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("contentDescription")}
                      rows={4}
                      placeholder="Tell us about your content style and your community (min. 20 characters)"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] resize-none transition-all"
                    />
                    {errors.contentDescription && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.contentDescription.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Section: Promo + Relationship */}
              <div className="mb-8">
                <h2 className="section-title">Promo + Relationship</h2>
                <div className="grid grid-cols-1 gap-6">
                  {/* Promotion Plan */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      How do you plan to promote Infected Game Hosting?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("promotionPlan")}
                      rows={4}
                      placeholder="Describe your promotion strategy (min. 20 characters)"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] resize-none transition-all"
                    />
                    {errors.promotionPlan && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.promotionPlan.message}
                      </p>
                    )}
                  </div>

                  {/* Currently Using */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Do you currently use our servers live on stream?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("currentlyUsing")}
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    {errors.currentlyUsing && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.currentlyUsing.message}
                      </p>
                    )}
                  </div>

                  {/* Usage Details (conditional) */}
                  {currentlyUsing === "yes" && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Usage Details
                      </label>
                      <textarea
                        {...register("usageDetails")}
                        rows={3}
                        placeholder="Tell us more about your experience with our servers"
                        className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] resize-none transition-all"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Section: Affiliate */}
              <div className="mb-8">
                <h2 className="section-title">Affiliate</h2>
                <div className="grid grid-cols-1 gap-6">
                  {/* Preferred Code */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Preferred Affiliate Code{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("preferredCode")}
                      type="text"
                      placeholder="e.g., LEGACY, FLUX"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] transition-all"
                    />
                    {errors.preferredCode && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.preferredCode.message}
                      </p>
                    )}
                    <p className="text-xs text-[#9aa0a6] mt-1">
                      Choose a memorable code for your audience
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Extras */}
              <div className="mb-8">
                <h2 className="section-title">Extras</h2>
                <div className="grid grid-cols-1 gap-6">
                  {/* Social Media Tags */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Social Media Handles{" "}
                      <span className="text-[#9aa0a6]">(Optional)</span>
                    </label>
                    <div className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg min-h-[52px] flex flex-wrap gap-2 items-center">
                      {socialTags.map((tag) => (
                        <div
                          key={tag}
                          className="flex items-center gap-1 bg-[#39ff14]/10 border border-[#39ff14]/30 rounded-md px-3 py-1"
                        >
                          <span className="text-sm text-white">{tag}</span>
                          <button
                            type="button"
                            onClick={() => removeSocialTag(tag)}
                            className="text-[#39ff14] hover:text-white transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <input
                        type="text"
                        value={socialInput}
                        onChange={(e) => setSocialInput(e.target.value)}
                        onKeyDown={handleSocialKeyDown}
                        onBlur={addSocialTag}
                        placeholder={
                          socialTags.length === 0
                            ? "Add social media handles (press Enter)"
                            : ""
                        }
                        className="flex-1 min-w-[200px] bg-transparent border-none outline-none text-white placeholder-[#9aa0a6]"
                      />
                    </div>
                    <p className="text-xs text-[#9aa0a6] mt-1">
                      Add your Twitter, Instagram, TikTok, etc. Press Enter to
                      add each
                    </p>
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Anything else we should know?{" "}
                      <span className="text-[#9aa0a6]">(Optional)</span>
                    </label>
                    <textarea
                      {...register("additionalInfo")}
                      rows={4}
                      placeholder="Any additional information you'd like to share"
                      className="w-full px-4 py-3 bg-[#0b0b0b] border border-[#ffffff10] rounded-lg text-white placeholder-[#9aa0a6] resize-none transition-all"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        {...register("agreeTerms")}
                        type="checkbox"
                        className="checkbox-custom mt-1"
                      />
                      <span className="text-sm text-white">
                        I agree to the Infected Game Hosting Affiliate Terms &
                        Conditions. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.agreeTerms.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-[#ffffff10]">
                {submitError && (
                  <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-500 text-sm">{submitError}</p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="neon-button w-full sm:w-auto px-12 py-4 text-lg font-bold flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <p className="text-xs text-[#9aa0a6] mt-4">
                  Never submit passwords.{" "}
                  <a
                    href="https://billing.infectedgamehosting.com/submitticket.php"
                    className="text-[#39ff14] hover:underline"
                  >
                    Report abuse
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
