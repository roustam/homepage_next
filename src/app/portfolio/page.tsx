"use client"
import TopNavbar from "../components/TopNavbar"
export default function CoolPage() {
    return(
        <main className="flex min-h-screen w-2/3 flex-col items-center mx-auto">
            <TopNavbar />
            <div className="flex flex-row justify-start w-full py-4">
                <h1>Projects</h1>
            </div>

        </main>
    )
}