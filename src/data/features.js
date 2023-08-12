import {
  RadarIcon,
  TimerIcon,
  ScheduleIcon,
  SpaceShuttleIcon,
} from "../components/Features/Features.styled";

const features = [
  {
    id: "f1",
    image: <RadarIcon size={70} color="#2F303A" />,
    title: "ATTENTION TO DETAIL",
    description:
      "Perfection in Every Pixel. Unmatched Precision, Unparalleled Quality. Discover the Art of Detail with Us!",
  },
  {
    id: "f2",
    image: <TimerIcon size={70} color="#2F303A" />,
    title: "PUNCTUALITY",
    description:
      "Time is Our Commitment. Punctuality Perfected. Trust in Our Timely Solutions for a Seamless Experience.",
  },
  {
    id: "f3",
    image: <ScheduleIcon size={70} color="#2F303A" />,
    title: "PLANNING",
    description:
      "Seamless Solutions, Meticulously Planned. Unlock Success with our Strategic Approach to Planning.",
  },
  {
    id: "f4",
    image: <SpaceShuttleIcon size={70} color="#2F303A" />,
    title: "MODERN TECH",
    description:
      "Empowering Your Future with Modern Tech. Embrace Innovation, Embrace Success.",
  },
];

export default features;
