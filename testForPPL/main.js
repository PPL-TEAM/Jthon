var DataStructures = {
    stack : function() {                  
        var elements;
        
        this.push = function(element) {
            if (typeof(elements) === 'undefined') {
                elements = [];   
            }                            
            elements.push(element);
        }
        this.pop = function() {
            return elements.pop();
        }
        this.top = function(element) {
            return elements[elements.length - 1];
        }
        this.check = function(element){
			//console.log(elements[1].name);
        	for (var i =1;i<elements.length;i++) {
        		console.log(elements[i].name);
				if (elements[i].name == element) return true;
			}
			return false

		}
    }
}

function AstNode(type, params) {
	this.type = type;
	for(var key in params){ this[key] = params[key];}
	return this;
}

function eval(astNode) {
	
	var v;
	var TYPE_LIST = 1;
	var TYPE_TURPLE = 2;
	// var TYPE_DIC = 3;
	switch(astNode.type) {
		case 'function': 
			// Function only has a left branch
			v = eval(astNode.left); 
			break;
		case 'Statement': 
			// Only need to eval the right hand side since thats your return statement
			// The left hand side is either a no op, or the line before that does not matter
			eval(astNode.left); 
			v = eval(astNode.right); 
			break; 
		case 'array':
			// Handle the right hand side of an array declaration
			// Set the values to real values
			var vec = [];
			vec.datatype = TYPE_LIST;
			
			var members = astNode.value;
			for(var i=0;i<members.length;i++) {
				if(!members[i].name) {
					vec.push(members[i].value);
				} else {
					var identifierValue = executionstack.top()[members[i].name];
					if(!members[i].name in executionstack.top()) {
						throw "NameError: name '"+members[i].name+"' is not defined in list declaration\n";
					}
					vec.push(identifierValue);
				}
			}
			v = vec;
			break;
		case 'turple':
            var vec = [];
            vec.datatype = TYPE_TURPLE;

            var members = astNode.value;
            for(var i=0;i<members.length;i++) {
                if(!members[i].name) {
                    vec.push(members[i].value);
                } else {
                    var identifierValue = executionstack.top()[members[i].name];
                    if(!members[i].name in executionstack.top()) {
                        throw "NameError: name '"+members[i].name+"' is not defined in list declaration\n";
                    }
                    vec.push(identifierValue);
                }
            }
            v = vec;
			break;
        case 'dictionary':
            // Handle the right hand side of an dictionary declaration
            // Set the values to real values
            // var vec = new Array();
            var vec = {};
            //vec.datatype = TYPE_DIC;

            var members = astNode.value;
            for(var i=0;i<members.length;i++) {
                if(!members[i].name) {
                	if (vec[members[i].key] == null)
                		vec[members[i].key] = members[i].value;
                	else
                		throw "NameError: name " + members[i].key + " redifined\n";
                }
             }
             v = vec;
            break;
		case 'arrayindex':
			// Handle rhs of a array index value retrieval
			var identifierValue = executionstack.top()[astNode.name];
			if(!astNode.name in executionstack.top()) {
				throw "NameError: name '"+astNode.name+"' is not defined\n";
			}

			if (Object.prototype.toString.call(identifierValue).toLowerCase() == "[object object]") {
				v = identifierValue[astNode.index];
            }
            else {
                v = identifierValue[parseInt(eval(astNode.index))];
            }
			break;
		case 'cut':
            var identifierValue = executionstack.top()[astNode.name];
            if(!astNode.name in executionstack.top()) {
                throw "NameError: name '"+astNode.name+"' is not defined\n";
            }
            if(!Array.isArray(identifierValue)) {
                throw "TypeError: object '"+astNode.name+"' has no cut\n";
            }

			if (eval(astNode.arg0) < eval(astNode.arg1)) {
            	if ((eval(astNode.arg0) < 0) || (eval(astNode.arg1) > identifierValue.length))
            		throw "ArrayOverflow";
            	else {
            		var vec = [];
            		for (i = eval(astNode.arg0); i < eval(astNode.arg1); i++) {
            			vec.push(identifierValue[i]);
					}
					v = vec;
				}
			}
			else {
            	throw "ArgumentError: arg0 must be less than arg1\n"
			}
			break;
		case 'len':
			// Handle len()
			var identifierValue = executionstack.top()[astNode.name];
			if(!astNode.name in executionstack.top()) {
				throw "NameError: name '"+astNode.name+"' is not defined in declaration\n";
			}
			
			if(!Array.isArray(identifierValue)) {
				if(typeof(identifierValue)!= "string")
				throw "TypeError: object of type '"+(typeof identifierValue)+"' has no len()";
			}
			v = identifierValue.length;
			break; 
		case 'method':
			// Handle list.append(expr) and list.pop(expr)
			var identifierValue = executionstack.top()[astNode.name];
			if(!astNode.name in executionstack.top()) {
				throw "NameError: name '"+astNode.name+"' is not defined in list declaration\n";
			}

			if (Object.prototype.toString.call(identifierValue).toLowerCase() == "[object object]") {
			    // dictionary

            }
            else if (Array.isArray(identifierValue)) {
				if (identifierValue.datatype == TYPE_LIST) {
                    // list
                    if (astNode.method == "append") {
                        identifierValue.push(eval(astNode.argument));
                    } else if (astNode.method == "pop") {
                        identifierValue.pop();
                    } else {
                        throw "AttributeError: '" + astNode.name + "' has no method '" + astNode.method + "'";
                    }
                }
                else if (identifierValue.datatype == TYPE_TURPLE) {
					// turple
					if (astNode.method == "count") {
						// count
						var sum = 0;
						for (var i = 0; i < identifierValue.length; i++) {
							if (identifierValue[i] == eval(astNode.argument)) sum = sum + 1;
						}
						v = sum;
					}
					else if (astNode.method == "index") {
						// index
						if (eval(astNode.argument) < identifierValue.length) {
							v = identifierValue[eval(astNode.argument)];
						}
						else {
							throw "ArrayOverflow";
						}
					}
					else {
                        throw "AttributeError: '" + astNode.name + "' has no method '" + astNode.method + "'";
                    }
				}
            }
            else {
                throw "AttributeError: '"+(typeof identifierValue)+"' object has no attribute '"+astNode.method+"'";
            }
            break;
		case 'FunctionCall':
			// Get function node and evaluate it
			funcName = astNode.name;
		 	functionNode = functions[funcName];
			if(!funcName in functions) {
				throw "NameError: function named '"+funcName+"' is not defined";
			}
			
			// Match given parameters to function signature in number only (no typing for piethon)
			functionparams = functionNode.parameters;
			callparams = astNode.parameters;
			if(functionparams.length != callparams.length) {
				throw "TypeError: "+funcName+"() takes exactly "+functionparams.length+" arguments ("+callparams.length+" given)";
			}
			
			// New stack with given params included to match signature
			var newstackframe = {};
			for(var i = 0;i<functionparams.length;i++) {
				// If an identifier verify it
				var callpari = callparams[i];
				var funcpari = functionparams[i];
				if(callpari.name) {
					var identifierValue = executionstack.top()[callpari.name];
					if(!callpari.name in executionstack.top()) {
						throw "NameError: name '"+astNode.name+"' is not defined\n";
					}
					newstackframe[funcpari.name] = identifierValue
				} else {
					// Otherwise just set to value
					newstackframe[funcpari.name] = callpari.value;
				}
			}
		
			// Push new stack frame
			executionstack.push(newstackframe);
			// Call function
			v = eval(functionNode);
			
			// Pop, back to old stack frame
			executionstack.pop();
			break;
		case 'if': 
			// If 
			if(eval(astNode.left)) {
				v = eval(astNode.right); 	
			}
			break;
		case 'ifelse': 
			// If-else
			if(eval(astNode.left)) {
				v = eval(astNode.middle); 	
			} else {
				v = eval(astNode.right); 	
			}
			break;
		case 'while': 
			// while
			while(eval(astNode.left)) {
				v = eval(astNode.right); 	
			}
			break;


		case 'break':
			while(eval(astNode.left)){
				v = eval(astNode.middle);
				break;
			}
			break;
		case 'continue':
			while(eval(astNode.left)){
				v = eval(astNode.middle);
				continue;
			}
			break;			

		case 'global':
			//console.log("******************");
			//console.log(astNode.left);
			globalexecutionstack.push(astNode.left);
			//console.log("--------------------");
			break;

		case 'IDENT': 
			// Look up value in table
			if(globalexecutionstack.check(astNode.name)==true){
				console.log(astNode.name);
				var identifierValue = globalexecutionstack.top()[astNode.name];
			}
			else {
				var identifierValue = executionstack.top()[astNode.name];
				if (!astNode.name in executionstack.top()) {
					throw "NameError: name '" + astNode.name + "' is not defined\n";
				}
			}
			v = identifierValue;
			break;
		case '=':
			console.log("******************");
			// Set value of identifier in table
			if(astNode.left.type == 'arrayindex') {
				var vec2 = executionstack.top()[astNode.left.name];

				if (vec2.datatype == TYPE_LIST)
					vec2[parseInt(eval(astNode.left.index))] = eval(astNode.right);
			} else {
				console.log("11111111");
				if(globalexecutionstack.check(astNode.left.name)==true) {
					console.log("222222222222");
					console.log(globalexecutionstack.top()[astNode.left.name]);
					globalexecutionstack.top()[astNode.left.name] = eval(astNode.right);

				}
				else {
					console.log(astNode.left.name);
					executionstack.top()[astNode.left.name] = eval(astNode.right);

				}
			}
			break;
		case '>':
			if(eval(astNode.left) >  eval(astNode.right)) {
				v = true;
			} else {
				v = false;
			}
			break;
		case '>=':
			if(eval(astNode.left) >=  eval(astNode.right)) {
				v = true;
			} else {
				v = false;
			}
			break;
		case '<':
			if(eval(astNode.left) <  eval(astNode.right)) {
				v = true;
			} else {
				v = false;
			}
			break;
		case '<=':
			if(eval(astNode.left) <=  eval(astNode.right)) {
				v = true;
			} else {
				v = false;
			}
			break;

		case '==':
			if(eval(astNode.left) == eval(astNode.right)) {
				v = true;
			} else {
				v = false;
			}
			break;	
		case '!=':
			if(eval(astNode.left) != eval(astNode.right)) {
				v = true;
			} else {
				v = false;
			}
			break;			
		case 'no-op': 
			// Do nothing!
		break;
		case 'print':	
			v = eval(astNode.left);
			var strPrint;

			if (Object.prototype.toString.call(v).toLowerCase() == "[object object]") {
			    strPrint = "{";
			    for (var key in v) {
			        strPrint += key + ":" + v[key] + ",";
                }
                strPrint += "}"
            }
			else if(Array.isArray(v)) {
				if (v.datatype == TYPE_LIST)
					strPrint = '['+v.toString()+']';
				else
					strPrint = '(' + v.toString() + ')';
			} else {
				strPrint = v;
			}
			// Print 
			jqconsole.Write(strPrint+'\n', 'jqconsole-output');
			break;
		case 'return': v = eval(astNode.left); break; 
		case 'NUMBER': v = astNode.value; break;
		case 'STRING': v = astNode.value.replace(/\"/g,''); break;
		case '+': 
			left = eval(astNode.left);
			right = eval(astNode.right);
            if ((Array.isArray(left)) && (Array.isArray(right))){
            	var vec = [];
                left.forEach(function(element) {
                    vec.push(element);
                });
                right.forEach(function(element) {
                    vec.push(element);
                });
                v = vec;
                v.datatype = left.datatype;
            } else {
                v = (left + right);
            }
			break;
		case '-': 
			left = eval(astNode.left);
			right = eval(astNode.right);
			v = left - right; 	
			break;
		case '*': 
			left = eval(astNode.left);
			right = eval(astNode.right);
			v = (left * right); 	
		break;
		case '/': 
			left = eval(astNode.left);
			right = eval(astNode.right);
			v = (left / right); 	
			break;		
		case '%': 
			left = eval(astNode.left);
			right = eval(astNode.right);
			v = (left % right); 	
			break;		
		case '**': 
			left = eval(astNode.left);
			right = eval(astNode.right);
			v = Math.pow(left, right); 	
			break;		
		
		case 'UMINUS': v = -1 * eval(astNode.left); break;
		default: throw "internal error: bad node '"+astNode.type+"'";
	}
	return v;
}

function resetForRun() {
	functions = {
		// Pre-create the main function
		'#main#' : new AstNode('function', {name : '#main#'})
	};
}

// The whole program tree
var finalprogram;
// Function map
var functions = {
	// Pre-create the main function
	'#main#' : new AstNode('function', {name : '#main#'})
};
// Execution stack
var executionstack = new DataStructures.stack();
executionstack.push({});

var globalexecutionstack = new DataStructures.stack();
globalexecutionstack.push({});