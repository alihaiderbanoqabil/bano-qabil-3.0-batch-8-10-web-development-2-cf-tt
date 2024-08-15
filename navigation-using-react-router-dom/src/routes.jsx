import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Post from "./screens/Post";
import Posts from "./screens/Posts";

export const routes = [
    // {
    //     path: '/home',
    //     screen: <Home />,
    //     title: "Home"
    // },
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
    {
        path: '/posts',
        screen: <Posts />,
        title: "Posts"
    },
    {
        path: '/posts/:postId',
        screen: <Post />,
        // title: "Post",
        // isHidden: true
    }
]