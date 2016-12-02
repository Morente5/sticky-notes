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
		this.stickyNotes.push(new StickyNote());
	}
}
