var win1 = Titanium.UI.createWindow({
	backgroundImage: 'halftone-light-effects.jpg',
	
});

var win2 = Titanium.UI.createWindow({
	backgroundImage: 'halftone-light-effects.jpg'
});


var view1 = Titanium.UI.createView({
	top: '0%',
	height:'100%',
	width: '100%',
});

var label1 = Titanium.UI.createLabel({
	text:'Rick D. Daniels',
	font: {fontSize: 40},
	top: '15%',
	color:'black'	
});

var label2 = Titanium.UI.createLabel({
	text:'208-891-7965',
	font: {fontSize: 25},
	top: '65%',
	color:'black'
});

var label3 = Titanium.UI.createLabel({
	text:'dani6990@vandals.uidaho.edu',
	font: {fontSize: 20},
	top: '70%',
	color:'black'
});

var label4 = Titanium.UI.createLabel({
	text:'Personal Statement: Hardworking full-time student looking for summer employement to gain workforce experience.',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font: {fontSize: 20},
	top:'30%',
	left:'5%',
	color: 'black'
});

var image1 = Titanium.UI.createImageView({
	image:'cbe.png',
	top: '0%',
	height:'15%',
	width: '100%'
});

var button1 = Titanium.UI.createButton({
   title: 'More Information',
   top: '80%',
   width: '35%',
   height: '15%'
});
button1.addEventListener('click',function(e)
{
   win2.open();
});

var button2 = Titanium.UI.createButton({
   title: 'Contact Info',
   top: '0%',
   left:'0%',
   width: '35%',
   height: '15%',
});
button2.addEventListener('click',function(e)
{
   win2.close();
});

var label6 =Titanium.UI.createLabel({
	text:'I am a Junior at the University of Idaho looking majoring in marketing and information systems.  I am a hard worker and a real team player.  I am looking for for realword work experience with a thriving company.',
	font: {fontSize: 15},
	top: '40%',
	left: '10%',
	color: 'black'
	
});

var fb = require('facebook');
fb.appid = '1429285190700254';
fb.permissions = ['publish_stream']; // Permissions your app needs
fb.forceDialogAuth = true;
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged In');
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
});
fb.authorize();

win2.add(fb.createLoginButton({
    top :'10%',
    style : fb.BUTTON_STYLE_WIDE
}));

view1.add(label1);
view1.add(label2);
view1.add(label3);
view1.add(image1);
view1.add(label4);
win1.add(view1);
win1.add(button1);
win1.open();
win2.add(button2);
win2.add(label6);



