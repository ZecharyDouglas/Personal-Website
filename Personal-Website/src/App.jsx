import Headshot from "./assets/Headshot.png";
import CertificationBadge from "./assets/AWSCert.png";
import TTP from "./assets/TTP.png";
import CSILogo from "./assets/CSILogo.png";
import Diploma from "./assets/Diploma.png";

function App() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-indigo-950">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-violet-900 to-purple-950" />

        {/* Lava blobs */}
        <div className="absolute inset-0">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>

        {/* Content goes on top */}
        <div className="flex flex-col min-h-dvh relative z-10 ">
          <div className="flex items-center relative z-10 pt-10 px-10 text-[#605e5e] justify-end ">
            <button className=" border p-2 rounded-md mx-3  font-raleway text-2xl font-bold hover:text-[#ad96d1] transition">
              Home
            </button>
            <button className=" border p-2 mx-3 rounded-md font-raleway text-2xl font-bold hover:text-[#ad96d1] transition">
              About Me
            </button>
            <button className="border p-2 mx-3 rounded-md font-raleway text-2xl font-bold hover:text-[#ad96d1] transition">
              Projects
            </button>
            <button className="border p-2 mx-3 rounded-md font-raleway text-2xl font-bold hover:text-[#ad96d1] transition">
              Contact
            </button>
          </div>
          <div>
            <div className="h-px w-full bg-[#605e5e] shadow-lg" />
          </div>
          {/* Hero Card */}
          <div className="flex justify-center p-10">
            <div className="h-[80vh] w-[100vw] rounded-xl bg-black shadow-lg">
              <div className="grid grid-cols-4 grid-rows-4 place-items-center">
                <div className=" col-span-3 row-span-4 flex flex-col">
                  <div className=" flex flex-col justify-center items-center font-raleway">
                    <h2 className="text-white text-7xl text-left">
                      Hi, I'm Zechary
                    </h2>
                    <h2 className="text-white text-2xl text-left">
                      Passionate Full-Stack Web developler{" "}
                    </h2>
                    <h2 className="text-white text-2xl">
                      Based out of Brooklyn, NYC
                    </h2>
                    <h2 className="text-white text-2xl">
                      Let's build together!
                    </h2>
                  </div>
                </div>
                <div className=" col-span-1 row-span-4 place-items-center">
                  <img
                    width={200}
                    height={200}
                    src={Headshot}
                    className="w-100 h-100 object-cover rounded-full"
                    alt="Picture of Person"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* About Me Card */}
          <div className="flex justify-center p-10">
            <div className="h-[80vh] w-[90vw] rounded-xl bg-[#7649BF]/25 shadow-lg p-10">
              <div className="">
                <div className="flex flex-col">
                  <div className=" flex flex-col justify-center items-start pl-5 font-raleway">
                    <div className=" flex flex-col justify-center">
                      <h1 className="text-white text-5xl">My Background</h1>
                      <h2 className="text-white text-2xl text-left">
                        Recently I graduated from the City University of New
                        York, College of Staten Island in 2025 with a Bachelors
                        of Science in Computer Science.
                      </h2>
                      <h2 className="text-white text-2xl">
                        I develop web applications using a variety of
                        technologies ranging from React.js front end to Flask
                        and GraphQl backend. Some of my most recent
                      </h2>
                      <h2 className="text-white text-2xl">
                        Work includes a Social messenging app called Whisper
                        that leverages a GraphQl websocket libarary to
                        facilitate real-time duplex communication between users.
                      </h2>
                    </div>
                    <div className="flex">
                      <div className="flex justify-center p-5">
                        <a href="https://www.linkedin.com/company/nyc-tech-talent-pipeline/about/">
                          <img
                            src={TTP}
                            height={100}
                            width={100}
                            className="h-100 w-100 rounded-md"
                            alt="TTP LinkedIn Profile"
                          />
                        </a>
                      </div>
                      <div className="flex justify-center p-5">
                        <a href="https://www.parchment.com/u/award/469d5f329fde907ae2c22a9616bcc0a6">
                          <img
                            src={Diploma}
                            height={100}
                            width={100}
                            className="h-100 w-100 rounded-md"
                            alt="CUNY-CSI Computer Science Department page"
                          />
                        </a>
                      </div>
                      <div className="flex justify-center p-5">
                        <a href="https://www.csi.cuny.edu/academics-and-research/departments-programs/computer-science">
                          <img
                            src={CSILogo}
                            height={100}
                            width={100}
                            className="h-100 w-100 rounded-md"
                            alt="CUNY-CSI Computer Science Department page"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Certifications / Projects Card */}
          <div className="flex justify-center p-10">
            <div className="h-[80vh] w-[90vw] rounded-xl bg-[#7649BF]/25 shadow-lg p-10">
              <div className="grid grid-cols-4 grid-rows-4 place-items-center">
                <div className=" col-span-3 row-span-4 flex flex-col">
                  <div className=" flex flex-col justify-center items-center font-raleway">
                    <h2 className="text-white text-7xl text-left">
                      Certifications & Projects
                    </h2>
                    <h2 className="text-white text-2xl">
                      I develop web applications using a variety of technologies
                      ranging from React.js front end to Flask and GraphQl
                      backend. Some of my most recent
                    </h2>
                    <h2 className="text-white text-2xl">
                      Work includes a Social messenging app called Whisper that
                      leverages a GraphQl websocket libarary to facilitate
                      real-time duplex communication between users.
                    </h2>
                    <div className="rounded-xl bg-[#7649BF]/25 shadow-lg h-100 w-100 px-15 pb-20">
                      <img
                        width={50}
                        height={50}
                        className="w-100 h-100 object-cover rounded-full"
                        src={CertificationBadge}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-span-1 row-span-4 place-items-center">
                  <img
                    width={200}
                    height={200}
                    src={Headshot}
                    className="w-100 h-100 object-cover rounded-full"
                    alt="Picture of Person"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Contact Me */}
        </div>
      </div>
    </>
  );
}

export default App;
