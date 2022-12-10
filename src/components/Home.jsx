import React from "react";
import { DataList } from "./DataList";
import { Jumbotron } from "./Jumbotron";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <DataList />
    </div>
  );
};
