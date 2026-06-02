import React from "react";
import add from "../../assets/add.jpg";
import Button from "../Button/Button";

function AddSection() {
  const info = [
    {
      id: 1,
      image: add,
      title: "About University Grants Commission",
      paraline: `The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of Parliament in 1956, for the coordination, determination and maintenance of standards of teaching, examination and research in university education.`,
    },
  ];

  const renderinfo = info.map((item) => {
    return (
      <div key={item.id} className="w-full flex flex-col my-5 items-center">
        {/* Image Container */}
        <div className="flex justify-center w-full px-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-w-[1100px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="bg-white shadow-lg z-10 p-8 h-[300px]  my-2-500 w-[1470px]">
          <h2 className="text-3xl font-bold ml-40">
            <span className="text-orange-500">About</span>{" "}
            {item.title.replace("About ", "")}
          </h2>
          <div className=" h-[200px] my-5  ml-40 w-[1090px]">
        <p>{item.paraline}</p>
        <Button contant="Read more" className="mt-5 "/>
          </div>

        </div>
        
      </div>
    );
  });

  return <section className="w-full h-fit mt-5">{renderinfo}</section>;
}

export default AddSection;
