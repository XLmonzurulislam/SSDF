import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { ScrollToTop, Navbar, Footer } from "./components";
const Loader = React.lazy(() => import("./components/atoms/Loader"));
const NotFound = React.lazy(() => import("./components/molecules/NotFound"));
const ProjectDetails = React.lazy(() => import("./components/molecules/ProjectDetails"));
const BlogDetail = React.lazy(() => import("./components/molecules/BlogDetail"));
const BlogIndex = React.lazy(() => import("./components/molecules/BlogIndex"));
const MernBlogRepair = React.lazy(() => import("./components/molecules/MernBlogRepair"));
const EmployeeSalaryManagementRepair = React.lazy(() => import("./components/molecules/EmployeeSalaryManagementRepair"));
const Blog = React.lazy(() => import("./pages/Blog"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetail />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          <Route path="/mern-blog" element={<MernBlogRepair />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagementRepair />} />
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;
