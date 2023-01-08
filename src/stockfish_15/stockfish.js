/*!
 * Stockfish.js (c) Chess.com, LLC
 * https://github.com/nmrugg/stockfish.js
 * License: GPLv3
 *
 * Based on stockfish.wasm (c)
 * Niklas Fiekas <niklas.fiekas@backscattering.de>
 * Hiroshi Ogawa <hi.ogawa.zz@gmail.com>
 * https://github.com/niklasf/stockfish.wasm
 * https://github.com/hi-ogawa/Stockfish
 *
 * Based on Stockfish (c) T. Romstad, M. Costalba, J. Kiiski, G. Linscott and other contributors.
 * https://github.com/official-stockfish/Stockfish
 */
var Stockfish;
function INIT_ENGINE() {

var Stockfish = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(Stockfish) {
  Stockfish = Stockfish || {};


var c;c||(c=typeof Stockfish !== 'undefined' ? Stockfish : {});var aa,ca;c.ready=new Promise(function(a,b){aa=a;ca=b});"undefined"===typeof XMLHttpRequest&&(global.XMLHttpRequest=function(){var a,b={open:function(d,f){a=f},send:function(){require("fs").readFile(a,function(d,f){b.readyState=4;d?(console.error(d),b.status=404,b.onerror(d)):(b.status=200,b.response=f,b.onreadystatechange(),b.onload())})}};return b});
c.postCustomMessage=function(a){for(var b of m.ia)b.postMessage({cmd:"custom",userData:a})};c.queue=function(){var a=[],b;return{get:async function(){return 0<a.length?a.shift():await new Promise(function(d){return b=d})},put:function(d){b?(b(d),b=null):a.push(d)}}}();c.onCustomMessage=function(a){da?ea.push(a):c.queue.put(a)};var da,ea=[];c.pauseQueue=function(){da=!0};c.unpauseQueue=function(){var a=ea;ea=[];da=!1;a.forEach(function(b){c.queue.put(b)})};c.postMessage=c.postCustomMessage;
var fa=[];c.addMessageListener=function(a){fa.push(a)};c.removeMessageListener=function(a){a=fa.indexOf(a);0<=a&&fa.splice(a,1)};c.print=c.printErr=function(a){if(0===fa.length)return console.log(a);for(var b of fa)b(a)};c.terminate=function(){m.qa()};
var ha=Object.assign({},c),ia=[],ja="./this.program",la=(a,b)=>{throw b;},ma="object"==typeof window,n="function"==typeof importScripts,t="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,z=c.ENVIRONMENT_IS_PTHREAD||!1,A="";function na(a){return c.locateFile?c.locateFile(a,A):A+a}var oa,pa;
if(t){var fs=require("fs"),qa=require("path");A=n?qa.dirname(A)+"/":__dirname+"/";oa=(b,d)=>{b=b.startsWith("file://")?new URL(b):qa.normalize(b);return fs.readFileSync(b,d?void 0:"utf8")};pa=b=>{b=oa(b,!0);b.buffer||(b=new Uint8Array(b));return b};1<process.argv.length&&(ja=process.argv[1].replace(/\\/g,"/"));ia=process.argv.slice(2);process.on("uncaughtException",function(b){if(!(b instanceof ra))throw b;});process.on("unhandledRejection",function(b){throw b;});la=(b,d)=>{if(noExitRuntime)throw process.exitCode=
b,d;d instanceof ra||B("exiting due to exception: "+d);process.exit(b)};c.inspect=function(){return"[Emscripten Module object]"};let a;try{a=require("worker_threads")}catch(b){throw console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?'),b;}global.Worker=a.Worker}else if(ma||n)n?A=self.location.href:"undefined"!=typeof document&&document.currentScript&&(A=document.currentScript.src),_scriptDir&&(A=_scriptDir),0!==A.indexOf("blob:")?
A=A.substr(0,A.replace(/[?#].*/,"").lastIndexOf("/")+1):A="",t||(oa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},n&&(pa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}));t&&"undefined"==typeof performance&&(global.performance=require("perf_hooks").performance);var sa=console.log.bind(console),ta=console.warn.bind(console);t&&(sa=a=>fs.writeSync(1,a+"\n"),ta=a=>fs.writeSync(2,a+"\n"));
var ua=c.print||sa,B=c.printErr||ta;Object.assign(c,ha);ha=null;c.arguments&&(ia=c.arguments);c.thisProgram&&(ja=c.thisProgram);c.quit&&(la=c.quit);var va;c.wasmBinary&&(va=c.wasmBinary);var noExitRuntime=c.noExitRuntime||!0;"object"!=typeof WebAssembly&&C("no native wasm support detected");var D,wa,E=!1,xa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ya(a,b){for(var d=b+NaN,f=b;a[f]&&!(f>=d);)++f;if(16<f-b&&a.buffer&&xa)return xa.decode(a.buffer instanceof SharedArrayBuffer?a.slice(b,f):a.subarray(b,f));for(d="";b<f;){var k=a[b++];if(k&128){var g=a[b++]&63;if(192==(k&224))d+=String.fromCharCode((k&31)<<6|g);else{var h=a[b++]&63;k=224==(k&240)?(k&15)<<12|g<<6|h:(k&7)<<18|g<<12|h<<6|a[b++]&63;65536>k?d+=String.fromCharCode(k):(k-=65536,d+=String.fromCharCode(55296|k>>10,56320|k&1023))}}else d+=String.fromCharCode(k)}return d}
function F(a){return a?ya(H,a):""}function I(a,b,d,f){if(0<f){f=d+f-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var h=a.charCodeAt(++k);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(d>=f)break;b[d++]=g}else{if(2047>=g){if(d+1>=f)break;b[d++]=192|g>>6}else{if(65535>=g){if(d+2>=f)break;b[d++]=224|g>>12}else{if(d+3>=f)break;b[d++]=240|g>>18;b[d++]=128|g>>12&63}b[d++]=128|g>>6&63}b[d++]=128|g&63}}b[d]=0}}
function za(a){for(var b=0,d=0;d<a.length;++d){var f=a.charCodeAt(d);127>=f?b++:2047>=f?b+=2:55296<=f&&57343>=f?(b+=4,++d):b+=3}return b}var J,Aa,H,O,P,Q,Ba;z&&(J=c.buffer);var Ca=c.INITIAL_MEMORY||1073741824;
if(z)D=c.wasmMemory,J=c.buffer;else if(c.wasmMemory)D=c.wasmMemory;else if(D=new WebAssembly.Memory({initial:Ca/65536,maximum:Ca/65536,shared:!0}),!(D.buffer instanceof SharedArrayBuffer))throw B("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),t&&B("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and/or recent version)"),
Error("bad memory");D&&(J=D.buffer);Ca=J.byteLength;var R=J;J=R;c.HEAP8=Aa=new Int8Array(R);c.HEAP16=new Int16Array(R);c.HEAP32=P=new Int32Array(R);c.HEAPU8=H=new Uint8Array(R);c.HEAPU16=O=new Uint16Array(R);c.HEAPU32=Q=new Uint32Array(R);c.HEAPF32=new Float32Array(R);c.HEAPF64=Ba=new Float64Array(R);var Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=c.preRun.shift();Da.unshift(a)}var S=0,Ia=null,Ja=null;function Ka(){S++;c.monitorRunDependencies&&c.monitorRunDependencies(S)}
function La(){S--;c.monitorRunDependencies&&c.monitorRunDependencies(S);if(0==S&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja)){var a=Ja;Ja=null;a()}}function C(a){if(c.onAbort)c.onAbort(a);a="Aborted("+a+")";B(a);E=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");ca(a);throw a;}function Ma(){return T.startsWith("data:application/octet-stream;base64,")}var T;T="stockfish.wasm";Ma()||(T=na(T));
function Na(){var a=T;try{if(a==T&&va)return new Uint8Array(va);if(pa)return pa(a);throw"both async and sync fetching of the wasm failed";}catch(b){C(b)}}function Oa(){return va||!ma&&!n||"function"!=typeof fetch?Promise.resolve().then(function(){return Na()}):fetch(T,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+T+"'";return a.arrayBuffer()}).catch(function(){return Na()})}var Pa={};
function ra(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}function Qa(a){(a=m.ea[a])||C();m.oa(a)}function Ra(a){var b=m.xa();if(!b)return 6;m.ia.push(b);m.ea[a.da]=b;b.da=a.da;var d={cmd:"run",start_routine:a.Ca,arg:a.ua,pthread_ptr:a.da};b.ja=()=>{t&&b.ref();b.postMessage(d,a.Ha);delete b.ja};b.loaded&&b.ja();return 0}function Sa(a){if(z)return U(1,1,a);if(!noExitRuntime){m.qa();if(c.onExit)c.onExit(a);E=!0}la(a,new ra(a))}
function Ta(a,b){if(!b&&z)throw Ua(a),"unwind";Sa(a)}function Va(a){a instanceof ra||"unwind"==a||la(1,a)}
var m={ha:[],ia:[],sa:[],ea:{},ya:function(){z&&m.za()},Ka:function(){},za:function(){m.receiveObjectTransfer=m.Ba;m.threadInitTLS=m.ra;m.setExitStatus=m.pa;noExitRuntime=!1},pa:function(){},qa:function(){for(var a of Object.values(m.ea))m.oa(a);for(a of m.ha)a.terminate();m.ha=[]},oa:function(a){var b=a.da;delete m.ea[b];m.ha.push(a);m.ia.splice(m.ia.indexOf(a),1);a.da=0;t&&a.unref();Wa(b)},Ba:function(){},ra:function(){m.sa.forEach(a=>a())},Aa:function(a,b){a.onmessage=g=>{g=g.data;var h=g.cmd;
a.da&&(m.va=a.da);if(g.targetThread&&g.targetThread!=Xa()){var q=m.ea[g.La];q?q.postMessage(g,g.transferList):B('Internal error! Worker sent a message "'+h+'" to target pthread '+g.targetThread+", but that thread no longer exists!")}else if("processProxyingQueue"===h)Ya(g.queue);else if("spawnThread"===h)Ra(g);else if("cleanupThread"===h)Qa(g.thread);else if("killThread"===h)g=g.thread,h=m.ea[g],delete m.ea[g],h.terminate(),Wa(g),m.ia.splice(m.ia.indexOf(h),1),h.da=0;else if("cancelThread"===h)m.ea[g.thread].postMessage({cmd:"cancel"});
else if("loaded"===h)a.loaded=!0,t&&a.unref(),b&&b(a),a.ja&&a.ja();else if("print"===h)ua("Thread "+g.threadId+": "+g.text);else if("printErr"===h)B("Thread "+g.threadId+": "+g.text);else if("alert"===h)alert("Thread "+g.threadId+": "+g.text);else if("setimmediate"===g.target)a.postMessage(g);else if("callHandler"===h)c[g.handler](...g.args);else h&&B("worker sent an unknown command "+h);m.va=void 0};a.onerror=g=>{B("worker sent an error! "+g.filename+":"+g.lineno+": "+g.message);throw g;};t&&(a.on("message",
function(g){a.onmessage({data:g})}),a.on("error",function(g){a.onerror(g)}),a.on("detachedExit",function(){}));var d=[],f=["onExit","onAbort","print","printErr"],k;for(k of f)c.hasOwnProperty(k)&&d.push(k);a.postMessage({cmd:"load",handlers:d,urlOrBlob:c.mainScriptUrlOrBlob||_scriptDir,wasmMemory:D,wasmModule:wa})},ta:function(){var a=na("stockfish.worker.js");a=new Worker(a);m.ha.push(a)},xa:function(){0==m.ha.length&&(m.ta(),m.Aa(m.ha[0]));return m.ha.pop()}};c.PThread=m;
function Za(a){for(;0<a.length;)a.shift()(c)}c.establishStackSpace=function(){var a=Xa(),b=P[a+52>>2];$a(b,b-P[a+56>>2]);ab(b)};function Ua(a){if(z)return U(2,0,a);try{Ta(a)}catch(b){Va(b)}}c.invokeEntryPoint=function(a,b){a=bb.apply(null,[a,b]);noExitRuntime?m.pa(a):cb(a)};function db(a,b,d,f){return z?U(3,1,a,b,d,f):eb(a,b,d,f)}
function eb(a,b,d,f){if("undefined"==typeof SharedArrayBuffer)return B("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var k=[];if(z&&0===k.length)return db(a,b,d,f);a={Ca:d,da:a,ua:f,Ha:k};return z?(a.Ja="spawnThread",postMessage(a,k),0):Ra(a)}function fb(a,b,d){return z?U(4,1,a,b,d):0}function gb(a,b,d){return z?U(5,1,a,b,d):0}function hb(a,b,d,f){if(z)return U(6,1,a,b,d,f)}
function Ya(a){Atomics.store(P,a>>2,1);Xa()&&ib(a);Atomics.compareExchange(P,a>>2,1,0)}c.executeNotifiedProxyingQueue=Ya;var jb;function kb(a){if(z)return U(7,1,a);noExitRuntime=!1;Ta(a)}var lb;lb=t?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.timeOrigin+performance.now();function mb(a){var b=nb();a=a();ab(b);return a}function U(a,b){var d=arguments.length-2,f=arguments;return mb(()=>{for(var k=ob(8*d),g=k>>3,h=0;h<d;h++)Ba[g+h]=f[2+h];return pb(a,d,k,b)})}var qb=[],V={};
function W(a,b){Q[a>>2]=b;Q[a+4>>2]=b/4294967296|0}function rb(a,b){try{var d=indexedDB.open("emscripten_filesystem",1)}catch(f){b(f);return}d.onupgradeneeded=f=>{f=f.target.result;f.objectStoreNames.contains("FILES")&&f.deleteObjectStore("FILES");f.createObjectStore("FILES")};d.onsuccess=f=>a(f.target.result);d.onerror=f=>b(f)}var sb;
function tb(a,b,d,f,k){function g(){var w=0,L=0;l.response&&K&&0===Q[a+12>>2]&&(L=l.response.byteLength);0<L&&(w=ub(L),H.set(new Uint8Array(l.response),w));Q[a+12>>2]=w;W(a+16,L);W(a+24,0);(w=l.response?l.response.byteLength:0)&&W(a+32,w);O[a+40>>1]=l.readyState;O[a+42>>1]=l.status;l.statusText&&I(l.statusText,H,a+44,64)}var h=Q[a+8>>2];if(h){var q=F(h),p=a+112,x=F(p);x||(x="GET");var y=Q[p+52>>2],Y=Q[p+56>>2],M=!!Q[p+60>>2],e=Q[p+68>>2],r=Q[p+72>>2];h=Q[p+76>>2];var u=Q[p+80>>2],G=Q[p+84>>2];p=Q[p+
88>>2];var K=!!(y&1),ba=!!(y&2);y=!!(y&64);e=e?F(e):void 0;r=r?F(r):void 0;var l=new XMLHttpRequest;l.withCredentials=M;l.open(x,q,!y,e,r);y||(l.timeout=Y);l.Ia=q;l.responseType="arraybuffer";u&&(q=F(u),l.overrideMimeType(q));if(h)for(;;){x=Q[h>>2];if(!x)break;q=Q[h+4>>2];if(!q)break;h+=8;x=F(x);q=F(q);l.setRequestHeader(x,q)}var N=Q[a+0>>2];V[N]=l;h=G&&p?H.slice(G,G+p):null;l.onload=w=>{N in V&&(g(),200<=l.status&&300>l.status?b&&b(a,l,w):d&&d(a,l,w))};l.onerror=w=>{N in V&&(g(),d&&d(a,l,w))};l.ontimeout=
w=>{N in V&&d&&d(a,l,w)};l.onprogress=w=>{if(N in V){var L=K&&ba&&l.response?l.response.byteLength:0,v=0;0<L&&K&&ba&&(v=ub(L),H.set(new Uint8Array(l.response),v));Q[a+12>>2]=v;W(a+16,L);W(a+24,w.loaded-L);W(a+32,w.total);O[a+40>>1]=l.readyState;3<=l.readyState&&0===l.status&&0<w.loaded&&(l.status=200);O[a+42>>1]=l.status;l.statusText&&I(l.statusText,H,a+44,64);f&&f(a,l,w);v&&vb(v)}};l.onreadystatechange=w=>{N in V&&(O[a+40>>1]=l.readyState,2<=l.readyState&&(O[a+42>>1]=l.status),k&&k(a,l,w))};try{l.send(h)}catch(w){d&&
d(a,l,w)}}else d(a,0,"no url specified!")}function wb(a){if(!E)try{a()}catch(b){Va(b)}}function xb(a,b,d,f){var k=sb;if(k){var g=Q[a+112+64>>2];g||(g=Q[a+8>>2]);var h=F(g);try{var q=k.transaction(["FILES"],"readwrite").objectStore("FILES").put(b,h);q.onsuccess=()=>{O[a+40>>1]=4;O[a+42>>1]=200;I("OK",H,a+44,64);d(a,0,h)};q.onerror=p=>{O[a+40>>1]=4;O[a+42>>1]=413;I("Payload Too Large",H,a+44,64);f(a,0,p)}}catch(p){f(a,0,p)}}else f(a,0,"IndexedDB not available!")}
function yb(a,b,d){var f=sb;if(f){var k=Q[a+112+64>>2];k||(k=Q[a+8>>2]);k=F(k);try{var g=f.transaction(["FILES"],"readonly").objectStore("FILES").get(k);g.onsuccess=h=>{if(h.target.result){h=h.target.result;var q=h.byteLength||h.length,p=ub(q);H.set(new Uint8Array(h),p);Q[a+12>>2]=p;W(a+16,q);W(a+24,0);W(a+32,q);O[a+40>>1]=4;O[a+42>>1]=200;I("OK",H,a+44,64);b(a,0,h)}else O[a+40>>1]=4,O[a+42>>1]=404,I("Not Found",H,a+44,64),d(a,0,"no data")};g.onerror=h=>{O[a+40>>1]=4;O[a+42>>1]=404;I("Not Found",
H,a+44,64);d(a,0,h)}}catch(h){d(a,0,h)}}else d(a,0,"IndexedDB not available!")}
function zb(a,b,d){var f=sb;if(f){var k=Q[a+112+64>>2];k||(k=Q[a+8>>2]);k=F(k);try{var g=f.transaction(["FILES"],"readwrite").objectStore("FILES").delete(k);g.onsuccess=h=>{h=h.target.result;Q[a+12>>2]=0;W(a+16,0);W(a+24,0);W(a+32,0);O[a+40>>1]=4;O[a+42>>1]=200;I("OK",H,a+44,64);b(a,0,h)};g.onerror=h=>{O[a+40>>1]=4;O[a+42>>1]=404;I("Not Found",H,a+44,64);d(a,0,h)}}catch(h){d(a,0,h)}}else d(a,0,"IndexedDB not available!")}var Ab={};
function Bb(){if(!Cb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ja||"./this.program"},b;for(b in Ab)void 0===Ab[b]?delete a[b]:a[b]=Ab[b];var d=[];for(b in a)d.push(b+"="+a[b]);Cb=d}return Cb}var Cb;
function Db(a,b){if(z)return U(8,1,a,b);var d=0;Bb().forEach(function(f,k){var g=b+d;k=Q[a+4*k>>2]=g;for(g=0;g<f.length;++g)Aa[k++>>0]=f.charCodeAt(g);Aa[k>>0]=0;d+=f.length+1});return 0}function Eb(a,b){if(z)return U(9,1,a,b);var d=Bb();Q[a>>2]=d.length;var f=0;d.forEach(function(k){f+=k.length+1});Q[b>>2]=f;return 0}function Fb(a){return z?U(10,1,a):52}function Gb(a,b,d,f){return z?U(11,1,a,b,d,f):52}function Hb(a,b,d,f,k){return z?U(12,1,a,b,d,f,k):70}var Ib=[null,[],[]];
function Jb(a,b,d,f){if(z)return U(13,1,a,b,d,f);for(var k=0,g=0;g<d;g++){var h=Q[b>>2],q=Q[b+4>>2];b+=8;for(var p=0;p<q;p++){var x=H[h+p],y=Ib[a];0===x||10===x?((1===a?ua:B)(ya(y,0)),y.length=0):y.push(x)}k+=q}Q[f>>2]=k;return 0}function Kb(a){return 0===a%4&&(0!==a%100||0===a%400)}var Lb=[31,29,31,30,31,30,31,31,30,31,30,31],Mb=[31,28,31,30,31,30,31,31,30,31,30,31];function Nb(a){var b=Array(za(a)+1);I(a,b,0,b.length);return b}
function Ob(a,b,d,f){function k(e,r,u){for(e="number"==typeof e?e.toString():e||"";e.length<r;)e=u[0]+e;return e}function g(e,r){return k(e,r,"0")}function h(e,r){function u(K){return 0>K?-1:0<K?1:0}var G;0===(G=u(e.getFullYear()-r.getFullYear()))&&0===(G=u(e.getMonth()-r.getMonth()))&&(G=u(e.getDate()-r.getDate()));return G}function q(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),
0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function p(e){var r=e.fa;for(e=new Date((new Date(e.ga+1900,0,1)).getTime());0<r;){var u=e.getMonth(),G=(Kb(e.getFullYear())?Lb:Mb)[u];if(r>G-e.getDate())r-=G-e.getDate()+1,e.setDate(1),11>u?e.setMonth(u+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1));else{e.setDate(e.getDate()+r);break}}u=new Date(e.getFullYear()+1,0,4);r=q(new Date(e.getFullYear(),
0,4));u=q(u);return 0>=h(r,e)?0>=h(u,e)?e.getFullYear()+1:e.getFullYear():e.getFullYear()-1}var x=P[f+40>>2];f={Fa:P[f>>2],Ea:P[f+4>>2],ka:P[f+8>>2],na:P[f+12>>2],la:P[f+16>>2],ga:P[f+20>>2],N:P[f+24>>2],fa:P[f+28>>2],Ma:P[f+32>>2],Da:P[f+36>>2],Ga:x?F(x):""};d=F(d);x={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d",
"%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var y in x)d=d.replace(new RegExp(y,"g"),x[y]);var Y="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),M="January February March April May June July August September October November December".split(" ");x={"%a":function(e){return Y[e.N].substring(0,3)},"%A":function(e){return Y[e.N]},"%b":function(e){return M[e.la].substring(0,3)},"%B":function(e){return M[e.la]},
"%C":function(e){return g((e.ga+1900)/100|0,2)},"%d":function(e){return g(e.na,2)},"%e":function(e){return k(e.na,2," ")},"%g":function(e){return p(e).toString().substring(2)},"%G":function(e){return p(e)},"%H":function(e){return g(e.ka,2)},"%I":function(e){e=e.ka;0==e?e=12:12<e&&(e-=12);return g(e,2)},"%j":function(e){for(var r=0,u=0;u<=e.la-1;r+=(Kb(e.ga+1900)?Lb:Mb)[u++]);return g(e.na+r,3)},"%m":function(e){return g(e.la+1,2)},"%M":function(e){return g(e.Ea,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=
e.ka&&12>e.ka?"AM":"PM"},"%S":function(e){return g(e.Fa,2)},"%t":function(){return"\t"},"%u":function(e){return e.N||7},"%U":function(e){return g(Math.floor((e.fa+7-e.N)/7),2)},"%V":function(e){var r=Math.floor((e.fa+7-(e.N+6)%7)/7);2>=(e.N+371-e.fa-2)%7&&r++;if(r)53==r&&(u=(e.N+371-e.fa)%7,4==u||3==u&&Kb(e.ga)||(r=1));else{r=52;var u=(e.N+7-e.fa-1)%7;(4==u||5==u&&Kb(e.ga%400-1))&&r++}return g(r,2)},"%w":function(e){return e.N},"%W":function(e){return g(Math.floor((e.fa+7-(e.N+6)%7)/7),2)},"%y":function(e){return(e.ga+
1900).toString().substring(2)},"%Y":function(e){return e.ga+1900},"%z":function(e){e=e.Da;var r=0<=e;e=Math.abs(e)/60;return(r?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.Ga},"%%":function(){return"%"}};d=d.replace(/%%/g,"\x00\x00");for(y in x)d.includes(y)&&(d=d.replace(new RegExp(y,"g"),x[y](f)));d=d.replace(/\0\0/g,"%");y=Nb(d);if(y.length>b)return 0;Aa.set(y,a);return y.length-1}function Pb(a){try{a()}catch(b){C(b)}}
function Qb(a){var b={},d;for(d in a)(function(f){var k=a[f];b[f]="function"==typeof k?function(){Rb.push(f);try{return k.apply(null,arguments)}finally{E||(Rb.pop()===f||C(),X&&1===Z&&0===Rb.length&&(Z=0,Pb(Sb),"undefined"!=typeof Fibers&&Fibers.Na()))}}:k})(d);return b}var Z=0,X=null,Tb=0,Rb=[],Ub={},Vb={},Wb=0,Xb=null,Yb=[];function Zb(){var a=ub(4108),b=a+12;P[a>>2]=b;P[a+4>>2]=b+4096;b=Rb[0];var d=Ub[b];void 0===d&&(d=Wb++,Ub[b]=d,Vb[d]=b);P[a+8>>2]=d;return a}
function $b(a){if(!E){if(0===Z){var b=!1,d=!1;a(f=>{if(!E&&(Tb=f||0,b=!0,d)){Z=2;Pb(()=>ac(X));"undefined"!=typeof Browser&&Browser.ma.wa&&Browser.ma.resume();f=!1;try{var k=(0,c.asm[Vb[P[X+8>>2]]])()}catch(q){k=q,f=!0}var g=!1;if(!X){var h=Xb;h&&(Xb=null,(f?h.reject:h.resolve)(k),g=!0)}if(f&&!g)throw k;}});d=!0;b||(Z=1,X=Zb(),"undefined"!=typeof Browser&&Browser.ma.wa&&Browser.ma.pause(),Pb(()=>bc(X)))}else 2===Z?(Z=0,Pb(cc),vb(X),X=null,Yb.forEach(f=>wb(f))):C("invalid state: "+Z);return Tb}}
function dc(a){return $b(b=>{a().then(b)})}m.ya();z||(rb(a=>{sb=a;La()},()=>{sb=!1;La()}),"undefined"!=typeof ENVIRONMENT_IS_FETCH_WORKER&&ENVIRONMENT_IS_FETCH_WORKER||Ka());
var ec=[null,Sa,Ua,db,fb,gb,hb,kb,Db,Eb,Fb,Gb,Hb,Jb],gc={F:function(a){fc(a,!n,1,!ma);m.ra()},g:function(a){z?postMessage({cmd:"cleanupThread",thread:a}):Qa(a)},y:eb,f:fb,u:gb,v:hb,z:function(){return 65536},j:function(a){var b=V[a];b&&(delete V[a],0<b.readyState&&4>b.readyState&&b.abort())},A:function(){return!0},B:function(a,b,d,f){if(a==b)setTimeout(()=>Ya(f));else if(z)postMessage({targetThread:a,cmd:"processProxyingQueue",queue:f});else{a=m.ea[a];if(!a)return;a.postMessage({cmd:"processProxyingQueue",
queue:f})}return 1},E:function(){return-1},b:function(){C("")},i:function(){if(!t&&!n){var a="Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread";jb||(jb={});jb[a]||(jb[a]=1,t&&(a="warning: "+a),B(a))}},m:kb,c:lb,C:function(a,b,d){H.copyWithin(a,b,b+d)},D:function(a,b,d){qb.length=b;d>>=3;for(var f=0;f<b;f++)qb[f]=Ba[d+f];return(0>a?Pa[-a-1]:ec[a]).apply(null,qb)},x:function(){C("OOM")},l:function(){return noExitRuntime},
k:function(a,b,d,f,k){function g(v){G?v():wb(v)}var h=a+112,q=F(h),p=Q[h+36>>2],x=Q[h+40>>2],y=Q[h+44>>2],Y=Q[h+48>>2],M=Q[h+52>>2],e=!!(M&4),r=!!(M&32),u=!!(M&16),G=!!(M&64),K=v=>{g(()=>{p?dynCall_vi.apply(null,[p,v]):b&&b(v)})},ba=v=>{g(()=>{y?dynCall_vi.apply(null,[y,v]):f&&f(v)})},l=v=>{g(()=>{x?dynCall_vi.apply(null,[x,v]):d&&d(v)})},N=v=>{g(()=>{Y?dynCall_vi.apply(null,[Y,v]):k&&k(v)})};M=v=>{tb(v,K,l,ba,N)};var w=(v,jc)=>{xb(v,jc.response,ka=>{g(()=>{p?dynCall_vi.apply(null,[p,ka]):b&&b(ka)})},
ka=>{g(()=>{p?dynCall_vi.apply(null,[p,ka]):b&&b(ka)})})},L=v=>{tb(v,w,l,ba,N)};if("EM_IDB_STORE"===q)q=Q[h+84>>2],xb(a,H.slice(q,q+Q[h+88>>2]),K,l);else if("EM_IDB_DELETE"===q)zb(a,K,l);else if(u){if(r)return 0;tb(a,e?w:K,l,ba,N)}else yb(a,K,r?l:e?L:M);return a},G:function(){throw"unwind";},n:function(){return dc(async()=>{var a=await c.queue.get();const b=za(a)+1,d=ub(b);I(a,H,d,b);return d})},r:Db,s:Eb,d:Ta,e:Fb,t:Gb,o:Hb,w:Jb,a:D||c.wasmMemory,q:function(){c.pauseQueue()},p:function(a,b,d,f){return Ob(a,
b,d,f)},h:function(){c.unpauseQueue()}};
(function(){function a(g,h){g=g.exports;g=Qb(g);c.asm=g;m.sa.push(c.asm.K);Ea.unshift(c.asm.H);wa=h;z||La()}function b(g){a(g.instance,g.module)}function d(g){return Oa().then(function(h){return WebAssembly.instantiate(h,f)}).then(function(h){return h}).then(g,function(h){B("failed to asynchronously prepare wasm: "+h);C(h)})}var f={a:gc};z||Ka();if(c.instantiateWasm)try{var k=c.instantiateWasm(f,a);return k=Qb(k)}catch(g){B("Module.instantiateWasm callback failed with error: "+g),ca(g)}(function(){return va||
"function"!=typeof WebAssembly.instantiateStreaming||Ma()||t||"function"!=typeof fetch?d(b):fetch(T,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,f).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return d(b)})})})().catch(ca);return{}})();c.___wasm_call_ctors=function(){return(c.___wasm_call_ctors=c.asm.H).apply(null,arguments)};c._main=function(){return(c._main=c.asm.I).apply(null,arguments)};
var vb=c._free=function(){return(vb=c._free=c.asm.J).apply(null,arguments)};c.__emscripten_tls_init=function(){return(c.__emscripten_tls_init=c.asm.K).apply(null,arguments)};var Xa=c._pthread_self=function(){return(Xa=c._pthread_self=c.asm.L).apply(null,arguments)};c.__emscripten_proxy_main=function(){return(c.__emscripten_proxy_main=c.asm.M).apply(null,arguments)};
var ub=c._malloc=function(){return(ub=c._malloc=c.asm.O).apply(null,arguments)},fc=c.__emscripten_thread_init=function(){return(fc=c.__emscripten_thread_init=c.asm.P).apply(null,arguments)};c.__emscripten_thread_crashed=function(){return(c.__emscripten_thread_crashed=c.asm.Q).apply(null,arguments)};
var pb=c._emscripten_run_in_main_runtime_thread_js=function(){return(pb=c._emscripten_run_in_main_runtime_thread_js=c.asm.R).apply(null,arguments)},ib=c.__emscripten_proxy_execute_task_queue=function(){return(ib=c.__emscripten_proxy_execute_task_queue=c.asm.S).apply(null,arguments)},Wa=c.__emscripten_thread_free_data=function(){return(Wa=c.__emscripten_thread_free_data=c.asm.T).apply(null,arguments)},cb=c.__emscripten_thread_exit=function(){return(cb=c.__emscripten_thread_exit=c.asm.U).apply(null,
arguments)},$a=c._emscripten_stack_set_limits=function(){return($a=c._emscripten_stack_set_limits=c.asm.V).apply(null,arguments)},nb=c.stackSave=function(){return(nb=c.stackSave=c.asm.W).apply(null,arguments)},ab=c.stackRestore=function(){return(ab=c.stackRestore=c.asm.X).apply(null,arguments)},ob=c.stackAlloc=function(){return(ob=c.stackAlloc=c.asm.Y).apply(null,arguments)},bb=c.dynCall_ii=function(){return(bb=c.dynCall_ii=c.asm.Z).apply(null,arguments)},dynCall_vi=c.dynCall_vi=function(){return(dynCall_vi=
c.dynCall_vi=c.asm._).apply(null,arguments)},bc=c._asyncify_start_unwind=function(){return(bc=c._asyncify_start_unwind=c.asm.$).apply(null,arguments)},Sb=c._asyncify_stop_unwind=function(){return(Sb=c._asyncify_stop_unwind=c.asm.aa).apply(null,arguments)},ac=c._asyncify_start_rewind=function(){return(ac=c._asyncify_start_rewind=c.asm.ba).apply(null,arguments)},cc=c._asyncify_stop_rewind=function(){return(cc=c._asyncify_stop_rewind=c.asm.ca).apply(null,arguments)};c.___start_em_js=38472;
c.___stop_em_js=38828;c.keepRuntimeAlive=function(){return noExitRuntime};c.wasmMemory=D;c.ExitStatus=ra;c.PThread=m;var hc;Ja=function ic(){hc||kc();hc||(Ja=ic)};function lc(a){var b=c.__emscripten_proxy_main;a=a||[];a.unshift(ja);var d=a.length,f=ob(4*(d+1)),k=f>>2;a.forEach(g=>{var h=k++,q=za(g)+1,p=ob(q);I(g,Aa,p,q);P[h]=p});P[k]=0;b(d,f)}
function kc(){function a(){if(!hc&&(hc=!0,c.calledRun=!0,!E)){z||Za(Ea);z||Za(Fa);aa(c);if(c.onRuntimeInitialized)c.onRuntimeInitialized();mc&&lc(b);if(!z){if(c.postRun)for("function"==typeof c.postRun&&(c.postRun=[c.postRun]);c.postRun.length;){var d=c.postRun.shift();Ga.unshift(d)}Za(Ga)}}}var b=b||ia;if(!(0<S))if(z)aa(c),z||Za(Ea),startWorker(c);else{if(c.preRun)for("function"==typeof c.preRun&&(c.preRun=[c.preRun]);c.preRun.length;)Ha();Za(Da);0<S||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},
1);a()},1)):a())}}if(c.preInit)for("function"==typeof c.preInit&&(c.preInit=[c.preInit]);0<c.preInit.length;)c.preInit.pop()();var mc=!0;c.noInitialRun&&(mc=!1);kc();


  return Stockfish.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = Stockfish;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return Stockfish; });
