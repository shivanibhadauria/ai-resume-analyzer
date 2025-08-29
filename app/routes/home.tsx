import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/data";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover "  >
    <Navbar />
    <section className="main-section" >
      <div className="page-heading" >
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submission and check AI-powered feedback.</h2>
      </div>
    </section>

    {resumes.length > 0 && 
    <div className="resume-section" >
      {resumes.map((resume)=>(
  <ResumeCard resume={resume} key={resume.id} />

  
)) }
       </div>
    }



  </main>;
}
