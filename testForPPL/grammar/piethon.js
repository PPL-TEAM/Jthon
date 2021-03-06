/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var piethon = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,13],$V1=[12,38,39,57],$V2=[2,38],$V3=[1,9],$V4=[1,6],$V5=[1,7],$V6=[1,8],$V7=[1,14],$V8=[1,19],$V9=[1,18],$Va=[1,22],$Vb=[1,23],$Vc=[1,24],$Vd=[1,12,15,18,19,21,22,23,24,25,26,38,39,57],$Ve=[1,40],$Vf=[1,41],$Vg=[1,42],$Vh=[1,43],$Vi=[1,44],$Vj=[1,45],$Vk=[1,46],$Vl=[1,47],$Vm=[1,48],$Vn=[1,49],$Vo=[1,50],$Vp=[1,51],$Vq=[1,52],$Vr=[1,53],$Vs=[10,12,17,34,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,57],$Vt=[2,56],$Vu=[1,56],$Vv=[1,57],$Vw=[2,6],$Vx=[10,12,17,34,38,39,40,41,42,44,45,57],$Vy=[2,9],$Vz=[17,34],$VA=[10,12,17,34,38,39,40,41,57],$VB=[12,15,18,19,23,26,38,39,57];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"startproduction":3,"stmt":4,"parm_list":5,"id":6,",":7,"num":8,"dic_list":9,":":10,"line":11,"CR":12,"selection":13,"funcdef":14,"def":15,"(":16,")":17,"end":18,"if":19,"expr":20,"else":21,"elif":22,"while":23,"break":24,"continue":25,"global":26,"=":27,"+=":28,"-=":29,"*=":30,"/=":31,"%=":32,"[":33,"]":34,"{":35,"}":36,".":37,"print":38,"return":39,"+":40,"-":41,"*":42,"**":43,"/":44,"%":45,"and":46,"or":47,"not":48,"<":49,"<=":50,">":51,">=":52,"!=":53,"==":54,"len":55,"STRING":56,"IDENT":57,"NUMBER":58,"$accept":0,"$end":1},
terminals_: {2:"error",7:",",10:":",12:"CR",15:"def",16:"(",17:")",18:"end",19:"if",21:"else",22:"elif",23:"while",24:"break",25:"continue",26:"global",27:"=",28:"+=",29:"-=",30:"*=",31:"/=",32:"%=",33:"[",34:"]",35:"{",36:"}",37:".",38:"print",39:"return",40:"+",41:"-",42:"*",43:"**",44:"/",45:"%",46:"and",47:"or",48:"not",49:"<",50:"<=",51:">",52:">=",53:"!=",54:"==",55:"len",56:"STRING",57:"IDENT",58:"NUMBER"},
productions_: [0,[3,1],[5,1],[5,3],[5,1],[5,3],[5,0],[9,3],[9,5],[9,0],[4,3],[4,3],[4,3],[4,0],[14,8],[13,5],[13,8],[13,12],[13,5],[13,7],[13,7],[13,2],[11,4],[11,4],[11,4],[11,4],[11,4],[11,4],[11,7],[11,5],[11,7],[11,6],[11,6],[11,6],[11,7],[11,6],[11,3],[11,3],[11,0],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,2],[20,3],[20,3],[20,3],[20,3],[20,3],[20,3],[20,2],[20,1],[20,1],[20,4],[20,4],[20,1],[20,6],[20,6],[6,1],[8,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 
		finalprogram = $$[$0];
		// Maybe remove all function branches?, then execute the one statement
	
break;
case 2:
	
		this.$ = [];
		this.$.push({name : $$[$0], value : null})
	
break;
case 3:

		$$[$0].push({name : $$[$0-2], value : null})
		this.$ = $$[$0];
	
break;
case 4:

		this.$ = [];
		this.$.push({name : null, value : $$[$0]})
	
break;
case 5:

		$$[$0].push({name : null, value : $$[$0-2]})
		this.$ = $$[$0];
	
break;
case 6: case 9:
 this.$ = []; 
break;
case 7:

        this.$ = [];
        this.$.push({key: $$[$0-2], name : null, value : $$[$0]})
    
break;
case 8:

        $$[$0].push({key: $$[$0-4], name : null, value : $$[$0-2]})
        this.$ = $$[$0];
    
break;
case 10: case 11:

		this.$ = new AstNode('Statement', {left : $$[$0-2], right :$$[$0-1]});
	
break;
case 12:

		this.$ = new AstNode('Statement', {left : $$[$0-2], right : new AstNode('no-op') });
	
break;
case 13: case 38:
 this.$ = new AstNode('no-op'); 
break;
case 14:
 
		// AST for function, add to function table
		var mainFunc = new AstNode('function', {left : $$[$0-1], name : $$[$0-6], parameters : $$[$0-4].reverse()});
		functions[$$[$0-6]] = mainFunc; 
	
break;
case 15:

		this.$ = new AstNode('if', {left : $$[$0-3], right : $$[$0-1]});
	
break;
case 16:

		this.$ = new AstNode('ifelse', {left : $$[$0-6], middle: $$[$0-4],right: $$[$0-1]});		
	
break;
case 17:

		this.$ = new AstNode('ifelifelse', {left1 : $$[$0-10], left2 : $$[$0-8], middle1: $$[$0-6], middle2: $$[$0-4], right: $$[$0-1]});
	
break;
case 18:

		this.$ = new AstNode('while', {left : $$[$0-3], right:$$[$0-1]});
	
break;
case 19:

		this.$ = new AstNode('break',{left : $$[$0-5], middle:$$[$0-3], right: $$[$0-1]});
	
break;
case 20:

		this.$ = new AstNode('continue',{left : $$[$0-5], middle:$$[$0-3], right: $$[$0-1]});
	
break;
case 21:

           	this.$ = new AstNode('global',{left: $$[$0]});

    
break;
case 22:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('=', {left : lf, right : $$[$0]});
		console.log("motherfucker");
	
break;
case 23:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('+=', {left : lf, right : $$[$0]});
	
break;
case 24:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('-=', {left : lf, right : $$[$0]});
	
break;
case 25:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('*=', {left : lf, right : $$[$0]});
	
break;
case 26:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('/=', {left : lf, right : $$[$0]});
	
break;
case 27:

		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('%=', {left : lf, right : $$[$0]});
	
break;
case 28:
 
		// Assignment of an array index
		var lf  = new AstNode('arrayindex', {name : $$[$0-5], index : $$[$0-3]}); 
		this.$ = new AstNode('=', {left : lf, right : $$[$0]});
	
break;
case 29:

		// Function call
		this.$ = new AstNode('FunctionCall', {name : $$[$0-3], parameters : $$[$0-1].reverse()});
	
break;
case 30:

		// Function call and assign
		var lf= new AstNode('IDENT', {name : $$[$0-5]});			
		var call = new AstNode('FunctionCall', {name : $$[$0-3], parameters : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left : lf, right : call});
	
break;
case 31:

		// Array creation and assignment
		var lf= new AstNode('IDENT', {name : $$[$0-4]});
		var arr = new AstNode('array', {value : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left :lf, right : arr});
	
break;
case 32:

		// Tuple creation and assignment
		var lf= new AstNode('IDENT', {name : $$[$0-4]});
		var arr = new AstNode('tuple', {value : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left :lf, right : arr});
	
break;
case 33:

		// Dictionary creation and assignment
		var lf= new AstNode('IDENT', {name : $$[$0-4]});
		var arr = new AstNode('dictionary', {value : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left :lf, right : arr});
	
break;
case 34:
 
		// Method dispatch, with single argument
		this.$ = new AstNode('method', { name : $$[$0-5], method : $$[$0-3], argument : $$[$0-1]});
	
break;
case 35:
 
		// No argument method dispatch
		this.$ = new AstNode('method', { name : $$[$0-4], method : $$[$0-2]});
	
break;
case 36:

		// Print statement
		this.$ = new AstNode('print', {left : $$[$0]});			
	
break;
case 37:

		// Return statement
		this.$ = new AstNode('return', {left : $$[$0]});
	
break;
case 39:
 this.$ = new AstNode('+', {left : $$[$0-2], right : $$[$0]}); 
break;
case 40:
 this.$ = new AstNode('-', {left : $$[$0-2], right : $$[$0]});
break;
case 41:
 this.$ = new AstNode('*', {left : $$[$0-2], right : $$[$0]});
break;
case 42:
 this.$ = new AstNode('**', {left : $$[$0-2], right : $$[$0]});
break;
case 43:
 this.$ = new AstNode('/', {left : $$[$0-2], right : $$[$0]});
break;
case 44:
 this.$ = new AstNode('%', {left : $$[$0-2], right : $$[$0]});
break;
case 45:
 this.$ = new AstNode('and', {left : $$[$0-2], right : $$[$0]});
break;
case 46:
 this.$ = new AstNode('or', {left : $$[$0-2], right : $$[$0]});
break;
case 47:
 this.$ = new AstNode('not', {right : $$[$0]});
break;
case 48:
 this.$ = new AstNode('<', {left : $$[$0-2], right : $$[$0]});
break;
case 49:
 this.$ = new AstNode('<=', {left : $$[$0-2], right : $$[$0]});
break;
case 50:
 this.$ = new AstNode('>', {left : $$[$0-2], right : $$[$0]});
break;
case 51:
 this.$ = new AstNode('>=', {left : $$[$0-2], right : $$[$0]});
break;
case 52:
 this.$ = new AstNode('!=', {left : $$[$0-2], right : $$[$0]});
break;
case 53:
 this.$ = new AstNode('==', {left : $$[$0-2], right : $$[$0]});
break;
case 54:
 this.$ = new AstNode('UMINUS', {left : $$[$0]}); 
break;
case 55:
 this.$ = new AstNode('NUMBER', {value : $$[$0]}); 
break;
case 56:
 this.$ = new AstNode('IDENT', {name : $$[$0]});	
break;
case 57:
 this.$ = new AstNode('arrayindex', {name : $$[$0-3], index : $$[$0-1]}); 
break;
case 58:
this.$ = new AstNode('len', {name : $$[$0-1]});
break;
case 59:
this.$ = new AstNode('STRING', {value: yytext}); 
break;
case 60:
this.$ = new AstNode('method', {name : $$[$0-5], method : $$[$0-3], argument : $$[$0-1]}); 
break;
case 61:
this.$ = new AstNode('cut', {name : $$[$0-5], arg0 : $$[$0-3], arg1 : $$[$0-1]}); 
break;
case 62:
this.$ = yytext;
break;
case 63:
this.$ = Number(yytext);
break;
}
},
table: [o([1,12,15,19,23,26,38,39,57],$V0,{3:1,4:2}),{1:[3]},o($V1,$V2,{11:3,13:4,14:5,1:[2,1],15:$V3,19:$V4,23:$V5,26:$V6}),{6:11,12:[1,10],38:[1,12],39:[1,13],57:$V7},{12:[1,15]},{12:[1,16]},{6:21,8:20,20:17,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:25,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:26,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:27,57:$V7},o($Vd,[2,10]),{16:[1,35],27:[1,28],28:[1,29],29:[1,30],30:[1,31],31:[1,32],32:[1,33],33:[1,34],37:[1,36]},{6:21,8:20,20:37,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:38,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},o([7,10,12,16,17,27,28,29,30,31,32,33,34,37,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,57],[2,62]),o($Vd,[2,11]),o($Vd,[2,12]),{10:[1,39],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{6:21,8:20,20:54,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:55,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},o($Vs,[2,55]),o($Vs,$Vt,{33:$Vu,37:$Vv}),{16:[1,58]},o($Vs,[2,59]),o([7,10,12,17,34,36,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,57],[2,63]),{10:[1,59],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{12:[2,21],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{16:[1,60]},{6:62,8:20,16:[1,64],20:61,33:[1,63],35:[1,65],41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:66,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:67,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:68,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:69,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:70,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:71,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{5:72,6:73,8:74,17:$Vw,57:$V7,58:$Vc},{6:75,57:$V7},o($V1,[2,36],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($V1,[2,37],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o([12,15,18,19,21,22,23,26,38,39,57],$V0,{4:76}),{6:21,8:20,20:77,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:78,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:79,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:80,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:81,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:82,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:83,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:84,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:85,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:86,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:87,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:88,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:89,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:90,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},o($Vx,[2,47],{43:$Vh,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($Vs,[2,54]),{6:21,8:20,20:91,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:92,57:$V7},{6:93,57:$V7},o([12,15,18,19,23,24,25,26,38,39,57],$V0,{4:94}),{5:95,6:73,8:74,17:$Vw,57:$V7,58:$Vc},o($V1,[2,22],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o([12,38,39,40,41,42,43,44,45,46,47,49,50,51,52,53,54,57],$Vt,{16:[1,96],33:$Vu,37:$Vv}),{5:97,6:73,8:74,34:$Vw,57:$V7,58:$Vc},{5:98,6:73,8:74,17:$Vw,57:$V7,58:$Vc},{8:100,9:99,36:$Vy,58:$Vc},o($V1,[2,23],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($V1,[2,24],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($V1,[2,25],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($V1,[2,26],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($V1,[2,27],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),{34:[1,101],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{17:[1,102]},o($Vz,[2,2],{7:[1,103]}),o($Vz,[2,4],{7:[1,104]}),{16:[1,105]},o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,106],19:$V4,21:[1,107],22:[1,108],23:$V5,26:$V6}),o($VA,[2,39],{42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($VA,[2,40],{42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($Vx,[2,41],{43:$Vh,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($Vx,[2,42],{43:$Vh,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($Vx,[2,43],{43:$Vh,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($Vx,[2,44],{43:$Vh,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($Vs,[2,45]),o($Vs,[2,46]),o($Vs,[2,48]),o($Vs,[2,49]),o($Vs,[2,50]),o($Vs,[2,51]),o($Vs,[2,52]),o($Vs,[2,53]),{10:[1,110],34:[1,109],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{16:[1,111]},{17:[1,112]},o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,113],19:$V4,23:$V5,24:[1,114],25:[1,115],26:$V6}),{17:[1,116]},{5:117,6:73,8:74,17:$Vw,57:$V7,58:$Vc},{34:[1,118]},{17:[1,119]},{36:[1,120]},{10:[1,121]},{27:[1,122]},o($V1,[2,29]),o($Vz,$Vw,{6:73,8:74,5:123,57:$V7,58:$Vc}),o($Vz,$Vw,{6:73,8:74,5:124,57:$V7,58:$Vc}),{6:21,8:20,17:[1,126],20:125,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{12:[2,15]},{10:[1,127]},{6:21,8:20,20:128,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},o($Vs,[2,57]),{6:21,8:20,20:129,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},{6:21,8:20,20:130,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},o($Vs,[2,58]),{12:[2,18]},o($VB,$V0,{4:131}),o($VB,$V0,{4:132}),{10:[1,133]},{17:[1,134]},o($V1,[2,31]),o($V1,[2,32]),o($V1,[2,33]),{8:135,58:$Vc},{6:21,8:20,20:136,41:$V8,48:$V9,55:$Va,56:$Vb,57:$V7,58:$Vc},o($Vz,[2,3]),o($Vz,[2,5]),{17:[1,137],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},o($V1,[2,35]),o($VB,$V0,{4:138}),{10:[1,139],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{34:[1,140],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},{17:[1,141],40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr},o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,142],19:$V4,23:$V5,26:$V6}),o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,143],19:$V4,23:$V5,26:$V6}),o($VB,$V0,{4:144}),o($V1,[2,30]),{7:[1,145],36:[2,7]},o($V1,[2,28],{40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,45:$Vj,46:$Vk,47:$Vl,49:$Vm,50:$Vn,51:$Vo,52:$Vp,53:$Vq,54:$Vr}),o($V1,[2,34]),o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,146],19:$V4,23:$V5,26:$V6}),o([12,15,19,21,23,26,38,39,57],$V0,{4:147}),o($Vs,[2,61]),o($Vs,[2,60]),{12:[2,19]},{12:[2,20]},o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,148],19:$V4,23:$V5,26:$V6}),{8:100,9:149,36:$Vy,58:$Vc},{12:[2,16]},o($V1,$V2,{11:3,13:4,14:5,15:$V3,19:$V4,21:[1,150],23:$V5,26:$V6}),{12:[2,14]},{36:[2,8]},{10:[1,151]},o($VB,$V0,{4:152}),o($V1,$V2,{11:3,13:4,14:5,15:$V3,18:[1,153],19:$V4,23:$V5,26:$V6}),{12:[2,17]}],
defaultActions: {106:[2,15],113:[2,18],142:[2,19],143:[2,20],146:[2,16],148:[2,14],149:[2,8],153:[2,17]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: this.begin('COMMENT'); 
break;
case 1: this.begin('INITIAL'); 
break;
case 2: ; 
break;
case 3: ; 
break;
case 4: this.begin('OTHER_COMMENT'); 
break;
case 5: this.begin('INITIAL'); 
break;
case 6: ; 
break;
case 7:return 30;
break;
case 8:return 28;
break;
case 9:return 29;
break;
case 10:return 31;
break;
case 11:return 32;
break;
case 12:return 43;
break;
case 13:return 44;
break;
case 14:return 41;
break;
case 15:return 40;
break;
case 16:return 45;
break;
case 17:return 16;
break;
case 18:return 17;
break;
case 19:return 'PI';
break;
case 20:return 'E';
break;
case 21:return 42;
break;
case 22:return "!=";
break;
case 23:return 50;
break;
case 24:return 52;
break;
case 25:return 54;
break;
case 26:return 27;
break;
case 27:return 10;
break;
case 28:return 7;
break;
case 29:return 49;
break;
case 30:return 51;
break;
case 31:return 19;
break;
case 32:return 21;
break;
case 33:return 22;
break;
case 34:return 26;
break;
case 35:return 15;
break;
case 36:return 'pass';
break;
case 37:return 38;
break;
case 38:return 18;
break;
case 39:return 39;
break;
case 40:return 33;
break;
case 41:return 34;
break;
case 42:return 37;
break;
case 43:return 55;
break;
case 44:return 23;
break;
case 45:return 24;
break;
case 46:return 25;
break;
case 47:return 35;
break;
case 48:return 36;
break;
case 49:return '_';
break;
case 50:return 46;
break;
case 51:return 47;
break;
case 52:return 48;
break;
case 53:return 58;
break;
case 54: return 57;
break;
case 55: console.log(yy_.yytext); return 56;
break;
case 56: console.log(yy_.yytext); return 56;
break;
case 57: return 12;
break;
case 58: ; 
break;
}
},
rules: [/^(?:''')/,/^(?:''')/,/^(?:\n)/,/^(?:.)/,/^(?:#)/,/^(?:\n)/,/^(?:.)/,/^(?:\*=)/,/^(?:\+=)/,/^(?:-=)/,/^(?:\/=)/,/^(?:%=)/,/^(?:\*\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:\*)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:=)/,/^(?::)/,/^(?:,)/,/^(?:<)/,/^(?:>)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:elif\b)/,/^(?:global\b)/,/^(?:def\b)/,/^(?:pass\b)/,/^(?:print\b)/,/^(?:end\b)/,/^(?:return\b)/,/^(?:\[)/,/^(?:\])/,/^(?:\.)/,/^(?:len\b)/,/^(?:while\b)/,/^(?:break\b)/,/^(?:continue\b)/,/^(?:\{)/,/^(?:\})/,/^(?:_\b)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:not\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[a-zA-Z]([a-zA-Z]|[0-9])*)/,/^(?:".*?")/,/^(?:'.*?')/,/^(?:\n)/,/^(?:.)/],
conditions: {"OTHER_COMMENT":{"rules":[0,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true},"COMMENT":{"rules":[1,2,3],"inclusive":false},"INITIAL":{"rules":[0,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = piethon;
exports.Parser = piethon.Parser;
exports.parse = function () { return piethon.parse.apply(piethon, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}