import { Home, FileText, User, PenTool } from "lucide-react";
import Index from "./pages/Index.jsx";
import PostPage from "./pages/PostPage.jsx";
import About from "./pages/About.jsx";
import CreatePost from "./pages/CreatePost.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Post",
    to: "/post/:id",
    icon: <FileText className="h-4 w-4" />,
    page: <PostPage />,
  },
  {
    title: "Create Post",
    to: "/create",
    icon: <PenTool className="h-4 w-4" />,
    page: <CreatePost />,
  },
  {
    title: "About",
    to: "/about",
    icon: <User className="h-4 w-4" />,
    page: <About />,
  },
];
