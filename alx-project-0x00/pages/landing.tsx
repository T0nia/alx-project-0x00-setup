import Card from "@/components/Card";
import React from "react";
import Button from "@/components/Button";
  

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
      </div>
    )
  }
  
  const LandingPage: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <h1 className="text-4xl font-bold">Welcome to the Landing Page</h1>
  
        {/* Button instances with different sizes and shapes */}
        <div className="space-x-4">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
  
        {/* More instances with other styles */}
        <div className="space-x-4">
          <Button title="Small Button Rounded" size="small" shape="rounded-full" />
          <Button title="Large Button Rounded" size="large" shape="rounded-sm" />
        </div>
      </div>
    );
  };
  

  export default Landing;