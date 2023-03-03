import SkillsList from "./SkillsList";
import SkillsSection from "./SkillsSection";
import { useUserCardContext } from "../UserCardContext";

const FIRST_ITEM_INDEX = 0;

const SkillsSectionsList = () => {
  const { user } = useUserCardContext();

  return (
    <>
      {user.skillsSections.map((skillSection, index) => (
        <SkillsSection
          key={skillSection.type}
          title={skillSection.type}
          trailing={index === FIRST_ITEM_INDEX ? "Match %" : undefined}
        >
          <SkillsList skillSection={skillSection} />
        </SkillsSection>
      ))}
    </>
  );
};

export default SkillsSectionsList;
