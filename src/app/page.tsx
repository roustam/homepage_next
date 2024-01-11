import Image from "next/image"
import TopNavbar from "./components/TopNavbar"
import SiteFooter from "./components/Footer"
import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="flex w-2/3 flex-col justify-between items-center mx-auto">
      <TopNavbar />
      <div className="flex flex-nowrap justify-between px-4 py-4 bg-white mt-4 rounded-xl">
        <div className="flex justify-between flex-nowrap">
          <div>
            <p>Hello, my name is Roustam.</p>
            <p className=" py-3 tracking-wide">
          I&apos;m a passionate web developer, weaving the magic of Python to bring your digital vision to life. 
          Backend is my playground, where I architect robust functionalities with FastAPI and Django. 
          Let&apos;s turn your ideas into pixels and bytes, crafting a web experience that resonates with your users.
          </p>
          <p className=" font-semibold tracking-wide">Contact me today and let&apos;s build something extraordinary.</p>

          <p>P.S. I&apos;m not just code - I&apos;m a problem-solver, a collaborator,
           and a person with a knack for turning complex concepts into elegant solutions.</p>
          </div>

        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa, unde atque aliquid alias ipsum commodi voluptas recusandae magnam necessitatibus voluptatum illo dolore, ducimus nam accusamus, quia tempora qui voluptatem!</p> */}
        
          <Image src={'/img/photo-small.png'} alt="my photo" height={0} width={0}  
          style={{ width: 'auto', height: 'auto', borderRadius:"100%" }}  />
          
        </div>
      </div>
      <div className="flex-col justify-start w-full mb-auto py-4"> 
        <h2>Recent projects</h2>
        <div className="grid grid-cols-3 gap-4 rounded-xl py-4 px-4">
        <ProjectCard 
            projectName="HELLO portal frontend" 
            usedLibs={['ReactJS', 'MaterialUI']}
            sourceLink="https://github.com/roustam/hello_portal" 
            demoLink="https://hello-portal-ruddy.vercel.app/"
            description="Demo site for social network content creators." 
            imageUrl='/img/website-icon.svg'/>
          <ProjectCard 
            projectName="Blog system to track good deeds." 
            usedLibs={['NextJS','OAuth','Prisma']}
            sourceLink="https://github.com/roustam/thankb"
            demoLink="https://test.thankband.com/"
            description="Mobile website that help people to track good deeds and share links via QR code." 
            imageUrl='/img/website-icon.svg'/>

          <ProjectCard 
            projectName="Django image gallery app" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="https://github.com/roustam/test-job-image-portal" 
            demoLink=""
            description="Small image gallery web app where you can upload and view images.
            App validates the filetypes you can upload." 
            imageUrl='/img/gallery-portal.svg'/>
    
          <ProjectCard
            projectName="Geo calculator" 
            usedLibs={['leafletjs', 'djangogis', 'docker']}
            sourceLink="https://github.com/roustam/geos_test" 
            
            description="Small web app that builds a network of points and can calculate distance on a world map." 
            imageUrl='/img/country-location-icon.svg'/>
          
          <ProjectCard 
            projectName="Yandex.practicum completed tasks" 
            usedLibs={['FastAPI', 'ElasticSearch', 'API']}
            sourceLink="https://github.com/roustam/async_api_sprint_team_22"
            
            description="FastApi based API for movies database. Uses ElasticSearch engine." 
            imageUrl='/img/python-logo.svg'/>

          <ProjectCard 
            projectName="ASYNC Python scripts." 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="https://github.com/roustam/geos_test" 

            description="Python script that filters dictionary for same id operations and returns ones with latest timestamp. Another script uploads specified files to directory.  " 
            imageUrl='/img/python-logo.svg'/>
        </div>
      </div>
    <SiteFooter />
    </main>
  )
}
