var Serpent=Serpent||new function(){var n={},t=4294967295,o=function(n,o){return(n<<o|n>>>32-o)&t},f=function(n,t){return n[t]|n[t+1]<<8|n[t+2]<<16|n[t+3]<<24},c=function(n,t,o){n.splice(t,4,255&o,o>>>8&255,o>>>16&255,o>>>24&255)},u=[],r=function(n,t,o,f,c,i){n[t]^=u[4*i],n[o]^=u[4*i+1],n[f]^=u[4*i+2],n[c]^=u[4*i+3]},e=function(n,f,c,i,r,e,a){n[f]=o(n[f],13),n[i]=o(n[i],3),n[c]^=n[f],n[e]=n[f]<<3&t,n[r]^=n[i],n[c]^=n[i],n[c]=o(n[c],1),n[r]^=n[e],n[r]=o(n[r],7),n[e]=n[c],n[f]^=n[c],n[e]=n[e]<<7&t,n[i]^=n[r],n[f]^=n[r],n[i]^=n[e],n[r]^=u[4*a+3],n[c]^=u[4*a+1],n[f]=o(n[f],5),n[i]=o(n[i],22),n[f]^=u[4*a+0],n[i]^=u[4*a+2]},a=function(n,f,c,i,r,e,a){n[f]^=u[4*a+0],n[c]^=u[4*a+1],n[i]^=u[4*a+2],n[r]^=u[4*a+3],n[f]=o(n[f],27),n[i]=o(n[i],10),n[e]=n[c],n[i]^=n[r],n[f]^=n[r],n[e]=n[e]<<7&t,n[f]^=n[c],n[c]=o(n[c],31),n[i]^=n[e],n[r]=o(n[r],25),n[e]=n[f]<<3&t,n[c]^=n[f],n[r]^=n[e],n[f]=o(n[f],19),n[c]^=n[i],n[r]^=n[i],n[i]=o(n[i],29)},l=[function(n,t,o,f,c,i){n[i]=n[c],n[c]|=n[t],n[t]^=n[i],n[i]^=n[f],n[i]=~n[i],n[c]^=n[o],n[o]&=n[t],n[o]^=n[i],n[f]^=n[t],n[t]^=n[c],n[i]|=n[t],n[t]^=n[f],n[f]&=n[o],n[c]^=n[f],n[o]=~n[o],n[f]^=n[i],n[o]^=n[f]},function(n,t,o,f,c,i){n[i]=n[o],n[o]^=n[t],n[t]^=n[c],n[c]=~n[c],n[i]&=n[o],n[t]|=n[o],n[c]^=n[f],n[t]^=n[c],n[o]^=n[c],n[c]^=n[i],n[o]|=n[i],n[i]^=n[f],n[f]&=n[t],n[f]^=n[o],n[o]|=n[t],n[t]=~n[t],n[t]^=n[f],n[i]^=n[o]},function(n,t,o,f,c,i){n[c]=~n[c],n[o]^=n[t],n[i]=n[t],n[t]&=n[f],n[t]^=n[c],n[c]|=n[i],n[f]^=n[o],n[c]^=n[o],n[o]&=n[t],n[t]^=n[f],n[f]&=n[c],n[c]|=n[o],n[t]=~n[t],n[c]^=n[t],n[i]^=n[t],n[t]^=n[f],n[o]|=n[f]},function(n,t,o,f,c,i){n[i]=n[o],n[o]^=n[c],n[c]|=n[t],n[i]&=n[t],n[t]^=n[f],n[f]^=n[o],n[o]&=n[c],n[f]^=n[c],n[t]|=n[i],n[i]^=n[c],n[o]^=n[t],n[t]&=n[c],n[c]&=n[i],n[c]^=n[f],n[i]|=n[o],n[f]&=n[o],n[i]^=n[c],n[t]^=n[c],n[c]^=n[f]},function(n,t,o,f,c,i){n[i]=n[c],n[c]&=n[t],n[t]^=n[i],n[c]^=n[f],n[f]|=n[i],n[t]^=n[o],n[i]^=n[c],n[f]|=n[t],n[f]^=n[o],n[o]&=n[t],n[o]^=n[i],n[i]&=n[f],n[f]^=n[c],n[i]^=n[t],n[c]|=n[o],n[o]=~n[o],n[c]^=n[t]},function(n,t,o,f,c,i){n[i]=n[o],n[o]|=n[t],n[f]^=n[o],n[c]=~n[c],n[i]^=n[t],n[t]^=n[f],n[o]&=n[i],n[i]|=n[c],n[i]^=n[t],n[t]&=n[c],n[o]^=n[c],n[c]^=n[f],n[t]^=n[o],n[f]&=n[i],n[o]^=n[f],n[f]&=n[t],n[c]^=n[f]},function(n,t,o,f,c,i){n[i]=n[o],n[c]^=n[t],n[o]^=n[f],n[f]^=n[t],n[t]&=n[c],n[o]|=n[c],n[i]=~n[i],n[t]^=n[o],n[o]^=n[f],n[c]^=n[i],n[i]^=n[t],n[f]&=n[t],n[i]^=n[o],n[f]^=n[c],n[c]&=n[o],n[c]^=n[t],n[o]^=n[f]},function(n,t,o,f,c,i){n[o]=~n[o],n[i]=n[o],n[t]=~n[t],n[o]&=n[f],n[o]^=n[c],n[c]|=n[i],n[i]^=n[f],n[f]^=n[c],n[c]^=n[t],n[t]|=n[o],n[f]&=n[t],n[t]^=n[i],n[i]^=n[c],n[c]&=n[t],n[i]^=n[o],n[f]^=n[i],n[c]^=n[o],n[i]|=n[t],n[i]^=n[o]}],v=[function(n,t,o,f,c,i){n[i]=n[c],n[o]^=n[t],n[c]|=n[o],n[i]^=n[o],n[t]=~n[t],n[f]^=n[c],n[c]^=n[t],n[t]&=n[o],n[t]^=n[f],n[f]&=n[c],n[c]^=n[i],n[f]^=n[c],n[o]^=n[c],n[c]&=n[t],n[o]^=n[t],n[t]^=n[f],n[i]^=n[c]},function(n,t,o,f,c,i){n[o]^=n[c],n[i]=n[t],n[t]^=n[f],n[f]=~n[f],n[i]|=n[o],n[i]^=n[c],n[c]&=n[o],n[o]^=n[f],n[f]&=n[i],n[i]^=n[o],n[o]|=n[c],n[c]^=n[t],n[f]^=n[t],n[t]|=n[i],n[f]^=n[i],n[o]^=n[t],n[i]^=n[o]},function(n,t,o,f,c,i){n[f]^=n[o],n[i]=n[c],n[c]=~n[c],n[c]|=n[f],n[f]^=n[i],n[i]^=n[t],n[c]^=n[o],n[o]|=n[f],n[f]^=n[t],n[o]^=n[i],n[i]|=n[c],n[f]^=n[c],n[i]^=n[f],n[f]&=n[o],n[f]^=n[c],n[c]^=n[i],n[i]^=n[t]},function(n,t,o,f,c,i){n[f]^=n[o],n[i]=n[o],n[o]&=n[f],n[o]^=n[t],n[t]|=n[i],n[i]^=n[c],n[t]^=n[c],n[c]|=n[o],n[o]^=n[f],n[o]^=n[c],n[t]^=n[f],n[f]^=n[c],n[c]&=n[o],n[o]^=n[t],n[t]&=n[f],n[i]^=n[c],n[c]^=n[t],n[t]^=n[o]},function(n,t,o,f,c,i){n[f]^=n[c],n[i]=n[t],n[t]&=n[o],n[t]^=n[f],n[f]|=n[c],n[i]=~n[i],n[o]^=n[t],n[t]^=n[f],n[f]&=n[i],n[f]^=n[t],n[t]|=n[i],n[t]^=n[c],n[c]&=n[f],n[i]^=n[c],n[c]^=n[o],n[o]&=n[t],n[i]^=n[o],n[t]^=n[c]},function(n,t,o,f,c,i){n[i]=n[o],n[o]|=n[f],n[f]^=n[i],n[o]^=n[c],n[c]&=n[i],n[f]^=n[c],n[c]|=n[t],n[t]=~n[t],n[c]^=n[f],n[f]|=n[t],n[i]^=n[o],n[f]^=n[i],n[i]&=n[t],n[t]^=n[o],n[o]^=n[c],n[t]&=n[f],n[f]^=n[c],n[t]^=n[f],n[f]^=n[i],n[i]^=n[c]},function(n,t,o,f,c,i){n[t]^=n[f],n[i]=n[t],n[t]&=n[c],n[f]^=n[c],n[t]^=n[f],n[c]^=n[o],n[f]|=n[i],n[f]^=n[c],n[c]&=n[t],n[t]=~n[t],n[c]^=n[o],n[o]&=n[f],n[i]^=n[t],n[c]^=n[i],n[i]^=n[f],n[t]^=n[o],n[f]^=n[t]},function(n,t,o,f,c,i){n[i]=n[c],n[c]&=n[t],n[t]^=n[f],n[f]|=n[i],n[i]^=n[o],n[t]=~n[t],n[o]|=n[c],n[i]^=n[t],n[t]&=n[f],n[t]^=n[o],n[o]&=n[f],n[c]^=n[f],n[i]^=n[c],n[f]&=n[c],n[c]|=n[t],n[o]^=n[i],n[c]^=n[i],n[i]&=n[t],n[i]^=n[f]}],p=[7788,63716,84032,7891,78949,25146,28835,67288,84032,40055,7361,1940,77639,27525,24193,75702,7361,35413,83150,82383,58619,48468,18242,66861,83150,69667,7788,31552,40054,23222,52496,57565,7788,63716],g=[44255,61867,45034,52496,73087,56255,43827,41448,18242,1939,18581,56255,64584,31097,26469,77728,77639,4216,64585,31097,66861,78949,58006,59943,49676,78950,5512,78949,27525,52496,18670,76143],h=[44255,60896,28835,1837,1057,4216,18242,77301,47399,53992,1939,1940,66420,39172,78950,45917,82383,7450,67288,26469,83149,57565,66419,47400,58006,44254,18581,18228,33048,45034,66508,7449],s=function(n,t,f,c,i,r){u[r]=n[f]=o(u[t]^n[f]^n[c]^n[i]^2654435769^r,11)},y=function(n,t,o,f,c,i){n[t]=u[i],n[o]=u[i+1],n[f]=u[i+2],n[c]=u[i+3]},S=function(n,t,o,f,c,i){u[i]=n[t],u[i+1]=n[o],u[i+2]=n[f],u[i+3]=n[c]}
return n.Init=function(n){var t,o,f,c
for(n.length<32&&(n[n.length]=1);n.length<32;)n[n.length]=0
for(t=0;t<8;t++)u[t]=255&n[4*t+0]|(255&n[4*t+1])<<8|(255&n[4*t+2])<<16|(255&n[4*t+3])<<24
var i=[u[3],u[4],u[5],u[6],u[7]]
for(t=0,o=0;s(i,o++,0,4,2,t++),s(i,o++,1,0,3,t++),t<132;)s(i,o++,2,1,4,t++),8==t&&(o=0),s(i,o++,3,2,0,t++),s(i,o++,4,3,1,t++)
for(t=128,o=3,c=0;f=p[c++],l[o++%8](i,f%5,f%7,f%11,f%13,f%17),S(i,(f=p[c])%5,f%7,f%11,f%13,t),t>0;)y(i,f%5,f%7,f%11,f%13,t-=4)},n.Close=function(){u=[]},n.Encrypt=function(n){var t=n.slice(0),o=[f(t,0),f(t,4),f(t,8),f(t,12)]
r(o,0,1,2,3,0)
for(var i=0,u=g[i];l[i%8](o,u%5,u%7,u%11,u%13,u%17),i<31;)u=g[++i],e(o,u%5,u%7,u%11,u%13,u%17,i)
r(o,0,1,2,3,32),c(n,0,o[0]),c(n,4,o[1]),c(n,8,o[2]),c(n,12,o[3])},n.Decrypt=function(n){var t=n.slice(0,16),o=[f(t,0),f(t,4),f(t,8),f(t,12)]
r(o,0,1,2,3,32)
for(var u=0,e=h[u];v[7-u%8](o,e%5,e%7,e%11,e%13,e%17),u<31;)e=h[++u],a(o,e%5,e%7,e%11,e%13,e%17,32-u)
r(o,2,3,1,4,0),c(n,0,o[2]),c(n,4,o[3]),c(n,8,o[1]),c(n,12,o[4]),i+=16},n}
