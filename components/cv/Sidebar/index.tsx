import Skill from "../Skill";

const Sidebar = ({ skills = [] }) => {
  const aboutContents = [
    "我是 Tod，是講究務實的人，總是渴望把一切事情的基本做好，追求寫出可複用，少技術債的程式碼。",
    "正嘗試著分享我的歷程，期待精進自己的同時也能幫到他人，希望自己能夠從小處開始分享，將自己的小小能量散發出去！",
  ];

  return (
    <aside
      id="cv-sidebar"
      className="cv-sidebar flex flex-col items-center px-8 text-white bg-teal-800"
    >
      <span className="cv-sidebar__title mt-8 text-3xl">宋明謙</span>
      <span>Tod Sung</span>
      <span>前端工程師</span>
      <ul className="details flex items-start flex-col mt-8 w-full">
        <li>0975-871-937</li>
        <li>wlunareve@gmail.com</li>
        <li>中正大學 資訊管理學系</li>
      </ul>
      <div className="about flex flex-col gap-4 my-4">
        {aboutContents.map((about, index) => (
          <p key={index} className="about__item text-left">
            {about}
          </p>
        ))}
      </div>
      <div className="skills flex flex-col self-start">
        <span className="skills__title text-3xl">skills</span>
        <div className="skills__content">
          {skills.map(({ name, icon }) => (
            <Skill
              key={name}
              name={name}
              icon={icon}
              className="skills__item"
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
