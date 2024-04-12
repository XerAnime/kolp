import React from "react";

interface HeaderTextProps {
  text: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ text }) => {
  return (
    <h1 className="mt-8 md:mt-16 text-center text-2xl md:text-3xl lg:text-5xl font-semibold">
      {text}
    </h1>
  );
};

export default HeaderText;
