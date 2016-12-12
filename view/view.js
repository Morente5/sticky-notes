class View {
	constructor(controller) {
		this.ctrl = controller;
		this.addNoteButton = document.getElementById('add-button');
		this.container = document.getElementById('notes');
	}
}

class ViewNote {
	constructor(parent, title='', content='', date=new Date()) {
		this.parent = parent;
		
		this.buildNote();
		// this.note
		// this.titleField
		// this.contentField
		// this.dateField
		// this.timeField
		// this.moveButton
		// this.deleteButton

		this.title = title;
		this.content = content;
		this.date = date;
	}

	buildNote() {
		this.note = document.createElement('div');
		this.note.className = 'mdl-card mdl-shadow--2dp mdl-color--primary note';
			var div1 = document.createElement('div');
			div1.className = 'mdl-card__title';
				var div2 = document.createElement('div');
				div2.className = 'mdl-layout-spacer';
					this.moveButton = document.createElement('button');
					this.moveButton.id = 'move-button';
					this.moveButton.className = 'mdl-button mdl-js-button mdl-button--icon';
						var i1 = document.createElement('i');
						i1.className = 'material-icons';
						i1.textContent = 'open_with';
						this.moveButton.appendChild(i1);
					div2.appendChild(this.moveButton);
				div1.appendChild(div2);
				this.titleField = document.createElement('input');
				this.titleField.type = 'text';
				this.titleField.placeholder = 'Set a title!';
				this.titleField.className = 'mdl-card__title-text mdl-color--primary title-text';
				div1.appendChild(this.titleField);
				var div3 = document.createElement('div');
				div3.className = 'mdl-layout-spacer';
					this.deleteButton = document.createElement('button');
					this.deleteButton.id = 'delete-button';
					this.deleteButton.className = 'mdl-button mdl-js-button mdl-button--icon';
						var i2 = document.createElement('i');
						i2.className = 'material-icons';
						i2.textContent = 'delete';
						this.deleteButton.appendChild(i2);
					div3.appendChild(this.deleteButton);
				div1.appendChild(div3);
			this.note.appendChild(div1);
			this.contentField = document.createElement('textarea');
			this.contentField.placeholder = 'Write your note!';
			this.contentField.className = 'mdl-card__supporting-text content-text';
			this.note.appendChild(this.contentField);
			this.dateField = document.createElement('input');
			this.dateField.type = 'date';
			this.dateField.className = 'date-text';
			this.dateField.disabled = true;
			this.note.appendChild(this.dateField);
			this.timeField = document.createElement('input');
			this.timeField.type = 'time';
			this.timeField.className = 'time-text';
			this.timeField.disabled = true;
			this.note.appendChild(this.timeField);
		this.parent.appendChild(this.note);
	}

	set title(title) {
		this.titleField.value = title;
	}

	set content(content) {
		this.contentField.textContent = content;
	}

	set date(date) {
		this.dateField.value = date.toISOString().slice(0, 10);
		this.timeField.value = date.toISOString().slice(11, 16);
	}

	get title() {
		return this.titleField.value;
	}

	get content() {
		return this.contentField.value;
	}
}