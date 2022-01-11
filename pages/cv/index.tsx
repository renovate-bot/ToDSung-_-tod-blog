import Content from "../../components/cv/Content";
import Sidebar from "../../components/cv/Sidebar";

const cv = () => (
  <div
    id="cv"
    className="cv grid grid-cols-[20rem_1fr] max-w-[1280px] h-[calc(100vh-3.25rem)] overflow-hidden"
  >
    <Sidebar />
    <Content />
  </div>
);

export default cv;