else if (typeof exports === 'object')
  exports["Stockfish"] = Stockfish;
return Stockfish;
}

if (typeof self !== "undefined" && self.location.hash.split(",")[1] === "worker" || typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]" && !require("worker_threads").isMainThread) {
    (function() {
        "use strict";var Module={};var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(ENVIRONMENT_IS_NODE){var nodeWorkerThreads=require("worker_threads");var parentPort=nodeWorkerThreads.parentPort;parentPort.on("message",data=>onmessage({data:data}));var fs=require("fs");Object.assign(global,{self:global,require:require,Module:Module,location:{href:__filename},Worker:nodeWorkerThreads.Worker,importScripts:function(f){(0,eval)(fs.readFileSync(f,"utf8")+"//# sourceURL="+f)},postMessage:function(msg){parentPort.postMessage(msg)},performance:global.performance||{now:function(){return Date.now()}}})}var initializedJS=false;var pendingNotifiedProxyingQueues=[];function threadPrintErr(){var text=Array.prototype.slice.call(arguments).join(" ");if(ENVIRONMENT_IS_NODE){fs.writeSync(2,text+"\n");return}console.error(text)}function threadAlert(){var text=Array.prototype.slice.call(arguments).join(" ");postMessage({cmd:"alert",text:text,threadId:Module["_pthread_self"]()})}var err=threadPrintErr;self.alert=threadAlert;Module["instantiateWasm"]=(info,receiveInstance)=>{var instance=new WebAssembly.Instance(Module["wasmModule"],info);receiveInstance(instance);Module["wasmModule"]=null;return instance.exports};self.onunhandledrejection=e=>{throw e.reason??e};self.startWorker=instance=>{Module=instance;postMessage({"cmd":"loaded"})};self.onmessage=e=>{try{if(e.data.cmd==="load"){Module["wasmModule"]=e.data.wasmModule;for(const handler of e.data.handlers){Module[handler]=function(){postMessage({cmd:"callHandler",handler:handler,args:[...arguments]})}}Module["wasmMemory"]=e.data.wasmMemory;Module["buffer"]=Module["wasmMemory"].buffer;Module["ENVIRONMENT_IS_PTHREAD"]=true;Stockfish=INIT_ENGINE();Stockfish(Module)}else if(e.data.cmd==="run"){Module["__emscripten_thread_init"](e.data.pthread_ptr,/*isMainBrowserThread=*/0,/*isMainRuntimeThread=*/0,/*canBlock=*/1);Module["establishStackSpace"]();Module["PThread"].receiveObjectTransfer(e.data);Module["PThread"].threadInitTLS();if(!initializedJS){pendingNotifiedProxyingQueues.forEach(queue=>{Module["executeNotifiedProxyingQueue"](queue)});pendingNotifiedProxyingQueues=[];initializedJS=true}try{Module["invokeEntryPoint"](e.data.start_routine,e.data.arg)}catch(ex){if(ex!="unwind"){if(ex instanceof Module["ExitStatus"]){if(Module["keepRuntimeAlive"]()){}else{Module["__emscripten_thread_exit"](ex.status)}}else{throw ex}}}}else if(e.data.cmd==="cancel"){if(Module["_pthread_self"]()){Module["__emscripten_thread_exit"](-1)}}else if(e.data.target==="setimmediate"){}else if(e.data.cmd==="processProxyingQueue"){if(initializedJS){Module["executeNotifiedProxyingQueue"](e.data.queue)}else{pendingNotifiedProxyingQueues.push(e.data.queue)}}else if(e.data.cmd){err("worker.js received unknown command "+e.data.cmd);err(e.data)}}catch(ex){if(Module["__emscripten_thread_crashed"]){Module["__emscripten_thread_crashed"]()}throw ex}};
//
// Patch `onmessage` to support custom message
//
const old_onmessage = self.onmessage;

const new_onmessage = (e) => {
  if (e.data.cmd === 'custom') {
    if (typeof Module['onCustomMessage'] === 'function') {
      Module['onCustomMessage'](e.data.userData);
    }
  } else {
    old_onmessage(e);
  }
}

onmessage = self.onmessage = new_onmessage;
    })();
