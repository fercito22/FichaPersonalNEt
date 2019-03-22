var Rijndael=Rijndael||new function(){for(var r={Encrypt:function(r,e){t(r,e,!0)},Decrypt:function(r,e){t(r,e,!1)}},e=[16,24,32],a=[[10,12,14],[12,12,14],[14,14,14]],n={},t=function(r,e,t){var c=r.length,i=e.length,l=0,y=0
switch(c){case 32:l++
case 24:l++
case 16:break
default:throw"rijndael: Unsupported block size: "+r.length}switch(i){case 32:y++
case 24:y++
case 16:break
default:throw"rijndael: Unsupported key size: "+e.length}var d=a[l][y]
e=function(r){if(!n[r]){var e=r.length,a=1
keyA=new Array(480)
for(var t=0;t<e;t++)keyA[t]=r.charCodeAt(t)
for(t=e;t<480;t+=4){var c=keyA.slice(t-4,t)
t%e==0?(c=[o[c[1]]^a,o[c[2]],o[c[3]],o[c[0]]],(a<<=1)>=256&&(a^=283)):e>24&&t%e==16&&(c=[o[c[0]],o[c[1]],o[c[2]],o[c[3]]])
for(var f=0;f<4;f++)keyA[t+f]=keyA[t+f-e]^c[f]}n[r]=keyA}return n[r]}(e)
var w=d*c
if(t){h(r,e.slice(0,c))
for(var p=f[l],j=c;j<w;j+=c)u(r,o),A(r,p),g(r),h(r,e.slice(j,j+c))
u(r,o),A(r,p),h(r,e.slice(j,j+c))}else{h(r,e.slice(w,w+c))
p=s[l]
A(r,p),u(r,v)
for(j=w-c;j>=c;j-=c)h(r,e.slice(j,j+c)),k(r),A(r,p),u(r,v)
h(r,e.slice(0,c))}},o=new Array(99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22),c=[[0,1,2,3],[0,1,2,3],[0,1,3,4]],f=Array(3),i=0;i<3;i++){f[i]=Array(e[i])
for(var l=e[i];l>=0;l--)f[i][l]=(l+(c[i][3&l]<<2))%e[i]}var v=new Array(256)
for(i=0;i<256;i++)v[o[i]]=i
var s=Array(3)
for(i=0;i<3;i++){s[i]=Array(e[i])
for(l=e[i];l>=0;l--)s[i][f[i][l]]=l}var y=new Array(256)
for(i=0;i<128;i++)y[i]=i<<1,y[128+i]=i<<1^27
var u=function(r,e){for(var a=r.length-1;a>=0;a--)r[a]=e[r[a]]},h=function(r,e){for(var a=r.length-1;a>=0;a--)r[a]^=e[a]},A=function(r,e){for(var a=r.slice(0),n=r.length-1;n>=0;n--)r[n]=a[e[n]]},g=function(r){for(var e=r.length-4;e>=0;e-=4){var a=r[e+0],n=r[e+1],t=r[e+2],o=r[e+3],c=a^n^t^o
r[e+0]^=c^y[a^n],r[e+1]^=c^y[n^t],r[e+2]^=c^y[t^o],r[e+3]^=c^y[o^a]}},k=function(r){for(var e=r.length-4;e>=0;e-=4){var a=r[e+0],n=r[e+1],t=r[e+2],o=r[e+3],c=a^n^t^o,f=y[c],i=y[y[f^a^t]]^c,l=y[y[f^n^o]]^c
r[e+0]^=i^y[a^n],r[e+1]^=l^y[n^t],r[e+2]^=i^y[t^o],r[e+3]^=l^y[o^a]}}
return r}
