import React from "react";

interface SafeStyleProps {
  children: string;
}

export const SafeStyle: React.FC<SafeStyleProps> = ({ children }) => {
  return <style dangerouslySetInnerHTML={{ __html: children }} />;
};
