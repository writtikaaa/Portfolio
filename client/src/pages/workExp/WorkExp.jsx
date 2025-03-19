import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExp = () => {
  return (
    <div className="bg-teal-100 py-20 px-6 pl-50" id="work">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 uppercase">
          Work Experience
        </h2>
        <hr className="w-40 border-teal-700 mx-auto my-4" />

        {/*<VerticalTimeline lineColor="#1e1e2c">
          {[
            {
              date: "2023 - present",
              title: "Full Stack Developer",
              subtitle: "xyz, pvt ltd",
              description:
                "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
            },
            {
              date: "2020 - 2022",
              title: "Full Stack Developer",
              subtitle: "xyz, pvt ltd",
              description:
                "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
            },
            {
              date: "2018 - 2020",
              title: "Full Stack Developer",
              subtitle: "xyz, pvt ltd",
              description:
                "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
            },
          ].map((job, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={job.date}
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="text-teal-700 text-lg font-semibold">
                {job.title}
              </h3>
              <h4 className="text-gray-600 text-sm">{job.subtitle}</h4>
              <p className="text-gray-700">{job.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>*/}
         <p className="text-justify p-5">
         As a passionate and driven Computer Science student, I may not have extensive industry experience, but I have actively worked on projects that showcase my technical expertise in Java, C, MERN stack, and Salesforce. Through these projects, I have gained hands-on experience in problem-solving, full-stack development, and cloud-based solutions, strengthening my ability to build scalable and efficient applications. My dedication to continuous learning and adaptability enables me to tackle real-world challenges with confidence and creativity.
         </p>
      </div>
    </div>
  );
};

export default WorkExp;
