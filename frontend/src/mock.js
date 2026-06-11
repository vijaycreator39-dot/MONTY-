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

// Student feedback testimonials — video format
// User has videos but not yet uploaded to YouTube. Replace `videoUrl` with YouTube embed URLs when ready.
export const testimonials = [
  {
    name: 'Sonam',
    badge: 'Skill Earner',
    label: 'Live Session with Vijay',
    text: 'Real journey, real growth — direct from a student’s voice.',
    poster: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=750&fit=crop&q=80',
    videoUrl: '',
  },
  {
    name: 'Aakash Patel',
    badge: 'Top Performer',
    label: 'Live Session with Vijay',
    text: 'Hands-on mentorship — see exactly how growth is built.',
    poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=750&fit=crop&q=80',
    videoUrl: '',
  },
  {
    name: 'Neha',
    badge: 'Career Switcher',
    label: 'Skill Update',
    text: 'Confidence aaya, step-by-step skills develop hui — aaj jo growth hai usme bada contribution hai.',
    poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=750&fit=crop&q=80',
    videoUrl: '',
  },
  {
    name: 'Riddhi',
    badge: 'MacBook Buyer',
    label: 'Achievement Story',
    text: 'MacBook purchase kiya — sirf gadget nahi, ek achievement hai. Skills, growth aur self-belief sikhaya.',
    poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&h=750&fit=crop&q=80',
    videoUrl: '',
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

export const achievements = [
  {
    title: 'iPhone Purchased',
    subtitle: 'First milestone — bought from freelancing income',
    detail: 'Year 1 · From scratch to first major buy',
    image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=800&h=600&fit=crop&q=85',
    accent: 'from-amber-400/30 to-rose-400/20',
  },
  {
    title: 'MacBook Purchased',
    subtitle: 'Upgrade unlocked — earned through Meta Ads agency',
    detail: 'Year 2 · A symbol of consistent growth',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&h=600&fit=crop&q=85',
    accent: 'from-sky-400/30 to-indigo-400/20',
  },
];

export const whatsappNumber = '917206523178';
export const instagramLink = 'https://www.instagram.com/vijayadz_';
export const coachPhoto = 'https://customer-assets.emergentagent.com/job_landing-preview-112/artifacts/4srb30xz_WhatsApp%20Image%202026-06-11%20at%2016.34.06.jpeg';

// Rotating professional English greetings — picked randomly each time WhatsApp is opened.
export const whatsappGreetings = [
  "Hello Vijay, I just visited your website and I'd love to learn more about your mentorship program. Could you please share the details?",
  "Hi Vijay, I'm interested in building my own income from home. Can you walk me through how your coaching works?",
  "Hello Vijay, I came across your landing page and I'm seriously considering joining your mentorship. Please share the next steps.",
  "Hi Vijay, I want to start my journey towards financial independence. Could you guide me on how to begin?",
  "Hello Vijay, your story really resonated with me. I'd like to know more about your 1-on-1 mentorship program.",
  "Hi Vijay, I'm ready to learn Meta Ads and freelancing skills. Please share more about your coaching program.",
  "Hello Vijay, I'd like to reserve a mentorship slot. Could you please confirm availability and the next steps?",
];

export const getWhatsappUrl = () => {
  const msg =
    whatsappGreetings[Math.floor(Math.random() * whatsappGreetings.length)];
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

// Static fallback for non-JS contexts
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappGreetings[0])}`;

export const openWhatsapp = (e) => {
  if (e && e.preventDefault) e.preventDefault();
  if (typeof window !== 'undefined') {
    window.open(getWhatsappUrl(), '_blank', 'noopener,noreferrer');
  }
};
