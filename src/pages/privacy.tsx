import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Helmet } from "react-helmet-async";

export const metadata = {
  title: "Privacy Policy | Infected Game Hosting",
  description:
    "Privacy Policy for Infected Game Hosting - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
      <Helmet>
        <title> Privacy Policy | InfectedGameHosting</title>
        <meta name="description" content=" Privacy Policy ." />
        <meta
          property="og:title"
          content=" Privacy Policy | InfectedGameHosting "
        />
        <meta property="og:description" content=" Privacy Policy ." />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://infectedgamehosting.com/privacy"
        />
        <meta property="og:image" content="/opengraph-image.png" />
      </Helmet>
      <SiteHeader />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#c8cbd0] to-[#39ff14] bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-[#c8cbd0] text-lg">
              Last Updated: October 8, 2025
            </p>
          </div>

          {/* Introduction */}
          <div className="glass-card p-8 mb-8">
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              Infected Game Hosting ("IGH," "we," "us," or "our") is committed
              to protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our game server hosting services, visit our website at
              infectedgamehosting.com, or interact with our billing portal at
              billing.infectedgamehosting.com (collectively, the "Services").
            </p>
            <p className="text-[#c8cbd0] leading-relaxed">
              Please read this Privacy Policy carefully. By using our Services,
              you consent to the practices described in this policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              1. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold mb-4 text-white">
              1.1 Personal Information You Provide
            </h3>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              When you register for an account, purchase services, or contact
              us, we may collect:
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#39ff14]">
                Account Information:
              </h4>
              <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Username and password</li>
                <li>Billing address</li>
                <li>Phone number (if provided)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#39ff14]">
                Payment Information:
              </h4>
              <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                <li>Credit card details or payment method information</li>
                <li>Billing address and payment history</li>
                <li>Transaction records and invoices</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#39ff14]">
                Communications:
              </h4>
              <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                <li>Support ticket messages and inquiries</li>
                <li>Email correspondence</li>
                <li>Feedback and testimonials</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white mt-8">
              1.2 Automatically Collected Information
            </h3>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              When you access our Services, we automatically collect:
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#39ff14]">
                Usage Data:
              </h4>
              <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring/exit pages</li>
                <li>Click-stream data</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#39ff14]">
                Server and Service Data:
              </h4>
              <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                <li>Server performance metrics</li>
                <li>Resource usage statistics</li>
                <li>Connection logs</li>
                <li>Error logs and crash reports</li>
                <li>Server configurations (non-sensitive)</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3 text-[#39ff14]">
                Cookies and Tracking Technologies:
              </h4>
              <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                <li>Session cookies for authentication</li>
                <li>Preference cookies for settings</li>
                <li>Analytics cookies for service improvement</li>
                <li>Security cookies for fraud prevention</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white mt-8">
              1.3 Information from Third Parties
            </h3>
            <p className="text-[#c8cbd0] leading-relaxed">
              We may receive information from:
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mt-3">
              <li>Payment processors regarding transaction status</li>
              <li>Game publishers for service integration purposes</li>
              <li>Analytics providers for usage insights</li>
              <li>Security services for fraud detection</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              2. How We Use Your Information
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              We use collected information for the following purposes:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.1 Service Provision
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Creating and managing your account</li>
                  <li>Processing payments and maintaining billing records</li>
                  <li>Deploying and managing your game servers</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Sending service-related notifications and updates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.2 Service Improvement
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Monitoring and analyzing usage patterns</li>
                  <li>Improving server performance and infrastructure</li>
                  <li>Developing new features and services</li>
                  <li>Conducting research and analytics</li>
                  <li>Testing and optimizing our systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.3 Communication
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Responding to your inquiries and support requests</li>
                  <li>Sending account-related notifications</li>
                  <li>Providing service updates and maintenance alerts</li>
                  <li>Marketing communications (with your consent)</li>
                  <li>Requesting feedback and reviews</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.4 Security and Compliance
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Detecting and preventing fraud and abuse</li>
                  <li>Protecting against security threats</li>
                  <li>Enforcing our Terms of Service</li>
                  <li>Complying with legal obligations</li>
                  <li>Resolving disputes and enforcing agreements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  2.5 Business Operations
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Processing transactions and payments</li>
                  <li>Maintaining accurate financial records</li>
                  <li>Analyzing business performance</li>
                  <li>Improving customer service quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              3. Legal Bases for Processing (GDPR)
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              For users in the European Economic Area (EEA), United Kingdom, or
              other jurisdictions with similar regulations, we process your
              personal information based on:
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
              <li>
                <span className="font-semibold text-white">
                  Contract Performance:
                </span>{" "}
                Processing necessary to provide Services you've requested
              </li>
              <li>
                <span className="font-semibold text-white">
                  Legitimate Interests:
                </span>{" "}
                Operating, improving, and securing our Services
              </li>
              <li>
                <span className="font-semibold text-white">
                  Legal Obligations:
                </span>{" "}
                Complying with applicable laws and regulations
              </li>
              <li>
                <span className="font-semibold text-white">Consent:</span> Where
                you have provided explicit consent (e.g., marketing
                communications)
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              4. How We Share Your Information
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6">
              We do not sell, rent, or trade your personal information. We may
              share information in the following circumstances:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.1 Service Providers
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  We share information with trusted third-party vendors who
                  assist us in:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Payment processing (e.g., payment gateways)</li>
                  <li>Infrastructure hosting and data center operations</li>
                  <li>Email delivery and communication services</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Customer support tools</li>
                  <li>Security and fraud prevention services</li>
                </ul>
                <p className="text-[#c8cbd0] leading-relaxed mt-3">
                  These providers are contractually obligated to protect your
                  information and use it only for specified purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.2 Business Transfers
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  If IGH is involved in a merger, acquisition, asset sale, or
                  bankruptcy, your information may be transferred as part of
                  that transaction. We will notify you of any such change in
                  ownership or control.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.3 Legal Requirements
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  We may disclose your information when required by law or to:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Comply with legal process or government requests</li>
                  <li>Enforce our Terms of Service and policies</li>
                  <li>Protect our rights, property, or safety</li>
                  <li>
                    Protect the rights, property, or safety of our users or the
                    public
                  </li>
                  <li>
                    Prevent or investigate fraud, security issues, or illegal
                    activity
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  4.4 With Your Consent
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We may share information for other purposes with your explicit
                  consent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              5. Data Retention
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5.1 Active Accounts
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We retain your personal information for as long as your
                  account is active or as needed to provide Services.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5.2 After Account Termination
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  Following account closure or service cancellation:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    Server data and configurations are deleted within 7 days
                  </li>
                  <li>
                    Billing and transaction records are retained for 7 years for
                    accounting and tax purposes
                  </li>
                  <li>Support communications are retained for 3 years</li>
                  <li>
                    Other account information is deleted within 90 days unless
                    retention is required by law
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  5.3 Legal Retention
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We may retain information longer when required for legal,
                  regulatory, or contractual obligations, or to resolve disputes
                  and enforce agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              6. Data Security
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6">
              We implement industry-standard security measures to protect your
              information:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  6.1 Technical Safeguards
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Encryption of data in transit using TLS/SSL</li>
                  <li>Encrypted storage of sensitive information</li>
                  <li>Docker container isolation for server security</li>
                  <li>Regular security updates and patches</li>
                  <li>DDoS protection and network security measures</li>
                  <li>Access controls and authentication systems</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  6.2 Organizational Safeguards
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Limited employee access to personal data</li>
                  <li>Background checks for staff with data access</li>
                  <li>Regular security training for employees</li>
                  <li>Incident response procedures</li>
                  <li>Regular security audits and assessments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  6.3 Important Notice
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  While we implement strong security measures, no method of
                  transmission over the Internet or electronic storage is 100%
                  secure. We cannot guarantee absolute security of your
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* Section 7 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              7. Your Privacy Rights
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6">
              Depending on your location, you may have the following rights:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  7.1 Access and Portability
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-1 ml-4">
                  <li>Request access to your personal information</li>
                  <li>Receive a copy of your data in a portable format</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  7.2 Correction and Updates
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-1 ml-4">
                  <li>Update or correct inaccurate information</li>
                  <li>Complete incomplete information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  7.3 Deletion ("Right to be Forgotten")
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-1 ml-4">
                  <li>Request deletion of your personal information</li>
                  <li>Subject to legal retention requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  7.4 Restriction and Objection
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-1 ml-4">
                  <li>Restrict processing of your information</li>
                  <li>Object to processing based on legitimate interests</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  7.5 Consent Withdrawal
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-1 ml-4">
                  <li>Withdraw consent where processing is based on consent</li>
                  <li>Note that withdrawal doesn't affect prior processing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  7.6 Exercising Your Rights
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed ml-4">
                  To exercise these rights, please contact us through our
                  support ticket system or email. We will respond within the
                  timeframe required by applicable law (typically 30 days).
                </p>
              </div>
            </div>
          </div>

          {/* Section 8 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              8. International Data Transfers
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              Our servers are located in the United States (Denver, Colorado).
              If you are accessing our Services from outside the United States,
              your information will be transferred to, stored, and processed in
              the United States.
            </p>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              For users in the EEA, UK, or Switzerland, we rely on:
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mb-4">
              <li>
                Standard Contractual Clauses approved by the European Commission
              </li>
              <li>Your explicit consent for data transfers</li>
              <li>Other legally approved transfer mechanisms</li>
            </ul>
            <p className="text-[#c8cbd0] leading-relaxed">
              The United States may have different data protection laws than
              your jurisdiction. We take appropriate safeguards to protect your
              information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Section 9 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              9. Children's Privacy
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed">
              Our Services are not directed to individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us immediately. We
              will take steps to delete such information from our systems.
            </p>
          </div>

          {/* Section 10 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              10. Cookies and Tracking Technologies
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  10.1 Types of Cookies We Use
                </h3>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>
                    <span className="font-semibold text-white">
                      Essential Cookies:
                    </span>{" "}
                    Required for basic site functionality and authentication
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Preference Cookies:
                    </span>{" "}
                    Remember your settings and preferences
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Analytics Cookies:
                    </span>{" "}
                    Help us understand how visitors use our Services
                  </li>
                  <li>
                    <span className="font-semibold text-white">
                      Security Cookies:
                    </span>{" "}
                    Detect and prevent fraudulent activity
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  10.2 Third-Party Cookies
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We may use third-party analytics services that set cookies on
                  your device. These services have their own privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  10.3 Cookie Management
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  Most browsers allow you to control cookies through their
                  settings. Note that disabling certain cookies may affect the
                  functionality of our Services. You can:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Block all cookies</li>
                  <li>Accept all cookies</li>
                  <li>Notify you when a cookie is set</li>
                  <li>Delete existing cookies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sections 11-16 */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              11. Do Not Track Signals
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature. Currently,
              there is no industry standard for recognizing DNT signals. We do
              not respond to DNT browser signals at this time.
            </p>
          </div>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              12. California Privacy Rights
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6">
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA):
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  12.1 Right to Know
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed mb-3">
                  You can request information about:
                </p>
                <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4">
                  <li>Categories of personal information collected</li>
                  <li>Sources of personal information</li>
                  <li>Business purposes for collection</li>
                  <li>Categories of third parties we share information with</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  12.2 Right to Delete
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You can request deletion of your personal information, subject
                  to certain exceptions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  12.3 Right to Opt-Out
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  You have the right to opt-out of the sale of personal
                  information.{" "}
                  <span className="font-semibold text-white">
                    Note: We do not sell personal information.
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  12.4 Non-Discrimination
                </h3>
                <p className="text-[#c8cbd0] leading-relaxed">
                  We will not discriminate against you for exercising your CCPA
                  rights.
                </p>
              </div>

              <p className="text-[#c8cbd0] leading-relaxed mt-6">
                To exercise these rights, contact us through our support system.
                We will verify your identity before processing requests.
              </p>
            </div>
          </div>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              13. European Privacy Rights (GDPR)
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              If you are in the EEA or UK, you have rights under the General
              Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mb-4">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-[#c8cbd0] leading-relaxed">
              To exercise these rights or for GDPR-related inquiries, please
              contact us through our support system.
            </p>
          </div>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              14. Third-Party Links
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed">
              Our Services may contain links to third-party websites, games, or
              services that we do not control. This Privacy Policy does not
              apply to third-party sites. We are not responsible for the privacy
              practices of third parties. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </div>

          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              15. Changes to This Privacy Policy
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make changes:
            </p>
            <ul className="list-disc list-inside text-[#c8cbd0] space-y-2 ml-4 mb-4">
              <li>
                We will update the "Last Updated" date at the top of this policy
              </li>
              <li>
                For material changes, we will provide notice through email or a
                prominent notice on our website
              </li>
              <li>
                Continued use of our Services after changes constitutes
                acceptance of the updated policy
              </li>
            </ul>
            <p className="text-[#c8cbd0] leading-relaxed">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your information.
            </p>
          </div>

          {/* Contact Section */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-[#39ff14]">
              16. Contact Us
            </h2>
            <p className="text-[#c8cbd0] leading-relaxed mb-6">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>

            <div className="space-y-3 mb-6">
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

            <p className="text-[#c8cbd0] leading-relaxed mb-4">
              For privacy-specific inquiries or to exercise your privacy rights,
              please clearly mark your communication as "Privacy Request" in the
              subject line.
            </p>

            <p className="text-[#c8cbd0] leading-relaxed italic">
              Note: As an online business, we operate without a physical mailing
              address. All communications should be directed through our
              electronic channels listed above.
            </p>
          </div>

          {/* Final Statement */}
          <div className="glass-card p-8 bg-gradient-to-br from-[#39ff14]/5 to-transparent border-[#39ff14]/20">
            <p className="text-[#c8cbd0] leading-relaxed text-center">
              By using Infected Game Hosting Services, you acknowledge that you
              have read and understood this Privacy Policy and consent to our
              collection, use, and disclosure of your information as described
              herein.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
