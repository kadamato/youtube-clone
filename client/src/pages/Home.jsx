import useHome from "./useHome";

export default function Home() {
  const {
    displayCategories,
    displayVideos,
    displayLoadingCategory,
    displayError,
  } = useHome();

  displayError();
  return (
    <div className="home">
      <div className="home__categories">{displayCategories()}</div>
      <div className="wall-row-category"></div>
      <div className="home__videos">{displayVideos()}</div>
      {displayLoadingCategory()}
    </div>
  );
}
