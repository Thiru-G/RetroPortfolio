import clsx from "clsx";
import React, { useState } from "react";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState({
    key: 0,
    title: "",
    description: "",
    image: "",
  });
  const [projectList, setProjectList] = useState([
    {
      key: 0,
      image: "",
      title: "La concordia",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Reiciendis voluptas tempore perferendis sint cum
      qui vero eligendi assumenda doloribus dolores magni
      dolore quod voluptatibus asperiores quaerat, amet nam
      est maiores.`,
    },
    {
      key: 1,
      image: "",
      title: "YouTube",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Reiciendis voluptas tempore perferendis sint cum
      qui vero eligendi assumenda doloribus dolores magni
      dolore quod voluptatibus asperiores quaerat, amet nam
      est maiores.`,
    },
    {
      key: 2,
      image: "",
      title: "3D Buap Map",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing
      elit. Reiciendis voluptas tempore perferendis sint cum
      qui vero eligendi assumenda doloribus dolores magni
      dolore quod voluptatibus asperiores quaerat, amet nam
      est maiores.`,
    },
  ]);

  return (
    <div
      className={clsx(
        "project_container",
        "w-full h-full"
      )}>
      <div>
        <h1
          className={clsx(
            "w-full header_console header_console--yellow text-32p"
          )}>
          Projects
        </h1>
      </div>
      <div className={clsx("w-full h-full flex")}>
        <div
          id='project_list'
          className={clsx("relative w-[35%] h-full")}>
          <div
            className={clsx(
              "project_list_indicator",
              "w-[10px] h-[120px] absolute top-0 left-[10px] bg--aqua"
            )}></div>
          <ul className='px-[30px]'>
            {projectList.map((item) => (
              <li
                className={clsx(
                  "relative flex",
                  "hover:underline cursor-pointer hover:decoration-blue-900"
                )}
                onClick={() => setCurrentProject(item)}>
                <div
                  className={clsx(
                    "project_item_disc w-[10px] h-[10px]",
                    "absolute top-[50%] translate-y-[-50%] left-0 bg-blue-900 rounded-full"
                  )}></div>
                <p className='header_console header_console--aqua pl-[20px]'>
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          id='project_show'
          className={clsx(
            "w-[65%] h-[450px] border--aqua overflow-hidden"
          )}>
          <div
            className={clsx(
              "w-full h-[700px] p-[10px] overflow-scroll"
            )}>
            <h1
              className={clsx(
                "header_console header_console--green"
              )}>
              {currentProject.title}
            </h1>
            <div>
              <img src={currentProject.image} alt='' />
            </div>
            <p className='header_console header_console--aqua'>
              {currentProject.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
