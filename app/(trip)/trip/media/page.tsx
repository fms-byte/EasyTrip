/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import BreadCrumb from "@/components/breadcrumb";  
import React from "react";

const breadcrumbItems = [{ title: "Place", link: "/trip/place" }];
export default function page() {
 

  return (
    <>
      <div className="flex space-y-4 flex-col p-4 md:p-8 pt-6">
       <div className="flex flex-row justify-between items-end">
       <BreadCrumb items={breadcrumbItems} />
        
       </div>
        Media
      </div>
    </>
  );
}
