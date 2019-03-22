var mcrypt=mcrypt||new function(){var r={"rijndael-128":[16,32],"rijndael-192":[24,32],"rijndael-256":[32,32],serpent:[16,32]},e={"rijndael-128":function(r,e,t,n){return t.length<32&&(t+=Array(33-t.length).join(String.fromCharCode(0))),n?Rijndael.Encrypt(e,t):Rijndael.Decrypt(e,t),e}}
e["rijndael-192"]=e["rijndael-128"],e["rijndael-256"]=e["rijndael-128"],e.serpent=function(r,e,t,n){return n?Serpent.Encrypt(e):Serpent.Decrypt(e),e},e.serpent.init=function(r,e,t){for(var n=[],o=0;o<e.length;o++)n[o]=e.charCodeAt(o)
Serpent.Init(n)},e.serpent.deinit=function(r,e,t){Serpent.Close()}
var t={Encrypt:function(r,e,n,o,c){return t.Crypt(!0,r,e,n,o,c)},prueba:function(){alert("llega")},Decrypt:function(r,e,n,o,c){return t.Crypt(!1,r,e,n,o,c)},Crypt:function(t,a,i,f,s,d){if(f?c=f:f=c,s?o=s:s=o,d?n=d:d=n,!a)return!0
e[s].init&&e[s].init(s,f,t)
var u=r[s][0],h=u,C=new Array(u)
switch(d){case"cfb":h=1
case"cbc":case"ncfb":case"nofb":case"ctr":if(!i)throw"mcrypt.Crypt: IV Required for mode "+d
if(i.length!=u)throw"mcrypt.Crypt: IV must be "+u+" characters long for "+s
for(var l=u-1;l>=0;l--)C[l]=i.charCodeAt(l)
break
case"ecb":break
default:throw"mcrypt.Crypt: Unsupported mode of opperation"+n}var p=Math.ceil(a.length/h),b=a.length
a+=Array(p*h-b+1).join(String.fromCharCode(0))
var g=""
switch(d){case"ecb":for(l=0;l<p;l++){for(var y=0;y<h;y++)C[y]=a.charCodeAt(l*h+y)
e[s](s,C,c,t)
for(y=0;y<h;y++)g+=String.fromCharCode(C[y])}break
case"cbc":if(t)for(l=0;l<p;l++){for(y=0;y<h;y++)C[y]=a.charCodeAt(l*h+y)^C[y]
e[s](s,C,c,!0)
for(y=0;y<h;y++)g+=String.fromCharCode(C[y])}else for(l=0;l<p;l++){var m=C
C=new Array(h)
for(y=0;y<h;y++)C[y]=a.charCodeAt(l*h+y)
var v=C.slice(0)
e[s](s,v,c,!1)
for(y=0;y<h;y++)g+=String.fromCharCode(m[y]^v[y])}break
case"cfb":for(l=0;l<p;l++){m=C.slice(0)
e[s](s,m,c,!0),m=m[0]^a.charCodeAt(l),C.push(t?m:a.charCodeAt(l)),C.shift(),g+=String.fromCharCode(m)}g=g.substr(0,b)
break
case"ncfb":for(l=0;l<p;l++){e[s](s,C,c,!0)
for(y=0;y<h;y++){m=a.charCodeAt(l*h+y)
C[y]=m^C[y],g+=String.fromCharCode(C[y]),t||(C[y]=m)}}g=g.substr(0,b)
break
case"nofb":for(l=0;l<p;l++){e[s](s,C,c,!0)
for(y=0;y<h;y++)g+=String.fromCharCode(a.charCodeAt(l*h+y)^C[y])}g=g.substr(0,b)
break
case"ctr":for(l=0;l<p;l++){m=C.slice(0),e[s](s,m,c,!0)
for(y=0;y<h;y++)g+=String.fromCharCode(a.charCodeAt(l*h+y)^m[y])
var A=1,j=h
do{C[--j]+=1,A=C[j]>>8,C[j]&=255}while(A)}g=g.substr(0,b)}return e[s].deinit&&e[s].deinit(s,f,t),g},get_block_size:function(e,t){return e||(e=o),!!r[e]&&r[e][0]},get_cipher_name:function(e){return e||(e=o),!!r[e]&&e},get_iv_size:function(e,t){return e||(e=o),!!r[e]&&r[e][0]},get_key_size:function(e,t){return e||(e=o),!!r[e]&&r[e][1]},list_algorithms:function(){var e=[]
for(var t in r)e.push(t)
return e},list_modes:function(){return["ecb","cbc","cfb","ncfb","nofb","ctr"]}},n="cbc",o="rijndael-128",c="12345678911234567892123456789312"
return t}
