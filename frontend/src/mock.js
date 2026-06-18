export const slotData = {
  filled: 28,
  total: 40,
  remaining: 12,
  recentJoins: [
    { name: 'Simran', city: 'Lucknow', timeAgo: '1 min ago' },
    { name: 'Kavya', city: 'Mumbai', timeAgo: '6 min ago' },
    { name: 'Rahul', city: 'Delhi', timeAgo: '14 min ago' },
    { name: 'Anjali', city: 'Pune', timeAgo: '22 min ago' },
  ],
};

export const avatars = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces&q=80',
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=120&h=120&fit=crop&crop=faces&q=80',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop&crop=faces&q=80',
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=120&h=120&fit=crop&crop=faces&q=80',
];

export const partners = ['SkillUp India', 'LearnLeads', 'Side Hustle Club', 'EarnFromHome.in'];

// Student feedback — 2 image-style WhatsApp chat screenshots + 1 video testimonial.
// Images & videos must be shown WITHOUT crop (object-contain).
export const testimonials = [
  {
    id: 'riddhi',
    name: 'Riddhi',
    type: 'image',
    badge: 'MacBook Buyer',
    label: 'WhatsApp Chat',
    text: 'MacBook purchase kiya — sirf gadget nahi, ek achievement hai. Vijay sir ki guidance ne skills, growth aur self-belief sikhaya. Grateful to have a mentor like him.',
    media: 'https://customer-assets.emergentagent.com/job_landing-preview-112/artifacts/dg6qzl84_Screenshot_20260608_235938.jpg.jpeg',
  },
  {
    id: 'student-video',
    name: 'Student Testimonial',
    type: 'video',
    badge: 'Live Feedback',
    label: 'Voice Note',
    text: 'Direct from a student — real journey, real growth shared in their own words.',
    media: 'https://customer-assets.emergentagent.com/job_landing-preview-112/artifacts/2wvny21f_lv_0_20260608195542.mp4',
    poster: '/media/student-poster.jpg',
  },
  {
    id: 'neha',
    name: 'Neha',
    type: 'image',
    badge: 'Career Growth',
    label: 'WhatsApp Chat',
    text: 'Confidence aaya, step-by-step skills develop hui. Aaj jo growth ho rahi hai usme Vijay sir ka bahut bada contribution hai. Thank you sir.',
    media: 'https://customer-assets.emergentagent.com/job_landing-preview-112/artifacts/2q13qqvb_Screenshot_20260609_000517.jpg.jpeg',
  },
];

export const igHighlights = [
  { label: 'Leads', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&q=80' },
  { label: 'Meta Ads', img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=200&h=200&fit=crop&q=80' },
  { label: 'Clients', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop&q=80' },
  { label: 'Results', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&q=80' },
];

export const expertiseTags = [
  { label: 'Meta Ads Expert', icon: 'Target' },
  { label: '13.8K Followers', icon: 'Users' },
  { label: '1000+ Students', icon: 'GraduationCap' },
  { label: '₹70L+ Earned', icon: 'TrendingUp' },
];

// Achievements — only MacBook for now. iPhone will be added when assets are ready.
export const achievements = [
  {
    type: 'video',
    title: 'MacBook Purchased',
    subtitle: 'Upgrade unlocked — earned through the Meta Ads agency. A symbol of consistent growth and discipline, built from a single skill: running ads.',
    detail: 'Year 2 · The dream upgrade, earned 100% from skills',
    media: 'https://customer-assets.emergentagent.com/job_landing-preview-112/artifacts/itc6z2cd_VID_20260428_122053_541.mp4',
    poster: '/media/macbook-poster.jpg',
    accent: 'from-sky-400/25 to-indigo-400/20',
    badge: 'MacBook Unboxing',
  },
];

export const whatsappNumber = '917206523178';
export const instagramLink = 'https://www.instagram.com/vijayadz_';
export const coachPhoto = 'https://customer-assets.emergentagent.com/job_landing-preview-112/artifacts/4srb30xz_WhatsApp%20Image%202026-06-11%20at%2016.34.06.jpeg';

// Professional English WhatsApp greetings — rotated randomly on every click.
export const whatsappGreetings = [
  "Hello Vijay, I just visited your landing page and I'm really interested in your 1-on-1 mentorship program. Could you please share the details and the next steps?",
  "Hi Vijay, I'd like to learn more about how to build an independent income with Meta Ads and freelancing. Could you guide me through your coaching process?",
  "Hello Vijay, your work and student results genuinely inspired me. I'd love to know how I can join your mentorship and start my own journey.",
  "Hi Vijay, I'm ready to take action and start earning from home. Please share the details of your program along with the current availability of slots.",
  "Hello Vijay, I came across your landing page today and I'd like to reserve a mentorship slot. Could you confirm the availability for this week?",
  "Hi Vijay, I want to seriously upgrade my skills and create my own freelancing income. Could you share how your 1-on-1 mentorship works?",
  "Hello Vijay, I'd like to begin my journey towards financial independence with proper guidance. Please let me know how we can get started.",
  "Hi Vijay, I'm interested in joining your skill-coaching program. Could you walk me through the structure, support, and roadmap you provide?",
  "Hello Vijay, I'd like to understand how your students are building consistent income through Meta Ads. Please share the program details with me.",
  "Hi Vijay, I'd genuinely like to work with you and grow under your mentorship. Kindly share the details so we can move forward.",
];

let lastGreetingIndex = -1;
export const getWhatsappUrl = () => {
  let idx = Math.floor(Math.random() * whatsappGreetings.length);
  // ensure rotation — never the same as the previous click
  if (whatsappGreetings.length > 1 && idx === lastGreetingIndex) {
    idx = (idx + 1) % whatsappGreetings.length;
  }
  lastGreetingIndex = idx;
  const msg = whatsappGreetings[idx];
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

// Static fallback for non-JS contexts (used as the link href)
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappGreetings[0])}`;

export const openWhatsapp = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  if (typeof window !== 'undefined') {
    window.open(getWhatsappUrl(), '_blank', 'noopener,noreferrer');
  }
};
