function afficheVignette(cheminVignette,cheminMaxi)
	{
	document.write('<A HREF="javascript:afficheMaxi(\''+cheminMaxi+'\')"><IMG SRC="'+cheminVignette+'" HSPACE=0 VSPACE=0 BORDER=0 ALT="Clicca qui per ingrandire la foto"></A>');
	}
function afficheMaxi(chemin)
	{
	i1 = new Image;
	i1.src = chemin;
	html = '<HTML>\n<HEAD>\n<TITLE>Alberto Cisolla | Foto</TITLE>\n</HEAD>\n<BODY LEFTMARGIN=0 MARGINWIDTH=0 TOPMARGIN=0 MARGINHEIGHT=0 bgcolor="Black">\n<center><IMG SRC="'+chemin+'" BORDER=0 NAME=imageTest onLoad="window.resizeTo(document.imageTest.width+14,document.imageTest.height+30)"></CENTER>\n</BODY>\n</HTML>';
	popupImage = window.open('','_blank','toolbar=0,location=0,directories=0,menuBar=0,scrollbars=0,resizable=0');
	popupImage.document.open();
	popupImage.document.write(html);
	popupImage.document.close()
	};