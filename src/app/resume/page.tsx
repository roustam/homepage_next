import TopNavbar from "../components/TopNavbar"
import SiteFooter from "../components/Footer"

export default function ResumePage() {
    return(
        <main className="flex min-h-screen w-2/3 flex-col justify-between items-center mx-auto" >
          <TopNavbar />
          <article className="flex-col bg-white px-16">
            <h2 className=" text-blue-800 font-semibold text-xl">Roustam Dzhafarov</h2>
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
              Front-end developer	May 2017 – Jan 2022
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
              Remote work online platforms, remote job
            </p>
            <ul className=" list-disc pl-8">
              <li>Development of restfull apps with Django, FastAPI, Flask</li>
              <li>Development ReactJS based web applictions</li>
              <li>Worked on third party API integration</li>
              <li>Security hardening and perfomane enhancements</li>
              <li>Documentation writing</li>
              <li>Scraping & parsing web pages</li>
            </ul>
            <hr className="px-4"/>
            <p>EDUCATION and INTERSHIPS</p>
            <p>Yandex.praktikum        March 2023 - September 2023</p>
            <ul className="list-disc pl-8">
              <li>Created Django and FastAPI app for accessing movies database</li>
              <li>Created scripts for ETL from Postges to ElasticSearch</li>
              <li>Configured conteinerisation with docker-compose</li>
            </ul>
            <p className="font-semibold pt-3">FreeCodeCamp.com May 2020</p>
            <p>JavaScript course</p>
            <p className="font-semibold pt-2">HTMLAcademy course Feb 2020</p>
            <p>HTML & CSS course</p>

            <p className="font-semibold pt-2">Don State Technical University May 2006</p>
            <p>World Economics - specialist degree</p>
            </div>
            
            <div>
            <span>CONTACTS</span>
            <ul>
              <li><a href="">github</a></li>
              <li><a href="">linkedin</a></li>
            </ul>
            </div>

            </div>
          </article>
          <SiteFooter />
        </main>
    )
}