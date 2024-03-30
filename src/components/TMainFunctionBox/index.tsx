import { TMainFunctionBoxProps } from "@/types";

const TMainFunctionBox = (props: TMainFunctionBoxProps) => {
  const { iconUrl, title, description, ...htmlProps } = props;
  return (
    <div {...htmlProps}>
      <div className="flex justify-center h-20">
        <img src={iconUrl} alt="Risk Investigation" />
      </div>
      <span className="font-semibold text-xl text-center">{title}</span>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default TMainFunctionBox;
