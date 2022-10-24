import { UseFormRegister, FieldValues } from "react-hook-form";

export const ButtonColor = {
  red: "bg-red-400 peer-checked:bg-red-900",
  green: "bg-green-400 peer-checked:bg-green-900",
  blue: "bg-blue-400 peer-checked:bg-blue-900",
  yellow: "bg-yellow-400 peer-checked:bg-yellow-900",
  gray: "bg-gray-400 peer-checked:bg-gray-900",
};

type ButtonColorType = typeof ButtonColor[keyof typeof ButtonColor];

export type ButtonType = {
  text: string;
  color?: ButtonColorType;
};

type ButtonsType = {
  buttons: ButtonType[];
  inputName: string;
  register: UseFormRegister<FieldValues>;
};

export const randomButtonColor = () => {
  const colorList = Object.values(ButtonColor);
  return colorList[Math.floor(Math.random() * colorList.length)];
}

const Buttons = ({buttons, inputName, register}: ButtonsType) => {
  return (
    <div className="flex">
      {buttons.map((button, index) => 
        <div key={index}>
          <input
            {...register(inputName, {required: true})}
            type="radio"
            id={button.text}
            value={button.text}
            name={inputName}
            className="hidden peer"
            />
          <label
            htmlFor={button.text}
            // className={`btn rounded-full mr-1 mb-1`}
            className={`btn ${button.color ?? randomButtonColor()} rounded-full mr-1 mb-1`}
          >
            {button.text}
          </label>
        </div>
      )}
    </div>
  );
};

export default Buttons;