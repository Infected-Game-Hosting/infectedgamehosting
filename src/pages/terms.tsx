import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Helmet } from "react-helmet-async";

export const metadata = {
  title: "Terms of Service | Infected Game Hosting",
  description:
    "Terms of Service for Infected Game Hosting - Read our terms and conditions for using our game server hosting services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
      <Helmet>
        <title>Terms Of Service | InfectedGameHosting</title>
        <meta name="description" content="Terms Of Services." />
        <meta
          property="og:title"
          content="Terms Of Service | InfectedGameHosting "
        />
        <meta property="og:description" content="Terms Of Services." />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://infectedgamehosting.com/terms"
        />
        <meta property="og:image" content="/opengraph-image.png" />
      </Helmet>
      <SiteHeader />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#c8cbd0] to-[#39ff14] bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-[#c8cbd0] text-lg">
              Last Updated: October 8, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="glass-card p-8 mb-8">
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              Welcome to Infected Game Hosting ("IGH," "we," "us," or "our").
              These Terms of Service ("Terms") govern your access to and use of
              our game server hosting services, websites, and related services
              (collectively, the "Services"). By creating an account, purchasing
              services, or using our platform, you agree to be bound by these
              Terms.
            </p>
          </div>

          {/* Section 1 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              1. Acceptance of Terms
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              By accessing or using our Services, you confirm that:
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mb-4">
              <li>
                You are at least 18 years of age or have parental/guardian
                consent
              </li>
              <li>
                You have the legal capacity to enter into a binding agreement
              </li>
              <li>
                You agree to comply with all applicable laws and regulations
              </li>
              <li>All information you provide is accurate and complete</li>
            </ul>
            <p className="text-[#c8cbd0] leading-relaxed">
              If you do not agree to these Terms, you may not use our Services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              2. Account Registration and Security
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.1 Account Creation
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  To use our Services, you must create an account through our
                  billing portal. You agree to:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    Provide accurate, current, and complete registration
                    information
                  </li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your login credentials confidential and secure</li>
                  <li>
                    Immediately notify us of any unauthorized account access
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.2 Account Responsibility
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You are solely responsible for all activities that occur under
                  your account. We are not liable for any loss or damage arising
                  from unauthorized account use. You may not share, transfer, or
                  sell your account to any third party.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              3. Services Description
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  3.1 Hosting Services
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  IGH provides high-performance game server hosting with the
                  following features:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Docker container isolation for each server instance</li>
                  <li>
                    Ryzen 9 CPU infrastructure with optimized resource
                    allocation
                  </li>
                  <li>Full mod support and customization capabilities</li>
                  <li>1Gbit unmetered connections</li>
                  <li>SSD storage for optimal performance</li>
                  <li>Built-in DDoS protection</li>
                  <li>24/7 system monitoring and maintenance</li>
                  <li>Access to our server control panel</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  3.2 Service Availability
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  While we strive for maximum uptime and maintain 24/7
                  monitoring, we do not guarantee uninterrupted service
                  availability. Scheduled maintenance, emergency repairs, or
                  circumstances beyond our control may result in temporary
                  service interruptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  3.3 Beta/Testing Phase
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  During client testing phases, certain features may be provided
                  at no charge or with promotional credits. Such offerings are
                  temporary and subject to change without notice. Normal billing
                  will resume following the testing period with appropriate
                  customer notification.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              4. Payment Terms
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.1 Pricing and Billing
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    All prices are listed in US Dollars (USD) unless otherwise
                    specified
                  </li>
                  <li>
                    Services are billed on a recurring basis (monthly,
                    quarterly, or annually) as selected during purchase
                  </li>
                  <li>Payment is due in advance for each billing cycle</li>
                  <li>
                    Prices are subject to change with 30 days' notice to
                    existing customers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.2 Payment Methods
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We accept payment through the methods available in our billing
                  portal. You authorize us to charge your selected payment
                  method for all fees incurred.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.3 Refunds
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    <span className="font-semibold text-white">
                      No refunds policy:
                    </span>{" "}
                    All sales are final. We do not offer refunds for any
                    services purchased
                  </li>
                  <li>
                    Services provided are backed by our support team to ensure
                    satisfaction
                  </li>
                  <li>
                    Issues with service quality should be reported to support
                    for resolution
                  </li>
                  <li>
                    This policy applies to all purchases including initial
                    orders and recurring billing cycles
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.4 Late Payment and Suspension
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  Failure to pay by the due date may result in:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mb-4">
                  <li>
                    A one-time late payment fee of $5.00 automatically added to
                    all late invoices
                  </li>
                  <li>Service suspension without notice</li>
                  <li>Account termination after 7 days of non-payment</li>
                  <li>Loss of data associated with suspended services</li>
                </ul>
                <p className="text-[#c8cbd0] leading-relaxed">
                  <span className="font-semibold text-white">Important:</span>{" "}
                  It is the client's responsibility to ensure sufficient funds
                  are available in their account to cover billing when WHMCS
                  attempts to capture payments. If payment fails due to
                  insufficient funds or card being locked, the late fee is
                  applied immediately upon the invoice becoming overdue.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              5. Acceptable Use Policy
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5.1 Prohibited Activities
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  You agree not to use our Services for:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    Illegal activities or content that violates any laws or
                    regulations
                  </li>
                  <li>
                    Hosting, distributing, or facilitating malware, viruses, or
                    malicious code
                  </li>
                  <li>
                    Attempting to gain unauthorized access to our systems or
                    other users' accounts
                  </li>
                  <li>Engaging in DDoS attacks or similar network abuse</li>
                  <li>
                    Harassment, hate speech, or content promoting violence
                  </li>
                  <li>
                    Copyright infringement or intellectual property violations
                  </li>
                  <li>
                    Activities that generate excessive resource consumption
                    beyond plan limits
                  </li>
                  <li>
                    Cryptocurrency mining without explicit written authorization
                  </li>
                  <li>
                    Proxies, VPNs, or anonymization services (unless
                    specifically permitted)
                  </li>
                  <li>Adult or sexually explicit content involving minors</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5.2 Resource Usage
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Each service plan includes specified resource allocations.
                  Excessive resource usage that impacts system stability or
                  other customers' performance may result in service throttling,
                  suspension, or termination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5.3 Mod Support and Content
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  While we support full mod installation and customization:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    You are solely responsible for the mods and content you
                    install
                  </li>
                  <li>
                    Mods must comply with applicable game terms of service
                  </li>
                  <li>
                    We are not liable for issues caused by third-party mods or
                    modifications
                  </li>
                  <li>
                    Mods that cause system instability or security risks may be
                    restricted
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              6. Data and Backups
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  6.1 Your Responsibility
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You are solely responsible for maintaining backups of your
                  server data, configurations, and content. We strongly
                  recommend regular backups using our control panel features.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  6.2 Our Backup Policy
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  While we may perform system-level backups for disaster
                  recovery purposes:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>These backups are for our operational use only</li>
                  <li>We do not guarantee data recovery from our backups</li>
                  <li>
                    We are not obligated to provide backup restoration services
                  </li>
                  <li>
                    Backup availability and retention periods are not guaranteed
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  6.3 Data Loss
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We are not liable for any data loss, corruption, or
                  unavailability, regardless of cause. This includes losses due
                  to hardware failure, software issues, account termination, or
                  service cancellation.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              7. Intellectual Property
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  7.1 Our Property
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  All content, features, functionality, and materials on our
                  website and Services, including but not limited to text,
                  graphics, logos, software, and design, are owned by IGH or our
                  licensors and protected by intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  7.2 Your Content
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You retain ownership of content you upload to your servers. By
                  using our Services, you grant us a limited license to host,
                  store, and transmit your content as necessary to provide the
                  Services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  7.3 Third-Party Games
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Game-specific intellectual property (including Palworld and
                  other hosted games) remains the property of respective
                  copyright holders. You must comply with all applicable game
                  licenses and terms of service.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              8. Support Services
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  8.1 Support Availability
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We provide customer support through our ticket system and
                  available contact methods. Support is provided during business
                  hours, with emergency support available for critical service
                  issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  8.2 Support Scope
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  Our support covers:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mb-4">
                  <li>Account and billing assistance</li>
                  <li>Server setup and configuration guidance</li>
                  <li>Technical issues with our hosting infrastructure</li>
                  <li>Control panel navigation and usage</li>
                </ul>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  Support does not include:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Game-specific configuration or gameplay assistance</li>
                  <li>
                    Third-party mod installation or troubleshooting (beyond
                    basic guidance)
                  </li>
                  <li>Custom development or scripting services</li>
                  <li>Issues caused by user error or modification</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 9 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              9. Service Modifications and Termination
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  9.1 Service Changes
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  We reserve the right to:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    Modify, suspend, or discontinue any aspect of the Services
                  </li>
                  <li>
                    Change service specifications, features, or pricing with
                    notice
                  </li>
                  <li>Update these Terms with notification to users</li>
                  <li>
                    Implement new limitations or requirements as necessary
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  9.2 Termination by Us
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  We may suspend or terminate your account immediately without
                  notice if:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>You violate these Terms or our Acceptable Use Policy</li>
                  <li>
                    Your account is involved in fraudulent or illegal activity
                  </li>
                  <li>You engage in abuse of our staff or systems</li>
                  <li>
                    Your activities pose a security risk to our infrastructure
                  </li>
                  <li>Payment obligations remain unfulfilled</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  9.3 Termination by You
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You may cancel your services at any time through the billing
                  portal. Cancellation takes effect at the end of the current
                  billing period. No refunds are provided for partial billing
                  periods unless otherwise specified.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  9.4 Effect of Termination
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  Upon termination:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Your access to Services will be revoked</li>
                  <li>
                    All data associated with your account will be permanently
                    deleted within 7 days
                  </li>
                  <li>
                    You remain liable for all charges incurred prior to
                    termination
                  </li>
                  <li>
                    Outstanding balances become immediately due and payable
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 10 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              10. Limitation of Liability
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6 font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  10.1 Service Provision
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed uppercase">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                  BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                  A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  10.2 Damages
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3 uppercase">
                  IN NO EVENT SHALL IGH BE LIABLE FOR:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    Indirect, incidental, special, consequential, or punitive
                    damages
                  </li>
                  <li>
                    Loss of profits, revenue, data, or business opportunities
                  </li>
                  <li>
                    Service interruptions, data loss, or security breaches
                  </li>
                  <li>
                    Actions or content of third parties, including other users
                  </li>
                  <li>
                    Issues arising from third-party mods, games, or software
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  10.3 Liability Cap
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed uppercase">
                  OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE
                  TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID US
                  IN THE THREE (3) MONTHS PRECEDING THE CLAIM.
                </p>
              </div>
            </div>
          </div>

          {/* Section 11 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              11. Indemnification
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-3">
              You agree to indemnify, defend, and hold harmless IGH, its
              officers, directors, employees, and agents from any claims,
              damages, losses, liabilities, and expenses (including reasonable
              attorney fees) arising from:
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
              <li>Your use or misuse of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of third parties</li>
              <li>
                Content you upload or activities conducted through your servers
              </li>
              <li>Your violation of applicable laws or regulations</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              12. Privacy and Data Protection
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed">
              Your privacy is important to us. Our collection, use, and
              protection of your personal information is governed by our Privacy
              Policy, which is incorporated into these Terms by reference. By
              using our Services, you consent to our data practices as described
              in the Privacy Policy.
            </p>
          </div>

          {/* Section 13 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              13. Dispute Resolution
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  13.1 Governing Law
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  These Terms are governed by the laws of the State of Colorado,
                  United States, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  13.2 Informal Resolution
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Before filing any claim, you agree to contact us to attempt
                  informal resolution of the dispute.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  13.3 Arbitration
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Any disputes not resolved informally shall be resolved through
                  binding arbitration in Denver, Colorado, rather than in court,
                  except that you may assert claims in small claims court if
                  they qualify.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  13.4 Class Action Waiver
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You agree that disputes will be resolved on an individual
                  basis only and not as part of any class, consolidated, or
                  representative action.
                </p>
              </div>
            </div>
          </div>

          {/* Section 14 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              14. General Provisions
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.1 Entire Agreement
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  These Terms, together with our Privacy Policy and any
                  service-specific agreements, constitute the entire agreement
                  between you and IGH regarding the Services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.2 Severability
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions shall continue in full
                  force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.3 Waiver
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Our failure to enforce any right or provision of these Terms
                  shall not constitute a waiver of such right or provision.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.4 Assignment
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You may not assign or transfer these Terms or your account
                  without our written consent. We may assign our rights and
                  obligations without restriction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.5 Force Majeure
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We are not liable for any failure or delay in performance due
                  to circumstances beyond our reasonable control, including
                  natural disasters, acts of government, network failures, or
                  other force majeure events.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.6 Notices
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Notices to you may be sent to the email address associated
                  with your account. Notices to us should be sent via our
                  support ticket system or to the contact information on our
                  website.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  14.7 Survival
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  Provisions that by their nature should survive termination
                  (including payment obligations, liability limitations, and
                  dispute resolution) shall survive any termination or
                  expiration of these Terms.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              15. Contact Information
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6">
              If you have questions about these Terms, please contact us:
            </p>

            <div className="space-y-3">
              <p className="text-[#c8cbd0]">
                <span className="font-semibold text-white">Support Email:</span>{" "}
                <a
                  href="mailto:support@infectedgamehosting.com"
                  className="text-[#39ff14] hover:underline"
                >
                  support@infectedgamehosting.com
                </a>
              </p>
              <p className="text-[#c8cbd0]">
                <span className="font-semibold text-white">
                  Billing Portal:
                </span>{" "}
                <a
                  href="https://billing.infectedgamehosting.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#39ff14] hover:underline"
                >
                  billing.infectedgamehosting.com
                </a>
              </p>
              <p className="text-[#c8cbd0]">
                <span className="font-semibold text-white">Website:</span>{" "}
                <a
                  href="https://infectedgamehosting.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[#39ff14] hover:underline"
                >
                  infectedgamehosting.com
                </a>
              </p>
            </div>
          </div>

          {/* Final Statement */}
          <div className="glass-card p-8 bg-gradient-to-br from-[#39ff14]/5 to-transparent border-[#39ff14]/20">
            <p className="text-[#c8cbd0] leading-relaxed text-center">
              By using Infected Game Hosting Services, you acknowledge that you
              have read, understood, and agree to be bound by these Terms of
              Service.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
