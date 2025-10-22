import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ContainerItem from "./ContainerItem";
export default function ContainerList() {
  const [containers, setContainers] = useState([]);
  const handleAddContainer = () => {
    setContainers((prev) => [...prev, { subModules: [] }]);
  };
  console.log(containers);
  return (
    <div className="container mt-5">
      <div className="section1 flex justify-between text-black items-center">
        <div className="font-semibold">DFIN</div>
        <div className="flex gap-2 items-center">
          <li className="text-red-500 list-none">
            <AddIcon className="cursor-pointer" onClick={handleAddContainer}/>
          </li>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {containers.map((container, Idx) => (
          <ContainerItem
            key={Idx}
            container={container}
            cIdx={Idx}
            containers={containers}
            setContainers={setContainers}
          />
        ))}
      </div>
    </div>
  );
}


