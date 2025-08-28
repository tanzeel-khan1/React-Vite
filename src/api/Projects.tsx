import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardPara,
} from "@/components/ui/card";
import { IoIosCheckmark } from "react-icons/io";
import { FaUser, FaDiscord, FaTwitter } from "react-icons/fa";

import { useGetAllProjectsByUserId } from "@/hooks/useproject";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectRequest from "@/components/ProjectRequest";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import { IoMdCheckmark } from "react-icons/io";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";

const Projects = ({ active, initialName }) => {
  const [width, setWidth] = useState(true);
  const [activeTab, setActiveTab] = useState("tab1");
  const { user } = useAuth();
  const userId = user?.id;
  const [open, setOpen] = useState(false);
  const {
    data: userprojects,
    isLoading,
    refetch,
  } = useGetAllProjectsByUserId(userId);
  const projects = userprojects?.project || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyber-dark via-background to-cyber-card mt-6 mb-6 md:mt-8 md:mb-8">
      {/* Top bar */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4 px-4 md:px-0 md:pl-0 md:pr-0">
        <h1 className="text-3xl font-bold">All Projects</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="bg-white/10 mt-6 hover:bg-white/20 text-white border border-white/20 cursor-pointer backdrop-blur-sm rounded-xl px-[1.67rem] py-2 text-sm font-medium flex items-center md:mr-4 justify-center transition-all duration-300 mb-2"
            >
              Create Project
            </Button>
          </DialogTrigger>
          <DialogContent
            className={`${
              width ? "md:w-[65%]" : ""
            } project-card-background max-w-[1227px] md:h-auto min-h-[93%] md:w[65%] md:mt-0  mt-12 mb-52 md:mb-0 w-[90%] sm:w-[85%] flex flex-col ${
              activeTab === "tab1"
                ? " md:overflow-y-hidden overflow-auto max-h-[90vh]"
                : ""
            }`}
          >
            <div className="flex flex-col md:flex-row  h-full">
              {/* Left side form */}
              <div
                className={
                  activeTab === "tab3"
                    ? "w-full h-full mt-7 mb-2"
                    : "w-full md:w-[50%] md:ml-4 mt-3   h-auto md:h-full mb-16  px-3  md:px-0"
                }
              >
                <DialogHeader>
                  <DialogHeader>
                    {activeTab === "tab3" ? (
                      <div className="h-10 md:h-6 w-full md:w-[40%]  flex md:mt-0 md:mb-3 mb-0 ml-5 md:ml-8 ">
                        <div className="h-7 w-7 md:h-[28.66px] md:w-[36.66px] bg-green-400 rounded-full flex items-center justify-center md:mb-0">
                          <IoMdCheckmark className="text-xl md:text-2xl text-black" />
                        </div>
                        <DialogTitle className="ml-2 md:ml-4 text-base md:text-xl">
                          Project Creation Successful
                        </DialogTitle>
                      </div>
                    ) : (
                      <DialogTitle className="px-2 md:mt-0 mt-4  md:px-0 text-lg md:text-xl">
                        Create New Project
                      </DialogTitle>
                    )}
                  </DialogHeader>
                </DialogHeader>
                <div className=" md:px-0">
                  <ProjectRequest
                    onSuccess={() => {
                      setOpen(false);
                      refetch();
                    }}
                    width={width}
                    setWidth={setWidth}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    onCancel={() => setOpen(false)}
                    initialName={initialName}
                  />
                </div>
              </div>

              {/* Right side card - hidden on mobile and tab3 */}
              {activeTab !== "tab3" && (
                <div className="hidden md:flex md:w-[50%] md:h-[592px] justify-center items-center">
                  <Card className="h-[30%] w-[259px] border md:mt-0 mt-4  md:mb-0 border-white/30 rounded-2xl flex justify-center items-center">
                    <div className="h-full mt-6 w-[230px] rounded">
                      <section className="h-[23%] w-full flex items-center">
                        <img
                          src="taskb-1.png"
                          className="h-full rounded-[6px]"
                          alt="Taskbound logo"
                        />
                        <BsPatchCheckFill className="ml-2 text-yellow-500" />
                      </section>
                      <div className="h-16 w-[90%] mt-1 flex flex-col justify-center gap-1">
                        <p className="text-[11px] text-[#FFFFFFB8] font-light leading-tight font-poppins">
                          Taskbound is a Web3 marketing and
                        </p>
                        <p className="text-[11px] text-[#FFFFFFB8] leading-tight font-poppins">
                          contributor Platform designed to help
                        </p>
                        <p className="text-[11px] text-[#FFFFFFB8] font-poppins leading-tight">
                          Projects grow through people, hype
                        </p>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <div className="flex items-center bg-[#21222D] rounded-xl px-3 py-1">
                          <FaRegCircleUser className="ml-0" />
                        </div>
                        <div className="flex items-center bg-[#21222D] rounded-xl px-3 py-1">
                          <FaDiscord className="text-white mr-1" size={16} />
                          <span className="text-[#FFFFFFB8] text-sm">244</span>
                        </div>
                        <div className="flex items-center bg-[#21222D] rounded-xl px-3 py-1">
                          <FaTwitter className="text-white mr-1" size={16} />
                          <span className="text-[#FFFFFFB8] text-sm">244</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>

            {/* Mobile card */}
            {activeTab !== "tab3" && (
              <div className="block md:hidden mt-5 md:mt-0 px-4 pb-4">
                <Card className="w-full max-w-sm mx-auto border border-white/30 rounded-2xl">
                  <div className="p-4">
                    <section className="flex items-center mb-4">
                      <img
                        src="taskb-1.png"
                        className="h-10 w-10 rounded-[6px] object-cover"
                        alt="Taskbound logo"
                      />
                      <h1 className="font-semibold font-poppins ml-3">
                        Taskbound
                      </h1>
                      <BsPatchCheckFill className="ml-2 text-yellow-500" />
                    </section>
                    <div className="mb-4">
                      <p className="text-sm text-[#FFFFFFB8] font-light leading-relaxed font-poppins">
                        Taskbound is a Web3 marketing and contributor Platform
                        designed to help Projects grow through people, hype
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center bg-[#21222D] rounded-xl px-3 py-2">
                        <FaRegCircleUser className="text-white" />
                      </div>
                      <div className="flex items-center bg-[#21222D] rounded-xl px-3 py-2">
                        <FaDiscord className="text-white mr-2" size={16} />
                        <span className="text-[#FFFFFFB8] text-sm">244</span>
                      </div>
                      <div className="flex items-center bg-[#21222D] rounded-xl px-3 py-2">
                        <FaTwitter className="text-white mr-2" size={16} />
                        <span className="text-[#FFFFFFB8] text-sm">244</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 gap-6 px-4 md:px-0 md:pl-0 md:pr-0">
        {isLoading ? (
          <Card>
            <CardContent className="p-6 md:p-12 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading projects...</p>
            </CardContent>
          </Card>
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <Card key={project._id} className="challenge-card">
              <CardHeader className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt="Logo"
                      className="w-14 h-14 rounded-full border object-cover mx-auto sm:mx-0"
                    />
                  )}
                  <div className="text-center sm:text-left flex-1">
                    <CardTitle className="text-lg md:text-xl mb-2">
                      {project.name}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground justify-center sm:justify-start">
                      <span>Category: {project.category || "-"}</span>
                      <span>Total Rewards: {project.totalRewards || "-"}</span>
                      <span>
                        Status: {project.isActive ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center sm:text-left">
                  Created:{" "}
                  {project.createdAt
                    ? new Date(project.createdAt).toLocaleDateString()
                    : "Unknown"}
                </p>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                {project.coverImage && (
                  <img
                    src={project.coverImage}
                    alt="Cover"
                    className="w-full h-32 md:h-40 object-cover rounded mb-3"
                  />
                )}
                <div className="mb-4 text-muted-foreground text-sm md:text-base">
                  {project.description || "No description provided."}
                </div>
                {Array.isArray(project.links) && project.links.length > 0 && (
                  <div className="mt-4">
                    <div className="font-semibold text-sm mb-2">Links:</div>
                    <ul className="list-disc list-inside space-y-1">
                      {project.links.map((link) => (
                        <li key={link._id} className="text-sm">
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
                <div className="flex justify-center sm:justify-end mt-6">
                  <Link to={`/project/${project._id}`}>
                    <Button
                      size="sm"
                      className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 w-full sm:w-auto"
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-6 md:p-12 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                No Projects
              </h3>
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