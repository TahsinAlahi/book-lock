import { useState } from "react";
import SortingOptions from "../Components/SortingOptions";
import "react-tabs/style/react-tabs.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ReadBooks from "../Components/ReadBooks";
import WishList from "../Components/WishList";

function LinkedPage() {
  const [sorting, setSorting] = useState("default");
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold w-full lg:py-6 bg-slate-500/20 rounded-lg text-center">
        Books
      </h1>
      <SortingOptions sorting={sorting} setSorting={setSorting} />

      <Tabs className="w-full">
        <TabList>
          <Tab>ReadBooks</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          <ReadBooks />
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default LinkedPage;
