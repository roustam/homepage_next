import Image from "next/image"
import TopNavbar from "./components/TopNavbar"
import SiteFooter from "./components/Footer"
import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="flex w-2/3 h-screen flex-col justify-between items-center mx-auto">
      <TopNavbar />
      <div className=" flex-row px-4 py-4 bg-slate-100 mt-4 rounded-xl">
        <p>Hello, my name is Roustam. I am a software engineer.</p>
        <p>I am proficient with building web applications and various automation scripts.</p>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa, unde atque aliquid alias ipsum commodi voluptas recusandae magnam necessitatibus voluptatum illo dolore, ducimus nam accusamus, quia tempora qui voluptatem!</p> */}
        {/* <Image src="/img/robot.jpg" alt="logo" height={140}  width={140} className="rounded-full"/> */}
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
            projectName="Image portal" 
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
            projectName="Yandex.practicum tasks" 
            usedLibs={['FastAPI', 'ElasticSearch', 'API']}
            sourceLink="#"
            
            description="Movies database API built with ElasticSearch." 
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
