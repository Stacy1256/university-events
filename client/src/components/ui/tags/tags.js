import hex2rgb from "../../../utils/hex-utils";
import "../tags/style.css";

const Tags = ({ tags }) => {
  const setColor = (hex) => {
    const color = hex2rgb(hex);
    if (color.r * 0.299 + color.g * 0.587 + color.b * 0.114 > 186) {
      return "#000000";
    } else {
      return "#ffffff";
    }
  };

  return (
    <div className="tags-container">
      {" "}
      {tags.map((tag) => (
        <p
          className="tags-container"
          style={{
            backgroundColor: tag.color,
            width: 250,
            padding: 5,
            borderRadius: 150,
            marginLeft: 10,
            color: setColor(tag.color),
          }}
        >
          #{tag.name}
        </p>
      ))}
    </div>
  );
};

export default Tags;
