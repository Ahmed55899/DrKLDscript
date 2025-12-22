// ==UserScript==
// @name         Dr Ahmed Khaled | Activated Version
// @namespace    familyfarm.script.activated
// @version      2.3
// @description  Family Farm Script with Activation
// @author       FF Script Team
// @match        *://*.centurygames.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      raw.githubusercontent.com
// @run-at       document-end
// ==/UserScript==


/* =====================================================
   🔐 ACTIVATION (SIMPLE & STABLE)
   ===================================================== */
(function () {
    const KEY = "FF-PAID-2025"; // غيره براحتك أو بعدين نخليه Tokens

    const activated = GM_getValue("ff_activated");
    if (activated === true) return;

    const input = prompt("🔑 أدخل كود التفعيل:");
    if (input !== KEY) {
        alert("❌ كود التفعيل غير صحيح");
        throw new Error("Not activated");
    }

    GM_setValue("ff_activated", true);
    alert("✅ تم تفعيل السكريبت بنجاح 👑");
})();


/* =====================================================
   🔽 ORIGINAL SCRIPT (UNCHANGED)
   ===================================================== */

function b(c,d){const e=a();return b=function(f,g){f=f-0x1de;let h=e[f];return h;},b(c,d);}
(function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h('0x1e8'))/0x1*(parseInt(h(0x1f2))/0x2)+parseInt(h('0x1e4'))/0x3+-parseInt(h(0x1ee))/0x4*(-parseInt(h(0x1ea))/0x5)+-parseInt(h('0x1eb'))/0x6*(-parseInt(h('0x1ec'))/0x7)+parseInt(h(0x1e7))/0x8+-parseInt(h(0x1e0))/0x9+-parseInt(h(0x1ed))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x843b7),(function(){const i=b,c=i(0x1e3);GM_xmlhttpRequest({'method':i(0x1ef),'url':c,'onload':function(d){const j=i;try{const e=d[j('0x1f4')][j('0x1e6')]();if(e[j('0x1e9')]('//')||e[j('0x1e9')](j('0x1de'))||e[j(0x1e9)](j('0x1df'))||e['startsWith']('async function')||e[j(0x1e9)]('function'))eval(e);}catch(g){alert(j(0x1f3)+g);}},'onerror':function(d){const k=i;alert(k(0x1e2)+(d&&d[k(0x1e5)]?d['message']:''));}});}()));
function a(){const l=['10675xHbYSA','10991870DtEhov','1517324NMctvM','GET','parse','stringify','476990jEffRu','خطأ في تنفيذ الكود:\n','responseText','(function','(()=>','8041995hTLRVi','slice','تعذّر تحميل الملف من GitHub!\n','https://raw.githubusercontent.com/AhmedKhaled2132003/DrKhaldall/main/DrKhaldall.json','3041142bfaPZz','message','trim','1625480FthlWd','3EMyXHh','startsWith','5KjkZXU','876NpYSoI'];a=function(){return l;};return a();}
