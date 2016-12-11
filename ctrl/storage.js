class StorageCtrl {
	constructor(ctrl, model) {
		this.ctrl = ctrl;
		this.model = model;
		this.loadEvent();

	}

	materialize() {
		for(var i = 0; i < localStorage.length; i++){
		   var obj = JSON.parse(localStorage[localStorage.key(i)]);
		   this.ctrl.noteCtrls.push(new StickyNoteCtrl(this.ctrl, obj.title, obj.content, new Date(obj.date)));		}
	}

	serialize(i) {
		return JSON.stringify(this.model.stickyNotes[i]);
	}

	loadEvent() {
		window.addEventListener('storage', storage => {
			var obj = JSON.parse(key.newValue);
			if (!!this.model.stickyNotes[storage.key]) {
				this.model.stickyNotes[storage.key].title = obj.title;
				this.model.stickyNotes[storage.key].content = obj.content;
				this.model.stickyNotes[storage.key].date = new Date(obj.date);

				this.ctrl.noteCtrls[storage.key].viewNote.title = obj.title;
				this.ctrl.noteCtrls[storage.key].viewNote.content = obj.content;
				this.ctrl.noteCtrls[storage.key].viewNote.date = new Date(obj.date);
			}
			else {
				this.ctrl.addStickyNote(this.ctrl, obj.title, obj.content, obj.date);
			}
		}, false);
	}

	save(a, b='') {
		if (typeof(Storage) !== "undefined") {
		    // Store
		    if (!b) {
		    	localStorage[a] = this.serialize(a);
		    }
		    else {
		    	for (var i = a; i < b; i++) {
		    		localStorage[i] = this.serialize(i);
		    	}
		    }
		}
	}

	delete(i) {
		for (var j = i; j <= localStorage.length; j++)
		localStorage.removeItem(j);
	}
}
