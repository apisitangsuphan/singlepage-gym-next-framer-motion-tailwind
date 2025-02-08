import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Trainer",
    link: "/trainer",
  },
  {
    id: 3,
    title: "Programs",
    link: "/programs",
  },
  {
    id: 4,
    title: "Blogs",
    link: "/blogs",
  },
  {
    id: 5,
    title: "Pricing",
    link: "/pricing",
  },
];
export const EquipmentsData = [
  {
    id:1,
    title:"Yoga Equipments",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
    icon: <GrYoga/>,
    delay:0.2,
  },
  {
    id:2,
    title:"Muscles Equipments",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, omnis in quam dolorum asperiores labore quibusdam porro deserunt et, provident neque perferendis totam cum reiciendis accusamus eveniet eaque, magni cupiditate?",
    link:"/",
    icon: <FaDumbbell/>,
    delay:0.5,
  },
  {
    id:3,
    title:"Fitness Equipments",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
    icon: <GiGymBag/>,
    delay:0.9,
  }
]