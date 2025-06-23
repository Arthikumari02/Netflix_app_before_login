import LanguageSelector from '../language'

const footerLinks = [
  ['FAQ', 'Investor Relations', 'Privacy', 'Speed Test'],
  ['Help Centre', 'Jobs', 'Cookie Preferences', 'Legal Notices'],
  ['Account', 'Ways to Watch', 'Corporate Information', 'Only on Netflix'],
  ['Media Centre', 'Terms of Use', 'Contact Us'],
]

const FooterWithJoinButton = () => {

  return (
    <>
      <div className="my-1 flex flex-col items-center justify-center mb-20">
        <div className="flex justify-between text-white rounded-2xl px-6 py-6 text-center w-full max-w-[75%]"  style={{
             backgroundImage: `url("https://res.cloudinary.com/dft7fsze1/image/upload/v1747378748/nvgizh6wnob8vcvynvrz.png")`,
            }}>
          <h2 className="text-xl font-bold">
            Discover your next favourites, plus new releases every week
          </h2>
          <a
            href="https://www.netflix.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative top-2 right-2 bg-transparent text-white text-xs border-2 border-white px-2 py-1 rounded"
          >
            More About Netflix
          </a>
        </div>
          <button className="w-[15%] mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full">
            Join now
          </button>
        
      </div>
    
      <footer className="bg-black text-white px-3 py-12 text-sm">
        <div className="max-w-6xl mx-[10%]">
          <p className="mb-6">
            Questions? Call{' '}
            <a href="tel:000-800-919-1743" className="underline">
              000-800-919-1743
            </a>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {footerLinks.map((column, idx) => (
              <ul key={idx} className="space-y-2">
                {column.map((link, i) => (
                  <li key={i}>
                   <a href="/#" className="underline">
                    {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
            <LanguageSelector/>
          <p className="mb-2">Netflix India</p>
          <p className="text-xs text-white/50">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
            <a href="/#" className="underline">
              Learn more.
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default FooterWithJoinButton
