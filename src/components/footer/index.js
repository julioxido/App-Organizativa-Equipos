import React from "react";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
	return (
		<footer
			className="footer"
			style={{ backgroundImage: "url(/img/footer.png)" }}
		>
			<div className="redes">
				<a
					href="https://www.linkedin.com/in/julio-cesar-realza-rojas-/"
					className="icon"
				>
					{/* <img src="/img/linkedin.png" alt="linkedin" /> */}
					<FaLinkedin />
				</a>
				<a href="https://github.com/julioxido/julioxido">
					<FaGithubAlt className="icon" />
					{/* <img src="/img/githubs.png" alt="github" /> */}
				</a>
				{/* <a href="jkhkjhjk">
					<img src="" alt="" />
				</a> */}
			</div>
			{/* <img src="/img/aluras.png" alt="alura" /> */}
			<strong>Desarrollado por Julio Realza</strong>
		</footer>
	);
};

export default Footer;
