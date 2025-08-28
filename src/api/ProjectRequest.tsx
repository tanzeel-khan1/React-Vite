import { useForm, Controller, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardPara,
} from "@/components/ui/card";
import { useCreateProject } from "@/hooks/useproject";
import { useImageUpload } from "@/hooks/use-challenge";
import { IoIosArrowBack } from "react-icons/io";
import { MdIosShare } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaTimes } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAuth from "@/hooks/useAuth";

const linkPlatforms = [
  "website",
  "twitter",
  "github",
  "discord",
  "telegram",
  "instagram",
  "youtube",
  "linkedin",
  "other",
];

const categories = [
  "DeFi",
  "Blockchain",
  "Gaming",
  "NFT",
  "Social",
  "Infrastructure",
  "Education",
  "Healthcare",
  "E-commerce",
  "Marketing",
];

const ProjectRequest = ({
  onSuccess,
  onCancel,
  width,
  setWidth,
  activeTab,
  setActiveTab,
  initialName,
}) => {
  const [name, setName] = useState(initialName || ""); 
  const [para, setPara] = useState(true);
  const [div, setDiv] = useState(true);
  const [fileName, setFileName] = useState(""); // logo file name
  const [coverFileName, setCoverFileName] = useState(""); // cover image file name
  const creators = [
    { id: 1, name: "Janacrypro", role: "Meme creator", status: "Requested" },
    { id: 2, name: "Janacrypro", role: "Meme creator", status: "Invite" },
    { id: 3, name: "Janacrypro", role: "Meme creator", status: "Invite" },
    { id: 4, name: "Janacrypro", role: "Meme creator", status: "Invite" },
    { id: 5, name: "Janacrypro", role: "Meme creator", status: "Invite" },
    { id: 6, name: "Janacrypro", role: "Meme creator", status: "Invite" },
  ];
  
  const { user } = useAuth();
  const userId = user?.id;

  useEffect(() => {
    if (activeTab === "tab3") {
      setWidth(false);
      setPara(false);
      setDiv(false);
    } else {
      setWidth(true);
      setPara(true);
      setDiv(true);
    }
  }, [activeTab, setWidth]);

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: initialName || "",
      logo: "",
      coverImage: "",
      description: "",
      about: "",
      category: "",
      createdBy: userId,
      totalRewards: "",
      links: [{ platform: "website", link: "" }],
    },
  });

  // Update form when initialName changes
  useEffect(() => {
    if (initialName) {
      setValue("title", initialName);
      setName(initialName);
    }
  }, [initialName, setValue]);

  const { fields, append, remove } = useFieldArray({ control, name: "links" });
  const [logoPreview, setLogoPreview] = useState("");
  const [coverPreview, setCoverPreview] = useState("");
  const [uploading, setUploading] = useState(false);
  const createProject = useCreateProject();
  const imageUpload = useImageUpload();

  const handleLogoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("files", file);
      const response = await imageUpload.mutateAsync(formData);
      if (response && response.files && response.files.length > 0) {
        setValue("logo", response.files[0].fileUrl);
      }
    } catch (error) {
      console.error(error);
    }
    setUploading(false);
  };

  const handleCoverChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCoverFileName(file.name);
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("files", file);
      const response = await imageUpload.mutateAsync(formData);
      if (response && response.files && response.files.length > 0) {
        setValue("coverImage", response.files[0].fileUrl);
      }
    } catch (error) {
      console.error(error);
    }
    setUploading(false);
  };

  const onSubmit = async (data) => {
    try {
      await createProject.mutateAsync(data);
      if (onSuccess) onSuccess();
      reset();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleTabChange = (tab) => {
    if (tab === "tab3") {
      if (onCancel) onCancel();
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div>
        {para ? (
          <CardPara className="md:mt-0 mt-0">
            <p>
              Create a project to be able to invite creators, create bounty
              campaigns and...
            </p>
          </CardPara>
        ) : (
          <p className="flex flex-col h-4 w-[90%] text-[12px] font-extralight md:ml-8 mt-0 ml-4">
            Your project is now live and ready for collaboration. Start adding
            bounties or invite top creators to build with you.
          </p>
        )}
        
        {div ? (
          <div className="h-2 w-full mt-4 mb-3 flex gap-4">
            <div
              onClick={() => handleTabChange("tab1")}
              className={`h-2 w-full max-w-[10rem] rounded-md cursor-pointer transition-all duration-300 ${
                activeTab === "tab1" ? "bg-blue-600" : "bg-white bg-opacity-10"
              }`}
            ></div>
            <div
              onClick={() => handleTabChange("tab2")}
              className={`h-2 w-full max-w-[10rem] rounded-md cursor-pointer transition-all duration-300 ${
                activeTab === "tab2" ? "bg-blue-600" : "bg-white bg-opacity-10"
              }`}
            ></div>
            <div
              onClick={() => handleTabChange("tab3")}
              className={`h-2 w-full max-w-[10rem] rounded-md cursor-pointer transition-all duration-300 ${
                activeTab === "tab3" ? "bg-blue-600" : "bg-white bg-opacity-10"
              }`}
            ></div>
          </div>
        ) : (
          <div className="h-2 w-full mt-12 flex md:mt-6 mb-3 ml-4 md:ml-8 md:flex gap-4 md:gap-4">
            <div
              onClick={() => handleTabChange("tab1")}
              className={`h-2 w-[5rem] md:w-full max-w-[10rem] rounded-md cursor-pointer transition-all duration-300 ${
                activeTab === "tab1" ? "bg-blue-600" : "bg-white bg-opacity-10"
              }`}
            ></div>
            <div
              onClick={() => handleTabChange("tab2")}
              className={`h-2 w-[5rem] md:w-full max-w-[10rem] rounded-md cursor-pointer transition-all duration-300 ${
                activeTab === "tab2" ? "bg-blue-600" : "bg-white bg-opacity-10"
              }`}
            ></div>
            <div
              onClick={() => handleTabChange("tab3")}
              className={`h-2 w-[5rem] md:w-full max-w-[10rem] rounded-md cursor-pointer transition-all duration-300 ${
                activeTab === "tab3" ? "bg-blue-600" : "bg-white bg-opacity-10"
              }`}
            ></div>
          </div>
        )}

        <div className="w-full h-full">
          {activeTab === "tab1" && (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle className="text-[16px] mt-0">
                    Personal Information
                  </CardTitle>
                </CardHeader>

                <div className="md:h-[2rem] w-full md:mt-2 mt-2 block">
                  <Label htmlFor="title">Project Title </Label>
                  <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Project title is required" }}
                    render={({ field }) => (
                      <Input
                        id="title"
                        value={field.value}
                        onChange={(e) => {
                          const value = e.target.value;
                          field.onChange(value);
                          setName(value);
                        }}
                        placeholder="Enter project title"
                        className={errors.title ? "border-red-500" : ""}
                      />
                    )}
                  />
                  {errors.title && (
                    <p className="text-sm text-red-500">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div className="md:h-[4rem] h-[3rem]  w-full mt-3 md:mt-9 ">
                  <Label htmlFor="logo">Logo *</Label>
                  <div className="flex items-center bg-[rgba(18,41,76,0.64)] rounded-[10px] pr-2">
                    <Input
                      id="logo"
                      type="file"
                      accept="image/*"
                      onChange={handleLogoChange}
                      className="bg-transparent md:font-extralight font-extralight border-none"
                    />
                    <MdIosShare className="text-3xl text-blue-700" />
                  </div>
                  {logoPreview && (
                    <img
                      src={logoPreview}
                      alt="Logo Preview"
                      className="w-32 h-16 mt-2 rounded border object-cover"
                    />
                  )}
                </div>
                
                <div className="h-[4rem] w-full   mt-8 md:mt-2 block">
                  <Label htmlFor="coverImage">Cover Image</Label>
                  <div className="w-full items-center bg-[rgba(18,41,76,0.64)] flex rounded-[10px] pr-2">
                    <Input
                      id="coverImage"
                      type="file"
                      accept="image/*"
                      onChange={handleCoverChange}
                      className=" bg-transparent border-none md:font-extralight font-extralight"
                    />
                    <MdIosShare className="text-3xl  text-blue-700 " />
                  </div>
                  {coverPreview && (
                    <img
                      src={coverPreview}
                      alt="Cover Preview"
                      className="w-32 h-16 mt-2 rounded border object-cover"
                    />
                  )}
                </div>

                <div className="h-[4rem] w-full mt-2 block">
                  <Label htmlFor="description">About</Label>
                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        id="description"
                        placeholder="Describe your project..."
                        className="h-10 w-full "
                      />
                    )}
                  />
                </div>

                <div className="h-[3.4rem]  w-full mt-2 block">
                  <Label htmlFor="category">Category</Label>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="md:w-full w-full ">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>

                <div className="h-[2rem] mt-5 w-full md:mt-6 flex">
                  <div className="h-[2rem]  w-[11%] md:w-[10%] bg-[rgba(18,41,76,0.64)] cursor-not-allowed rounded-full">
                    <IoIosArrowBack className=" md:mt-2  ml-2 mt-2 md:ml-3" />
                  </div>
                  <Button
                    type="button"
                    onClick={() => setActiveTab("tab2")}
                    className="h-[2rem] w-[90%] sm:mt-10 md:mt-0 bg-blue-600"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </>
          )}

          {activeTab === "tab2" && (
            <div className="md:h-[20rem]  h-[15rem] w-full">
              <h1 className="font- text-xl">Project Links</h1>
              <div className="md:h-[5rem] h-[10rem] w-full grid  md:flex">
                <div className="h-[2rem] w-full md:mt-4">
                  <Controller
                    name="linkPlatforms"
                    control={control}
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="h-10 w-full md:mt-0 mt-2">
                          <SelectValue placeholder="Website" />
                        </SelectTrigger>
                        <SelectContent>
                          {linkPlatforms.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter link URL"
                  className="md:ml-1 md:mr-2 mr-2 md:mb-1  font-light mt-5 flex md:mt-4 h-10 md:w-[13rem] w-full rounded-md border border-input bg-[rgba(18,41,76,0.64)] px-3 py-2 text-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
                <button className="h-10 w-full md:w-[13rem] mt-2  md:mt-4 rounded-[10px] font-extralight text-base px-3 py-2 border border-red-500 bg-red-600 bg-opacity-20">
                  Remove
                </button>
              </div>
              <h1 className="flex text-[#3380F6] ">
                {" "}
                <span className="mt-1 ">
                  {" "}
                  <GoPlus />
                </span>{" "}
                Add Link
              </h1>
              <div className="h-[2rem] mt-2 md:mt-5 w-full flex">
                <div
                  className="h-[2rem] w-[12%] md:w-[10%] bg-[rgba(18,41,76,0.64)] cursor-pointer rounded-full"
                  onClick={() => setActiveTab("tab1")}
                >
                  <IoIosArrowBack className="mt-2 ml-2 md:ml-3" />
                </div>
                <Button
                  type="button"
                  onClick={() => setActiveTab("tab3")}
                  className="h-[2rem] w-full md:w-[90%] bg-blue-600"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
          
          {activeTab === "tab3" &&
            (() => {
              setWidth(false);
              setActiveTab("tab3");
              return (
                <>
                  <button className="w-[192px] h-[40px] bg-[rgba(54,132,247,1)] mt-4 md:mt-4 rounded-[8px] ml-3 md:ml-8">
                    Create Bounty
                  </button>

                  <div
                    className="h-[23rem] mt-5 md:mt-[2rem] w-[96%] mx-auto rounded-2xl border border-blue-400/20 bg-[rgba(15,15,35,0.6)] 
            overflow-y-auto sm:overflow-visible sm:h-auto"
                  >
                    <section className="hidden sm:flex h-[4rem] w-full items-center px-6 rounded-t-2xl border-b border-blue-400/20">
                      <span className="w-[25%] pl-0 md:pt-6 text-white/70">
                        Creator
                      </span>
                      <span className="w-[2%] ml-auto md:ml-[3rem] mt-6 justify-between text-white/70">
                        Socials
                      </span>
                      <span className="w-[10%] pl-auto mt-6 md:pl-[16rem] text-white/70">
                        Tags
                      </span>
                      <span className="w-[10%] pl-auto mt-6 md:pl-[22rem] text-white/70">
                        Action
                      </span>
                    </section>

                    {/* Mobile list layout */}
                    <div className="sm:hidden flex flex-col gap-4 p-4">
                      {creators.map((creator) => (
                        <div
                          key={creator.id}
                          className="flex flex-col gap-3 bg-[rgba(15,15,35,0.8)] p-4 rounded-xl border border-blue-400/20"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                              alt={creator.name}
                              className="w-9 h-9 rounded-full object-cover border border-blue-400/30"
                            />
                            <span className="font-medium text-white">
                              {creator.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 text-lg text-white">
                            <FaInstagram className="hover:text-pink-500 transition" />
                            <FaYoutube className="hover:text-red-500 transition" />
                            <FaXTwitter className="hover:text-gray-300 transition" />
                          </div>

                          <div className="text-white font-poppins">
                            {creator.role}
                          </div>

                          <div>
                            {creator.status === "Requested" ? (
                              <button className="w-full h-[2rem] rounded-xl text-white/70 bg-[rgba(73,103,149,0.32)] border border-blue-400/20 cursor-default">
                                Requested
                              </button>
                            ) : (
                              <button className="w-full h-[2rem] rounded-xl border border-blue-400 text-white hover:bg-blue-400 hover:text-black transition">
                                Invite
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="hidden sm:block w-full">
                      {creators.map((creator) => (
                        <div
                          key={creator.id}
                          className="flex items-center h-[3rem] px-6 py-3 hover:bg-[rgba(54,132,247,0.06)] transition"
                        >
                          <div className="w-[25%] flex items-center gap-3">
                            <img
                              src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                              alt={creator.name}
                              className="w-9 h-9 rounded-full object-cover border border-blue-400/30"
                            />
                            <span className="font-medium text-white">
                              {creator.name}
                            </span>
                          </div>

                          <div className="w-[12%] ml-20 flex items-center gap-4 text-lg text-white">
                            <FaInstagram className="hover:text-pink-500 transition" />
                            <FaYoutube className="hover:text-red-500 transition" />
                            <FaXTwitter className="hover:text-gray-300 transition" />
                          </div>

                          <div className="w-[15%] text-white ml-36 font-poppins ">
                            {creator.role}
                          </div>

                          <div className="w-[20%]  ml-[10rem]">
                            {creator.status === "Requested" ? (
                              <button className="w-[7rem] h-[2rem] ml-16 rounded-xl text-white/70 bg-[rgba(73,103,149,0.32)] border border-blue-400/20 cursor-default">
                                Requested
                              </button>
                            ) : (
                              <button className="w-[7rem] h-[2rem] ml-16 rounded-xl border border-blue-400 text-white hover:bg-blue-400 hover:text-black transition">
                                Invite
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
        </div>
      </div>
    </>
  );
};

export default ProjectRequest;