/// Is it a web worker?
} else if (typeof onmessage !== "undefined" && (typeof window === "undefined" || typeof window.document === "undefined") || typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]") {
    (function ()
    {
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]";
        var mod;
        var myEngine;
        var queue = [];
        var args;
        var wasmPath;
        
        function completer(line)
        {
            var completions = [
                "compiler",
                "d",
                "eval",
                "exit",
                "flip",
                "go ",
                "isready ",
                "ponderhit ",
                "position fen ",
                "position startpos",
                "position startpos moves",
                "quit",
                "setoption name Clear Hash value true",
                "setoption name Contempt value ",
                "setoption name Hash value ",
                "setoption name Minimum Thinking Time value ",
                "setoption name Move Overhead value ",
                "setoption name MultiPV value ",
                "setoption name Ponder value ",
                //"setoption name Skill Level Maximum Error value ",
                //"setoption name Skill Level Probability value ",
                "setoption name Skill Level value ",
                "setoption name Slow Mover value ",
                "setoption name Threads value ",
                "setoption name UCI_Chess960 value false",
                "setoption name UCI_Chess960 value true",
                "setoption name UCI_AnalyseMode value true",
                "setoption name UCI_AnalyseMode value false",
                "setoption name UCI_LimitStrength value true",
                "setoption name UCI_LimitStrength value false",
                "setoption name UCI_Elo value ",
                "setoption name UCI_ShowWDL value true",
                "setoption name UCI_ShowWDL value false",
                "setoption name Use NNUE value true",
                "setoption name Use NNUE value false",
                "setoption name nodestime value ",
                "setoption name EvalFile value ",
                "stop",
                "uci",
                "ucinewgame"
            ];
            var completionsMid = [
                "binc ",
                "btime ",
                "confidence ",
                "depth ",
                "infinite ",
                "mate ",
                "maxdepth ",
                "maxtime ",
                "mindepth ",
                "mintime ",
                "moves ", /// for position fen ... moves
                "movestogo ",
                "movetime ",
                "ponder ",
                "searchmoves ",
                "shallow ",
                "winc ",
                "wtime "
            ];
            
            function filter(c)
            {
                return c.indexOf(line) === 0;
            }
            
            /// This looks for completions starting at the very beginning of the line.
            /// If the user has typed nothing, it will match everything.
            var hits = completions.filter(filter);
            
            if (!hits.length) {
                /// Just get the last word.
                line = line.replace(/^.*\s/, "");
                if (line) {
                    /// Find completion mid line too.
                    hits = completionsMid.filter(filter);
                } else {
                    /// If no word has been typed, show all options.
                    hits = completionsMid;
                }
            }
            
            return [hits, line];
        }
        
        if (isNode) {
            ///NOTE: Node.js v14+ needs --experimental-wasm-threads --experimental-wasm-simd
            /// Was it called directly?
            if (require.main === module) {
                wasmPath = require("path").join(__dirname, "stockfish.wasm");
                mod = {
                    locateFile: function (path)
                    {
                        if (path.indexOf(".wasm") > -1) {
                            /// Set the path to the wasm binary.
                            return wasmPath;
                        } else {
                            /// Set path to worker (self + the worker hash)
                            return __filename;
                        }
                    },
                };
                Stockfish = INIT_ENGINE();
                Stockfish(mod).then(function (sf)
                {
                    myEngine = sf;
                    sf.addMessageListener(function (line)
                    {
                        console.log(line);
                    });
                    
                    if (queue.length) {
                        queue.forEach(function (line)
                        {
                            sf.postMessage(line, true);
                        });
                    }
                    queue = null;
                });
                
                require("readline").createInterface({
                    input: process.stdin,
                    output: process.stdout,
                    completer: completer,
                    historySize: 100,
                }).on("line", function online(line)
                {
                    if (line) {
                        if (line === "quit" || line === "exit") {
                            process.exit();
                        }
                        if (myEngine) {
                            myEngine.postMessage(line, true);
                        } else {
                            queue.push(line);
                        }
                    }
                }).on("close", function onend()
                {
                    process.exit();
                }).setPrompt("");
                
            /// Is this a node module?
            } else {
                module.exports = INIT_ENGINE;
            }
        } else {
            args = self.location.hash.substr(1).split(",");
            wasmPath = decodeURIComponent(args[0] || "stockfish.wasm");
            mod = {
                locateFile: function (path)
                {
                    if (path.indexOf(".wasm") > -1) {
                        /// Set the path to the wasm binary.
                        return wasmPath;
                    } else {
                        /// Set path to worker (self + the worker hash)
                        return self.location.origin + self.location.pathname + "#" + wasmPath + ",worker";
                    }
                }
            };
            Stockfish = INIT_ENGINE();
            Stockfish(mod).then(function onCreate(sf)
            {
                myEngine = sf;
                sf.addMessageListener(function onMessage(line)
                {
                    postMessage(line);
                });
                
                if (queue.length) {
                    queue.forEach(function (line)
                    {
                        sf.postMessage(line, true);
                    });
                }
                queue = null;
            }).catch(function (e)
            {
                /// Sadly, Web Workers will not trigger the error event when errors occur in promises, so we need to create a new context and throw an error there.
                setTimeout(function throwError()
                {
                    throw e;
                }, 1);
            });
            
            /// Make sure that this is only added once.
            if (!onmessage) {
                onmessage = function (event)
                {
                    if (myEngine) {
                        myEngine.postMessage(event.data, true);
                    } else {
                        queue.push(event.data);
                    }
                };
            }
        }
    }());
} else {
    ///NOTE: If it's a normal browser, the client can use the Stockfish() function directly.
    Stockfish = INIT_ENGINE();
}