const Skill = ({ SkillIcon, SkillTitle }) => {

    return (

        <div className="column is-2">

            <figure className="image skill-item">

                <img src={SkillIcon} alt={SkillTitle} />

            </figure>

        </div>

    );

}

export default Skill;