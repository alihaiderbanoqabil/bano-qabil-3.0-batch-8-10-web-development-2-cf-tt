import React, { memo, useContext } from 'react'
import Child2 from './Child2'
import { NameContext } from './Parent'

const Child1 = ({ name }) => {
    console.log("Child1 calling");
    return (
        <div>Child1 {name}
            <Child2 />
        </div>
    )
}

export default memo(Child1)

// const Child1 = ({ name }) => {
//     const value = useContext(NameContext)
//     return (
//         <div>Child1 {value.name}
//             <Child2 name={name} />
//         </div>
//     )
// }

// export default Child1