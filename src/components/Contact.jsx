export default function Contact() {
	function handleOnSubmit(e) {
		e.preventDefault();
		const form = new FormData(e.target);
		const mailto = document.querySelector('#mailto');
		mailto.setAttribute(
			'href',
			`mailto:juanignaciomoldes1@gmail.com?subject=${form.get(
				'subject'
			)}&body=${form.get('message')}`
		);
		mailto.click();
	}

	return (
		<div className="contact">
			<h2 className="contact_title">Contact</h2>
			<form className="contact_form" onSubmit={handleOnSubmit}>
				<input
					className="contact_input"
					name="subject"
					type="text"
					placeholder="Subject"
					autoComplete="off"
				/>
				<textarea
					className="contact_textarea"
					name="message"
					cols="30"
					rows="10"
					placeholder="Message body"
					autoComplete="off"
				></textarea>
				<button className="contact_button">Submit</button>
			</form>
			<a href="mailto:juanignaciomoldes1@gmail.com" id="mailto">
				_
			</a>
		</div>
	);
}
