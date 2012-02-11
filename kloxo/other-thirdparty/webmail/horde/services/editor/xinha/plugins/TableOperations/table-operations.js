Xinha.Config.prototype.TableOperations={showButtons:true};function TableOperations(F){this.editor=F;var E=F.config;var H=TableOperations.btnList;var D=this;E.removeToolbarElement(" inserttable toggleborders ");var C=["linebreak","inserttable","toggleborders"];for(var B=0;B<H.length;++B){var A=H[B];if(!A){if(E.TableOperations.showButtons){C.push("separator")}}else{var G="TO-"+A[0];E.registerButton(G,Xinha._lc(A[2],"TableOperations"),F.imgURL(A[0]+".gif","TableOperations"),false,function(I,J){D.buttonPress(I,J)},A[1]);if(E.TableOperations.showButtons){C.push(G)}}}E.toolbar.push(C);if(typeof PopupWin=="undefined"){Xinha._loadback(_editor_url+"modules/Dialogs/popupwin.js")}}TableOperations._pluginInfo={name:"TableOperations",version:"1.0",developer:"Mihai Bazon",developer_url:"http://dynarch.com/mishoo/",c_owner:"Mihai Bazon",sponsor:"Zapatec Inc.",sponsor_url:"http://www.bloki.com",license:"htmlArea"};TableOperations.prototype._lc=function(A){return Xinha._lc(A,"TableOperations")};TableOperations.prototype.getClosest=function(C){var B=this.editor;var A=B.getAllAncestors();var F=null;C=(""+C).toLowerCase();for(var D=0;D<A.length;++D){var E=A[D];if(E.tagName.toLowerCase()==C){F=E;break}}return F};TableOperations.prototype.dialogTableProperties=function(){var B=this.getClosest("table");var A=new PopupWin(this.editor,Xinha._lc("Table Properties","TableOperations"),function(G,F){TableOperations.processStyle(F,B);for(var E in F){if(typeof F[E]=="function"){continue}var H=F[E];switch(E){case"f_caption":if(/\S/.test(H)){var D=B.getElementsByTagName("caption")[0];if(!D){D=G.editor._doc.createElement("caption");B.insertBefore(D,B.firstChild)}D.innerHTML=H}else{var D=B.getElementsByTagName("caption")[0];if(D){D.parentNode.removeChild(D)}}break;case"f_summary":B.summary=H;break;case"f_width":B.style.width=(""+H)+F.f_unit;break;case"f_align":B.align=H;break;case"f_spacing":B.cellSpacing=H;break;case"f_padding":B.cellPadding=H;break;case"f_borders":B.border=H;break;case"f_frames":B.frame=H;break;case"f_rules":B.rules=H;break}}G.editor.forceRedraw();G.editor.focusEditor();G.editor.updateToolbar();var C=B.style.borderCollapse;B.style.borderCollapse="collapse";B.style.borderCollapse="separate";B.style.borderCollapse=C},function(N){var L="";var K=B.getElementsByTagName("caption")[0];if(K){L=K.innerHTML}var J=B.summary;var I=parseInt(B.style.width);isNaN(I)&&(I="");var H=/%/.test(B.style.width)?"percent":"pixels";var G=B.align;var F=B.cellSpacing;var D=B.cellPadding;var C=B.border;var R=B.frame;var Q=B.rules;function M(S){return S?" selected":""}N.content.style.width="400px";N.content.innerHTML=" <div class='title'>"+Xinha._lc("Table Properties","TableOperations")+"</div> <table style='width:100%'>   <tr>     <td>       <fieldset><legend>"+Xinha._lc("Description","TableOperations")+"</legend>        <table style='width:100%'>         <tr>           <td class='label'>"+Xinha._lc("Caption","TableOperations")+":</td>           <td class='value'><input type='text' name='f_caption' value='"+L+"'/></td>         </tr><tr>           <td class='label'>"+Xinha._lc("Summary","TableOperations")+":</td>           <td class='value'><input type='text' name='f_summary' value='"+J+"'/></td>         </tr>        </table>       </fieldset>     </td>   </tr>   <tr><td id='--HA-layout'></td></tr>   <tr>     <td>       <fieldset><legend>"+Xinha._lc("Spacing and padding","TableOperations")+"</legend>        <table style='width:100%'>         <tr>           <td class='label'>"+Xinha._lc("Spacing","TableOperations")+":</td>           <td><input type='text' name='f_spacing' size='5' value='"+F+"' /> &nbsp;"+Xinha._lc("Padding","TableOperations")+":            <input type='text' name='f_padding' size='5' value='"+D+"' /> &nbsp;&nbsp;"+Xinha._lc("pixels","TableOperations")+"          </td>         </tr>        </table>       </fieldset>     </td>   </tr>   <tr>     <td>       <fieldset><legend>"+Xinha._lc("Frame and borders","TableOperations")+"</legend>         <table width='100%'>           <tr>             <td class='label'>"+Xinha._lc("Borders","TableOperations")+":</td>             <td><input name='f_borders' type='text' size='5' value='"+C+"' /> &nbsp;&nbsp;"+Xinha._lc("pixels","TableOperations")+"</td>           </tr>           <tr>             <td class='label'>"+Xinha._lc("Frames","TableOperations")+":</td>             <td>               <select name='f_frames'>                 <option value='void'"+M(R=="void")+">"+Xinha._lc("No sides","TableOperations")+"</option>                 <option value='above'"+M(R=="above")+">"+Xinha._lc("The top side only","TableOperations")+"</option>                 <option value='below'"+M(R=="below")+">"+Xinha._lc("The bottom side only","TableOperations")+"</option>                 <option value='hsides'"+M(R=="hsides")+">"+Xinha._lc("The top and bottom sides only","TableOperations")+"</option>                 <option value='vsides'"+M(R=="vsides")+">"+Xinha._lc("The right and left sides only","TableOperations")+"</option>                 <option value='lhs'"+M(R=="lhs")+">"+Xinha._lc("The left-hand side only","TableOperations")+"</option>                 <option value='rhs'"+M(R=="rhs")+">"+Xinha._lc("The right-hand side only","TableOperations")+"</option>                 <option value='box'"+M(R=="box")+">"+Xinha._lc("All four sides","TableOperations")+"</option>               </select>             </td>           </tr>           <tr>             <td class='label'>"+Xinha._lc("Rules","TableOperations")+":</td>             <td>               <select name='f_rules'>                 <option value='none'"+M(Q=="none")+">"+Xinha._lc("No rules","TableOperations")+"</option>                 <option value='rows'"+M(Q=="rows")+">"+Xinha._lc("Rules will appear between rows only","TableOperations")+"</option>                 <option value='cols'"+M(Q=="cols")+">"+Xinha._lc("Rules will appear between columns only","TableOperations")+"</option>                 <option value='all'"+M(Q=="all")+">"+Xinha._lc("Rules will appear between all rows and columns","TableOperations")+"</option>               </select>             </td>           </tr>         </table>       </fieldset>     </td>   </tr>   <tr>     <td id='--HA-style'></td>   </tr> </table> ";var P=TableOperations.createStyleFieldset(N.doc,N.editor,B);var E=N.doc.getElementById("--HA-style");E.appendChild(P);var O=TableOperations.createStyleLayoutFieldset(N.doc,N.editor,B);E=N.doc.getElementById("--HA-layout");E.appendChild(O);N.modal=true;N.addButtons("OK","Cancel");N.showAtElement(N.editor._iframe,"c")})};TableOperations.prototype.dialogRowCellProperties=function(D){var C=this.getClosest(D?"td":"tr");var B=this.getClosest("table");var A=new PopupWin(this.editor,D?Xinha._lc("Cell Properties","TableOperations"):Xinha._lc("Row Properties","TableOperations"),function(G,F){TableOperations.processStyle(F,C);for(var H in F){if(typeof F[H]=="function"){continue}var I=F[H];switch(H){case"f_align":C.align=I;break;case"f_char":C.ch=I;break;case"f_valign":C.vAlign=I;break}}G.editor.forceRedraw();G.editor.focusEditor();G.editor.updateToolbar();var E=B.style.borderCollapse;B.style.borderCollapse="collapse";B.style.borderCollapse="separate";B.style.borderCollapse=E},function(E){var L=C.align;var K=C.vAlign;var I=C.ch;function F(M){return M?" selected":""}E.content.style.width="400px";E.content.innerHTML=" <div class='title'>"+Xinha._lc(D?"Cell Properties":"Row Properties","TableOperations")+"</div> <table style='width:100%'>   <tr>     <td id='--HA-layout'>     </td>   </tr>   <tr>     <td id='--HA-style'></td>   </tr> </table> ";var G=TableOperations.createStyleFieldset(E.doc,E.editor,C);var H=E.doc.getElementById("--HA-style");H.appendChild(G);var J=TableOperations.createStyleLayoutFieldset(E.doc,E.editor,C);H=E.doc.getElementById("--HA-layout");H.appendChild(J);E.modal=true;E.addButtons("OK","Cancel");E.showAtElement(E.editor._iframe,"c")})};TableOperations.prototype.buttonPress=function(c,b){this.editor=c;var a=Xinha.is_gecko?"<br />":"";function J(h){var g=h.getElementsByTagName("td");for(var f=g.length;--f>=0;){var j=g[f];j.rowSpan=1;j.innerHTML=a}}function Q(l){var k=parseInt(""+l.rowSpan);var j=parseInt(""+l.colSpan);l.rowSpan=1;A=l.parentNode;var g=A.rowIndex;var f=A.parentNode.rows;var i=l.cellIndex;while(--k>0){A=f[++g];var h=c._doc.createElement("td");h.colSpan=l.colSpan;h.innerHTML=a;A.insertBefore(h,A.cells[i])}c.forceRedraw();c.updateToolbar()}function O(i){var h=parseInt(""+i.colSpan);i.colSpan=1;A=i.parentNode;var g=i.nextSibling;while(--h>0){var f=c._doc.createElement("td");f.rowSpan=i.rowSpan;f.innerHTML=a;A.insertBefore(f,g)}c.forceRedraw();c.updateToolbar()}function e(i){var h=parseInt(""+i.colSpan);O(i);var f=i.parentNode.cells;var g=i.cellIndex;while(h-->0){Q(f[g++])}}function R(g){var f=g.nextSibling;while(f&&f.nodeType!=1){f=f.nextSibling}if(!f){f=g.previousSibling;while(f&&f.nodeType!=1){f=f.previousSibling}}if(!f){f=g.parentNode}c.selectNodeContents(f)}function L(w,u,s,q,o){var m=[];var k=[];try{for(Y=s;Y<s+o;Y++){var v=w.rows[Y];for(g=u;g<u+q;g++){if(v.cells[g].colSpan>1||v.cells[g].rowSpan>1){e(v.cells[g])}k.push(v.cells[g])}if(k.length>0){m.push(k);k=[]}}}catch(h){alert("Invalid selection");return false}var t=m[0][0].parentNode.rowIndex;var r=m[m.length-1][0].parentNode.rowIndex;var p=m[m.length-1][0].rowSpan;var n="";for(Y=0;Y<m.length;++Y){var k=m[Y];for(var g=0;g<k.length;++g){var l=k[g];n+=l.innerHTML;(Y||g)&&(l.parentNode.removeChild(l))}}var f=m[0][0];f.innerHTML=n;f.rowSpan=r-t+p;var i=0;for(g=0;g<m[0].length;g++){i+=m[0][g].colSpan}f.colSpan=i;c.selectNodeContents(f);c.forceRedraw();c.focusEditor()}switch(b){case"TO-row-insert-above":case"TO-row-insert-under":var A=this.getClosest("tr");if(!A){break}var N=A.cloneNode(true);J(N);A.parentNode.insertBefore(N,/under/.test(b)?A.nextSibling:A);c.forceRedraw();c.focusEditor();break;case"TO-row-delete":var A=this.getClosest("tr");if(!A){break}var P=A.parentNode;if(P.rows.length==1){alert(Xinha._lc("Xinha cowardly refuses to delete the last row in table.","TableOperations"));break}R(A);P.removeChild(A);c.forceRedraw();c.focusEditor();c.updateToolbar();break;case"TO-row-split":var M=this.getClosest("td");if(!M){break}Q(M);break;case"TO-col-insert-before":case"TO-col-insert-after":var M=this.getClosest("td");if(!M){break}var X=M.parentNode.parentNode.rows;var U=M.cellIndex;var T=(M.parentNode.cells.length==U+1);for(var Y=X.length;--Y>=0;){var A=X[Y];var W=c._doc.createElement("td");W.innerHTML=a;if(T&&Xinha.is_ie){A.insertBefore(W)}else{var K=A.cells[U+(/after/.test(b)?1:0)];A.insertBefore(W,K)}}c.focusEditor();break;case"TO-col-split":var M=this.getClosest("td");if(!M){break}O(M);break;case"TO-col-delete":var M=this.getClosest("td");if(!M){break}var U=M.cellIndex;if(M.parentNode.cells.length==1){alert(Xinha._lc("Xinha cowardly refuses to delete the last column in table.","TableOperations"));break}R(M);var X=M.parentNode.parentNode.rows;for(var Y=X.length;--Y>=0;){var A=X[Y];A.removeChild(A.cells[U])}c.forceRedraw();c.focusEditor();c.updateToolbar();break;case"TO-cell-split":var M=this.getClosest("td");if(!M){break}e(M);break;case"TO-cell-insert-before":case"TO-cell-insert-after":var M=this.getClosest("td");if(!M){break}var A=M.parentNode;var W=c._doc.createElement("td");W.innerHTML=a;A.insertBefore(W,/after/.test(b)?M.nextSibling:M);c.forceRedraw();c.focusEditor();break;case"TO-cell-delete":var M=this.getClosest("td");if(!M){break}if(M.parentNode.cells.length==1){alert(Xinha._lc("Xinha cowardly refuses to delete the last cell in row.","TableOperations"));break}R(M);M.parentNode.removeChild(M);c.forceRedraw();c.updateToolbar();break;case"TO-cell-merge":var S=c._getSelection();if(!Xinha.is_ie&&S.rangeCount>1){var Z=S.getRangeAt(0);var M=Z.startContainer.childNodes[Z.startOffset];var A=M.parentNode;var V=M.cellIndex;var I=A.rowIndex;var H=0;var G=I;var F=0;var E=0;var D,d;for(Y=0;Y<S.rangeCount;Y++){Z=S.getRangeAt(Y);D=Z.startContainer.childNodes[Z.startOffset];d=D.parentNode;if(d.rowIndex!=G){G=d.rowIndex;E=0}E+=D.colSpan;if(E>F){F=E}if(d.rowIndex+D.rowSpan-1>H){H=d.rowIndex+D.rowSpan-1}}var C=H-I+1;var B=A.parentNode;L(B,V,I,F,C)}else{var M=this.getClosest("td");if(!M){alert(Xinha._lc("Please click into some cell","TableOperations"));break}c._popupDialog("plugin://TableOperations/merge_cells.html",function(f){if(!f){return false}F=parseInt(f.f_cols,10)+1;C=parseInt(f.f_rows,10)+1;var j=M.parentNode;var i=M.cellIndex;var h=j.rowIndex;var g=j.parentNode;L(g,i,h,F,C)},null)}break;case"TO-table-prop":this.dialogTableProperties();break;case"TO-row-prop":this.dialogRowCellProperties(false);break;case"TO-cell-prop":this.dialogRowCellProperties(true);break;default:alert("Button ["+b+"] not yet implemented")}};TableOperations.btnList=[["table-prop","table","Table properties"],null,["row-prop","tr","Row properties"],["row-insert-above","tr","Insert row before"],["row-insert-under","tr","Insert row after"],["row-delete","tr","Delete row"],["row-split","td[rowSpan!=1]","Split row"],null,["col-insert-before","td","Insert column before"],["col-insert-after","td","Insert column after"],["col-delete","td","Delete column"],["col-split","td[colSpan!=1]","Split column"],null,["cell-prop","td","Cell properties"],["cell-insert-before","td","Insert cell before"],["cell-insert-after","td","Insert cell after"],["cell-delete","td","Delete cell"],["cell-merge","tr","Merge cells"],["cell-split","td[colSpan!=1,rowSpan!=1]","Split cell"]];TableOperations.getLength=function(B){var A=parseInt(B);if(isNaN(A)){A=""}return A};TableOperations.processStyle=function(B,C){var A=C.style;for(var D in B){if(typeof B[D]=="function"){continue}var F=B[D];switch(D){case"f_st_backgroundColor":A.backgroundColor=F;break;case"f_st_color":A.color=F;break;case"f_st_backgroundImage":if(/\S/.test(F)){A.backgroundImage="url("+F+")"}else{A.backgroundImage="none"}break;case"f_st_borderWidth":A.borderWidth=F;break;case"f_st_borderStyle":A.borderStyle=F;break;case"f_st_borderColor":A.borderColor=F;break;case"f_st_borderCollapse":A.borderCollapse=F?"collapse":"";break;case"f_st_width":if(/\S/.test(F)){A.width=F+B.f_st_widthUnit}else{A.width=""}break;case"f_st_height":if(/\S/.test(F)){A.height=F+B.f_st_heightUnit}else{A.height=""}break;case"f_st_textAlign":if(F=="char"){var E=B.f_st_textAlignChar;if(E=='"'){E='\\"'}A.textAlign='"'+E+'"'}else{if(F=="-"){A.textAlign=""}else{A.textAlign=F}}break;case"f_st_verticalAlign":C.vAlign="";if(F=="-"){A.verticalAlign=""}else{A.verticalAlign=F}break;case"f_st_float":if(Xinha.is_ie){A.styleFloat=F}else{A.cssFloat=F}break}}};TableOperations.createColorButton=function(E,F,D,A){if(!D){D=""}else{if(!/#/.test(D)){D=Xinha._colorToRgb(D)}}var C=E.createElement("span");var I=E.createElement("input");I.type="hidden";C.appendChild(I);I.name="f_st_"+A;I.value=D;var H=E.createElement("span");H.className="buttonColor";C.appendChild(H);var G=E.createElement("span");G.className="chooser";G.style.backgroundColor=D;H.appendChild(G);H.onmouseover=function(){if(!this.disabled){this.className+=" buttonColor-hilite"}};H.onmouseout=function(){if(!this.disabled){this.className="buttonColor"}};G.onclick=function(){if(this.parentNode.disabled){return false}F._popupDialog("select_color.html",function(J){if(J){G.style.backgroundColor="#"+J;I.value="#"+J}},D)};var B=E.createElement("span");B.innerHTML="&#x00d7;";B.className="nocolor";B.title=Xinha._lc("Unset color","TableOperations");H.appendChild(B);B.onmouseover=function(){if(!this.parentNode.disabled){this.className+=" nocolor-hilite"}};B.onmouseout=function(){if(!this.parentNode.disabled){this.className="nocolor"}};B.onclick=function(){G.style.backgroundColor="";I.value=""};return C};TableOperations.createStyleLayoutFieldset=function(Q,P,B){var N=Q.createElement("fieldset");var M=Q.createElement("legend");N.appendChild(M);M.innerHTML=Xinha._lc("Layout","TableOperations");var L=Q.createElement("table");N.appendChild(L);L.style.width="100%";var K=Q.createElement("tbody");L.appendChild(K);var J=B.tagName.toLowerCase();var A,E,F,H,G,C,I;if(J!="td"&&J!="tr"&&J!="th"){A=Q.createElement("tr");K.appendChild(A);E=Q.createElement("td");E.className="label";A.appendChild(E);E.innerHTML=Xinha._lc("Float","TableOperations")+":";E=Q.createElement("td");A.appendChild(E);H=Q.createElement("select");E.appendChild(H);H.name="f_st_float";C=["None","Left","Right"];for(var I=0;I<C.length;++I){var D=C[I];var R=C[I].toLowerCase();G=Q.createElement("option");G.innerHTML=Xinha._lc(D,"TableOperations");G.value=R;if(Xinha.is_ie){G.selected=((""+B.style.styleFloat).toLowerCase()==R)}else{G.selected=((""+B.style.cssFloat).toLowerCase()==R)}H.appendChild(G)}}A=Q.createElement("tr");K.appendChild(A);E=Q.createElement("td");E.className="label";A.appendChild(E);E.innerHTML=Xinha._lc("Width","TableOperations")+":";E=Q.createElement("td");A.appendChild(E);F=Q.createElement("input");F.type="text";F.value=TableOperations.getLength(B.style.width);F.size="5";F.name="f_st_width";F.style.marginRight="0.5em";E.appendChild(F);H=Q.createElement("select");H.name="f_st_widthUnit";G=Q.createElement("option");G.innerHTML=Xinha._lc("percent","TableOperations");G.value="%";G.selected=/%/.test(B.style.width);H.appendChild(G);G=Q.createElement("option");G.innerHTML=Xinha._lc("pixels","TableOperations");G.value="px";G.selected=/px/.test(B.style.width);H.appendChild(G);E.appendChild(H);H.style.marginRight="0.5em";E.appendChild(Q.createTextNode(Xinha._lc("Text align","TableOperations")+":"));H=Q.createElement("select");H.style.marginLeft=H.style.marginRight="0.5em";E.appendChild(H);H.name="f_st_textAlign";C=["Left","Center","Right","Justify","-"];if(J=="td"){C.push("Char")}F=Q.createElement("input");F.name="f_st_textAlignChar";F.size="1";F.style.fontFamily="monospace";E.appendChild(F);for(var I=0;I<C.length;++I){var D=C[I];var R=D.toLowerCase();G=Q.createElement("option");G.value=R;G.innerHTML=Xinha._lc(D,"TableOperations");G.selected=((B.style.textAlign.toLowerCase()==R)||(B.style.textAlign==""&&D=="-"));H.appendChild(G)}function O(S){F.style.visibility=S?"visible":"hidden";if(S){F.focus();F.select()}}H.onchange=function(){O(this.value=="char")};O(H.value=="char");A=Q.createElement("tr");K.appendChild(A);E=Q.createElement("td");E.className="label";A.appendChild(E);E.innerHTML=Xinha._lc("Height","TableOperations")+":";E=Q.createElement("td");A.appendChild(E);F=Q.createElement("input");F.type="text";F.value=TableOperations.getLength(B.style.height);F.size="5";F.name="f_st_height";F.style.marginRight="0.5em";E.appendChild(F);H=Q.createElement("select");H.name="f_st_heightUnit";G=Q.createElement("option");G.innerHTML=Xinha._lc("percent","TableOperations");G.value="%";G.selected=/%/.test(B.style.height);H.appendChild(G);G=Q.createElement("option");G.innerHTML=Xinha._lc("pixels","TableOperations");G.value="px";G.selected=/px/.test(B.style.height);H.appendChild(G);E.appendChild(H);H.style.marginRight="0.5em";E.appendChild(Q.createTextNode(Xinha._lc("Vertical align","TableOperations")+":"));H=Q.createElement("select");H.name="f_st_verticalAlign";H.style.marginLeft="0.5em";E.appendChild(H);C=["Top","Middle","Bottom","Baseline","-"];for(var I=0;I<C.length;++I){var D=C[I];var R=D.toLowerCase();G=Q.createElement("option");G.value=R;G.innerHTML=Xinha._lc(D,"TableOperations");G.selected=((B.style.verticalAlign.toLowerCase()==R)||(B.style.verticalAlign==""&&D=="-"));H.appendChild(G)}return N};TableOperations.createStyleFieldset=function(W,T,B){var S=W.createElement("fieldset");var P=W.createElement("legend");S.appendChild(P);P.innerHTML=Xinha._lc("CSS Style","TableOperations");var N=W.createElement("table");S.appendChild(N);N.style.width="100%";var M=W.createElement("tbody");N.appendChild(M);var A,D,L,Q,O,C,R;A=W.createElement("tr");M.appendChild(A);D=W.createElement("td");A.appendChild(D);D.className="label";D.innerHTML=Xinha._lc("Background","TableOperations")+":";D=W.createElement("td");A.appendChild(D);var U=TableOperations.createColorButton(W,T,B.style.backgroundColor,"backgroundColor");U.firstChild.nextSibling.style.marginRight="0.5em";D.appendChild(U);D.appendChild(W.createTextNode(Xinha._lc("Image URL","TableOperations")+": "));L=W.createElement("input");L.type="text";L.name="f_st_backgroundImage";if(B.style.backgroundImage.match(/url\(\s*(.*?)\s*\)/)){L.value=RegExp.$1}D.appendChild(L);A=W.createElement("tr");M.appendChild(A);D=W.createElement("td");A.appendChild(D);D.className="label";D.innerHTML=Xinha._lc("FG Color","TableOperations")+":";D=W.createElement("td");A.appendChild(D);D.appendChild(TableOperations.createColorButton(W,T,B.style.color,"color"));L=W.createElement("input");L.style.visibility="hidden";L.type="text";D.appendChild(L);A=W.createElement("tr");M.appendChild(A);D=W.createElement("td");A.appendChild(D);D.className="label";D.innerHTML=Xinha._lc("Border","TableOperations")+":";D=W.createElement("td");A.appendChild(D);var J=TableOperations.createColorButton(W,T,B.style.borderColor,"borderColor");var E=J.firstChild.nextSibling;D.appendChild(J);E.style.marginRight="0.5em";Q=W.createElement("select");var H=[];D.appendChild(Q);Q.name="f_st_borderStyle";C=["none","dotted","dashed","solid","double","groove","ridge","inset","outset"];var F=B.style.borderStyle;if(F.match(/([^\s]*)\s/)){F=RegExp.$1}for(var R=0;R<C.length;R++){var V=C[R];O=W.createElement("option");O.value=V;O.innerHTML=V;if(V==F){O.selected=true}Q.appendChild(O)}Q.style.marginRight="0.5em";function K(X){for(var Y=0;Y<H.length;++Y){var Z=H[Y];Z.style.visibility=X?"hidden":"visible";if(!X&&(Z.tagName.toLowerCase()=="input")){Z.focus();Z.select()}}}Q.onchange=function(){K(this.value=="none")};L=W.createElement("input");H.push(L);L.type="text";L.name="f_st_borderWidth";L.value=TableOperations.getLength(B.style.borderWidth);L.size="5";D.appendChild(L);L.style.marginRight="0.5em";var I=W.createElement("span");I.innerHTML=Xinha._lc("pixels","TableOperations");D.appendChild(I);H.push(I);K(Q.value=="none");if(B.tagName.toLowerCase()=="table"){A=W.createElement("tr");M.appendChild(A);D=W.createElement("td");D.className="label";A.appendChild(D);L=W.createElement("input");L.type="checkbox";L.name="f_st_borderCollapse";L.id="f_st_borderCollapse";var V=(/collapse/i.test(B.style.borderCollapse));L.checked=V?1:0;D.appendChild(L);D=W.createElement("td");A.appendChild(D);var G=W.createElement("label");G.htmlFor="f_st_borderCollapse";G.innerHTML=Xinha._lc("Collapsed borders","TableOperations");D.appendChild(G)}return S};