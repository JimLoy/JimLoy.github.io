import me from "../assets/me.jpg";

export default function About() {
  return (
    <div className="about_me">
      <h1 className="title">ABOUT ME</h1>
      <img src={me} alt="Me" className="me-img"/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero eligendi magnam doloremque officia dolorem quasi ipsa enim, 
      voluptatibus reiciendis ab tempore animi molestias, voluptas aliquid natus, at quisquam eos?</p>
    </div>
  );
}
