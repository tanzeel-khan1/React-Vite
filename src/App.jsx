// import React, { useState } from 'react';
// import Child from './api/Child.jsx';
// import Parent from './api/Parent.jsx';

// function App() {
//   const [userInput, setUserInput] = useState(''); 
//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };
  
//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>User Input Demo</h2>
      
//       <Parent 
//         value={userInput}
//         onChange={handleInputChange}
//         placeholder="Enter your name"
//       />
      
//       <Child userName={userInput} />
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import Parent from "./api/Parent"
// const App = () => {
//   return (
//     <div>
//       <Parent/>
      
//     </div>
//   )
// }

// export default App
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useGetAllProjectsByUserId } from "@/hooks/useproject";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectRequest from "@/components/ProjectRequest";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const Projects = ({ active3 }) => {
  const [width, setWidth] = useState(true);
  const { user } = useAuth();
  const userId = user?.id;
  const [active, setActiveTab] = useState("tab1");

  // console.log(userId, "userId2222222222222222222222222222222222222222222222222")
  const [open, setOpen] = useState(false);
  const {
    data: userprojects,
    isLoading,
    refetch,
  } = useGetAllProjectsByUserId(userId);
  const projects = userprojects?.project || [];
  // console.log(
  //   userprojects,
  //   "campaigns4444444444444444444444444444444444444444"
  // );
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-background to-cyber-card p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl font-bold">All Projects</h1>
        <Dialog  open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button 
            size="sm"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer backdrop-blur-sm rounded-xl px-[1.67rem] py-2 text-sm font-medium flex items-center justify-center transition-all duration-300 mb-2">
              Create Project
            </Button>
          </DialogTrigger>
          <DialogContent 
          className={`${width ? "w-[30%] " : ""} max-w-[1227px] h-screen sm:h-[93vh] bg-[rgba(18,41,76,0.64)] flex flex-col justify-start p-4 sm:p-6`}>
            <DialogHeader>
              {/* <DialogTitle>Create New Project</DialogTitle> */}
             {active3 !== "tab3" && (
  <DialogTitle>Create New Project</DialogTitle>
)}

            </DialogHeader>
            <ProjectRequest
              onSuccess={() => {
                setOpen(false);
                refetch();
              }}
              width={width}
              setWidth={setWidth}
              onCancel={() => setOpen(false)}
            />
          </DialogContent>


        </Dialog>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {isLoading ? (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading projects...</p>
            </CardContent>
          </Card>
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <Card key={project._id} className="challenge-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt="Logo"
                      className="w-14 h-14 rounded-full border object-cover"
                    />
                  )}
                  <div>
                    <CardTitle className="text-xl mb-1">
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                      <span>Category: {project.category || "-"}</span>
                      <span>Total Rewards: {project.totalRewards || "-"}</span>
                      <span>
                        Status: {project.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Created:{" "}
                  {project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString()
                    : "Unknown"}
                </p>
              </CardHeader>
              <CardContent>
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt="Cover"
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                )}
                <div className="mb-2 text-muted-foreground">
                  {project.description || "No description provided."}
                </div>
                {Array.isArray(project.links) && project.links.length > 0 && (
                  <div className="mt-2">
                    <div className="font-semibold text-sm mb-1">Links:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.links.map((link) => (
                        <li key={link._id}>
                          <span className="capitalize font-medium">
                            {link.platform}:
                          </span>{" "}
                          <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline break-all"
                          >
                            {link.link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="flex justify-end mt-4">
                  <Link to={`/project/${project._id}`}>
                    <Button 
                    size="sm"
                    className="bg-white/10 hover:bg-white/20  text-white font-semibold px-4 py-2 rounded-lg hover:from-primary/90 hover:to-accent/90 transition-all duration-200">
                      View Project
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <h3 className="text-xl font-semibold mb-2">No Projects</h3>
              <p className="text-muted-foreground">
                No projects found at the moment.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Projects;
