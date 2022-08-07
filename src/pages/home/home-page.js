import HomeHeader from "./components/header";
import HomeBanner from "./components/banner";
import LanguageTool from "./components/language-tool";
import HomeFooter from "./components/footer";
import "./style.css";

function HomePage() {
  return (
    <div id="all" className="container">
      <HomeHeader />
      <HomeBanner />
      <LanguageTool />
      <HomeFooter />
    </div>
  );
}

export default HomePage;
