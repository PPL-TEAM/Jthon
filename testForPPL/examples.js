var examples = [{
	name : "note",
	code : '#two ways for note\nx = "Hello, python"\nprint x\ny = \'Hello, python\'\nprint y\n'
},{
	name : 'Strings',
	code : '# + and * for string \nx = "Hello, World"\ny = "Hello, Piethon"\nprint x + ", or, " + y\nx = "Hello, World" *2\nprint x\n'
},{
	name : "Operation",
	code : "# += -= *= /= %=\nx = 6\nprint x\nx += 2\nprint x\nx -= 1\nprint x\nx *= 9\nprint x\nx /=  3\nprint x\nx %= 6\nprint x\n"
}, {
	name : "Condition",
	code: "'''This program tests selection statements.\n\tIf and If-else, as well as boolean evaluations, <, > !=, ==, etc.'''\ny = 6\nif 5 > 1:\n\tprint 7\nend\nx = 20.0\nif x < 1000:\n\tprint x\nelse: \n\tprint 10\nend\nif x == 2:\n\tif y != x:\n\t\tprint 3\n\tend\nelse:\n\tprint y\nend\nif y >= 5:\n\tprint y\nend\n\nif y <= 6:\n\tprint y\nend"
}, {
	name : 'Loop',
	code : 'x = 0\nwhile x < 5:\n	x += 1\n	print x\nend\nprint "after loop"\nprint x\n\ny = 0\nwhile y < 8:\n	y += 1\n	break\n	print "no break action:"\n	y += 1\nend\nprint "after loop"\nprint y\n\nz = 0\nwhile z < 8:\n	z += 1\n	print z\n	continue\n	z += 1\n	print "no continue action:"\n	print z\nend\nprint "after loop"\nprint z\n'
},{
	name : 'Global',
	code : "#global var\nglobal x\nx = 1\ndef f():\n	print x\nend\nf()\n"
},{
	name : 'Len',
	code : '#len for string and list\na="string"\nb = len(a)\nprint b\nc = [1,2,3,4]\nd = len(c)\nprint d\n'
},{
	name : 'Functions',
	code : "'''This program tests calling functions without arguments. \n\tFirst test case that uses execution stack and stack frames.\n\tThis is to check that we have everything scoped locally correctly.'''\t\ndef g():\n\tx = 30\n\tprint x\nend\n\ndef f():\n\tx = 20\n\tprint 5\n\tg()\n\tprint x\nend\n\nx = 10\nf()\nprint x\n"
},{
	name : "Arguments",
	code : "'''This program tests calling functions WITH arguments / parameters.\n\tAlso tests whether we check to see if number of arguments is correct'''\t\ndef h(a,b,c,d,e,f,g):\n\tprint a\n\tprint b\n\tprint c\n\tprint d\n\tprint e\n\tprint f\n\tprint g\nend\n\ndef g(z):\n\tprint z\nend\ndef f(x, z):\n\ty = x / 2\n\tprint x\n\tprint y\n\tprint z\n\tg(z)\n\tx = x - 1\n\tg(x)\nend\n\t\t\nx = 10\nf(14,x)\nprint x\nh(1,2,3,4,5,6,x)\n"
}, {
	name : 'Lists',
	code : '#list\nx = [1, 2, 4]\ny = [3, 6]\nz = x + y\nprint z\n\na = [1, 2, 3]\na[1] = 7\nprint a\n\nb=a[1]\nprint b\n\nc = [1, 2, 4]\nc.append(10)\nprint c\nc.pop(10)\nprint c\n\nx = [1, 2, 3, 4, 5]\ny = x[2:3]\nprint y\n'
}, {
	name : 'dictionary',
	code : '#dictionary\nx = {1:2, 3:4}\nprint x\n\ny = x[1]\nprint y\n\nx[5] = 7\nprint x\n\nx[1] = 7\nprint x\n\ny = x.haskey(1)\nprint y\n'
}, {
	name : 'turple',
	code : '#turple\nx = (1, 2, 3)\nprint x\ny = x[2]\nprint y\n\nz = x.count(2)\nprint z\n\nm = x.index(1)\nprint m\n'
}];


