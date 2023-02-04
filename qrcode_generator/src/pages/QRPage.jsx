import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo"; // https://www.npmjs.com/package/react-qrcode-logo
import "./QRPage.css";

const QRGenerator = () => {
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [color, setColor] = useState("#000000");

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the link, image and color values
  };

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const downloadQRCode = () => {
    const canvas = document.getElementsByTagName("canvas")[0];
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    const currentTime = new Date();
    const formattedTime =
      currentTime.getFullYear() +
      ("0" + (currentTime.getMonth() + 1)).slice(-2) +
      ("0" + currentTime.getDate()).slice(-2) +
      "_" +
      ("0" + currentTime.getHours()).slice(-2) +
      ("0" + currentTime.getMinutes()).slice(-2) +
      ("0" + currentTime.getSeconds()).slice(-2);

    downloadLink.download = `QRCode_${formattedTime}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="qr-generator">
      <h1>Generate QR Code</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="submit">Generate QR Code</button>
      </form>
      {link && (
        <div className="qr-code-container">
          <QRCode
            value={link}
            size={256}
            bgColor="#FFFFFF"
            fgColor={color}
            logoImage={image}
            logoWidth={75}
            logoHeight={75}
          />
        </div>
      )}
      {link && <button onClick={downloadQRCode}>Download QR Code</button>}
    </div>
  );
};

export default QRGenerator;
