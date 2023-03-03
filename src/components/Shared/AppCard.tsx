import { PropsWithChildren } from "react";

const AppCard = ({ children }: PropsWithChildren) => {
  return <div className="bg-neutral-50 rounded-xl shadow-1">{children}</div>;
};

export default AppCard;
