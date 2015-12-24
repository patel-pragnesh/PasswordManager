var args = arguments[0] || {};
//alert(args.title);

var ad = require('admob');

var addview;
if (Ti.Platform.osname == 'android') {
	addview = ad.addMob_android();
} else {
	addview = ad.addMob_iOS();
}

$.adView.add(addview);

$.txt_title.setValue(args.title);
$.txt_email.setValue(args.email);
$.txt_pass.setValue(args.pass);
$.txt_url.setValue(args.url);
$.txt_account.setValue(args.account);
$.txt_pin.setValue(args.pin);

function back() {
	$.updateWin.close({
		transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT
	});
}

function update() {
	var db = require('db');

	db.updateinfo($.txt_title.getValue(), $.txt_email.getValue(), $.txt_pass.getValue(), $.txt_account.getValue(), $.txt_pin.getValue(), $.txt_url.getValue(), args.id);
	Ti.App.fireEvent('update');
	$.updateWin.close();
	$.updateWin = null;
}
