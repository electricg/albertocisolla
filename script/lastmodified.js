	// last modified script by Bernhard Friedrich; should work in all browsers
	var a;
	a=new Date(document.lastModified);
	lm_year=a.getYear();lm_year=((lm_year<1000)?((lm_year<70)?2000:1900):0)+lm_year;
	lm_month=a.getMonth()+1;lm_month=((lm_month<10)?'0':'')+lm_month;
	lm_day=a.getDate();lm_day=((lm_day<10)?'0':'')+lm_day;
	monthName = new Array(12)
	monthName[0] = 'Gennaio'
	monthName[1] = 'Febbraio'
	monthName[2] = 'Marzo'
	monthName[3] = 'Aprile'
	monthName[4] = 'Maggio'
	monthName[5] = 'Giugno'
	monthName[6] = 'Luglio'
	monthName[7] = 'Agosto'
	monthName[8] = 'Settembre'
	monthName[9] = 'Ottobre'
	monthName[10] = 'Novembre'
	monthName[11] = 'Dicembre'
	document.write(" " + lm_day+' '+monthName[lm_month-1]+' '+lm_year);