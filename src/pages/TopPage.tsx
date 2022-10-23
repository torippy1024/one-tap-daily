import { Link } from "react-router-dom";
import Buttons, { ButtonColor, ButtonType } from "../components/Buttons";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useForm } from "react-hook-form";

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

  const actionButtons: ButtonType[] = [
    {text: "START", color: ButtonColor.red},
    {text: "END", color: ButtonColor.blue},
  ];

  const {register, handleSubmit} = useForm();

  return  (
      <div data-theme="light" className="flex flex-col min-h-screen">
      <Header />
      <div className="grow container mx-auto my-4 px-4">
        <div className="mb-4">
          <div className="text-xl font-bold border-b mb-2">
            予定
          </div>
          <Buttons buttons={scheduleButtons} inputName="schedule" />
        </div>

        <div className="mb-4">
          <div className="text-xl font-bold border-b mb-2">
            アクション
          </div>
          <Buttons buttons={actionButtons} inputName="action" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;