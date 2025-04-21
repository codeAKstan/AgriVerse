import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: April 20, 2023</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="mt-2 text-muted-foreground">
                At AgriVerse, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2. Information We Collect</h2>
              <p className="mt-2 text-muted-foreground">
                <strong>Personal Information:</strong> When you register for an account, we collect your name, email
                address, phone number, and payment information.
              </p>
              <p className="mt-2 text-muted-foreground">
                <strong>Farm Information:</strong> For farmers, we collect information about your farm, including
                location, products, farming practices, and certifications.
              </p>
              <p className="mt-2 text-muted-foreground">
                <strong>Transaction Information:</strong> We collect information about purchases, sales, and other
                transactions you conduct on our platform.
              </p>
              <p className="mt-2 text-muted-foreground">
                <strong>Usage Information:</strong> We collect information about how you interact with our platform,
                including log data, device information, and cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
              <p className="mt-2 text-muted-foreground">We use your information to:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                <li>Provide, maintain, and improve our platform</li>
                <li>Process transactions and send related information</li>
                <li>Verify product information on the blockchain</li>
                <li>Communicate with you about products, services, and promotions</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">4. Blockchain Information</h2>
              <p className="mt-2 text-muted-foreground">
                Information recorded on the blockchain is public and immutable. We carefully select what information is
                recorded on the blockchain to protect your privacy while ensuring transparency for agricultural
                products.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">5. Sharing Your Information</h2>
              <p className="mt-2 text-muted-foreground">We may share your information with:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                <li>Other users as necessary to facilitate transactions</li>
                <li>Service providers who perform services on our behalf</li>
                <li>
                  Third parties in connection with a business transfer, such as a merger, acquisition, or sale of assets
                </li>
                <li>
                  Law enforcement or other third parties when required by law or to protect our rights or the rights of
                  others
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">6. Data Security</h2>
              <p className="mt-2 text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">7. Your Rights</h2>
              <p className="mt-2 text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Restricting or objecting to our processing of your personal information</li>
                <li>Receiving a copy of your personal information in a structured, machine-readable format</li>
                <li>Withdrawing consent at any time where we rely on consent to process your personal information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">8. Children's Privacy</h2>
              <p className="mt-2 text-muted-foreground">
                Our platform is not intended for children under 16 years of age. We do not knowingly collect personal
                information from children under 16.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">9. Changes to This Privacy Policy</h2>
              <p className="mt-2 text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
              <p className="mt-2 text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link href="mailto:privacy@agriverse.com" className="text-green-600 hover:underline">
                  privacy@agriverse.com
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
