import { useUserCardContext } from "../UserCardContext";
import RankingDot from "./RankingDot";
import UserPicture from "./UserPicture";

const UserCardHeader = () => {
  const { user } = useUserCardContext();

  return (
    <div className="flex flex-col items-center pb-6 pt-10">
      <UserPicture />
      <div className="-mt-5 z-10 mb-2">
        <RankingDot />
      </div>
      <div className="text-primary-pure font-bold text-3xl font-serif leading-none">
        {user.name}
      </div>
      <div className="text-primary-pure text-xl leading-none mt-1 font-medium">
        {user.role}
      </div>
    </div>
  );
};

export default UserCardHeader;
