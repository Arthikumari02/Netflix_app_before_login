const plans = [
  {
    name: 'Mobile',
    quality: '480p',
    description: ['Fair video quality', 'For your phone or tablet'],
    price: '₹149 /mo',
    bg: 'bg-gradient-to-br from-blue-900 to-black',
  },
  {
    name: 'Basic',
    quality: '720p',
    description: ['Good video quality', 'For your phone, tablet, laptop and TV'],
    price: '₹199 /mo',
    badge: 'Most Popular',
    bg: 'bg-gradient-to-br from-blue-800 to-black',
  },
  {
    name: 'Standard',
    quality: '1080p',
    description: ['Great video quality', 'For your phone, tablet, laptop and TV'],
    price: '₹499 /mo',
    bg: 'bg-gradient-to-br from-purple-800 to-black',
  },
  {
    name: 'Premium',
    quality: '4K + HDR',
    description: ['Best video quality', 'Immersive sound (spatial audio)', 'For your phone, tablet, laptop and TV'],
    price: '₹649 /mo',
    bg: 'bg-gradient-to-br from-pink-800 to-black',
  },
]

const PlanCard = ({ name, quality, description, price, badge, bg }) => (
  <div className={`flex flex-col justify-left rounded-xl p-6 text-white 
                   w-full h-auto mb-4 md:w-[24%] md:h-[260px] md:mb-0
                   ${bg} cursor-pointer hover:scale-105 transition-transform duration-300 relative`}>
    {badge && (
      <div className="absolute top-0 right-0 bg-gray-300 text-black text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg">
        {badge}
      </div>
    )}
    <h3 className="text-xl font-semibold mt-2">{name}</h3>
    <p className="text-sm opacity-80 mb-4">{quality}</p>
    <ul className="mb-6 space-y-2 text-sm">
      {description.map((line, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <span className="text-green-400">✓</span> {line}
        </li>
      ))}
    </ul>
    <p className="text-lg font-semibold mt-auto">{price}</p>
  </div>
);

const PricingPlans = () => (
  <div className="py-1 px-6 text-left text-white md:mx-0">
    <h2 className="text-2xl md:text-3xl font-bold mb-5">A plan to suit your needs</h2>
    <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap gap-0 md:gap-4">
      {plans.map((plan, idx) => (
        <PlanCard key={idx} {...plan} />
      ))}
    </div>
  </div>
);

export default PricingPlans
