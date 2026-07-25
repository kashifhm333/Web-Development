"use client";
import Image from "next/image";

export default function Home() {
  const handleClick = async ()=>{
    let data = {
      name: "Kashif",
      role: "Software Engineer"
    }
    let a = await fetch("/api/add", {method: "POST",  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
    let res = await a.json()
    console.log(res);
    
  }
  return (
  <div>
    <h1 className="text-2xl font-bold">Next js api Routes Demo</h1>
    <button className="cursor-pointer" onClick={handleClick}>Click Me</button>
  </div>
  );
}
