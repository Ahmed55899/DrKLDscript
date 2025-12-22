// ==UserScript==
// @name         Dr Ahmed Khaled 👑 | Activated Version
// @namespace    familyfarm.script.activated
// @version      3.2
// @description  Family Farm Script with Forced Token Check 👑
// @author       FF Script Team
// @match        *.centurygames.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require      https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.7/dist/umd/supabase.min.js
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        GM_setValue
// @grant        GM_getValue
// @connect      raw.githubusercontent.com
// @connect      *.supabase.co
// @updateURL    https://raw.githubusercontent.com/Ahmed55899/DrKLDscript/main/DrKLDscript.user.js
// @downloadURL  https://raw.githubusercontent.com/Ahmed55899/DrKLDscript/main/DrKLDscript.user.js
// @run-at       document-end
// ==/UserScript==


/* =====================================================
   🔐 FORCED TOKEN CHECK (EVERY PAGE LOAD)
   ===================================================== */
(async function () {

    const TOKENS_URL =
        "https://raw.githubusercontent.com/Ahmed55899/DrKLDscript/main/tokens.json";

    function getDeviceID() {
        return btoa(
            navigator.userAgent +
            "|" +
            screen.width +
            "x" +
            screen.height
        );
    }

    try {
        const deviceID   = getDeviceID();
        const savedDev   = GM_getValue("ff_device");
        const savedToken = GM_getValue("ff_token");

        // لازم يكون فيه توكن محفوظ
        if (!savedToken || !savedDev) {
            unsafeWindow.__FF_ACTIVATED__ = false;
        } else {
            // فحص إجباري من GitHub كل مرة
            const res = await fetch(TOKENS_URL, { cache: "no-store" });
            const tokens = await res.json();

            // التوكن اتحذف أو اتوقف
            if (!tokens[savedToken] || tokens[savedToken].used === true) {
                alert("⛔ تم إيقاف تفعيل السكريبت");
                GM_setValue("ff_device", null);
                GM_setValue("ff_token", null);
                unsafeWindow.__FF_ACTIVATED__ = false;
                return;
            }

            // الجهاز مختلف
            if (savedDev !== deviceID) {
                alert("❌ التفعيل مربوط بجهاز آخر");
                unsafeWindow.__FF_ACTIVATED__ = false;
                return;
            }

            // ✔️ كل شيء سليم
            unsafeWindow.__FF_ACTIVATED__ = true;
            return;
        }

        /* 🔑 طلب تفعيل جديد */
        const res = await fetch(TOKENS_URL, { cache: "no-store" });
        const tokens = await res.json();

        const token = prompt("🔑 أدخل كود التفعيل:");
        if (!token) return;

        if (!tokens[token]) {
            alert("❌ كود غير صحيح");
            return;
        }

        if (tokens[token].used === true) {
            alert("❌ الكود مستخدم / موقوف");
            return;
        }

        // حفظ التفعيل
        GM_setValue("ff_device", deviceID);
        GM_setValue("ff_token", token);
        unsafeWindow.__FF_ACTIVATED__ = true;

        alert("✅ تم تفعيل السكريبت بنجاح 👑");

    } catch (e) {
        console.error("Activation error:", e);
        unsafeWindow.__FF_ACTIVATED__ = false;
    }

})();


/* =====================================================
   🔽 ORIGINAL SCRIPT (RUN ONLY IF ACTIVATED)
   ===================================================== */

(function waitForActivation() {

    const interval = setInterval(() => {
        if (unsafeWindow.__FF_ACTIVATED__ === true) {
            clearInterval(interval);
            loadOriginalScript();
        }
    }, 200);

    function loadOriginalScript() {

        function b(c,d){const e=a();return b=function(f,g){f=f-0x1de;let h=e[f];return h;},b(c,d);}
        (function(c,d){const h=b,e=c();while(!![]){try{const f=parseInt(h('0x1e8'))/0x1*(parseInt(h(0x1f2))/0x2)+parseInt(h('0x1e4'))/0x3+-parseInt(h(0x1ee))/0x4*(-parseInt(h(0x1ea))/0x5)+-parseInt(h('0x1eb'))/0x6*(-parseInt(h('0x1ec'))/0x7)+parseInt(h(0x1e7))/0x8+-parseInt(h(0x1e0))/0x9+-parseInt(h(0x1ed))/0xa;if(f===d)break;else e['push'](e['shift']());}catch(g){e['push'](e['shift']());}}}(a,0x843b7),
        (function(){const i=b,c=i(0x1e3);
        GM_xmlhttpRequest({
            method:i(0x1ef),
            url:c,
            onload:function(d){
                const j=i;
                try{
                    const e=d[j('0x1f4')][j('0x1e6')]();
                    if(
                        e[j('0x1e9')]('//') ||
                        e[j('0x1e9')](j('0x1de')) ||
                        e[j(0x1e9)](j('0x1df')) ||
                        e['startsWith']('async function') ||
                        e[j(0x1e9)]('function')
                    ){
                        eval(e);
                    }
                }catch(g){
                    alert(j(0x1f3)+g);
                }
            }
        });
        }()));

        function a(){const l=[
            '10675xHbYSA','10991870DtEhov','1517324NMctvM','GET',
            'parse','stringify','476990jEffRu','خطأ في تنفيذ الكود:\n',
            'responseText','(function','(()=>','8041995hTLRVi','slice',
            'تعذّر تحميل الملف من GitHub!\n',
            'https://raw.githubusercontent.com/AhmedKhaled2132003/DrKhaldall/main/DrKhaldall.json',
            '3041142bfaPZz','message','trim','1625480FthlWd','3EMyXHh',
            'startsWith','5KjkZXU',
