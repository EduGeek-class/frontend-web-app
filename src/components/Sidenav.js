import React from "react";
import Adminpage from "./Adminpage";
import Timetable from "./Timetable";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { BrowserRouter ,Route} from "react-router-dom";

function Sidenav() {
  return (
    <div>
      <Navigation
        // you can use your own router's api to get pathname
        activeItemId="/batch"
        onSelect={({ itemId }) => {
          // maybe push to the route
          // history.push(itemId);
        }}
        items={[
        
          {
            title: "Video",
            itemId: "/batch",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
         
          {
            title: "Study Material",
            itemId: "/timetable",
            // you can use your own custom Icon component as well
            // icon is optional
            // elemBefore: () => <Icon name="inbox" />,
          },
         
          {
            title: "Students",
            itemId: "/management",
            // elemBefore: () => <Icon name="users" />,
            // subNav: [
            //   {
            //     title: "Video",
            //     itemId: "/management/projects",
            //   },
            //   {
            //     title: "Settings",
            //     itemId: "/management/members",
            //   },
            // ],
          },
         
        ]}
      />
    </div>
  );
}

export default Sidenav;
