var args = arguments[0] || {};

//alert("Title:"+args.title);

$.title.setText('Title: ' + args.title);
$.email.setText('Email: ' + args.email);
$.pass.setText('Password: ' + args.pass);
$.site.setText('URL: ' + args.url);
$.account.setText('Account: ' + args.account);
$.pin.setText('Pin: ' + args.pin);

function close() {
	$.detailWin.close();
	$.detailWin = null;
}

function update() {
	$.detailWin.close();
	$.detailWin = null;
	Alloy.createController('update', args).getView().open();

}

function deleteBtn() {
	var db = require('db');
	var dialog = Ti.UI.createAlertDialog({
		buttonNames : ['Confirm', 'Cancel'],
		message : 'Would you like to delete the file?',
		title : 'Delete'
	});
	dialog.addEventListener('click', function(e) {
		if (e.index === 0) {
			db.deletinfo(args.id);
			Ti.App.fireEvent('refresh');
			$.detailWin.close();
			$.detailWin = null;
		}

	});
	dialog.show();

}

