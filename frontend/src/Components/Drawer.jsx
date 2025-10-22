import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { motion, stagger } from "motion/react";
import ContainerList from "./ContainerList";
import Graph from "./Graph";
export default function Drawer({ open, setOpen }) {
  const [showContainer, setShowContainer] = useState(false);
  const [graph,setgraph] = useState(false)
  const variants1 = {
    hidden: {
      x: -500,
    },
    visible: {
      x: 0,
      transition: {
        staggerChildren: 0.5,
        duration: 2,
      },
    },
  };
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-300 z-40 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute right-2 top-2 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Modules</h2>
          <motion.ul
            className="flex gap-3.5"
            variants={variants1}
            initial="hidden"
            animate="visible"
          >
            <motion.li
              className="list-none text-black"
              whileHover={{
                textDecoration: "underline",
                textDecorationColor: "red",
              }}
               onClick={() => setShowContainer(!showContainer)}
              >
              <a>All</a>
            </motion.li>
            <motion.li
              className="list-none text-black"
              whileHover={{
                textDecoration: "underline",
                textDecorationColor: "red",
              }}
            >
              <a>Board</a>
            </motion.li>
            <motion.li
              className="list-none text-black"
              whileHover={{
                textDecoration: "underline",
                textDecorationColor: "red",
              
              }}
              onClick={()=>setgraph(!graph)}
            >
              <a>Graph</a>
            </motion.li>
            <motion.li
              className="list-none text-black"
              whileHover={{
                textDecoration: "underline",
                textDecorationColor: "red",
              }}
            >
              <a>Recent</a>
            </motion.li>
            <motion.li
              className="list-none text-black text-sm"
              whileHover={{
                textDecoration: "underline",
                textDecorationColor: "red",
              }}
            >
              <a>
                <MoreVertIcon />
              </a>
            </motion.li>
          </motion.ul>
       {showContainer && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <ContainerList />
            </motion.div>
          )}
          {graph && (
            <Graph/>
          )}
        </div>
      </div>
    </>
  );
}
