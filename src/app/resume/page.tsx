import TopNavbar from "../components/TopNavbar"
import SiteFooter from "../components/Footer"

export default function ResumePage() {
    return(
        <main className="flex min-h-screen w-2/3 flex-col justify-between items-center mx-auto" >
          <TopNavbar />
          <article className="flex-col bg-white px-16">
            <h2 className=" text-blue-800 font-semibold">Roustam Dzhafarov</h2>
            <div className="flex flex-nowrap space-x-10">
            <div>
            WORK EXPERIENCE
            <hr />
            <p>
              Software engineer	Feb  2022 – present time
            </p>
            <p className=" font-semibold">
              Chamaeleon, Portugal, Porto, remote job
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

            <p className=" font-semibold">
              UPOST software
            </p>
            <ul className="list-disc pl-8">
              <li>Updated existing project on NextJS with new pages and components</li>
              </ul>
            </div>
            <div>
            <span>CONTACTS</span>
            <ul>
              <li>github</li>
              <li>linkedin</li>
            </ul>
            </div>

            </div>
          </article>
          <SiteFooter />
        </main>
    )
}