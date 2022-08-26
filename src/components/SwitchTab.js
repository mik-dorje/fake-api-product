import React, { useEffect, useState } from "react";
import "./SwitchTab.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const SwitchTab = () => {
  const [index, setIndex] = useState(1);

  const handleSelect = (index) => {
    setIndex(index);
  };

  const Specifications = () => {
    return (
      <>
        <div className="technical-details">
          <h3>Technical Details</h3>
          <div>
            <table>
              <tr>
                <th>Item Weight</th>
                <td>29 pounds</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>38 x 40 x 31.5 inches</td>
              </tr>
              <tr>
                <th>Item model number</th>
                <td>BF29296BR-M52</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="technical-details">
          <h3>Other Details</h3>
          <div>
            <table>
              <tr>
                <th>Item Weight</th>
                <td>29 pounds</td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td>38 x 40 x 31.5 inches</td>
              </tr>
              <tr>
                <th>Item model number</th>
                <td>BF29296BR-M52</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="SwitchTab">
      <Tabs className="tabs" selectedIndex={index} onSelect={handleSelect}>
        <TabList className="tab-list">
          <div className="heading-box">
            <div className="headings">
              <Tab className={index === 0 && "active-heading"  }>Description</Tab>
              <Tab className={index === 1 && "active-heading"  }>Specifications</Tab>
              <Tab className={index === 2 && "active-heading"  }>Questions/Answers</Tab>
              <Tab className={index === 3 && "active-heading"  }>Rating & Reviews</Tab>
            </div>
          </div>
        </TabList>
        <TabPanel className="tab-panel">
          <div className="details">Description</div>
        </TabPanel>
        <TabPanel className="tab-panel">
          <div className="details">
            <Specifications />
          </div>
        </TabPanel>
        <TabPanel className="tab-panel">
          <div className="details">Questions and Answers</div>
        </TabPanel>
        <TabPanel className="tab-panel">
          <div className="details">Rating and Reviews</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SwitchTab;
