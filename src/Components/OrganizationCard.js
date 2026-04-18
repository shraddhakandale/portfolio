const OrganizationCard = ({ isCurrentOrg, orgLogo, orgName }) => {
  return (
    <div
      className={`flex items-center gap-4 rounded-md p-2 w-max ${isCurrentOrg ? "current-org bg-[#03514d]" : "previous-org bg-[#292929c0]"}`}
    >
      <div>
        <img src={orgLogo} className="w-12 h-12" />
      </div>
      <div>
        <span className="font-bold">{orgName}</span>
        <p className="font-thin text-xs">
          {isCurrentOrg ? "Currently working here" : "Previously worked here"}
        </p>
      </div>
    </div>
  );
};

export default OrganizationCard;
