const fs = require('fs');

// 1. Update Navbar.tsx
let nav = fs.readFileSync("src/components/layout/Navbar.tsx", 'utf8');
nav = nav.replace(
  /<a[\s\S]*?href="#home"[\s\S]*?<\/a>/,
  `<a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center group cursor-pointer focus:outline-none flex-shrink-0"
        >
          <img
            src="/Brand/alpha-logo.png"
            alt="Alpha Healthcare Solutions"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            loading="eager"
          />
        </a>`
s);
fs.writeFileSync("src/components/layout/Navbar.tsx", nav, 'utf8');
console.log('Navbar updated');

// 2. Update Footer.tsx
let footer = fs.readFileSync("src/components/layout/Footer.tsx", 'utf8');
footer = footer.replace(
  `<p className="text-xs text-brand-blue-400 font-bold tracking-widest uppercase">\n              Reliable Partner in Healthcare\n            </p>`,
  `<span className="text-[11px] text-slate-400 font-medium tracking-wide block">\n              Global Medical Technology & Hospital Consultancy\n            </span>`
);
fs.writeFileSync("src/components/layout/Footer.tsx", footer, 'utf8');
console.log('Footer updated');