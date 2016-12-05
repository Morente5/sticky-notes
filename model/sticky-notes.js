class StickyNote {
	constructor() {
		this.date = new Date();
		this.title = '';
		this.content = '';
	}
}


class Board {
	constructor() {
		this.stickyNotes = [];
	}

	addStickyNote() {
		var note = new StickyNote();
		this.stickyNotes.push(note);
		return note;
	}
}
