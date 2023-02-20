export default function About() {
    return (
      <section id="about" title="main section">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 title="greetings" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Bryan.
              <br className="hidden lg:inline-block" /> I enjoy being in the world of software development.
            </h1>
            <p title="introduce" className="mb-8 leading-relaxed">
            Dedicated software developer professional with history of meeting company goals utilizing consistent and organized practices. I have 10+ years of experience. Skilled in working under pressure and adapting to new situations and challenges to best enhance the organizational brand. Excellent communication skills and extensive experience working with clients and partners.
            </p>
            <div title="links" className="flex justify-center">
            <a
                href="https://www.linkedin.com/in/bryan-rodriguez-eng" target={"_blank"} rel="noreferrer">           
              <button className="group relative h-12 w-48 overflow-hidden rounded-full bg-gray-400 text-lg shadow">
              <div className="absolute inset-0 w-3 bg-gray-800 transition-all duration-[280ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">Linkedin Profile</span>
              </button>
              </a>
              &nbsp;&nbsp; 
              <a
                href="https://drive.google.com/file/d/1yTExUaSAgY-2gFiYT7EfSE7X0p1qvRJM/view" target={"_blank"} rel="noreferrer">           
              <button className="group relative h-12 w-48 overflow-hidden rounded-full bg-gray-400 text-lg shadow">
              <div className="absolute inset-0 w-3 bg-gray-800 transition-all duration-[280ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black group-hover:text-white">See My Resume</span>
              </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./coding.svg"
            />
          </div>          
        </div>
      </section>
    );
  }