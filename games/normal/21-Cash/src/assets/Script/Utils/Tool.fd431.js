function seededRandom(t,e,n){return e+1e6*((1711*t+88888)%302654/302654+(1722*t+55555)%302665/302665+(1755*t+23333)%302766/302766)%1e6/1e6*(n-e)}CMath={},CMath.Clamp=function(t,e,n){return Math.max(Math.min(t,e),n)},CMath.Distance=function(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))},CMath.isInRange=function(t,e,n){return t.x>=e.x&&t.y>=e.y&&t.x<=n.x&&t.y<=n.y},CMath.NumberFormat=function(t){let e=t.toString().split("."),n=e[0].split("").reverse(),o="";for(let t=0;t<n.length;t++)o=n[t]+o,t%3==2&&t<n.length-1&&(o=","+o);return e[1]&&(o+="."+e[1]),o},CMath.TimeFormat=function(t){let e=Math.floor(t/60),n=Math.floor(t%60);return n<10&&(n="0"+n),e+"/"+n},CMath.randomSeed=198,CMath.sharedSeed=198,CMath.getRandom=function(t,e){const n=CMath.randomSeed,o=seededRandom(n,t=t||0,e=e||1);let c=Math.floor(seededRandom(n,1,302766));return CMath.randomSeed+=c,o},CMath.GetWorldPosition=function(t){if(!t||!t.getParent||!t.getParent())return cc.v2(0,0);return t.getParent().convertToWorldSpaceAR(t.position)},CMath.ConvertToNodeSpaceAR=function(t,e){if(!e)return cc.v2(0,0);let n=CMath.GetWorldPosition(t);return e.convertToNodeSpaceAR(n)},CMath.mat4={},CMath.mat4.mul=function(t,e,n){let o=e.m00,c=e.m01,a=e.m02,r=e.m03,h=e.m04,i=e.m05,m=e.m06,u=e.m07,d=e.m08,_=e.m09,s=e.m10,l=e.m11,M=e.m12,C=e.m13,x=e.m14,f=e.m15,p=n.m00,N=n.m01,g=n.m02,T=n.m03;return t.m00=p*o+N*h+g*d+T*M,t.m01=p*c+N*i+g*_+T*C,t.m02=p*a+N*m+g*s+T*x,t.m03=p*r+N*u+g*l+T*f,p=n.m04,N=n.m05,g=n.m06,T=n.m07,t.m04=p*o+N*h+g*d+T*M,t.m05=p*c+N*i+g*_+T*C,t.m06=p*a+N*m+g*s+T*x,t.m07=p*r+N*u+g*l+T*f,p=n.m08,N=n.m09,g=n.m10,T=n.m11,t.m08=p*o+N*h+g*d+T*M,t.m09=p*c+N*i+g*_+T*C,t.m10=p*a+N*m+g*s+T*x,t.m11=p*r+N*u+g*l+T*f,p=n.m12,N=n.m13,g=n.m14,T=n.m15,t.m12=p*o+N*h+g*d+T*M,t.m13=p*c+N*i+g*_+T*C,t.m14=p*a+N*m+g*s+T*x,t.m15=p*r+N*u+g*l+T*f,t},CMath._getBoundingBoxTo=function(t,e,n){t._updateLocalMatrix();let o=t._contentSize.width,c=t._contentSize.height,a=cc.rect(-t._anchorPoint.x*o,-t._anchorPoint.y*c,o,c);if(e=CMath.mat4.mul(t._worldMatrix,e,t._matrix),a.transformMat4(a,e),!n)return a;let r=CMath.GetBoxToWorld(n);if(!r.intersects(a))return a;let h=r.intersection(r,a);return a=CMath.rectSub(a,h)},CMath.rectSub=function(t,e){let n=t.x,o=t.y,c=(t.width,t.height),a=(e.x,e.y,e.width,e.height);return t.x=n,t.y=o+a,t.height=Math.abs(c-a),t},CMath.getBoundingBox=function(t,e){t._updateLocalMatrix();let n=t._contentSize.width,o=t._contentSize.height,c=cc.rect(-t._anchorPoint.x*n,-t._anchorPoint.y*o,n,o),a=c.transformMat4(c,t._matrix);if(!e)return a;let r=CMath.GetBoxToWorld(e);if(!r.intersects(c))return c;let h=r.intersection(r,c);return a=CMath.rectSub(a,h)},CMath.GetBoxToWorld=function(t,e){return t._parent?(t._parent._updateWorldMatrix(),CMath._getBoundingBoxTo(t,t._parent._worldMatrix,e)):CMath.getBoundingBox(t,e)},CMath.CheckNumberBit=function(t,e){return t!=e&&(t|e)<t+e},cc.Node.maxTouchNum=1,cc.Node.touchNum=0;var __dispatchEvent__=cc.Node.prototype.dispatchEvent;cc.Node.prototype.dispatchEvent=function(t){switch(t.type){case"touchstart":cc.Node.touchNum<cc.Node.maxTouchNum&&(cc.Node.touchNum++,this._canTouch=!0,__dispatchEvent__.call(this,t));break;case"touchmove":!this._canTouch&&cc.Node.touchNum<cc.Node.maxTouchNum&&(this._canTouch=!0,cc.Node.touchNum++),this._canTouch&&__dispatchEvent__.call(this,t);break;case"touchend":case"touchcancel":this._canTouch&&(this._canTouch=!1,cc.Node.touchNum--,__dispatchEvent__.call(this,t));break;default:__dispatchEvent__.call(this,t)}},CHEAT_OPEN=!1;