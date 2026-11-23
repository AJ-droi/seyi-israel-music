// Privacy notice for the website (UK GDPR / Data Protection Act 2018 / PECR).
// Plain-English draft written for this site as built: a contact form sent by email via Resend,
// no analytics, no tracking cookies. Ask the client to check it, and fill every [square-bracket]
// item before launch. If the client adds analytics, a newsletter or online payments, update it.
//
// Each section is a heading plus blocks: a string is a paragraph, a string[] is a bullet list.
// {email} is replaced with site.email (or a placeholder until that's set).

export const privacy = {
  title: "Privacy Notice",
  lastUpdated: "23 November 2026",
  intro:
    "This notice explains how Seyi Israel Music Ltd collects and uses your personal information when you visit this website or contact us, and the rights you have over that information.",
  sections: [
    {
      heading: "Who we are",
      blocks: [
        "Seyi Israel Music Ltd is the controller of the personal information described in this notice. This means we decide how and why it is used.",
        [
          "Registered office: 18 Selborne Street, Derby DE24 8WF, United Kingdom",
          "Company number: [add once registered]",
          "Email: {email}",
        ],
        "If you have any questions about this notice or how we handle your information, please contact us using the details above.",
      ],
    },
    {
      heading: "What information we collect",
      blocks: [
        "When you use the contact form on this website, we collect:",
        [
          "your name and email address",
          "your phone number, if you choose to give it",
          "the area of our work you're interested in, if you choose one",
          "your message and anything you include in it",
        ],
        "If you email or phone us directly, we collect the details you share with us in the same way.",
        "When you visit the website, our hosting provider automatically records basic technical information, such as your IP address, browser type and the pages you request. This is used to keep the website running securely. Your IP address is also used briefly to stop the contact form from being misused for spam.",
        "Please don't send us sensitive information (for example about your health) through the contact form unless we've asked for it.",
      ],
    },
    {
      heading: "How we use your information",
      blocks: [
        [
          "to reply to your message and answer your enquiry",
          "to discuss and arrange our services with you, such as music production, live events, talent development, workshops or media work",
          "to keep a record of our correspondence with you",
          "to keep the website and contact form secure and free of spam",
        ],
        "We will not send you marketing emails unless you have asked us to. We do not sell your information, and we do not use it for automated decision-making or profiling.",
      ],
    },
    {
      heading: "Our lawful basis",
      blocks: [
        "UK data protection law requires us to have a lawful basis for using your information. We rely on:",
        [
          "Legitimate interests: responding to people who contact us, running our business, and keeping our website secure. We only rely on this where your rights and interests do not outweigh ours.",
          "Steps before a contract: where you contact us about using our services, we use your information to take the steps you've asked for before any agreement is made.",
          "Consent: if we ever ask for your permission (for example to add you to a mailing list), you can withdraw it at any time by contacting us.",
        ],
      ],
    },
    {
      heading: "Who we share your information with",
      blocks: [
        "We only share your information with trusted service providers who help us run this website and reply to you. They may only use it to provide their service to us:",
        [
          "Resend, which delivers the messages sent through our contact form by email",
          "[Website host, e.g. Vercel], which hosts this website",
          "[Email provider, e.g. Google Workspace or Microsoft 365], which hosts our email inbox",
        ],
        "We may also share information if we are required to by law, or to protect our rights or the safety of others.",
      ],
    },
    {
      heading: "International transfers",
      blocks: [
        "Some of our service providers are based outside the UK, including in the United States. Where your information is transferred outside the UK, we make sure it is protected by safeguards recognised under UK law, such as UK adequacy regulations or the UK International Data Transfer Agreement or Addendum.",
      ],
    },
    {
      heading: "How long we keep your information",
      blocks: [
        "We keep enquiries and our correspondence with you for up to [2 years] after we were last in touch, then delete them. If you go on to work with us, we keep the information we need for as long as our working relationship lasts and for any period required by law (for example, financial records are kept for 6 years).",
      ],
    },
    {
      heading: "Cookies",
      blocks: [
        "This website does not use advertising or analytics cookies, and it does not track you across other websites, so you won't see a cookie banner. If we add any cookies that need your consent in future, we will ask you first and update this notice.",
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        "Under UK data protection law you have the right to:",
        [
          "ask for a copy of the personal information we hold about you",
          "ask us to correct information that is wrong or incomplete",
          "ask us to delete your information",
          "ask us to limit how we use your information",
          "object to us using your information on the basis of legitimate interests",
          "ask us to transfer information you gave us to another organisation, where this applies",
          "withdraw your consent at any time, where we rely on consent",
        ],
        "To use any of these rights, email us at {email}. There is usually no charge, and we will respond within one month.",
      ],
    },
    {
      heading: "Complaints",
      blocks: [
        "If you're unhappy with how we've handled your information, please contact us first so we can try to put it right.",
        "You also have the right to complain to the Information Commissioner's Office (ICO), the UK's data protection regulator: visit ico.org.uk/make-a-complaint or call 0303 123 1113.",
      ],
    },
    {
      heading: "Young people",
      blocks: [
        "This website is intended for adults. If you're under 18, please ask a parent or guardian to contact us on your behalf.",
      ],
    },
    {
      heading: "Changes to this notice",
      blocks: [
        "We may update this notice from time to time. The latest version will always be on this page, with the date it was last updated at the top.",
      ],
    },
  ] as { heading: string; blocks: (string | string[])[] }[],
};
