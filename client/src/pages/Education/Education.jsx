import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div className="py-24 px-6 bg-gray-100 pl-50" id="education">
      <h2 className="text-3xl font-bold text-center text-teal-700 uppercase">
        Education Details
      </h2>
      <hr className="w-40 border-teal-700 mx-auto my-4" />

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2018-2019"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="text-teal-700 text-lg font-semibold">10th</h3>
          <h4 className="text-gray-800 text-sm">State Board (88.28%)</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2019-2021"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="text-teal-700 text-lg font-semibold">12th</h3>
          <h4 className="text-gray-800 text-sm">State Board (85.4%)</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "black" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2021-2025"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="text-teal-700 text-lg font-semibold">Btech(Computer Science & Engineering)</h3>
          <h4 className="text-gray-800 text-sm">Makaut(8.98)</h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Education;
