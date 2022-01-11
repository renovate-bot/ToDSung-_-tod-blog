const Skill = ({ icon, name }) => (
  <div className="skill">
    <div className="title">
      {/* <i className=""="title__icon"
        :class="[ icon.source, icon.name ]"
        :style="{
          'color': icon.color
        }"
      /> */}
      <h3 className="title__name">{name}</h3>
    </div>
  </div>
);

export default Skill;
