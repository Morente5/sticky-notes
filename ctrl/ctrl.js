class MainCtrl {
	constructor() {
		this.model = new Board();
		this.view = new View();

		this.noteCtrls = [];

		this.bindEvents();
		this.storageCtrl.load();

	}

	bindEvents() {
		this.view.addNoteButton.addEventListener('click', () => {
			this.addStickyNote(this);
		});
	}

	addStickyNote(mainCtrl, title='', content='', date=new Date()) {
		this.noteCtrls.push(new StickyNoteCtrl(mainCtrl, title, content, date));
	}
	
}


class StickyNoteCtrl {
	constructor(mainCtrl, title='', content='', date=new Date()) {
		this.ctrl = mainCtrl;
		this.stickyNote = this.ctrl.model.addStickyNote(title, content, date);
		this.viewNote = new ViewNote(this.ctrl.view.container, title, content, date);
		this.bindEvents();
	}

	bindEvents() {
		this.viewNote.deleteButton.addEventListener('click', () => {
			this.delete();
		});

		this.viewNote.titleField.addEventListener('keyup', () => {
			this.stickyNote.title = this.viewNote.title;
		});

		this.viewNote.contentField.addEventListener('keyup', () => {
			this.stickyNote.content = this.viewNote.content;
		});

	}

	delete() {
		var i = this.stickyNote.position;
		this.ctrl.model.stickyNotes.splice(i, 1);
		this.ctrl.noteCtrls.splice(i, 1);
		this.viewNote.parent.removeChild(this.viewNote.note);
	}

}
