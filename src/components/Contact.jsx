export default function Contact(){
  return(
    <form>
      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="Email"/>
      <textarea name="message" cols="30" rows="10"></textarea>
      <button>Submit</button>
    </form>
  )
}