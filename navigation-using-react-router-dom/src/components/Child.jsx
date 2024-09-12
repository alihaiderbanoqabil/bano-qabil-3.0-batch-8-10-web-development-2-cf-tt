import React, { forwardRef } from 'react'

// const Child = forwardRef(() => {
//     return (
//         <div>Child</div>
//     )
// })
const Child = () => {
    return (
        <div>Child</div>
    )
}

export default forwardRef(Child)
// export default Child