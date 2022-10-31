import React, { FC } from "react";

export interface Prices2Props {
  className?: string;
  labelTextClassName?: string;
}

const Prices2: FC<Prices2Props> = ({
  className = "",
  labelTextClassName = "bg-white",
}) => {
  return (
    <div className={`${className}`}>
      <span
        className={`block text-xs text-neutral-500 dark:text-neutral-400 ${labelTextClassName}`}
      >
        {Math.random() > 0.5 ? "Price" : "Current Bid"}
      </span>
      <span className="block text-xl font-semibold text-green-500 ">
        1.000 ETH
      </span>
    </div>
  );
};

export default Prices2;
