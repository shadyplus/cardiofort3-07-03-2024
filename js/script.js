setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function() {
    $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "«Cardiofort»";
let now = new Date,
    mm = now.getMonth() + 1,
    day = now.getDate(),
    year = now.getFullYear(),
    date = day + "." + mm + "." + year,
    dd=now.toLocaleString().split(',')[0],
    discount = '65';

const massange = [{
    m: "مرحبا! اسمي عبد الله. أنا أخصائي قلب  بخبرة تزيد عن 20 عامًا."
}, {
    m: "أقدم هنا تشخيصًا عبر الإنترنت مجانًا وتوصيات شخصية لسكان الجزائر  لمساعدتهم على التخلص من مشاكل  القلب وعواقبها نهائيًا."
}, {
    m: "للحصول على توصية شخصية تناسبك وتساعدك، الرجاء الإجابة على بعض الأسئلة:"
}, {
    m: '<p class="quest">يرجى تحديد جنسك:</p>'
}, {
    m: '<p class="quest">كم عمرك؟</p>'
}, {
    m: '<p class="quest">كم وزنك ؟</p>'
}, {
    m: "<p class='quest'>هل تشعر بألم في القلب، تغيرات في الضغط، دوار، غثيان؟</p>"
}, {
    m: '<p class="quest">هل نمط حياتك مليء بالتوتر؟</p>'
}, {
    m: '<p class="quest">هل كان لدى احد  أقاربك أزمة قلبية؟</p>'
}, {
    m: '<p class="quest">كيف تتغذى؟</p>'
}, {
    m: '<p class="quest">ما هو ضغط دمك الطبيعي؟</p>'
}, {
    m: "نعم، للأسف، لديك علامات تطور ارتفاع ضغط الدم،او تكوين الجلطات. او انسداد للأوعية الدموية و تغير  الضغط لديك قد  يؤدي إلى الإعاقة والموت."
}, {
    m: "ضيق التنفس، التعرق المفرط، الوخز حول القلب، التعرق وجفاف الفم هي العلامات الأولى التي تشير إلى أن قلبك لا يعمل بشكل صحيح."
}, {
    m: "إذا شعرت مؤخرًا بالدوار، الصداع، الغثيان، والخمول، يجب عليك اتخاذ إجراء فوري!"
}, {
    m: "<b>إليك ما يؤدي إليه ارتفاع ضغط الدم:</b>"
}, {
    m: "<img src='img/image4.jpg' /><br> <i>انفجار القلب بسبب ارتفاع ضغط الدم</i>"
}, {
    m: "<img src='img/image5.jpg' /><br> <i>تنكس الشبكية بسبب أزمة ارتفاع ضغط الدم</i>"
}, {
    m: "<b>التوصية الشخصية لك:</b>  ,  تناول  الكستناء,التوت ، و كركم و الزنجبيل و نبات الزعرور , اللوز."
}, {
    m: "<i> الكستناء</i> تتميز الكستناء بإحتوائها على العديد من العناصر الغذائية المفيدة جدًا مثل: البوتاسيوم والكالسيوم والعديد من الفيتامينات منها فيتامين ج وفيتامين ب وحمض الفوليك، وهي غنية بالمعادن المختلفة والدهون الغير مشبعة والمفيدة، ممّا يجعل لها دور كبير في وقاية الجسم من العديد من المشاكل الصحية . .    "
}, {
    m: "<i>الزنجبيل</i> الزنجبيل يحتوي على مركبات مضادة للالتهابات ومضادة للأكسدة، وهذه المركبات قد تساعد في تحسين تدفق الدم وتقليل التورم. بالإضافة إلى ذلك، الزنجبيل يمكن أن يساهم في تحسين صحة الأوعية الدموية بشكل عام. .  "
}, {
    m: "<i>نبات الزعرور</i> يساعد في تحسين وظائف القلب و تحسين مستوى الاكسجين في الجسم و وتقليل مخاطر ظهور الدوالي و يساعد في توسيع الأوردة . "
}, {
    m: "يمكن تناول كل من هذه المكونات على حدة، لكنها أكثر فعالية لارتفاع ضغط الدم عند استخدامها مجتمعة. لذلك،أنصحك فقط بمنتج واحد يجتمع به كل هذه المكونات و هو  Cardiofort فهو يحتوي على  جميع المكونات المذكورة بالإضافة إلى فيتامينات ومعادن إضافية."
}, {
    m: "هكذا تبدو شكل عبوة  Cardiofort: <img src='img/prod.png' />"
}, {
    m: "كبسولات Cardiofort يساعد في مكافحة الصداع، الغثيان و يحسن ضغط الدم و يساعد على تنظيف الأوعية الدموية ، و التخلص من الدوار من اليوم الأول للاستخدام."
}, {
    m: "المنتج يعمل في الجسم في عدة اتجاهات في آن واحد: يطبع ضغط  الدم ويحسن الدورة الدموية، يساعد على التخلص من كميات كبيرة من الملح بطريقة طبيعية - من خلال البول."
}, {
    m: "Cardiofort سيتيح لك المشي لمسافات أطول في الخارج مع تقليل الضغط على القلب. الكبسولات ستضمن نومًا هادئًا، جهاز تنفسي صحي وستملأ الجسم بالطاقة بفضل الفيتامينات والمعادن الموجودة في التركيب."
}, {
    m: "Cardiofort يلعب دورًا مهمًا في تطبيع مستويات الهرمونات. يزيد من المناعة، يساعد في التخلص من الوزن الزائد والدوالي."
}, {
    m: "<b>فقط دورة واحدة من المكمل الغذائي  Cardiofort، وهذه هي النتائج التي حققها مرضاي:</b> <img src='img/image7.jpg' /> <img src='img/image6.jpg' /> <img src='img/image3.jpg' />"
}, {
    m: "<b>Cardiofort يحتوي فقط على تركيبة طبيعية تساعد في تطبيع ضغط الدم.</b> من اليوم الثاني للإستخدام يعود الضغط إلى طبيعته، لا مزيد من الوميض في العيون، ويختفي الطنين."
}, {
    m: "Cardiofort يطبع ضغط الدم، يسرع الدورة الدموية ويتيح لك التخلص من الجلطات الدموية!"
}, {
    m: "المدة الأمثل لإستخدام هذا المنتج  مع مراعاة عمرك وجميع الخصائص الجديدة، هي شهر واحد. يجب تناول كبسولتين واحدة صباحاً وواحدة مساءاً دون تخطي."
}, {
    m: "لدي أيضًا أخبار رائعة لك. أنت المريض رقم 2000 الذي اشخصه عبر الانترنت  أونلاين  و لذك سوف تتمكن من الحصول على هذا المنتج بتخفيض كبير إذا كنت من سكان الجزائر ! تهانينا!"
}, {
    m: "يمكنك شراء المكمل الغذائي  Cardiofort بسعر ترويجي مع خصم يصل إلى  " + discount + "%. للقيام بذلك، يرجى ملئ النموذج أدناه."
}];

var mass_id = 0,
    length_mass = 0,
    lengt_num_mas = 0, 
    text = "",
    speedtext = 1,//55
    process = !0;

function app(lm) {
    if (lm < 11) {
        var e = new Date,
            s = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getHours()).slice(-2) + ":" + s;
        
        $(".content").animate({
            scrollTop: $(".chat-content-list").height() + 50
        }, 700);
        const c = '<div class="chat-content-item manager"><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
        $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
    }
    else if (lm == 11) {
        $('.chat-content-list').append('<div class="info-div"><i>تحليل الجواب...</i></div>');
        setTimeout(function() {$('.info-div').remove()}, 7000)
    }
    else {
            var e = new Date,
            s = ("0" + e.getMinutes()).slice(-2),
            t = ("0" + e.getHours()).slice(-2) + ":" + s;
        
            $(".content").animate({
                scrollTop: $(".chat-content-list").height() + 50
            }, 700);
            const c = '<div class="chat-content-item manager c' + lm + '"><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
            $(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
        
    }
    
}

function myMassange(e) {
    var s = new Date,
        t = ("0" + s.getMinutes()).slice(-2);
    let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
    $(".chat-content-list").append(n), 
    // $(".content").animate({
    //     scrollTop: $(".chat-content-list").height() + 50
    // }, 700), 
    $("#scroll_id").addClass("hide")
}

function question1() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">ذكر</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">أنثى</span></div></div>')
}

