import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function SubmoduleItem({ submodule, cIdx, sIdx, containers, setContainers }) {
  const [openSubmodule, setOpenSubmodule] = useState(false);
  const [nodeInput, setNodeInput] = useState("");
  const [addingNode, setAddingNode] = useState(false);

  const toggleSubmodule = () => {
    setOpenSubmodule(!openSubmodule);
  };

  const handleAddNode = () => {
    if (!nodeInput) return;
    const newContainers = [...containers];
    newContainers[cIdx].subModules[sIdx].nodes.push(nodeInput);
    setContainers(newContainers);
    setNodeInput("");
    setAddingNode(false);
    setOpenSubmodule(true); 
  };

  return (
    <li className="text-black list-none">
      <div className="flex items-center gap-2">
        <ArrowDropDownIcon
          onClick={toggleSubmodule}
          className={openSubmodule ? "rotate-90 transform" : ""}
        />
        <span
          className="cursor-pointer"
          onClick={() => setAddingNode(true)}
        >
          {submodule.name}
        </span>
      </div>

      {addingNode && (
        <div className="ml-6 mt-2 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Node name"
            value={nodeInput}
            onChange={(e) => setNodeInput(e.target.value)}
            className="p-1 border rounded text-black"
          />
          <button
            className="p-2 bg-green-300 text-black rounded"
            onClick={handleAddNode}
          >
            Add
          </button>
        </div>
      )}

      {openSubmodule && submodule.nodes.length > 0 && (
        <ul className="ml-6 mt-1 list-disc">
          {submodule.nodes.map((node, nIdx) => (
            <li key={nIdx} className="text-black list-none">
              {node}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
