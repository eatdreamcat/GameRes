function seededRandom(t,e,n){return e+1e6*((1711*t+88888)%302654/302654+(1722*t+55555)%302665/302665+(1755*t+23333)%302766/302766)%1e6/1e6*(n-e)}CELER_X,cc.DebugMode=cc.debug.DebugMode,CMath={},CMath.Clamp=function(t,e,n){return Math.max(Math.min(t,e),n)},CMath.Distance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},CMath.isInRange=function(t,e,n){return t.x>=e.x&&t.y>=e.y&&t.x<=n.x&&t.y<=n.y},CMath.NumberFormat=function(t){let e=t.toString().split("."),n=e[0].split("").reverse(),o="";for(let t=0;t<n.length;t++)o=n[t]+o,t%3==2&&t<n.length-1&&(o=","+o);return e[1]&&(o+="."+e[1]),o},CMath.TimeFormat=function(t){let e=Math.floor(t/60),n=Math.floor(t%60);return n<10&&(n="0"+n),e+"/"+n},CMath.randomSeed=.3004413377150996,CMath.sharedSeed=.3004413377150996,CMath.getRandom=function(t,e){const n=CMath.randomSeed,o=seededRandom(n,t=t||0,e=e||1);let r=Math.floor(seededRandom(n,1,302766));return CMath.randomSeed+=r,o},CMath.GetWorldPosition=function(t){if(!t||!t.getParent||!t.getParent())return cc.v2(0,0);return t.getParent().convertToWorldSpaceAR(t.position)},CMath.ConvertToNodeSpaceAR=function(t,e){if(!e)return cc.v2(0,0);let n=CMath.GetWorldPosition(t);return e.convertToNodeSpaceAR(n)},CMath.mat4={},CMath.mat4.mul=function(t,e,n){let o=e.m00,r=e.m01,a=e.m02,c=e.m03,m=e.m04,i=e.m05,u=e.m06,h=e.m07,d=e.m08,s=e.m09,M=e.m10,l=e.m11,g=e.m12,C=e.m13,f=e.m14,x=e.m15,p=n.m00,_=n.m01,y=n.m02,S=n.m03;return t.m00=p*o+_*m+y*d+S*g,t.m01=p*r+_*i+y*s+S*C,t.m02=p*a+_*u+y*M+S*f,t.m03=p*c+_*h+y*l+S*x,p=n.m04,_=n.m05,y=n.m06,S=n.m07,t.m04=p*o+_*m+y*d+S*g,t.m05=p*r+_*i+y*s+S*C,t.m06=p*a+_*u+y*M+S*f,t.m07=p*c+_*h+y*l+S*x,p=n.m08,_=n.m09,y=n.m10,S=n.m11,t.m08=p*o+_*m+y*d+S*g,t.m09=p*r+_*i+y*s+S*C,t.m10=p*a+_*u+y*M+S*f,t.m11=p*c+_*h+y*l+S*x,p=n.m12,_=n.m13,y=n.m14,S=n.m15,t.m12=p*o+_*m+y*d+S*g,t.m13=p*r+_*i+y*s+S*C,t.m14=p*a+_*u+y*M+S*f,t.m15=p*c+_*h+y*l+S*x,t},CMath._getBoundingBoxTo=function(t,e,n){t._updateLocalMatrix();let o=t._contentSize.width,r=t._contentSize.height,a=cc.rect(-t._anchorPoint.x*o,-t._anchorPoint.y*r,o,r);if(e=CMath.mat4.mul(t._worldMatrix,e,t._matrix),a.transformMat4(a,e),!n)return a;let c=CMath.GetBoxToWorld(n);if(!c.intersects(a))return a;let m=c.intersection(c,a);return a=CMath.rectSub(a,m)},CMath.rectSub=function(t,e){let n=t.x,o=t.y,r=(t.width,t.height),a=(e.x,e.y,e.width,e.height);return t.x=n,t.y=o+a,t.height=Math.abs(r-a),t},CMath.getBoundingBox=function(t,e){t._updateLocalMatrix();let n=t._contentSize.width,o=t._contentSize.height,r=cc.rect(-t._anchorPoint.x*n,-t._anchorPoint.y*o,n,o),a=r.transformMat4(r,t._matrix);if(!e)return a;let c=CMath.GetBoxToWorld(e);if(!c.intersects(r))return r;let m=c.intersection(c,r);return a=CMath.rectSub(a,m)},CMath.GetBoxToWorld=function(t,e){return t._parent?(t._parent._updateWorldMatrix(),CMath._getBoundingBoxTo(t,t._parent._worldMatrix,e)):CMath.getBoundingBox(t,e)},CMath.CheckNumberBit=function(t,e){return t!=e&&(t|e)<t+e},CELER_X||cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,t=>{switch(t.keyCode){case cc.macro.KEY.f11:cc.game.isPaused()?(cc.game.resume(),console.log("------------------resume-----------------")):(console.log("---------------------pause----------------------"),cc.game.pause());break;case cc.macro.KEY.f10:cc.game.isPaused()&&(console.log(" -------------- step --------------------"),cc.game.step())}}),cc.Node.prototype.setGroup=function(t){this.group!=t&&(this.group=t)},cc.Node.prototype.getGroup=function(){return this.group},CHEAT_OPEN=!CELER_X||!1;