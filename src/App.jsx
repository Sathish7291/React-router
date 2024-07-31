import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CardMap from "./Components/CardMap";
import Card from "./Components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const data = [
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/full_stack_developer_roadmap_in_2024.webp",
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "23 Jul 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author:"Meghana D",
      date: "16 February 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp",
      title: "7 Unique Web Development Project Ideas for Beginners",
      author:"Lukesh S",
      date: "02 Apr 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Project-Ideas-for-Frontend-Development.webp",
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      author:"Isha Sharma",
      date: "25 Apr 2024",
      content: "Full Stack Development",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author:"Isha Sharma",
      date: "23 Jul 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp",
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      author:"Lukesh S",
      date: "25 Mar 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
      title: "Can A Commerce Student Do Data Science?",
     author:"Saakshi Priyadarshini",
      date: "16 Apr 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      title:"Roles and Responsibilities of a Data Scientist",
      author:"Jaishree Tomar",
      date: "16 Apr 2024",
      content: "Data Science",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author:"Jaishree Tomar",
      date: "26 Mar 2024",
      content: "Cyber Security",
    },
    
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author:"Tushar Vinocha",
      date: "16 Apr 2024",
      content: "Cyber Security",
    },
  
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      title: "What Is Hacking? Types of Hacking & More",
      author:"Meghana D",
      date: "25 Mar 2024",
      content: "Cyber Security",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp",
      title: "Top 8 Product-based Companies for UI/UX Designers [Freshers]",
      author:"Guvi Careers",
      date: "10 March 2024 ",
      content: "Career",
    },
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      title:"Top Technologies to Learn in 2024: Jumpstart a Successful Tech Career",
      author:"Guvi Careers",
      date: "19 January 2024",
      content: "Career",
    },
    
   
    {
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      author:"Guvi Careers",
      date: "2 July 2024",
      content: "Career",
    }
  ];

  const [sortedData, setSortedData] = useState([]);
  useEffect(() => {
    const sortedData = [...data].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setSortedData(sortedData);
  }, []);

  return (
    <>     
      <Navbar/>
      <div className="card-container main-card mt-3 pt-3 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <Routes>
            <Route path="/" element={<>{sortedData.map((ele) => (
                    <Card key={ele.id} data={ele} />
                  ))}
                </>
              }></Route>
            <Route path="/FullStackDevelopment" element={<CardMap data={sortedData} val={"Full Stack Development"}/>}></Route>
            <Route path="/DataScience" element={<CardMap data={sortedData} val={"Data Science"} />}></Route>
            <Route path="/CyberSecurity" element={<CardMap data={sortedData} val={"Cyber Security"} />}></Route>
            <Route path="/Career" element={<CardMap data={sortedData} val={"Career"} />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;