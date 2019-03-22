var Base64={code:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e,r){r=void 0!==r&&r
var o,t,d,c,n,a,h,f,i=[],A="",C=Base64.code
if((a=(h=r?Utf8.encode(e):e).length%3)>0)for(;a++<3;)A+="=",h+="\0"
for(a=0;a<h.length;a+=3)t=(o=h.charCodeAt(a)<<16|h.charCodeAt(a+1)<<8|h.charCodeAt(a+2))>>18&63,d=o>>12&63,c=o>>6&63,n=63&o,i[a/3]=C.charAt(t)+C.charAt(d)+C.charAt(c)+C.charAt(n)
return f=(f=i.join("")).slice(0,f.length-A.length)+A},decode:function(e,r){r=void 0!==r&&r
var o,t,d,c,n,a,h,f,i=[],A=Base64.code
f=r?Utf8.decode(e):e
for(var C=0;C<f.length;C+=4)o=(a=A.indexOf(f.charAt(C))<<18|A.indexOf(f.charAt(C+1))<<12|(c=A.indexOf(f.charAt(C+2)))<<6|(n=A.indexOf(f.charAt(C+3))))>>>16&255,t=a>>>8&255,d=255&a,i[C/4]=String.fromCharCode(o,t,d),64==n&&(i[C/4]=String.fromCharCode(o,t)),64==c&&(i[C/4]=String.fromCharCode(o))
return h=i.join(""),r?Utf8.decode(h):h}}