function choise1() {
    $(".question1M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("ذكر"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question1W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنثى"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question2() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">حتى 45</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">من 45 إلى 56</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">من 56 إلى 65</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">أكثر من 65</span></div></div>')
}

function choise2() {
    $(".question2M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتى 45"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 45 إلى 56"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 56 إلى 65"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question2T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 65"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question3() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">حتى 70 كغ</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">70-100 كغ</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">أكثر من 100 كغ</span></div></div>')
}

function choise3() {
    $(".question3M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتى 70 كغ"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3W").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("70-100 كغ"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question3P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 100 كغ"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question4() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">نعم، مع كل ما ذكر</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">نعم، مع بعض الأعراض</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">لا</span></div></div>')
}

function choise4() {
    $(".question4M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم، مع كل ما ذكر"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم، مع بعض الأعراض"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question4T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question5() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">نعم</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">لا</span></div></div>')
}

function choise5() {
    $(".question5M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question5P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question6() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">لا، ليس الأمر كذلك</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">نعم، لدي قريب عمره 60 عامًا</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">نعم، لدي قريب أصغر من 60 عامًا</span></div><div class="chat-content-buttons-gender-block"><span class="question6X">أكثر من قريبين</span></div></div>')
}

function choise6() {
    $(".question6M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("لا، ليس الأمر كذلك"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم، لدي قريب عمره 60 عامًا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("نعم، لدي قريب أصغر من 60 عامًا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question6X").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من قريبين"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question7() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">اعتدال، أتبع نظامًا غذائيًا</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">أحيانًا أتناول الطعام بإفراط وأشرب الكحول</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">آكل وأشرب ما أريد</span></div></div>')
}

function choise7() {
    $(".question7M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("اعتدال، أتبع نظامًا غذائيًا"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أحيانًا أتناول الطعام بإفراط وأشرب الكحول"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question7T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("آكل وأشرب ما أريد"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}

function question8() {
    $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question8M">أقل من 130 مع 80</span></div><div class="chat-content-buttons-gender-block"><span class="question8P">حتى 140 مع 90</span></div><div class="chat-content-buttons-gender-block"><span class="question8T">حتى 160 مع 90</span></div><div class="chat-content-buttons-gender-block"><span class="question8X">حتى 180 مع 90</span></div><div class="chat-content-buttons-gender-block"><span class="question8Z">أكثر من 180 مع 90</span></div></div>')
}

function choise8() {
    $(".question8M").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 130 مع 80"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question8P").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتى 140 مع 90"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question8T").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتى 160 مع 90"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question8X").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتى 180 مع 90"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    }), $(".question8Z").click(() => {
        document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 180 مع 90"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
            process = !0
        }, 500)
    })
}




function displayQuestionAndChoice(questionNumber) {
    if (lengt_num_mas === questionNumber && length_mass === massange[lengt_num_mas].m.length - 1) {
        window[`question${questionNumber + 1}`]();
        process = !1;
        window[`choise${questionNumber + 1}`]();
        $("#scroll_id").addClass("hide-q");
        // $(".content").animate({ scrollTop: $(".chat").height() }, 700, function() {
        //     $("#scroll_id").removeClass("hide-q");
        // });
    }
}

// Функция для сохранения состояния пользователя
function saveUserState(state) {
    localStorage.setItem("userState", JSON.stringify(state));
}

// Функция для получения состояния пользователя
function getUserState() {
    const state = localStorage.getItem("userState");
    if (state) {
        return JSON.parse(state);
    }
    return null;
}





setTimeout(() => {
    // const savedUserState = getUserState();
    // if (savedUserState) {
    //     lengt_num_mas = savedUserState.lengt_num_mas;
    //     mass_id = savedUserState.mass_id;
    //     length_mass = savedUserState.length_mass;
    //     text = savedUserState.text;
    // }

    var e = new Date,
        s = ("0" + e.getMinutes()).slice(-2);
    const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
    $(".chat-content-list").append(t), $("#scroll_id").click(function(e) {
        $(this).removeClass("hide-q"), $(".content").animate({
            scrollTop: $(".chat").height() + 50
        }, 700)
    });
    const n = setInterval(function() {
        if (1 == process)
            if (lengt_num_mas != massange.length) {
                if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), 10 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question8(), process = !1, choise8(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
                        scrollTop: $(".chat").height() + 50
                    }, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
                        
                    lengt_num_mas++, mass_id++, length_mass = 0, text = "", app(lengt_num_mas);

                    // Сохраняем состояние пользователя
                    // saveUserState({
                    //     lengt_num_mas: lengt_num_mas,
                    //     mass_id: mass_id,
                    //     length_mass: length_mass,
                    //     text: text
                    // });
                }
            } else clearInterval(n), getValueQuest(), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".content").animate({
                scrollTop: $(".chat").height() + 50
            }, 1000), $(".btn-top").addClass("show"), $(".reviews").removeClass("hide")
    }, speedtext)
}, 1e3), $(".content").scroll(function() {
    "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function() {
    $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});


function getValueQuest() {
    var quest = document.querySelectorAll(".quest"),
        answ = document.querySelectorAll(".chat-content-item .user .text"),
        arr = [];
    for (var i = 0; i < quest.length; i++) {
        arr.push({
            q: quest[i].innerHTML,
            a: answ[i].innerHTML
        });
    }

    console.log(arr);

    $("#miha1").val(JSON.stringify(arr));
}