/**
 * Contenu long des pages produit (/products/<slug>).
 *
 * Tout ce qui est ecrit ici provient des sites publics des produits,
 * consultes le 20 octobre 2026. Rien n'est invente : quand une
 * information manquait (tarifs chiffres, nombre d'utilisateurs, dates
 * de lancement), elle a ete laissee de cote plutot que devinee.
 *
 * products.ts reste la source des cartes du portfolio ; ce fichier ne
 * porte que le contenu redactionnel des pages dediees.
 */

export interface ProductSection {
  /** Formule en question quand c'est naturel : les moteurs IA extraient mieux. */
  heading: string;
  body: string[];
}

export interface ProductFeature {
  name: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductPage {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  /** Titre H1 de la page. */
  heading: string;
  /**
   * Premier paragraphe : doit repondre seul, sans contexte. C'est le
   * passage qu'un moteur de reponse recopie.
   */
  lead: string;
  sections: ProductSection[];
  features: ProductFeature[];
  audience: string[];
  faq: ProductFaq[];
  /** Libelle du bouton vers le site du produit. */
  visitLabel: string;
}

export const productPages: Record<string, ProductPage> = {
  idishyou: {
    slug: "idishyou",
    metaTitle: "iDishYou | Home-cooked food marketplace | M.A.D for Business",
    metaDescription:
      "iDishYou is a marketplace connecting customers with verified home cooks nearby. No service fee for customers, AI photo ordering, and QR code collection.",
    heading: "iDishYou — a marketplace for home-cooked food",
    lead: "iDishYou is a two-sided marketplace that connects people with verified home cooks in their own neighbourhood. Customers browse dishes made nearby, order them or request a dish they are craving, and collect the food with a QR code. There is no service fee for customers.",
    sections: [
      {
        heading: "What problem does iDishYou solve?",
        body: [
          "Food delivery platforms are built around restaurants. They add service fees, commission layers and delivery charges that push up the final price, and the food itself is produced at industrial pace.",
          "At the same time, skilled home cooks have no straightforward way to sell what they make. Word of mouth does not scale, and setting up as a restaurant is far beyond what an individual cook can carry.",
          "iDishYou sits between the two. It gives home cooks a storefront without a restaurant, and gives customers access to food made in a domestic kitchen, at a price that is not inflated by intermediaries.",
        ],
      },
      {
        heading: "How does ordering work?",
        body: [
          "The flow is built around location. The app locates the customer, then shows the dishes available from cooks within reach on a geographic radar.",
          "From there the customer can either order a dish that is already listed, or post a craving: a description of what they want to eat. Cooks nearby respond with offers, and the customer chooses.",
          "Collection is handled with a QR code, which closes the order and confirms the handover. Customers then rate the cook, which is what keeps the quality signal reliable over time.",
        ],
      },
      {
        heading: "What is the AI photo ordering feature?",
        body: [
          "A customer can photograph a dish they want rather than describe it in words. The app analyses the image, identifies what it is, and pre-fills the order form automatically.",
          "This removes the hardest part of ordering something you cannot name. It matters in a marketplace that spans many cuisines, where the customer may recognise a dish by sight without knowing what it is called.",
        ],
      },
      {
        heading: "How do home cooks use it?",
        body: [
          "Cooks list the dishes they are willing to make, set their own terms, and respond to cravings posted nearby. The platform handles discovery, the order flow and the rating system.",
          "Cooks are vetted before they can sell, and kitchen standards are part of that check. The platform also covers private events, where a home cook can be booked to cook for a gathering rather than for a single order.",
        ],
      },
    ],
    features: [
      {
        name: "Geographic radar",
        description:
          "Dishes are surfaced by proximity, so what a customer sees is genuinely available near them.",
      },
      {
        name: "Craving requests",
        description:
          "Customers can ask for a dish instead of browsing, and receive offers from cooks who can make it.",
      },
      {
        name: "AI dish recognition",
        description:
          "A photo is enough to start an order: the app identifies the dish and fills in the form.",
      },
      {
        name: "QR code collection",
        description:
          "Handover is confirmed with a scan, which closes the order cleanly on both sides.",
      },
      {
        name: "Rating system",
        description:
          "Reviews after each order are what keep the trust signal meaningful in a marketplace of individuals.",
      },
      {
        name: "Stripe payments",
        description:
          "Card payments are handled through Stripe, alongside the option to pay the cook in cash.",
      },
      {
        name: "Ten languages",
        description:
          "The interface is localised, a requirement for a marketplace built around neighbourhoods rather than countries.",
      },
      {
        name: "Vetted kitchens",
        description:
          "Cooks are verified before listing, with kitchen standards part of the check.",
      },
    ],
    audience: [
      "People who want home-cooked food rather than restaurant delivery",
      "Home cooks who want to sell without opening a restaurant",
      "Anyone organising a private event and looking for a cook",
      "Communities where a specific cuisine is hard to find commercially",
    ],
    faq: [
      {
        question: "Does iDishYou charge customers a service fee?",
        answer:
          "No. There is no service fee for customers, and payment to the cook can be made in cash at collection. Card payments are also supported through Stripe.",
      },
      {
        question: "How are home cooks verified?",
        answer:
          "Cooks are vetted before they can list dishes, and kitchen cleanliness is part of that review. The rating system then provides an ongoing quality signal from customers who actually ordered.",
      },
      {
        question: "Can I request a dish that nobody has listed?",
        answer:
          "Yes. You can post what you are craving and cooks nearby respond with offers. You then choose which offer to accept.",
      },
      {
        question: "Can I book a home cook for an event?",
        answer:
          "Yes. Alongside individual orders, the platform covers private events where a cook prepares food for a gathering.",
      },
    ],
    visitLabel: "Visit iDishYou",
  },

  ravium: {
    slug: "ravium",
    metaTitle: "Ravium | Festival app for crews, lineups and music matching",
    metaDescription:
      "Ravium is a festival app that matches people on music taste, keeps a crew together on site, and flags lineup clashes. Ravium Business covers publishing and on-site scanning.",
    heading: "Ravium — the festival app for your crew and your lineup",
    lead: "Ravium is a festival application built around three problems festival-goers actually have: finding people with the same music taste, keeping a group together on a crowded site, and spotting when two acts you want to see are scheduled against each other. A separate product, Ravium Business, gives organisers the publishing and on-site tools.",
    sections: [
      {
        heading: "What problem does Ravium solve?",
        body: [
          "A festival is a logistical problem disguised as a party. Groups split up and cannot find each other, phone batteries die, and the lineup is a grid that nobody has time to cross-reference properly.",
          "Most festival apps are a programme in digital form: the schedule, a map, and little else. They tell you what is happening without helping with the part that is genuinely hard, which is coordinating with other people in real time.",
          "Ravium is built around the social layer instead. The lineup is there, but the product is about who you are with and what you are going to miss.",
        ],
      },
      {
        heading: "How does music matching work?",
        body: [
          "Ravium matches people on music taste rather than on proximity or mutual friends. The result is a way to find people at the same event who listen to the same things.",
          "The app builds this into a profile the platform calls a Rave Aura, which carries across events rather than resetting each time. A Festival Passport records the events attended.",
        ],
      },
      {
        heading: "What does it do before, during and after an event?",
        body: [
          "Before the event, the work is planning: building a lineup, seeing where the clashes fall, and organising the crew.",
          "During the festival, it becomes coordination. The crew feature is about keeping a group together on site, and wallet and loyalty features cover what happens at the bar and the merchandise stand.",
          "After the night, the forum and passport carry the event forward rather than ending it when the gates close.",
        ],
      },
      {
        heading: "What does Ravium offer organisers?",
        body: [
          "Ravium Business is a separate side of the same ecosystem. Organisers publish their festival, run a loyalty programme, and handle staff and on-site scanning.",
          "That split matters architecturally: the consumer app and the organiser tools share an ecosystem without sharing an interface, because the two audiences have almost nothing in common operationally.",
        ],
      },
    ],
    features: [
      {
        name: "Music Match",
        description:
          "Find people at the same event whose music taste genuinely overlaps with yours.",
      },
      {
        name: "Crew",
        description:
          "Keep a group together on a large site, which is the single most common festival problem.",
      },
      {
        name: "Lineup and clashes",
        description:
          "Build a personal schedule and see immediately where two acts you want collide.",
      },
      {
        name: "Wallet and rewards",
        description:
          "Handles spending and loyalty on site rather than sending people back to cash or cards.",
      },
      {
        name: "Festival Passport",
        description:
          "A record of the events attended, so a profile accumulates rather than resetting.",
      },
      {
        name: "Festival Forum",
        description:
          "A community space tied to the event, active before and after it rather than only during.",
      },
      {
        name: "Publishing for organisers",
        description:
          "Ravium Business lets an organiser publish a festival and run its programme.",
      },
      {
        name: "Staff and on-site scanning",
        description:
          "Entry and verification tooling for the people working the event.",
      },
    ],
    audience: [
      "Festival-goers who attend with a group",
      "People who want to meet others through music taste rather than location",
      "Festival and event organisers",
      "On-site staff handling entry and verification",
    ],
    faq: [
      {
        question: "Is Ravium free to use?",
        answer:
          "The festival tools are free and live for festival-goers. Ravium Business, the organiser side, is a separate product.",
      },
      {
        question: "What is a Rave Aura?",
        answer:
          "It is the profile Ravium builds from your music taste and activity. It carries across events rather than resetting for each festival, which is what makes matching work over time.",
      },
      {
        question: "Can organisers publish their own festival?",
        answer:
          "Yes. Ravium Business covers publishing an event, running a loyalty programme, and handling staff and on-site scanning.",
      },
    ],
    visitLabel: "Visit Ravium",
  },

  syndichubs: {
    slug: "syndichubs",
    metaTitle: "SyndicHubs | Condominium management software | M.A.D for Business",
    metaDescription:
      "SyndicHubs is a SaaS platform for condominium management: service charges, payment tracking, arrears, accounting, general meetings and incident reports, for professional and volunteer managers.",
    heading: "SyndicHubs — condominium management software",
    lead: "SyndicHubs is a SaaS platform that runs the administration of a co-owned building: issuing service charges, tracking payments and arrears, keeping the accounts, organising general meetings and handling incident reports. It is built for professional property managers and for volunteer managers running their own building.",
    sections: [
      {
        heading: "What does a property manager actually do?",
        body: [
          "A syndic, or property manager, administers a building owned by several people. That means budgeting and accounting for shared costs, calling in service charges from each owner, chasing the ones who do not pay, commissioning repairs, running the general meeting where decisions are voted, and keeping everyone informed.",
          "In most buildings this work is spread across a notebook, a spreadsheet and a WhatsApp group. Nothing reconciles, nobody can see the current state of the accounts, and the manager spends their time answering the same questions individually.",
          "SyndicHubs replaces that with one system where the record is shared.",
        ],
      },
      {
        heading: "How is it organised?",
        body: [
          "There are two distinct spaces. The property manager gets the administration side: accounts, charge calls, arrears, documents, meetings. Each resident gets their own space showing what they owe, what has been paid, what is being repaired and what is being voted on.",
          "That separation is the point. Most of a manager's workload is answering questions the resident could have answered themselves if the information had been visible to them.",
        ],
      },
      {
        heading: "What does the AI layer do?",
        body: [
          "The AI features are aimed at administrative volume rather than at decision-making. Incident reports are triaged automatically, so what arrives from residents is sorted before the manager reads it. Invoices are read automatically rather than keyed in by hand.",
          "Arrears are tracked and surfaced, communication to residents is assisted, and the co-ownership rules are built into the system so that what is proposed stays within what the building's own regulations allow.",
          "A dashboard sits over all of it, which is what a volunteer manager needs most: a single view of whether the building is financially sound.",
        ],
      },
      {
        heading: "How is money handled?",
        body: [
          "SyndicHubs does not hold the building's funds. Payments flow directly, and the platform records them rather than sitting in the middle of them.",
          "That is a deliberate design choice, and it is the right one: holding other people's building reserves turns a software product into a regulated financial operation. Every action is logged, so the audit trail exists without the platform ever touching the money.",
          "The platform is hosted on Google Cloud with encrypted data.",
        ],
      },
      {
        heading: "How long does setup take?",
        body: [
          "Three steps: create the building, invite the residents, issue the first charge call. The onboarding is built so that a volunteer manager can complete it without training.",
          "Pricing is per unit, per month, which scales with the size of the building rather than imposing a flat cost on a small one.",
        ],
      },
    ],
    features: [
      {
        name: "Service charges and payment tracking",
        description:
          "Issue charge calls and see exactly what has been paid and by whom, without reconciling a spreadsheet.",
      },
      {
        name: "Arrears management",
        description:
          "Unpaid charges are surfaced and chased rather than discovered at the end of the year.",
      },
      {
        name: "Accounting",
        description:
          "The building's accounts are kept in the same system that issues the charges.",
      },
      {
        name: "General meetings and voting",
        description:
          "Organise the meeting and run the vote inside the platform, with the result recorded.",
      },
      {
        name: "Incident reports with AI triage",
        description:
          "Residents report problems and the system sorts them before they reach the manager.",
      },
      {
        name: "Automatic invoice reading",
        description:
          "Supplier invoices are read by the system instead of being entered by hand.",
      },
      {
        name: "Resident portal",
        description:
          "Every resident sees their own charges, payments and the state of ongoing work.",
      },
      {
        name: "Multi-building support",
        description:
          "A professional manager can run more than one building from the same account.",
      },
    ],
    audience: [
      "Professional property managers running several buildings",
      "Volunteer managers administering their own co-owned building",
      "Residents who want visibility on charges and decisions",
      "Building councils that need an auditable record",
    ],
    faq: [
      {
        question: "Does SyndicHubs hold the building's money?",
        answer:
          "No. Payments flow directly and the platform records them without ever holding the funds. Every action is logged, so the audit trail exists without the platform sitting in the payment chain.",
      },
      {
        question: "How much does SyndicHubs cost?",
        answer:
          "Pricing is charged per unit, per month, so it scales with the size of the building. Current rates are published on the SyndicHubs site.",
      },
      {
        question: "Can it manage more than one building?",
        answer:
          "Yes. A professional manager can administer several buildings from a single account.",
      },
      {
        question: "Is it suitable for a volunteer manager?",
        answer:
          "Yes. Setup is three steps — create the building, invite residents, issue charges — and the dashboard is designed for someone administering their own building rather than doing it professionally.",
      },
      {
        question: "Where is the data hosted?",
        answer:
          "On Google Cloud, encrypted, with every action recorded in an audit log.",
      },
    ],
    visitLabel: "Visit SyndicHubs",
  },

  skoolhubs: {
    slug: "skoolhubs",
    metaTitle:
      "SkoolHubs | School management software in Morocco | M.A.D for Business",
    metaDescription:
      "SkoolHubs is a SaaS school management platform for Morocco, complementary to Massar. It connects administrators, teachers, parents and students: grades, attendance, payments and AI lesson planning.",
    heading: "SkoolHubs — school management software for Morocco",
    lead: "SkoolHubs is a SaaS platform that connects the four groups involved in running a school: administrators, teachers, parents and students. It covers grades, attendance, school fee payments and communication, and it is designed to work alongside Massar, Morocco's national school system, rather than replace it.",
    sections: [
      {
        heading: "What problem does SkoolHubs solve?",
        body: [
          "School administration in practice runs on fragmented data: attendance on paper, grades in a spreadsheet, fees in a ledger, and parent communication by phone or messaging app. Nothing is connected, so any question that spans two of those systems has to be answered manually.",
          "The cost falls hardest on teachers, who spend a significant part of the week on administration rather than teaching, and on parents, who find out about a problem long after it happened.",
          "SkoolHubs puts the four stakeholders in one system where the data is shared in real time.",
        ],
      },
      {
        heading: "How does it relate to Massar?",
        body: [
          "Massar is the national school management system used across Morocco. SkoolHubs is positioned as complementary to it, not as a replacement.",
          "That distinction matters for any school considering it: adopting SkoolHubs does not mean leaving the national system. It adds the day-to-day operational layer — real-time communication, digital gradebooks, payments, mobile access — on top of the institutional record.",
        ],
      },
      {
        heading: "What does each stakeholder get?",
        body: [
          "Administrators manage the school's structure, staff and data synchronisation. Teachers get gradebooks, attendance and a direct line to parents without going through the office.",
          "Parents see their child's grades, reports and absences, and receive alerts as things happen rather than at the end of term. Students manage their own assignments and track their academic record.",
          "Each group has its own portal, because the four have genuinely different needs and merging them into one interface serves none of them well.",
        ],
      },
      {
        heading: "What does the AI assistant do for teachers?",
        body: [
          "The AI features target lesson preparation, which is where a teacher's unpaid hours go. The system generates lesson plans, quizzes and schemes of work aligned with the official curriculum.",
          "SkoolHubs states that this is designed to save teachers more than twenty hours a week of administrative work. Whether that figure holds in a given school depends on how much of the preparation was already digitised.",
        ],
      },
      {
        heading: "How do payments and data import work?",
        body: [
          "School fees are collected through international payment gateways and digital wallets, rather than in cash at the office.",
          "Existing student data and grades can be imported and exported through Excel or CSV in one click, which is the practical condition for a school to migrate at all. A school that cannot bring its existing records with it will not switch.",
        ],
      },
    ],
    features: [
      {
        name: "Four dedicated portals",
        description:
          "Administrators, teachers, parents and students each get an interface built for what they actually do.",
      },
      {
        name: "Digital gradebooks",
        description:
          "Grades are recorded once and visible immediately to the people who need them.",
      },
      {
        name: "QR check-ins",
        description:
          "Attendance is taken by scan rather than logged by hand and keyed in later.",
      },
      {
        name: "AI lesson notes",
        description:
          "Lesson plans, quizzes and schemes of work generated in line with the official curriculum.",
      },
      {
        name: "Multi-gateway payments",
        description:
          "School fees collected through international payment gateways and digital wallets.",
      },
      {
        name: "Excel and CSV import",
        description:
          "Existing student data and grades move in and out in one click, which makes migration realistic.",
      },
      {
        name: "Unified mobile app",
        description:
          "Parents and students get attendance, grades and notifications on the phone they already use.",
      },
      {
        name: "Instant notifications",
        description:
          "Parents are told about an absence or a result when it happens, not weeks later.",
      },
    ],
    audience: [
      "Private schools in Morocco digitising their administration",
      "School administrators managing staff, structure and records",
      "Teachers who want preparation and admin time back",
      "Parents who want visibility on their child's schooling as it happens",
    ],
    faq: [
      {
        question: "Does SkoolHubs replace Massar?",
        answer:
          "No. SkoolHubs is complementary to Massar, Morocco's national school management system. It adds the day-to-day operational layer — communication, gradebooks, payments, mobile access — on top of the national record rather than replacing it.",
      },
      {
        question: "Can a school import its existing data?",
        answer:
          "Yes. Student data and grades can be imported and exported through Excel or CSV in one click.",
      },
      {
        question: "How do parents pay school fees?",
        answer:
          "Through international payment gateways and digital wallets supported by the platform, rather than in cash at the school office.",
      },
      {
        question: "What does the AI assistant actually generate?",
        answer:
          "Lesson plans, quizzes and schemes of work, aligned with the official curriculum. It is aimed at teacher preparation time rather than at grading or assessment decisions.",
      },
    ],
    visitLabel: "Visit SkoolHubs",
  },

  showyourcause: {
    slug: "showyourcause",
    metaTitle: "ShowYourCause | Cause-driven clothing and fashion with purpose",
    metaDescription:
      "ShowYourCause is an online clothing store where each design carries a cause. Pieces are built around values, identity and culture, so what people wear states what they stand for.",
    heading: "ShowYourCause — fashion that carries a cause",
    lead: "ShowYourCause is an online clothing store built on a single idea: a garment is a message. Each piece is designed around a cause — values, identity, culture, belonging — so that what someone wears states what they stand for rather than which brand they bought.",
    sections: [
      {
        heading: "What makes ShowYourCause different from a clothing brand?",
        body: [
          "Most clothing sells identity indirectly: a logo signals a price bracket and a taste. The message is the brand itself.",
          "ShowYourCause inverts that. The design is the message, and the brand is the carrier. The store is organised by cause rather than by product category, so someone arrives looking for what they want to say rather than for a particular garment.",
          "The company's own framing is that designs are not just visuals, they are messages.",
        ],
      },
      {
        heading: "How is the store organised?",
        body: [
          "The catalogue is built around three ideas: carrying a cause, wearing a cause, and living one. Causes are browsable in their own right, which is what makes the store navigable by intention rather than by size and colour.",
          "The pieces themselves are positioned as intentional design made with care, and the store works with partners rather than operating entirely alone.",
        ],
      },
      {
        heading: "Who is it for?",
        body: [
          "It is for people who already identify with a cause and want it visible rather than stated. That includes communities, movements and individuals who find ordinary branded clothing says nothing they care about.",
          "It also works for groups who need a shared visual identity around a cause, where a garment does the work a badge or a slogan would do less durably.",
        ],
      },
    ],
    features: [
      {
        name: "Organised by cause",
        description:
          "The catalogue is browsable by what a design stands for, not only by product type.",
      },
      {
        name: "Design as message",
        description:
          "Each piece is built around a statement rather than around a logo.",
      },
      {
        name: "Partner collaborations",
        description:
          "The store works with partners rather than operating as a closed label.",
      },
      {
        name: "Intentional production",
        description:
          "Pieces are positioned on deliberate design and care in making rather than on volume.",
      },
    ],
    audience: [
      "People who want what they wear to state what they believe",
      "Communities and movements that need a shared visual identity",
      "Anyone looking for clothing with a message rather than a logo",
    ],
    faq: [
      {
        question: "What does ShowYourCause sell?",
        answer:
          "Clothing where each design is built around a cause — values, identity, culture — so the garment carries a message rather than a brand logo.",
      },
      {
        question: "Can I browse by cause rather than by product?",
        answer:
          "Yes. The store is organised around causes, so you can start from what you want to stand for rather than from a garment type.",
      },
    ],
    visitLabel: "Visit ShowYourCause",
  },
};

export function getProductPage(slug: string): ProductPage | undefined {
  return productPages[slug];
}
