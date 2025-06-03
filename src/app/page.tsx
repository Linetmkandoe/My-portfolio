import Image from "next/image";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaWifi,
  FaFigma,
  FaSearch,
  FaUsers,
  FaFileAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiTableau,
  SiCoda,
  SiJavascript,
  SiEspressif,
  
} from "react-icons/si";

import { MdDesignServices } from "react-icons/md";
import { PiGraph } from "react-icons/pi";
import { Linkedin, Github,  } from 'lucide-react';
import { FaBehance } from "react-icons/fa";

export default function Home() {
  const skills = [
    { name: "Figma", icon: <FaFigma className="text-green-600 text-7xl" />, level: "95%" },
    { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="text-green-600 text-7xl" />, level: "98%" },
    { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-green-600 text-7xl" />, level: "90%" },
    { name: "React", icon: <FaReact className="text-green-600 text-7xl" />, level: "85%" },
    { name: "Next.js", icon: <SiNextdotjs className="text-green-600 text-7xl" />, level: "85%" },
    { name: "JavaScript", icon: <SiJavascript className="text-green-600 text-7xl" />, level: "88%" },
    { name: "Python", icon: <FaPython className="text-green-600 text-7xl" />, level: "75%" },
    { name: "Git", icon: <FaGitAlt className="text-green-600 text-7xl" />, level: "80%" },
    { name: "Tableau", icon: <SiTableau className="text-green-600 text-7xl" />, level: "60%" },
    { name: "Coda", icon: <SiCoda className="text-green-600 text-7xl" />, level: "70%" },
  ];

  return (
    <div className="
  grid 
  grid-rows-[20px_1fr_20px] 
  items-center 
  justify-items-center 
  min-h-screen 
  p-4 sm:p-8 md:p-12 lg:p-20 
  pb-20 
  ml-0 sm:ml-4 md:ml-8 lg:ml-12 
  gap-8 sm:gap-12 md:gap-16 
  font-[family-name:var(--font-geist-sans)]
">

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-80 p-4 flex justify-center">
          
          <nav>
    <ul className="flex space-x-10 text-gray-700 text-2xl font-medium">
      <h1 className="text-2xl font-extrabold  text-green-400 font-[cursive]">Linet Mkandoe Ndau</h1>
      <li><a href="#home" className="hover:text-green-400">Home</a></li>
      <li><a href="#about" className="hover:text-green-400">About</a></li>
      <li><a href="#skills" className="hover:text-green-400">Skills</a></li>
      <li><a href="#projects" className="hover:text-green-400">Projects</a></li>
      <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
    </ul>
  </nav>
        </header>

        <section className="flex flex-col-reverse md:flex-row items-center ml-16 justify-between pt-4 bg-white min-h-screen">
          <div className="max-w-xl text-center md:text-left md:pr-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Hello,<br />I am a <span className="text-green-600">Software Engineer.</span>
            </h1>
            <p className="text-2xl text-gray-700 mb-8">
              I blend thoughtful research with creative design to craft intuitive, user-focused web experiences.
              By leveraging modern technologies, I build solutions that not only look great but solve real-world problems —
              making technology accessible, meaningful, and impactful.
            </p>
          <a href="#contact" className="bg-green-900  text-2xl text-white px-6 py-2 rounded hover:bg-yellow-500 transition inline-block">
  Get in Touch
</a>
          </div>

          <div className="w-100 h-100 mb-10 md:mb-0 md:ml-70">
            <img
              src={"/linet.jpg"}
              alt="my profile"
              className="rounded-full object-cover w-full h-full shadow-lg"
            />
          </div>
        </section>

        <section className="bg-green-100 py-16 px-6 sm:px-20" id="about">
          <div>
            <h2 className="text-5xl font-bold text-green-600 mb-6 ml-110">About Me</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex-shrink-0 md:mb-0">
              <img
                src="/linet.jpg"
                alt="Linet profile"
                className="rounded-full object-cover w-80 h-80 shadow-lg"
              />
            </div>

            <div>
              <p className="text-sm sm:text-xl md:text-2xl text-gray-700 mt-4 leading-relaxed">
                I approach every problem with empathy, curiosity, and a drive to design solutions that truly matter.
                With a background that blends software engineering, user experience research, and creative design,
                I enjoy turning complex challenges into accessible and impactful digital experiences.
                Whether it's through thoughtful research, clean code, or intuitive design,
                I'm committed to building technology that feels human-centered and purpose-driven.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <h2 id="skills" className="text-5xl font-bold text-green-600 mb-6 ml-140">🛠 Skills</h2>
          <div
            className="grid gap-20 sm:gap-29  mt-2"
            style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {skill.icon}
                <p className="mt-2 text-2xl font-semibold">{skill.name}</p>
                <p className="text-1xl text-gray-600">{skill.level}</p>
              </div>
            ))}
          </div>
        </section>
         

  <section className=" py-16 px-6 sm:px-20" id="research-design">
  <h2 id="projects" className="text-4xl sm:text-5xl font-bold text-green-600 mb-10 ml-100">💡Projects</h2>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="/album.jpg" alt="Project 1" className="w-full h-70 object-cover " />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800">Strength of a Woman</h3>
          <p className="mt-2 text-2xl text-gray-800">"A visual tribute to resilience and serenity — ‘Strength of a Woman’ captures the quiet power, 
            soulful depth, and graceful defiance of femininity through design. Where peace meets power, this album cover becomes both a whisper and a roar."
          </p>
         <a
         href="https://www.behance.net/gallery/227316607/Music-Album"
         target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-yellow-500 transition duration-300"
        >Demo
        </a>

        </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="/desktop.jpg" alt="Project 2" className="w-full h-70 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800">Kipepeo Fashion Design</h3>
          <p className="mt-2 text-2xl text-gray-800">Kipepeo Fashion Design is a user-centered e-commerce project built to 
             simplify the shopping experience. It enables customers to easily browse, select, and purchase fashion items
              with a clean interface and smooth navigation — making fashion more accessible and intuitive.
