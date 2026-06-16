((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,D,E,B={
jd(d){var x=null
switch(d){case!0:x="true"
break
case!1:x="false"
break
case null:case void 0:break}return x},
cV:function cV(d,e,f,g,h){var _=this
_.Q=d
_.at=e
_.ax=f
_.a=g
_.$ti=h},
hd(d,e){var x=D.b.bL(e).toLowerCase()
if(x.length===0)return!0
return D.b.U(d.toLowerCase(),x)},
kg(){return new B.an(null)},
an:function an(d){this.a=d},
cr:function cr(){this.a=null}},C,F
A=c[0]
D=c[2]
E=c[9]
B=a.updateHolder(c[4],B)
C=c[12]
F=c[7]
B.cV.prototype={
E(d){var x,w=this,v=null,u=y.g,t=A.X(u,u)
t.A(0,w.at)
x=B.jd(v)
if(x!=null)t.m(0,"checked",x)
x=B.jd(v)
if(x!=null)t.m(0,"indeterminate",x)
u=A.X(u,y.a)
u.A(0,w.ax)
u.A(0,F.jw().$1$2$onChange$onInput(v,v,w.$ti.c))
return new A.V("input",v,w.Q,v,t,u,v,v)}}
B.an.prototype={
au(){return new B.cr()}}
B.cr.prototype={
cr(d){var x=A.p(A.e(d).target)
if(x==null)x=A.e(x)
this.c9(A.v(x.value))},
c9(a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1="none",a2=A.p(A.e(b.G.document).querySelector(".treepane"))
if(a2==null)return
x=D.b.bL(a3).length!==0
w=A.e(a2.querySelectorAll(".tnode.lvl1"))
for(v=0;v<A.E(w.length);++v){u=A.p(w.item(v))
t=A.e(u.querySelectorAll(".tnode.lvl2"))
for(s=!1,r=0;r<A.E(t.length);++r){q=A.p(t.item(r))
p=A.p(q.querySelector(".row"))
o=p==null?null:A.aj(p.textContent)
n=B.hd(o==null?"":o,a3)
m=A.e(q.querySelectorAll("a.leaf"))
for(p=!n,l=n,k=0;k<A.E(m.length);++k){j=A.p(m.item(k))
j.toString
if(p){i=A.aj(j.textContent)
h=B.hd(i==null?"":i,a3)||this.c8(j,q,a3)}else h=!0
i=h?"":a1
A.e(j.style).display=i
if(h)l=!0}g=A.e(q.querySelectorAll(".tnode.tfolder"))
for(f=0;f<A.E(g.length);++f){j=A.p(g.item(f))
j.toString
e=this.ck(j)
i=e?"":a1
A.e(j.style).display=i
if(x&&e)j.setAttribute("open","")
else j.removeAttribute("open")}d=A.e(q.querySelectorAll(".tnode.lvl3"))
for(a0=0;a0<A.E(d.length);++a0){j=A.p(d.item(a0))
j.toString
if(p){i=A.aj(j.textContent)
h=B.hd(i==null?"":i,a3)}else h=!0
i=h?"":a1
A.e(j.style).display=i
if(h)l=!0}p=l?"":a1
A.e(q.style).display=p
if(x&&l)q.setAttribute("open","")
else q.removeAttribute("open")
if(l)s=!0}p=s?"":a1
A.e(u.style).display=p
if(x&&s)u.setAttribute("open","")
else u.removeAttribute("open")}},
ck(d){var x,w=A.e(d.querySelectorAll("a.leaf"))
for(x=0;x<A.E(w.length);++x)if(A.v(A.e(A.p(w.item(x)).style).display)!=="none")return!0
return!1},
c8(d,e,f){var x,w,v=A.p(d.parentElement)
for(;;){if(!(v!=null&&v!==e))break
if(A.aK(A.e(v.classList).contains("tfolder"))){x=A.p(v.querySelector(".row"))
w=x==null?null:A.aj(x.textContent)
if(B.hd(w==null?"":w,f))return!0}v=A.p(v.parentElement)}return!1},
E(d){return new B.cV("treefilter",C.K,A.ao(["input",this.gcq()],y.g,y.a),null,y.c)}}
var z=a.updateTypes(["~(n)"]);(function installTearOffs(){var x=a._instance_1u
x(B.cr.prototype,"gcq","cr",0)})();(function inheritance(){var x=a.inherit
x(B.cV,E.T)
x(B.an,E.N)
x(B.cr,E.K)})()
A.bw(b.typeUniverse,JSON.parse('{"cV":{"T":[],"o":[]},"an":{"N":[],"o":[]},"cr":{"K":["an"],"K.T":"an"}}'))
var y={g:A.C("a"),c:A.C("cV<@>"),a:A.C("~(n)")};(function constants(){C.W={type:0,placeholder:1,"aria-label":2,autocomplete:3}
C.K=new A.J(C.W,["search","Filter documents\u2026","Filter documents","off"],A.C("J<a,a>"))})()};
(a=>{a["4Ehd0gKKVk3xXOW6oY24F/lIsFA="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_7.part.js.map
