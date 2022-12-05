import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-2">Homepage</h1>
      <Link to='/counter' className="text-lg text-blue-700 font-bold">1.Go to Counter</Link>
      <Link to='/login' className="text-lg text-blue-700 font-bold">2.Sign In Web Cinephile</Link>
    </div>
  );
}