</p>
   <a
  href="https://www.behance.net/gallery/227322595/Kipepeo-Fashion-Design"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-yellow-500 transition duration-300"
>
  Demo
</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="/aquasense.jpg" alt="Project 2" className="w-full h-70 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800">Aquasense solutions</h3>
          <p className="mt-2 text-2xl text-gray-800">AquaSense is a research-led solution that detects drainage blockages and empowers estate 
            managers with real-time alerts—turning hidden problems into visible, actionable insights.
</p>
   <a
  href="https://www.behance.net/gallery/227325111/Aquasense"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-yellow-500 transition duration-300"
>
  Demo
</a>
        </div>
      </div>

    </div>

  
  
  <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 md:grid-cols-3 gap-10">
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="/drainage.jpg" alt="Project 1" className="w-full h-70 object-cover " />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800">Aquasense Usability Test</h3>
          <p className="mt-2 text-2xl text-gray-800">Conducted usability testing to evaluate the effectiveness and intuitiveness of the AquaSense interface, 
            a real-time drainage monitoring system. Engaged target users in scenario-based tasks to identify pain points, measure task success rates, 
            and gather feedback. 
          </p>
         <a
         href="https://docs.google.com/document/d/13aCvJc0DOlqBoVuSobDMvzjnrR_4S0dlcX7rgiW0K-A/edit?tab=t.0"
         target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-yellow-500 transition duration-300"
        >Demo
        </a>

        </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="/system.webp" alt="Project 2" className="w-full h-70 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800">Primary Research</h3>
          <p className="mt-2 text-2xl text-gray-800">Collected firsthand data through interviews and field observations to understand how plastic waste impacts drainage systems.
            The findings shaped the design and functionality of the AquaSense monitoring solution.
