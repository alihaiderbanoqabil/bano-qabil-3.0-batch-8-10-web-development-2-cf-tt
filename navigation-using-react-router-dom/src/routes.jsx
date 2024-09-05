import About from "./screens/About";
import Contact from "./screens/Contact";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import { Login } from "./screens/Login";
import Post from "./screens/Post";
import Todos from "./screens/Todos";
// import Posts from "./screens/Posts";

export const routes = [
    // {
    //     path: '/home',
    //     screen: <Home />,
    //     title: "Home"
    // },
    {
        path: '/login',
        screen: <Login />,
        // title: "Contact"
    },
    {
        path: '/contact',
        screen: <Contact />,
        title: "Contact"
    },
    // {
    //     path: '/contact',
    //     screen: <Contact />,
    //     title: "Contact"
    // },
    {
        path: '/about',
        screen: <About />,
        title: "About"
    },
    // {
    //     path: '/posts',
    //     screen: <Posts />,
    //     title: "Posts"
    // },
    {
        path: '/',
        screen: <Dashboard />,
        title: "Dashboard"
    },
    {
        path: '/posts/:postId',
        screen: <Post />,
        // title: "Post",
        // isHidden: true
    }
    , {
        path: '/todos',
        screen: <Todos />,
        title: "Todos",
    }
]