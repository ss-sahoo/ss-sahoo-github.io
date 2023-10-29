import linkdin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import github from "../assets/github-mark-white.svg"
import insta from "../assets/instagram.png"
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center items-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/shradha-shaswati-sahoo-182940202"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkdin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/ShradhaShaswati"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ss-sahoo"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="github-link"
          src={github}
          style={{ height: "35px", width: "35px" }}
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={insta} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
