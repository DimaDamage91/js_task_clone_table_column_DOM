var e=document.querySelector("table"),t=e.querySelector("thead"),r=e.querySelector("tfoot"),o=e.querySelector("tbody"),n=t.rows[0],l=r.rows[0];!function(e,c,a){var s=o.rows,i=!0,u=!1,y=void 0;try{for(var d,f=s[Symbol.iterator]();!(i=(d=f.next()).done);i=!0){var m=d.value,v=document.createElement("td");v.textContent=m.cells[1].textContent,m.insertBefore(v,m.cells[4])}}catch(e){u=!0,y=e}finally{try{i||null==f.return||f.return()}finally{if(u)throw y}}var w=document.createElement("th"),h=document.createElement("th");w.textContent="Position",h.textContent="Position",n.insertBefore(w,t.rows[0].cells[4]),l.insertBefore(h,r.rows[0].cells[4])}(0,0,4);
//# sourceMappingURL=index.49f7480e.js.map