import { assets, srkAssets, stormAssets } from "../assets";
import { useTheme } from "../Context/Theme";
import HeadLine from "../HelperComponent/HeadLine";
import TimeLineUI from "../HelperComponent/TimeLineUI";

export default function TimeLine() {
  const { theme } = useTheme();
  console.log(stormAssets);
  const steps = [
    {
      id: 1,
      heading: "1#",
      title: "Storm (Weather Application)",
      assets:stormAssets,
      description:
        "We handle all aspects of vetting and choosing the right team that you dont have the time, expertise, or desire to do.",
    },
    {
      id: 2,
      heading: "2#",
      assets:srkAssets,
      title: "Invoice Genarator",
      description:
        "Allow users to create, edit, and download invoices dynamically with auto-calculation of totals, taxes, and downloadable PDF.",
    },

  ];
  const data = steps.map((step) => ({
    title: step.title,
    heading: step.heading,
    assets:step.assets|| [],
    content: (
      <div>
        <p
          style={{ color: theme.text }}
          className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-600"
        >
          {step.description}
        </p>
      </div>
    ),
  }));
  console.log(data)
  return (
    <>
      <div
        style={{
          backgroundColor: theme.bgColorPrimary,
        }}
        className="relative w-full overflow-clip"
      >
        <div className="pt-15">
          <HeadLine title={"Projects"} />
        </div>
        <TimeLineUI data={data} />
      </div>
    </>
  );
}
