import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-10">
        My Projects
      </h1>
      <div className="cursive text-[20px] font-medium text-center text-gray-300 pb-10">
        It is recommended to review the github profile for more project.
      </div>
      <div className="h-full w-full flex gap-10 px-10 justify-center  flex-wrap">
        <ProjectCard
          src="/fazlawebsite.png"
          title="B2B E-Commerce Website"
          description="As a Frontend Developer, I played a pivotal role in the creation of a high-performance commercial website using
          Next.js, Material-UI, and Tanstack Query."
          url="https://market.fazla.com/en"
        />
        <ProjectCard
          src="/esperanzawebsite.png"
          title="Esperanza Grup"
          description="In this project, I developed a single-page application that showcases the cafes owned by the client and the
          services they offer. With a focus on user-friendliness and engaging design, I worked diligently to create a
          customer-oriented solution"
          url="https://www.esperanzagrup.com.tr/"
        />
        <ProjectCard
          src="/movieappwebsite.png"
          title="Movie App"
          description="User can watch movies trailers and get info about movies after login.I use firebase for auth."
          url="https://movie-app-firebase-mu.vercel.app/"
        />
        <ProjectCard
          src="/githubstatisticwebsite.png"
          title="GitHub User Charts"
          description="User can search a github user and can see the info charts abaout user. Try it now!"
          url="https://github-user-statistics.vercel.app/home"
        />
        <ProjectCard
          src="/followerdetectorwebsite.png"
          title="GitHub follower detector"
          description="You can list of github users which you are following but they don't follow you.Try it now!"
          url="https://github-followers-app.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
