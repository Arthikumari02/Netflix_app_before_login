import React from 'react'

const plans = [
  {
    name: 'Mobile',
    quality: '480p',
    description: ['Fair video quality', 'For your phone or tablet'],
    price: '₹149 /mo',
    bg: 'bg-gradient-to-b from-blue-900 to-black',
  },
  {
    name: 'Basic',
    quality: '720p',
    description: ['Good video quality', 'For your phone, tablet, laptop and TV'],
    price: '₹199 /mo',
    badge: 'Most Popular',
    bg: 'bg-gradient-to-b from-blue-800 to-black',
  },
  {
    name: 'Standard',
    quality: '1080p',
    description: ['Great video quality', 'For your phone, tablet, laptop and TV'],
    price: '₹499 /mo',
    bg: 'bg-gradient-to-b from-purple-800 to-black',
  },
  {
    name: 'Premium',
    quality: '4K + HDR',
    description: ['Best video quality', 'Immersive sound (spatial audio)', 'For your phone, tablet, laptop and TV'],
    price: '₹649 /mo',
    bg: 'bg-gradient-to-b from-pink-800 to-black',
  },
]

const PlanCard = ({ name, quality, description, price, badge, bg }) => (
  <div className={`rounded-xl p-6 text-white w-[23%] ${bg} cursor-pointer hover:scale-105 transition-transform duration-300`}>
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-sm opacity-80 mb-4">{quality}</p>
    <ul className="mb-6 space-y-2 text-sm">
      {description.map((line, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span>✓</span> {line}
        </li>
      ))}
    </ul>
    <p className="text-lg font-semibold">{price}</p>
    {badge && (
      <div className="relative top-2 right-2 bg-gray-200 text-black text-xs px-2 py-1 rounded">
        {badge}
      </div>
    )}
  </div>
)

const PricingPlans = () => (
  <div className="py-1 px-6 text-left text-white mx-[10%]">
    <h2 className="text-3xl font-bold mb-10">A plan to suit your needs</h2>
    <div className="flex justify-center gap-3 flex-wrap">
      {plans.map((plan, idx) => (
        <PlanCard key={idx} {...plan} />
      ))}
    </div>
  </div>
)

export default PricingPlans
