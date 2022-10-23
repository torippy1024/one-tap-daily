export const ButtonColor = {
  red: "bg-red-700",
  green: "bg-green-700",
  blue: "bg-blue-700",
  yellow: "bg-yellow-700",
  gray: "bg-gray-700",
};

type ButtonColorType = typeof ButtonColor[keyof typeof ButtonColor];

export type ButtonType = {
  text: string;
  color?: ButtonColorType;
};

type ButtonsType = {
  buttons: ButtonType[];
};

export const randomButtonColor = () => {
  const colorList = Object.values(ButtonColor);
  return colorList[Math.floor(Math.random() * colorList.length)];
}

const Buttons = ({buttons}: ButtonsType) => {
  return (
    <div>
      {buttons.map((button, index) => 
        <div
          className={`btn ${button.color ?? randomButtonColor()} rounded-full mr-1 mb-1`}
          key={index}
        >
          {button.text}
        </div>
      )}
    </div>
  );
};

export default Buttons;