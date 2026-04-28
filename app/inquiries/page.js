'use client';

import { useState } from 'react';

export default function InquiriesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('Residential');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[type="text"]').value;
    const vision = form.querySelector('textarea').value;
    const subject = encodeURIComponent(`New ${projectType} Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nProject Type: ${projectType}\n\n${vision}`);
    window.location.href = `mailto:Sean@levelstoneusa.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight text-primary">
            Begin the <br />
            <span className="italic">Dialogue.</span>
          </h1>
        </div>
        <div className="max-w-xs pb-4">
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            We invite you to share the vision of your upcoming architectural or interior project. Every masterpiece begins with an inquiry.
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left Column: Form */}
        <section className="lg:col-span-7">
          {submitted ? (
            <div className="p-12 bg-surface-container-low rounded-lg border-l-4 border-secondary text-center h-full flex flex-col justify-center">
              <span className="material-symbols-outlined text-5xl text-secondary mb-4">check_circle</span>
              <h3 className="font-serif text-3xl mb-2">Inquiry Received</h3>
              <p className="font-body text-on-surface-variant">Our concierge will be in touch shortly to discuss your vision.</p>
            </div>
          ) : (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Full Name</label>
                <input required className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:outline-none focus:border-primary px-0 font-serif text-2xl placeholder:text-stone-300 transition-all duration-400" placeholder="Julian Vane" type="text" />
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Project Type</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  {['Residential', 'Commercial', 'Custom'].map((type) => (
                    <button
                      key={type}
                      className={`px-6 py-3 font-label text-[10px] uppercase tracking-widest rounded-lg transition-colors ${projectType === type ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface hover:bg-stone-200'}`}
                      type="button"
                      onClick={() => setProjectType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Your Vision</label>
                <textarea required className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:outline-none focus:border-primary px-0 font-serif text-2xl placeholder:text-stone-300 transition-all duration-400" placeholder="Describe the atmosphere and materials..." rows={4}></textarea>
              </div>
              <div className="pt-8">
                <button className="w-full md:w-auto px-16 py-6 bg-primary text-on-primary font-label text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-all duration-400 flex items-center justify-center gap-4 rounded-lg" type="submit">
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Right Column: Details & Map */}
        <aside className="lg:col-span-5 space-y-24">
          {/* Contact Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">The Office</h3>
              <div className="font-body text-sm space-y-1 text-on-surface">
                <p>11245 SE 6th Street</p>
                <p>Suite 280</p>
                <p>Bellevue, WA 98004</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">Contact</h3>
              <div className="font-body text-sm space-y-1 text-on-surface">
                <p>Sean Hansen</p>
                <p className="pt-2 underline underline-offset-4 decoration-stone-200">+1 (425) 516-5542</p>
                <p className="underline underline-offset-4 decoration-stone-200">Sean@levelstoneusa.com</p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <a
            href="https://www.google.com/maps/search/11245+SE+6th+St+Suite+280+Bellevue+WA+98004"
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/3] rounded-lg relative overflow-hidden group"
          >
            <img
              src="/image.png"
              alt="Map of Bellevue, WA office location"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">Visit Us</p>
                  <p className="font-serif text-lg italic text-white">Bellevue, WA</p>
                </div>
                <span className="material-symbols-outlined text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-400">arrow_forward</span>
              </div>
            </div>
          </a>
        </aside>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="mt-48 max-w-3xl mx-auto scroll-mt-40">
        <div className="mb-16">
          <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary block mb-2">Common Questions</span>
          <h2 className="font-serif text-4xl italic text-primary">FAQ</h2>
          <div className="h-[1px] w-16 bg-primary/20 mt-4"></div>
        </div>

        <div className="space-y-12">
          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">How many days does it take to install Levelstone?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Our process is 4 days start to finish. Some circumstances depending on temperature and size and floor conditions. If the substrate needs pre-leveling or is in need of extra prep work to remove glue etc, these can be looked at case by case to determine extra prep timeline.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Does the Levelstone overlay have perfect flawless mottling?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone is a natural, organic look and flow similar to marble and wood. Along with this comes with mottling, movement and can have small imperfections that are part of the beauty of the overlay.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Can our Levelstone color choice and style be exactly the same for other job locations or other areas of the home or building?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone is custom and natural similar to wood and marble. Every application is unique to its own mottling and movement. The color and style choice remain the same so in that aspect yes we can attain the same look for other job locations or other areas of the home or building.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">What types of sheens does Levelstone offer?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              You can pick your sheen. Matte, satin, semi gloss and gloss.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Can Levelstone overlay crack?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Concrete is known to crack. Our prep process we patch the cracks, pits and any questionable trouble spots. After that we use a very strong blanket coat of epoxy primer with broadcast sand for Levelstone to bond to. With these measures, we have not experienced cracks over a concrete substrate. If and when a &ldquo;crack&rdquo; happens, it&rsquo;s a hairline crack also called a micro fracture. Literally the size of a piece of hair. Over wood substrates such as OSB and plywood, hair line fractures will occur in some places. The integrity of the floor is sound.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">We have tile, does this need to be removed?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone can be installed over tile, as long as it&rsquo;s bonded to its substrate. Any loose tiles can be removed and patched. So no tile demo necessary to save on demo cost and time. Levelstone can also be installed over wood substrates. Cannot be installed over VCT, LVP or Linoleum.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">How thick is Levelstone overlay?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone is on average &frac14;&rdquo; to &frac38;&rdquo; thick.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">What needs to be in place before you start?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              We need appropriate lighting conditions, water source, good electrical (more than one dedicated circuit to prevent the breaker from popping) clean out area, good access. Also, all doors, closet doors, toilets, appliances removed.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">We have stairs, can Levelstone be installed on stairs?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              We prefer to install on horizontal surfaces as the material is very fluid.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">We have a lot of furniture/misc items, can we do sections at a time?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone is a seamless application. The beauty of it is the seamless flow of mottling throughout. We recommend installing the application without seams. Or where doors would be a decent point to have a seam versus a large opening.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Our project is under construction, what is the best timeframe for Levelstone installation?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              We usually come in before drywall or after mud and tape. Ultimately we can install anytime of your construction project as long as the outside elements are guarded against such as walls and windows, roof, heat, water and power sources are secure.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">We have removed our carpet/LVP, do we need to remove our trim?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              We recommend trim is removed. If necessary, we can protect the trim and pour up to it. There may be a gap/void between the top of the overlay and bottom of the trim in which you would need to consider.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">We want heated floors, can Levelstone be heated?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Absolutely. We also offer electric radiant heat. This system we prep the existing surface, install the electric radiant heating then bury the wires with a self leveling underlayment. This will add about &frac38;&rdquo; height. Once underlayment is cured we start our Levelstone overlay process.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Our concrete has light moisture in it, can Levelstone be installed?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Yes, our epoxy primer is also a moisture mitigation system up to 8 lbs. If necessary we can apply an alternative epoxy moisture mitigation system up to 25 lbs.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">We have had problems with past flooring installations failing/delaminating/coming up. Does Levelstone have these issues?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Our Levelstone prep system uses the very best technique and products available in the world. We first check your surface to evaluate if there is any previous conditions of leveling, we check the hardness and other variables. Most cases the surface is no problem and we start our prep by course diamond grinding the surface, creating a deep scratch profile. Then clean and patch any cracks or pits. Then we apply our epoxy primer/moisture mitigation system that now bonds to the deep scratch profile. We sand the wet epoxy with 30 grit. Once the epoxy primer is cured, we now pour Levelstone overlay, which will now bond to every single sand crystal that&rsquo;s in the bonded epoxy. This is basically &ldquo;welding&rdquo; the overlay to the substrate, which in turn will never delaminate from the surface of the substrate. Creating a long lasting, forever floor.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Are there any smells or VOC?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Our epoxy primer is 100 percent solids, so no VOC or smells. The end sealer we use does have a light VOC and dissipates overnight with proper ventilation.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">How long after Levelstone is installed can we walk on it?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              With proper heat conditions (60&ndash;70 degrees) can walk on it the next morning. The sealer does take 7 days to full cure against stains.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Does Levelstone stain? What about pet stains?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              We are very aware of how important this question is and our sealer system protects against spills such as pets, wines, coffee etc. We do recommend when spills or accidents happen that they do not sit on the surface for long periods of time as some acids, vinegars, ammonias could penetrate.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">How do I clean my Levelstone overlay?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Old fashion soap and water with micro fiber applicator is common. Steaming is a great option as well.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Is Levelstone slippery?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone is no more slippery than any other floor. Our top sealer has non slip factor built into it.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Can Levelstone be touched up or repaired if any trade damage or accidents happen?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Yes, we have our own color match systems that make repairs basically disappear.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">How do we protect our new Levelstone overlay?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              We recommend using Ram Board or similar to protect the new surface. Also when doing so &ldquo;float&rdquo; the Ram Board. Tape the sheets of the Ram Board to itself and NOT the floor to prevent possible tape lines. Taping Ram Board at the edges is fine. DO NOT use duct tape or plastic. Floor requires breathable protection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
