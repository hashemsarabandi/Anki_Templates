function widthChange(e){e.matches?circlePositionerTitle.style.display="none":circlePositionerTitle.style.display="block"}function widthChange(e){var t=document.querySelector(".unit_table");e.matches?(header.style.width="90%",t.style.display="none"):mq.matches?(header.style.width="80%",t.style.display=null):header.style.width="70%"}function hideHeader(){header.style.maxHeight="0",header.style.maxWidth="910px",mq.matches?(circlePositionerTitle.style.display="none",header.style.width="80%"):(circlePositionerTitle.style.display="block",header.style.width="70%"),unitTableDiv.style.maxHeight="0",unitTableDiv.style.opacity="0",mainTable.style.margin=null,mainTable.style.width=null,mainTable.style.borderRadius=null,overlayTitleM.style.backgroundColor="#9c061b",overlayTitleL.style.backgroundColor="transparent",arrowLine.style.opacity="1",textP_Title.style.color="bisque"}function showAppendix(e,t,l,o,i,n){function a(){function a(e){window.innerWidth<769&&buttonsClass.insertBefore(e,buttonsClass.firstChild)}function r(e,t){window.innerWidth<769&&buttonsClass.insertBefore(e,t)}function s(e){window.innerWidth<769&&buttonsClass.appendChild(e)}function d(){window.innerWidth<769&&(buttonsFirst[0].style.paddingBottom="0")}function y(){window.innerWidth<769&&(buttonsFirst[0].style.paddingBottom="2em")}var c=function(e){for(var t=0;t<appendixes.length;t++)appendixes[t].style.maxHeight="0",appendixes[t].style.webkitTransform="scale(0.5)",appendixes[t].style.transform="scale(0.5)",e.style.maxHeight="100%",e.style.webkitTransform="scale(1)"},u=function(e,t,l){for(var o=0;o<overlay.length;o++)overlay[o].style.backgroundColor=null,e.style.backgroundColor="#D32F2F";for(var i=0;i<mainCircle.length;i++)mainCircle[i].style.backgroundColor=null,t.style.backgroundColor="white";for(var n=0;n<p_AppButton.length;n++)p_AppButton[n].style.color=null,l.style.color="white"},m=e.style.maxHeight=Number(!0);m>0&&"scale(1)"===e.style.webkitTransform?(e.style.maxHeight="0",e.style.webkitTransform="scale(0.5)",header.style.maxWidth="910px",mq.matches?(circlePositionerTitle.style.display="none",header.style.width="80%"):(circlePositionerTitle.style.display="block",header.style.width="70%"),widthChange(mqNarrow),buttonAllClose.style.display="none",bodyCard.style.position=null,arrowLine.style.opacity="1",d(),buttonsColorDefault(),window.innerWidth>768&&(circlePositionerTitle.style.display="block"),r(t,l),t===buttons[6]&&s(t)):(e.style.maxHeight="100%",a(t,l),e.style.webkitTransform="scale(1)",header.style.maxWidth="100%",header.style.width="100%",bodyCard.style.position="fixed",unitTableDiv.style.maxHeight="0",unitTableDiv.style.opacity="0",c(e),u(o,i,n),o.style.backgroundColor="#D32F2F",i.style.backgroundColor="white",n.style.color="white",buttonAllClose.style.display="inline-block",y(),circlePositionerTitle.style.display="none",arrowLine.style.opacity="0"),buttonAllClose.onclick=function(){d(),r(t,l),t===buttons[6]&&s(t),appendixesHideAll(),buttonsColorDefault(),hideHeader(),window.innerWidth>768&&(circlePositionerTitle.style.display="block"),bodyCard.style.position=null}}t.addEventListener("click",a)}var question=document.querySelector(".question_front"),exampleAnswerHide=document.querySelector(".img_example"),el=question;el&&el.addEventListener("click",function(){"600px"===exampleAnswerHide.style.maxHeight&&"1"===exampleAnswerHide.style.opacity?(exampleAnswerHide.style.maxHeight="0",exampleAnswerHide.style.opacity="0"):(exampleAnswerHide.style.maxHeight="600px",exampleAnswerHide.style.opacity="1")});var body=document.getElementById(body),buttons=document.getElementsByClassName("circle"),buttonsFirst=document.getElementsByClassName("circle"),mainCircle=document.getElementsByClassName("mainCircle"),overlay=document.getElementsByClassName("overlay"),p_AppButton=document.getElementsByClassName("p_app_button"),appendixes=document.getElementsByClassName("appendixes"),buttonsClass=document.querySelector(".buttons"),buttonAllClose=document.querySelector(".header-close"),bodyCard=document.querySelector(".card"),circlePositionerTitle=document.querySelector(".circlePositioner_title"),arrowLine=document.querySelector(".arrow_06B13_line"),overlayTitleM=document.querySelector("#overlay_title"),overlayTitleL=document.querySelector(".mainCircle_title"),header=document.querySelector(".header"),textP_Title=document.getElementById("p_button"),hamburger=document.querySelector(".hamburger--arrowalt-r");if(matchMedia){var mq=window.matchMedia("(max-width: 737px)");mq.addListener(widthChange),widthChange(mq)}if(matchMedia){var mqNarrow=window.matchMedia("(max-width: 438px)");mqNarrow.addListener(widthChange),widthChange(mqNarrow)}var appendixesHideAll=function(){for(var e=0;e<appendixes.length;e++)appendixes[e].style.maxHeight="0",appendixes[e].style.webkitTransform="scale(0.5)",appendixes[e].style.transform="scale(0.5)"},buttonsColorDefault=function(){for(var e=0;e<overlay.length;e++)overlay[e].style.backgroundColor=null;for(var t=0;t<mainCircle.length;t++)mainCircle[t].style.backgroundColor=null;for(var l=0;l<p_AppButton.length;l++)p_AppButton[l].style.color=null},unitTableDiv=document.querySelector(".unit_table"),mainTable=document.querySelector(".main_table");circlePositionerTitle.addEventListener("click",function(){"500px"===header.style.maxHeight?(buttonsColorDefault(),hideHeader(),textP_Title.textContent="A",bodyCard.style.position=null):(header.style.maxHeight="500px",unitTableDiv.style.maxHeight="300px",unitTableDiv.style.opacity="1",mainTable.style.margin="0 auto",mainTable.style.borderRadius="0 0 4px 4px",overlayTitleM.style.backgroundColor="#D32F2F",overlayTitleL.style.backgroundColor="white",textP_Title.style.color="white",buttonAllClose.style.display="none")}),showAppendix(appendixes[0],buttons[0],buttons[1],overlay[0],mainCircle[0],p_AppButton[0]),showAppendix(appendixes[1],buttons[1],buttons[2],overlay[1],mainCircle[1],p_AppButton[1]),showAppendix(appendixes[2],buttons[2],buttons[3],overlay[2],mainCircle[2],p_AppButton[2]),showAppendix(appendixes[3],buttons[3],buttons[4],overlay[3],mainCircle[3],p_AppButton[3]),showAppendix(appendixes[4],buttons[4],buttons[5],overlay[4],mainCircle[4],p_AppButton[4]),showAppendix(appendixes[5],buttons[5],buttons[6],overlay[5],mainCircle[5],p_AppButton[5]),showAppendix(appendixes[6],buttons[6],buttons[7],overlay[6],mainCircle[6],p_AppButton[6]);var modalButton=document.querySelector(".myButt"),materialIcons=document.querySelector(".material-icons"),modalOverlay=document.querySelector(".modal__overlay");modalButton.addEventListener("click",function(){"500px"===header.style.maxHeight&&hamburger.classList.toggle("is-active"),hideHeader(),modalOverlay.style.opacity="1",modalOverlay.style.zIndex="800",modalOverlay.style.height="100%",modalOverlay.style.webkitTransform="scale(1)",bodyCard.style.position="fixed"}),materialIcons.addEventListener("click",function(){modalOverlay.style.opacity="0",modalOverlay.style.zIndex="-100",modalOverlay.style.webkitTransform="scale(.5)",bodyCard.style.position=null});var buttonGambur=document.querySelector(".gamb-wrap");buttonGambur.addEventListener("click",function(){"500px"===header.style.maxHeight?(hideHeader(),bodyCard.style.position=null):(header.style.maxHeight="500px",unitTableDiv.style.maxHeight="300px",unitTableDiv.style.opacity="1",mainTable.style.margin="0 auto",mq.matches?(circlePositionerTitle.style.display="none",header.style.width="80%"):(circlePositionerTitle.style.display="block",header.style.width="70%"),widthChange(mqNarrow),mainTable.style.borderRadius="0 0 4px 4px",overlayTitleM.style.backgroundColor="#D32F2F",textP_Title.style.color="white",overlayTitleL.style.backgroundColor="white",buttonAllClose.style.display="none")});var addWordsBox1=document.querySelector("div.add_words1"),addWordsBox2=document.querySelector("div.add_words2"),unitNumber=document.querySelector(".th_1"),modalWrap=document.querySelector(".modal__wrap"),modalButton=document.querySelector(".myButt"),hr=document.getElementsByTagName("hr"),box1None=!0,box2None=!0;""===addWordsBox1.textContent&&(box1None=!1,addWordsBox1.style.display="none"),""===addWordsBox2.textContent&&(box2None=!1,addWordsBox2.style.display="none"),box1None===!0&&box2None===!0&&(addWordsBox1.style.width="47%",addWordsBox2.style.width="47%"),""===modalWrap.innerHTML&&(modalButton.style.display="none",hr[0].style.marginTop="50px"),""===exampleAnswerHide.innerHTML&&(exampleAnswerHide.style.display="none"),""===unitNumber.innerHTML&&(unitNumber.innerHTML="»»»» ♨");var hint=document.querySelectorAll(".hint");if(hint.length>0){hint[0].innerHTML="Hint";for(var id=hint[1].getAttribute("id"),choices=hint[1].innerHTML,boxes=choices.split(" | "),list="",j=0;j<boxes.length;j++){var arr=boxes[j].split(";");0!==j&&(list+='<p class="choices-box-delimiter"></p>'),list+="<ul>";for(var i=0;i<arr.length;i++)list=list+"<li>"+arr[i]+"</li>";list+="</ul>"}document.getElementById(id).innerHTML=list,document.getElementById("choices").className="choices_words",document.querySelector("a.hint").style.display="none",document.querySelector("div.hint").style.display="block"}