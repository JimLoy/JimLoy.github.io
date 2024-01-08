export default function Contact() {
	/*function copy(){
		navigator.clipboard.writeText("juanignaciomoldes1@gmail.com")
		alert("Email copied to clipboard")
		//<button className="contact_button" onClick={copy}>Copy my email address</button>
	}*/ 

	return (
		<div className="contact">
			<h2 className="contact_title">Contact</h2>
			<form className="contact_form" action="mailto:juanignaciomoldes1@gmail.com" method="get" enctype="text/plain">
				<input
					className="contact_input"
					name="subject"
					type="text"
					placeholder="Subject"
					autoComplete="off"
				/>
				<textarea
					className="contact_textarea"
					name="body"
					cols="30"
					rows="10"
					placeholder="Message body"
					autoComplete="off"
				></textarea>
				<button className="contact_button" type="submit" value="Send">Submit</button>
			</form>
		</div>
	);
}
