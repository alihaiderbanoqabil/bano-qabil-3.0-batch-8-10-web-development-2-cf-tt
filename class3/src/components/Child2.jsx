import React, { memo } from 'react'
import Child3 from './Child3'

const Child2 = memo(({ }) => {
    console.log("Child2 calling");

    return (
        <div>Child2
            <Child3 />
        </div>
    )
})

export default Child2

// const Child2 = ({ name }) => {
//     return (
//         <div>Child2
//             <Child3 name={name} />
//         </div>
//     )
// }

// export default Child2