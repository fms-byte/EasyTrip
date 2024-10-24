/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 
import { useSession } from "next-auth/react";
import {
  UploadCloud,
  Search,
  Loader2,
} from "lucide-react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogGenerator from "./generate";
import { Modal } from "@/components/ui/modal";

const breadcrumbItems = [{ title: "Blog", link: "/trip/blog" }];

export default function Page() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userId, setUserId] = useState(undefined);
  const [tripPlanId, setTripPlanId] = useState(undefined);
  const { data: session } = useSession();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const { toast } = useToast();

  // Fetch blogs based on tripPlanId and search query
  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `/api/blog?tripPlanId=${tripPlanId}&query=${searchQuery}`
      );
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch blogs. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tripPlanId) fetchBlogs();
  }, [tripPlanId]);

  return (
    <div className="min-h-screen p-4 container mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <nav className="text-sm breadcrumbs">
            <ul className="flex space-x-2">
              {breadcrumbItems.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-blue-500 hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <Button onClick={() => setIsOpen(true)}>
          <UploadCloud className="mr-2" /> Generate New Blog
        </Button>
      </div>

      <div className="flex space-x-4 mb-4">
        <Input
          type="text"
          placeholder="Type a natural language search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button onClick={fetchBlogs}>
          <Search className="mr-2" /> Search Blogs
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="text-center flex flex-col items-center">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p>Loading blogs...</p>
          </div>
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex justify-center items-center py-16">
          <p>No blogs found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {blogs.map((blog, index) => (
            <div key={index} className="relative group border rounded p-4">
              {/* Small preview of blog content */}
              <p className="text-sm">
                {blog.content.substring(0, 100)}...
              </p>
              {/* Author */}
              <div className="flex items-center mt-2">
                <img
                  src={blog.author.photo}
                  alt={blog.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-sm">{blog.author.name}</span>
              </div>
              {/* Preview Button */}
              <Button
                variant="default"
                onClick={() => setSelectedBlog(blog)}
                className="mt-2"
              >
                Preview
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Dialog for Generate Blog */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={"Blog Generator"} description={"Ai Blog generator will help to make your Blog"}>
         
          <BlogGenerator
            email={session?.user?.email}
            name={session?.user?.name}
            tripPlanId={tripPlanId}
          />
       
      </Modal>

    
    </div>
  );
}
