import { useUserCardContext } from "../UserCardContext";

const UserPicture = () => {
  const { user } = useUserCardContext();

  return (
    <div className="relative w-32 h-32 rounded-full overflow-hidden">
      <div className="absolute bg-gradient-radial w-full h-full" />
      <div className="absolute top-1/2 left-1/2 bg-neutral-50 w-[6.3rem] h-[6.3rem] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div
        style={{ backgroundImage: `url(${user.imageUrl})` }}
        className="absolute z-10 h-full w-full bg-cover bg-center"
      />
    </div>
  );
};

export default UserPicture;
