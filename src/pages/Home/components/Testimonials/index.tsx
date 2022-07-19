import React from "react";
import { TestimonialsContainer } from "./styles";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Emily R.",
    image: "src/assets/images/image-emily.jpg",
    role: "Marketing Director",
    message:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
  },
  {
    id: 2,
    name: "Thomas S.",
    image: "src/assets/images/image-thomas.jpg",
    role: "Chief Operating Officer",
    message:
      "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
  },
  {
    id: 3,
    name: "Jennie F.",
    image: "src/assets/images/image-jennie.jpg",
    role: "Business Owner",
    message:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
  },
];

export const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <h2>Client Testimonials</h2>
      <ul role="list">
        {TESTIMONIALS.map((testimonial) => (
          <li key={testimonial.id}>
            <img src={testimonial.image} alt="" />
            <p>{testimonial.message}</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </TestimonialsContainer>
  );
};
