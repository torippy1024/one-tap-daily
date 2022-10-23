import { Link } from "react-router-dom";
import Buttons, { ButtonColor, ButtonType } from "../components/Buttons";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TopPage = () => {
  const scheduleList = [
    "就寝",
    "研究室",
    "アルバイト",
    "お出かけ",
  ];

  const scheduleButtons: ButtonType[] = scheduleList.map((schedule) => {
    return {text: schedule};
  });

  const actionList = [
    "START",
    "END",
  ];

  const actionButtons: ButtonType[] = actionList.map((action) => {
    return {text: action};
  });

  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        <div className="mb-4">
          <div className="text-xl font-bold border-b mb-2">
            予定
          </div>
          <Buttons buttons={scheduleButtons} />
        </div>

        <div className="mb-4">
          <div className="text-xl font-bold border-b mb-2">
            アクション
          </div>
          <Buttons buttons={actionButtons} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;