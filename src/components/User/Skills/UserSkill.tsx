interface UserSkillProps {
  skill: string;
  matchPercentage: number;
}

const UserSkill = ({ skill, matchPercentage }: UserSkillProps) => {
  return (
    <div className="text-primary-pure">
      <div className="flex justify-between text-sm font-medium mb-1">
        <div className="font-medium">{skill}</div>
        <div className="font-semibold">{matchPercentage}%</div>
      </div>
      <div className="relative w-full h-2 rounded overflow-hidden">
        <div className="h-full w-full bg-primary-light" />
        <div
          className="absolute inset-0 h-full bg-department-design-pure rounded-r"
          style={{ width: `${matchPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default UserSkill;
