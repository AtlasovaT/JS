
let obj, method;

obj = {
    go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
// 3 и 4 возвращают у меня при проверке [Object Window],
// так как определен нестрогий режим,
// в таком случае this вернет глобальный объект, window для браузера

// в 1 и случае фукция ссылается на объект перед точкой,
// во 2 случае то же самое, но с оператором группировки, которая в данном случае ни на что не влияет
