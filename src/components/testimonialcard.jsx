import React from "react";
import { IoMdStar } from "react-icons/io";
export default function TestimonialCard({ content, user, rating }) {
  return (
    <div className="testimonialcard">
      <p>{content}</p>
      <div className="testimonialcardbottom">
        <h4>{user}</h4>
        <div className="testimonialcardrating">
          {[...Array(rating)].map((e, i) => (
            <IoMdStar key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
