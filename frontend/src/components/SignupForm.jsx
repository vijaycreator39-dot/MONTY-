import React, { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const SignupForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    age: '',
    gender: '',
    city: '',
    profession: '',
    goal: '',
  });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.whatsapp) {
      toast({ title: 'Please fill required fields', description: 'Name and WhatsApp number are required.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('vr_signups') || '[]');
        existing.push({ ...form, at: new Date().toISOString() });
        localStorage.setItem('vr_signups', JSON.stringify(existing));
      } catch {}
      setLoading(false);
      toast({
        title: 'Spot reserved!',
        description: "We've saved your details. Vijay will reach out on WhatsApp soon.",
      });
      setForm({ name: '', whatsapp: '', age: '', gender: '', city: '', profession: '', goal: '' });
    }, 700);
  };

  const inputCls =
    'w-full bg-white border border-[#4a1024]/15 rounded-xl px-4 py-3.5 text-[14px] text-[#1a0d12] placeholder:text-[#1a0d12]/35 focus:outline-none focus:ring-2 focus:ring-[#4a1024]/30 focus:border-[#4a1024]/40 transition-colors';

  return (
    <section id="signup" className="relative py-24 bg-cream-2 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#4a1024]/10" />
        <div className="absolute left-20 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-[#4a1024]/10" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#4a1024]/10 shadow-soft mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 pulse-soft" />
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1a0d12]/70">
              Limited daily slots
            </span>
          </div>
          <h2 className="text-[40px] sm:text-[52px] leading-[1.05] tracking-tight font-bold text-[#1a0d12]">
            Your independent life{' '}
            <span className="font-serif-italic text-[#4a1024]">starts today</span>
          </h2>
          <p className="mt-5 text-[16px] text-[#1a0d12]/65 max-w-md mx-auto">
            Fill the form below. Within minutes you’ll be connected with Vijay on WhatsApp.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="bg-white rounded-2xl border border-[#4a1024]/10 shadow-card p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                value={form.name}
                onChange={set('name')}
                placeholder="e.g. Priya Sharma"
                className={inputCls}
              />
            </div>
            <div>
              <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">
                WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <input
                value={form.whatsapp}
                onChange={set('whatsapp')}
                placeholder="+91 9XXXXXXXXX"
                className={inputCls}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">Your Age</label>
                <input
                  value={form.age}
                  onChange={set('age')}
                  placeholder="22"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">Gender</label>
                <select value={form.gender} onChange={set('gender')} className={inputCls}>
                  <option value="">Select gender</option>
                  <option value="male">♂ Male</option>
                  <option value="female">♀ Female</option>
                  <option value="na">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">City</label>
                <input
                  value={form.city}
                  onChange={set('city')}
                  placeholder="e.g. Lucknow"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">Current Profession</label>
                <select value={form.profession} onChange={set('profession')} className={inputCls}>
                  <option value="">Choose one</option>
                  <option>Student</option>
                  <option>Job-holder</option>
                  <option>Housewife</option>
                  <option>Self-employed / Business</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-semibold text-[#1a0d12] mb-2">What’s your goal?</label>
              <select value={form.goal} onChange={set('goal')} className={inputCls}>
                <option value="">Pick what fits you best</option>
                <option>📚 Skill learning — I want to learn new skills</option>
                <option>💰 Side income — Extra earning along with current work</option>
                <option>🚀 Job alternative — Replace my job with online income</option>
                <option>🤔 Other / Just exploring</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#4a1024] hover:bg-[#3a0a1c] disabled:opacity-70 text-white py-4 rounded-xl font-semibold text-[15px] transition-all hover:scale-[1.01] shadow-card"
            >
              {loading ? 'Reserving…' : 'Reserve My Spot'}
              {!loading && <ArrowRight size={16} />}
            </button>

            <p className="text-center text-[13px] text-[#1a0d12]/55">
              Either Vijay will WhatsApp you, or your spot will be reserved and he’ll reach out within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-1.5 text-[12px] text-[#1a0d12]/50">
              <Lock size={12} />
              100% private. Your details are never shared.
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
