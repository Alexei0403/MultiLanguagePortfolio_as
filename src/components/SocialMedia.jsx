const SocialMedia = ({ SocialIcon, SocialLink = '#' }) => {

    return (

        <li className="social-media-link">

            <a href={SocialLink} target="_blank">

                <span className="icon is-medium">
                    {SocialIcon}
                </span>

            </a>

        </li>

    );

}

export default SocialMedia;