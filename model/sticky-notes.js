class Board {
	constructor() {
		this.stickyNotes = [];
	}

	addStickyNote(title, content, date) {
		var note = new StickyNote(this.stickyNotes.length, title, content, date);
		this.stickyNotes.push(note);
		return note;
	}
}

class StickyNote {
	constructor(position, title='', content='', date=new Date()) {
		this.position = position;
		this.title = title;
		this.content = content;
		this.date = date;
	}
}
