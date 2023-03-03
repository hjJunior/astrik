import AppCard from "../Shared/AppCard";
import UserCardHeader from "./Header/UserCardHeader";
import SkillsSectionsList from "./Skills/SkillsSectionsList";
import { withUserCardContext } from "./UserCardContext";

const UserCard = () => {
  return (
    <AppCard>
      <div className="px-10 pb-10">
        <UserCardHeader />
        <div className="space-y-7">
          <SkillsSectionsList />
        </div>
      </div>
    </AppCard>
  );
};

export default withUserCardContext(UserCard);
