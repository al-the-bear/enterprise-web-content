((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,B={
cT(d,e){return new B.ei(e,d,null)},
i4(d,e,f,g,h){return new B.eg(f,h,e,g,d,null)},
ek:function ek(d,e,f){this.e=d
this.w=e
this.a=f},
ei:function ei(d,e,f){this.d=d
this.w=e
this.a=f},
el:function el(d,e,f){this.e=d
this.w=e
this.a=f},
eg:function eg(d,e,f,g,h,i){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i},
eh:function eh(d,e,f,g,h){var _=this
_.d=d
_.e=e
_.w=f
_.x=g
_.a=h},
kG(d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.as(h,f,p,l,m,k,i,g,o,n,e,j,d,null)},
as:function as(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.as=n
_.at=o
_.ax=p
_.a=q},
cE:function cE(){this.a=null},
dF:function dF(d,e,f){this.c=d
this.d=e
this.a=f}},C,E,D,F,G
A=c[0]
B=a.updateHolder(c[6],B)
C=c[13]
E=c[9]
D=c[8]
F=c[14]
G=c[7]
B.ek.prototype={
E(d){var x=null
return new A.V("h4",x,x,this.e,x,x,this.w,x)}}
B.ei.prototype={
E(d){var x=null
return new A.V("div",x,this.d,x,x,x,this.w,x)}}
B.el.prototype={
E(d){var x=null
return new A.V("p",x,x,this.e,x,x,this.w,x)}}
B.eg.prototype={
E(d){var x=this,w=y.g,v=A.X(w,w),u=x.y
if(u!=null)v.A(0,u)
w=A.X(w,y.a)
w.A(0,x.z)
w.A(0,G.jw().$1$1$onClick(null,y.f))
return new A.V("button",null,x.w,x.x,v,w,x.Q,null)}}
B.eh.prototype={
E(d){var x=this,w=y.g
return new A.V("dialog",x.d,x.e,null,A.X(w,w),x.w,x.x,null)}}
B.as.prototype={
au(){return new B.cE()}}
B.cE.prototype={
cE(d){var x
A.e(d)
d.preventDefault()
d.stopPropagation()
x=A.p(A.e(b.G.document).getElementById("qi-dlg-"+this.a.d))
if(x==null)return
if(A.aK(x.open))x.close()
else x.showModal()},
cc(d){var x
A.e(d)
d.preventDefault()
d.stopPropagation()
x=A.p(A.e(b.G.document).getElementById("qi-dlg-"+this.a.d))
if(x!=null)x.close()},
cp(d){var x,w
A.e(d)
x=A.p(A.e(b.G.document).getElementById("qi-dlg-"+this.a.d))
if(x==null)return
d.preventDefault()
d.stopPropagation()
w=A.e(x.getBoundingClientRect())
if(A.E(d.clientX)<A.cQ(w.left)||A.E(d.clientX)>A.cQ(w.right)||A.E(d.clientY)<A.cQ(w.top)||A.E(d.clientY)>A.cQ(w.bottom))x.close()},
cn(d){A.e(d).preventDefault()
A.e(A.e(b.G.window).location).href=this.a.ax},
E(d){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l=y.g,k=y.a,j=A.ao(["click",n.gcD()],l,k),i=y.c
j=B.i4(A.h([new A.O("\u25be",m)],i),C.O,"chev",j,m)
x=n.a.d
w=A.ao(["click",n.gco()],l,k)
v=A.ao(["click",n.gcb()],l,k)
v=B.i4(A.h([new A.O("\u2715",m)],i),C.N,"popclose",v,m)
u=n.a
t=u.f
s=u.r
u=A.h([new A.O(u.c+" ",m)],i)
r=n.a.w
if(r!=="\u2013")u.push(D.bD(A.h([new A.O("role: "+r,m)],i),"tagrole",m))
r=n.a
q=r.d
r=r.e
r=B.cT(A.h([new A.O(q+(r.length===0?"":" \xb7 v"+r),m)],i),"mono")
q=A.h([new A.O(n.a.x,m)],i)
p=n.a
p=B.cT(A.h([n.aZ("LOC",p.y),n.aZ("Tests",p.z),n.aZ("Test LOC",p.Q)],i),"quickstats")
o=n.a
o=D.bD(A.h([new A.O(""+o.as+" docs \xb7 "+o.at+" API",m)],i),"muted",m)
k=A.ao(["click",n.gcm()],l,k)
return D.bD(A.h([j,new B.eh("qi-dlg-"+x,"pop",w,A.h([v,new B.dF(t,s,m),new B.ek(C.al,u,m),r,new B.el(C.ao,q,m),p,B.cT(A.h([o,B.i4(A.h([new A.O("More details\u2026 \u2192",m)],i),m,"morelink",k,C.ak)],i),"more")],i),m)],i),m,C.am)},
aZ(d,e){var x=y.c
return B.cT(A.h([B.cT(A.h([new A.O(d,null)],x),"k"),B.cT(A.h([new A.O(e,null)],x),"v")],x),"qs")}}
B.dF.prototype={
E(d){var x=y.c
return D.bD(A.h([D.bD(A.h([],x),"d",null),new A.O(this.d,null)],x),"badge "+this.c,null)}}
var z=a.updateTypes(["~(n)"]);(function installTearOffs(){var x=a._instance_1u
var w
x(w=B.cE.prototype,"gcD","cE",0)
x(w,"gcb","cc",0)
x(w,"gco","cp",0)
x(w,"gcm","cn",0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(E.T,[B.ek,B.ei,B.el,B.eg,B.eh,B.dF])
w(B.as,E.N)
w(B.cE,E.K)})()
A.bw(b.typeUniverse,JSON.parse('{"ek":{"T":[],"o":[]},"ei":{"T":[],"o":[]},"el":{"T":[],"o":[]},"eg":{"T":[],"o":[]},"eh":{"T":[],"o":[]},"as":{"N":[],"o":[]},"cE":{"K":["as"],"K.T":"as"},"dF":{"T":[],"o":[]}}'))
var y={p:A.C("J<a,a>"),c:A.C("u<o>"),g:A.C("a"),f:A.C("~"),a:A.C("~(n)")};(function constants(){C.p={title:0,"aria-label":1}
C.N=new A.J(C.p,["Close","Close"],y.p)
C.O=new A.J(C.p,["Quick info","Quick info"],y.p)
C.Y={color:0,"font-weight":1,"text-decoration":2,background:3,border:4,padding:5,font:6,cursor:7}
C.L=new A.J(C.Y,["var(--brand-600)","600","none","none","none","0","inherit","pointer"],y.p)
C.ak=new A.ax(null,null,null,null,C.L)
C.V={"margin-top":0}
C.M=new A.J(C.V,["10px"],y.p)
C.al=new A.ax(null,null,null,null,C.M)
C.P=new A.J(F.q,["contents"],y.p)
C.am=new A.ax(null,null,null,null,C.P)
C.U={"font-size":0,margin:1}
C.S=new A.J(C.U,[".86rem","10px 0 0"],y.p)
C.ao=new A.ax(null,null,null,null,C.S)})()};
(a=>{a["yBrUmPbEzYWkw7ukessDnyZXJwc="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_11.part.js.map
