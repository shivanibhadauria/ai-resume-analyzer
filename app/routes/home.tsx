import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/data";
import ResumeCard from "~/components/ResumeCard";
import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { usePuterStore } from "~/lib/puter"


export function meta({}: Route.MetaArgs) {

 const { auth} = usePuterStore(); 
 const navigate = useNavigate();

  useEffect(() => {
      if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated ])


  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover  "  >
    <Navbar />
    <section className="main-section" >
      <div className="page-heading py-16" >
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submission and check AI-powered feedback.</h2>
      </div>
    {resumes.length > 0 && 
    <div className="resumes-section" >
      {resumes.map((resume)=>(
  <ResumeCard resume={resume} key={resume.id} />

  
)) }
       </div>
    }
    </section>




  </main>;
}
