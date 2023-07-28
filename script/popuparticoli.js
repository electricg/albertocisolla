
function popWin1( url, name, width, height, scroller ) {
	var outStr = 'height=' +height + ',width=' + width;
	if (scroller != 'true') {
		outStr = outStr + 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=no, width=400,height=400';
	}
	else {
		outStr = outStr + 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=yes,resizable=no, width=400,height=400';
	}
	window.open(url, name, outStr);
}

