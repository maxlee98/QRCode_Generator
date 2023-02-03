import React, { useState } from "react";
import "./HomePage.css"; // Import the CSS file

function HomePage() {
  const [link, setLink] = useState("");
  const [color, setColor] = useState("#000000");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      link: link,
      color: color,
      image: image,
    };
    // Add your form submit logic here
    console.log(`Link: ${link}, Color: ${color}, Image: ${image}`);

    const response = await fetch("http://localhost:3001/qr-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="home-page">
      <form className="qr-form" onSubmit={handleSubmit}>
        <h1 className="form-header">Generate QR Code</h1>
        <div className="form-group">
          <label htmlFor="link">Link:</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="color">Color:</label>
          <input
            type="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">
            Image (optional, only .jpg / .png files accepted):
          </label>
          <input
            type="file"
            id="image"
            accept=".jpg, .png"
            onChange={(e) => setImage(e.target.files[0])}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HomePage;
