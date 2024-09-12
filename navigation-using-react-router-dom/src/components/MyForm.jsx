import { useRef } from "react";
import MyInput from "./MyInput";

export const MyForm = () => {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
    }

    return (
        <form>
            <MyInput placeholder="Enter your name" readOnly disabled label="Enter your name:" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}