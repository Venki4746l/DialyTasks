import React from "react";
import Card from "react-bootstrap/Card";
import "./Card.css";

const coursesData = [
  {
    id: 1,
    imageSrc:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/co-1.jpg",
    imageSrc1:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-1.jpg",
    title: "Tableau For Beginners: Get CA Certified, Grow Your Career",
    views: "1,84684 Views",
    hours: "3h 30min",
    dollar: "$69.77",
    name: "Shaurya Preet",
    duration: "1 hour ago",
  },
  {
    id: 2,
    imageSrc:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/co-2.jpg",
    imageSrc1:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-2.jpg",
    title: "The Complete Business Plan Course (Includes 50 Templates)",
    views: "2,25684 Views",
    hours: "4h 30min",
    dollar: "$57.00",
    name: "Savitha Tripathi",
    duration: "20 min ago",
  },
  {
    id: 3,
    imageSrc:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/co-3.jpg",
    imageSrc1:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-3.jpg",
    title: "An Entire MBA In 1 Course:Award Winning Business School Prof",
    views: "5, 69684 Views",
    hours: "5h 32min",
    dollar: "98.40",
    name: "Shaurya Preet",
    duration: "1 days ago",
  },
  {
    id: 4,
    imageSrc:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/co-4.jpg",
    title: "The Complete Financial Analyst Pro Course 2022",
    imageSrc1:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-4.jpg",
    views: "7,42854 Views",
    hours: "6h 30min",
    dollar: "$79.99",
    name: "Litha Mildick",
    duration: "1 days ago",
  },
  {
    id: 5,
    imageSrc:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/co-5.jpg",
    title: "PMP Main Exam Prep Seminar 2022 - PMBOK Guide 6",
    imageSrc1:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-5.jpg",
    views: "5,32984 Views",
    hours: "5h 50min",
    dollar: "$149.7",
    name: "Chirsh Gyle",
    duration: "2 days ago",
  },
  {
    id: 6,
    imageSrc:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/co-6.jpg",
    title: "Tableau 2020 A-Z:Hands-On Tableau Training For Data Science!",
    imageSrc1:
      "https://themezhub.net/learnup-demo-2/learnup/assets/img/user-6.jpg",
    views: "6,56684 Views",
    hours: "6h 40min",
    dollar: "$99.7",
    name: "Shilpa Skeha",
    duration: "4 days ago",
  },
];
const Courses = () => {
  return (
    <div>
      <div>
        <h1>sreach tags</h1>
      </div>
      <div>
        {coursesData.map((item) => (
          <Card key={item.id}>
            <Card.Img variant="top" src={item.imageSrc} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <div>courses</div>
              <div>
                <div>
                  <h1>{item.views}</h1>
                  <h1>{item.hours}</h1>
                </div>
                <div>
                  <h1>{item.dollar}</h1>
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
