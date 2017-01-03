/* lexical grammar */
%lex
%x COMMENT
%s OTHER_COMMENT

%%

"'''"                { this.begin('COMMENT'); }
<COMMENT>"'''"       { this.begin('INITIAL'); }
<COMMENT>\n       { ; }
<COMMENT>.          { ; }

"#"                		  	{ this.begin('OTHER_COMMENT'); }
<OTHER_COMMENT>\n       	{ this.begin('INITIAL'); }
<OTHER_COMMENT>.          	{ ; }

"*="                    return '*=';
"+="                    return '+=';
"-="                    return '-=';
"/="                    return '/=';
"%="                    return '%=';
"**"                   	return '**';
"/"                   	return '/';
"-"                   	return '-';
"+"                   	return '+';
"%"                   	return '%';
"("                   	return '(';
")"						return ')';
"PI"					return 'PI';
"E"						return 'E';
"*"						return '*';
"!="					return "!=";
"<="					return '<=';
">="					return '>=';
"=="					return '==';
"="						return '=';
":"						return ':';
","						return ',';
"<"						return '<';
">"						return '>';
"if"					return 'if';
"else"					return 'else';
"elif"                  return 'elif';
"global"                return 'global';
"def"					return 'def';
"pass"					return 'pass';
"print"					return 'print';
"end"					return 'end';
"return"				return 'return';
"["						return '[';
"]"						return ']';
"."						return '.';
"len"					return 'len';
"while"					return 'while';
"break"					return 'break';
"continue"				return 'continue';
"{"                     return '{';
"}"                     return '}';
"_"                     return '_';
"and"					return 'and';
"or"					return 'or';
"not"					return 'not';


[0-9]+("."[0-9]+)?\b  	{return 'NUMBER';}
[a-zA-Z]([a-zA-Z]|[0-9])* { return 'IDENT';}
'"'.*?'"'			{ console.log(yytext); return 'STRING';}
"'".*?"'"		{ console.log(yytext); return 'STRING';}
\n						{ return 'CR';}
.                     	{ ; }

/lex

/* operator associations and precedence */

%left  '+' '-'
%left  '*' '/' '%'
%right  '**' 'not'
%left  '<' '<=' '>' '>=' '==' '!=' 'and' 'or'
%left UMINUS

%nonassoc IF_WITHOUT_ELSE
%nonassoc ELSE

%start startproduction

%% /* language grammar */

startproduction   
	: stmt { 
		finalprogram = $1;
		// Maybe remove all function branches?, then execute the one statement
	}
;

parm_list 
	: id 	{	
		$$ = [];
		$$.push({name : $1, value : null})
	}
	| id ',' parm_list {
		$3.push({name : $1, value : null})
		$$ = $3;
	}
	| num {
		$$ = [];
		$$.push({name : null, value : $1})
	}
	| num ',' parm_list {
		$3.push({name : null, value : $1})
		$$ = $3;
	}
	| { $$ = []; }
;

dic_list
    : num ':' num {
        $$ = [];
        $$.push({key: $1, name : null, value : $3})
    }
    | num ':' num ',' dic_list {
        $5.push({key: $1, name : null, value : $3})
        $$ = $5;
    }
    | { $$ = []; }
;

stmt    
	: stmt line 'CR'	{
		$$ = new AstNode('Statement', {left : $1, right :$2});
	}
	| stmt selection 'CR'	{
		$$ = new AstNode('Statement', {left : $1, right :$2});
	}
	| stmt funcdef 'CR'	{
		$$ = new AstNode('Statement', {left : $1, right : new AstNode('no-op') });
	}
	| { $$ = new AstNode('no-op'); } // No-op
;

funcdef 
	: 'def' id '(' parm_list ')' ':' stmt 'end' { 
		// AST for function, add to function table
		var mainFunc = new AstNode('function', {left : $7, name : $2, parameters : $4.reverse()});
		functions[$2] = mainFunc; 
	}
;
selection 
	: 'if' expr ':' stmt  'end'	{
		$$ = new AstNode('if', {left : $2, right : $4});
	}
	| 'if' expr ':' stmt 'else' ':' stmt 'end'	{
		$$ = new AstNode('ifelse', {left : $2, middle: $4,right: $7});		
	}
	|'if' expr ':' stmt 'elif' expr ':' stmt 'else' ':' stmt 'end' {
		$$ = new AstNode('ifelifelse', {left1 : $2, left2 : $4, middle1: $6, middle2: $8, right: $11});
	}
	| 'while' expr ':' stmt 'end' {
		$$ = new AstNode('while', {left : $2, right:$4});
	}
	| 'while' expr ':' stmt 'break' stmt end{
		$$ = new AstNode('break',{left : $2, middle:$4, right: $6});
	}
	| 'while' expr ':' stmt 'continue' stmt end{
		$$ = new AstNode('continue',{left : $2, middle:$4, right: $6});
	}
	| 'global' expr {
           	$$ = new AstNode('global',{left: $2});

    }
	; 

