import me from "../assets/me.jpg";

export default function About() {
  return (
    <div className="about">
      <h1 className="about_title">ABOUT ME</h1>
      <div className="about_container">
        <img src={me} alt="Me" className="about_img"/>
        <p className="about_p" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero eligendi magnam doloremque officia dolorem quasi ipsa enim voluptatibus reiciendis ab tempore animi molestias, voluptas aliquid natus, at quisquam eos?</p>
      </div>
    </div>
  );
}                                                                                                                                                                                                                                              
