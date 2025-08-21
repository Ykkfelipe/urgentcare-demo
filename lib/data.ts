export const siteData = {
  header: {
    logo: "Sunnyside Barber Shop",
    menu: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Barbers", href: "#barbers" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Call Now", href: "tel:+16135231110" },
  },
  hero: {
    headline: "Fresh Cuts & Fades in Old Ottawa South",
    subheadline: "Friendly barbers, walk-ins welcome, open 6 days a week.",
    backgroundImage:
      "https://images.unsplash.com/photo-1621905251179-3e9073b41b5f?auto=format&fit=crop&w=1350&q=80",
    buttons: [
      { label: "Call Now", href: "tel:+16135231110" },
      { label: "Get Directions", href: "https://goo.gl/maps/3sP2q4qjXJ72" },
    ],
  },
  services: [
    { name: "Haircut", price: "$30" },
    { name: "Fade", price: "$35" },
    { name: "Beard Trim", price: "$15" },
    { name: "Hot Towel Shave", price: "$25" },
    { name: "Kids Cut", price: "$20" },
  ],
  barbers: [
    {
      name: "John Doe",
      title: "Master Barber",
      description:
        "Specializing in fades and classic cuts with 10+ years experience.",
      image: "https://via.placeholder.com/200",
    },
    {
      name: "Jane Doe",
      title: "Barber",
      description:
        "Friendly and professional, great with all styles.",
      image: "https://via.placeholder.com/200",
    },
  ],
  reviews: [
    {
      text:
        "Best fade I’ve had in Ottawa. The barbers really take their time and care.",
      author: "Alex P.",
    },
    {
      text:
        "Friendly staff, clean shop, and fair prices. I always leave looking sharp.",
      author: "Sarah L.",
    },
    {
      text:
        "Walked in on a Saturday, barely waited. Great haircut, I’ll be back for sure.",
      author: "Mark D.",
    },
    {
      text:
        "These guys know how to do a proper beard trim. Highly recommend.",
      author: "Kevin R.",
    },
  ],
  contact: {
    address: "1096 Bank St, Ottawa, ON K1S 0R4",
    phone: "(613) 523-1110",
    hours: [
      { days: "Mon–Fri", time: "10 AM – 7 PM" },
      { days: "Sat", time: "9 AM – 5 PM" },
      { days: "Sun", time: "Closed" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.199747082908!2d-75.68900172345107!3d45.39540887107395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce051b7dc3c7df%3A0x7bbb6d6f74a09a87!2sSunnyside%20Barber%20Shop!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca",
    social: {
      facebook: "https://www.facebook.com/SunnysideBarberShopOttawa",
    },
  },
  footer: {
    copyright: "© 2025 Sunnyside Barber Shop. All rights reserved.",
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
  },
};
