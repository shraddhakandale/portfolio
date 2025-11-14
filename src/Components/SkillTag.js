const SkillTag = ({ skill }) => {
  return (
    <div className="skills-container text-lg">
      <div className="py-2 px-4 max-w-fit rounded-md bg-[#292929c0] text-center">
        <span>{skill}</span>
      </div>
    </div>
  );
};

export default SkillTag;
