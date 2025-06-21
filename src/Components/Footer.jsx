import { mySocials } from "./Constant/index"

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy & Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social,index) => (
          <a href={social.href} target="_blank" key={index}>
            <img src={social.icon} alt={social.name} className="w-6 h-6" />
          </a>
        ))}
      </div>
      <p>© 2025 Akhilesh. All rights reserverd</p>
    </section>
  )
}

export default Footer