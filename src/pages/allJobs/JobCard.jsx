import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import React from "react"
import { CiLocationOn } from "react-icons/ci"

export const JobCard = ({job}) => {
    const {id ,image ,post_name,job_type,salary_range ,location ,category} =job
    
  return (
    <Card>
  <CardHeader>
    <CardTitle>{post_name}</CardTitle>
     <p className="flex item-center justify-center  shadow-sm p-1 rounded     border border-[#c6bcbc7e]  font-medium">
              <CiLocationOn className="text-[20px] mx-2" />
              <span className="mr-2  text-[16px] ">{location}</span>
            </p>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  )
}
