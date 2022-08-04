import me from "../assets/me.jpg";

export default function About() {
  return (
    <div className="about">
      <h1 className="about_title">ABOUT ME</h1>
      <div className="about_container">
        <img src={me} alt="Me" className="about_img"/>
        <div className="about_p_container">
          <p className="about_p" >Nice to meet you!</p>
          <p className="about_p" >I dedicate my time to expanding my knowledge, learning and developing my skills and enhancing interpersonal relationships.</p>
          <p className="about_p" >I am a creative, organized and disciplined person, efficient when managing tasks and managing time.</p>
          <p className="about_p" >I learn in an agile and autonomous way. I easily adapt to changes that arise.</p>
        </div>
      </div>
    </div>
  );
}                                                                                                                                                                                                                                              
