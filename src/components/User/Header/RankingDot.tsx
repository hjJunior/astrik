import { useUserCardContext } from "../UserCardContext";

const RankingDot = () => {
  const { user } = useUserCardContext();

  return (
    <div className="border-[6px] rounded-full border-white bg-white">
      <div className="bg-gradient-radial grid place-items-center rounded-full w-10 h-10">
        <span className="text-neutral-50 font-bold font-serif leading-none h-7 text-[22px]">
          {user.matchingPercentage}
        </span>
      </div>
    </div>
  );
};

export default RankingDot;
