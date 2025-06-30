import {
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdStore,
  MdArticle,
  MdPerson,
} from "react-icons/md";

const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
    cName: "flex justify-start h-15 pt-2 pr-0 pb-2 pl-4",
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <MdShoppingCart />,
    cName: "flex justify-start h-15 pt-2 pr-0 pb-2 pl-4",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <MdPeople />,
    cName: "flex justify-start h-15 pt-2 pr-0 pb-2 pl-4",
  },
  {
    title: "Products",
    path: "/products",
    icon: <MdStore />,
    cName: "flex justify-start h-15 pt-2 pr-0 pb-2 pl-4",
  },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <MdArticle />,
    cName: "flex justify-start h-15 pt-2 pr-0 pb-2 pl-4",
  },
  {
    title: "Agents",
    path: "/agents",
    icon: <MdPerson />,
    cName: "flex justify-start h-15 pt-2 pr-0 pb-2 pl-4",
  },
];

export default SidebarData;
