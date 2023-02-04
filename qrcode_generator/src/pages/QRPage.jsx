import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo"; // https://www.npmjs.com/package/react-qrcode-logo
import "./QRPage.css";

const QRGenerator = () => {
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);
  const [qrtype, setQrType] = useState("squares");
  const [fgcolor, setFgColor] = useState("#000000");
  const [bgcolor, setBgColor] = useState("#ffffff");
  const [eyecolor, setEyeColor] = useState("#000000");

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
        <div>
          <label htmlFor="link-input">URL Link:</label>
          <input
            id="link-input"
            type="text"
            placeholder="Enter Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image-input">Image Overlay:</label>
          <input
            id="image-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div>
          <label htmlFor="selection-input">QR Type:</label>
          <select
            id="selection-input"
            value={qrtype}
            onChange={(e) => setQrType(e.target.value)}
          >
            <option value="squares">Squares</option>
            <option value="dots">Dots</option>
          </select>
        </div>
        <div>
          <label htmlFor="eyeColor-input">Eye Colour:</label>
          <input
            id="eyeColor-input"
            type="color"
            value={eyecolor}
            onChange={(e) => setEyeColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fg-input">Foreground Colour:</label>
          <input
            id="fg-input"
            type="color"
            value={fgcolor}
            onChange={(e) => setFgColor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bg-input">Background Colour:</label>
          <input
            id="bg-input"
            type="color"
            value={bgcolor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </div>
        <button type="submit">Generate QR Code</button>
      </form>
      {link && (
        <div className="qr-code-container">
          <QRCode
            value={link}
            size={256}
            qrStyle={qrtype}
            eyeColor={eyecolor}
            bgColor={bgcolor}
            fgColor={fgcolor}
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
