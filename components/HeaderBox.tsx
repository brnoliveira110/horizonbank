export const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && <span className="text-bankGradient"></span>}
      </h1>
      HeaderBox
    </div>
  );
};
