import Link from "next/link"

export default function CookiesPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Cookie Policy</h1>
            <p className="mt-4 text-muted-foreground">Last updated: April 20, 2023</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="mt-2 text-muted-foreground">
                This Cookie Policy explains how AgriVerse uses cookies and similar technologies to recognize you when
                you visit our website and use our services. It explains what these technologies are and why we use them,
                as well as your rights to control our use of them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">2. What Are Cookies?</h2>
              <p className="mt-2 text-muted-foreground">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                well as to provide reporting information.
              </p>
              <p className="mt-2 text-muted-foreground">
                Cookies set by the website owner (in this case, AgriVerse) are called "first-party cookies." Cookies set
                by parties other than the website owner are called "third-party cookies." Third-party cookies enable
                third-party features or functionality to be provided on or through the website (e.g., advertising,
                interactive content, and analytics).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">3. Types of Cookies We Use</h2>
              <p className="mt-2 text-muted-foreground">We use the following types of cookies:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot
                  be switched off in our systems. They are usually only set in response to actions made by you which
                  amount to a request for services, such as setting your privacy preferences, logging in, or filling in
                  forms.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we
                  can measure and improve the performance of our site. They help us to know which pages are the most and
                  least popular and see how visitors move around the site.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced
                  functionality and personalization. They may be set by us or by third-party providers whose services we
                  have added to our pages.
                </li>
                <li>
                  <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising
                  partners. They may be used by those companies to build a profile of your interests and show you
                  relevant advertisements on other sites.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">4. How We Use Cookies</h2>
              <p className="mt-2 text-muted-foreground">We use cookies for the following purposes:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground">
                <li>To authenticate users and prevent fraudulent use of user accounts</li>
                <li>To remember information about your preferences and choices on our site</li>
                <li>To understand how you use our site and which pages you visit</li>
                <li>To improve our website and provide a better user experience</li>
                <li>To enable certain functions of the service</li>
                <li>To provide analytics about how our site is used</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold">5. Your Choices Regarding Cookies</h2>
              <p className="mt-2 text-muted-foreground">
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or
                access cookies. If you disable or refuse cookies, please note that some parts of this website may become
                inaccessible or not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">6. Changes to This Cookie Policy</h2>
              <p className="mt-2 text-muted-foreground">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new
                Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">7. Contact Us</h2>
              <p className="mt-2 text-muted-foreground">
                If you have any questions about this Cookie Policy, please contact us at{" "}
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
