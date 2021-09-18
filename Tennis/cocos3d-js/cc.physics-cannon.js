System.register(['./deprecated-8ebd570c.js', './deprecated-a0f8be1a.js', './index-2148aab9.js', './SubContextView-456e3ed1.js', './component-event-handler-f732bf4f.js', './index-325bf510.js', './terrain-asset-6ae2f4c5.js', './util-8598c436.js', './commonjsHelpers-f5a33273.js'], function () {
    'use strict';
    var _createClass, Vec3, _classCallCheck, Quat, _inherits, _possibleConstructorReturn, _getPrototypeOf, _get, replaceProperty, TransformBit, PhysicsSystem, ERigidBodyType, EAxisDirection, SimplexCollider, select, getWrap, setWrap, maxComponent, createCommonjsModule, commonjsRequire;
    return {
        setters: [function (module) {
            _createClass = module.j;
            Vec3 = module.V;
            _classCallCheck = module.d;
            Quat = module.Q;
            _inherits = module.b;
            _possibleConstructorReturn = module.e;
            _getPrototypeOf = module.f;
            _get = module.aN;
            replaceProperty = module.ao;
        }, function (module) {
            TransformBit = module.dR;
        }, function () {}, function () {}, function () {}, function (module) {
            PhysicsSystem = module.P;
            ERigidBodyType = module.E;
            EAxisDirection = module.a;
            SimplexCollider = module.S;
            select = module.s;
        }, function () {}, function (module) {
            getWrap = module.g;
            setWrap = module.s;
            maxComponent = module.m;
        }, function (module) {
            createCommonjsModule = module.c;
            commonjsRequire = module.a;
        }],
        execute: function () {

            var cannon_min = createCommonjsModule(function (module, exports) {
            // Tue, 28 Jul 2020 10:42:59 GMT

            /*
             * Copyright (c) 2015 cannon.js Authors
             *
             * Permission is hereby granted, free of charge, to any person
             * obtaining a copy of this software and associated documentation
             * files (the "Software"), to deal in the Software without
             * restriction, including without limitation the rights to use, copy,
             * modify, merge, publish, distribute, sublicense, and/or sell copies
             * of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be
             * included in all copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
             * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
             * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
             * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
             * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
             * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
             * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
             */

            !function(t){module.exports=t();}(function(){return function n(s,r,a){function h(i,t){if(!r[i]){if(!s[i]){var e="function"==typeof commonjsRequire&&commonjsRequire;if(!t&&e)return e(i,!0);if(l)return l(i,!0);throw new Error("Cannot find module '"+i+"'")}var o=r[i]={exports:{}};s[i][0].call(o.exports,function(t){var e=s[i][1][t];return h(e||t)},o,o.exports,n,s,r,a);}return r[i].exports}for(var l="function"==typeof commonjsRequire&&commonjsRequire,t=0;t<a.length;t++)h(a[t]);return h}({1:[function(t,e,i){e.exports={name:"@cocos/cannon",version:"1.1.1-exp.4",description:"A lightweight 3D physics engine written in JavaScript.",homepage:"https://github.com/cocos-creator/cannon.js",author:"Stefan Hedman <schteppe@gmail.com> (http://steffe.se), JayceLai",keywords:["cannon.js","cocos","creator","physics","engine","3d"],scripts:{build:"grunt && npm run preprocess && grunt addLicense && grunt addDate",preprocess:"node node_modules/uglify-js/bin/uglifyjs build/cannon.js -o build/cannon.min.js -c -m"},main:"./build/cannon.min.js",engines:{node:"*"},repository:{type:"git",url:"https://github.com/cocos-creator/cannon.js.git"},bugs:{url:"https://github.com/cocos-creator/cannon.js/issues"},licenses:[{type:"MIT"}],devDependencies:{jshint:"latest","uglify-js":"latest",nodeunit:"^0.9.0",grunt:"~0.4.0","grunt-contrib-jshint":"~0.1.1","grunt-contrib-nodeunit":"^0.4.1","grunt-contrib-concat":"~0.1.3","grunt-contrib-uglify":"^0.5.1","grunt-browserify":"^2.1.4","grunt-contrib-yuidoc":"^0.5.2",browserify:"*"},dependencies:{}};},{}],2:[function(t,e,i){e.exports={version:t("../package.json").version,AABB:t("./collision/AABB"),ArrayCollisionMatrix:t("./collision/ArrayCollisionMatrix"),Body:t("./objects/Body"),Box:t("./shapes/Box"),Broadphase:t("./collision/Broadphase"),Constraint:t("./constraints/Constraint"),ContactEquation:t("./equations/ContactEquation"),Narrowphase:t("./world/Narrowphase"),ConeTwistConstraint:t("./constraints/ConeTwistConstraint"),ContactMaterial:t("./material/ContactMaterial"),ConvexPolyhedron:t("./shapes/ConvexPolyhedron"),Cylinder:t("./shapes/Cylinder"),DistanceConstraint:t("./constraints/DistanceConstraint"),Equation:t("./equations/Equation"),EventTarget:t("./utils/EventTarget"),FrictionEquation:t("./equations/FrictionEquation"),GSSolver:t("./solver/GSSolver"),GridBroadphase:t("./collision/GridBroadphase"),Heightfield:t("./shapes/Heightfield"),HingeConstraint:t("./constraints/HingeConstraint"),LockConstraint:t("./constraints/LockConstraint"),Mat3:t("./math/Mat3"),Material:t("./material/Material"),NaiveBroadphase:t("./collision/NaiveBroadphase"),ObjectCollisionMatrix:t("./collision/ObjectCollisionMatrix"),Pool:t("./utils/Pool"),Particle:t("./shapes/Particle"),Plane:t("./shapes/Plane"),PointToPointConstraint:t("./constraints/PointToPointConstraint"),Quaternion:t("./math/Quaternion"),Ray:t("./collision/Ray"),RaycastVehicle:t("./objects/RaycastVehicle"),RaycastResult:t("./collision/RaycastResult"),RigidVehicle:t("./objects/RigidVehicle"),RotationalEquation:t("./equations/RotationalEquation"),RotationalMotorEquation:t("./equations/RotationalMotorEquation"),SAPBroadphase:t("./collision/SAPBroadphase"),SPHSystem:t("./objects/SPHSystem"),Shape:t("./shapes/Shape"),Solver:t("./solver/Solver"),Sphere:t("./shapes/Sphere"),SplitSolver:t("./solver/SplitSolver"),Spring:t("./objects/Spring"),Transform:t("./math/Transform"),Trimesh:t("./shapes/Trimesh"),Vec3:t("./math/Vec3"),Vec3Pool:t("./utils/Vec3Pool"),World:t("./world/World"),Octree:t("./utils/Octree"),CMath:t("./math/CMath")};},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":10,"./collision/RaycastResult":11,"./collision/SAPBroadphase":12,"./constraints/ConeTwistConstraint":13,"./constraints/Constraint":14,"./constraints/DistanceConstraint":15,"./constraints/HingeConstraint":16,"./constraints/LockConstraint":17,"./constraints/PointToPointConstraint":18,"./equations/ContactEquation":20,"./equations/Equation":21,"./equations/FrictionEquation":22,"./equations/RotationalEquation":23,"./equations/RotationalMotorEquation":24,"./material/ContactMaterial":25,"./material/Material":26,"./math/CMath":27,"./math/Mat3":29,"./math/Quaternion":30,"./math/Transform":31,"./math/Vec3":32,"./objects/Body":33,"./objects/RaycastVehicle":34,"./objects/RigidVehicle":35,"./objects/SPHSystem":36,"./objects/Spring":37,"./shapes/Box":39,"./shapes/ConvexPolyhedron":40,"./shapes/Cylinder":41,"./shapes/Heightfield":42,"./shapes/Particle":43,"./shapes/Plane":44,"./shapes/Shape":45,"./shapes/Sphere":46,"./shapes/Trimesh":47,"./solver/GSSolver":48,"./solver/Solver":49,"./solver/SplitSolver":50,"./utils/EventTarget":51,"./utils/Octree":52,"./utils/Pool":53,"./utils/Vec3Pool":56,"./world/Narrowphase":57,"./world/World":58}],3:[function(t,e,i){var o=t("../math/Vec3");t("../utils/Utils");function n(t){t=t||{},this.lowerBound=new o,t.lowerBound&&this.lowerBound.copy(t.lowerBound),this.upperBound=new o,t.upperBound&&this.upperBound.copy(t.upperBound);}e.exports=n;var l=new o;n.prototype.setFromPoints=function(t,e,i,o){var n=this.lowerBound,s=this.upperBound,r=i;n.copy(t[0]),r&&r.vmult(n,n),s.copy(n);for(var a=1;a<t.length;a++){var h=t[a];r&&(r.vmult(h,l),h=l),h.x>s.x&&(s.x=h.x),h.x<n.x&&(n.x=h.x),h.y>s.y&&(s.y=h.y),h.y<n.y&&(n.y=h.y),h.z>s.z&&(s.z=h.z),h.z<n.z&&(n.z=h.z);}return e&&(e.vadd(n,n),e.vadd(s,s)),o&&(n.x-=o,n.y-=o,n.z-=o,s.x+=o,s.y+=o,s.z+=o),this},n.prototype.copy=function(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this},n.prototype.clone=function(){return (new n).copy(this)},n.prototype.extend=function(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z);},n.prototype.overlaps=function(t){var e=this.lowerBound,i=this.upperBound,o=t.lowerBound,n=t.upperBound,s=o.x<=i.x&&i.x<=n.x||e.x<=n.x&&n.x<=i.x,r=o.y<=i.y&&i.y<=n.y||e.y<=n.y&&n.y<=i.y,a=o.z<=i.z&&i.z<=n.z||e.z<=n.z&&n.z<=i.z;return s&&r&&a},n.prototype.volume=function(){var t=this.lowerBound,e=this.upperBound;return (e.x-t.x)*(e.y-t.y)*(e.z-t.z)},n.prototype.contains=function(t){var e=this.lowerBound,i=this.upperBound,o=t.lowerBound,n=t.upperBound;return e.x<=o.x&&i.x>=n.x&&e.y<=o.y&&i.y>=n.y&&e.z<=o.z&&i.z>=n.z},n.prototype.getCorners=function(t,e,i,o,n,s,r,a){var h=this.lowerBound,l=this.upperBound;t.copy(h),e.set(l.x,h.y,h.z),i.set(l.x,l.y,h.z),o.set(h.x,l.y,l.z),n.set(l.x,h.y,l.z),s.set(h.x,l.y,h.z),r.set(h.x,h.y,l.z),a.copy(l);};var d=[new o,new o,new o,new o,new o,new o,new o,new o];n.prototype.toLocalFrame=function(t,e){var i=d,o=i[0],n=i[1],s=i[2],r=i[3],a=i[4],h=i[5],l=i[6],p=i[7];this.getCorners(o,n,s,r,a,h,l,p);for(var c=0;8!==c;c++){var u=i[c];t.pointToLocal(u,u);}return e.setFromPoints(i)},n.prototype.toWorldFrame=function(t,e){var i=d,o=i[0],n=i[1],s=i[2],r=i[3],a=i[4],h=i[5],l=i[6],p=i[7];this.getCorners(o,n,s,r,a,h,l,p);for(var c=0;8!==c;c++){var u=i[c];t.pointToWorld(u,u);}return e.setFromPoints(i)},n.prototype.overlapsRay=function(t){var e=1/t._direction.x,i=1/t._direction.y,o=1/t._direction.z,n=(this.lowerBound.x-t.from.x)*e,s=(this.upperBound.x-t.from.x)*e,r=(this.lowerBound.y-t.from.y)*i,a=(this.upperBound.y-t.from.y)*i,h=(this.lowerBound.z-t.from.z)*o,l=(this.upperBound.z-t.from.z)*o,p=Math.max(Math.max(Math.min(n,s),Math.min(r,a)),Math.min(h,l)),c=Math.min(Math.min(Math.max(n,s),Math.max(r,a)),Math.max(h,l));return !(c<0)&&!(c<p)};},{"../math/Vec3":32,"../utils/Utils":55}],4:[function(t,e,i){function o(){this.matrix=[];}(e.exports=o).prototype.get=function(t,e){if((t=t.index)<(e=e.index)){var i=e;e=t,t=i;}return this.matrix[(t*(t+1)>>1)+e-1]},o.prototype.set=function(t,e,i){if((t=t.index)<(e=e.index)){var o=e;e=t,t=o;}this.matrix[(t*(t+1)>>1)+e-1]=i?1:0;},o.prototype.reset=function(){for(var t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0;},o.prototype.setNumObjects=function(t){this.matrix.length=t*(t-1)>>1;};},{}],5:[function(t,e,i){var o=t("../objects/Body"),n=t("../math/Vec3"),s=t("../math/Quaternion");t("../shapes/Shape"),t("../shapes/Plane");function r(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0;}(e.exports=r).prototype.collisionPairs=function(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")},r.prototype.needBroadphaseCollision=function(t,e){return 0!=(t.collisionFilterGroup&e.collisionFilterMask)&&0!=(e.collisionFilterGroup&t.collisionFilterMask)&&(!(!t.hasTrigger&&!e.hasTrigger)||(0==(t.type&o.STATIC)&&t.sleepState!==o.SLEEPING||0==(e.type&o.STATIC)&&e.sleepState!==o.SLEEPING))},r.prototype.intersectionTest=function(t,e,i,o){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,o):this.doBoundingSphereBroadphase(t,e,i,o);};var a=new n;new n,new s,new n;r.prototype.doBoundingSphereBroadphase=function(t,e,i,o){var n=a;e.position.vsub(t.position,n);var s=Math.pow(t.boundingRadius+e.boundingRadius,2);n.norm2()<s&&(i.push(t),o.push(e));},r.prototype.doBoundingBoxBroadphase=function(t,e,i,o){t.aabbNeedsUpdate&&t.computeAABB(),e.aabbNeedsUpdate&&e.computeAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),o.push(e));};var c={keys:[]},u=[],d=[];r.prototype.makePairsUnique=function(t,e){for(var i=c,o=u,n=d,s=t.length,r=0;r!==s;r++)o[r]=t[r],n[r]=e[r];t.length=0;for(r=e.length=0;r!==s;r++){var a=o[r].id,h=n[r].id;i[l=a<h?a+","+h:h+","+a]=r,i.keys.push(l);}for(r=0;r!==i.keys.length;r++){var l=i.keys.pop(),p=i[l];t.push(o[p]),e.push(n[p]),delete i[l];}},r.prototype.setWorld=function(t){};var h=new n;r.boundingSphereCheck=function(t,e){var i=h;return t.position.vsub(e.position,i),Math.pow(t.shape.boundingSphereRadius+e.shape.boundingSphereRadius,2)>i.norm2()},r.prototype.aabbQuery=function(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]};},{"../math/Quaternion":30,"../math/Vec3":32,"../objects/Body":33,"../shapes/Plane":44,"../shapes/Shape":45}],6:[function(t,e,i){e.exports=o;var a=t("./Broadphase"),h=t("../math/Vec3"),it=t("../shapes/Shape");function o(t,e,i,o,n){a.apply(this),this.nx=i||10,this.ny=o||10,this.nz=n||10,this.aabbMin=t||new h(100,100,100),this.aabbMax=e||new h(-100,-100,-100);var s=this.nx*this.ny*this.nz;if(s<=0)throw "GridBroadphase: Each dimension's n must be >0";this.bins=[],this.binLengths=[],this.bins.length=s,this.binLengths.length=s;for(var r=0;r<s;r++)this.bins[r]=[],this.binLengths[r]=0;}(o.prototype=new a).constructor=o;var ot=new h;new h;o.prototype.collisionPairs=function(t,e,i){for(var o=t.numObjects(),n=t.bodies,s=this.aabbMax,r=this.aabbMin,m=this.nx,w=this.ny,g=this.nz,x=w*g,b=g,B=1,a=s.x,h=s.y,l=s.z,A=r.x,E=r.y,S=r.z,C=m/(a-A),z=w/(h-E),M=g/(l-S),p=(a-A)/m,c=(h-E)/w,u=(l-S)/g,d=.5*Math.sqrt(p*p+c*c+u*u),v=it.types,y=v.SPHERE,f=v.PLANE,q=(v.BOX,v.COMPOUND,v.CONVEXPOLYHEDRON,this.bins),F=this.binLengths,R=this.bins.length,T=0;T!==R;T++)F[T]=0;var P=Math.ceil;r=Math.min,s=Math.max;function V(t,e,i,o,n,s,r){var a=(t-A)*C|0,h=(e-E)*z|0,l=(i-S)*M|0,p=P((o-A)*C),c=P((n-E)*z),u=P((s-S)*M);a<0?a=0:m<=a&&(a=m-1),h<0?h=0:w<=h&&(h=w-1),l<0?l=0:g<=l&&(l=g-1),p<0?p=0:m<=p&&(p=m-1),c<0?c=0:w<=c&&(c=w-1),u<0?u=0:g<=u&&(u=g-1),h*=b,l*=B,p*=x,c*=b,u*=B;for(var d=a*=x;d<=p;d+=x)for(var v=h;v<=c;v+=b)for(var y=l;y<=u;y+=B){var f=d+v+y;q[f][F[f]++]=r;}}for(T=0;T!==o;T++){var I=(tt=n[T]).shape;switch(I.type){case y:var N=tt.position.x,L=tt.position.y,W=tt.position.z,j=I.radius;V(N-j,L-j,W-j,N+j,L+j,W+j,tt);break;case f:I.worldNormalNeedsUpdate&&I.computeWorldNormal(tt.quaternion);var O=I.worldNormal,k=A+.5*p-tt.position.x,_=E+.5*c-tt.position.y,D=S+.5*u-tt.position.z,U=ot;U.set(k,_,D);for(var H=0,G=0;H!==m;H++,G+=x,U.y=_,U.x+=p)for(var X=0,Q=0;X!==w;X++,Q+=b,U.z=D,U.y+=c)for(var Y=0,K=0;Y!==g;Y++,K+=B,U.z+=u)if(U.dot(O)<d){var Z=G+Q+K;q[Z][F[Z]++]=tt;}break;default:tt.aabbNeedsUpdate&&tt.computeAABB(),V(tt.aabb.lowerBound.x,tt.aabb.lowerBound.y,tt.aabb.lowerBound.z,tt.aabb.upperBound.x,tt.aabb.upperBound.y,tt.aabb.upperBound.z,tt);}}for(T=0;T!==R;T++){var J=F[T];if(1<J){var $=q[T];for(H=0;H!==J;H++){var tt=$[H];for(X=0;X!==H;X++){var et=$[X];this.needBroadphaseCollision(tt,et)&&this.intersectionTest(tt,et,e,i);}}}}this.makePairsUnique(e,i);};},{"../math/Vec3":32,"../shapes/Shape":45,"./Broadphase":5}],7:[function(t,e,i){e.exports=s;var o=t("./Broadphase"),n=t("./AABB");function s(){o.apply(this);}((s.prototype=new o).constructor=s).prototype.collisionPairs=function(t,e,i){var o,n,s,r,a=t.bodies,h=a.length;for(o=0;o!==h;o++)for(n=0;n!==o;n++)s=a[o],r=a[n],this.needBroadphaseCollision(s,r)&&this.intersectionTest(s,r,e,i);};new n;s.prototype.aabbQuery=function(t,e,i){i=i||[];for(var o=0;o<t.bodies.length;o++){var n=t.bodies[o];n.aabbNeedsUpdate&&n.computeAABB(),n.aabb.overlaps(e)&&i.push(n);}return i};},{"./AABB":3,"./Broadphase":5}],8:[function(t,e,i){function o(){this.matrix={};}(e.exports=o).prototype.get=function(t,e){if((t=t.id)<(e=e.id)){var i=e;e=t,t=i;}return t+"-"+e in this.matrix},o.prototype.set=function(t,e,i){if((t=t.id)<(e=e.id)){var o=e;e=t,t=o;}i?this.matrix[t+"-"+e]=!0:delete this.matrix[t+"-"+e];},o.prototype.reset=function(){this.matrix={};},o.prototype.setNumObjects=function(t){};},{}],9:[function(t,e,i){function o(){this.current=[],this.previous=[];}function p(t,e){t.push((4294901760&e)>>16,65535&e);}(e.exports=o).prototype.getKey=function(t,e){if(e<t){var i=e;e=t,t=i;}return t<<16|e},o.prototype.set=function(t,e){for(var i=this.getKey(t,e),o=this.current,n=0;i>o[n];)n++;if(i!==o[n]){for(e=o.length-1;n<=e;e--)o[e+1]=o[e];o[n]=i;}},o.prototype.tick=function(){var t=this.current;this.current=this.previous,this.previous=t,this.current.length=0;},o.prototype.getDiff=function(t,e){for(var i=this.current,o=this.previous,n=i.length,s=o.length,r=0,a=0;a<n;a++){for(var h=i[a];h>o[r];)r++;h===o[r]||p(t,h);}for(a=r=0;a<s;a++){for(var l=o[a];l>i[r];)r++;i[r]===l||p(e,l);}};},{}],10:[function(t,e,i){e.exports=l;var f=t("../math/Vec3"),o=t("../math/Quaternion"),C=t("../math/Transform"),n=(t("../shapes/ConvexPolyhedron"),t("../shapes/Box"),t("../collision/RaycastResult")),s=t("../shapes/Shape"),v=t("../collision/AABB");function l(t,e){this.from=t?t.clone():new f,this.to=e?e.clone():new f,this._direction=new f,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=l.ANY,this.result=new n,this.hasHit=!1,this.callback=function(t){};}(l.prototype.constructor=l).CLOSEST=1,l.ANY=2,l.ALL=4;var r=new v,a=[];l.prototype.intersectWorld=function(t,e){return this.mode=e.mode||l.ANY,this.result=e.result||new n,this.skipBackfaces=!!e.skipBackfaces,this.checkCollisionResponse=!!e.checkCollisionResponse,this.collisionFilterMask=void 0!==e.collisionFilterMask?e.collisionFilterMask:-1,this.collisionFilterGroup=void 0!==e.collisionFilterGroup?e.collisionFilterGroup:-1,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||function(){},this.hasHit=!1,this.result.reset(),this._updateDirection(),this.getAABB(r),a.length=0,t.broadphase.aabbQuery(t,r,a),this.intersectBodies(a),this.hasHit};var c=new f,u=new f;function M(t,e,i,o){o.vsub(e,d),i.vsub(e,c),t.vsub(e,u);var n,s,r=d.dot(d),a=d.dot(c),h=d.dot(u),l=c.dot(c),p=c.dot(u);return 0<=(n=l*h-a*p)&&0<=(s=r*p-a*h)&&n+s<r*l-a*a}l.pointInTriangle=M;var h=new f,p=new o;l.prototype.intersectBody=function(t,e){e&&(this.result=e,this._updateDirection());var i=this.checkCollisionResponse;if((!i||t.collisionResponse)&&0!=(this.collisionFilterGroup&t.collisionFilterMask)&&0!=(t.collisionFilterGroup&this.collisionFilterMask))for(var o=h,n=p,s=0,r=t.shapes.length;s<r;s++){var a=t.shapes[s];if((!i||a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[s],n),t.quaternion.vmult(t.shapeOffsets[s],o),o.vadd(t.position,o),this.intersectShape(a,n,o,t),this.result._shouldStop))break}},l.prototype.intersectBodies=function(t,e){e&&(this.result=e,this._updateDirection());for(var i=0,o=t.length;!this.result._shouldStop&&i<o;i++)this.intersectBody(t[i]);},l.prototype._updateDirection=function(){this.to.vsub(this.from,this._direction),this._direction.normalize();},l.prototype.intersectShape=function(t,e,i,o){if(!(function(t,e,i){i.vsub(t,d);var o=d.dot(e);return e.mult(o,B),B.vadd(t,B),i.distanceTo(B)}(this.from,this._direction,i)>t.boundingSphereRadius)){var n=this[t.type];n&&n.call(this,t,e,i,o,t);}};new f,new f;var q=new f,F=new f,R=new f,T=new f;new f,new n;l.prototype.intersectBox=function(t,e,i,o,n){return this.intersectConvex(t.convexPolyhedronRepresentation,e,i,o,n)},l.prototype[s.types.BOX]=l.prototype.intersectBox,l.prototype.intersectPlane=function(t,e,i,o,n){var s=this.from,r=this.to,a=this._direction,h=new f(0,0,1);e.vmult(h,h);var l=new f;s.vsub(i,l);var p=l.dot(h);if(r.vsub(i,l),!(0<p*l.dot(h)||s.distanceTo(r)<p)){var c=h.dot(a);if(!(Math.abs(c)<this.precision)){var u=new f,d=new f,v=new f;s.vsub(i,u);var y=-h.dot(u)/c;a.scale(y,d),s.vadd(d,v),this.reportIntersection(h,v,n,o,-1);}}},l.prototype[s.types.PLANE]=l.prototype.intersectPlane,l.prototype.getAABB=function(t){var e=this.to,i=this.from;t.lowerBound.x=Math.min(e.x,i.x),t.lowerBound.y=Math.min(e.y,i.y),t.lowerBound.z=Math.min(e.z,i.z),t.upperBound.x=Math.max(e.x,i.x),t.upperBound.y=Math.max(e.y,i.y),t.upperBound.z=Math.max(e.z,i.z);};var y={faceList:[0]},m=new f,w=new l,g=[];l.prototype.intersectHeightfield=function(t,e,i,o,n){t.data,t.elementSize;var s=w;s.from.copy(this.from),s.to.copy(this.to),C.pointToLocalFrame(i,e,s.from,s.from),C.pointToLocalFrame(i,e,s.to,s.to),s._updateDirection();var r,a,h,l,p=g;r=a=0,h=l=t.data.length-1;var c=new v;s.getAABB(c),t.getIndexOfPosition(c.lowerBound.x,c.lowerBound.y,p,!0),r=Math.max(r,p[0]),a=Math.max(a,p[1]),t.getIndexOfPosition(c.upperBound.x,c.upperBound.y,p,!0),h=Math.min(h,p[0]+1),l=Math.min(l,p[1]+1);for(var u=r;u<h;u++)for(var d=a;d<l;d++){if(this.result._shouldStop)return;if(t.getAabbAtIndex(u,d,c),c.overlapsRay(s)){if(t.getConvexTrianglePillar(u,d,!1),C.pointToWorldFrame(i,e,t.pillarOffset,m),this.intersectConvex(t.pillarConvex,e,m,o,n,y),this.result._shouldStop)return;t.getConvexTrianglePillar(u,d,!0),C.pointToWorldFrame(i,e,t.pillarOffset,m),this.intersectConvex(t.pillarConvex,e,m,o,n,y);}}},l.prototype[s.types.HEIGHTFIELD]=l.prototype.intersectHeightfield;var x=new f,b=new f;l.prototype.intersectSphere=function(t,e,i,o,n){var s=this.from,r=this.to,a=t.radius,h=Math.pow(r.x-s.x,2)+Math.pow(r.y-s.y,2)+Math.pow(r.z-s.z,2),l=2*((r.x-s.x)*(s.x-i.x)+(r.y-s.y)*(s.y-i.y)+(r.z-s.z)*(s.z-i.z)),p=Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)-Math.pow(a,2),c=Math.pow(l,2)-4*h*p,u=x,d=b;if(!(c<0))if(0==c)s.lerp(r,c,u),u.vsub(i,d),d.normalize(),this.reportIntersection(d,u,n,o,-1);else {var v=(-l-Math.sqrt(c))/(2*h),y=(-l+Math.sqrt(c))/(2*h);if(0<=v&&v<=1&&(s.lerp(r,v,u),u.vsub(i,d),d.normalize(),this.reportIntersection(d,u,n,o,-1)),this.result._shouldStop)return;0<=y&&y<=1&&(s.lerp(r,y,u),u.vsub(i,d),d.normalize(),this.reportIntersection(d,u,n,o,-1));}},l.prototype[s.types.SPHERE]=l.prototype.intersectSphere;var P=new f,V=(new f,new f,new f);l.prototype.intersectConvex=function(t,e,i,o,n,s){for(var r=P,a=V,h=s&&s.faceList||null,l=t.faces,p=t.vertices,c=t.faceNormals,u=this._direction,d=this.from,v=this.to,y=d.distanceTo(v),f=h?h.length:l.length,m=this.result,w=0;!m._shouldStop&&w<f;w++){var g=h?h[w]:w,x=l[g],b=c[g],B=e,A=i;a.copy(p[x[0]]),B.vmult(a,a),a.vadd(A,a),a.vsub(d,a),B.vmult(b,r);var E=u.dot(r);if(!(Math.abs(E)<this.precision)){var S=r.dot(a)/E;if(!(S<0)){u.mult(S,q),q.vadd(d,q),F.copy(p[x[0]]),B.vmult(F,F),A.vadd(F,F);for(var C=1;!m._shouldStop&&C<x.length-1;C++){R.copy(p[x[C]]),T.copy(p[x[C+1]]),B.vmult(R,R),B.vmult(T,T),A.vadd(R,R),A.vadd(T,T);var z=q.distanceTo(d);!M(q,F,R,T)&&!M(q,R,F,T)||y<z||this.reportIntersection(r,q,n,o,g);}}}}},l.prototype[s.types.CONVEXPOLYHEDRON]=l.prototype.intersectConvex;var z=new f,I=new f,N=new f,L=new f,W=new f,j=new f,O=(new v,[]),k=new C;l.prototype.intersectTrimesh=function(t,e,i,o,n,s){var r=z,a=O,h=k,l=V,p=I,c=N,u=L,d=j,v=W,y=(s&&s.faceList,t.indices),f=(t.vertices,t.faceNormals,this.from),m=this.to,w=this._direction;h.position.copy(i),h.quaternion.copy(e),C.vectorToLocalFrame(i,e,w,p),C.pointToLocalFrame(i,e,f,c),C.pointToLocalFrame(i,e,m,u),u.x*=t.scale.x,u.y*=t.scale.y,u.z*=t.scale.z,c.x*=t.scale.x,c.y*=t.scale.y,c.z*=t.scale.z,u.vsub(c,p),p.normalize();var g=c.distanceSquared(u);t.tree.rayQuery(this,h,a);for(var x=0,b=a.length;!this.result._shouldStop&&x!==b;x++){var B=a[x];t.getNormal(B,r),t.getVertex(y[3*B],F),F.vsub(c,l);var A=p.dot(r),E=r.dot(l)/A;if(!(E<0)){p.scale(E,q),q.vadd(c,q),t.getVertex(y[3*B+1],R),t.getVertex(y[3*B+2],T);var S=q.distanceSquared(c);!M(q,R,F,T)&&!M(q,F,R,T)||g<S||(C.vectorToWorldFrame(e,r,v),C.pointToWorldFrame(i,e,q,d),this.reportIntersection(v,d,n,o,B));}}a.length=0;},l.prototype[s.types.TRIMESH]=l.prototype.intersectTrimesh,l.prototype.reportIntersection=function(t,e,i,o,n){var s=this.from,r=this.to,a=s.distanceTo(e),h=this.result;if(!(this.skipBackfaces&&0<t.dot(this._direction)))switch(h.hitFaceIndex=void 0!==n?n:-1,this.mode){case l.ALL:this.hasHit=!0,h.set(s,r,t,e,i,o,a),h.hasHit=!0,this.callback(h);break;case l.CLOSEST:(a<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(s,r,t,e,i,o,a));break;case l.ANY:this.hasHit=!0,h.hasHit=!0,h.set(s,r,t,e,i,o,a),h._shouldStop=!0;}};var d=new f,B=new f;},{"../collision/AABB":3,"../collision/RaycastResult":11,"../math/Quaternion":30,"../math/Transform":31,"../math/Vec3":32,"../shapes/Box":39,"../shapes/ConvexPolyhedron":40,"../shapes/Shape":45}],11:[function(t,e,i){var o=t("../math/Vec3");function n(){this.rayFromWorld=new o,this.rayToWorld=new o,this.hitNormalWorld=new o,this.hitPointWorld=new o,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1;}(e.exports=n).prototype.reset=function(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this._shouldStop=!1;},n.prototype.abort=function(){this._shouldStop=!0;},n.prototype.set=function(t,e,i,o,n,s,r){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(o),this.shape=n,this.body=s,this.distance=r;};},{"../math/Vec3":32}],12:[function(t,e,i){t("../shapes/Shape");var o=t("../collision/Broadphase");function p(t){o.apply(this),this.axisList=[],this.world=null,this.axisIndex=0;var i=this.axisList;this._addBodyHandler=function(t){i.push(t.body);},this._removeBodyHandler=function(t){var e=i.indexOf(t.body);-1!==e&&i.splice(e,1);},t&&this.setWorld(t);}((e.exports=p).prototype=new o).setWorld=function(t){for(var e=this.axisList.length=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0;},p.insertionSortX=function(t){for(var e=1,i=t.length;e<i;e++){for(var o=t[e],n=e-1;0<=n&&!(t[n].aabb.lowerBound.x<=o.aabb.lowerBound.x);n--)t[n+1]=t[n];t[n+1]=o;}return t},p.insertionSortY=function(t){for(var e=1,i=t.length;e<i;e++){for(var o=t[e],n=e-1;0<=n&&!(t[n].aabb.lowerBound.y<=o.aabb.lowerBound.y);n--)t[n+1]=t[n];t[n+1]=o;}return t},p.insertionSortZ=function(t){for(var e=1,i=t.length;e<i;e++){for(var o=t[e],n=e-1;0<=n&&!(t[n].aabb.lowerBound.z<=o.aabb.lowerBound.z);n--)t[n+1]=t[n];t[n+1]=o;}return t},p.prototype.collisionPairs=function(t,e,i){var o,n,s=this.axisList,r=s.length,a=this.axisIndex;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==r;o++){var h=s[o];for(n=o+1;n<r;n++){var l=s[n];if(this.needBroadphaseCollision(h,l)){if(!p.checkBounds(h,l,a))break;this.intersectionTest(h,l,e,i);}}}},p.prototype.sortList=function(){for(var t=this.axisList,e=this.axisIndex,i=t.length,o=0;o!==i;o++){var n=t[o];n.aabbNeedsUpdate&&n.computeAABB();}0===e?p.insertionSortX(t):1===e?p.insertionSortY(t):2===e&&p.insertionSortZ(t);},p.checkBounds=function(t,e,i){var o,n;0===i?(o=t.position.x,n=e.position.x):1===i?(o=t.position.y,n=e.position.y):2===i&&(o=t.position.z,n=e.position.z);var s=t.boundingRadius,r=e.boundingRadius;return n-r<o+s},p.prototype.autoDetectAxis=function(){for(var t=0,e=0,i=0,o=0,n=0,s=0,r=this.axisList,a=r.length,h=1/a,l=0;l!==a;l++){var p=r[l],c=p.position.x;t+=c,e+=c*c;var u=p.position.y;i+=u,o+=u*u;var d=p.position.z;n+=d,s+=d*d;}var v=e-t*t*h,y=o-i*i*h,f=s-n*n*h;this.axisIndex=y<v?f<v?0:2:f<y?1:2;},p.prototype.aabbQuery=function(t,e,i){i=i||[],this.dirty&&(this.sortList(),this.dirty=!1);var o=this.axisIndex,n="x";1===o&&(n="y"),2===o&&(n="z");for(var s=this.axisList,r=(e.lowerBound[n],e.upperBound[n],0);r<s.length;r++){var a=s[r];a.aabbNeedsUpdate&&a.computeAABB(),a.aabb.overlaps(e)&&i.push(a);}return i};},{"../collision/Broadphase":5,"../shapes/Shape":45}],13:[function(t,e,i){e.exports=o;t("./Constraint");var h=t("./PointToPointConstraint"),l=t("../equations/ConeEquation"),p=t("../equations/RotationalEquation"),c=(t("../equations/ContactEquation"),t("../math/Vec3"));function o(t,e,i){var o=void 0!==(i=i||{}).maxForce?i.maxForce:1e6,n=i.pivotA?i.pivotA.clone():new c,s=i.pivotB?i.pivotB.clone():new c;this.axisA=i.axisA?i.axisA.clone():new c,this.axisB=i.axisB?i.axisB.clone():new c,h.call(this,t,n,e,s,o),this.collideConnected=!!i.collideConnected,this.angle=void 0!==i.angle?i.angle:0;var r=this.coneEquation=new l(t,e,i),a=this.twistEquation=new p(t,e,i);this.twistAngle=void 0!==i.twistAngle?i.twistAngle:0,r.maxForce=0,r.minForce=-o,a.maxForce=0,a.minForce=-o,this.equations.push(r,a);}o.prototype=new h,o.constructor=o;new c,new c;o.prototype.update=function(){var t=this.bodyA,e=this.bodyB,i=this.coneEquation,o=this.twistEquation;h.prototype.update.call(this),t.vectorToWorldFrame(this.axisA,i.axisA),e.vectorToWorldFrame(this.axisB,i.axisB),this.axisA.tangents(o.axisA,o.axisA),t.vectorToWorldFrame(o.axisA,o.axisA),this.axisB.tangents(o.axisB,o.axisB),e.vectorToWorldFrame(o.axisB,o.axisB),i.angle=this.angle,o.maxAngle=this.twistAngle;};},{"../equations/ConeEquation":19,"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../math/Vec3":32,"./Constraint":14,"./PointToPointConstraint":18}],14:[function(t,e,i){e.exports=n;var o=t("../utils/Utils");function n(t,e,i){i=o.defaults(i,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=n.idCounter++,this.collideConnected=i.collideConnected,i.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp());}n.prototype.update=function(){throw new Error("method update() not implmemented in this Constraint subclass!")},n.prototype.enable=function(){for(var t=this.equations,e=0;e<t.length;e++)t[e].enabled=!0;},n.prototype.disable=function(){for(var t=this.equations,e=0;e<t.length;e++)t[e].enabled=!1;},n.idCounter=0;},{"../utils/Utils":55}],15:[function(t,e,i){e.exports=o;var s=t("./Constraint"),r=t("../equations/ContactEquation");function o(t,e,i,o){s.call(this,t,e),void 0===i&&(i=t.position.distanceTo(e.position)),void 0===o&&(o=1e6),this.distance=i;var n=this.distanceEquation=new r(t,e);this.equations.push(n),n.minForce=-o,n.maxForce=o;}(o.prototype=new s).update=function(){var t=this.bodyA,e=this.bodyB,i=this.distanceEquation,o=.5*this.distance,n=i.ni;e.position.vsub(t.position,n),n.normalize(),n.mult(o,i.ri),n.mult(-o,i.rj);};},{"../equations/ContactEquation":20,"./Constraint":14}],16:[function(t,e,i){e.exports=o;t("./Constraint");var l=t("./PointToPointConstraint"),p=t("../equations/RotationalEquation"),c=t("../equations/RotationalMotorEquation"),u=(t("../equations/ContactEquation"),t("../math/Vec3"));function o(t,e,i){var o=void 0!==(i=i||{}).maxForce?i.maxForce:1e6,n=i.pivotA?i.pivotA.clone():new u,s=i.pivotB?i.pivotB.clone():new u;l.call(this,t,n,e,s,o),(this.axisA=i.axisA?i.axisA.clone():new u(1,0,0)).normalize(),(this.axisB=i.axisB?i.axisB.clone():new u(1,0,0)).normalize();var r=this.rotationalEquation1=new p(t,e,i),a=this.rotationalEquation2=new p(t,e,i),h=this.motorEquation=new c(t,e,o);h.enabled=!1,this.equations.push(r,a,h);}o.prototype=new l,(o.constructor=o).prototype.enableMotor=function(){this.motorEquation.enabled=!0;},o.prototype.disableMotor=function(){this.motorEquation.enabled=!1;},o.prototype.setMotorSpeed=function(t){this.motorEquation.targetVelocity=t;},o.prototype.setMotorMaxForce=function(t){this.motorEquation.maxForce=t,this.motorEquation.minForce=-t;};var d=new u,v=new u;o.prototype.update=function(){var t=this.bodyA,e=this.bodyB,i=this.motorEquation,o=this.rotationalEquation1,n=this.rotationalEquation2,s=d,r=v,a=this.axisA,h=this.axisB;l.prototype.update.call(this),t.quaternion.vmult(a,s),e.quaternion.vmult(h,r),s.tangents(o.axisA,n.axisA),o.axisB.copy(r),n.axisB.copy(r),this.motorEquation.enabled&&(t.quaternion.vmult(this.axisA,i.axisA),e.quaternion.vmult(this.axisB,i.axisB));};},{"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../equations/RotationalMotorEquation":24,"../math/Vec3":32,"./Constraint":14,"./PointToPointConstraint":18}],17:[function(t,e,i){e.exports=o;t("./Constraint");var p=t("./PointToPointConstraint"),c=t("../equations/RotationalEquation"),u=(t("../equations/RotationalMotorEquation"),t("../equations/ContactEquation"),t("../math/Vec3"));function o(t,e,i){var o=void 0!==(i=i||{}).maxForce?i.maxForce:1e6,n=new u,s=new u,r=new u;t.position.vadd(e.position,r),r.scale(.5,r),e.pointToLocalFrame(r,s),t.pointToLocalFrame(r,n),p.call(this,t,n,e,s,o),this.xA=t.vectorToLocalFrame(u.UNIT_X),this.xB=e.vectorToLocalFrame(u.UNIT_X),this.yA=t.vectorToLocalFrame(u.UNIT_Y),this.yB=e.vectorToLocalFrame(u.UNIT_Y),this.zA=t.vectorToLocalFrame(u.UNIT_Z),this.zB=e.vectorToLocalFrame(u.UNIT_Z);var a=this.rotationalEquation1=new c(t,e,i),h=this.rotationalEquation2=new c(t,e,i),l=this.rotationalEquation3=new c(t,e,i);this.equations.push(a,h,l);}o.prototype=new p,o.constructor=o;new u,new u;o.prototype.update=function(){var t=this.bodyA,e=this.bodyB,i=(this.motorEquation,this.rotationalEquation1),o=this.rotationalEquation2,n=this.rotationalEquation3;p.prototype.update.call(this),t.vectorToWorldFrame(this.xA,i.axisA),e.vectorToWorldFrame(this.yB,i.axisB),t.vectorToWorldFrame(this.yA,o.axisA),e.vectorToWorldFrame(this.zB,o.axisB),t.vectorToWorldFrame(this.zA,n.axisA),e.vectorToWorldFrame(this.xB,n.axisB);};},{"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../equations/RotationalMotorEquation":24,"../math/Vec3":32,"./Constraint":14,"./PointToPointConstraint":18}],18:[function(t,e,i){e.exports=o;var h=t("./Constraint"),l=t("../equations/ContactEquation"),p=t("../math/Vec3");function o(t,e,i,o,n){h.call(this,t,i),n=void 0!==n?n:1e6,this.pivotA=e?e.clone():new p,this.pivotB=o?o.clone():new p;var s=this.equationX=new l(t,i),r=this.equationY=new l(t,i),a=this.equationZ=new l(t,i);this.equations.push(s,r,a),s.minForce=r.minForce=a.minForce=-n,s.maxForce=r.maxForce=a.maxForce=n,s.ni.set(1,0,0),r.ni.set(0,1,0),a.ni.set(0,0,1);}(o.prototype=new h).update=function(){var t=this.bodyA,e=this.bodyB,i=this.equationX,o=this.equationY,n=this.equationZ;t.quaternion.vmult(this.pivotA,i.ri),e.quaternion.vmult(this.pivotB,i.rj),o.ri.copy(i.ri),o.rj.copy(i.rj),n.ri.copy(i.ri),n.rj.copy(i.rj);};},{"../equations/ContactEquation":20,"../math/Vec3":32,"./Constraint":14}],19:[function(t,e,i){e.exports=o;var n=t("../math/Vec3"),s=(t("../math/Mat3"),t("./Equation")),l=t("../math/CMath");function o(t,e,i){var o=void 0!==(i=i||{}).maxForce?i.maxForce:1e6;s.call(this,t,e,-o,o),this.axisA=i.axisA?i.axisA.clone():new n(1,0,0),this.axisB=i.axisB?i.axisB.clone():new n(0,1,0),this.angle=void 0!==i.angle?i.angle:0;}(o.prototype=new s).constructor=o;var p=new n,c=new n;o.prototype.computeB=function(t){var e=this.a,i=this.b,o=this.axisA,n=this.axisB,s=p,r=c,a=this.jacobianElementA,h=this.jacobianElementB;return o.cross(n,s),n.cross(o,r),a.rotational.copy(r),h.rotational.copy(s),-(l.cos(this.angle)-o.dot(n))*e-this.computeGW()*i-t*this.computeGiMf()};},{"../math/CMath":27,"../math/Mat3":29,"../math/Vec3":32,"./Equation":21}],20:[function(t,e,i){e.exports=s;var o=t("./Equation"),n=t("../math/Vec3");t("../math/Mat3");function s(t,e,i){i=void 0!==i?i:1e6,o.call(this,t,e,0,i),this.si=null,this.sj=null,this.restitution=0,this.ri=new n,this.rj=new n,this.ni=new n;}(s.prototype=new o).constructor=s;var g=new n,x=new n,b=new n;s.prototype.computeB=function(t){var e=this.a,i=this.b,o=this.bi,n=this.bj,s=this.ri,r=this.rj,a=g,h=x,l=o.velocity,p=o.angularVelocity,c=(o.force,o.torque,n.velocity),u=n.angularVelocity,d=(n.force,n.torque,b),v=this.jacobianElementA,y=this.jacobianElementB,f=this.ni;s.cross(f,a),r.cross(f,h),f.negate(v.spatial),a.negate(v.rotational),y.spatial.copy(f),y.rotational.copy(h),d.copy(n.position),d.vadd(r,d),d.vsub(o.position,d),d.vsub(s,d);var m=f.dot(d),w=this.restitution+1;return -m*e-(w*c.dot(f)-w*l.dot(f)+u.dot(h)-p.dot(a))*i-t*this.computeGiMf()};var r=new n,a=new n,h=new n,l=new n,p=new n;s.prototype.getImpactVelocityAlongNormal=function(){var t=r,e=a,i=h,o=l,n=p;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,o),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(o,e),t.vsub(e,n),this.ni.dot(n)};},{"../math/Mat3":29,"../math/Vec3":32,"./Equation":21}],21:[function(t,e,i){e.exports=s;var n=t("../math/JacobianElement"),o=t("../math/Vec3");function s(t,e,i,o){this.id=s.id++,this.minForce=void 0===i?-1e6:i,this.maxForce=void 0===o?1e6:o,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new n,this.jacobianElementB=new n,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60);}(s.prototype.constructor=s).id=0,s.prototype.setSpookParams=function(t,e,i){var o=e,n=t,s=i;this.a=4/(s*(1+4*o)),this.b=4*o/(1+4*o),this.eps=4/(s*s*n*(1+4*o));},s.prototype.computeB=function(t,e,i){var o=this.computeGW();return -this.computeGq()*t-o*e-this.computeGiMf()*i},s.prototype.computeGq=function(){var t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,o=this.bj,n=i.position,s=o.position;return t.spatial.dot(n)+e.spatial.dot(s)};new o;s.prototype.computeGW=function(){var t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,o=this.bj,n=i.velocity,s=o.velocity,r=i.angularVelocity,a=o.angularVelocity;return t.multiplyVectors(n,r)+e.multiplyVectors(s,a)},s.prototype.computeGWlambda=function(){var t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,o=this.bj,n=i.vlambda,s=o.vlambda,r=i.wlambda,a=o.wlambda;return t.multiplyVectors(n,r)+e.multiplyVectors(s,a)};var p=new o,c=new o,u=new o,d=new o;s.prototype.computeGiMf=function(){var t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,o=this.bj,n=i.force,s=i.torque,r=o.force,a=o.torque,h=i.invMassSolve,l=o.invMassSolve;return n.scale(h,p),r.scale(l,c),i.invInertiaWorldSolve.vmult(s,u),o.invInertiaWorldSolve.vmult(a,d),t.multiplyVectors(p,u)+e.multiplyVectors(c,d)};var l=new o;s.prototype.computeGiMGt=function(){var t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,o=this.bj,n=i.invMassSolve,s=o.invMassSolve,r=i.invInertiaWorldSolve,a=o.invInertiaWorldSolve,h=n+s;return r.vmult(t.rotational,l),h+=l.dot(t.rotational),a.vmult(e.rotational,l),h+=l.dot(e.rotational)};var r=new o;new o,new o,new o,new o,new o;s.prototype.addToWlambda=function(t){var e=this.jacobianElementA,i=this.jacobianElementB,o=this.bi,n=this.bj,s=r;o.vlambda.addScaledVector(o.invMassSolve*t,e.spatial,o.vlambda),n.vlambda.addScaledVector(n.invMassSolve*t,i.spatial,n.vlambda),o.invInertiaWorldSolve.vmult(e.rotational,s),o.wlambda.addScaledVector(t,s,o.wlambda),n.invInertiaWorldSolve.vmult(i.rotational,s),n.wlambda.addScaledVector(t,s,n.wlambda);},s.prototype.computeC=function(){return this.computeGiMGt()+this.eps};},{"../math/JacobianElement":28,"../math/Vec3":32}],22:[function(t,e,i){e.exports=s;var o=t("./Equation"),n=t("../math/Vec3");t("../math/Mat3");function s(t,e,i){o.call(this,t,e,-i,i),this.ri=new n,this.rj=new n,this.t=new n;}(s.prototype=new o).constructor=s;var l=new n,p=new n;s.prototype.computeB=function(t){this.a;var e=this.b,i=(this.bi,this.bj,this.ri),o=this.rj,n=l,s=p,r=this.t;i.cross(r,n),o.cross(r,s);var a=this.jacobianElementA,h=this.jacobianElementB;return r.negate(a.spatial),n.negate(a.rotational),h.spatial.copy(r),h.rotational.copy(s),-this.computeGW()*e-t*this.computeGiMf()};},{"../math/Mat3":29,"../math/Vec3":32,"./Equation":21}],23:[function(t,e,i){e.exports=o;var n=t("../math/Vec3"),s=(t("../math/Mat3"),t("./Equation")),l=t("../math/CMath");function o(t,e,i){var o=void 0!==(i=i||{}).maxForce?i.maxForce:1e6;s.call(this,t,e,-o,o),this.axisA=i.axisA?i.axisA.clone():new n(1,0,0),this.axisB=i.axisB?i.axisB.clone():new n(0,1,0),this.maxAngle=Math.PI/2;}(o.prototype=new s).constructor=o;var p=new n,c=new n;o.prototype.computeB=function(t){var e=this.a,i=this.b,o=this.axisA,n=this.axisB,s=p,r=c,a=this.jacobianElementA,h=this.jacobianElementB;return o.cross(n,s),n.cross(o,r),a.rotational.copy(r),h.rotational.copy(s),-(l.cos(this.maxAngle)-o.dot(n))*e-this.computeGW()*i-t*this.computeGiMf()};},{"../math/CMath":27,"../math/Mat3":29,"../math/Vec3":32,"./Equation":21}],24:[function(t,e,i){e.exports=s;var o=t("../math/Vec3"),n=(t("../math/Mat3"),t("./Equation"));function s(t,e,i){i=void 0!==i?i:1e6,n.call(this,t,e,-i,i),this.axisA=new o,this.axisB=new o,this.targetVelocity=0;}((s.prototype=new n).constructor=s).prototype.computeB=function(t){this.a;var e=this.b,i=(this.bi,this.bj,this.axisA),o=this.axisB,n=this.jacobianElementA,s=this.jacobianElementB;return n.rotational.copy(i),o.negate(s.rotational),-(this.computeGW()-this.targetVelocity)*e-t*this.computeGiMf()};},{"../math/Mat3":29,"../math/Vec3":32,"./Equation":21}],25:[function(t,e,i){var o=t("../utils/Utils");function n(t,e,i){i=o.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=n.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation;}(e.exports=n).idCounter=0;},{"../utils/Utils":55}],26:[function(t,e,i){function o(t){var e="";"string"==typeof(t=t||{})?(e=t,t={}):"object"==typeof t&&(e=""),this.name=e,this.id=o.idCounter++,this.friction=void 0!==t.friction?t.friction:-1,this.restitution=void 0!==t.restitution?t.restitution:-1;}(e.exports=o).idCounter=0;},{}],27:[function(t,e,i){var o=180/Math.PI;function n(t){return t*o}var s={};function r(t){if(s.digit!=t){for(var e=1/Math.pow(10,t),i=0;i<=90;i+=e)s[i.toFixed(t)]=Math.sin(i/o);s.digit=t;}}function a(t,e){return t<=90?s[t.toFixed(e)]:t<=180?s[(t=180-t).toFixed(e)]:t<=270?-s[(t-=180).toFixed(e)]:-s[(t=360-t).toFixed(e)]}function h(t){var e=n(t)%360;return e<0&&(e+=360),a(e,u._digit)}function l(t){var e=(n(t)+90)%360;return e<0&&(e+=360),a(e,u._digit)}function p(t){return Math.sin(t).toFixed(u.digit)}function c(t){return Math.cos(t).toFixed(u.digit)}var u={sin:Math.sin,cos:Math.cos,atan2:Math.atan2};u._sin=h,u._cos=l,u._sinArr=s,u._sin360=a,u._sinNative=p,u._cosNative=c,u._radian2angle=n,u._calculateSinByDigit=r,u._digit=1,Object.defineProperty(u,"digit",{get:function(){return this._digit},set:function(t){this._digit=t,1==this._mode&&r(t);}}),u._mode=0,Object.defineProperty(u,"mode",{get:function(){return this._mode},set:function(t){this._mode!=t&&(0==(this._mode=t)?(u.sin=Math.sin,u.cos=Math.cos):1==t?(u.digit=u._digit,u.sin=h,u.cos=l):2==t&&(u.sin=p,u.cos=c));}}),e.exports=u;},{}],28:[function(t,e,i){e.exports=n;var o=t("./Vec3");function n(){this.spatial=new o,this.rotational=new o;}n.prototype.multiplyElement=function(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)},n.prototype.multiplyVectors=function(t,e){return t.dot(this.spatial)+e.dot(this.rotational)};},{"./Vec3":32}],29:[function(t,e,i){e.exports=l;var p=t("./Vec3");function l(t){this.elements=t||[0,0,0,0,0,0,0,0,0];}l.prototype.identity=function(){var t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1;},l.prototype.setZero=function(){var t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0;},l.prototype.setTrace=function(t){var e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z;},l.prototype.getTrace=function(t){t=t||new p;var e=this.elements;t.x=e[0],t.y=e[4],t.z=e[8];},l.prototype.vmult=function(t,e){e=e||new p;var i=this.elements,o=t.x,n=t.y,s=t.z;return e.x=i[0]*o+i[1]*n+i[2]*s,e.y=i[3]*o+i[4]*n+i[5]*s,e.z=i[6]*o+i[7]*n+i[8]*s,e},l.prototype.smult=function(t){for(var e=0;e<this.elements.length;e++)this.elements[e]*=t;},l.prototype.mmult=function(t,e){for(var i=e||new l,o=0;o<3;o++)for(var n=0;n<3;n++){for(var s=0,r=0;r<3;r++)s+=t.elements[o+3*r]*this.elements[r+3*n];i.elements[o+3*n]=s;}return i},l.prototype.scale=function(t,e){e=e||new l;for(var i=this.elements,o=e.elements,n=0;3!==n;n++)o[3*n+0]=t.x*i[3*n+0],o[3*n+1]=t.y*i[3*n+1],o[3*n+2]=t.z*i[3*n+2];return e},l.prototype.solve=function(t,e){e=e||new p;for(var i,o=[],n=0;n<12;n++)o.push(0);for(n=0;n<3;n++)for(i=0;i<3;i++)o[n+4*i]=this.elements[n+3*i];o[3]=t.x,o[7]=t.y,o[11]=t.z;var s,r,a=3,h=a;do{if(0===o[(n=h-a)+4*n])for(i=n+1;i<h;i++)if(0!==o[n+4*i]){for(s=4;o[(r=4-s)+4*n]+=o[r+4*i],--s;);break}if(0!==o[n+4*n])for(i=n+1;i<h;i++){var l=o[n+4*i]/o[n+4*n];for(s=4;o[(r=4-s)+4*i]=r<=n?0:o[r+4*i]-o[r+4*n]*l,--s;);}}while(--a);if(e.z=o[11]/o[10],e.y=(o[7]-o[6]*e.z)/o[5],e.x=(o[3]-o[2]*e.z-o[1]*e.y)/o[0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw "Could not solve equation! Got x=["+e.toString()+"], b=["+t.toString()+"], A=["+this.toString()+"]";return e},l.prototype.e=function(t,e,i){if(void 0===i)return this.elements[e+3*t];this.elements[e+3*t]=i;},l.prototype.copy=function(t){for(var e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this},l.prototype.toString=function(){for(var t="",e=0;e<9;e++)t+=this.elements[e]+",";return t},l.prototype.reverse=function(t){t=t||new l;for(var e,i=[],o=0;o<18;o++)i.push(0);for(o=0;o<3;o++)for(e=0;e<3;e++)i[o+6*e]=this.elements[o+3*e];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;var n,s,r=3,a=r;do{if(0===i[(o=a-r)+6*o])for(e=o+1;e<a;e++)if(0!==i[o+6*e]){for(n=6;i[(s=6-n)+6*o]+=i[s+6*e],--n;);break}if(0!==i[o+6*o])for(e=o+1;e<a;e++){var h=i[o+6*e]/i[o+6*o];for(n=6;i[(s=6-n)+6*e]=s<=o?0:i[s+6*e]-i[s+6*o]*h,--n;);}}while(--r);o=2;do{e=o-1;do{h=i[o+6*e]/i[o+6*o];for(n=6;i[(s=6-n)+6*e]=i[s+6*e]-i[s+6*o]*h,--n;);}while(e--)}while(--o);o=2;do{h=1/i[o+6*o];for(n=6;i[(s=6-n)+6*o]=i[s+6*o]*h,--n;);}while(o--);o=2;do{e=2;do{if(s=i[3+e+6*o],isNaN(s)||s===1/0)throw "Could not reverse! A=["+this.toString()+"]";t.e(o,e,s);}while(e--)}while(o--);return t},l.prototype.setRotationFromQuaternion=function(t){var e=t.x,i=t.y,o=t.z,n=t.w,s=e+e,r=i+i,a=o+o,h=e*s,l=e*r,p=e*a,c=i*r,u=i*a,d=o*a,v=n*s,y=n*r,f=n*a,m=this.elements;return m[0]=1-(c+d),m[1]=l-f,m[2]=p+y,m[3]=l+f,m[4]=1-(h+d),m[5]=u-v,m[6]=p-y,m[7]=u+v,m[8]=1-(h+c),this},l.prototype.transpose=function(t){for(var e=(t=t||new l).elements,i=this.elements,o=0;3!==o;o++)for(var n=0;3!==n;n++)e[3*o+n]=i[3*n+o];return t};},{"./Vec3":32}],30:[function(t,e,i){e.exports=m;var d=t("./Vec3"),f=t("./CMath");function m(t,e,i,o){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0,this.z=void 0!==i?i:0,this.w=void 0!==o?o:1;}m.prototype.set=function(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this},m.prototype.toString=function(){return this.x+","+this.y+","+this.z+","+this.w},m.prototype.toArray=function(){return [this.x,this.y,this.z,this.w]},m.prototype.setFromAxisAngle=function(t,e){var i=f.sin(.5*e);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=f.cos(.5*e),this},m.prototype.toAxisAngle=function(t){t=t||new d,this.normalize();var e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]};var s=new d,r=new d;m.prototype.setFromVectors=function(t,e){if(t.isAntiparallelTo(e)){var i=s,o=r;t.tangents(i,o),this.setFromAxisAngle(i,Math.PI);}else {var n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(Math.pow(t.norm(),2)*Math.pow(e.norm(),2))+t.dot(e),this.normalize();}return this};new d,new d,new d;m.prototype.mult=function(t,e){e=e||new m;var i=this.x,o=this.y,n=this.z,s=this.w,r=t.x,a=t.y,h=t.z,l=t.w;return e.x=i*l+s*r+o*h-n*a,e.y=o*l+s*a+n*r-i*h,e.z=n*l+s*h+i*a-o*r,e.w=s*l-i*r-o*a-n*h,e},m.prototype.inverse=function(t){var e=this.x,i=this.y,o=this.z,n=this.w;t=t||new m,this.conjugate(t);var s=1/(e*e+i*i+o*o+n*n);return t.x*=s,t.y*=s,t.z*=s,t.w*=s,t},m.prototype.conjugate=function(t){return (t=t||new m).x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t},m.prototype.normalize=function(){var t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return 0===t?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this},m.prototype.normalizeFast=function(){var t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return 0==t?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this},m.prototype.vmult=function(t,e){e=e||new d;var i=t.x,o=t.y,n=t.z,s=this.x,r=this.y,a=this.z,h=this.w,l=h*i+r*n-a*o,p=h*o+a*i-s*n,c=h*n+s*o-r*i,u=-s*i-r*o-a*n;return e.x=l*h+u*-s+p*-a-c*-r,e.y=p*h+u*-r+c*-s-l*-a,e.z=c*h+u*-a+l*-r-p*-s,e},m.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this},m.prototype.toEuler=function(t,e){var i,o,n;e=e||"YZX";var s=this.x,r=this.y,a=this.z,h=this.w;switch(e){case"YZX":var l=s*r+a*h;if(.499<l&&(i=2*f.atan2(s,h),o=Math.PI/2,n=0),l<-.499&&(i=-2*f.atan2(s,h),o=-Math.PI/2,n=0),isNaN(i)){var p=s*s,c=r*r,u=a*a;i=f.atan2(2*r*h-2*s*a,1-2*c-2*u),o=Math.asin(2*l),n=f.atan2(2*s*h-2*r*a,1-2*p-2*u);}break;default:throw new Error("Euler order "+e+" not supported yet.")}t.y=i,t.z=o,t.x=n;},m.prototype.setFromEuler=function(t,e,i,o){o=o||"XYZ";var n=f.cos(t/2),s=f.cos(e/2),r=f.cos(i/2),a=f.sin(t/2),h=f.sin(e/2),l=f.sin(i/2);return "XYZ"===o?(this.x=a*s*r+n*h*l,this.y=n*h*r-a*s*l,this.z=n*s*l+a*h*r,this.w=n*s*r-a*h*l):"YXZ"===o?(this.x=a*s*r+n*h*l,this.y=n*h*r-a*s*l,this.z=n*s*l-a*h*r,this.w=n*s*r+a*h*l):"ZXY"===o?(this.x=a*s*r-n*h*l,this.y=n*h*r+a*s*l,this.z=n*s*l+a*h*r,this.w=n*s*r-a*h*l):"ZYX"===o?(this.x=a*s*r-n*h*l,this.y=n*h*r+a*s*l,this.z=n*s*l-a*h*r,this.w=n*s*r+a*h*l):"YZX"===o?(this.x=a*s*r+n*h*l,this.y=n*h*r+a*s*l,this.z=n*s*l-a*h*r,this.w=n*s*r-a*h*l):"XZY"===o&&(this.x=a*s*r-n*h*l,this.y=n*h*r-a*s*l,this.z=n*s*l+a*h*r,this.w=n*s*r+a*h*l),this},m.prototype.clone=function(){return new m(this.x,this.y,this.z,this.w)},m.prototype.slerp=function(t,e,i){i=i||new m;var o,n,s,r,a,h=this.x,l=this.y,p=this.z,c=this.w,u=t.x,d=t.y,v=t.z,y=t.w;return (n=h*u+l*d+p*v+c*y)<0&&(n=-n,u=-u,d=-d,v=-v,y=-y),a=1e-6<1-n?(o=Math.acos(n),s=f.sin(o),r=f.sin((1-e)*o)/s,f.sin(e*o)/s):(r=1-e,e),i.x=r*h+a*u,i.y=r*l+a*d,i.z=r*p+a*v,i.w=r*c+a*y,i},m.prototype.integrate=function(t,e,i,o){o=o||new m;var n=t.x*i.x,s=t.y*i.y,r=t.z*i.z,a=this.x,h=this.y,l=this.z,p=this.w,c=.5*e;return o.x+=c*(n*p+s*l-r*h),o.y+=c*(s*p+r*a-n*l),o.z+=c*(r*p+n*h-s*a),o.w+=c*(-n*a-s*h-r*l),o};},{"./CMath":27,"./Vec3":32}],31:[function(t,e,i){var n=t("./Vec3"),o=t("./Quaternion");function s(t){t=t||{},this.position=new n,t.position&&this.position.copy(t.position),this.quaternion=new o,t.quaternion&&this.quaternion.copy(t.quaternion);}e.exports=s;var r=new o;s.pointToLocalFrame=function(t,e,i,o){o=o||new n;return i.vsub(t,o),e.conjugate(r),r.vmult(o,o),o},s.prototype.pointToLocal=function(t,e){return s.pointToLocalFrame(this.position,this.quaternion,t,e)},s.pointToWorldFrame=function(t,e,i,o){o=o||new n;return e.vmult(i,o),o.vadd(t,o),o},s.prototype.pointToWorld=function(t,e){return s.pointToWorldFrame(this.position,this.quaternion,t,e)},s.prototype.vectorToWorldFrame=function(t,e){e=e||new n;return this.quaternion.vmult(t,e),e},s.vectorToWorldFrame=function(t,e,i){return t.vmult(e,i),i},s.vectorToLocalFrame=function(t,e,i,o){o=o||new n;return e.w*=-1,e.vmult(i,o),e.w*=-1,o};},{"./Quaternion":30,"./Vec3":32}],32:[function(t,e,i){e.exports=h;var o=t("./Mat3");function h(t,e,i){this.x=t||0,this.y=e||0,this.z=i||0;}h.ZERO=new h(0,0,0),h.UNIT_X=new h(1,0,0),h.UNIT_Y=new h(0,1,0),h.UNIT_Z=new h(0,0,1),h.prototype.cross=function(t,e){var i=t.x,o=t.y,n=t.z,s=this.x,r=this.y,a=this.z;return (e=e||new h).x=r*n-a*o,e.y=a*i-s*n,e.z=s*o-r*i,e},h.prototype.set=function(t,e,i){return this.x=t,this.y=e,this.z=i,this},h.prototype.setZero=function(){this.x=this.y=this.z=0;},h.prototype.vadd=function(t,e){if(!e)return new h(this.x+t.x,this.y+t.y,this.z+t.z);e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;},h.prototype.vsub=function(t,e){if(!e)return new h(this.x-t.x,this.y-t.y,this.z-t.z);e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;},h.prototype.crossmat=function(){return new o([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])},h.prototype.normalize=function(){var t=this.x,e=this.y,i=this.z,o=Math.sqrt(t*t+e*e+i*i);if(0<o){var n=1/o;this.x*=n,this.y*=n,this.z*=n;}else this.x=0,this.y=0,this.z=0;return o},h.prototype.unit=function(t){t=t||new h;var e=this.x,i=this.y,o=this.z,n=Math.sqrt(e*e+i*i+o*o);return 0<n?(n=1/n,t.x=e*n,t.y=i*n,t.z=o*n):(t.x=1,t.y=0,t.z=0),t},h.prototype.length=h.prototype.norm=function(){var t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)},h.prototype.lengthSquared=h.prototype.norm2=function(){return this.dot(this)},h.prototype.distanceTo=function(t){var e=this.x,i=this.y,o=this.z,n=t.x,s=t.y,r=t.z;return Math.sqrt((n-e)*(n-e)+(s-i)*(s-i)+(r-o)*(r-o))},h.prototype.distanceSquared=function(t){var e=this.x,i=this.y,o=this.z,n=t.x,s=t.y,r=t.z;return (n-e)*(n-e)+(s-i)*(s-i)+(r-o)*(r-o)},h.prototype.mult=function(t,e){e=e||new h;var i=this.x,o=this.y,n=this.z;return e.x=t*i,e.y=t*o,e.z=t*n,e},h.prototype.vmul=function(t,e){return (e=e||new h).x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e},h.prototype.scale=h.prototype.mult,h.prototype.addScaledVector=function(t,e,i){return (i=i||new h).x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i},h.prototype.dot=function(t){return this.x*t.x+this.y*t.y+this.z*t.z},h.prototype.isZero=function(){return 0===this.x&&0===this.y&&0===this.z},h.prototype.negate=function(t){return (t=t||new h).x=-this.x,t.y=-this.y,t.z=-this.z,t};var r=new h,a=new h;h.prototype.tangents=function(t,e){var i=this.norm();if(0<i){var o=r,n=1/i;o.set(this.x*n,this.y*n,this.z*n);var s=a;Math.abs(o.x)<.9?s.set(1,0,0):s.set(0,1,0),o.cross(s,t),o.cross(t,e);}else t.set(1,0,0),e.set(0,1,0);},h.prototype.toString=function(){return this.x+","+this.y+","+this.z},h.prototype.toArray=function(){return [this.x,this.y,this.z]},h.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.z=t.z,this},h.prototype.lerp=function(t,e,i){var o=this.x,n=this.y,s=this.z;i.x=o+(t.x-o)*e,i.y=n+(t.y-n)*e,i.z=s+(t.z-s)*e;},h.prototype.almostEquals=function(t,e){return void 0===e&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)},h.prototype.almostZero=function(t){return void 0===t&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)};var n=new h;h.prototype.isAntiparallelTo=function(t,e){return this.negate(n),n.almostEquals(t,e)},h.prototype.clone=function(){return new h(this.x,this.y,this.z)};},{"./Mat3":29}],33:[function(t,e,i){e.exports=w;var o=t("../utils/EventTarget"),s=(t("../shapes/Shape"),t("../math/Vec3")),n=t("../math/Mat3"),r=t("../math/Quaternion"),a=(t("../material/Material"),t("../collision/AABB")),h=t("../shapes/Box"),l=t("../world/World");function w(t){t=t||{},o.apply(this),this.id=w.idCounter++,this.world=null,this.preStep=null,this.postStep=null,this.vlambda=new s,this.collisionFilterGroup="number"==typeof t.collisionFilterGroup?t.collisionFilterGroup:1,this.collisionFilterMask="number"==typeof t.collisionFilterMask?t.collisionFilterMask:-1,this.collisionResponse=!0,this.position=new s,this.previousPosition=new s,this.interpolatedPosition=new s,this.initPosition=new s,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new s,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new s,this.force=new s;var e="number"==typeof t.mass?t.mass:0;this.mass=e,this.invMass=0<e?1/e:0,this.material=t.material||null,this.linearDamping="number"==typeof t.linearDamping?t.linearDamping:.01,this.type=e<=0?w.STATIC:w.DYNAMIC,typeof t.type==typeof w.STATIC&&(this.type=t.type),this.allowSleep=void 0===t.allowSleep||t.allowSleep,this.sleepState=0,this.sleepSpeedLimit=void 0!==t.sleepSpeedLimit?t.sleepSpeedLimit:.1,this.sleepTimeLimit=void 0!==t.sleepTimeLimit?t.sleepTimeLimit:1,this.timeLastSleepy=0,this._wakeUpAfterNarrowphase=!1,this.torque=new s,this.quaternion=new r,this.initQuaternion=new r,this.previousQuaternion=new r,this.interpolatedQuaternion=new r,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new s,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new s,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new s,this.invInertia=new s,this.invInertiaWorld=new n,this.invMassSolve=0,this.invInertiaSolve=new s,this.invInertiaWorldSolve=new n,this.fixedRotation=void 0!==t.fixedRotation&&t.fixedRotation,this.useGravity=!0,this.angularDamping=void 0!==t.angularDamping?t.angularDamping:.01,this.linearFactor=new s(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new s(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new a,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new s,t.shape&&this.addShape(t.shape),this.hasTrigger=!0,this.updateMassProperties();}((w.prototype=new o).constructor=w).COLLIDE_EVENT_NAME="collide",w.DYNAMIC=1,w.STATIC=2,w.KINEMATIC=4,w.AWAKE=0,w.SLEEPY=1,w.SLEEPING=2,w.idCounter=0,w.wakeupEvent={type:"wakeup"},w.prototype.wakeUp=function(){var t=this.sleepState;this.sleepState=0,this._wakeUpAfterNarrowphase=!1,t===w.SLEEPING&&this.dispatchEvent(w.wakeupEvent);},w.prototype.sleep=function(){this.sleepState=w.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this._wakeUpAfterNarrowphase=!1;},w.sleepyEvent={type:"sleepy"},w.sleepEvent={type:"sleep"},w.prototype.sleepTick=function(t){if(this.allowSleep){var e=this.sleepState,i=this.velocity.norm2()+this.angularVelocity.norm2(),o=Math.pow(this.sleepSpeedLimit,2);e===w.AWAKE&&i<o?(this.sleepState=w.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(w.sleepyEvent)):e===w.SLEEPY&&o<i?this.wakeUp():e===w.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(w.sleepEvent));}},w.prototype.updateSolveMassProperties=function(){this.sleepState===w.SLEEPING||this.type===w.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld));},w.prototype.pointToLocalFrame=function(t,e){e=e||new s;return t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e},w.prototype.vectorToLocalFrame=function(t,e){e=e||new s;return this.quaternion.conjugate().vmult(t,e),e},w.prototype.pointToWorldFrame=function(t,e){e=e||new s;return this.quaternion.vmult(t,e),e.vadd(this.position,e),e},w.prototype.vectorToWorldFrame=function(t,e){e=e||new s;return this.quaternion.vmult(t,e),e};var c=new s,u=new r;w.prototype.addShape=function(t,e,i){var o=new s,n=new r;return e&&o.copy(e),i&&n.copy(i),this.shapes.push(t),this.shapeOffsets.push(o),this.shapeOrientations.push(n),this.aabbNeedsUpdate=!0,this.updateMassProperties(),this.updateBoundingRadius(),this.updateHasTrigger(),(l.idToShapeMap[t.id]=t).body=this},w.prototype.removeShape=function(t){var e=this.shapes.indexOf(t);-1!==e&&(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.aabbNeedsUpdate=!0,this.updateMassProperties(),this.updateBoundingRadius(),this.updateHasTrigger());},w.prototype.updateBoundingRadius=function(){for(var t=this.shapes,e=this.shapeOffsets,i=t.length,o=0,n=0;n!==i;n++){var s=t[n];s.updateBoundingSphereRadius();var r=e[n].norm(),a=s.boundingSphereRadius;o<r+a&&(o=r+a);}this.boundingRadius=o;};var d=new a;w.prototype.computeAABB=function(){for(var t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,o=t.length,n=c,s=u,r=this.quaternion,a=this.aabb,h=d,l=0;l!==o;l++){var p=t[l];r.vmult(e[l],n),n.vadd(this.position,n),i[l].mult(r,s),p.calculateWorldAABB(n,s,h.lowerBound,h.upperBound),0===l?a.copy(h):a.extend(h);}this.aabbNeedsUpdate=!1;};var p=new n,v=new n;new n;w.prototype.updateInertiaWorld=function(t){var e=this.invInertia;if(e.x!==e.y||e.y!==e.z||t){var i=p,o=v;i.setRotationFromQuaternion(this.quaternion),i.transpose(o),i.scale(e,i),i.mmult(o,this.invInertiaWorld);}};new s;var y=new s;w.prototype.applyForce=function(t,e){if(this.type===w.DYNAMIC){var i=y;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque);}};var f=new s,m=new s;w.prototype.applyLocalForce=function(t,e){if(this.type===w.DYNAMIC){var i=f,o=m;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,o),this.applyForce(i,o);}};new s;var g=new s,x=new s;w.prototype.applyImpulse=function(t,e){if(this.type===w.DYNAMIC){var i=e,o=g;o.copy(t),o.mult(this.invMass,o),this.velocity.vadd(o,this.velocity);var n=x;i.cross(t,n),this.invInertiaWorld.vmult(n,n),this.angularVelocity.vadd(n,this.angularVelocity);}};var b=new s,B=new s;w.prototype.applyLocalImpulse=function(t,e){if(this.type===w.DYNAMIC){var i=b,o=B;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,o),this.applyImpulse(i,o);}};var A=new s;w.prototype.updateMassProperties=function(){var t=A;this.invMass=0<this.mass?1/this.mass:0;var e=this.inertia,i=this.fixedRotation;this.computeAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),h.calculateInertia(t,this.mass,e),this.invInertia.set(0<e.x&&!i?1/e.x:0,0<e.y&&!i?1/e.y:0,0<e.z&&!i?1/e.z:0),this.updateInertiaWorld(!0);},w.prototype.getVelocityAtWorldPoint=function(t,e){var i=new s;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e};new s,new s,new r,new r;w.prototype.integrate=function(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),(this.type===w.DYNAMIC||this.type===w.KINEMATIC)&&this.sleepState!==w.SLEEPING){var o=this.velocity,n=this.angularVelocity,s=this.position,r=this.force,a=this.torque,h=this.quaternion,l=this.invMass,p=this.invInertiaWorld,c=this.linearFactor,u=l*t;o.x+=r.x*u*c.x,o.y+=r.y*u*c.y,o.z+=r.z*u*c.z;var d=p.elements,v=this.angularFactor,y=a.x*v.x,f=a.y*v.y,m=a.z*v.z;n.x+=t*(d[0]*y+d[1]*f+d[2]*m),n.y+=t*(d[3]*y+d[4]*f+d[5]*m),n.z+=t*(d[6]*y+d[7]*f+d[8]*m),s.x+=o.x*t,s.y+=o.y*t,s.z+=o.z*t,h.integrate(this.angularVelocity,t,this.angularFactor,h),e&&(i?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld();}},w.prototype.isSleeping=function(){return this.sleepState===w.SLEEPING},w.prototype.isSleepy=function(){return this.sleepState===w.SLEEPY},w.prototype.isAwake=function(){return this.sleepState===w.AWAKE},w.prototype.updateHasTrigger=function(){for(var t=this.shapes.length;t--&&(this.hasTrigger=!this.shapes[t].collisionResponse,!this.hasTrigger););};},{"../collision/AABB":3,"../material/Material":26,"../math/Mat3":29,"../math/Quaternion":30,"../math/Vec3":32,"../shapes/Box":39,"../shapes/Shape":45,"../utils/EventTarget":51,"../world/World":58}],34:[function(t,e,i){t("./Body");var S=t("../math/Vec3"),p=t("../math/Quaternion"),o=(t("../collision/RaycastResult"),t("../collision/Ray")),n=t("../objects/WheelInfo");function s(t){this.chassisBody=t.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=void 0!==t.indexRightAxis?t.indexRightAxis:1,this.indexForwardAxis=void 0!==t.indexForwardAxis?t.indexForwardAxis:0,this.indexUpAxis=void 0!==t.indexUpAxis?t.indexUpAxis:2;}e.exports=s;new S,new S,new S;var c=new S,u=new S,d=new S;new o;s.prototype.addWheel=function(t){var e=new n(t=t||{}),i=this.wheelInfos.length;return this.wheelInfos.push(e),i},s.prototype.setSteeringValue=function(t,e){this.wheelInfos[e].steering=t;};new S;s.prototype.applyEngineForce=function(t,e){this.wheelInfos[e].engineForce=t;},s.prototype.setBrake=function(t,e){this.wheelInfos[e].brake=t;},s.prototype.addToWorld=function(t){this.constraints;t.addBody(this.chassisBody);var e=this;this.preStepCallback=function(){e.updateVehicle(t.dt);},t.addEventListener("preStep",this.preStepCallback),this.world=t;},s.prototype.getVehicleAxisWorld=function(t,e){e.set(0===t?1:0,1===t?1:0,2===t?1:0),this.chassisBody.vectorToWorldFrame(e,e);},s.prototype.updateVehicle=function(t){for(var e=this.wheelInfos,i=e.length,o=this.chassisBody,n=0;n<i;n++)this.updateWheelTransform(n);this.currentVehicleSpeedKmHour=3.6*o.velocity.norm();var s=new S;this.getVehicleAxisWorld(this.indexForwardAxis,s),s.dot(o.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(n=0;n<i;n++)this.castRay(e[n]);this.updateSuspension(t);var r=new S,a=new S;for(n=0;n<i;n++){var h=(u=e[n]).suspensionForce;h>u.maxSuspensionForce&&(h=u.maxSuspensionForce),u.raycastResult.hitNormalWorld.scale(h*t,r),u.raycastResult.hitPointWorld.vsub(o.position,a),o.applyImpulse(r,a);}this.updateFriction(t);var l=new S,p=new S,c=new S;for(n=0;n<i;n++){var u=e[n];o.getVelocityAtWorldPoint(u.chassisConnectionPointWorld,c);var d=1;switch(this.indexUpAxis){case 1:d=-1;}if(u.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,p);var v=p.dot(u.raycastResult.hitNormalWorld);u.raycastResult.hitNormalWorld.scale(v,l),p.vsub(l,p);var y=p.dot(c);u.deltaRotation=d*y*t/u.radius;}!u.sliding&&u.isInContact||0===u.engineForce||!u.useCustomSlidingRotationalSpeed||(u.deltaRotation=(0<u.engineForce?1:-1)*u.customSlidingRotationalSpeed*t),Math.abs(u.brake)>Math.abs(u.engineForce)&&(u.deltaRotation=0),u.rotation+=u.deltaRotation,u.deltaRotation*=.99;}},s.prototype.updateSuspension=function(t){for(var e=this.chassisBody.mass,i=this.wheelInfos,o=i.length,n=0;n<o;n++){var s=i[n];if(s.isInContact){var r,a=s.suspensionRestLength-s.suspensionLength;r=s.suspensionStiffness*a*s.clippedInvContactDotSuspension;var h=s.suspensionRelativeVelocity;r-=(h<0?s.dampingCompression:s.dampingRelaxation)*h,s.suspensionForce=r*e,s.suspensionForce<0&&(s.suspensionForce=0);}else s.suspensionForce=0;}},s.prototype.removeFromWorld=function(t){this.constraints;t.remove(this.chassisBody),t.removeEventListener("preStep",this.preStepCallback),this.world=null;};var m=new S,w=new S;s.prototype.castRay=function(t){var e=m,i=w;this.updateWheelTransformWorld(t);var o=this.chassisBody,n=-1,s=t.suspensionRestLength+t.radius;t.directionWorld.scale(s,e);var r=t.chassisConnectionPointWorld;r.vadd(e,i);var a=t.raycastResult;a.reset();var h=o.collisionResponse;o.collisionResponse=!1,this.world.rayTest(r,i,a),o.collisionResponse=h;var l=a.body;if(t.raycastResult.groundObject=0,l){n=a.distance,t.raycastResult.hitNormalWorld=a.hitNormalWorld,t.isInContact=!0;var p=a.distance;t.suspensionLength=p-t.radius;var c=t.suspensionRestLength-t.maxSuspensionTravel,u=t.suspensionRestLength+t.maxSuspensionTravel;t.suspensionLength<c&&(t.suspensionLength=c),t.suspensionLength>u&&(t.suspensionLength=u,t.raycastResult.reset());var d=t.raycastResult.hitNormalWorld.dot(t.directionWorld),v=new S;o.getVelocityAtWorldPoint(t.raycastResult.hitPointWorld,v);var y=t.raycastResult.hitNormalWorld.dot(v);if(-.1<=d)t.suspensionRelativeVelocity=0,t.clippedInvContactDotSuspension=10;else {var f=-1/d;t.suspensionRelativeVelocity=y*f,t.clippedInvContactDotSuspension=f;}}else t.suspensionLength=t.suspensionRestLength+0*t.maxSuspensionTravel,t.suspensionRelativeVelocity=0,t.directionWorld.scale(-1,t.raycastResult.hitNormalWorld),t.clippedInvContactDotSuspension=1;return n},s.prototype.updateWheelTransformWorld=function(t){t.isInContact=!1;var e=this.chassisBody;e.pointToWorldFrame(t.chassisConnectionPointLocal,t.chassisConnectionPointWorld),e.vectorToWorldFrame(t.directionLocal,t.directionWorld),e.vectorToWorldFrame(t.axleLocal,t.axleWorld);},s.prototype.updateWheelTransform=function(t){var e=c,i=u,o=d,n=this.wheelInfos[t];this.updateWheelTransformWorld(n),n.directionLocal.scale(-1,e),i.copy(n.axleLocal),e.cross(i,o),o.normalize(),i.normalize();var s=n.steering,r=new p;r.setFromAxisAngle(e,s);var a=new p;a.setFromAxisAngle(i,n.rotation);var h=n.worldTransform.quaternion;this.chassisBody.quaternion.mult(r,h),h.mult(a,h),h.normalize();var l=n.worldTransform.position;l.copy(n.directionWorld),l.scale(n.suspensionLength,l),l.vadd(n.chassisConnectionPointWorld,l);};var C=[new S(1,0,0),new S(0,1,0),new S(0,0,1)];s.prototype.getWheelTransformWorld=function(t){return this.wheelInfos[t].worldTransform};var z=new S,M=[],q=[];s.prototype.updateFriction=function(t){for(var e=z,i=this.wheelInfos,o=i.length,n=this.chassisBody,s=q,r=M,a=0;a<o;a++){(c=(x=i[a]).raycastResult.body)&&0,x.sideImpulse=0,x.forwardImpulse=0,s[a]||(s[a]=new S),r[a]||(r[a]=new S);}for(a=0;a<o;a++){if(c=(x=i[a]).raycastResult.body){var h=r[a];this.getWheelTransformWorld(a).vectorToWorldFrame(C[this.indexRightAxis],h);var l=x.raycastResult.hitNormalWorld,p=h.dot(l);l.scale(p,e),h.vsub(e,h),h.normalize(),l.cross(h,s[a]),s[a].normalize(),x.sideImpulse=R(n,x.raycastResult.hitPointWorld,c,x.raycastResult.hitPointWorld,h),x.sideImpulse*=1;}}this.sliding=!1;for(a=0;a<o;a++){var c=(x=i[a]).raycastResult.body,u=0;if(x.slipInfo=1,c){var d=x.brake?x.brake:0;u=F(n,c,x.raycastResult.hitPointWorld,s[a],d);var v=d/(u+=x.engineForce*t);x.slipInfo*=v;}if(x.forwardImpulse=0,x.skidInfo=1,c){x.skidInfo=1;var y=x.suspensionForce*t*x.frictionSlip,f=y*y;x.forwardImpulse=u;var m=.5*x.forwardImpulse,w=1*x.sideImpulse,g=m*m+w*w;if(x.sliding=!1,f<g){this.sliding=!0,x.sliding=!0;v=y/Math.sqrt(g);x.skidInfo*=v;}}}if(this.sliding)for(a=0;a<o;a++){0!==(x=i[a]).sideImpulse&&x.skidInfo<1&&(x.forwardImpulse*=x.skidInfo,x.sideImpulse*=x.skidInfo);}for(a=0;a<o;a++){var x=i[a],b=new S;if(x.raycastResult.hitPointWorld.vsub(n.position,b),0!==x.forwardImpulse){var B=new S;s[a].scale(x.forwardImpulse,B),n.applyImpulse(B,b);}if(0!==x.sideImpulse){c=x.raycastResult.body;var A=new S;x.raycastResult.hitPointWorld.vsub(c.position,A);var E=new S;r[a].scale(x.sideImpulse,E),n.vectorToLocalFrame(b,b),b["xyz"[this.indexUpAxis]]*=x.rollInfluence,n.vectorToWorldFrame(b,b),n.applyImpulse(E,b),E.scale(-1,E),c.applyImpulse(E,A);}}};var v=new S,y=new S,f=new S;function F(t,e,i,o,n){var s=0,r=i,a=v,h=y,l=f;t.getVelocityAtWorldPoint(r,a),e.getVelocityAtWorldPoint(r,h),a.vsub(h,l);return n<(s=-o.dot(l)*(1/(x(t,i,o)+x(e,i,o))))&&(s=n),s<-n&&(s=-n),s}var a=new S,h=new S,l=new S,g=new S;function x(t,e,i){var o=a,n=h,s=l,r=g;return e.vsub(t.position,o),o.cross(i,n),t.invInertiaWorld.vmult(n,r),r.cross(o,s),t.invMass+i.dot(s)}var b=new S,B=new S,A=new S;function R(t,e,i,o,n){if(1.1<n.norm2())return 0;var s=b,r=B,a=A;t.getVelocityAtWorldPoint(e,s),i.getVelocityAtWorldPoint(o,r),s.vsub(r,a);return -.2*n.dot(a)*(1/(t.invMass+i.invMass))}},{"../collision/Ray":10,"../collision/RaycastResult":11,"../math/Quaternion":30,"../math/Vec3":32,"../objects/WheelInfo":38,"./Body":33}],35:[function(t,e,i){var r=t("./Body"),a=t("../shapes/Sphere"),o=t("../shapes/Box"),h=t("../math/Vec3"),l=t("../constraints/HingeConstraint"),p=t("../math/CMath");function n(t){if(this.wheelBodies=[],this.coordinateSystem=void 0===t.coordinateSystem?new h(1,2,3):t.coordinateSystem.clone(),this.chassisBody=t.chassisBody,!this.chassisBody){var e=new o(new h(5,2,.5));this.chassisBody=new r(1,e);}this.constraints=[],this.wheelAxes=[],this.wheelForces=[];}(e.exports=n).prototype.addWheel=function(t){var e=(t=t||{}).body;e=e||new r(1,new a(1.2)),this.wheelBodies.push(e),this.wheelForces.push(0);new h;var i=void 0!==t.position?t.position.clone():new h,o=new h;this.chassisBody.pointToWorldFrame(i,o),e.position.set(o.x,o.y,o.z);var n=void 0!==t.axis?t.axis.clone():new h(0,1,0);this.wheelAxes.push(n);var s=new l(this.chassisBody,e,{pivotA:i,axisA:n,pivotB:h.ZERO,axisB:n,collideConnected:!1});return this.constraints.push(s),this.wheelBodies.length-1},n.prototype.setSteeringValue=function(t,e){var i=this.wheelAxes[e],o=p.cos(t),n=p.sin(t),s=i.x,r=i.y;this.constraints[e].axisA.set(o*s-n*r,n*s+o*r,0);},n.prototype.setMotorSpeed=function(t,e){var i=this.constraints[e];i.enableMotor(),i.motorTargetVelocity=t;},n.prototype.disableMotor=function(t){this.constraints[t].disableMotor();};var s=new h;n.prototype.setWheelForce=function(t,e){this.wheelForces[e]=t;},n.prototype.applyWheelForce=function(t,e){var i=this.wheelAxes[e],o=this.wheelBodies[e],n=o.torque;i.scale(t,s),o.vectorToWorldFrame(s,s),n.vadd(s,n);},n.prototype.addToWorld=function(t){for(var e=this.constraints,i=this.wheelBodies.concat([this.chassisBody]),o=0;o<i.length;o++)t.addBody(i[o]);for(o=0;o<e.length;o++)t.addConstraint(e[o]);t.addEventListener("preStep",this._update.bind(this));},n.prototype._update=function(){for(var t=this.wheelForces,e=0;e<t.length;e++)this.applyWheelForce(t[e],e);},n.prototype.removeFromWorld=function(t){for(var e=this.constraints,i=this.wheelBodies.concat([this.chassisBody]),o=0;o<i.length;o++)t.remove(i[o]);for(o=0;o<e.length;o++)t.removeConstraint(e[o]);};var c=new h;n.prototype.getWheelSpeed=function(t){var e=this.wheelAxes[t],i=this.wheelBodies[t].angularVelocity;return this.chassisBody.vectorToWorldFrame(e,c),i.dot(c)};},{"../constraints/HingeConstraint":16,"../math/CMath":27,"../math/Vec3":32,"../shapes/Box":39,"../shapes/Sphere":46,"./Body":33}],36:[function(t,e,i){e.exports=n;t("../shapes/Shape");var o=t("../math/Vec3");t("../math/Quaternion"),t("../shapes/Particle"),t("../objects/Body"),t("../material/Material");function n(){this.particles=[],this.density=1,this.smoothingRadius=1,this.speedOfSound=1,this.viscosity=.01,this.eps=1e-6,this.pressures=[],this.densities=[],this.neighbors=[];}n.prototype.add=function(t){this.particles.push(t),this.neighbors.length<this.particles.length&&this.neighbors.push([]);},n.prototype.remove=function(t){var e=this.particles.indexOf(t);-1!==e&&(this.particles.splice(e,1),this.neighbors.length>this.particles.length&&this.neighbors.pop());};var h=new o;n.prototype.getNeighbors=function(t,e){for(var i=this.particles.length,o=t.id,n=this.smoothingRadius*this.smoothingRadius,s=h,r=0;r!==i;r++){var a=this.particles[r];a.position.vsub(t.position,s),o!==a.id&&s.norm2()<n&&e.push(a);}};var B=new o,A=new o,E=new o,S=new o,C=new o,z=new o;n.prototype.update=function(){for(var t=this.particles.length,e=B,i=this.speedOfSound,o=this.eps,n=0;n!==t;n++){var s=this.particles[n];(g=this.neighbors[n]).length=0,this.getNeighbors(s,g),g.push(this.particles[n]);for(var r=g.length,a=0,h=0;h!==r;h++){s.position.vsub(g[h].position,e);var l=e.norm(),p=this.w(l);a+=g[h].mass*p;}this.densities[n]=a,this.pressures[n]=i*i*(this.densities[n]-this.density);}var c=A,u=E,d=S,v=C,y=z;for(n=0;n!==t;n++){var f,m,w=this.particles[n];c.set(0,0,0),u.set(0,0,0);var g;for(r=(g=this.neighbors[n]).length,h=0;h!==r;h++){var x=g[h];w.position.vsub(x.position,v);var b=v.norm();f=-x.mass*(this.pressures[n]/(this.densities[n]*this.densities[n]+o)+this.pressures[h]/(this.densities[h]*this.densities[h]+o)),this.gradw(v,d),d.mult(f,d),c.vadd(d,c),x.velocity.vsub(w.velocity,y),y.mult(1/(1e-4+this.densities[n]*this.densities[h])*this.viscosity*x.mass,y),m=this.nablaw(b),y.mult(m,y),u.vadd(y,u);}u.mult(w.mass,u),c.mult(w.mass,c),w.force.vadd(u,w.force),w.force.vadd(c,w.force);}},n.prototype.w=function(t){var e=this.smoothingRadius;return 315/(64*Math.PI*Math.pow(e,9))*Math.pow(e*e-t*t,3)},n.prototype.gradw=function(t,e){var i=t.norm(),o=this.smoothingRadius;t.mult(945/(32*Math.PI*Math.pow(o,9))*Math.pow(o*o-i*i,2),e);},n.prototype.nablaw=function(t){var e=this.smoothingRadius;return 945/(32*Math.PI*Math.pow(e,9))*(e*e-t*t)*(7*t*t-3*e*e)};},{"../material/Material":26,"../math/Quaternion":30,"../math/Vec3":32,"../objects/Body":33,"../shapes/Particle":43,"../shapes/Shape":45}],37:[function(t,e,i){var o=t("../math/Vec3");function n(t,e,i){i=i||{},this.restLength="number"==typeof i.restLength?i.restLength:1,this.stiffness=i.stiffness||100,this.damping=i.damping||1,this.bodyA=t,this.bodyB=e,this.localAnchorA=new o,this.localAnchorB=new o,i.localAnchorA&&this.localAnchorA.copy(i.localAnchorA),i.localAnchorB&&this.localAnchorB.copy(i.localAnchorB),i.worldAnchorA&&this.setWorldAnchorA(i.worldAnchorA),i.worldAnchorB&&this.setWorldAnchorB(i.worldAnchorB);}(e.exports=n).prototype.setWorldAnchorA=function(t){this.bodyA.pointToLocalFrame(t,this.localAnchorA);},n.prototype.setWorldAnchorB=function(t){this.bodyB.pointToLocalFrame(t,this.localAnchorB);},n.prototype.getWorldAnchorA=function(t){this.bodyA.pointToWorldFrame(this.localAnchorA,t);},n.prototype.getWorldAnchorB=function(t){this.bodyB.pointToWorldFrame(this.localAnchorB,t);};var m=new o,w=new o,g=new o,x=new o,b=new o,B=new o,A=new o,E=new o,S=new o,C=new o,z=new o;n.prototype.applyForce=function(){var t=this.stiffness,e=this.damping,i=this.restLength,o=this.bodyA,n=this.bodyB,s=m,r=w,a=g,h=x,l=z,p=b,c=B,u=A,d=E,v=S,y=C;this.getWorldAnchorA(p),this.getWorldAnchorB(c),p.vsub(o.position,u),c.vsub(n.position,d),c.vsub(p,s);var f=s.norm();r.copy(s),r.normalize(),n.velocity.vsub(o.velocity,a),n.angularVelocity.cross(d,l),a.vadd(l,a),o.angularVelocity.cross(u,l),a.vsub(l,a),r.mult(-t*(f-i)-e*a.dot(r),h),o.force.vsub(h,o.force),n.force.vadd(h,n.force),u.cross(h,v),d.cross(h,y),o.torque.vsub(v,o.torque),n.torque.vadd(y,n.torque);};},{"../math/Vec3":32}],38:[function(t,e,i){var o=t("../math/Vec3"),n=t("../math/Transform"),s=t("../collision/RaycastResult"),r=t("../utils/Utils");function a(t){t=r.defaults(t,{chassisConnectionPointLocal:new o,chassisConnectionPointWorld:new o,directionLocal:new o,directionWorld:new o,axleLocal:new o,axleWorld:new o,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:1e4,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=t.maxSuspensionTravel,this.customSlidingRotationalSpeed=t.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=t.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=t.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=t.chassisConnectionPointWorld.clone(),this.directionLocal=t.directionLocal.clone(),this.directionWorld=t.directionWorld.clone(),this.axleLocal=t.axleLocal.clone(),this.axleWorld=t.axleWorld.clone(),this.suspensionRestLength=t.suspensionRestLength,this.suspensionMaxLength=t.suspensionMaxLength,this.radius=t.radius,this.suspensionStiffness=t.suspensionStiffness,this.dampingCompression=t.dampingCompression,this.dampingRelaxation=t.dampingRelaxation,this.frictionSlip=t.frictionSlip,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=t.rollInfluence,this.maxSuspensionForce=t.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=t.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new s,this.worldTransform=new n,this.isInContact=!1;}e.exports=a;var h=new o,l=new o;h=new o;a.prototype.updateWheel=function(t){var e=this.raycastResult;if(this.isInContact){var i=e.hitNormalWorld.dot(e.directionWorld);e.hitPointWorld.vsub(t.position,l),t.getVelocityAtWorldPoint(l,h);var o=e.hitNormalWorld.dot(h);if(-.1<=i)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=10;else {var n=-1/i;this.suspensionRelativeVelocity=o*n,this.clippedInvContactDotSuspension=n;}}else e.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.hitNormalWorld),this.clippedInvContactDotSuspension=1;};},{"../collision/RaycastResult":11,"../math/Transform":31,"../math/Vec3":32,"../utils/Utils":55}],39:[function(t,e,i){e.exports=n;var o=t("./Shape"),r=t("../math/Vec3"),a=t("./ConvexPolyhedron");function n(t){o.call(this,{type:o.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius();}((n.prototype=new o).constructor=n).prototype.updateConvexPolyhedronRepresentation=function(){var t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,o=r,n=[new o(-t,-e,-i),new o(t,-e,-i),new o(t,e,-i),new o(-t,e,-i),new o(-t,-e,i),new o(t,-e,i),new o(t,e,i),new o(-t,e,i)],s=(new o(0,0,1),new o(0,1,0),new o(1,0,0),new a(n,[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]]));(this.convexPolyhedronRepresentation=s).material=this.material;},n.prototype.calculateLocalInertia=function(t,e){return e=e||new r,n.calculateInertia(this.halfExtents,t,e),e},n.calculateInertia=function(t,e,i){var o=t;o.isZero()?(i.x=2/12*e,i.y=2/12*e,i.z=2/12*e):(i.x=1/12*e*(2*o.y*2*o.y+2*o.z*2*o.z),i.y=1/12*e*(2*o.x*2*o.x+2*o.z*2*o.z),i.z=1/12*e*(2*o.y*2*o.y+2*o.x*2*o.x));},n.prototype.getSideNormals=function(t,e){var i=t,o=this.halfExtents;if(i[0].set(o.x,0,0),i[1].set(0,o.y,0),i[2].set(0,0,o.z),i[3].set(-o.x,0,0),i[4].set(0,-o.y,0),i[5].set(0,0,-o.z),void 0!==e)for(var n=0;n!==i.length;n++)e.vmult(i[n],i[n]);return i},n.prototype.volume=function(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z},n.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.halfExtents.norm();};var h=new r;new r;n.prototype.forEachWorldCorner=function(t,e,i){for(var o=this.halfExtents,n=[[o.x,o.y,o.z],[-o.x,o.y,o.z],[-o.x,-o.y,o.z],[-o.x,-o.y,-o.z],[o.x,-o.y,-o.z],[o.x,o.y,-o.z],[-o.x,o.y,-o.z],[o.x,-o.y,o.z]],s=0;s<n.length;s++)h.set(n[s][0],n[s][1],n[s][2]),e.vmult(h,h),t.vadd(h,h),i(h.x,h.y,h.z);};var p=[new r,new r,new r,new r,new r,new r,new r,new r];n.prototype.calculateWorldAABB=function(t,e,i,o){var n=this.halfExtents;p[0].set(n.x,n.y,n.z),p[1].set(-n.x,n.y,n.z),p[2].set(-n.x,-n.y,n.z),p[3].set(-n.x,-n.y,-n.z),p[4].set(n.x,-n.y,-n.z),p[5].set(n.x,n.y,-n.z),p[6].set(-n.x,n.y,-n.z),p[7].set(n.x,-n.y,n.z);var s=p[0];e.vmult(s,s),t.vadd(s,s),o.copy(s),i.copy(s);for(var r=1;r<8;r++){s=p[r];e.vmult(s,s),t.vadd(s,s);var a=s.x,h=s.y,l=s.z;a>o.x&&(o.x=a),h>o.y&&(o.y=h),l>o.z&&(o.z=l),a<i.x&&(i.x=a),h<i.y&&(i.y=h),l<i.z&&(i.z=l);}};},{"../math/Vec3":32,"./ConvexPolyhedron":40,"./Shape":45}],40:[function(t,e,i){e.exports=u;var o=t("./Shape"),x=t("../math/Vec3"),y=(t("../math/Quaternion"),t("../math/Transform"));function u(t,e,i){o.call(this,{type:o.types.CONVEXPOLYHEDRON}),this.vertices=t||[],this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.faces=e||[],this.faceNormals=[],this.computeNormals(),this.worldFaceNormalsNeedsUpdate=!0,this.worldFaceNormals=[],this.uniqueEdges=[],this.uniqueAxes=i?i.slice():null,this.computeEdges(),this.updateBoundingSphereRadius();}(u.prototype=new o).constructor=u;var c=new x;u.prototype.computeEdges=function(){var t=this.faces,e=this.vertices,i=(e.length,this.uniqueEdges);i.length=0;for(var o=c,n=0;n!==t.length;n++)for(var s=t[n],r=s.length,a=0;a!==r;a++){var h=(a+1)%r;e[s[a]].vsub(e[s[h]],o),o.normalize();for(var l=!1,p=0;p!==i.length;p++)if(i[p].almostEquals(o)||i[p].almostEquals(o)){l=!0;break}l||i.push(o.clone());}},u.prototype.computeNormals=function(){this.faceNormals.length=this.faces.length;for(var t=0;t<this.faces.length;t++){for(var e=0;e<this.faces[t].length;e++)if(!this.vertices[this.faces[t][e]])throw new Error("Vertex "+this.faces[t][e]+" not found!");var i=this.faceNormals[t]||new x;this.getFaceNormal(t,i),i.negate(i),this.faceNormals[t]=i;var o=this.vertices[this.faces[t][0]];if(i.dot(o)<0){console.error(".faceNormals["+t+"] = Vec3("+i.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");for(e=0;e<this.faces[t].length;e++)console.warn(".vertices["+this.faces[t][e]+"] = Vec3("+this.vertices[this.faces[t][e]].toString()+")");}}};var n=new x,s=new x;u.computeNormal=function(t,e,i,o){e.vsub(t,s),i.vsub(e,n),n.cross(s,o),o.isZero()||o.normalize();},u.prototype.getFaceNormal=function(t,e){var i=this.faces[t],o=this.vertices[i[0]],n=this.vertices[i[1]],s=this.vertices[i[2]];return u.computeNormal(o,n,s,e)};var b=new x;u.prototype.clipAgainstHull=function(t,e,i,o,n,s,r,a,h){for(var l=b,p=-1,c=-Number.MAX_VALUE,u=0;u<i.faces.length;u++){l.copy(i.faceNormals[u]),n.vmult(l,l);var d=l.dot(s);c<d&&(c=d,p=u);}for(var v=[],y=i.faces[p],f=y.length,m=0;m<f;m++){var w=i.vertices[y[m]],g=new x;g.copy(w),n.vmult(g,g),o.vadd(g,g),v.push(g);}0<=p&&this.clipFaceAgainstHull(s,t,e,v,r,a,h);};var E=new x,S=new x,C=new x,z=new x,M=new x,q=new x;u.prototype.findSeparatingAxis=function(t,e,i,o,n,s,r,a){var h=E,l=S,p=C,c=z,u=M,d=q,v=Number.MAX_VALUE,y=this;if(y.uniqueAxes)for(m=0;m!==y.uniqueAxes.length;m++){if(i.vmult(y.uniqueAxes[m],h),!1===(x=y.testSepAxis(h,t,e,i,o,n)))return !1;x<v&&(v=x,s.copy(h));}else for(var f=r?r.length:y.faces.length,m=0;m<f;m++){var w=r?r[m]:m;if(h.copy(y.faceNormals[w]),i.vmult(h,h),!1===(x=y.testSepAxis(h,t,e,i,o,n)))return !1;x<v&&(v=x,s.copy(h));}if(t.uniqueAxes)for(m=0;m!==t.uniqueAxes.length;m++){if(n.vmult(t.uniqueAxes[m],l),!1===(x=y.testSepAxis(l,t,e,i,o,n)))return !1;x<v&&(v=x,s.copy(l));}else for(var g=a?a.length:t.faces.length,m=0;m<g;m++){var x;w=a?a[m]:m;if(l.copy(t.faceNormals[w]),n.vmult(l,l),!1===(x=y.testSepAxis(l,t,e,i,o,n)))return !1;x<v&&(v=x,s.copy(l));}for(var b=0;b!==y.uniqueEdges.length;b++){i.vmult(y.uniqueEdges[b],c);for(var B=0;B!==t.uniqueEdges.length;B++)if(n.vmult(t.uniqueEdges[B],u),c.cross(u,d),!d.almostZero()){d.normalize();var A=y.testSepAxis(d,t,e,i,o,n);if(!1===A)return !1;A<v&&(v=A,s.copy(d));}}return o.vsub(e,p),0<p.dot(s)&&s.negate(s),!0};var d=[],v=[];u.prototype.testSepAxis=function(t,e,i,o,n,s){u.project(this,t,i,o,d),u.project(e,t,n,s,v);var r=d[0],a=d[1],h=v[0],l=v[1];if(r<l||h<a)return !1;var p=r-l,c=h-a;return p<c?p:c};var r=new x,a=new x;u.prototype.calculateLocalInertia=function(t,e){this.computeLocalAABB(r,a);var i=a.x-r.x,o=a.y-r.y,n=a.z-r.z;e.x=1/12*t*(2*o*2*o+2*n*2*n),e.y=1/12*t*(2*i*2*i+2*n*2*n),e.z=1/12*t*(2*o*2*o+2*i*2*i);},u.prototype.getPlaneConstantOfFace=function(t){var e=this.faces[t],i=this.faceNormals[t],o=this.vertices[e[0]];return -i.dot(o)};var I=new x,N=new x,L=new x,W=new x,j=new x,O=new x,k=new x,_=new x;u.prototype.clipFaceAgainstHull=function(t,e,i,o,n,s,r){for(var a=I,h=N,l=L,p=W,c=j,u=O,d=k,v=_,y=this,f=o,m=[],w=-1,g=Number.MAX_VALUE,x=0;x<y.faces.length;x++){a.copy(y.faceNormals[x]),i.vmult(a,a);var b=a.dot(t);b<g&&(g=b,w=x);}if(!(w<0)){var B=y.faces[w];B.connectedFaces=[];for(var A=0;A<y.faces.length;A++)for(var E=0;E<y.faces[A].length;E++)-1!==B.indexOf(y.faces[A][E])&&A!==w&&-1===B.connectedFaces.indexOf(A)&&B.connectedFaces.push(A);f.length;for(var S=B.length,C=0;C<S;C++){var z=y.vertices[B[C]],M=y.vertices[B[(C+1)%S]];z.vsub(M,h),l.copy(h),i.vmult(l,l),e.vadd(l,l),p.copy(this.faceNormals[w]),i.vmult(p,p),e.vadd(p,p),l.cross(p,c),c.negate(c),u.copy(z),i.vmult(u,u),e.vadd(u,u);u.dot(c);var q=B.connectedFaces[C];d.copy(this.faceNormals[q]);var F=this.getPlaneConstantOfFace(q);v.copy(d),i.vmult(v,v);var R=F-v.dot(e);for(this.clipFaceAgainstPlane(f,m,v,R);f.length;)f.shift();for(;m.length;)f.push(m.shift());}d.copy(this.faceNormals[w]);F=this.getPlaneConstantOfFace(w);v.copy(d),i.vmult(v,v);for(R=F-v.dot(e),A=0;A<f.length;A++){var T=v.dot(f[A])+R;if(T<=n&&(T=n),T<=s){var P=f[A];if(T<=0){var V={point:P,normal:v,depth:T};r.push(V);}}}}},u.prototype.clipFaceAgainstPlane=function(t,e,i,o){var n,s,r=t.length;if(r<2)return e;var a=t[t.length-1],h=t[0];n=i.dot(a)+o;for(var l=0;l<r;l++){if(h=t[l],s=i.dot(h)+o,n<0)if(s<0){(p=new x).copy(h),e.push(p);}else {var p=new x;a.lerp(h,n/(n-s),p),e.push(p);}else if(s<0){p=new x;a.lerp(h,n/(n-s),p),e.push(p),e.push(h);}a=h,n=s;}return e},u.prototype.computeWorldVertices=function(t,e){for(var i=this.vertices.length;this.worldVertices.length<i;)this.worldVertices.push(new x);for(var o=this.vertices,n=this.worldVertices,s=0;s!==i;s++)e.vmult(o[s],n[s]),t.vadd(n[s],n[s]);this.worldVerticesNeedsUpdate=!1;};new x;u.prototype.computeLocalAABB=function(t,e){var i=this.vertices.length,o=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(var n=0;n<i;n++){var s=o[n];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z);}},u.prototype.computeWorldFaceNormals=function(t){for(var e=this.faceNormals.length;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new x);for(var i=this.faceNormals,o=this.worldFaceNormals,n=0;n!==e;n++)t.vmult(i[n],o[n]);this.worldFaceNormalsNeedsUpdate=!1;},u.prototype.updateBoundingSphereRadius=function(){for(var t=0,e=this.vertices,i=0,o=e.length;i!==o;i++){var n=e[i].norm2();t<n&&(t=n);}this.boundingSphereRadius=Math.sqrt(t);};var f=new x;u.prototype.calculateWorldAABB=function(t,e,i,o){for(var n,s,r,a,h,l,p=this.vertices.length,c=this.vertices,u=0;u<p;u++){f.copy(c[u]),e.vmult(f,f),t.vadd(f,f);(f.x<n||void 0===n)&&(n=f.x),(f.x>a||void 0===a)&&(a=f.x),(f.y<s||void 0===s)&&(s=f.y),(f.y>h||void 0===h)&&(h=f.y),(f.z<r||void 0===r)&&(r=f.z),(f.z>l||void 0===l)&&(l=f.z);}i.set(n,s,r),o.set(a,h,l);},u.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},u.prototype.getAveragePointLocal=function(t){t=t||new x;for(var e=this.vertices.length,i=this.vertices,o=0;o<e;o++)t.vadd(i[o],t);return t.mult(1/e,t),t},u.prototype.transformAllPoints=function(t,e){var i=this.vertices.length,o=this.vertices;if(e){for(var n=0;n<i;n++){var s=o[n];e.vmult(s,s);}for(n=0;n<this.faceNormals.length;n++){s=this.faceNormals[n];e.vmult(s,s);}}if(t)for(n=0;n<i;n++){(s=o[n]).vadd(t,s);}};var m=new x,w=new x,g=new x;u.prototype.pointIsInside=function(t){var e=this.vertices.length,i=this.vertices,o=this.faces,n=this.faceNormals,s=this.faces.length,r=m;this.getAveragePointLocal(r);for(var a=0;a<s;a++){this.faces[a].length,e=n[a];var h=i[o[a][0]],l=w;t.vsub(h,l);var p=e.dot(l),c=g;r.vsub(h,c);var u=e.dot(c);if(p<0&&0<u||0<p&&u<0)return !1}return -1};new x;var B=new x,A=new x;u.project=function(t,e,i,o,n){var s=t.vertices.length,r=B,a=0,h=0,l=A,p=t.vertices;l.setZero(),y.vectorToLocalFrame(i,o,e,r),y.pointToLocalFrame(i,o,l,l);var c=l.dot(r);h=a=p[0].dot(r);for(var u=1;u<s;u++){var d=p[u].dot(r);a<d&&(a=d),d<h&&(h=d);}if((a-=c)<(h-=c)){var v=h;h=a,a=v;}n[0]=a,n[1]=h;};},{"../math/Quaternion":30,"../math/Transform":31,"../math/Vec3":32,"./Shape":45}],41:[function(t,e,i){e.exports=o;t("./Shape");var B=t("../math/Vec3"),A=(t("../math/Quaternion"),t("./ConvexPolyhedron")),E=t("../math/CMath");function o(t,e,i,o,n){if(n){for(var s=o,r=E.cos,a=E.sin,h=i/2,l=[],p=[],c=[0],u=[1],d=[],v=2*Math.PI/s,y=0;y<s;y++)l.push(new B(t*r(v*y),h,t*a(v*y))),l.push(new B(t*r(v*y),-h,t*a(v*y))),y<s-1?(p.push([2*y+2,2*y+3,2*y+1,2*y]),c.push(2*y+2),u.push(2*y+3)):p.push([0,1,2*y+1,2*y]),(s%2==1||y<s/2)&&d.push(new B(r(v*(y+.5)),0,a(v*(y+.5))));p.push(u);var f=[];for(y=0;y<c.length;y++)f.push(c[c.length-y-1]);return p.push(f),d.push(new B(0,1,0)),void A.call(this,l,p,d)}s=o;var m=[],w=(d=[],[]),g=[],x=[];r=E.cos,a=E.sin;m.push(new B(e*r(0),e*a(0),.5*-i)),g.push(0),m.push(new B(t*r(0),t*a(0),.5*i)),x.push(1);for(y=0;y<s;y++){v=2*Math.PI/s*(y+1);var b=2*Math.PI/s*(y+.5);y<s-1?(m.push(new B(e*r(v),e*a(v),.5*-i)),g.push(2*y+2),m.push(new B(t*r(v),t*a(v),.5*i)),x.push(2*y+3),w.push([2*y+2,2*y+3,2*y+1,2*y])):w.push([0,1,2*y+1,2*y]),(s%2==1||y<s/2)&&d.push(new B(r(b),a(b),0));}w.push(x),d.push(new B(0,0,1));for(f=[],y=0;y<g.length;y++)f.push(g[g.length-y-1]);w.push(f),A.call(this,m,w,d);}o.prototype=new A;},{"../math/CMath":27,"../math/Quaternion":30,"../math/Vec3":32,"./ConvexPolyhedron":40,"./Shape":45}],42:[function(t,e,i){var o=t("./Shape"),c=t("./ConvexPolyhedron"),u=t("../math/Vec3"),n=t("../utils/Utils");function s(t,e){e=n.defaults(e,{maxValue:null,minValue:null,elementSize:1}),this.data=t,this.maxValue=e.maxValue,this.minValue=e.minValue,this.elementSize=e.elementSize,null===e.minValue&&this.updateMinValue(),null===e.maxValue&&this.updateMaxValue(),this.cacheEnabled=!0,o.call(this,{type:o.types.HEIGHTFIELD}),this.pillarConvex=new c,this.pillarOffset=new u,this.updateBoundingSphereRadius(),this._cachedPillars={};}((e.exports=s).prototype=new o).update=function(){this._cachedPillars={};},s.prototype.updateMinValue=function(){for(var t=this.data,e=t[0][0],i=0;i!==t.length;i++)for(var o=0;o!==t[i].length;o++){var n=t[i][o];n<e&&(e=n);}this.minValue=e;},s.prototype.updateMaxValue=function(){for(var t=this.data,e=t[0][0],i=0;i!==t.length;i++)for(var o=0;o!==t[i].length;o++){var n=t[i][o];e<n&&(e=n);}this.maxValue=e;},s.prototype.setHeightValueAtIndex=function(t,e,i){this.data[t][e]=i,this.clearCachedConvexTrianglePillar(t,e,!1),0<t&&(this.clearCachedConvexTrianglePillar(t-1,e,!0),this.clearCachedConvexTrianglePillar(t-1,e,!1)),0<e&&(this.clearCachedConvexTrianglePillar(t,e-1,!0),this.clearCachedConvexTrianglePillar(t,e-1,!1)),0<e&&0<t&&this.clearCachedConvexTrianglePillar(t-1,e-1,!0);},s.prototype.getRectMinMax=function(t,e,i,o,n){n=n||[];for(var s=this.data,r=this.minValue,a=t;a<=i;a++)for(var h=e;h<=o;h++){var l=s[a][h];r<l&&(r=l);}n[0]=this.minValue,n[1]=r;},s.prototype.getIndexOfPosition=function(t,e,i,o){var n=this.elementSize,s=this.data,r=Math.floor(t/n),a=Math.floor(e/n);return i[0]=r,i[1]=a,o&&(r<0&&(r=0),a<0&&(a=0),r>=s.length-1&&(r=s.length-1),a>=s[0].length-1&&(a=s[0].length-1)),!(r<0||a<0||r>=s.length-1||a>=s[0].length-1)};var x=[],b=new u,B=new u,A=new u,E=new u;s.prototype.getTriangleAt=function(t,e,i,o,n,s){var r=x;this.getIndexOfPosition(t,e,r,i);var a=r[0],h=r[1],l=this.data;i&&(a=Math.min(l.length-2,Math.max(0,a)),h=Math.min(l[0].length-2,Math.max(0,h)));var p=this.elementSize,c=Math.pow(t/p-a,2)+Math.pow(e/p-h,2),u=Math.pow(t/p-(a+1),2)+Math.pow(e/p-(h+1),2)<c;return this.getTriangle(a,h,u,o,n,s),u};var l=new u,p=new u,d=new u,v=new u,y=new u;s.prototype.getNormalAt=function(t,e,i,o){var n=l,s=p,r=d,a=v,h=y;this.getTriangleAt(t,e,i,n,s,r),s.vsub(n,a),r.vsub(n,h),a.cross(h,o),o.normalize();},s.prototype.getAabbAtIndex=function(t,e,i){var o=this.data,n=this.elementSize;i.lowerBound.set(t*n,e*n,o[t][e]),i.upperBound.set((t+1)*n,(e+1)*n,o[t+1][e+1]);},s.prototype.getHeightAt=function(t,e,i){var o=this.data,n=B,s=A,r=E,a=x;this.getIndexOfPosition(t,e,a,i);var h=a[0],l=a[1];i&&(h=Math.min(o.length-2,Math.max(0,h)),l=Math.min(o[0].length-2,Math.max(0,l)));var p,c,u,d,v,y,f,m,w,g=this.getTriangleAt(t,e,i,n,s,r);p=t,c=e,u=n.x,d=n.y,v=s.x,y=s.y,f=r.x,m=r.y,(w=b).x=((y-m)*(p-f)+(f-v)*(c-m))/((y-m)*(u-f)+(f-v)*(d-m)),w.y=((m-d)*(p-f)+(u-f)*(c-m))/((y-m)*(u-f)+(f-v)*(d-m)),w.z=1-w.x-w.y;return g?o[h+1][l+1]*b.x+o[h][l+1]*b.y+o[h+1][l]*b.z:o[h][l]*b.x+o[h+1][l]*b.y+o[h][l+1]*b.z},s.prototype.getCacheConvexTrianglePillarKey=function(t,e,i){return t+"_"+e+"_"+(i?1:0)},s.prototype.getCachedConvexTrianglePillar=function(t,e,i){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,i)]},s.prototype.setCachedConvexTrianglePillar=function(t,e,i,o,n){this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,i)]={convex:o,offset:n};},s.prototype.clearCachedConvexTrianglePillar=function(t,e,i){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(t,e,i)];},s.prototype.getTriangle=function(t,e,i,o,n,s){var r=this.data,a=this.elementSize;i?(o.set((t+1)*a,(e+1)*a,r[t+1][e+1]),n.set(t*a,(e+1)*a,r[t][e+1]),s.set((t+1)*a,e*a,r[t+1][e])):(o.set(t*a,e*a,r[t][e]),n.set((t+1)*a,e*a,r[t+1][e]),s.set(t*a,(e+1)*a,r[t][e+1]));},s.prototype.getConvexTrianglePillar=function(t,e,i){var o=this.pillarConvex,n=this.pillarOffset;if(this.cacheEnabled){if(s=this.getCachedConvexTrianglePillar(t,e,i))return this.pillarConvex=s.convex,void(this.pillarOffset=s.offset);o=new c,n=new u,this.pillarConvex=o,this.pillarOffset=n;}var s=this.data,r=this.elementSize,a=o.faces;o.vertices.length=6;for(var h=0;h<6;h++)o.vertices[h]||(o.vertices[h]=new u);a.length=5;for(h=0;h<5;h++)a[h]||(a[h]=[]);var l=o.vertices,p=(Math.min(s[t][e],s[t+1][e],s[t][e+1],s[t+1][e+1])-this.minValue)/2+this.minValue;i?(n.set((t+.75)*r,(e+.75)*r,p),l[0].set(.25*r,.25*r,s[t+1][e+1]-p),l[1].set(-.75*r,.25*r,s[t][e+1]-p),l[2].set(.25*r,-.75*r,s[t+1][e]-p),l[3].set(.25*r,.25*r,-p-1),l[4].set(-.75*r,.25*r,-p-1),l[5].set(.25*r,-.75*r,-p-1),a[0][0]=0,a[0][1]=1,a[0][2]=2,a[1][0]=5,a[1][1]=4,a[1][2]=3,a[2][0]=2,a[2][1]=5,a[2][2]=3,a[2][3]=0,a[3][0]=3,a[3][1]=4,a[3][2]=1,a[3][3]=0,a[4][0]=1,a[4][1]=4,a[4][2]=5,a[4][3]=2):(n.set((t+.25)*r,(e+.25)*r,p),l[0].set(-.25*r,-.25*r,s[t][e]-p),l[1].set(.75*r,-.25*r,s[t+1][e]-p),l[2].set(-.25*r,.75*r,s[t][e+1]-p),l[3].set(-.25*r,-.25*r,-p-1),l[4].set(.75*r,-.25*r,-p-1),l[5].set(-.25*r,.75*r,-p-1),a[0][0]=0,a[0][1]=1,a[0][2]=2,a[1][0]=5,a[1][1]=4,a[1][2]=3,a[2][0]=0,a[2][1]=2,a[2][2]=5,a[2][3]=3,a[3][0]=1,a[3][1]=0,a[3][2]=3,a[3][3]=4,a[4][0]=4,a[4][1]=5,a[4][2]=2,a[4][3]=1),o.computeNormals(),o.computeEdges(),o.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(t,e,i,o,n);},s.prototype.calculateLocalInertia=function(t,e){return (e=e||new u).set(0,0,0),e},s.prototype.volume=function(){return Number.MAX_VALUE},s.prototype.calculateWorldAABB=function(t,e,i,o){i.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),o.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);},s.prototype.updateBoundingSphereRadius=function(){var t=this.data,e=this.elementSize;this.boundingSphereRadius=new u(t.length*e,t[0].length*e,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).norm();},s.prototype.setHeightsFromImage=function(t,e){var i=document.createElement("canvas");i.width=t.width,i.height=t.height;var o=i.getContext("2d");o.drawImage(t,0,0);var n=o.getImageData(0,0,t.width,t.height),s=this.data;s.length=0,this.elementSize=Math.abs(e.x)/n.width;for(var r=0;r<n.height;r++){for(var a=[],h=0;h<n.width;h++){var l=(n.data[4*(r*n.height+h)]+n.data[4*(r*n.height+h)+1]+n.data[4*(r*n.height+h)+2])/4/255*e.z;e.x<0?a.push(l):a.unshift(l);}e.y<0?s.unshift(a):s.push(a);}this.updateMaxValue(),this.updateMinValue(),this.update();};},{"../math/Vec3":32,"../utils/Utils":55,"./ConvexPolyhedron":40,"./Shape":45}],43:[function(t,e,i){e.exports=s;var o=t("./Shape"),n=t("../math/Vec3");function s(){o.call(this,{type:o.types.PARTICLE});}((s.prototype=new o).constructor=s).prototype.calculateLocalInertia=function(t,e){return (e=e||new n).set(0,0,0),e},s.prototype.volume=function(){return 0},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=0;},s.prototype.calculateWorldAABB=function(t,e,i,o){i.copy(t),o.copy(t);};},{"../math/Vec3":32,"./Shape":45}],44:[function(t,e,i){e.exports=s;var o=t("./Shape"),n=t("../math/Vec3");function s(){o.call(this,{type:o.types.PLANE}),this.worldNormal=new n,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE;}((s.prototype=new o).constructor=s).prototype.computeWorldNormal=function(t){var e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1;},s.prototype.calculateLocalInertia=function(t,e){return e=e||new n},s.prototype.volume=function(){return Number.MAX_VALUE};var r=new n;s.prototype.calculateWorldAABB=function(t,e,i,o){r.set(0,0,1),e.vmult(r,r);var n=Number.MAX_VALUE;i.set(-n,-n,-n),o.set(n,n,n),1===r.x&&(o.x=t.x),1===r.y&&(o.y=t.y),1===r.z&&(o.z=t.z),-1===r.x&&(i.x=t.x),-1===r.y&&(i.y=t.y),-1===r.z&&(i.z=t.z);},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=Number.MAX_VALUE;};},{"../math/Vec3":32,"./Shape":45}],45:[function(t,e,i){e.exports=n;var o=t("../utils/EventTarget"),n=t("./Shape");t("../math/Vec3"),t("../math/Quaternion"),t("../material/Material");function n(t){t=t||{},o.apply(this),this.id=n.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=!t.collisionResponse||t.collisionResponse,this.collisionFilterGroup=void 0!==t.collisionFilterGroup?t.collisionFilterGroup:1,this.collisionFilterMask=void 0!==t.collisionFilterMask?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null;}n.prototype=new o,(n.prototype.constructor=n).prototype.updateBoundingSphereRadius=function(){throw "computeBoundingSphereRadius() not implemented for shape type "+this.type},n.prototype.volume=function(){throw "volume() not implemented for shape type "+this.type},n.prototype.calculateLocalInertia=function(t,e){throw "calculateLocalInertia() not implemented for shape type "+this.type},n.idCounter=0,n.types={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};},{"../material/Material":26,"../math/Quaternion":30,"../math/Vec3":32,"../utils/EventTarget":51,"./Shape":45}],46:[function(t,e,i){e.exports=s;var o=t("./Shape"),n=t("../math/Vec3");function s(t){if(o.call(this,{type:o.types.SPHERE}),this.radius=void 0!==t?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius();}((s.prototype=new o).constructor=s).prototype.calculateLocalInertia=function(t,e){e=e||new n;var i=2*t*this.radius*this.radius/5;return e.x=i,e.y=i,e.z=i,e},s.prototype.volume=function(){return 4*Math.PI*this.radius/3},s.prototype.updateBoundingSphereRadius=function(){this.boundingSphereRadius=this.radius;},s.prototype.calculateWorldAABB=function(t,e,i,o){for(var n=this.radius,s=["x","y","z"],r=0;r<s.length;r++){var a=s[r];i[a]=t[a]-n,o[a]=t[a]+n;}};},{"../math/Vec3":32,"./Shape":45}],47:[function(t,e,i){e.exports=g;var o=t("./Shape"),l=t("../math/Vec3"),n=(t("../math/Quaternion"),t("../math/Transform")),p=t("../collision/AABB"),s=t("../utils/Octree"),w=t("../math/CMath");function g(t,e){o.call(this,{type:o.types.TRIMESH}),this.vertices=new Float32Array(t),this.indices=new Int16Array(e),this.normals=new Float32Array(e.length),this.aabb=new p,this.edges=null,this.scale=new l(1,1,1),this.tree=new s,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree();}(g.prototype=new o).constructor=g;var a=new l;g.prototype.updateTree=function(){var t=this.tree;t.reset(),t.aabb.copy(this.aabb);var e=this.scale;t.aabb.lowerBound.x*=1/e.x,t.aabb.lowerBound.y*=1/e.y,t.aabb.lowerBound.z*=1/e.z,t.aabb.upperBound.x*=1/e.x,t.aabb.upperBound.y*=1/e.y,t.aabb.upperBound.z*=1/e.z;for(var i=new p,o=new l,n=new l,s=new l,r=[o,n,s],a=0;a<this.indices.length/3;a++){var h=3*a;this._getUnscaledVertex(this.indices[h],o),this._getUnscaledVertex(this.indices[1+h],n),this._getUnscaledVertex(this.indices[2+h],s),i.setFromPoints(r),t.insert(i,a);}t.removeEmptyNodes();};var h=new p;g.prototype.getTrianglesInAABB=function(t,e){h.copy(t);var i=this.scale,o=i.x,n=i.y,s=i.z,r=h.lowerBound,a=h.upperBound;return r.x/=o,r.y/=n,r.z/=s,a.x/=o,a.y/=n,a.z/=s,this.tree.aabbQuery(h,e)},g.prototype.setScale=function(t){var e=this.scale.x===this.scale.y===this.scale.z,i=t.x===t.y===t.z;e&&i||this.updateNormals(),this.scale.copy(t),this.updateAABB(),this.updateBoundingSphereRadius();},g.prototype.updateNormals=function(){for(var t=a,e=this.normals,i=0;i<this.indices.length/3;i++){var o=3*i,n=this.indices[o],s=this.indices[1+o],r=this.indices[2+o];this.getVertex(n,v),this.getVertex(s,y),this.getVertex(r,f),g.computeNormal(y,v,f,t),e[o]=t.x,e[1+o]=t.y,e[2+o]=t.z;}},g.prototype.updateEdges=function(){function t(t,e){i[n<s?n+"_"+s:s+"_"+n]=!0;}for(var i={},e=0;e<this.indices.length/3;e++){var o=3*e,n=this.indices[o],s=this.indices[1+o];this.indices[2+o];t(),t(),t();}var r=Object.keys(i);this.edges=new Int16Array(2*r.length);for(e=0;e<r.length;e++){var a=r[e].split("_");this.edges[2*e]=parseInt(a[0],10),this.edges[2*e+1]=parseInt(a[1],10);}},g.prototype.getEdgeVertex=function(t,e,i){var o=this.edges[2*t+(e?1:0)];this.getVertex(o,i);};var r=new l,c=new l;g.prototype.getEdgeVector=function(t,e){var i=r,o=c;this.getEdgeVertex(t,0,i),this.getEdgeVertex(t,1,o),o.vsub(i,e);};var u=new l,d=new l;g.computeNormal=function(t,e,i,o){e.vsub(t,d),i.vsub(e,u),u.cross(d,o),o.isZero()||o.normalize();};var v=new l,y=new l,f=new l;g.prototype.getVertex=function(t,e){var i=this.scale;return this._getUnscaledVertex(t,e),e.x*=i.x,e.y*=i.y,e.z*=i.z,e},g.prototype._getUnscaledVertex=function(t,e){var i=3*t,o=this.vertices;return e.set(o[i],o[1+i],o[2+i])},g.prototype.getWorldVertex=function(t,e,i,o){return this.getVertex(t,o),n.pointToWorldFrame(e,i,o,o),o},g.prototype.getTriangleVertices=function(t,e,i,o){var n=3*t;this.getVertex(this.indices[n],e),this.getVertex(this.indices[1+n],i),this.getVertex(this.indices[2+n],o);},g.prototype.getNormal=function(t,e){var i=3*t;return e.set(this.normals[i],this.normals[1+i],this.normals[2+i])};var m=new p;g.prototype.calculateLocalInertia=function(t,e){this.computeLocalAABB(m);var i=m.upperBound.x-m.lowerBound.x,o=m.upperBound.y-m.lowerBound.y,n=m.upperBound.z-m.lowerBound.z;return e.set(1/12*t*(2*o*2*o+2*n*2*n),1/12*t*(2*i*2*i+2*n*2*n),1/12*t*(2*o*2*o+2*i*2*i))};var x=new l;g.prototype.computeLocalAABB=function(t){var e=t.lowerBound,i=t.upperBound,o=this.vertices.length,n=(this.vertices,x);this.getVertex(0,n),e.copy(n),i.copy(n);for(var s=0;s!==o;s++)this.getVertex(s,n),n.x<e.x?e.x=n.x:n.x>i.x&&(i.x=n.x),n.y<e.y?e.y=n.y:n.y>i.y&&(i.y=n.y),n.z<e.z?e.z=n.z:n.z>i.z&&(i.z=n.z);},g.prototype.updateAABB=function(){this.computeLocalAABB(this.aabb);},g.prototype.updateBoundingSphereRadius=function(){for(var t=0,e=this.vertices,i=new l,o=0,n=e.length/3;o!==n;o++){this.getVertex(o,i);var s=i.norm2();t<s&&(t=s);}this.boundingSphereRadius=Math.sqrt(t);};new l;var b=new n,B=new p;g.prototype.calculateWorldAABB=function(t,e,i,o){var n=b,s=B;n.position=t,n.quaternion=e,this.aabb.toWorldFrame(n,s),i.copy(s.lowerBound),o.copy(s.upperBound);},g.prototype.volume=function(){return 4*Math.PI*this.boundingSphereRadius/3},g.createTorus=function(t,e,i,o,n){t=t||1,e=e||.5,i=i||8,o=o||6,n=n||2*Math.PI;for(var s=[],r=[],a=0;a<=i;a++)for(var h=0;h<=o;h++){var l=h/o*n,p=a/i*Math.PI*2,c=(t+e*w.cos(p))*w.cos(l),u=(t+e*w.cos(p))*w.sin(l),d=e*w.sin(p);s.push(c,u,d);}for(a=1;a<=i;a++)for(h=1;h<=o;h++){var v=(o+1)*a+h-1,y=(o+1)*(a-1)+h-1,f=(o+1)*(a-1)+h,m=(o+1)*a+h;r.push(v,y,m),r.push(y,f,m);}return new g(s,r)};},{"../collision/AABB":3,"../math/CMath":27,"../math/Quaternion":30,"../math/Transform":31,"../math/Vec3":32,"../utils/Octree":52,"./Shape":45}],48:[function(t,e,i){e.exports=n;t("../math/Vec3"),t("../math/Quaternion");var o=t("./Solver");function n(){o.call(this),this.iterations=10,this.tolerance=1e-7;}n.prototype=new o;var M=[],q=[],F=[];n.prototype.solve=function(t,e){var i,o,n,s,r,a=0,h=this.iterations,l=this.tolerance*this.tolerance,p=this.equations,c=p.length,u=e.bodies,d=u.length,v=t;if(0!==c)for(var y=0;y!==d;y++)u[y].updateSolveMassProperties();var f=q,m=F,w=M;f.length=c,m.length=c,w.length=c;for(y=0;y!==c;y++){var g=p[y];w[y]=0,m[y]=g.computeB(v),f[y]=1/g.computeC();}if(0!==c){for(y=0;y!==d;y++){var x=(A=u[y]).vlambda,b=A.wlambda;x.set(0,0,0),b.set(0,0,0);}for(a=0;a!==h;a++){for(var B=s=0;B!==c;B++){g=p[B];i=m[B],o=f[B],(r=w[B])+(n=o*(i-g.computeGWlambda()-g.eps*r))<g.minForce?n=g.minForce-r:r+n>g.maxForce&&(n=g.maxForce-r),w[B]+=n,s+=0<n?n:-n,g.addToWlambda(n);}if(s*s<l)break}for(y=0;y!==d;y++){var A,E=(A=u[y]).velocity,S=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),E.vadd(A.vlambda,E),A.wlambda.vmul(A.angularFactor,A.wlambda),S.vadd(A.wlambda,S);}for(var C=p.length,z=1/v;C--;)p[C].multiplier=w[C]*z;}return a};},{"../math/Quaternion":30,"../math/Vec3":32,"./Solver":49}],49:[function(t,e,i){function o(){this.equations=[];}(e.exports=o).prototype.solve=function(t,e){return 0},o.prototype.addEquation=function(t){t.enabled&&this.equations.push(t);},o.prototype.removeEquation=function(t){var e=this.equations,i=e.indexOf(t);-1!==i&&e.splice(i,1);},o.prototype.removeAllEquations=function(){this.equations.length=0;};},{}],50:[function(t,e,i){e.exports=s;t("../math/Vec3"),t("../math/Quaternion");var o=t("./Solver"),n=t("../objects/Body");function s(t){for(o.call(this),this.iterations=10,this.tolerance=1e-7,this.subsolver=t,this.nodes=[],this.nodePool=[];this.nodePool.length<128;)this.nodePool.push(this.createNode());}s.prototype=new o;var b=[],B=[],A={bodies:[]},r=n.STATIC;function E(t){for(var e=t.length,i=0;i!==e;i++){var o=t[i];if(!(o.visited||o.body.type&r))return o}return !1}var a=[];function S(t,e,i,o){for(a.push(t),t.visited=!0,e(t,i,o);a.length;)for(var n,s=a.pop();n=E(s.children);)n.visited=!0,e(n,i,o),a.push(n);}function C(t,e,i){e.push(t.body);for(var o=t.eqs.length,n=0;n!==o;n++){var s=t.eqs[n];-1===i.indexOf(s)&&i.push(s);}}function z(t,e){return e.id-t.id}s.prototype.createNode=function(){return {body:null,children:[],eqs:[],visited:!1}},s.prototype.solve=function(t,e){for(var i=b,o=this.nodePool,n=e.bodies,s=this.equations,r=s.length,a=n.length,h=this.subsolver;o.length<a;)o.push(this.createNode());i.length=a;for(var l=0;l<a;l++)i[l]=o[l];for(l=0;l!==a;l++){var p=i[l];p.body=n[l],p.children.length=0,p.eqs.length=0,p.visited=!1;}for(var c=0;c!==r;c++){var u=s[c],d=(l=n.indexOf(u.bi),n.indexOf(u.bj)),v=i[l],y=i[d];v.children.push(y),v.eqs.push(u),y.children.push(v),y.eqs.push(u);}var f,m=0,w=B;h.tolerance=this.tolerance,h.iterations=this.iterations;for(var g=A;f=E(i);){w.length=0,g.bodies.length=0,S(f,C,g.bodies,w);var x=w.length;w=w.sort(z);for(l=0;l!==x;l++)h.addEquation(w[l]);h.solve(t,g);h.removeAllEquations(),m++;}return m};},{"../math/Quaternion":30,"../math/Vec3":32,"../objects/Body":33,"./Solver":49}],51:[function(t,e,i){function o(){}(e.exports=o).prototype={constructor:o,addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});var i=this._listeners;return void 0===i[t]&&(i[t]=[]),-1===i[t].indexOf(e)&&i[t].push(e),this},hasEventListener:function(t,e){if(void 0===this._listeners)return !1;var i=this._listeners;return void 0!==i[t]&&-1!==i[t].indexOf(e)},hasAnyEventListener:function(t){return void 0!==this._listeners&&void 0!==this._listeners[t]},removeEventListener:function(t,e){if(void 0===this._listeners)return this;var i=this._listeners;if(void 0===i[t])return this;var o=i[t].indexOf(e);return -1!==o&&i[t].splice(o,1),this},dispatchEvent:function(t){if(void 0===this._listeners)return this;var e=this._listeners[t.type];if(void 0!==e){t.target=this;for(var i=0,o=e.length;i<o;i++)e[i].call(this,t);}return this}};},{}],52:[function(t,e,i){var h=t("../collision/AABB"),l=t("../math/Vec3");function p(t){t=t||{},this.root=t.root||null,this.aabb=t.aabb?t.aabb.clone():new h,this.data=[],this.children=[];}function o(t,e){(e=e||{}).root=null,e.aabb=t,p.call(this,e),this.maxDepth=void 0!==e.maxDepth?e.maxDepth:8;}(e.exports=o).prototype=new p,p.prototype.reset=function(t,e){this.children.length=this.data.length=0;},p.prototype.insert=function(t,e,i){var o=this.data;if(i=i||0,!this.aabb.contains(t))return !1;var n=this.children;if(i<(this.maxDepth||this.root.maxDepth)){var s=!1;n.length||(this.subdivide(),s=!0);for(var r=0;8!==r;r++)if(n[r].insert(t,e,i+1))return !0;s&&(n.length=0);}return o.push(e),!0};var c=new l;p.prototype.subdivide=function(){var t=this.aabb,e=t.lowerBound,i=t.upperBound,o=this.children;o.push(new p({aabb:new h({lowerBound:new l(0,0,0)})}),new p({aabb:new h({lowerBound:new l(1,0,0)})}),new p({aabb:new h({lowerBound:new l(1,1,0)})}),new p({aabb:new h({lowerBound:new l(1,1,1)})}),new p({aabb:new h({lowerBound:new l(0,1,1)})}),new p({aabb:new h({lowerBound:new l(0,0,1)})}),new p({aabb:new h({lowerBound:new l(1,0,1)})}),new p({aabb:new h({lowerBound:new l(0,1,0)})})),i.vsub(e,c),c.scale(.5,c);for(var n=this.root||this,s=0;8!==s;s++){var r=o[s];r.root=n;var a=r.aabb.lowerBound;a.x*=c.x,a.y*=c.y,a.z*=c.z,a.vadd(e,a),a.vadd(c,r.aabb.upperBound);}},p.prototype.aabbQuery=function(t,e){this.data,this.children;for(var i=[this];i.length;){var o=i.pop();o.aabb.overlaps(t)&&Array.prototype.push.apply(e,o.data),Array.prototype.push.apply(i,o.children);}return e};var n=new h;p.prototype.rayQuery=function(t,e,i){return t.getAABB(n),n.toLocalFrame(e,n),this.aabbQuery(n,i),i},p.prototype.removeEmptyNodes=function(){for(var t=this.children.length-1;0<=t;t--)this.children[t].removeEmptyNodes(),this.children[t].children.length||this.children[t].data.length||this.children.splice(t,1);};},{"../collision/AABB":3,"../math/Vec3":32}],53:[function(t,e,i){function o(){this.objects=[],this.type=Object;}(e.exports=o).prototype.release=function(){for(var t=arguments.length,e=0;e!==t;e++)this.objects.push(arguments[e]);return this},o.prototype.get=function(){return 0===this.objects.length?this.constructObject():this.objects.pop()},o.prototype.constructObject=function(){throw new Error("constructObject() not implemented in this Pool subclass yet!")},o.prototype.resize=function(t){for(var e=this.objects;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this};},{}],54:[function(t,e,i){function o(){this.data={keys:[]};}(e.exports=o).prototype.get=function(t,e){if(e<t){var i=e;e=t,t=i;}return this.data[t+"-"+e]},o.prototype.set=function(t,e,i){if(e<t){var o=e;e=t,t=o;}var n=t+"-"+e;return this.get(t,e)||this.data.keys.push(n),this.data[n]=i,this.data[n]},o.prototype.del=function(t,e){if(e<t){var i=e;e=t,t=i;}var o=t+"-"+e,n=this.data.keys.indexOf(o);return 0<=n&&(this.data.keys.splice(n,1),delete this.data[o],!0)},o.prototype.reset=function(){this.data={keys:[]};},o.prototype.getLength=function(){return this.data.keys.length},o.prototype.getKeyByIndex=function(t){return this.data.keys[t]},o.prototype.getDataByKey=function(t){return this.data[t]};},{}],55:[function(t,e,i){function o(){}(e.exports=o).defaults=function(t,e){for(var i in t=t||{},e)i in t||(t[i]=e[i]);return t};},{}],56:[function(t,e,i){e.exports=s;var o=t("../math/Vec3"),n=t("./Pool");function s(){n.call(this),this.type=o;}(s.prototype=new n).constructObject=function(){return new o};},{"../math/Vec3":32,"./Pool":53}],57:[function(t,e,i){e.exports=a;var o=t("../collision/AABB"),E=t("../objects/Body"),n=t("../shapes/Shape"),I=t("../collision/Ray"),w=t("../math/Vec3"),N=t("../math/Transform"),s=(t("../shapes/ConvexPolyhedron"),t("../math/Quaternion")),r=(t("../solver/Solver"),t("../utils/Vec3Pool")),p=t("../equations/ContactEquation"),f=t("../equations/FrictionEquation");function a(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new r,this.world=t,this.currentContactMaterial=null,this.enableFrictionReduction=!1;}a.prototype.createContactEquation=function(t,e,i,o,n,s){var r;this.contactPointPool.length?((r=this.contactPointPool.pop()).bi=t,r.bj=e):r=new p(t,e),r.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&o.collisionResponse;var a=this.currentContactMaterial;r.restitution=a.restitution,r.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);var h=i.material||t.material,l=o.material||e.material;return h&&l&&0<=h.restitution&&0<=l.restitution&&(r.restitution=h.restitution*l.restitution),r.si=n||i,r.sj=s||o,r},a.prototype.createFrictionEquationsFromContact=function(t,e){var i=t.bi,o=t.bj,n=t.si,s=t.sj,r=this.world,a=this.currentContactMaterial,h=a.friction,l=n.material||i.material,p=s.material||o.material;if(l&&p&&0<=l.friction&&0<=p.friction&&(h=l.friction*p.friction),0<h){var c=h*r.gravity.length(),u=i.invMass+o.invMass;0<u&&(u=1/u);var d=this.frictionEquationPool,v=d.length?d.pop():new f(i,o,c*u),y=d.length?d.pop():new f(i,o,c*u);return v.bi=y.bi=i,v.bj=y.bj=o,v.minForce=y.minForce=-c*u,v.maxForce=y.maxForce=c*u,v.ri.copy(t.ri),v.rj.copy(t.rj),y.ri.copy(t.ri),y.rj.copy(t.rj),t.ni.tangents(v.t,y.t),v.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),y.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,r.dt),v.enabled=y.enabled=t.enabled,e.push(v,y),!0}return !1};var h=new w,l=new w,c=new w;a.prototype.createFrictionFromAverage=function(t){var e=this.result[this.result.length-1];if(this.createFrictionEquationsFromContact(e,this.frictionResult)&&1!==t){var i=this.frictionResult[this.frictionResult.length-2],o=this.frictionResult[this.frictionResult.length-1];h.setZero(),l.setZero(),c.setZero();for(var n=e.bi,s=(e.bj,0);s!==t;s++)(e=this.result[this.result.length-1-s]).bodyA!==n?(h.vadd(e.ni,h),l.vadd(e.ri,l),c.vadd(e.rj,c)):(h.vsub(e.ni,h),l.vadd(e.rj,l),c.vadd(e.ri,c));var r=1/t;l.scale(r,i.ri),c.scale(r,i.rj),o.ri.copy(i.ri),o.rj.copy(i.rj),h.normalize(),h.tangents(i.t,o.t);}};var S=new w,C=new w,z=new s,M=new s;a.prototype.getContacts=function(t,e,i,o,n,s,r){this.contactPointPool=n,this.frictionEquationPool=r,this.result=o,this.frictionResult=s;for(var a=z,h=M,l=S,p=C,c=0,u=t.length;c!==u;c++){var d=t[c],v=e[c],y=null;d.material&&v.material&&(y=i.getContactMaterial(d.material,v.material)||null);for(var f=0==d.collisionResponse||0==v.collisionResponse||d.type&E.KINEMATIC&&v.type&E.STATIC||d.type&E.STATIC&&v.type&E.KINEMATIC||d.type&E.KINEMATIC&&v.type&E.KINEMATIC,m=0;m<d.shapes.length;m++){d.quaternion.mult(d.shapeOrientations[m],a),d.quaternion.vmult(d.shapeOffsets[m],l),l.vadd(d.position,l);for(var w=d.shapes[m],g=0;g<v.shapes.length;g++){v.quaternion.mult(v.shapeOrientations[g],h),v.quaternion.vmult(v.shapeOffsets[g],p),p.vadd(v.position,p);var x=v.shapes[g];if(w.collisionFilterMask&x.collisionFilterGroup&&x.collisionFilterMask&w.collisionFilterGroup&&!(l.distanceTo(p)>w.boundingSphereRadius+x.boundingSphereRadius)){f|=0==w.collisionResponse||0==x.collisionResponse;var b=null;w.material&&x.material&&(b=i.getContactMaterial(w.material,x.material)||null),this.currentContactMaterial=b||y||i.defaultContactMaterial;var B=this[w.type|x.type];if(B){if((w.type<x.type?B.call(this,w,x,l,p,a,h,d,v,w,x,f):B.call(this,x,w,p,l,h,a,v,d,w,x,f))&&f){i.shapeOverlapKeeper.set(w.id,x.id),i.bodyOverlapKeeper.set(d.id,v.id);var A={si:w,sj:x};i.triggerDic.set(w.id,x.id,A),i.oldTriggerDic.set(w.id,x.id,A);}}}}}}};a.prototype[n.types.BOX|n.types.BOX]=a.prototype.boxBox=function(t,e,i,o,n,s,r,a,h,l,p){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,o,n,s,r,a,t,e,p)},a.prototype[n.types.BOX|n.types.CONVEXPOLYHEDRON]=a.prototype.boxConvex=function(t,e,i,o,n,s,r,a,h,l,p){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,o,n,s,r,a,t,e,p)},a.prototype[n.types.BOX|n.types.PARTICLE]=a.prototype.boxParticle=function(t,e,i,o,n,s,r,a,h,l,p){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,o,n,s,r,a,t,e,p)},a.prototype[n.types.SPHERE]=a.prototype.sphereSphere=function(t,e,i,o,n,s,r,a,h,l,p){if(p)return i.distanceSquared(o)<Math.pow(t.radius+e.radius,2);var c=this.createContactEquation(r,a,t,e,h,l);o.vsub(i,c.ni),c.ni.normalize(),c.ri.copy(c.ni),c.rj.copy(c.ni),c.ri.mult(t.radius,c.ri),c.rj.mult(-e.radius,c.rj),c.ri.vadd(i,c.ri),c.ri.vsub(r.position,c.ri),c.rj.vadd(o,c.rj),c.rj.vsub(a.position,c.rj),this.result.push(c),this.createFrictionEquationsFromContact(c,this.frictionResult);};var g=new w,x=new w,b=new w;a.prototype[n.types.PLANE|n.types.TRIMESH]=a.prototype.planeTrimesh=function(t,e,i,o,n,s,r,a,h,l,p){var c=new w,u=g;u.set(0,0,1),n.vmult(u,u);for(var d=0;d<e.vertices.length/3;d++){e.getVertex(d,c);var v=new w;v.copy(c),N.pointToWorldFrame(o,s,v,c);var y=x;if(c.vsub(i,y),u.dot(y)<=0){if(p)return !0;var f=this.createContactEquation(r,a,t,e,h,l);f.ni.copy(u);var m=b;u.scale(y.dot(u),m),c.vsub(m,m),f.ri.copy(m),f.ri.vsub(r.position,f.ri),f.rj.copy(c),f.rj.vsub(a.position,f.rj),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult);}}};var L=new w,W=new w,j=(new w,new w),O=new w,k=new w,_=new w,D=new w,U=new w,H=new w,G=new w,X=new w,Q=new w,Y=new w,K=new o,Z=[];a.prototype[n.types.SPHERE|n.types.TRIMESH]=a.prototype.sphereTrimesh=function(t,e,i,o,n,s,r,a,h,l,p){var c=k,u=_,d=D,v=U,y=H,f=G,m=K,w=O,g=W,x=Z;N.pointToLocalFrame(o,s,i,y);var b=t.radius;m.lowerBound.set(y.x-b,y.y-b,y.z-b),m.upperBound.set(y.x+b,y.y+b,y.z+b),e.getTrianglesInAABB(m,x);for(var B=j,A=t.radius*t.radius,E=0;E<x.length;E++)for(var S=0;S<3;S++)if(e.getVertex(e.indices[3*x[E]+S],B),B.vsub(y,g),g.norm2()<=A){if(w.copy(B),N.pointToWorldFrame(o,s,w,B),B.vsub(i,g),p)return !0;(M=this.createContactEquation(r,a,t,e,h,l)).ni.copy(g),M.ni.normalize(),M.ri.copy(M.ni),M.ri.scale(t.radius,M.ri),M.ri.vadd(i,M.ri),M.ri.vsub(r.position,M.ri),M.rj.copy(B),M.rj.vsub(a.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);}for(E=0;E<x.length;E++)for(S=0;S<3;S++){e.getVertex(e.indices[3*x[E]+S],c),e.getVertex(e.indices[3*x[E]+(S+1)%3],u),u.vsub(c,d),y.vsub(u,f);var C=f.dot(d);y.vsub(c,f);var z=f.dot(d);if(0<z&&C<0)if(y.vsub(c,f),v.copy(d),v.normalize(),z=f.dot(v),v.scale(z,f),f.vadd(c,f),(V=f.distanceTo(y))<t.radius){if(p)return !0;var M=this.createContactEquation(r,a,t,e,h,l);f.vsub(y,M.ni),M.ni.normalize(),M.ni.scale(t.radius,M.ri),N.pointToWorldFrame(o,s,f,f),f.vsub(a.position,M.rj),N.vectorToWorldFrame(s,M.ni,M.ni),N.vectorToWorldFrame(s,M.ri,M.ri),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);}}for(var q=X,F=Q,R=Y,T=L,P=(E=0,x.length);E!==P;E++){e.getTriangleVertices(x[E],q,F,R),e.getNormal(x[E],T),y.vsub(q,f);var V=f.dot(T);if(T.scale(V,f),y.vsub(f,f),V=f.distanceTo(y),I.pointInTriangle(f,q,F,R)&&V<t.radius){if(p)return !0;M=this.createContactEquation(r,a,t,e,h,l);f.vsub(y,M.ni),M.ni.normalize(),M.ni.scale(t.radius,M.ri),N.pointToWorldFrame(o,s,f,f),f.vsub(a.position,M.rj),N.vectorToWorldFrame(s,M.ni,M.ni),N.vectorToWorldFrame(s,M.ri,M.ri),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult);}}x.length=0;};var v=new w,y=new w,m=new w,B=new w,A=new w;a.prototype[n.types.SPHERE|n.types.PLANE]=a.prototype.spherePlane=function(t,e,i,o,n,s,r,a,h,l,p){if(m.set(0,0,1),s.vmult(m,m),m.negate(m),m.normalize(),m.mult(t.radius,B),i.vsub(o,v),m.mult(m.dot(v),y),v.vsub(y,A),-v.dot(m)<=t.radius){if(p)return !0;var c=this.createContactEquation(r,a,t,e,h,l);c.ni.copy(m),c.ri.copy(B),c.rj.copy(A);var u=c.ri,d=c.rj;u.vadd(i,u),u.vsub(r.position,u),d.vadd(o,d),d.vsub(a.position,d),this.result.push(c),this.createFrictionEquationsFromContact(c,this.frictionResult);}return !1};var u=new w,d=new w,q=new w;function J(t,e,i){for(var o=null,n=t.length,s=0;s!==n;s++){var r=t[s],a=u;t[(s+1)%n].vsub(r,a);var h=d;a.cross(e,h);var l=q;i.vsub(r,l);var p=h.dot(l);if(!(null===o||0<p&&!0===o||p<=0&&!1===o))return !1;null===o&&(o=0<p);}return !0}var $=new w,tt=new w,et=new w,it=new w,ot=[new w,new w,new w,new w,new w,new w],nt=new w,st=new w,rt=new w,at=new w;a.prototype[n.types.SPHERE|n.types.BOX]=a.prototype.sphereBox=function(t,e,i,o,n,s,r,a,h,l,p){var c=this.v3pool,u=ot;i.vsub(o,$),e.getSideNormals(u,s);for(var d=t.radius,v=!1,y=st,f=rt,m=at,w=null,g=0,x=0,b=0,B=null,A=0,E=u.length;A!==E&&!1===v;A++){var S=tt;S.copy(u[A]);var C=S.norm();S.normalize();var z=$.dot(S);if(z<C+d&&0<z){var M=et,q=it;M.copy(u[(A+1)%3]),q.copy(u[(A+2)%3]);var F=M.norm(),R=q.norm();M.normalize(),q.normalize();var T=$.dot(M),P=$.dot(q);if(T<F&&-F<T&&P<R&&-R<P){var V=Math.abs(z-C-d);if((null===B||V<B)&&(B=V,x=T,b=P,w=C,y.copy(S),f.copy(M),m.copy(q),g++,p))return !0}}}if(g){v=!0;var I=this.createContactEquation(r,a,t,e,h,l);y.mult(-d,I.ri),I.ni.copy(y),I.ni.negate(I.ni),y.mult(w,y),f.mult(x,f),y.vadd(f,y),m.mult(b,m),y.vadd(m,I.rj),I.ri.vadd(i,I.ri),I.ri.vsub(r.position,I.ri),I.rj.vadd(o,I.rj),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);}for(var N=c.get(),L=nt,W=0;2!==W&&!v;W++)for(var j=0;2!==j&&!v;j++)for(var O=0;2!==O&&!v;O++)if(N.set(0,0,0),W?N.vadd(u[0],N):N.vsub(u[0],N),j?N.vadd(u[1],N):N.vsub(u[1],N),O?N.vadd(u[2],N):N.vsub(u[2],N),o.vadd(N,L),L.vsub(i,L),L.norm2()<d*d){if(p)return !0;v=!0,(I=this.createContactEquation(r,a,t,e,h,l)).ri.copy(L),I.ri.normalize(),I.ni.copy(I.ri),I.ri.mult(d,I.ri),I.rj.copy(N),I.ri.vadd(i,I.ri),I.ri.vsub(r.position,I.ri),I.rj.vadd(o,I.rj),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);}c.release(N),N=null;var k=c.get(),_=c.get(),D=(I=c.get(),c.get()),U=(V=c.get(),u.length);for(W=0;W!==U&&!v;W++)for(j=0;j!==U&&!v;j++)if(W%3!=j%3){u[j].cross(u[W],k),k.normalize(),u[W].vadd(u[j],_),I.copy(i),I.vsub(_,I),I.vsub(o,I);var H=I.dot(k);k.mult(H,D);for(O=0;O===W%3||O===j%3;)O++;V.copy(i),V.vsub(D,V),V.vsub(_,V),V.vsub(o,V);var G=Math.abs(H),X=V.norm();if(G<u[O].norm()&&X<d){if(p)return !0;v=!0;var Q=this.createContactEquation(r,a,t,e,h,l);_.vadd(D,Q.rj),Q.rj.copy(Q.rj),V.negate(Q.ni),Q.ni.normalize(),Q.ri.copy(Q.rj),Q.ri.vadd(o,Q.ri),Q.ri.vsub(i,Q.ri),Q.ri.normalize(),Q.ri.mult(d,Q.ri),Q.ri.vadd(i,Q.ri),Q.ri.vsub(r.position,Q.ri),Q.rj.vadd(o,Q.rj),Q.rj.vsub(a.position,Q.rj),this.result.push(Q),this.createFrictionEquationsFromContact(Q,this.frictionResult);}}c.release(k,_,I,D,V);};var ht=new w,lt=new w,pt=new w,ct=new w,ut=new w,dt=new w,vt=new w,yt=new w,ft=new w,mt=new w;a.prototype[n.types.SPHERE|n.types.CONVEXPOLYHEDRON]=a.prototype.sphereConvex=function(t,e,i,o,n,s,r,a,h,l,p){var c=this.v3pool;i.vsub(o,ht);for(var u=e.faceNormals,d=e.faces,v=e.vertices,y=t.radius,f=0;f!==v.length;f++){var m=v[f],w=ut;s.vmult(m,w),o.vadd(w,w);var g=ct;if(w.vsub(i,g),g.norm2()<y*y)return !!p||(x=!0,(V=this.createContactEquation(r,a,t,e,h,l)).ri.copy(g),V.ri.normalize(),V.ni.copy(V.ri),V.ri.mult(y,V.ri),w.vsub(o,V.rj),V.ri.vadd(i,V.ri),V.ri.vsub(r.position,V.ri),V.rj.vadd(o,V.rj),V.rj.vsub(a.position,V.rj),this.result.push(V),void this.createFrictionEquationsFromContact(V,this.frictionResult))}for(var x=!1,b=(f=0,d.length);f!==b&&!1===x;f++){var B=u[f],A=d[f],E=dt;s.vmult(B,E);var S=vt;s.vmult(v[A[0]],S),S.vadd(o,S);var C=yt;E.mult(-y,C),i.vadd(C,C);var z=ft;C.vsub(S,z);var M=z.dot(E),q=mt;if(i.vsub(S,q),M<0&&0<q.dot(E)){for(var F=[],R=0,T=A.length;R!==T;R++){var P=c.get();s.vmult(v[A[R]],P),o.vadd(P,P),F.push(P);}if(J(F,E,i)){if(p)return !0;x=!0;var V=this.createContactEquation(r,a,t,e,h,l);E.mult(-y,V.ri),E.negate(V.ni);var I=c.get();E.mult(-M,I);var N=c.get();E.mult(-y,N),i.vsub(o,V.rj),V.rj.vadd(N,V.rj),V.rj.vadd(I,V.rj),V.rj.vadd(o,V.rj),V.rj.vsub(a.position,V.rj),V.ri.vadd(i,V.ri),V.ri.vsub(r.position,V.ri),c.release(I),c.release(N),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);R=0;for(var L=F.length;R!==L;R++)c.release(F[R]);return}for(R=0;R!==A.length;R++){var W=c.get(),j=c.get();s.vmult(v[A[(R+1)%A.length]],W),s.vmult(v[A[(R+2)%A.length]],j),o.vadd(W,W),o.vadd(j,j);var O=lt;j.vsub(W,O);var k=pt;O.unit(k);var _=c.get(),D=c.get();i.vsub(W,D);var U=D.dot(k);k.mult(U,_),_.vadd(W,_);var H=c.get();if(_.vsub(i,H),0<U&&U*U<O.norm2()&&H.norm2()<y*y){if(p)return !0;V=this.createContactEquation(r,a,t,e,h,l);_.vsub(o,V.rj),_.vsub(i,V.ni),V.ni.normalize(),V.ni.mult(y,V.ri),V.rj.vadd(o,V.rj),V.rj.vsub(a.position,V.rj),V.ri.vadd(i,V.ri),V.ri.vsub(r.position,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult);for(R=0,L=F.length;R!==L;R++)c.release(F[R]);return c.release(W),c.release(j),c.release(_),c.release(H),void c.release(D)}c.release(W),c.release(j),c.release(_),c.release(H),c.release(D);}for(R=0,L=F.length;R!==L;R++)c.release(F[R]);}}};new w,new w;a.prototype[n.types.PLANE|n.types.BOX]=a.prototype.planeBox=function(t,e,i,o,n,s,r,a,h,l,p){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,o,n,s,r,a,t,e,p)};var F=new w,R=new w,T=new w,P=new w;a.prototype[n.types.PLANE|n.types.CONVEXPOLYHEDRON]=a.prototype.planeConvex=function(t,e,i,o,n,s,r,a,h,l,p){var c=F,u=R;u.set(0,0,1),n.vmult(u,u);for(var d=0,v=T,y=0;y!==e.vertices.length;y++){if(c.copy(e.vertices[y]),s.vmult(c,c),o.vadd(c,c),c.vsub(i,v),u.dot(v)<=0){if(p)return !0;var f=this.createContactEquation(r,a,t,e,h,l),m=P;u.mult(u.dot(v),m),c.vsub(m,m),m.vsub(i,f.ri),f.ni.copy(u),c.vsub(o,f.rj),f.ri.vadd(i,f.ri),f.ri.vsub(r.position,f.ri),f.rj.vadd(o,f.rj),f.rj.vsub(a.position,f.rj),this.result.push(f),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(f,this.frictionResult);}}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d);};var V=new w,wt=new w;a.prototype[n.types.CONVEXPOLYHEDRON]=a.prototype.convexConvex=function(t,e,i,o,n,s,r,a,h,l,p,c,u){var d=V;if(!(i.distanceTo(o)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,n,o,s,d,c,u)){var v=[],y=wt;t.clipAgainstHull(i,n,e,o,s,d,-100,100,v);for(var f=0,m=0;m!==v.length;m++){if(p)return !0;var w=this.createContactEquation(r,a,t,e,h,l),g=w.ri,x=w.rj;d.negate(w.ni),v[m].normal.negate(y),y.mult(v[m].depth,y),v[m].point.vadd(y,g),x.copy(v[m].point),g.vsub(i,g),x.vsub(o,x),g.vadd(i,g),g.vsub(r.position,g),x.vadd(o,x),x.vsub(a.position,x),this.result.push(w),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult);}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f);}};var gt=new w,xt=new w,bt=new w;a.prototype[n.types.PLANE|n.types.PARTICLE]=a.prototype.planeParticle=function(t,e,i,o,n,s,r,a,h,l,p){var c=gt;c.set(0,0,1),r.quaternion.vmult(c,c);var u=xt;if(o.vsub(r.position,u),c.dot(u)<=0){if(p)return !0;var d=this.createContactEquation(a,r,e,t,h,l);d.ni.copy(c),d.ni.negate(d.ni),d.ri.set(0,0,0);var v=bt;c.mult(c.dot(o),v),o.vsub(v,v),d.rj.copy(v),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult);}};var Bt=new w;a.prototype[n.types.PARTICLE|n.types.SPHERE]=a.prototype.sphereParticle=function(t,e,i,o,n,s,r,a,h,l,p){var c=Bt;if(c.set(0,0,1),o.vsub(i,c),c.norm2()<=t.radius*t.radius){if(p)return !0;var u=this.createContactEquation(a,r,e,t,h,l);c.normalize(),u.rj.copy(c),u.rj.mult(t.radius,u.rj),u.ni.copy(c),u.ni.negate(u.ni),u.ri.set(0,0,0),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult);}};var At=new s,Et=new w,St=(new w,new w),Ct=new w,zt=new w;a.prototype[n.types.PARTICLE|n.types.CONVEXPOLYHEDRON]=a.prototype.convexParticle=function(t,e,i,o,n,s,r,a,h,l,p){var c=-1,u=St,d=zt,v=null,y=Et;if(y.copy(o),y.vsub(i,y),n.conjugate(At),At.vmult(y,y),t.pointIsInside(y)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,n),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(n);for(var f=0,m=t.faces.length;f!==m;f++){var w=[t.worldVertices[t.faces[f][0]]],g=t.worldFaceNormals[f];o.vsub(w[0],Ct);var x=-g.dot(Ct);if(null===v||Math.abs(x)<Math.abs(v)){if(p)return !0;v=x,c=f,u.copy(g),0;}}if(-1!==c){var b=this.createContactEquation(a,r,e,t,h,l);u.mult(v,d),d.vadd(o,d),d.vsub(i,d),b.rj.copy(d),u.negate(b.ni),b.ri.set(0,0,0);var B=b.ri,A=b.rj;B.vadd(o,B),B.vsub(a.position,B),A.vadd(i,A),A.vsub(r.position,A),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);}else console.warn("Point found inside convex, but did not find penetrating face!");}},a.prototype[n.types.BOX|n.types.HEIGHTFIELD]=a.prototype.boxHeightfield=function(t,e,i,o,n,s,r,a,h,l,p){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,o,n,s,r,a,t,e,p)};var Mt=new w,qt=new w,Ft=[0];a.prototype[n.types.CONVEXPOLYHEDRON|n.types.HEIGHTFIELD]=a.prototype.convexHeightfield=function(t,e,i,o,n,s,r,a,h,l,p){var c=e.data,u=e.elementSize,d=t.boundingSphereRadius,v=qt,y=Ft,f=Mt;N.pointToLocalFrame(o,s,i,f);var m=Math.floor((f.x-d)/u)-1,w=Math.ceil((f.x+d)/u)+1,g=Math.floor((f.y-d)/u)-1,x=Math.ceil((f.y+d)/u)+1;if(!(w<0||x<0||m>c.length||g>c[0].length)){m<0&&(m=0),w<0&&(w=0),g<0&&(g=0),x<0&&(x=0),m>=c.length&&(m=c.length-1),w>=c.length&&(w=c.length-1),x>=c[0].length&&(x=c[0].length-1),g>=c[0].length&&(g=c[0].length-1);var b=[];e.getRectMinMax(m,g,w,x,b);var B=b[0],A=b[1];if(!(f.z-d>A||f.z+d<B))for(var E=m;E<w;E++)for(var S=g;S<x;S++){var C=!1;if(e.getConvexTrianglePillar(E,S,!1),N.pointToWorldFrame(o,s,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(C=this.convexConvex(t,e.pillarConvex,i,v,n,s,r,a,h,l,p,y,null)),p&&C)return !0;if(e.getConvexTrianglePillar(E,S,!0),N.pointToWorldFrame(o,s,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(C=this.convexConvex(t,e.pillarConvex,i,v,n,s,r,a,h,l,p,y,null)),p&&C)return !0}}};var Rt=new w,Tt=new w;a.prototype[n.types.SPHERE|n.types.HEIGHTFIELD]=a.prototype.sphereHeightfield=function(t,e,i,o,n,s,r,a,h,l,p){var c=e.data,u=t.radius,d=e.elementSize,v=Tt,y=Rt;N.pointToLocalFrame(o,s,i,y);var f=Math.floor((y.x-u)/d)-1,m=Math.ceil((y.x+u)/d)+1,w=Math.floor((y.y-u)/d)-1,g=Math.ceil((y.y+u)/d)+1;if(!(m<0||g<0||f>c.length||w>c[0].length)){f<0&&(f=0),m<0&&(m=0),w<0&&(w=0),g<0&&(g=0),f>=c.length&&(f=c.length-1),m>=c.length&&(m=c.length-1),g>=c[0].length&&(g=c[0].length-1),w>=c[0].length&&(w=c[0].length-1);var x=[];e.getRectMinMax(f,w,m,g,x);var b=x[0],B=x[1];if(!(y.z-u>B||y.z+u<b))for(var A=this.result,E=f;E<m;E++)for(var S=w;S<g;S++){var C=A.length,z=!1;if(e.getConvexTrianglePillar(E,S,!1),N.pointToWorldFrame(o,s,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,i,v,n,s,r,a,t,e,p)),p&&z)return !0;if(e.getConvexTrianglePillar(E,S,!0),N.pointToWorldFrame(o,s,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,i,v,n,s,r,a,t,e,p)),p&&z)return !0;if(2<A.length-C)return}}};},{"../collision/AABB":3,"../collision/Ray":10,"../equations/ContactEquation":20,"../equations/FrictionEquation":22,"../math/Quaternion":30,"../math/Transform":31,"../math/Vec3":32,"../objects/Body":33,"../shapes/ConvexPolyhedron":40,"../shapes/Shape":45,"../solver/Solver":49,"../utils/Vec3Pool":56}],58:[function(t,e,i){e.exports=w;t("../shapes/Shape");var o=t("../math/Vec3"),n=t("../math/Quaternion"),s=t("../solver/GSSolver"),r=(t("../equations/ContactEquation"),t("../equations/FrictionEquation"),t("./Narrowphase")),a=t("../utils/EventTarget"),h=t("../collision/ArrayCollisionMatrix"),l=t("../collision/ObjectCollisionMatrix"),p=t("../collision/OverlapKeeper"),c=t("../material/Material"),u=t("../material/ContactMaterial"),H=t("../objects/Body"),d=t("../utils/TupleDictionary"),v=t("../collision/RaycastResult"),y=t("../collision/AABB"),f=t("../collision/Ray"),m=t("../collision/NaiveBroadphase");function w(t){t=t||{},a.apply(this),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=void 0!==t.quatNormalizeSkip?t.quatNormalizeSkip:0,this.quatNormalizeFast=void 0!==t.quatNormalizeFast&&t.quatNormalizeFast,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new o,t.gravity&&this.gravity.copy(t.gravity),this.broadphase=void 0!==t.broadphase?t.broadphase:new m,this.bodies=[],this.solver=void 0!==t.solver?t.solver:new s,this.constraints=[],this.narrowphase=new r(this),this.collisionMatrix=new h,this.collisionMatrixPrevious=new h,this.bodyOverlapKeeper=new p,this.shapeOverlapKeeper=new p,this.materials=[],this.contactmaterials=[],this.contactMaterialTable=new d,this.defaultMaterial=new c("default"),this.defaultContactMaterial=new u(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this),this.substeps=0,this.cm=new l,this.tm=new l,this.triggerDic=new d,this.oldTriggerDic=new d,this.contactsDic=new d,this.oldContactsDic=new d;}w.idToBodyMap={},w.idToShapeMap={},w.prototype=new a;new y;var g=new f;if(w.prototype.getContactMaterial=function(t,e){return this.contactMaterialTable.get(t.id,e.id)},w.prototype.numObjects=function(){return this.bodies.length},w.prototype.collisionMatrixTick=function(){var t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick();},w.prototype.add=w.prototype.addBody=function(t){-1===this.bodies.indexOf(t)&&(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof H&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.cm.setNumObjects(this.bodies.length),w.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent));},w.prototype.addConstraint=function(t){this.constraints.push(t);},w.prototype.removeConstraint=function(t){var e=this.constraints.indexOf(t);-1!==e&&this.constraints.splice(e,1);},w.prototype.rayTest=function(t,e,i){i instanceof v?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i);},w.prototype.raycastAll=function(t,e,i,o){return i.mode=f.ALL,i.from=t,i.to=e,i.callback=o,g.intersectWorld(this,i)},w.prototype.raycastAny=function(t,e,i,o){return i.mode=f.ANY,i.from=t,i.to=e,i.result=o,g.intersectWorld(this,i)},w.prototype.raycastClosest=function(t,e,i,o){return i.mode=f.CLOSEST,i.from=t,i.to=e,i.result=o,g.intersectWorld(this,i)},w.prototype.removeBody=w.prototype.remove=function(t){t.world=null;var e=this.bodies.length-1,i=this.bodies,o=i.indexOf(t);if(-1!==o){i.splice(o,1);for(var n=0;n!==i.length;n++)i[n].index=n;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete w.idToBodyMap[t.id],this.cm.setNumObjects(e),this.dispatchEvent(this.removeBodyEvent);}},w.prototype.getBodyById=function(t){return w.idToBodyMap[t]},w.prototype.getShapeById=function(t){return w.idToShapeMap[t]},w.prototype.addMaterial=function(t){this.materials.push(t);},w.prototype.addContactMaterial=function(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t);},"undefined"==typeof performance&&(performance={}),!performance.now){var x=Date.now();performance.timing&&performance.timing.navigationStart&&(x=performance.timing.navigationStart),performance.now=function(){return Date.now()-x};}new o;w.prototype.step=function(t,e,i){if(i=i||10,0===(e=e||0))this.internalStep(t),this.time+=t,this.substeps=1;else {for(this.accumulator+=e,this.substeps=0;this.accumulator>=t&&this.substeps<i;)this.internalStep(t),this.accumulator-=t,this.substeps++;for(var o=this.accumulator%t/t,n=0;n!==this.bodies.length;n++){var s=this.bodies[n];s.previousPosition.lerp(s.position,o,s.interpolatedPosition),s.previousQuaternion.slerp(s.quaternion,o,s.interpolatedQuaternion),s.previousQuaternion.normalize();}this.time+=e;}};var b,B,A,E,S,C,G={type:"postStep"},X={type:"preStep"},Q={type:"collide",body:null,contact:null},Y=[],K=[],Z=[],J=[];new o,new o,new o,new o,new o,new o,new o,new o,new o,new n,new n,new n,new o;w.prototype.internalStep=function(t){this.dt=t;var e,i=this.contacts,o=Z,n=J,s=this.numObjects(),r=this.bodies,a=this.solver,h=this.gravity,l=this.doProfiling,p=this.profile,c=H.DYNAMIC,u=this.constraints,d=K,v=(h.norm(),h.x),y=h.y,f=h.z,m=0;for(l&&(e=performance.now()),m=0;m!==s;m++){if((M=r[m]).useGravity&&M.type===c){var w=M.force,g=M.mass;w.x+=g*v,w.y+=g*y,w.z+=g*f;}}m=0;for(var x=this.subsystems.length;m!==x;m++)this.subsystems[m].update();l&&(e=performance.now()),o.length=0,n.length=0,this.broadphase.collisionPairs(this,o,n),l&&(p.broadphase=performance.now()-e);var b=u.length;for(m=0;m!==b;m++){if(!(V=u[m]).collideConnected)for(var B=o.length-1;0<=B;--B)(V.bodyA===o[B]&&V.bodyB===n[B]||V.bodyB===o[B]&&V.bodyA===n[B])&&(o.splice(B,1),n.splice(B,1));}this.collisionMatrixTick(),l&&(e=performance.now());var A=Y,E=i.length;for(m=0;m!==E;m++)A.push(i[m]);i.length=0;var S=this.frictionEquations.length;for(m=0;m!==S;m++)d.push(this.frictionEquations[m]);this.frictionEquations.length=0,this.narrowphase.getContacts(o,n,this,i,A,this.frictionEquations,d),l&&(p.narrowphase=performance.now()-e),l&&(e=performance.now());for(m=0;m<this.frictionEquations.length;m++)a.addEquation(this.frictionEquations[m]);for(var C=i.length,z=0;z!==C;z++){var M=(V=i[z]).bi,q=V.bj,F=V.si,R=V.sj;if(F.material&&R.material?0<=F.material.restitution&&0<=R.material.restitution&&(V.restitution=F.material.restitution*R.material.restitution):M.material&&q.material&&0<=M.material.restitution&&0<=q.material.restitution&&(V.restitution=M.material.restitution*q.material.restitution),a.addEquation(V),M.allowSleep&&M.type===H.DYNAMIC&&M.sleepState===H.SLEEPING&&q.sleepState===H.AWAKE&&q.type!==H.STATIC){var T=q.velocity.norm2()+q.angularVelocity.norm2();2*Math.pow(q.sleepSpeedLimit,2)<=T&&(M._wakeUpAfterNarrowphase=!0);}if(q.allowSleep&&q.type===H.DYNAMIC&&q.sleepState===H.SLEEPING&&M.sleepState===H.AWAKE&&M.type!==H.STATIC){var P=M.velocity.norm2()+M.angularVelocity.norm2();2*Math.pow(M.sleepSpeedLimit,2)<=P&&(q._wakeUpAfterNarrowphase=!0);}this.collisionMatrix.set(M,q,!0),this.collisionMatrixPrevious.get(M,q)||(Q.body=q,Q.contact=V,M.dispatchEvent(Q),Q.body=M,q.dispatchEvent(Q)),this.bodyOverlapKeeper.set(M.id,q.id),this.shapeOverlapKeeper.set(F.id,R.id);}for(this.emitContactEvents(),l&&(p.makeContactConstraints=performance.now()-e,e=performance.now()),m=0;m!==s;m++){(M=r[m])._wakeUpAfterNarrowphase&&(M.wakeUp(),M._wakeUpAfterNarrowphase=!1);}b=u.length;for(m=0;m!==b;m++){var V;(V=u[m]).update();B=0;for(var I=V.equations.length;B!==I;B++){var N=V.equations[B];a.addEquation(N);}}a.solve(t,this),l&&(p.solve=performance.now()-e),a.removeAllEquations();var L=Math.pow;for(m=0;m!==s;m++){if((M=r[m]).type&c){var W=L(1-M.linearDamping,t),j=M.velocity;j.mult(W,j);var O=M.angularVelocity;if(O){var k=L(1-M.angularDamping,t);O.mult(k,O);}}}for(this.dispatchEvent(X),m=0;m!==s;m++){(M=r[m]).preStep&&M.preStep.call(M);}l&&(e=performance.now());var _=this.stepnumber%(this.quatNormalizeSkip+1)==0,D=this.quatNormalizeFast;for(m=0;m!==s;m++)r[m].integrate(t,_,D);for(this.clearForces(),this.broadphase.dirty=!0,l&&(p.integrate=performance.now()-e),this.time+=t,this.stepnumber+=1,this.dispatchEvent(G),m=0;m!==s;m++){var U=(M=r[m]).postStep;U&&U.call(M);}if(this.allowSleep)for(m=0;m!==s;m++)r[m].sleepTick(this.time);},w.prototype.emitContactEvents=(b=[],B=[],A={type:"beginContact",bodyA:null,bodyB:null},E={type:"endContact",bodyA:null,bodyB:null},S={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},C={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},function(){var t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(b,B),t){for(var i=0,o=b.length;i<o;i+=2)A.bodyA=this.getBodyById(b[i]),A.bodyB=this.getBodyById(b[i+1]),this.dispatchEvent(A);A.bodyA=A.bodyB=null;}if(e){for(i=0,o=B.length;i<o;i+=2)E.bodyA=this.getBodyById(B[i]),E.bodyB=this.getBodyById(B[i+1]),this.dispatchEvent(E);E.bodyA=E.bodyB=null;}b.length=B.length=0;var n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(b,B),n){for(i=0,o=b.length;i<o;i+=2){var r=this.getShapeById(b[i]),a=this.getShapeById(b[i+1]);S.shapeA=r,S.shapeB=a,S.bodyA=r.body,S.bodyB=a.body,this.dispatchEvent(S);}S.bodyA=S.bodyB=S.shapeA=S.shapeB=null;}if(s){for(i=0,o=B.length;i<o;i+=2)r=this.getShapeById(B[i]),a=this.getShapeById(B[i+1]),C.shapeA=r,C.shapeB=a,C.bodyA=r.body,C.bodyB=a.body,this.dispatchEvent(C);C.bodyA=C.bodyB=C.shapeA=C.shapeB=null;}}),w.prototype.clearForces=function(){for(var t=this.bodies,e=t.length,i=0;i!==e;i++){var o=t[i];o.force,o.torque;o.force.set(0,0,0),o.torque.set(0,0,0);}};var z={type:"cc-trigger",event:"",selfBody:null,otherBody:null,selfShape:null,otherShape:null},M={type:"cc-collide",event:"",body:null,selfShape:null,otherShape:null,contacts:null},q=[];w.prototype.emitTriggeredEvents=function(){if(0!=this.substeps){for(var t,e,i=this.triggerDic.getLength();i--;)if(t=this.triggerDic.getKeyByIndex(i),null!=(e=this.triggerDic.getDataByKey(t))){var o=e.si,n=e.sj;this.tm.get(o,n)?z.event="onTriggerStay":(this.tm.set(o,n,!0),z.event="onTriggerEnter"),z.selfShape=o,z.otherShape=n,z.selfBody=o.body,z.otherBody=n.body,o.dispatchEvent(z),z.selfShape=n,z.otherShape=o,z.selfBody=n.body,z.otherBody=o.body,n.dispatchEvent(z);}for(i=this.oldTriggerDic.getLength();0<i;)if(i--,t=this.oldTriggerDic.getKeyByIndex(i),null==this.triggerDic.getDataByKey(t)&&null!=(e=this.oldTriggerDic.getDataByKey(t))){o=e.si,n=e.sj;this.tm.set(o,n,!1),this.oldTriggerDic.del(o.id,n.id)&&i--,z.event="onTriggerExit",z.selfShape=o,z.otherShape=n,z.selfBody=o.body,z.otherBody=n.body,o.dispatchEvent(z),z.selfShape=n,z.otherShape=o,z.selfBody=n.body,z.otherBody=o.body,n.dispatchEvent(z);}this.triggerDic.reset();}},w.prototype.emitCollisionEvents=function(){if(0!=this.substeps){for(var t,e,i=this.contacts,o=this.contacts.length;o--;){var n=(p=i[o]).si,s=p.sj,r=this.contactsDic.get(n.id,s.id);null==r&&(r=this.contactsDic.set(n.id,s.id,[])),r.push(p);}for(o=this.contactsDic.getLength();o--;)if(t=this.contactsDic.getKeyByIndex(o),null!=(e=this.contactsDic.getDataByKey(t))){n=e[0].si,s=e[0].sj;var a=n.body,h=s.body;this.cm.get(a,h)?M.event="onCollisionStay":(this.cm.set(a,h,!0),M.event="onCollisionEnter"),M.bi=a,M.contact=e[0],M.contacts=e,M.body=h,M.selfShape=n,M.otherShape=s,a.dispatchEvent(M),M.body=a,M.selfShape=s,M.otherShape=n,h.dispatchEvent(M);}var l=q;for(o=l.length;o--;){var p;n=(p=l[o]).si,s=p.sj;null==this.oldContactsDic.get(n.id,s.id)&&this.oldContactsDic.set(n.id,s.id,p);}for(o=this.oldContactsDic.getLength();o--;)if(t=this.oldContactsDic.getKeyByIndex(o),null==this.contactsDic.getDataByKey(t)){n=(e=this.oldContactsDic.getDataByKey(t)).si,s=e.sj,a=n.body,h=s.body;this.cm.get(a,h)&&(a.isSleeping()&&h.isSleeping()||(this.cm.set(a,h,!1),M.bi=a,M.contact=e,M.event="onCollisionExit",M.body=h,M.selfShape=n,M.otherShape=s,M.contacts.length=0,M.contacts.push(e),a.dispatchEvent(M),M.body=a,M.selfShape=s,M.otherShape=n,h.dispatchEvent(M)));}this.contactsDic.reset(),this.oldContactsDic.reset(),Y=q,q=this.contacts.slice(),this.contacts.length=0;}};},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/ObjectCollisionMatrix":8,"../collision/OverlapKeeper":9,"../collision/Ray":10,"../collision/RaycastResult":11,"../equations/ContactEquation":20,"../equations/FrictionEquation":22,"../material/ContactMaterial":25,"../material/Material":26,"../math/Quaternion":30,"../math/Vec3":32,"../objects/Body":33,"../shapes/Shape":45,"../solver/GSSolver":48,"../utils/EventTarget":51,"../utils/TupleDictionary":54,"./Narrowphase":57}]},{},[2])(2)});
            });

            var v3_cannon0 = new cannon_min.Vec3();
            var v3_cannon1 = new cannon_min.Vec3();
            /**
             * wrapped shared body
             * dynamic
             * kinematic
             */

            var CannonRigidBody = /*#__PURE__*/function () {
              function CannonRigidBody() {
                _classCallCheck(this, CannonRigidBody);

                this._isEnabled = false;
              }

              _createClass(CannonRigidBody, [{
                key: "setAllowSleep",
                value: function setAllowSleep(v) {
                  this.impl.allowSleep = v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setMass",
                value: function setMass(value) {
                  this.impl.mass = value;

                  if (this.impl.mass == 0) {
                    this.impl.type = cannon_min.Body.STATIC;
                  } else {
                    this.impl.type = this._rigidBody.isKinematic ? cannon_min.Body.KINEMATIC : cannon_min.Body.DYNAMIC;
                  }

                  this.impl.updateMassProperties();

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setIsKinematic",
                value: function setIsKinematic(value) {
                  if (this.impl.mass == 0) {
                    this.impl.type = cannon_min.Body.STATIC;
                  } else {
                    if (value) {
                      this.impl.type = cannon_min.Body.KINEMATIC;
                    } else {
                      this.impl.type = cannon_min.Body.DYNAMIC;
                    }
                  }
                }
              }, {
                key: "fixRotation",
                value: function fixRotation(value) {
                  this.impl.fixedRotation = value;
                  this.impl.updateMassProperties();

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setLinearDamping",
                value: function setLinearDamping(value) {
                  this.impl.linearDamping = value;
                }
              }, {
                key: "setAngularDamping",
                value: function setAngularDamping(value) {
                  this.impl.angularDamping = value;
                }
              }, {
                key: "useGravity",
                value: function useGravity(value) {
                  this.impl.useGravity = value;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setLinearFactor",
                value: function setLinearFactor(value) {
                  Vec3.copy(this.impl.linearFactor, value);

                  this._wakeUpIfSleep();
                }
              }, {
                key: "setAngularFactor",
                value: function setAngularFactor(value) {
                  Vec3.copy(this.impl.angularFactor, value);

                  this._wakeUpIfSleep();
                }
              }, {
                key: "initialize",

                /** LIFECYCLE */
                value: function initialize(com) {
                  this._rigidBody = com;
                  this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._rigidBody.node);
                  this._sharedBody.reference = true;
                  this._sharedBody.wrappedBody = this;
                }
              }, {
                key: "onLoad",
                value: function onLoad() {}
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this._isEnabled = true; // TODO: overwrite collider setGroup if runtime add.

                  this.setGroup(this._rigidBody.group);

                  if (PhysicsSystem.instance.useCollisionMatrix) {
                    this.setMask(PhysicsSystem.instance.collisionMatrix[this._rigidBody.group]);
                  }

                  this.setMass(this._rigidBody.mass);
                  this.setAllowSleep(this._rigidBody.allowSleep);
                  this.setLinearDamping(this._rigidBody.linearDamping);
                  this.setAngularDamping(this._rigidBody.angularDamping);
                  this.useGravity(this._rigidBody.useGravity);
                  this.setIsKinematic(this._rigidBody.isKinematic);
                  this.fixRotation(this._rigidBody.fixedRotation);
                  this.setLinearFactor(this._rigidBody.linearFactor);
                  this.setAngularFactor(this._rigidBody.angularFactor);
                  this._sharedBody.enabled = true;
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._isEnabled = false;
                  this._sharedBody.enabled = false;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this._sharedBody.reference = false;
                  this._rigidBody = null;
                  this._sharedBody = null;
                }
                /** INTERFACE */

              }, {
                key: "clearVelocity",
                value: function clearVelocity() {
                  this.impl.velocity.setZero();
                  this.impl.angularVelocity.setZero();
                }
              }, {
                key: "clearForces",
                value: function clearForces() {
                  this.impl.force.setZero();
                  this.impl.torque.setZero();
                }
              }, {
                key: "clearState",
                value: function clearState() {
                  this.clearVelocity();
                  this.clearForces();
                }
              }, {
                key: "wakeUp",
                value: function wakeUp() {
                  return this.impl.wakeUp();
                }
              }, {
                key: "sleep",
                value: function sleep() {
                  return this.impl.sleep();
                }
              }, {
                key: "setSleepThreshold",
                value: function setSleepThreshold(v) {
                  this.impl.sleepSpeedLimit = v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "getSleepThreshold",
                value: function getSleepThreshold() {
                  return this.impl.sleepSpeedLimit;
                }
              }, {
                key: "getLinearVelocity",
                value: function getLinearVelocity(out) {
                  Vec3.copy(out, this.impl.velocity);
                  return out;
                }
              }, {
                key: "setLinearVelocity",
                value: function setLinearVelocity(value) {
                  this._wakeUpIfSleep();

                  Vec3.copy(this.impl.velocity, value);
                }
              }, {
                key: "getAngularVelocity",
                value: function getAngularVelocity(out) {
                  Vec3.copy(out, this.impl.angularVelocity);
                  return out;
                }
              }, {
                key: "setAngularVelocity",
                value: function setAngularVelocity(value) {
                  this._wakeUpIfSleep();

                  Vec3.copy(this.impl.angularVelocity, value);
                }
              }, {
                key: "applyForce",
                value: function applyForce(force, worldPoint) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  if (worldPoint == null) worldPoint = Vec3.ZERO;
                  this.impl.applyForce(Vec3.copy(v3_cannon0, force), Vec3.copy(v3_cannon1, worldPoint));
                }
              }, {
                key: "applyImpulse",
                value: function applyImpulse(impulse, worldPoint) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  if (worldPoint == null) worldPoint = Vec3.ZERO;
                  this.impl.applyImpulse(Vec3.copy(v3_cannon0, impulse), Vec3.copy(v3_cannon1, worldPoint));
                }
              }, {
                key: "applyLocalForce",
                value: function applyLocalForce(force, localPoint) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  if (localPoint == null) localPoint = Vec3.ZERO;
                  this.impl.applyLocalForce(Vec3.copy(v3_cannon0, force), Vec3.copy(v3_cannon1, localPoint));
                }
              }, {
                key: "applyLocalImpulse",
                value: function applyLocalImpulse(impulse, localPoint) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  if (localPoint == null) localPoint = Vec3.ZERO;
                  this.impl.applyLocalImpulse(Vec3.copy(v3_cannon0, impulse), Vec3.copy(v3_cannon1, localPoint));
                }
              }, {
                key: "applyTorque",
                value: function applyTorque(torque) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  Vec3.add(this.impl.torque, this.impl.torque, torque);
                }
              }, {
                key: "applyLocalTorque",
                value: function applyLocalTorque(torque) {
                  this._sharedBody.syncSceneToPhysics();

                  this._wakeUpIfSleep();

                  Vec3.copy(v3_cannon0, torque);
                  this.impl.vectorToWorldFrame(v3_cannon0, v3_cannon0);
                  Vec3.add(this.impl.torque, this.impl.torque, v3_cannon0);
                }
                /** group */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  return this.impl.collisionFilterGroup;
                }
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this.impl.collisionFilterGroup = v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this.impl.collisionFilterGroup |= v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this.impl.collisionFilterGroup &= ~v;

                  this._wakeUpIfSleep();
                }
                /** mask */

              }, {
                key: "getMask",
                value: function getMask() {
                  return this.impl.collisionFilterMask;
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this.impl.collisionFilterMask = v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this.impl.collisionFilterMask |= v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this.impl.collisionFilterMask &= ~v;

                  this._wakeUpIfSleep();
                }
              }, {
                key: "_wakeUpIfSleep",
                value: function _wakeUpIfSleep() {
                  if (!this.impl.isAwake()) this.impl.wakeUp();
                }
              }, {
                key: "isAwake",
                get: function get() {
                  return this.impl.isAwake();
                }
              }, {
                key: "isSleepy",
                get: function get() {
                  return this.impl.isSleepy();
                }
              }, {
                key: "isSleeping",
                get: function get() {
                  return this.impl.isSleeping();
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._sharedBody.body;
                }
              }, {
                key: "rigidBody",
                get: function get() {
                  return this._rigidBody;
                }
              }, {
                key: "sharedBody",
                get: function get() {
                  return this._sharedBody;
                }
              }, {
                key: "isEnabled",
                get: function get() {
                  return this._isEnabled;
                }
              }]);

              return CannonRigidBody;
            }();

            function toCannonRaycastOptions(out, options) {
              out.checkCollisionResponse = !options.queryTrigger;
              out.collisionFilterGroup = -1;
              out.collisionFilterMask = options.mask; // out.skipBackFaces = true;
            }
            function fillRaycastResult(result, cannonResult) {
              result._assign(cannonResult.hitPointWorld, cannonResult.distance, getWrap(cannonResult.shape).collider, cannonResult.hitNormalWorld);
            }
            function commitShapeUpdates(body) {
              body.aabbNeedsUpdate = true;
              body.updateMassProperties();
              body.updateBoundingRadius();
            }

            var TriggerEventObject = {
              type: 'onTriggerEnter',
              selfCollider: null,
              otherCollider: null,
              impl: null
            };
            var cannonQuat_0 = new cannon_min.Quaternion();
            var cannonVec3_0 = new cannon_min.Vec3();
            var cannonVec3_1 = new cannon_min.Vec3();
            var CannonShape = /*#__PURE__*/function () {
              function CannonShape() {
                _classCallCheck(this, CannonShape);

                this._offset = new cannon_min.Vec3();
                this._orient = new cannon_min.Quaternion();
                this._index = -1;
                this.onTriggerListener = this._onTrigger.bind(this);
                this._isBinding = false;
              }

              _createClass(CannonShape, [{
                key: "setMaterial",
                value: function setMaterial(mat) {
                  if (mat == null) {
                    this._shape.material = null;
                  } else {
                    if (CannonShape.idToMaterial[mat._uuid] == null) {
                      CannonShape.idToMaterial[mat._uuid] = new cannon_min.Material(mat._uuid);
                    }

                    this._shape.material = CannonShape.idToMaterial[mat._uuid];
                    this._shape.material.friction = mat.friction;
                    this._shape.material.restitution = mat.restitution;
                  }
                }
              }, {
                key: "setAsTrigger",
                value: function setAsTrigger(v) {
                  this._shape.collisionResponse = !v;

                  if (this._index >= 0) {
                    this._body.updateHasTrigger();
                  }
                }
              }, {
                key: "setCenter",
                value: function setCenter(v) {
                  this._setCenter(v);

                  if (this._index >= 0) {
                    commitShapeUpdates(this._body);
                  }
                }
              }, {
                key: "setAttachedBody",
                value: function setAttachedBody(v) {
                  if (v) {
                    if (this._sharedBody) {
                      if (this._sharedBody.wrappedBody == v.body) return;
                      this._sharedBody.reference = false;
                    }

                    this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(v.node);
                    this._sharedBody.reference = true;
                  } else {
                    if (this._sharedBody) {
                      this._sharedBody.reference = false;
                    }

                    this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
                    this._sharedBody.reference = true;
                  }
                }
              }, {
                key: "getAABB",
                value: function getAABB(v) {
                  Quat.copy(cannonQuat_0, this._collider.node.worldRotation); // TODO: typing

                  this._shape.calculateWorldAABB(cannon_min.Vec3.ZERO, cannonQuat_0, cannonVec3_0, cannonVec3_1);

                  Vec3.subtract(v.halfExtents, cannonVec3_1, cannonVec3_0);
                  Vec3.multiplyScalar(v.halfExtents, v.halfExtents, 0.5);
                  Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
                }
              }, {
                key: "getBoundingSphere",
                value: function getBoundingSphere(v) {
                  v.radius = this._shape.boundingSphereRadius;
                  Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
                }
              }, {
                key: "initialize",

                /** LIFECYCLE */
                value: function initialize(comp) {
                  this._collider = comp;
                  this._isBinding = true;
                  this.onComponentSet();
                  setWrap(this._shape, this);

                  this._shape.addEventListener('cc-trigger', this.onTriggerListener);

                  this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
                  this._sharedBody.reference = true;
                } // virtual

              }, {
                key: "onComponentSet",
                value: function onComponentSet() {}
              }, {
                key: "onLoad",
                value: function onLoad() {
                  this.setMaterial(this._collider.sharedMaterial);
                  this.setCenter(this._collider.center);
                  this.setAsTrigger(this._collider.isTrigger);
                }
              }, {
                key: "onEnable",
                value: function onEnable() {
                  this._sharedBody.addShape(this);

                  this._sharedBody.enabled = true;
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  this._sharedBody.removeShape(this);

                  this._sharedBody.enabled = false;
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  this._sharedBody.reference = false;

                  this._shape.removeEventListener('cc-trigger', this.onTriggerListener);

                  delete cannon_min.World['idToShapeMap'][this._shape.id];
                  this._sharedBody = null;
                  setWrap(this._shape, null);
                  this._offset = null;
                  this._orient = null;
                  this._shape = null;
                  this._collider = null;
                  this.onTriggerListener = null;
                }
                /** INTERFACE */

                /** group */

              }, {
                key: "getGroup",
                value: function getGroup() {
                  return this._body.collisionFilterGroup;
                }
              }, {
                key: "setGroup",
                value: function setGroup(v) {
                  this._body.collisionFilterGroup = v;
                  if (!this._body.isAwake()) this._body.wakeUp();
                }
              }, {
                key: "addGroup",
                value: function addGroup(v) {
                  this._body.collisionFilterGroup |= v;
                  if (!this._body.isAwake()) this._body.wakeUp();
                }
              }, {
                key: "removeGroup",
                value: function removeGroup(v) {
                  this._body.collisionFilterGroup &= ~v;
                  if (!this._body.isAwake()) this._body.wakeUp();
                }
                /** mask */

              }, {
                key: "getMask",
                value: function getMask() {
                  return this._body.collisionFilterMask;
                }
              }, {
                key: "setMask",
                value: function setMask(v) {
                  this._body.collisionFilterMask = v;
                  if (!this._body.isAwake()) this._body.wakeUp();
                }
              }, {
                key: "addMask",
                value: function addMask(v) {
                  this._body.collisionFilterMask |= v;
                  if (!this._body.isAwake()) this._body.wakeUp();
                }
              }, {
                key: "removeMask",
                value: function removeMask(v) {
                  this._body.collisionFilterMask &= ~v;
                  if (!this._body.isAwake()) this._body.wakeUp();
                }
                /**
                 * change scale will recalculate center & size \
                 * size handle by child class
                 * @param scale 
                 */

              }, {
                key: "setScale",
                value: function setScale(scale) {
                  this._setCenter(this._collider.center);
                }
              }, {
                key: "setIndex",
                value: function setIndex(index) {
                  this._index = index;
                }
              }, {
                key: "setOffsetAndOrient",
                value: function setOffsetAndOrient(offset, orient) {
                  Vec3.copy(offset, this._offset);
                  Quat.copy(orient, this._orient);
                  this._offset = offset;
                  this._orient = orient;
                }
              }, {
                key: "_setCenter",
                value: function _setCenter(v) {
                  var lpos = this._offset;
                  Vec3.subtract(lpos, this._sharedBody.node.worldPosition, this._collider.node.worldPosition);
                  Vec3.add(lpos, lpos, v);
                  Vec3.multiply(lpos, lpos, this._collider.node.worldScale);
                }
              }, {
                key: "_onTrigger",
                value: function _onTrigger(event) {
                  TriggerEventObject.type = event.event;
                  var self = getWrap(event.selfShape);
                  var other = getWrap(event.otherShape);

                  if (self && self.collider.needTriggerEvent) {
                    TriggerEventObject.selfCollider = self.collider;
                    TriggerEventObject.otherCollider = other ? other.collider : null;
                    TriggerEventObject.impl = event;

                    this._collider.emit(TriggerEventObject.type, TriggerEventObject);
                  }
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "attachedRigidBody",
                get: function get() {
                  if (this._sharedBody.wrappedBody) {
                    return this._sharedBody.wrappedBody.rigidBody;
                  }

                  return null;
                }
              }, {
                key: "sharedBody",
                get: function get() {
                  return this._sharedBody;
                }
              }, {
                key: "_body",
                get: function get() {
                  return this._sharedBody.body;
                }
              }]);

              return CannonShape;
            }();
            CannonShape.idToMaterial = {};

            var CannonContactEquation = /*#__PURE__*/function () {
              _createClass(CannonContactEquation, [{
                key: "isBodyA",
                get: function get() {
                  var si = this.event.selfCollider.shape.impl;
                  var bj = this.impl.bj;
                  return si.body.id == bj.id;
                }
              }]);

              function CannonContactEquation(event) {
                _classCallCheck(this, CannonContactEquation);

                this.impl = null;
                this.event = void 0;
                this.event = event;
              }

              _createClass(CannonContactEquation, [{
                key: "getLocalPointOnA",
                value: function getLocalPointOnA(out) {
                  if (this.impl) Vec3.copy(out, this.impl.rj);
                }
              }, {
                key: "getLocalPointOnB",
                value: function getLocalPointOnB(out) {
                  if (this.impl) Vec3.copy(out, this.impl.ri);
                }
              }, {
                key: "getWorldPointOnA",
                value: function getWorldPointOnA(out) {
                  if (this.impl) Vec3.add(out, this.impl.rj, this.impl.bj.position);
                }
              }, {
                key: "getWorldPointOnB",
                value: function getWorldPointOnB(out) {
                  if (this.impl) Vec3.add(out, this.impl.ri, this.impl.bi.position);
                }
              }, {
                key: "getLocalNormalOnB",
                value: function getLocalNormalOnB(out) {
                  if (this.impl) Vec3.copy(out, this.impl.ni);
                }
              }, {
                key: "getWorldNormalOnB",
                value: function getWorldNormalOnB(out) {
                  if (this.impl) Vec3.transformQuat(out, this.impl.ni, this.impl.bi.quaternion);
                }
              }]);

              return CannonContactEquation;
            }();

            var v3_0 = new Vec3();
            var quat_0 = new Quat();
            var contactsPool = [];
            var CollisionEventObject = {
              type: 'onCollisionEnter',
              selfCollider: null,
              otherCollider: null,
              contacts: [],
              impl: null
            };
            /**
             * node : shared-body = 1 : 1
             * static
             */

            var CannonSharedBody = /*#__PURE__*/function () {
              _createClass(CannonSharedBody, [{
                key: "enabled",

                /**
                 * add or remove from world \
                 * add, if enable \
                 * remove, if disable & shapes.length == 0 & wrappedBody disable
                 */
                set: function set(v) {
                  if (v) {
                    if (this.index < 0) {
                      this.index = this.wrappedWorld.bodies.length;
                      this.wrappedWorld.addSharedBody(this);
                      this.syncInitial();
                    }
                  } else {
                    if (this.index >= 0) {
                      var isRemove = this.shapes.length == 0 && this.wrappedBody == null || this.shapes.length == 0 && this.wrappedBody != null && !this.wrappedBody.isEnabled;

                      if (isRemove) {
                        this.body.sleep(); // clear velocity etc.

                        this.index = -1;
                        this.wrappedWorld.removeSharedBody(this);
                      }
                    }
                  }
                }
              }, {
                key: "reference",
                set: function set(v) {
                  v ? this.ref++ : this.ref--;

                  if (this.ref == 0) {
                    this.destroy();
                  }
                }
              }], [{
                key: "getSharedBody",
                value: function getSharedBody(node, wrappedWorld) {
                  var key = node.uuid;

                  if (CannonSharedBody.sharedBodesMap.has(key)) {
                    return CannonSharedBody.sharedBodesMap.get(key);
                  } else {
                    var newSB = new CannonSharedBody(node, wrappedWorld);
                    CannonSharedBody.sharedBodesMap.set(node.uuid, newSB);
                    return newSB;
                  }
                }
              }]);

              function CannonSharedBody(node, wrappedWorld) {
                _classCallCheck(this, CannonSharedBody);

                this.node = void 0;
                this.wrappedWorld = void 0;
                this.body = void 0;
                this.shapes = [];
                this.wrappedBody = null;
                this.index = -1;
                this.ref = 0;
                this.onCollidedListener = this.onCollided.bind(this);
                this.wrappedWorld = wrappedWorld;
                this.node = node;
                this.body = new cannon_min.Body();
                this.body.collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
                this.body.sleepSpeedLimit = PhysicsSystem.instance.sleepThreshold;
                this.body.material = this.wrappedWorld.impl.defaultMaterial;
                this.body.addEventListener('cc-collide', this.onCollidedListener);
              }

              _createClass(CannonSharedBody, [{
                key: "addShape",
                value: function addShape(v) {
                  var index = this.shapes.indexOf(v);

                  if (index < 0) {
                    var _index = this.body.shapes.length;
                    this.body.addShape(v.impl);
                    this.shapes.push(v);
                    v.setIndex(_index);
                    var offset = this.body.shapeOffsets[_index];
                    var orient = this.body.shapeOrientations[_index];
                    v.setOffsetAndOrient(offset, orient);
                    if (this.body.isSleeping()) this.body.wakeUp();
                  }
                }
              }, {
                key: "removeShape",
                value: function removeShape(v) {
                  var index = this.shapes.indexOf(v);

                  if (index >= 0) {
                    this.shapes.splice(index, 1);
                    this.body.removeShape(v.impl);
                    v.setIndex(-1);
                    if (this.body.isSleeping()) this.body.wakeUp();
                  }
                }
              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  if (this.node.hasChangedFlags) {
                    if (this.body.isSleeping()) this.body.wakeUp();
                    Vec3.copy(this.body.position, this.node.worldPosition);
                    Quat.copy(this.body.quaternion, this.node.worldRotation);
                    this.body.aabbNeedsUpdate = true;

                    if (this.node.hasChangedFlags & TransformBit.SCALE) {
                      for (var i = 0; i < this.shapes.length; i++) {
                        this.shapes[i].setScale(this.node.worldScale);
                      }

                      commitShapeUpdates(this.body);
                    }
                  }
                }
              }, {
                key: "syncPhysicsToScene",
                value: function syncPhysicsToScene() {
                  if (this.body.type != ERigidBodyType.STATIC) {
                    if (!this.body.isSleeping()) {
                      Vec3.copy(v3_0, this.body.position);
                      Quat.copy(quat_0, this.body.quaternion);
                      this.node.worldPosition = v3_0;
                      this.node.worldRotation = quat_0;
                    }
                  }
                }
              }, {
                key: "syncInitial",
                value: function syncInitial() {
                  Vec3.copy(this.body.position, this.node.worldPosition);
                  Quat.copy(this.body.quaternion, this.node.worldRotation);
                  this.body.aabbNeedsUpdate = true;

                  for (var i = 0; i < this.shapes.length; i++) {
                    this.shapes[i].setScale(this.node.worldScale);
                  }

                  commitShapeUpdates(this.body);
                  if (this.body.isSleeping()) this.body.wakeUp();
                }
              }, {
                key: "destroy",
                value: function destroy() {
                  this.body.removeEventListener('cc-collide', this.onCollidedListener);
                  CannonSharedBody.sharedBodesMap["delete"](this.node.uuid);
                  delete cannon_min.World['idToBodyMap'][this.body.id];
                  this.node = null;
                  this.wrappedWorld = null;
                  this.body = null;
                  this.shapes = null;
                  this.onCollidedListener = null;
                }
              }, {
                key: "onCollided",
                value: function onCollided(event) {
                  CollisionEventObject.type = event.event;
                  var self = getWrap(event.selfShape);
                  var other = getWrap(event.otherShape);

                  if (self && self.collider.needCollisionEvent) {
                    contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
                    CollisionEventObject.contacts.length = 0;
                    CollisionEventObject.impl = event;
                    CollisionEventObject.selfCollider = self.collider;
                    CollisionEventObject.otherCollider = other ? other.collider : null;
                    var i = 0;

                    for (i = 0; i < event.contacts.length; i++) {
                      var cq = event.contacts[i];

                      if (contactsPool.length > 0) {
                        var c = contactsPool.pop();
                        c.impl = cq;
                        CollisionEventObject.contacts.push(c);
                      } else {
                        var _c = new CannonContactEquation(CollisionEventObject);

                        _c.impl = cq;
                        CollisionEventObject.contacts.push(_c);
                      }
                    }

                    for (i = 0; i < this.shapes.length; i++) {
                      var shape = this.shapes[i];
                      shape.collider.emit(CollisionEventObject.type, CollisionEventObject);
                    }
                  }
                }
              }]);

              return CannonSharedBody;
            }();
            CannonSharedBody.sharedBodesMap = new Map();

            var CannonWorld = /*#__PURE__*/function () {
              _createClass(CannonWorld, [{
                key: "setDefaultMaterial",
                value: function setDefaultMaterial(mat) {
                  this._world.defaultMaterial.friction = mat.friction;
                  this._world.defaultMaterial.restitution = mat.restitution;

                  if (CannonShape.idToMaterial[mat._uuid] != null) {
                    CannonShape.idToMaterial[mat._uuid] = this._world.defaultMaterial;
                  }
                }
              }, {
                key: "setAllowSleep",
                value: function setAllowSleep(v) {
                  this._world.allowSleep = v;
                }
              }, {
                key: "setGravity",
                value: function setGravity(gravity) {
                  Vec3.copy(this._world.gravity, gravity);
                } // get defaultContactMaterial () {
                //     return this._defaultContactMaterial;
                // }

              }, {
                key: "impl",
                get: function get() {
                  return this._world;
                }
              }]);

              function CannonWorld() {
                _classCallCheck(this, CannonWorld);

                this.bodies = [];
                this.constraints = [];
                this._world = void 0;
                this._raycastResult = new cannon_min.RaycastResult();
                this._world = new cannon_min.World();
                this._world.broadphase = new cannon_min.NaiveBroadphase();
                this._world.solver.iterations = 10;
                this._world.solver.tolerance = 0.0001;
                this._world.defaultContactMaterial.contactEquationStiffness = 1000000;
                this._world.defaultContactMaterial.frictionEquationStiffness = 1000000;
                this._world.defaultContactMaterial.contactEquationRelaxation = 3;
                this._world.defaultContactMaterial.frictionEquationRelaxation = 3;
              }

              _createClass(CannonWorld, [{
                key: "emitEvents",
                value: function emitEvents() {
                  this._world.emitTriggeredEvents();

                  this._world.emitCollisionEvents();
                }
              }, {
                key: "syncSceneToPhysics",
                value: function syncSceneToPhysics() {
                  for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].syncSceneToPhysics();
                  }
                }
              }, {
                key: "step",
                value: function step(deltaTime, timeSinceLastCalled, maxSubStep) {
                  if (this.bodies.length == 0) return;

                  this._world.step(deltaTime, timeSinceLastCalled, maxSubStep); // sync physics to scene


                  for (var i = 0; i < this.bodies.length; i++) {
                    this.bodies[i].syncPhysicsToScene();
                  }
                }
              }, {
                key: "raycastClosest",
                value: function raycastClosest(worldRay, options, result) {
                  setupFromAndTo(worldRay, options.maxDistance);
                  toCannonRaycastOptions(raycastOpt, options);

                  var hit = this._world.raycastClosest(from, to, raycastOpt, this._raycastResult);

                  if (hit) {
                    fillRaycastResult(result, this._raycastResult);
                  }

                  return hit;
                }
              }, {
                key: "raycast",
                value: function raycast(worldRay, options, pool, results) {
                  setupFromAndTo(worldRay, options.maxDistance);
                  toCannonRaycastOptions(raycastOpt, options);

                  var hit = this._world.raycastAll(from, to, raycastOpt, function (result) {
                    var r = pool.add();
                    fillRaycastResult(r, result);
                    results.push(r);
                  });

                  return hit;
                }
              }, {
                key: "getSharedBody",
                value: function getSharedBody(node) {
                  return CannonSharedBody.getSharedBody(node, this);
                }
              }, {
                key: "addSharedBody",
                value: function addSharedBody(sharedBody) {
                  var i = this.bodies.indexOf(sharedBody);

                  if (i < 0) {
                    this.bodies.push(sharedBody);

                    this._world.addBody(sharedBody.body);
                  }
                }
              }, {
                key: "removeSharedBody",
                value: function removeSharedBody(sharedBody) {
                  var i = this.bodies.indexOf(sharedBody);

                  if (i >= 0) {
                    this.bodies.splice(i, 1);

                    this._world.remove(sharedBody.body);
                  }
                } //  addContactMaterial (contactMaterial: ContactMaterial) {
                //     this._cannonWorld.addContactMaterial(contactMaterial._getImpl());
                // }

              }, {
                key: "addConstraint",
                value: function addConstraint(constraint) {
                  var i = this.constraints.indexOf(constraint);

                  if (i < 0) {
                    this.constraints.push(constraint);

                    this._world.addConstraint(constraint.impl);
                  }
                }
              }, {
                key: "removeConstraint",
                value: function removeConstraint(constraint) {
                  var i = this.constraints.indexOf(constraint);

                  if (i >= 0) {
                    this.constraints.splice(i, 1);

                    this._world.removeConstraint(constraint.impl);
                  }
                }
              }, {
                key: "updateCollisionMatrix",
                value: function updateCollisionMatrix(group, mask) {
                  for (var i = 0; i < this.bodies.length; i++) {
                    var b = this.bodies[i].body;

                    if (b.collisionFilterGroup == group) {
                      b.collisionFilterMask = mask;
                    }
                  }
                }
              }]);

              return CannonWorld;
            }();
            var from = new cannon_min.Vec3();
            var to = new cannon_min.Vec3();

            function setupFromAndTo(worldRay, distance) {
              Vec3.copy(from, worldRay.o);
              worldRay.computeHit(to, distance);
            }

            var raycastOpt = {
              'checkCollisionResponse': false,
              'collisionFilterGroup': -1,
              'collisionFilterMask': -1,
              'skipBackFaces': true
            };

            var CannonBoxShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonBoxShape, _CannonShape);

              _createClass(CannonBoxShape, [{
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              function CannonBoxShape() {
                var _this;

                _classCallCheck(this, CannonBoxShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CannonBoxShape).call(this));
                _this.HALF_EXTENT = void 0;
                _this.HALF_EXTENT = new cannon_min.Vec3(0.5, 0.5, 0.5);
                _this._shape = new cannon_min.Box(_this.HALF_EXTENT.clone());
                return _this;
              }

              _createClass(CannonBoxShape, [{
                key: "setSize",
                value: function setSize(v) {
                  Vec3.multiplyScalar(this.HALF_EXTENT, v, 0.5);
                  var ws = this.collider.node.worldScale;
                  this.impl.halfExtents.x = this.HALF_EXTENT.x * Math.abs(ws.x);
                  this.impl.halfExtents.y = this.HALF_EXTENT.y * Math.abs(ws.y);
                  this.impl.halfExtents.z = this.HALF_EXTENT.z * Math.abs(ws.z);
                  this.impl.updateConvexPolyhedronRepresentation();

                  if (this._index != -1) {
                    commitShapeUpdates(this._body);
                  }
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonBoxShape.prototype), "onLoad", this).call(this);

                  this.setSize(this.collider.size);
                }
              }, {
                key: "setScale",
                value: function setScale(scale) {
                  _get(_getPrototypeOf(CannonBoxShape.prototype), "setScale", this).call(this, scale);

                  this.setSize(this.collider.size);
                }
              }]);

              return CannonBoxShape;
            }(CannonShape);

            var CannonSphereShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonSphereShape, _CannonShape);

              _createClass(CannonSphereShape, [{
                key: "setRadius",
                value: function setRadius(v) {
                  var max = maxComponent(this.collider.node.worldScale);
                  this.impl.radius = v * Math.abs(max);
                  this.impl.updateBoundingSphereRadius();

                  if (this._index != -1) {
                    commitShapeUpdates(this._body);
                  }
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              function CannonSphereShape() {
                var _this;

                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;

                _classCallCheck(this, CannonSphereShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CannonSphereShape).call(this));
                _this._shape = new cannon_min.Sphere(radius);
                return _this;
              }

              _createClass(CannonSphereShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonSphereShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "setScale",
                value: function setScale(scale) {
                  _get(_getPrototypeOf(CannonSphereShape.prototype), "setScale", this).call(this, scale);

                  this.setRadius(this.collider.radius);
                }
              }]);

              return CannonSphereShape;
            }(CannonShape);

            var v3_cannon0$1 = new cannon_min.Vec3();
            var CannonTrimeshShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonTrimeshShape, _CannonShape);

              function CannonTrimeshShape() {
                _classCallCheck(this, CannonTrimeshShape);

                return _possibleConstructorReturn(this, _getPrototypeOf(CannonTrimeshShape).apply(this, arguments));
              }

              _createClass(CannonTrimeshShape, [{
                key: "setMesh",
                value: function setMesh(v) {
                  if (!this._isBinding) return;
                  var mesh = v;

                  if (this._shape != null) {
                    if (mesh && mesh.renderingSubMeshes.length > 0) {
                      var vertices = mesh.renderingSubMeshes[0].geometricInfo.positions;
                      var indices = mesh.renderingSubMeshes[0].geometricInfo.indices;
                      this.updateProperties(vertices, indices);
                    } else {
                      this.updateProperties(new Float32Array(), new Uint16Array());
                    }
                  } else {
                    if (mesh && mesh.renderingSubMeshes.length > 0) {
                      var _vertices = mesh.renderingSubMeshes[0].geometricInfo.positions;
                      var _indices = mesh.renderingSubMeshes[0].geometricInfo.indices;
                      this._shape = new cannon_min.Trimesh(_vertices, _indices);
                    } else {
                      this._shape = new cannon_min.Trimesh(new Float32Array(), new Uint16Array());
                    }
                  }
                }
              }, {
                key: "onComponentSet",
                value: function onComponentSet() {
                  this.setMesh(this.collider.mesh);
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonTrimeshShape.prototype), "onLoad", this).call(this);

                  this.setMesh(this.collider.mesh);
                }
              }, {
                key: "setScale",
                value: function setScale(scale) {
                  _get(_getPrototypeOf(CannonTrimeshShape.prototype), "setScale", this).call(this, scale);

                  Vec3.copy(v3_cannon0$1, scale);
                  this.impl.setScale(v3_cannon0$1);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(vertices, indices) {
                  this.impl.vertices = new Float32Array(vertices);
                  this.impl.indices = new Int16Array(indices);
                  this.impl.normals = new Float32Array(indices.length);
                  this.impl.aabb = new cannon_min.AABB();
                  this.impl.edges = [];
                  this.impl.tree = new cannon_min.Octree(new cannon_min.AABB());
                  this.impl.updateEdges();
                  this.impl.updateNormals();
                  this.impl.updateAABB();
                  this.impl.updateBoundingSphereRadius();
                  this.impl.updateTree();
                  this.impl.setScale(this.impl.scale);

                  if (this._index >= 0) {
                    commitShapeUpdates(this._body);
                  }
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              return CannonTrimeshShape;
            }(CannonShape);

            var CannonCylinderShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonCylinderShape, _CannonShape);

              _createClass(CannonCylinderShape, [{
                key: "setRadius",
                value: function setRadius(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, cannon_min['CC_CONFIG']['numSegmentsCylinder'], this.collider.direction, this.collider.node.worldScale);
                  if (this._index != -1) commitShapeUpdates(this._body);
                }
              }, {
                key: "setHeight",
                value: function setHeight(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, cannon_min['CC_CONFIG']['numSegmentsCylinder'], this.collider.direction, this.collider.node.worldScale);
                  if (this._index != -1) commitShapeUpdates(this._body);
                }
              }, {
                key: "setDirection",
                value: function setDirection(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, cannon_min['CC_CONFIG']['numSegmentsCylinder'], this.collider.direction, this.collider.node.worldScale);
                  if (this._index != -1) commitShapeUpdates(this._body);
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              function CannonCylinderShape() {
                var _this;

                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
                var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EAxisDirection.Y_AXIS;

                _classCallCheck(this, CannonCylinderShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CannonCylinderShape).call(this));
                _this._shape = new cannon_min.Cylinder(radius, radius, height, cannon_min['CC_CONFIG']['numSegmentsCylinder'], direction == EAxisDirection.Y_AXIS);
                return _this;
              }

              _createClass(CannonCylinderShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonCylinderShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "setScale",
                value: function setScale(scale) {
                  _get(_getPrototypeOf(CannonCylinderShape.prototype), "setScale", this).call(this, scale);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(radius, height, numSegments, direction, scale) {
                  var wh = height;
                  var wr = radius;
                  var cos = Math.cos;
                  var sin = Math.sin;
                  var abs = Math.abs;
                  var max = Math.max;

                  if (direction == 1) {
                    wh = abs(scale.y) * height;
                    wr = max(abs(scale.x), abs(scale.z)) * radius;
                  } else if (direction == 2) {
                    wh = abs(scale.z) * height;
                    wr = max(abs(scale.x), abs(scale.y)) * radius;
                  } else {
                    wh = abs(scale.x) * height;
                    wr = max(abs(scale.y), abs(scale.z)) * radius;
                  }

                  var N = numSegments;
                  var hH = wh / 2;
                  var vertices = [];
                  var indices = [];
                  var axes = [];
                  var theta = Math.PI * 2 / N;

                  if (direction == 1) {
                    var bf = [1];
                    var tf = [0];

                    for (var i = 0; i < N; i++) {
                      var x = wr * cos(theta * i);
                      var z = wr * sin(theta * i);
                      vertices.push(new cannon_min.Vec3(x, hH, z));
                      vertices.push(new cannon_min.Vec3(x, -hH, z));

                      if (i < N - 1) {
                        indices.push([2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i]);
                        tf.push(2 * i + 2);
                        bf.push(2 * i + 3);
                      } else {
                        indices.push([0, 1, 2 * i + 1, 2 * i]);
                      }

                      if (N % 2 === 1 || i < N / 2) {
                        axes.push(new cannon_min.Vec3(cos(theta * (i + 0.5)), 0, sin(theta * (i + 0.5))));
                      }
                    }

                    indices.push(bf);
                    var temp = [];

                    for (var i = 0; i < tf.length; i++) {
                      temp.push(tf[tf.length - i - 1]);
                    }

                    indices.push(temp);
                    axes.push(new cannon_min.Vec3(0, 1, 0));
                  } else if (direction == 2) {
                    var _bf = [0];
                    var _tf = [1];

                    for (var i = 0; i < N; i++) {
                      var _x = wr * cos(theta * i);

                      var y = wr * sin(theta * i);
                      vertices.push(new cannon_min.Vec3(_x, y, hH));
                      vertices.push(new cannon_min.Vec3(_x, y, -hH));

                      if (i < N - 1) {
                        indices.push([2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2]);

                        _bf.push(2 * i + 2);

                        _tf.push(2 * i + 3);
                      } else {
                        indices.push([2 * i, 2 * i + 1, 0, 1]);
                      }

                      if (N % 2 === 1 || i < N / 2) {
                        axes.push(new cannon_min.Vec3(cos(theta * (i + 0.5)), sin(theta * (i + 0.5)), 0));
                      }
                    }

                    indices.push(_bf);
                    var temp = [];

                    for (var i = 0; i < _tf.length; i++) {
                      temp.push(_tf[_tf.length - i - 1]);
                    }

                    indices.push(temp);
                    axes.push(new cannon_min.Vec3(0, 0, 1));
                  } else {
                    var _bf2 = [0];
                    var _tf2 = [1];

                    for (var i = 0; i < N; i++) {
                      var _y = wr * cos(theta * i);

                      var _z = wr * sin(theta * i);

                      vertices.push(new cannon_min.Vec3(hH, _y, _z));
                      vertices.push(new cannon_min.Vec3(-hH, _y, _z));

                      if (i < N - 1) {
                        indices.push([2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2]);

                        _bf2.push(2 * i + 2);

                        _tf2.push(2 * i + 3);
                      } else {
                        indices.push([2 * i, 2 * i + 1, 0, 1]);
                      }

                      if (N % 2 === 1 || i < N / 2) {
                        axes.push(new cannon_min.Vec3(0, cos(theta * (i + 0.5)), sin(theta * (i + 0.5))));
                      }
                    }

                    indices.push(_bf2);
                    var temp = [];

                    for (var i = 0; i < _tf2.length; i++) {
                      temp.push(_tf2[_tf2.length - i - 1]);
                    }

                    indices.push(temp);
                    axes.push(new cannon_min.Vec3(1, 0, 0));
                  }

                  this.impl.vertices = vertices;
                  this.impl.faces = indices;
                  this.impl.uniqueAxes = axes;
                  this.impl.worldVerticesNeedsUpdate = true;
                  this.impl.worldFaceNormalsNeedsUpdate = true;
                  this.impl.computeNormals();
                  this.impl.computeEdges();
                  this.impl.updateBoundingSphereRadius();
                }
              }]);

              return CannonCylinderShape;
            }(CannonShape);

            var v3_0$1 = new Vec3();
            var v3_1 = new Vec3();
            var CannonConeShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonConeShape, _CannonShape);

              _createClass(CannonConeShape, [{
                key: "setRadius",
                value: function setRadius(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, cannon_min['CC_CONFIG']['numSegmentsCone'], this.collider.direction, this.collider.node.worldScale);
                  if (this._index != -1) commitShapeUpdates(this._body);
                }
              }, {
                key: "setHeight",
                value: function setHeight(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, cannon_min['CC_CONFIG']['numSegmentsCone'], this.collider.direction, this.collider.node.worldScale);
                  if (this._index != -1) commitShapeUpdates(this._body);
                }
              }, {
                key: "setDirection",
                value: function setDirection(v) {
                  this.updateProperties(this.collider.radius, this.collider.height, cannon_min['CC_CONFIG']['numSegmentsCone'], this.collider.direction, this.collider.node.worldScale);
                  if (this._index != -1) commitShapeUpdates(this._body);
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              function CannonConeShape() {
                var _this;

                var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.5;
                var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EAxisDirection.Y_AXIS;

                _classCallCheck(this, CannonConeShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CannonConeShape).call(this));
                _this._shape = new cannon_min.Cylinder(0, radius, height, cannon_min['CC_CONFIG']['numSegmentsCone'], direction == EAxisDirection.Y_AXIS);
                return _this;
              }

              _createClass(CannonConeShape, [{
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonConeShape.prototype), "onLoad", this).call(this);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "setScale",
                value: function setScale(scale) {
                  _get(_getPrototypeOf(CannonConeShape.prototype), "setScale", this).call(this, scale);

                  this.setRadius(this.collider.radius);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(radius, height, numSegments, direction, scale) {
                  var wh = height;
                  var wr = radius;
                  var cos = Math.cos;
                  var sin = Math.sin;
                  var abs = Math.abs;
                  var max = Math.max;

                  if (direction == 1) {
                    wh = abs(scale.y) * height;
                    wr = max(abs(scale.x), abs(scale.z)) * radius;
                  } else if (direction == 2) {
                    wh = abs(scale.z) * height;
                    wr = max(abs(scale.x), abs(scale.y)) * radius;
                  } else {
                    wh = abs(scale.x) * height;
                    wr = max(abs(scale.y), abs(scale.z)) * radius;
                  }

                  var N = numSegments;
                  var hH = wh / 2;
                  var vertices = [];
                  var indices = [];
                  var axes = [];
                  var theta = Math.PI * 2 / N;

                  if (direction == 1) {
                    var bf = [];
                    indices.push(bf);
                    vertices.push(new cannon_min.Vec3(0, hH, 0));

                    for (var i = 0; i < N; i++) {
                      var x = wr * cos(theta * i);
                      var z = wr * sin(theta * i);
                      vertices.push(new cannon_min.Vec3(x, -hH, z));
                    }

                    for (var i = 0; i < N; i++) {
                      if (i != 0) bf.push(i);
                      var face;

                      if (i < N - 1) {
                        face = [0, i + 2, i + 1];
                      } else {
                        face = [0, 1, i + 1];
                      }

                      indices.push(face);
                      Vec3.subtract(v3_0$1, vertices[0], vertices[face[1]]);
                      Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
                      Vec3.cross(v3_0$1, v3_1, v3_0$1);
                      v3_0$1.normalize();
                      axes.push(new cannon_min.Vec3(v3_0$1.x, v3_0$1.y, v3_0$1.z));
                    }

                    axes.push(new cannon_min.Vec3(0, -1, 0));
                  } else if (direction == 2) {
                    var _bf = [];
                    indices.push(_bf);
                    vertices.push(new cannon_min.Vec3(0, 0, hH));

                    for (var i = 0; i < N; i++) {
                      var _x = wr * cos(theta * i);

                      var y = wr * sin(theta * i);
                      vertices.push(new cannon_min.Vec3(_x, y, -hH));
                    }

                    for (var i = 0; i < N; i++) {
                      if (i != 0) _bf.push(N - i);
                      var face;

                      if (i < N - 1) {
                        face = [0, i + 1, i + 2];
                      } else {
                        face = [0, i + 1, 1];
                      }

                      indices.push(face);
                      Vec3.subtract(v3_0$1, vertices[0], vertices[face[1]]);
                      Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
                      Vec3.cross(v3_0$1, v3_0$1, v3_1);
                      v3_0$1.normalize();
                      axes.push(new cannon_min.Vec3(v3_0$1.x, v3_0$1.y, v3_0$1.z));
                    }

                    axes.push(new cannon_min.Vec3(0, 0, -1));
                  } else {
                    var _bf2 = [];
                    indices.push(_bf2);
                    vertices.push(new cannon_min.Vec3(hH, 0, 0));

                    for (var i = 0; i < N; i++) {
                      var _y = wr * cos(theta * i);

                      var _z = wr * sin(theta * i);

                      vertices.push(new cannon_min.Vec3(-hH, _y, _z));
                    }

                    for (var i = 0; i < N; i++) {
                      if (i != 0) _bf2.push(N - i);
                      var face;

                      if (i < N - 1) {
                        face = [0, i + 1, i + 2];
                      } else {
                        face = [0, i + 1, 1];
                      }

                      indices.push(face);
                      Vec3.subtract(v3_0$1, vertices[0], vertices[face[1]]);
                      Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
                      Vec3.cross(v3_0$1, v3_0$1, v3_1);
                      v3_0$1.normalize();
                      axes.push(new cannon_min.Vec3(v3_0$1.x, v3_0$1.y, v3_0$1.z));
                    }

                    axes.push(new cannon_min.Vec3(-1, 0, 0));
                  }

                  this.impl.vertices = vertices;
                  this.impl.faces = indices;
                  this.impl.uniqueAxes = axes;
                  this.impl.worldVerticesNeedsUpdate = true;
                  this.impl.worldFaceNormalsNeedsUpdate = true;
                  this.impl.computeNormals();
                  this.impl.computeEdges();
                  this.impl.updateBoundingSphereRadius();
                }
              }]);

              return CannonConeShape;
            }(CannonShape);

            var CANNON_AABB_LOCAL = new cannon_min.AABB();
            var CANNON_AABB = new cannon_min.AABB();
            var CANNON_TRANSFORM = new cannon_min.Transform();

            cannon_min.Heightfield.prototype.calculateWorldAABB = function (pos, quat, min, max) {
              var frame = CANNON_TRANSFORM;
              var result = CANNON_AABB;
              Vec3.copy(frame.position, pos);
              Quat.copy(frame.quaternion, quat);
              var s = this.elementSize;
              var data = this.data;
              CANNON_AABB_LOCAL.lowerBound.set(0, 0, this.minValue);
              CANNON_AABB_LOCAL.upperBound.set((data.length - 1) * s, (data[0].length - 1) * s, this.maxValue);
              CANNON_AABB_LOCAL.toWorldFrame(frame, result);
              min.copy(result.lowerBound);
              max.copy(result.upperBound);
            };

            var CannonTerrainShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonTerrainShape, _CannonShape);

              _createClass(CannonTerrainShape, [{
                key: "setTerrain",
                value: function setTerrain(v) {
                  if (v) {
                    if (this._terrainID != v._uuid) {
                      var terrain = v;
                      var sizeI = terrain.getVertexCountI();
                      var sizeJ = terrain.getVertexCountJ();
                      this._terrainID = terrain._uuid;
                      this.DATA.length = sizeI - 1;

                      for (var i = 0; i < sizeI; i++) {
                        if (this.DATA[i] == null) this.DATA[i] = [];
                        this.DATA[i].length = sizeJ - 1;

                        for (var j = 0; j < sizeJ; j++) {
                          this.DATA[i][j] = terrain.getHeight(i, sizeJ - 1 - j);
                        }
                      }

                      this.OPTIONS.elementSize = terrain.tileSize;
                      this.updateProperties(this.DATA, this.OPTIONS.elementSize);
                    }
                  } else {
                    if (this._terrainID != '') {
                      this._terrainID = '';
                      this.DATA.length = 1;
                      this.DATA[0] = this.DATA[0] || [];
                      this.DATA[0].length = 0;
                      this.OPTIONS.elementSize = 0;
                      this.updateProperties(this.DATA, this.OPTIONS.elementSize);
                    }
                  }
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              function CannonTerrainShape() {
                var _this;

                _classCallCheck(this, CannonTerrainShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CannonTerrainShape).call(this));
                _this.DATA = void 0;
                _this.OPTIONS = void 0;
                _this._terrainID = void 0;
                _this.DATA = [[]];
                _this.OPTIONS = {
                  elementSize: 0
                };
                _this._terrainID = '';
                return _this;
              }

              _createClass(CannonTerrainShape, [{
                key: "onComponentSet",
                value: function onComponentSet() {
                  var terrain = this.collider.terrain;

                  if (terrain) {
                    var sizeI = terrain.getVertexCountI();
                    var sizeJ = terrain.getVertexCountJ();

                    for (var i = 0; i < sizeI; i++) {
                      if (this.DATA[i] == null) this.DATA[i] = [];

                      for (var j = 0; j < sizeJ; j++) {
                        this.DATA[i][j] = terrain.getHeight(i, sizeJ - 1 - j);
                      }
                    }

                    this.OPTIONS.elementSize = terrain.tileSize;
                    this._terrainID = terrain._uuid;
                  }

                  this._shape = new cannon_min.Heightfield(this.DATA, this.OPTIONS);
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonTerrainShape.prototype), "onLoad", this).call(this);

                  this.setTerrain(this.collider.terrain);
                }
              }, {
                key: "updateProperties",
                value: function updateProperties(data, elementSize) {
                  var impl = this.impl;
                  impl.data = data;
                  impl.elementSize = elementSize;
                  impl.updateMinValue();
                  impl.updateMaxValue();
                  impl.updateBoundingSphereRadius();
                  impl.update();

                  if (this._index >= 0) {
                    commitShapeUpdates(this._body);
                  }
                } // override

              }, {
                key: "_setCenter",
                value: function _setCenter(v) {
                  var terrain = this.collider.terrain;

                  if (terrain) {
                    Quat.fromEuler(this._orient, -90, 0, 0);
                    var lpos = this._offset;
                    Vec3.set(lpos, 0, 0, (terrain.getVertexCountJ() - 1) * terrain.tileSize);
                    Vec3.add(lpos, lpos, v);
                    Vec3.multiply(lpos, lpos, this._collider.node.worldScale);
                  }
                }
              }]);

              return CannonTerrainShape;
            }(CannonShape);

            var CannonSimplexShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonSimplexShape, _CannonShape);

              function CannonSimplexShape() {
                var _getPrototypeOf2;

                var _this;

                _classCallCheck(this, CannonSimplexShape);

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CannonSimplexShape)).call.apply(_getPrototypeOf2, [this].concat(args)));
                _this.VERTICES = [];
                return _this;
              }

              _createClass(CannonSimplexShape, [{
                key: "setShapeType",
                value: function setShapeType(v) {
                  if (this._isBinding) ;
                }
              }, {
                key: "setVertices",
                value: function setVertices(v) {
                  var length = this.VERTICES.length;

                  if (length == 4) {
                    var ws = this._collider.node.worldScale;

                    for (var i = 0; i < length; i++) {
                      Vec3.multiply(this.VERTICES[i], ws, v[i]);
                    }

                    var impl = this.impl;
                    impl.computeNormals();
                    impl.computeEdges();
                    impl.updateBoundingSphereRadius();
                  }

                  if (this._index != -1) {
                    commitShapeUpdates(this._body);
                  }
                }
              }, {
                key: "onComponentSet",
                value: function onComponentSet() {
                  var type = this.collider.shapeType;

                  if (type == SimplexCollider.ESimplexType.TETRAHEDRON) {
                    for (var i = 0; i < 4; i++) {
                      this.VERTICES[i] = new cannon_min.Vec3(0, 0, 0);
                    }

                    this._shape = createTetra(this.VERTICES);
                  } else {
                    if (type != SimplexCollider.ESimplexType.VERTEX) ;

                    this._shape = new cannon_min.Particle();
                  }
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonSimplexShape.prototype), "onLoad", this).call(this);

                  this.collider.updateVertices();
                }
              }, {
                key: "setScale",
                value: function setScale(scale) {
                  _get(_getPrototypeOf(CannonSimplexShape.prototype), "setScale", this).call(this, scale);

                  this.collider.updateVertices();
                }
              }, {
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              return CannonSimplexShape;
            }(CannonShape);

            var createTetra = function () {
              var faces = [[0, 3, 2], // -x
              [0, 1, 3], // -y
              [0, 2, 1], // -z
              [1, 2, 3] // +xyz
              ];
              return function (verts) {
                return new cannon_min.ConvexPolyhedron(verts, faces);
              };
            }();

            var CannonPlaneShape = /*#__PURE__*/function (_CannonShape) {
              _inherits(CannonPlaneShape, _CannonShape);

              _createClass(CannonPlaneShape, [{
                key: "collider",
                get: function get() {
                  return this._collider;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._shape;
                }
              }]);

              function CannonPlaneShape() {
                var _this;

                _classCallCheck(this, CannonPlaneShape);

                _this = _possibleConstructorReturn(this, _getPrototypeOf(CannonPlaneShape).call(this));
                _this._shape = new cannon_min.Plane();
                return _this;
              }

              _createClass(CannonPlaneShape, [{
                key: "setNormal",
                value: function setNormal(v) {
                  Quat.rotationTo(this._orient, Vec3.UNIT_Z, v);

                  if (this._index != -1) {
                    commitShapeUpdates(this._body);
                  }
                }
              }, {
                key: "setConstant",
                value: function setConstant(v) {
                  Vec3.scaleAndAdd(this._offset, this._collider.center, this.collider.normal, v);
                }
              }, {
                key: "onLoad",
                value: function onLoad() {
                  _get(_getPrototypeOf(CannonPlaneShape.prototype), "onLoad", this).call(this);

                  this.setConstant(this.collider.constant);
                  this.setNormal(this.collider.normal);
                }
              }, {
                key: "_setCenter",
                value: function _setCenter(v) {
                  _get(_getPrototypeOf(CannonPlaneShape.prototype), "_setCenter", this).call(this, v);

                  this.setConstant(this.collider.constant);
                }
              }]);

              return CannonPlaneShape;
            }(CannonShape);

            cannon_min.World['staticBody'] = new cannon_min.Body();
            cannon_min.World['idToConstraintMap'] = {};
            var CannonConstraint = /*#__PURE__*/function () {
              function CannonConstraint() {
                _classCallCheck(this, CannonConstraint);

                this._rigidBody = null;
              }

              _createClass(CannonConstraint, [{
                key: "setConnectedBody",
                value: function setConnectedBody(v) {
                  if (v) {
                    this._impl.bodyB = v.body.impl;
                  } else {
                    this._impl.bodyB = cannon_min.World['staticBody'];
                  }
                }
              }, {
                key: "setEnableCollision",
                value: function setEnableCollision(v) {
                  this._impl.collideConnected = v;
                }
              }, {
                key: "initialize",
                value: function initialize(v) {
                  this._com = v;
                  this._rigidBody = v.attachedBody;
                  this.onComponentSet();
                  this.setEnableCollision(v.enableCollision);
                  cannon_min.World['idToConstraintMap'][this._impl.id] = this._impl;
                } // virtual

              }, {
                key: "onComponentSet",
                value: function onComponentSet() {}
              }, {
                key: "onLoad",
                value: function onLoad() {}
              }, {
                key: "onEnable",
                value: function onEnable() {
                  if (this._rigidBody) {
                    var sb = this._rigidBody.body.sharedBody;
                    sb.wrappedWorld.addConstraint(this);
                  }
                }
              }, {
                key: "onDisable",
                value: function onDisable() {
                  if (this._rigidBody) {
                    var sb = this._rigidBody.body.sharedBody;
                    sb.wrappedWorld.removeConstraint(this);
                  }
                }
              }, {
                key: "onDestroy",
                value: function onDestroy() {
                  delete cannon_min.World['idToConstraintMap'][this._impl.id];
                  this._com = null;
                  this._rigidBody = null;
                  this._impl = null;
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._impl;
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._com;
                }
              }]);

              return CannonConstraint;
            }();

            var v3_0$2 = new Vec3();
            var v3_1$1 = new Vec3();
            var CannonPointToPointConstraint = /*#__PURE__*/function (_CannonConstraint) {
              _inherits(CannonPointToPointConstraint, _CannonConstraint);

              function CannonPointToPointConstraint() {
                _classCallCheck(this, CannonPointToPointConstraint);

                return _possibleConstructorReturn(this, _getPrototypeOf(CannonPointToPointConstraint).apply(this, arguments));
              }

              _createClass(CannonPointToPointConstraint, [{
                key: "setPivotA",
                value: function setPivotA(v) {
                  Vec3.multiply(v3_0$2, v, this._com.node.worldScale);
                  Vec3.copy(this.impl.pivotA, v3_0$2);
                }
              }, {
                key: "setPivotB",
                value: function setPivotB(v) {
                  Vec3.copy(v3_0$2, v);
                  var cb = this.constraint.connectedBody;

                  if (cb) {
                    Vec3.multiply(v3_0$2, v3_0$2, cb.node.worldScale);
                  } else {
                    Vec3.add(v3_0$2, v3_0$2, this._com.node.worldPosition);
                    Vec3.multiply(v3_1$1, this.constraint.pivotA, this._com.node.worldScale);
                    Vec3.add(v3_0$2, v3_0$2, v3_1$1);
                  }

                  Vec3.copy(this.impl.pivotB, v3_0$2);
                }
              }, {
                key: "onComponentSet",
                value: function onComponentSet() {
                  if (this._rigidBody) {
                    var bodyA = this._rigidBody.body.impl;
                    var cb = this.constraint.connectedBody;
                    var bodyB = cannon_min.World['staticBody'];

                    if (cb) {
                      bodyB = cb.body.impl;
                    }

                    this._impl = new cannon_min.PointToPointConstraint(bodyA, null, bodyB);
                    this.setPivotA(this.constraint.pivotA);
                    this.setPivotB(this.constraint.pivotB);
                  }
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._impl;
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._com;
                }
              }]);

              return CannonPointToPointConstraint;
            }(CannonConstraint);

            var v3_0$3 = new Vec3();
            var v3_1$2 = new Vec3();
            var CannonHingeConstraint = /*#__PURE__*/function (_CannonConstraint) {
              _inherits(CannonHingeConstraint, _CannonConstraint);

              function CannonHingeConstraint() {
                _classCallCheck(this, CannonHingeConstraint);

                return _possibleConstructorReturn(this, _getPrototypeOf(CannonHingeConstraint).apply(this, arguments));
              }

              _createClass(CannonHingeConstraint, [{
                key: "setPivotA",
                value: function setPivotA(v) {
                  Vec3.multiply(v3_0$3, v, this._com.node.worldScale);
                  Vec3.copy(this.impl.pivotA, v3_0$3);
                }
              }, {
                key: "setPivotB",
                value: function setPivotB(v) {
                  Vec3.copy(v3_0$3, v);
                  var cb = this.constraint.connectedBody;

                  if (cb) {
                    Vec3.multiply(v3_0$3, v3_0$3, cb.node.worldScale);
                  } else {
                    Vec3.add(v3_0$3, v3_0$3, this._com.node.worldPosition);
                    Vec3.multiply(v3_1$2, this.constraint.pivotA, this._com.node.worldScale);
                    Vec3.add(v3_0$3, v3_0$3, v3_1$2);
                  }

                  Vec3.copy(this.impl.pivotB, v3_0$3);
                }
              }, {
                key: "setAxisA",
                value: function setAxisA(v) {
                  Vec3.copy(this.impl.axisA, v);
                  Vec3.copy(this.impl.equations[3].axisA, v);
                  Vec3.copy(this.impl.equations[4].axisA, v);
                }
              }, {
                key: "setAxisB",
                value: function setAxisB(v) {
                  Vec3.copy(this.impl.axisB, v);
                  Vec3.copy(this.impl.equations[3].axisB, v);
                  Vec3.copy(this.impl.equations[4].axisB, v);
                }
              }, {
                key: "onComponentSet",
                value: function onComponentSet() {
                  if (this._rigidBody) {
                    var bodyA = this._rigidBody.body.impl;
                    var cb = this.constraint.connectedBody;
                    var bodyB = cannon_min.World['staticBody'];

                    if (cb) {
                      bodyB = cb.body.impl;
                    }

                    this._impl = new cannon_min.HingeConstraint(bodyA, bodyB);
                    this.setPivotA(this.constraint.pivotA);
                    this.setPivotB(this.constraint.pivotB);
                    this.setAxisA(this.constraint.axisA);
                    this.setAxisB(this.constraint.axisB);
                  }
                }
              }, {
                key: "impl",
                get: function get() {
                  return this._impl;
                }
              }, {
                key: "constraint",
                get: function get() {
                  return this._com;
                }
              }]);

              return CannonHingeConstraint;
            }(CannonConstraint);

            replaceProperty(CannonContactEquation.prototype, 'IContactEquation.prototype', [{
              'name': 'contactA',
              'newName': 'getLocalPointOnA',
              'customGetter': function customGetter() {
                var out = new Vec3();
                CannonContactEquation.prototype.getLocalPointOnA.call(this, out);
                return out;
              }
            }, {
              'name': 'contactB',
              'newName': 'getLocalPointOnB',
              'customGetter': function customGetter() {
                var out = new Vec3();
                CannonContactEquation.prototype.getLocalPointOnB.call(this, out);
                return out;
              }
            }, {
              'name': 'normal',
              'newName': 'getLocalNormalOnB',
              'customGetter': function customGetter() {
                var out = new Vec3();
                CannonContactEquation.prototype.getLocalNormalOnB.call(this, out);
                return out;
              }
            }]);

            select('cannon.js', {
              PhysicsWorld: CannonWorld,
              RigidBody: CannonRigidBody,
              BoxShape: CannonBoxShape,
              SphereShape: CannonSphereShape,
              TrimeshShape: CannonTrimeshShape,
              CylinderShape: CannonCylinderShape,
              ConeShape: CannonConeShape,
              TerrainShape: CannonTerrainShape,
              SimplexShape: CannonSimplexShape,
              PlaneShape: CannonPlaneShape,
              PointToPointConstraint: CannonPointToPointConstraint,
              HingeConstraint: CannonHingeConstraint
            });

            /**
             * @hidden
             */
            if (window) window.CANNON = cannon_min; // polyfill config

            cannon_min['CC_CONFIG'] = {
              'numSegmentsCone': 12,
              'numSegmentsCylinder': 12,
              'ignoreSelfBody': true
            }; // overwrite

            cannon_min.ArrayCollisionMatrix.prototype.reset = function () {
              for (var key in this.matrix) {
                delete this.matrix[key];
              }
            };

        }
    };
});
