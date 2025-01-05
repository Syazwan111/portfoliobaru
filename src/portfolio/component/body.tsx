import React from "react";
import Image from "next/image";
import { IoIosMail, IoIosMailUnread } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

const Body: React.FC = () => {
  return (
    <div className="h-screen-50 sm:min-h-full w-full overflow-y-auto snap-mandatory snap-y">
      <section
        id="home"
        className=" snap-center h-full w-full bg-hero bg-no-repeat bg-cover bg-right text-orange-200 text-center"
      >
        {/* <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-20 text-center"> */}
        <div className="h-full w-full flex flex-col items-start justify-end mx-auto bg-black bg-opacity-50 p-10 pb-40">
          <div className="h-full w-full flex flex-col items-start justify-end mx-auto gap-5 font-extrabold bg-gradient-to-r from-blue-600 via-blue-300 to-blue-100 text-transparent bg-clip-text ">
            <div className="text-5xl font-bold">Hi everyone</div>
            <div className="w-full flex flex-row gap-5 self-baseline">
              <div className="flex items-end justify-end text-8xl font-extrabold tracking-wide">
                I&apos;m Muhammad Syazwan
              </div>
            </div>
            <div className="w-full flex flex-col items-start text-sm text-white font-normal tracking-widest">
              <div className="">
                Technical Support Analyst, I responsible for
                analyzing, troubleshooting
              </div>
              <div className="">
                and evaluating technology issues.
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="snap-center h-full w-full flex flex-row items-start justify-end  bg-gray-100"
      >
        <div className="h-full w-2/6 md:w-1/5 flex flex-col bg-black p-5 divide-y-2 divide-gray-600 gap-10">
          <div className="h-1/4 w-full flex items-center justify-center">
            <div className="h-48 w-48 flex items-center justify-end rounded-full overflow-hidden shadow-lg shadow-gray-900">
              <Image
                src="/images/Jw2.jpeg"
                width={400}
                height={200}
                alt=""
                className="h-60 w-52"
              />
            </div>
          </div>
          <div className="h-3/4 flex flex-col gap-3 text-white">
            <div className="h-1/2 flex flex-col gap-3">
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <IoIosMail className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  syazwanhaha11@gmail.com
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <IoCallSharp className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  017-908 6223
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <FaLinkedin className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 tracking-tight font-medium">
                https://www.linkedin.com/in/muhammad-syazwan-kamaruzaman-617669267
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <FaLocationDot className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  Titiwangsa, Kuala Lumpur
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-start text-sm gap-3">
                <div className="w-1/12">
                  <FaGithub className="h-6 lg:h-8 w-6 lg:w-8" />
                </div>
                <div className="w-11/12 font-medium tracking-widest">
                  Syazwan111
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-4/6 md:w-4/5 p-5">
          <div className="h-screen-40 sm:min-h-full w-full flex flex-col overflow-y-auto container rounded-lg overflow-hidden p-2">
            <div className="w-full text-2xl font-bold text-gray-800">
              About Me
            </div>
            <div className="h-full w-full flex flex-col gap-5">
              {/* Personal Details */}
              <div className="flex flex-col gap-2">
                <div className="text-tiny text-gray-700 tracking-tighter leading-tight">
                  Hello guys, In this position I may need to support
                  internal clients, helping to keep employees productive,
                  or helping them via remote. I also help to resolve a
                  variety of technical issues relating my company's
                  computer systems, telecommunication network, LANs, WANs
                  and desktop computers, whether these components are
                  located on-site or other branches.
                  
                </div>
              </div>
              <div className="h-full w-full flex flex-row gap-2">
                <div className="h-full w-full flex flex-col gap-3">
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      LUCA
                    </div>
                    <div className=" text-gray-700">
                      <div className="w-full flex flex-row gap-2 tracking-tighter leading-tight text-tiny">
                        Even the darkest night will end, and the sun
                        will rise. Keep going, for the light is closer 
                        than you think.
                        
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      Experience
                    </div>
                    <div className=" text-gray-700">
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Technical Support Analyst</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          <div className="font-bold">
                            JOS Malaysia Sdn. Bhd. (February 2024 - Present)
                          </div>
                          <div className="">
                            Resident Engineer for Panasonic Procurement Sdn. Bhd.
                            
                            
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Field Service Engineer</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          <div className="font-bold">
                            CTC Global Sdn. Bhd. (October 2022 - January 2023)
                          </div>
                          <div className="">
                            On-site service for Cimb Bank branches area Klang Valley
                            
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Technician</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          <div className="font-bold">
                            BT System Sdn. Bhd. (March 2022 - June 2022)
                          </div>
                          <div className="">
                            Maintenance antenna for Sapura Sdn. Bhd.
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      Technical Skills
                    </div>
                    <div className=" text-gray-700">
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Technical support</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          Understanding of operating systems, applications, and device
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Communication</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">Able to clearly explain complex concepts to user</div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">On-site support</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">
                          Provide assistance to client after getting tickets or via phone support
                        </div>
                      </div>
                      <div className="w-full flex flex-row gap-2">
                        <div className="w-1/3 flex flex-row justify-between font-bold">
                          <div className="">System Administration</div>
                          <div className="">:</div>
                        </div>
                        <div className="w-2/3">Managing user accounts, performing regular backup and monitoring system</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-auto w-full">
                    <div className="text-base lg:text-xl font-semibold text-gray-800">
                      Education
                    </div>
                    <div className="w-full flex flex-col text-gray-700 gap-2">
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">
                            Diploma in Compentency in Computer Networking
                          </div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          KKTM Ledang (2020-2022): Focused on troubleshooting server, network,
                          and system administration.
                        </div>
                      </div>
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Sijil Kemahiran Tahap 3</div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          Giatmara Titiwangsa (2019-2020): Graduated with a
                          flying colors.
                        </div>
                      </div>
                      <div className="w-full flex flex-col lg:flex-row lg:gap-2">
                        <div className="w-full lg:w-1/3 flex flex-row justify-between font-bold">
                          <div className="">Sijil Pelajaran Malaysia (SPM)</div>
                          <div className="">-</div>
                        </div>
                        <div className="w-full lg:w-2/3">
                          MTAQ Kelantan (2014-2019)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
