import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-muted-foreground">Last updated: April 20, 2023</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="mt-2 text-muted-foreground">
                Welcome to AgriVerse. These Terms of Service govern your use of our website and services. By accessing
                or using AgriVerse, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2. Definitions</h2>
              <p className="mt-2 text-muted-foreground">
                "AgriVerse," "we," "us," and "our" refer to the AgriVerse platform and its operators.
              </p>
              <p className="mt-2 text-muted-foreground">
                "User," "you," and "your" refer to individuals or entities using our platform, whether as a buyer,
                seller, or visitor.
              </p>
              <p className="mt-2 text-muted-foreground">
                "Platform" refers to the AgriVerse website, mobile applications, and related services.
              </p>
              <p className="mt-2 text-muted-foreground">
                "Content" refers to all information, text, images, data, and other materials displayed on or available
                through the Platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3. Account Registration</h2>
              <p className="mt-2 text-muted-foreground">
                To use certain features of the Platform, you must register for an account. You agree to provide
                accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p className="mt-2 text-muted-foreground">
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">4. Marketplace Rules</h2>
              <p className="mt-2 text-muted-foreground">
                Sellers must provide accurate and complete information about their products, including origin,
                production methods, and certifications.
              </p>
              <p className="mt-2 text-muted-foreground">
                Buyers must complete transactions for products they commit to purchase and provide accurate shipping and
                payment information.
              </p>
              <p className="mt-2 text-muted-foreground">
                All users must comply with applicable laws and regulations related to agricultural products, food
                safety, and commerce.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">5. Blockchain Verification</h2>
              <p className="mt-2 text-muted-foreground">
                AgriVerse uses blockchain technology to verify product information. Sellers agree to provide accurate
                information for blockchain verification.
              </p>
              <p className="mt-2 text-muted-foreground">
                While we strive to ensure the accuracy of blockchain verification, we cannot guarantee the accuracy of
                all information provided by sellers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">6. Payments and Fees</h2>
              <p className="mt-2 text-muted-foreground">
                AgriVerse charges fees for certain services, which are clearly disclosed before transactions are
                completed.
              </p>
              <p className="mt-2 text-muted-foreground">
                Payment processing is handled by secure third-party payment processors. By using our Platform, you agree
                to their terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">7. Intellectual Property</h2>
              <p className="mt-2 text-muted-foreground">
                The Platform and its original content, features, and functionality are owned by AgriVerse and are
                protected by international copyright, trademark, patent, trade secret, and other intellectual property
                laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
              <p className="mt-2 text-muted-foreground">
                To the maximum extent permitted by law, AgriVerse shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your use of or inability to use the Platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">9. Changes to Terms</h2>
              <p className="mt-2 text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by
                posting the new Terms on the Platform and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">10. Contact Us</h2>
              <p className="mt-2 text-muted-foreground">
                If you have any questions about these Terms, please contact us at{" "}
                <Link href="mailto:legal@agriverse.com" className="text-green-600 hover:underline">
                  legal@agriverse.com
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
