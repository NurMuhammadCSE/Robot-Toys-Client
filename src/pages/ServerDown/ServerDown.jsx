/* eslint-disable react/no-unknown-property */
const ServerDown = () => {
  return (
    <div>
      <div>
        <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
              Server is Down
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
              We apologize for the inconvenience, but it seems that our server
              is currently down
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerDown;
