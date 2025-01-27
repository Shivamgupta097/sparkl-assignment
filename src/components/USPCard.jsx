import { IoIosCheckmarkCircle } from "react-icons/io";

const USPCard = ({ index, title, description, Icon, width, isSmall }) => {
  return (
    <div
      className={`card bg-white shadow-lg rounded-lg p-6 flex flex-col transition-all duration-300 ease-in-out h-[400px]`}
      style={{
        width: `${width}px`,
      }}
      key={index}
    >
      {/* Icon and Title Row */}
      <div
        className={`flex w-full justify-between ${
          isSmall
            ? "flex-col-reverse items-center h-full  text-sm"
            : "items-center"
        }  text-lg transition-all duration-800 ease-in-out`}
      >
        <h3
          className={`text-gray-800 font-bold transition-transform duration-500 ease-in-out`}
          style={{
            marginBottom: isSmall ? "80px" : "0px",
            transform: isSmall
              ? "rotate(90deg) translateX(50%)"
              : "rotate(0deg)",
            whiteSpace: "nowrap",
            wordWrap: "break-word",
          }}
        >
          {title}
        </h3>
        {isSmall ? (
          <div>
            <IoIosCheckmarkCircle className="text-green-600 bg-white text-3xl" />
          </div>
        ) : (
          <h3 className="h-6 w-6 font-bold  rounded-full bg-black flex items-center justify-center text-white ">
            {index + 1}
          </h3>
        )}
      </div>

      {/* Description */}
      <div
        className={`flex gap-5 items-center h-full ${
          isSmall ? "hidden duration-100" : ""
        }`}
      >
        <Icon className="text-yellow-500 text-9xl" />
        <p
          className={`text-gray-500 text-sm  text-center transition-opacity duration-300 ease-in-out m-auto`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
export default USPCard;
