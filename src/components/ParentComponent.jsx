import { useState } from "react";
import { ChildComponent } from "./ChildComponent";

export function ParentComponent() {
    const [dataFromChild, setDataFromChild] = useState("");

    function handleDataFromChild(name) {
        console.log("parent:", { name });
        setDataFromChild(name);
    }

    return (
        <div>
            <h1>Data from Child: {dataFromChild}</h1>
            <ChildComponent sendDataToParent={handleDataFromChild} />
        </div>
    );
}
