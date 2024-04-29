import React from "react";
import MenuBar from "../components/MenuBar/MenuBar";
import TopBar from "../components/TopBar/TopBar";
import Transactions from "../components/Transactions/Transactions";

const TransactionPage = () => {
  return (
    <div className="flex bg-indigo-950 w-full">
      <MenuBar />

      <div className="w-full bg-indigo-950 text-white h-screen">
        <TopBar />
        <div className="w-full h-[85%]">
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
