"use client"
import Image from "next/image"
import TopNavbar from "./components/TopNavbar"
import FrontLogoSrc from '../../public/robot.jpg'
import SiteFooter from "./components/Footer"
import ProjectCard from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="flex min-h-screen w-2/3 flex-col items-center mx-auto">
      <TopNavbar />
      <div className="w-full px-4 py-4 flex flex-row bg-slate-100 mt-4 rounded-xl">
        <p>Hello, my name is Roustam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore error vitae aliquid repellat eum. Modi obcaecati quas laborum labore? Expedita praesentium accusamus ea esse laboriosam voluptatibus enim error deserunt? Id!</p>
        <Image src={FrontLogoSrc} alt="logo" height={140} className="rounded-full"/>
      </div>
      <div className="flex flex-col justify-start w-full py-4"> 
        <h2>Recent projects</h2>
        <div className="grid grid-cols-3 gap-4 rounded-xl py-4 px-4">
          <ProjectCard 
            projectName="Image gallery" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="#" 
            description="Image gallery web app where you can upload and view images. Script validates the files you can upload." 
            imageUrl='../../../../python-logo.svg'/>

          <ProjectCard 
            projectName="Image gallery" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="#" 
            description="Image gallery web app where you can upload and view images. Script validates the files you can upload." 
            imageUrl='../../../../python-logo.svg'/>
          
          <ProjectCard 
            projectName="Image gallery" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="#" 
            description="Image gallery web app where you can upload and view images. Script validates the files you can upload." 
            imageUrl='../../../../python-logo.svg'/>
                      <ProjectCard 
            projectName="Image gallery" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="#" 
            description="Image gallery web app where you can upload and view images. Script validates the files you can upload." 
            imageUrl='../../../../python-logo.svg'/>
                      <ProjectCard 
            projectName="Image gallery" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="#" 
            description="Image gallery web app where you can upload and view images. Script validates the files you can upload." 
            imageUrl='../../../../python-logo.svg'/>
                      <ProjectCard 
            projectName="Image gallery" 
            usedLibs={['python', 'django', 'javascript']}
            sourceLink="#" 
            description="Image gallery web app where you can upload and view images. Script validates the files you can upload." 
            imageUrl='../../../../python-logo.svg'/>

        </div>
      </div>
    <SiteFooter />
    </main>
  )
}
