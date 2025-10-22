import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SubmoduleItem from "./SubmoduleItem";

export default function ContainerItem({ container, cIdx, containers, setContainers }) {
  const [openContainer, setOpenContainer] = useState(false);

  const handleContainerClick = () => {
    const newContainers = [...containers];
    const subCount = newContainers[cIdx].subModules.length + 1;
    console.log(newContainers[cIdx]);
    console.log(subCount);
    console.log(cIdx);
    newContainers[cIdx].subModules.push({
      name: `Collection ${cIdx + 1}.${subCount}`,
      nodes: []
    });
    setContainers(newContainers);
    if (!openContainer) setOpenContainer(true);
  };

  const toggleContainer = () => {
    setOpenContainer(!openContainer);
  };

  return (
    <div>
      <li className="p-2 text-black list-none flex items-center cursor-pointer bg-gray-200 rounded">
        <ArrowDropDownIcon
          onClick={toggleContainer}
          className={openContainer ? "rotate-90 transform" : ""}
        />
        <span className="ml-1" onClick={handleContainerClick}>
          Collection {cIdx + 1}
        </span>
      </li>
      {openContainer && container.subModules.length > 0 && (
        <ul className="ml-4 mt-1 list-disc">
          {container.subModules.map((sub, sIdx) => (
            <SubmoduleItem
              key={`${cIdx}-${sIdx}`}
              submodule={sub}
              cIdx={cIdx}
              sIdx={sIdx}
              containers={containers}
              setContainers={setContainers}
            />
          ))}
        </ul>
      )}
    </div>
  );
}



