import { Link } from "react-router-dom";
import Buttons, { ButtonColor, ButtonType } from "../components/Buttons";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const buttons: ButtonType[] = [
    {text: "hoge"},
    {text: "huga"},
  ];

  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        <Buttons buttons={buttons} />
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;