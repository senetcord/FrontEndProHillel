const Main = () => {
  return (
    <div>
      <h1 className="text-5xl text-center">Main:</h1>
      <div className="flex gap-[50px] items-center flex-wrap-reverse m-5 justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aQnw4i-t4qA?si=AQBuJvNwjuNc3Y-g"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div>
          <p className="text-2xl text-center">
            A little webpage that i made to show SPA using <br />
            react-router-dom and theme-toggling using context :)
          </p>
          <p className="text-3xl text-center mt-5">
            Just switch between links in the navbar
          </p>
        </div>
      </div>
    </div>
  );
};
export default Main;
