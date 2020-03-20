function generatees() {
    event.preventDefault();
    document.getElementById("fillName").innerHTML = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
    document.getElementById("fillPosition").innerHTML = document.getElementById("position").value;
    document.getElementById("fillNumber").innerHTML = document.getElementById("number").value;
    document.getElementById("fillLinkedin").href = document.getElementById("linkedinURL").value;
    document.getElementById("fillLinkedin").innerHTML = document.getElementById("linkedinUsername").value;
}

function copyes() {

    let btn = $("#copybtn");

    var originalText = btn.attr('data-original-title');

    let sel, range;
    let el = document.getElementById("selectAll"); //get element id
    if (window.getSelection && document.createRange) { //Browser compatibility
        sel = window.getSelection();
        if (sel.toString() == '') { //no text selection
            range = document.createRange(); //range object
            range.selectNodeContents(el); //sets Range
            sel.removeAllRanges(); //remove all ranges from selection
            sel.addRange(range);//add Range to a Selection.
        }
    } else if (document.selection) { //older ie
        sel = document.selection.createRange();
        if (sel.text == '') { //no text selection
            range = document.body.createTextRange();//Creates TextRange object
            range.moveToElementText(el);//sets Range
            range.select(); //make selection.
        }
    }
    let successful = document.execCommand('copy');
    let msg = successful ? "Copied!" : "Didn't work :(";

    // set the tooltip to "copied" and re-draw it
    $("#copybtn").attr("data-original-title", msg).tooltip("show");

    // replace previous tooltip text
    btn.attr('data-original-title', originalText);
}
