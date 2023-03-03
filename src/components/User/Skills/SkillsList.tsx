import { SkillSection } from "../../../types";
import UserSkill from "../Skills/UserSkill";

interface SkillsListProps {
  skillSection: SkillSection;
}

const SkillsList = ({ skillSection }: SkillsListProps) => {
  return (
    <>
      {skillSection.skills.map((skill) => (
        <UserSkill
          key={skill.name}
          skill={skill.name}
          matchPercentage={skill.matchingPercentage}
        />
      ))}
    </>
  );
};

export default SkillsList;
