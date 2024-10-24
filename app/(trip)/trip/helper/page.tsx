'use client';
import BreadCrumb from "@/components/breadcrumb";
import React, { useState } from "react";
import { useTheme } from "next-themes";

const MessageBox = (props: { output: string }) => {
    const { output } = props;
    return (
      <Card
        className={`${
          output ? 'flex' : 'hidden'
        } !max-h-max bg-zinc-950 p-5 !px-[22px] !py-[22px] text-base font-normal leading-6 text-white backdrop-blur-xl dark:border-zinc-800 dark:!bg-white/5 dark:text-white md:text-base md:leading-[26px]`}
      >
        <ReactMarkdown className="text-base font-normal">
          {output ? output : ''}
        </ReactMarkdown>
      </Card>
    );
  };
  

import {
  ImageIcon,
  SpeakerLoudIcon,
  SendIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import MessageBoxChat from "@/components/MessageBoxChat";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
const breadcrumbItems = [{ title: "Analysis", link: "/dashboard/analysis" }];
export default function page() {

    const [inputMessage, setInputMessage] = useState<string>("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [outputCode, setOutputCode] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<
      Array<{ type: "user" | "ai"; content: string }>
    >([]);
    const [isImageUploadOpen, setIsImageUploadOpen] = useState<boolean>(false);
  
    const handleTranslate = async () => {
      if (!inputMessage.trim()) {
        alert("Please enter your message.");
        return;
      }
  
      setLoading(true);
      setMessages([...messages, { type: "user", content: inputMessage }]);
      setOutputCode(" ");
      
      try {
        const response = await fetch("/api/chatAPI", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputMessage }),
        });
  
        if (!response.ok) {
          throw new Error("API request failed");
        }
  
        const data = await response.json();
        const accumulatedResponse = data?.content;
  
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: "ai", content: accumulatedResponse },
        ]);
        setInputMessage("");
      } catch (error) {
        console.error("Error in API call:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };
  
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log("Image uploaded:", file);
        setIsImageUploadOpen(false);
      }
    };
  
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="relative flex w-full flex-col h-full dark:bg-gray-900 p-4">
      <div className="flex-grow overflow-auto px-4 py-2 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 my-8">
            <p className="mb-4">No messages yet. Try one of these prompts:</p>
            <Button
              onClick={() =>
                setInputMessage("When did the rainforest get Alligators?")
              }
              className="m-2"
            >
              When did the rainforest get Alligators?
            </Button>
            <Button
              onClick={() =>
                setInputMessage(
                  "What are the main reasons for the recent Teesta Flood?"
                )
              }
              className="m-2"
            >
              What are the main reasons for the recent Teesta Flood?
            </Button>
          </div>
        ) : (
          messages.map((message, index) => (
            <div
              key={index}
              className={`flex w-full mb-4 ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-3/4 p-3 rounded-2xl shadow-md ${
                  message.type === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}

        {outputCode && (
          <div className="flex w-full mt-4">
            <div className="mr-4 flex h-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full bg-blue-600 text-white">
              <SpeakerLoudIcon className="h-4 w-4" />
            </div>
            <MessageBox output={outputCode} />
          </div>
        )}
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="flex w-full items-center">
          <Input
            className="flex-grow mr-2 p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none"
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <Button
            className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 mr-2"
            onClick={() => setIsImageUploadOpen(!isImageUploadOpen)}
          >
            <ImageIcon className="w-5 h-5" />
          </Button>
          <Button
            className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={handleTranslate}
            disabled={loading}
          >
            {loading ? "..." : <SendIcon className="w-5 h-5" />}
          </Button>
        </div>
        {isImageUploadOpen && (
          <div className="mt-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
      </div>
    </>
  );
}

 