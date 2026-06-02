import React from "react";
import add from "../../assets/add.jpg";

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

        <div className="bg-white shadow-lg z-10 p-8 h-[300px] border-2 my-2 border-red-500 w-[1470px]">
          <h2 className="text-3xl font-bold ml-40">
            <span className="text-orange-500">About</span>{" "}
            {item.title.replace("About ", "")}
          </h2>
          <div className=" h-fit my-5 border-2 ml-40 border-red-500 w-[1090px]">
        <p>{item.paraline}</p>
          </div>
          
        </div>
        
      </div>
    );
  });

  return <section className="w-full h-fit mt-5">{renderinfo}</section>;
}

export default AddSection;
