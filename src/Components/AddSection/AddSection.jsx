import React from "react";
import add from "../../assets/add.jpg";

function AddSection() {
  const info = [
    {
      id: 1,
      image: add,
      title: "About University Grants Commission",
      para: "The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory Organization of the Government of India by an Act of Parliament in 1956, for the coordination, determination and maintenance of standards of teaching, examination and research in university education.",
    },
  ];

  const renderinfo = info.map((item) => {
    return (
      <div key={item.id} className="w-full flex flex-col my-10 items-center">
        {/* Image Container */}
        <div className="flex justify-center w-full px-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-full max-w-[1100px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>

       
        <div className="bg-white shadow-2xl  z-10 p-8 max-w-full">
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl font-bold ml-40 text-orange-500 mb-6">
              {item.title}
            </h3>
           <div className=" ml-40">
              <p className="text-base text-zinc-600 leading-relaxed text-justify">
              {item.para}
            </p>
           </div>
          
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="w-full h-fit mt-5">
      {renderinfo}
    </section>
  );
}

export default AddSection;