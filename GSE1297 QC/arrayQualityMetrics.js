// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false ];
var arrayMetadata    = [ [ "1", "GSM21215", "Control  976", "group: Control", "nft: 8", "braak: 3", "age: 85", "mmse: 30", "Sex: M", "pmi: 2", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "85", "3", "Control", "30", "8", "2", "M", "CTRL" ], [ "2", "GSM21217", "Control 1003", "group: Control", "nft: 7", "braak: 2", "age: 80", "mmse: 26", "Sex: M", "pmi: 2.25", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "80", "2", "Control", "26", "7", "2.25", "M", "CTRL" ], [ "3", "GSM21218", "Control 1008", "group: Control", "nft: 2", "braak: 2", "age: 92", "mmse: 26", "Sex: F", "pmi: 2.45", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "92", "2", "Control", "26", "2", "2.45", "F", "CTRL" ], [ "4", "GSM21219", "Control 1012", "group: Control", "nft: 0.4", "braak: 4", "age: 80", "mmse: 26", "Sex: M", "pmi: 3", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "80", "4", "Control", "26", "0.4", "3", "M", "CTRL" ], [ "5", "GSM21220", "Control 1015", "group: Control", "nft: 0.4", "braak: 1", "age: 75", "mmse: 29", "Sex: M", "pmi: 3.35", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "75", "1", "Control", "29", "0.4", "3.35", "M", "CTRL" ], [ "6", "GSM21221", "Control 1018", "group: Control", "nft: 4.8", "braak: 3", "age: 97", "mmse: 29", "Sex: F", "pmi: 2.75", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "97", "3", "Control", "29", "4.8", "2.75", "F", "CTRL" ], [ "7", "GSM21226", "Control 1030", "group: Control", "nft: 0", "braak: 1", "age: 95", "mmse: 28", "Sex: M", "pmi: 1.75", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "95", "1", "Control", "28", "0", "1.75", "M", "CTRL" ], [ "8", "GSM21231", "Control 1039", "group: Control", "nft: 0.3", "braak: 1", "age: 77", "mmse: 28", "Sex: M", "pmi: 3.5", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "77", "1", "Control", "28", "0.3", "3.5", "M", "CTRL" ], [ "9", "GSM21232", "Control 1040", "group: Control", "nft: 1.3", "braak: 2", "age: 87", "mmse: 27", "Sex: M", "pmi: 2", "Control (MMSE>25); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "87", "2", "Control", "27", "1.3", "2", "M", "CTRL" ], [ "10", "GSM21203", "Severe 701", "group: Severe", "nft: 21", "braak: 6", "age: 85", "mmse: 4", "Sex: M", "pmi: 2.5", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "85", "6", "Severe", "4", "21", "2.5", "M", "AD" ], [ "11", "GSM21206", "Severe 723", "group: Severe", "nft: 58.2", "braak: 6", "age: 65", "mmse: 5", "Sex: F", "pmi: 3.05", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "65", "6", "Severe", "5", "58.2", "3.05", "F", "AD" ], [ "12", "GSM21207", "Severe 807", "group: Severe", "nft: 62.5", "braak: 6", "age: 93", "mmse: 11", "Sex: M", "pmi: 3.08", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "93", "6", "Severe", "11", "62.5", "3.08", "M", "AD" ], [ "13", "GSM21208", "Severe 819", "group: Severe", "nft: 18.5", "braak: 6", "age: 79", "mmse: 11", "Sex: F", "pmi: 3", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "79", "6", "Severe", "11", "18.5", "3", "F", "AD" ], [ "14", "GSM21212", "Severe 867", "group: Severe", "nft: 22.6", "braak: 5", "age: 94", "mmse: 2", "Sex: F", "pmi: 2.72", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "94", "5", "Severe", "2", "22.6", "2.72", "F", "AD" ], [ "15", "GSM21213", "Severe 872", "group: Severe", "nft: 24.6", "braak: 6", "age: 79", "mmse: 2", "Sex: F", "pmi: 3.67", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "79", "6", "Severe", "2", "24.6", "3.67", "F", "AD" ], [ "16", "GSM21229", "Severe 1036", "group: Severe", "nft: 21.5", "braak: 6", "age: 93", "mmse: 7", "Sex: F", "pmi: 3", "Severe AD (MMSE<14); correlation of the expression of each gene was tested with MiniMental Status Examination (MMSE) and neurofibrillary tangle (NFT) scores", "93", "6", "Severe", "7", "21.5", "3", "F", "AD" ] ];
var svgObjectNames   = [ "pca", "dens" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
