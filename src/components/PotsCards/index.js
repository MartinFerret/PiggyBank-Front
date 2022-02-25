import './style.scss';

function PotsCards() {
  return (
    <>
      {/*  Single card  */}
      <div className="flex-grow cards-shadows w-80 max-w-[500px] h-60 rounded-lg flex-col cursor-pointer
      lg:flex-grow
      md:flex-grow
      xl:min-w-[500px]
      "
      >
        {/* img container */}
        <div className="flex">
          <div className="flex justify-center items-center h-32 w-32 bg-sky-100 m-2 p-2 rounded-lg">
            photo
          </div>
          <div className="flex flex-col w-2/3">
            <h4 className=" font-bold uppercase my-4 ">Titre</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum leo risus, a ultrices ligula pretium ut.
            </p>
          </div>
        </div>
        <div className="text-4xl text-slate-800 w-full text-right px-4">XXXX,XX <span className="font-bold">€</span> </div>
        <div className="mt-2 mx-2 bg-gray-600 rounded-full">

          {/* Progress bar */}
          <div className="w-8/12 mt-2 bg-rose-300 text-center rounded-full"><div className="text-white text-sm inline-block bg-slate-700 px-2 rounded-full">75%</div></div>
        </div>
      </div>
    </>
  );
}

export default PotsCards;
