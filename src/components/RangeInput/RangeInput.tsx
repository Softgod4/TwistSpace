import { FC } from "react";

interface RangeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  minValue: number;
  maxValue: number;
  StartValue: number;
  className: string;
  id?: string | undefined;
}

const RangeInput: FC<RangeInputProps> = ({
  maxValue,
  minValue,
  StartValue,
  className,
  id,
  ...props
}) => {
  return (
    <div className="relative mb-6 w-full">
      <input
        id={id ? id : "labels-range-input"}
        type="range"
        min={minValue}
        max={maxValue}
        // className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        className={className}
        disabled={false}
        {...props}
      />
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
        Min {minValue}
      </span>
      {/* <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        {averageLeftText}
      </span>
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
        {averageRightText}
      </span> */}
      <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
        Max {maxValue}
      </span>
    </div>
  );
};

export default RangeInput;
