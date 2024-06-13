import Deviceimage from "@/assets/devices/image.jpg";
import { Device } from "@/shared/types/Device";

export const devicesList: Device[] = [
  {
    id: 1,
    image: Deviceimage,
    title: "Ipad Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia incidunt sequi illum labore? Quia pariatur deleniti quam itaque tempore?",
    subsciptionPrice: 800,
    copayment: 100,
  },
  {
    id: 2,
    image: Deviceimage,
    title: "Iphone 12",
    description:
      "Designed by Apple to complement iPhone 12 Pro Max, the Leather Case with MagSafe is a delightful way to give your iPhone extra protection while adding style.",
    subsciptionPrice: 600,
    copayment: 10,
  },
  {
    id: 3,
    image: Deviceimage,
    title: "Samsung S23",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia incidunt sequi illum labore? Quia pariatur deleniti quam itaque tempore?",
    subsciptionPrice: 700,
    copayment: 10,
  },
  {
    id: 4,
    image: Deviceimage,
    title: "Mackbook Pro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia incidunt sequi illum labore? Quia pariatur deleniti quam itaque tempore?",
    subsciptionPrice: 1800,
    copayment: 200,
  },
];
