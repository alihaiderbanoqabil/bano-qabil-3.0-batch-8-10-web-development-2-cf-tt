import { forwardRef } from 'react';

// const MyInput = forwardRef(function MyInput(props, ref) {
//     const { label, ...otherProps } = props;
//     return (
//         <label>
//             {label}
//             <input {...otherProps} />
//         </label>
//     );
// });
const MyInput = (props, ref) => {
    const { label, ...otherProps } = props;
    return (
        <label>
            {label}
            <input className='rounded border-cyan-500 border-2' {...otherProps} ref={ref} />
        </label>
    );
};

export default forwardRef(MyInput)