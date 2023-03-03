import { PropsWithChildren } from "react";

interface SkillsSectionProps {
  title: string;
  trailing?: string;
}

const SkillsSection = ({
  title,
  trailing,
  children,
}: PropsWithChildren<SkillsSectionProps>) => {
  return (
    <div>
      <div className="flex justify-between mb-3 text-primary-pure">
        <div>{title}</div>
        {trailing && <div>{trailing}</div>}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default SkillsSection;