</p>
   <a
  href="https://docs.google.com/document/d/1Pm1KeF3ziDCcx8l4AN5sxn-zuL6lw28jvSD1E4ZTEyw/edit?tab=t.0"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-yellow-500 transition duration-300"
>
  Demo
</a>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <img src="/tea.jpg" alt="Project 2" className="w-full h-70 object-cover" />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-green-800">Umuhinzi Solution</h3>
          <p className="mt-2 text-2xl text-gray-800"> A study done to support small-scale farmers with weather updates, market prices, and farming tips.
             I contributed to user research and helped design a simple, farmer-friendly interface.
</p>
   <a
  href="https://docs.google.com/document/d/1WpgZX8S2Pd0bpejveRiFYBgz4aBIkpldzz0xr2T05ko/edit?tab=t.0"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-green-600 text-white font-semibold py-2 px-5 rounded-lg shadow hover:bg-yellow-500 transition duration-300"
>
  Demo
</a>
        </div>
      </div>

    </div>

</section>


       <section
  className="ml-20 mx-auto  py-16 px-6 sm:px-20 flex flex-col items-center justify-center gap-6"
  id="contact"
>
<div className="flex flex-col md:flex-row gap-35 items-start justify-between">
          <div className="w-xl">
        <h2 id="contact"  className="text-5xl font-bold text-green-600 mb-10">📬 Contact</h2>
        <form
          action="https://formsubmit.co/mkandoelinet@gmail.com"
          method="POST"
          className="max-w-4xl mx-auto space-y-6 bg-white p-8 rounded-lg shadow-md"
        >
          <input type="hidden" name="_captcha" value="false"/>
          <div>
            <label className="block mb-2 text-lg text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg text-gray-700">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
        </div>
        <div>
      <h2 className="text-3xl text-gray-800 mt-24">Contact Info:</h2>
      <p className="text-2xl mt-6 mb-6">Email: <a href="mailto:mkandoelinet@gmai.com">mkandoelinet@gmai.com</a></p>
  <p className="text-2xl mt-6 mb-6">Phone: <a href="tel:+254110941162">+254110941162</a></p>
  <p className="mt-6 mb-6 text-2xl">Location: Ngong Road 616, AkiraChix, Nairobi</p>

 <div className="mt-4 flex gap-14 text-2xl text-green-600">
  <a href="https://www.linkedin.com/in/linet-mkandoe-51379a2b3" target="_blank" style={{ marginRight: "10px" }}>
    <img
      src="https://cdn-icons-png.flaticon.com/24/174/174857.png"
      alt="LinkedIn"
      style={{ filter: 'invert(47%) sepia(98%) saturate(567%) hue-rotate(86deg) brightness(90%) contrast(86%)' }}
    />
  </a>
  <a href="https://www.behance.net/linetndau" target="_blank" style={{ marginRight: "10px" }}>
    <img
      src="https://cdn-icons-png.flaticon.com/24/174/174876.png"
      alt="Behance"
      style={{ filter: 'invert(47%) sepia(98%) saturate(567%) hue-rotate(86deg) brightness(90%) contrast(86%)' }}
    />
  </a>
  <a href="https://github.com/Linetmkandoe" target="_blank">
    <img
      src="https://cdn-icons-png.flaticon.com/24/25/25231.png"
      alt="GitHub"
      style={{ filter: 'invert(47%) sepia(98%) saturate(567%) hue-rotate(86deg) brightness(90%) contrast(86%)' }}
    />
  </a>
</div>
         </div>
         </div>
      </section>
      <footer className="bg-gray-800 w-full text-white py-6 text-center">
  <a
 
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-500 hover:underline"
  >
    my protfolio.com
  </a>
  <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Linet Mkandoe Ndau. All rights reserved.</p>
</footer>

      </main>
    </div>
    
  );
}