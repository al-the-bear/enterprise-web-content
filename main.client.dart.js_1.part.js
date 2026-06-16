((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
lh(d,e,f){var x,w,v,u,t=f-e
if(t<=4096)x=$.jR()
else x=new Uint8Array(t)
for(w=J.cU(d),v=0;v<t;++v){u=w.j(d,e+v)
if((u&255)!==u)u=255
x[v]=u}return x},
lg(d,e,f,g){var x=d?$.jQ():$.jP()
if(x==null)return null
if(0===f&&g===e.length)return A.j6(x,e)
return A.j6(x,e.subarray(f,g))},
j6(d,e){var x,w
try{x=d.decode(e)
return x}catch(w){}return null},
li(d){switch(d){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
fG:function fG(){},
fF:function fF(){},
da:function da(){},
dM:function dM(){},
fa:function fa(d){this.a=d},
fE:function fE(d){this.a=d
this.b=16
this.c=0},
kO(d,e,f){var x,w
B.hM(e,"start")
x=f-e
if(x<0)throw B.d(B.ca(f,e,null,"end",null))
if(x===0)return""
w=A.kP(d,e,f)
return w},
kP(d,e,f){var x=d.length
if(e>=x)return""
return A.kF(d,e,f==null||f>x?x:f)},
kR(d){var x=y.f
return C.a.d4(B.h(d.split("&"),y.h),B.X(x,x),new A.f9(D.n),y.j)},
lf(d,e){var x,w,v,u,t
for(x=d.length,w=0,v=0;v<2;++v){u=e+v
if(!(u<x))return B.l(d,u)
t=d.charCodeAt(u)
if(48<=t&&t<=57)w=w*16+t-48
else{t|=32
if(97<=t&&t<=102)w=w*16+t-87
else throw B.d(B.aD("Invalid URL encoding",null))}}return w},
hZ(d,e,f,g,h){var x,w,v,u,t=d.length,s=e
for(;;){if(!(s<f)){x=!0
break}if(!(s<t))return B.l(d,s)
w=d.charCodeAt(s)
v=!0
if(w<=127)if(w!==37)v=w===43
if(v){x=!1
break}++s}if(x)if(D.n===g)return C.b.T(d,e,f)
else u=new B.d2(C.b.T(d,e,f))
else{u=B.h([],y.b)
for(s=e;s<f;++s){if(!(s<t))return B.l(d,s)
w=d.charCodeAt(s)
if(w>127)throw B.d(B.aD("Illegal percent encoding in URI",null))
if(w===37){if(s+3>t)throw B.d(B.aD("Truncated URI",null))
C.a.l(u,A.lf(d,s+1))
s+=2}else if(w===43)C.a.l(u,32)
else C.a.l(u,w)}}y.g.a(u)
return D.ae.cR(u)},
f9:function f9(d){this.a=d},
kf(){return new A.am(null)},
am:function am(d){this.a=d},
dU:function dU(){this.a=null},
kF(d,e,f){var x,w,v,u
if(f<=500&&e===0&&f===d.length)return String.fromCharCode.apply(null,d)
for(x=e,w="";x<f;x=v){v=x+500
u=v<f?v:f
w+=String.fromCharCode.apply(null,d.subarray(x,u))}return w},
kB(d){return new Uint8Array(d)},
mi(d){var x,w,v,u,t=C.b.bV(d,"?")?C.b.aG(d,1):d
if(t.length===0)return null
x=A.kR(t)
w=x.j(0,"module")
v=x.j(0,"path")
if(w==null||w.length===0)return null
if(v==null||v.length===0)return null
u=B.eY("[^A-Za-z0-9]+")
return"r-"+w+"--"+B.mM(v,u,"_")}},D,E,F,G
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[11]
E=c[9]
F=c[10]
G=c[8]
A.da.prototype={}
A.dM.prototype={}
A.fa.prototype={
cR(d){return new A.fE(this.a).cf(y.g.a(d),0,null,!0)}}
A.fE.prototype={
cf(d,e,f,g){var x,w,v,u,t,s,r,q=this
y.g.a(d)
x=B.hN(e,f,J.aQ(d))
if(e===x)return""
if(d instanceof Uint8Array){w=d
v=w
u=0}else{v=A.lh(d,e,x)
x-=e
u=e
e=0}if(x-e>=15){t=q.a
s=A.lg(t,v,e,x)
if(s!=null){if(!t)return s
if(s.indexOf("\ufffd")<0)return s}}s=q.aT(v,e,x,!0)
t=q.b
if((t&1)!==0){r=A.li(t)
q.b=0
throw B.d(B.hD(r,d,u+q.c))}return s},
aT(d,e,f,g){var x,w,v=this
if(f-e>1000){x=C.e.cB(e+f,2)
w=v.aT(d,e,x,!1)
if((v.b&1)!==0)return w
return w+v.aT(d,x,f,g)}return v.cU(d,e,f,g)},
cU(d,e,f,g){var x,w,v,u,t,s,r,q,p=this,o="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",n=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",m=65533,l=p.b,k=p.c,j=new B.cj(""),i=e+1,h=d.length
if(!(e>=0&&e<h))return B.l(d,e)
x=d[e]
A:for(w=p.a;;){for(;;i=t){if(!(x>=0&&x<256))return B.l(o,x)
v=o.charCodeAt(x)&31
k=l<=32?x&61694>>>v:(x&63|k<<6)>>>0
u=l+v
if(!(u>=0&&u<144))return B.l(n,u)
l=n.charCodeAt(u)
if(l===0){u=B.c8(k)
j.a+=u
if(i===f)break A
break}else if((l&1)!==0){if(w)switch(l){case 69:case 67:u=B.c8(m)
j.a+=u
break
case 65:u=B.c8(m)
j.a+=u;--i
break
default:u=B.c8(m)
j.a=(j.a+=u)+u
break}else{p.b=l
p.c=i-1
return""}l=0}if(i===f)break A
t=i+1
if(!(i>=0&&i<h))return B.l(d,i)
x=d[i]}t=i+1
if(!(i>=0&&i<h))return B.l(d,i)
x=d[i]
if(x<128){for(;;){if(!(t<f)){s=f
break}r=t+1
if(!(t>=0&&t<h))return B.l(d,t)
x=d[t]
if(x>=128){s=r-1
t=r
break}t=r}if(s-i<20)for(q=i;q<s;++q){if(!(q<h))return B.l(d,q)
u=B.c8(d[q])
j.a+=u}else{u=A.kO(d,i,s)
j.a+=u}if(s===f)break A
i=t}else i=t}if(g&&l>32)if(w){h=B.c8(m)
j.a+=h}else{p.b=77
p.c=f
return""}p.b=l
p.c=k
h=j.a
return h.charCodeAt(0)==0?h:h}}
A.am.prototype={
au(){return new A.dU()}}
A.dU.prototype={
az(){var x,w
this.bg()
x=b.G
if(B.v(B.e(B.e(x.window).location).hash).length!==0)return
w=A.mi(B.v(B.e(B.e(x.window).location).search))
if(w!=null)B.e(B.e(x.window).location).hash=w},
E(d){return G.bD(F.o,null,F.v)}}
var z=a.updateTypes([])
A.fG.prototype={
$0(){var x,w
try{x=new TextDecoder("utf-8",{fatal:true})
return x}catch(w){}return null},
$S:6}
A.fF.prototype={
$0(){var x,w
try{x=new TextDecoder("utf-8",{fatal:false})
return x}catch(w){}return null},
$S:6}
A.f9.prototype={
$2(d,e){var x,w,v,u
y.j.a(d)
B.v(e)
x=C.b.aw(e,"=")
if(x===-1){if(e!=="")d.m(0,A.hZ(e,0,e.length,this.a,!0),"")}else if(x!==0){w=C.b.T(e,0,x)
v=C.b.aG(e,x+1)
u=this.a
d.m(0,A.hZ(w,0,w.length,u,!0),A.hZ(v,0,v.length,u,!0))}return d},
$S:39};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.bJ,[A.fG,A.fF])
w(A.da,B.aU)
w(A.dM,A.da)
w(A.fa,B.bM)
w(A.fE,B.k)
w(A.f9,B.bg)
w(A.am,E.N)
w(A.dU,E.K)})()
B.bw(b.typeUniverse,JSON.parse('{"da":{"aU":["a","m<b>"]},"dM":{"aU":["a","m<b>"]},"am":{"N":[],"o":[]},"dU":{"K":["am"],"K.T":"am"}}'))
var y={h:B.C("u<a>"),b:B.C("u<b>"),g:B.C("m<b>"),j:B.C("q<a,a>"),f:B.C("a")};(function constants(){D.n=new A.dM()
D.ae=new A.fa(!1)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"n8","jR",()=>A.kB(4096))
x($,"n6","jP",()=>new A.fG().$0())
x($,"n7","jQ",()=>new A.fF().$0())})()};
(a=>{a["tcgUudC8ZRUkRMNWsWs0vQqTe1k="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
