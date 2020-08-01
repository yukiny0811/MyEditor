
$("body").on("keydown", function(e){
  if(e.keyCode == 229 && e.key == "Enter"){
    return;
  }
  switch (e.key) {
    case "Enter":
      $(":focus").parent().after(textBlock);
      $(":focus").parent().next().children().focus();
      e.preventDefault();
      break;
    case "ArrowUp":
    
      let caretPos, sel, range;
      if(window.getSelection){
        sel = window.getSelection();
        if(sel.rangeCount){
          range = sel.getRangeAt(0);
          caretPos = range.endOffset;
        }
      }
    
      let sub = $(":focus")[0].childNodes[0].nodeValue;
      if(!(isCaretInTopRow($(":focus").width(), getTextWidth(sub.substr(0, caretPos-1))))){
        break;
      }
      
      if(window.getSelection){
        sel = window.getSelection();
        if(sel.rangeCount){
          range = sel.getRangeAt(0);
          caretPos = range.endOffset;
        }
      }
      $(":focus").parent().prev().children().focus();
      let elemStart = $(":focus")[0];
      let rangeObj = document.createRange();
      let selObj = window.getSelection();
      if(caretPos >= elemStart.childNodes[0].length){
        rangeObj.setStart(elemStart.childNodes[0], elemStart.childNodes[0].length);
      } else {
        rangeObj.setStart(elemStart.childNodes[0], caretPos);
      }
      selObj.removeAllRanges();
      selObj.addRange(rangeObj);
      e.preventDefault();
      break;
    default:
      break;
  }
});

function getTextWidth(text){
  $("#hiddenContainer").append('<div id="countSpan">' + text + '</div>');
  $("#countSpan").css("white-space", "no-wrap");
  let w = $("#countSpan").width();
  $("#countSpan").remove();
  return w;
}

function isCaretInTopRow(divWidth, textWidth){
  if(divWidth >= textWidth){
    return true;
  }
  return false;
}