import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../Context/Theme";

export default function TimeLineUI({ data }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const { theme } = useTheme();
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });
  console.log(data);
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="flex justify-center items-center -mt-10">
      <div
        className="min-w-[50%] max-w-[90%]  flex-col  font-sans " //  dark:bg-neutral-950
        ref={containerRef}
      >
        {/* <div className="text-center mb-10 flex flex-col items-center justify-center">
          <div className="w-20 h-1 bg-purple-600 mb-2 rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            How development{" "}
            <span className="text-purple-600">through Alcaline works</span>
          </h2>
        </div> */}

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-neutral-700 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3
                  style={{ color: theme.text }}
                  className="md:!block md:ms-0 hidden text-xl md:text-5xl font-bold lg:-ms-35 -mt-[7px]"
                >
                  {/* text-neutral-500 dark:text-neutral-500 */}
                  {item.heading}
                </h3>
              </div>
              <div className="">
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  <h3
                    style={{ color: theme.text }}
                    className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500"
                  >
                    {item.title}
                  </h3>
                  {item.content}{" "}
                </div>
                <div className="relative pl-20 pr-4 md:pl-4 w-full grid grid-cols-2 ">
                  {item.assets.map((item,i) => (
                    <>
                      {/* <div className="w-50"> */}
                      {i == 2 &&<p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore possimus quas numquam quos incidunt voluptatibus delectus culpa dolore dicta nam maiores amet placeat vel, laudantium pariatur facilis optio assumenda doloribus.</p>
                      }<div className="bg-black md:m-3 lg:ms-5 m-2 flex items-center justify-center ">
                        <div className="max-w-5xl">
                          <div className=" rounded-xl shadow-lg group">
                            {/* <div className=" "> */}
                            <img
                              src={item.img}
                              className="w-200 mx-auto transition-all duration-500 ease-in-out group-hover:scale-150 rounded"
                              alt=""
                            />
                            {/* </div> */}
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
