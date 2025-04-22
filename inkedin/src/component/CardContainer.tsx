import React from "react";
import CardComponent from "./CardComponent";
import "../index.css";

const cards = [
  {
    title: "Google Campus Tour",
    description: "Explore the iconic Googleplex in Mountain View, California.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "Tech Giants",
    description: "Learn about the evolution of Silicon Valley.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "Innovation Hub",
    description: "Where ideas become reality at Google headquarters.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "Work Culture",
    description: "Discover what makes Google’s workspace unique.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "Green Campus",
    description: "Sustainability at the Googleplex campus.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "Cafeteria Chronicles",
    description: "Inside the delicious offerings at Google HQ.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "Engineering Genius",
    description: "Behind the scenes with Google’s dev teams.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "AI Research Lab",
    description: "A sneak peek into Google’s AI future.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "Android HQ",
    description: "Meet the team behind your favorite mobile OS.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "Cloud Powerhouse",
    description: "Explore the backbone of Google Cloud.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "UX at Scale",
    description: "Designing for billions of users.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "Sundar’s Vision",
    description: "Leadership and innovation with Sundar Pichai.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "Google X",
    description: "Inside the moonshot factory.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
  {
    title: "Search Evolution",
    description: "From links to AI-powered answers.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: false,
  },
  {
    title: "Google Moments",
    description: "A look at key milestones in Google’s history.",
    imgURL:
      "https://cdn.britannica.com/16/254816-050-41C9577A/Google-logo-Googleplex-headquarters-Mountain-View-California.jpg",
    isEditable: true,
  },
];

const CardContainer: React.FC = () => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          description={card.description}
          imgURL={card.imgURL}
          isEditable={card.isEditable}
        />
      ))}
    </div>
  );
};

export default CardContainer;
