var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hola mundo con Typescrypt');
var nombre = "miguel";
var numero = 90;
var booleano = true;
var todo;
var miArray = ["hola", 28, true];
var miArraydetextos = ["texto", "texto2", "texto3"];
var miArraydenumeros = [2, 5, 7, 3];
var miArraydebooleanos = [true, false, false, true];
var Arrayvalordefinido = ["jola", true, "wer", 23];
var Arraydefinidodearray = [["jola", true, "wer", 23,], ["lop", true, "loa", 23]];
//datos vacios => null - undefined - void
// let vacioExistencial: void = undefined       //como tal no tiene nada, lo acepta 
// let nulo: null = null        //a veces puede dar como definicion un Object --> Es un bug a veces es tratado como objeto ojo 
// let indefinido: undefined = undefined
// console.log(typeof (indefinido));
function miFuncion(name, edad) {
    if (nombre == 'Alejandra' && edad == 12) {
        return true;
    }
    else {
        return false;
    }
}
miFuncion("Tatiana", 105);
console.log(miFuncion("Tatiana", 105));
function hogwarts(inFoHechizo) {
    console.log(inFoHechizo);
}
hogwarts({ hechizo: "lumus", varita: ["madera de roble", "12cm", "Olivanders"] });
var embrujo = { hechizo: "Leviosssssa", varita: ["madera de roble", "35 cm", "Olviander"] };
var Usuario = /** @class */ (function () {
    function Usuario(nombre, correo, numero_documento, HechizoEsoterico) {
        this.nombre = nombre;
        this.correo = correo;
        this.numero_documento = numero_documento;
    }
    Usuario.prototype.verNumeroDoc = function () {
        return this.numero_documento;
    };
    return Usuario;
}());
var ObjUsuario = new Usuario("Julian", "Julian123@correo.com", "2323324234", embrujo);
console.log(ObjUsuario.verNumeroDoc());
var Entregas = /** @class */ (function (_super) {
    __extends(Entregas, _super);
    function Entregas(nombre, correo, numero_documento, HechizoEsoterico, curso, equipo) {
        var _this = _super.call(this, nombre, correo, numero_documento, HechizoEsoterico) || this;
        _this.curso = curso;
        _this.equipo = equipo;
        return _this;
    }
    return Entregas;
}(Usuario));
