import React, { memo, useContext } from 'react'
import { NameContext } from './Parent'

const Child3 = ({ }) => {
    console.log("Child3 calling");

    return (
        <div>Child3 </div>
    )
}

export default memo(Child3)

// const Child3 = ({ name }) => {
//     const value = useContext(NameContext);
//     console.log(value, "value");
//     return (
//         <div>Child3
//             <input type="text" value={value.name} onChange={(e) => value.setName(e.target.value)} /></div>
//     )
// }

// export default Child3