line  
	: line id '=' expr	{
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $2});	
		$$ = new AstNode('=', {left : lf, right : $4});
		console.log("motherfucker");
	}
	
	| line id '+=' expr	{
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $2});	
		$$ = new AstNode('+=', {left : lf, right : $4});
	}

	| line id '-=' expr	{
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $2});	
		$$ = new AstNode('-=', {left : lf, right : $4});
	}

	| line id '*=' expr	{
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $2});	
		$$ = new AstNode('*=', {left : lf, right : $4});
	}

	| line id '/=' expr	{
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $2});	
		$$ = new AstNode('/=', {left : lf, right : $4});
	}

	| line id '%=' expr	{
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $2});	
		$$ = new AstNode('%=', {left : lf, right : $4});
	}
	
	| line id '[' expr ']' '=' expr { 
		// Assignment of an array index
		var lf  = new AstNode('arrayindex', {name : $2, index : $4}); 
		$$ = new AstNode('=', {left : lf, right : $7});
	}

	| line id '(' parm_list ')' {
		// Function call
		$$ = new AstNode('FunctionCall', {name : $2, parameters : $4.reverse()});
	}

	| line id '=' id '(' parm_list ')' {
		// Function call and assign
		var lf= new AstNode('IDENT', {name : $2});			
		var call = new AstNode('FunctionCall', {name : $4, parameters : $6.reverse()});
		$$ = new AstNode('=', {left : lf, right : call});
	}
	
	| line id '=' '[' parm_list ']' {
		// Array creation and assignment
		var lf= new AstNode('IDENT', {name : $2});
		var arr = new AstNode('array', {value : $5.reverse()});
		$$ = new AstNode('=', {left :lf, right : arr});
	}

	| line id '=' '(' parm_list ')' {
		// Tuple creation and assignment
		var lf= new AstNode('IDENT', {name : $2});
		var arr = new AstNode('tuple', {value : $5.reverse()});
		$$ = new AstNode('=', {left :lf, right : arr});
	}

	| line id '=' '{' dic_list '}' {
		// Dictionary creation and assignment
		var lf= new AstNode('IDENT', {name : $2});
		var arr = new AstNode('dictionary', {value : $5.reverse()});
		$$ = new AstNode('=', {left :lf, right : arr});
	}

	| line id '.' id '(' expr ')' { 
		// Method dispatch, with single argument
		$$ = new AstNode('method', { name : $2, method : $4, argument : $6});
	}
	
	| line id '.' id '(' ')' { 
		// No argument method dispatch
		$$ = new AstNode('method', { name : $2, method : $4});
	}
	
	| line 'print' expr {
		// Print statement
		$$ = new AstNode('print', {left : $3});			
	}

	| line 'return' expr {
		// Return statement
		$$ = new AstNode('return', {left : $3});
	}
	
	| { $$ = new AstNode('no-op'); } // No-op
;

expr    
	: expr '+' expr 	{ $$ = new AstNode('+', {left : $1, right : $3}); }
	| expr '-' expr 	{ $$ = new AstNode('-', {left : $1, right : $3});}
	| expr '*' expr 	{ $$ = new AstNode('*', {left : $1, right : $3});}
	| expr '**' expr		{ $$ = new AstNode('**', {left : $1, right : $3});}
	| expr '/' expr		{ $$ = new AstNode('/', {left : $1, right : $3});}
	| expr '%' expr		{ $$ = new AstNode('%', {left : $1, right : $3});}
	| expr 'and' expr	{ $$ = new AstNode('and', {left : $1, right : $3});}
	| expr 'or' expr	{ $$ = new AstNode('or', {left : $1, right : $3});}
	| 'not' expr	{ $$ = new AstNode('not', {right : $2});}
	| expr '<' expr	{ $$ = new AstNode('<', {left : $1, right : $3});}
	| expr '<=' expr	{ $$ = new AstNode('<=', {left : $1, right : $3});}
	| expr '>' expr	{ $$ = new AstNode('>', {left : $1, right : $3});}
	| expr '>=' expr	{ $$ = new AstNode('>=', {left : $1, right : $3});}
	| expr '!=' expr	{ $$ = new AstNode('!=', {left : $1, right : $3});}
	| expr '==' expr		{ $$ = new AstNode('==', {left : $1, right : $3});}
	| '-' expr %prec UMINUS	{ $$ = new AstNode('UMINUS', {left : $2}); }
	| num	{ $$ = new AstNode('NUMBER', {value : $1}); }
	| id		{ $$ = new AstNode('IDENT', {name : $1});	}
	| id '[' expr ']' { $$ = new AstNode('arrayindex', {name : $1, index : $3}); }
	| 'len' '(' id ')' {$$ = new AstNode('len', {name : $3});}
	| 'STRING' {$$ = new AstNode('STRING', {value: yytext}); }
	| id '.' id '(' expr ')' {$$ = new AstNode('method', {name : $1, method : $3, argument : $5}); }
	| id '[' expr ':' expr ']' {$$ = new AstNode('cut', {name : $1, arg0 : $3, arg1 : $5}); }
	;

id 
	: 'IDENT' {$$ = yytext;}
	;
num 
	: 'NUMBER' {$$ = Number(yytext);}
	;
