import React from "react";
import BudhaComponent from "../components/home/BudhaComponent";
import BlackComponent from "../components/home/BlackComponent";
import SmileyCard from "../components/home/SmileyCard";
import NoMoreHomeless from "../components/home/NoMoreHomeless";
import FinalCard from "../components/home/FinalCard";
import Campains from "../components/home/Campains";
function Home() {
  return (
    <div>
      <BudhaComponent/>
      <BlackComponent/>
      <SmileyCard/>
      <NoMoreHomeless/>
      <FinalCard/>
      <Campains/>
    </div>
  );
}

export default Home;
