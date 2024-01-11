import Link from "next/link"
import TopNavbar from "../components/TopNavbar"
import SiteFooter from "../components/Footer"

export default function ResumePage() {
    return(
        <div className="flex min-h-screen w-2/3 flex-col justify-between items-center mx-auto" >
          <TopNavbar />
          <div className="flex bg-white rounded-md mt-3 w-full justify-center">
            <Link className="underline py-2" href="/dzafarov-roustam-resume.pdf" target="blank">Download my resume as PDF file 📄</Link>
          </div>
          <article className="flex-col bg-white px-16 mt-3 pt-3 rounded-xl">
            <h2 className=" text-blue-800 font-semibold text-xl mb-3">Roustam Dzhafarov</h2>
            <div className="flex flex-nowrap space-x-10"> 
            <div>
            WORK EXPERIENCE
            <hr className="px-3"/>
            <p>
              Software engineer	Feb  2022 – present time
            </p>
            <p className=" font-semibold">
              Chamaeleon, Portugal, remote job
            </p>
            <ul className="list-disc pl-8">
              <li>
                Developed an in house web portal that aggregates data from various 
                sources(slack channels, google storage buckets, twitter, etc)
              </li>
              <li>
                Configured the VPS server with nginx, uwsgi and deployed the web portal application
              </li>
              <li>
                Created a role model system for access between portal users
              </li>
              <li>
                Created an email notification system that sends notifications on certain events with sendgrid services.
              </li>
              <li>
                Created documentation for portal content admin team
              </li>
              <li>
                Implemented tableau.com api with user access restrictions
              </li>
            </ul>
            <p className="pt-3">
              Front-end developer	May 2022 – Sept 2022
            </p>
            <p className=" font-semibold">
              Brightlab , Russia, Rostov-on-Don
            </p>
            <ul className="list-disc pl-8">
              <li>Worked on Gatsby framework based web portal.</li>
              <li>Worked on React Redux web project, added new features and fixed existed problems</li>
              <li>Participaded in troubleshooting and problem solving</li>
              </ul>
            
            <p className="pt-3">
              Software engineer <span>May 2017 – Jan 2022</span>
            </p>
            <p className=" font-semibold">
              Remote work
            </p>
            <ul className=" list-disc pl-8">
              <li>Development of restfull apps with Django, FastAPI, Flask</li>
              <li>Development ReactJS based web applictions</li>
              <li>Worked on third party API integration</li>
              <li>Security hardening and perfomane enhancements</li>
              <li>Documentation writing</li>
              <li>Scraping & parsing web pages</li>
            </ul>
            
            <p className="mt-4">EDUCATION and INTERSHIPS</p>
            <hr className="px-4"/>
            <p className="font-semibold">Yandex.praktikum        March 2023 - September 2023</p>
            <ul className="list-disc pl-8">
              <li>Created Django and FastAPI app for accessing movies database</li>
              <li>Created scripts for ETL from Postges to ElasticSearch</li>
              <li>Configured project with docker-compose</li>
              <li>Provided code-reviews for teammates.</li>
            </ul>
            <p className="font-semibold pt-3">FreeCodeCamp.com May 2020</p>
            <p>JavaScript course</p>
            <p className="font-semibold pt-2">HTMLAcademy course Feb 2020</p>
            <p>HTML & CSS course</p>

            <p className="font-semibold pt-2">Don State Technical University May 2006</p>
            <p>World Economics - specialist degree</p>
            </div>
            
            <div className=" w-56">
            <span className="pb-3">CONTACTS</span>
            <ul className="underline">
              <li><a href="https://github.com/roustam">Github profile</a></li>
              <li><a href="https://www.linkedin.com/in/roustam/">Linkedin profile</a></li>
              <li><a href="https://t.me/Rou1999">Telegram</a></li>
              <li>roustam.ts@gmail.com <a href="mailto:roustam.ts@gmail.com" ></a></li>
            </ul>
            <p className="mt-3">SKILLS</p>
            <ul className="mb-3">
              <li>
                Python
              </li>
              <li>
                FastApi
              </li>
              <li>
                Django
              </li>
              <li>
                SQL Alchemy
              </li>
              <li>
                PyTest
              </li>
              <li>
                RabbitMQ
              </li>
            </ul>

            <ul>
              <li>ReactJS, Next.js</li>
              <li>Tailwind CSS</li>
            
            </ul>
            </div>
            </div>
          </article>
          <SiteFooter />
        </div>
    )
}