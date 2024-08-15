import Callback from "./components/Callback";
import Count from "./components/Count";
import { Footer } from "./components/Footer";
import Form from "./components/Form";
import Greeting from "./components/Greeting";
import { Header } from "./components/Header";
import Parent from "./components/Parent";
import { ParentComponent } from "./components/ParentComponent";
import Products from "./components/Products";
import PropsCheckingInComponent from "./components/PropsTypeCheckingInComponent";
import { Todos } from "./components/Todos";
import { useFetch } from "./hooks/useFetch";
// import Products from "./Products";

// const studentMarks = [10,20,30,40, 50];

// studentMarks[3]

// const usmanMarks = studentMarks[3];

// const [aliMarks, hasnainMarks, usmanMarks] = studentMarks
// const [aliMarks, hasnainMarks, usmanMarks, ...restStudentMarks] = studentMarks
// const obj = {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//     "rate": 3.9,
//     "count": 120
//   }
// };
// const {
//   id = 10,
//   title: objTitle,
//   price,
//   description,
//   category,
//   image,
//   rating: {
//     rate,
//     count
//   }
// } = obj;
//  console.log(id, objTitle);

// deleting keys using object destructuring and rest operator 
// const {id, name, ...rest} = obj;

// const students1 = [10, 20, 30, 40, 50];
// const students2 = [10, 20, 30, 40, 50];
// const copiedStudents = [...students1, ...students2];
// console.log(students1);
// console.log(copiedStudents);
export default function App() {
  // const { isLoading, error, data } = useFetch("https://jsonplaceholder.typicode.com/users");
  const { isLoading, error, data } = useFetch("https://jsonplaceholder.typicode.com/comments");
  const { isLoading: todosIsLoading, error: todosError, data: todosData } = useFetch("https://jsonplaceholder.typicode.com/todos");


  // console.log({ isLoading, error, data });
  // console.log({ todosIsLoading, todosError, todosData });
  // let name;
  let fullName = 0;
  // if (name !== undefined) {
  //   fullName = "ali"
  // }
  let name = fullName || "ali";
  // console.log(name);
  return (
    <div>
      {/* <PropsCheckingInComponent name={"Ali Haider"} age={'20'} isAdult={true} /> */}
      <PropsCheckingInComponent
        optionalObjectWithShape={{
          requiredProperty: 34
        }}
        name={'true'}

        age={20} isAdult={false} hobbies={[45]} info={{ name: 'ali' }} add={() => { }} node={56} />
      {/* <Callback /> */}
      {/* <Parent /> */}
      {/* <Todos /> */}
      {/* <ParentComponent /> */}
      {/* <Form /> */}
      {/* <Products /> */}
      {/* <Count /> */}
      {/* <Header /> */}
      {/* <Products /> */}
      {/* <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header /> */}
      {/* <Greeting name="ali haider"/>
      <Greeting name="hasnain"/>
      <Greeting name="usman"/> */}
      {/* <Greeting name="hasnain" age={20} isAdult={true}
        h1={<h1>Heading 1</h1>}
        object={{
          "id": 9,
          "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
          "price": 64,
          "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
          "category": "electronics",
          "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          "rating": {
            "rate": 3.3,
            "count": 203
          }
        }} />
      <Greeting name="ali" />
      <Greeting name={"maaz"} /> */}
      {/* <Greeting />
      <Greeting />
      <Greeting />
      <Greeting /> */}
      {/* <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header />
      <Header /> */}
      {/* <Footer /> */}
      {/* <Parent title={"Heading 1"} description={"description 1"} >
        <form>
          <input type="text" />
          <input type="email" />
          <input type="password" />
        </form>
      </Parent>
      <Parent title={"Heading 2"} description={"description 2"} >

        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name 1</td>
              <td>Class 1</td>
            </tr>
            <tr>
              <td>Name 2</td>
              <td>Class 2</td>
            </tr>
            <tr>
              <td>Name 3</td>
              <td>Class 3</td>
            </tr>
          </tbody>
        </table>
      </Parent> */}

    </div>
  );
}
// export function APG() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default function Ali() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

