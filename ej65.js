
var board = JXG.JSXGraph.initBoard('jxgbox', {originX: 250, originY: 450, unitX: 200, unitY: 200, axis:true});
var dataArr = [4, 1.2, 3, NaN, 5, 4, 1.54, function () { return 4; }];



function vaciar(x)
{
  if (x == 1) {
      var M1 = 1;
        var C = Grupo65(M1);
    }
    if (x == 2) {
        var M1 = 1;
        var C = Grupo65_1(M1);
    }
    if (x == 3) {
    var    M1 = 1;
        var C = Grupo65_2(M1);
    }

}

var Sol = [];

function Grupo65(M1){




                var   A,B,C,p,q,d, r,s,t, u, v, w, m,W,x,x1,x2, pas1,pas2,pas3,pas;
                var  P = [];
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  var   a,b,x,y,p,q,u,v,m,n,h,i,ang;
                  x = Math.floor(2*(Math.random() * 10)-20);
                ang = Math.floor((Math.random() * 80)-10);

                  s = x*Math.cos(ang)-0*Math.sin(ang)
                  t = x*Math.sin(ang)+0*Math.cos(ang)


                  a = Math.floor(2*(Math.random() * 10)-20);
                  b = Math.floor(2*(Math.random() * 10)-20);
                  c = Math.floor(2*(Math.random() * 10)-20);
                  d = Math.floor(2*(Math.random() * 10)-20);

                  e = a*d
                  f = b*d
                  g = Math.floor(2*(Math.random() * 10)-20);
                  c1 = (g*-1)/f
                  o1 = (c*-1)/b
                  o2 = (c*-1)/a
                  o3 = c/b
                  o4 = (g*-1)/f
                  o5 = (g*-1)/e
                  o6 = g/f
                  c0 = Math.round( c1 * 100 )/100
                  c2 = (b*c0)+c
                  c3 = (a*a)+(b*b)
                  c4 = Math.sqrt(c3)
                  c5 = c2/c4
                  if ( c5<0 ) {
                    c5 = c5*-1
                  }
                  c5 = Math.round( c5 * 100 )/100
                  c7 = Math.round( o5 * 100 )/100
                  c8 = (c7*a)+c
                  c9 = c8/c4
                  if ( c9<0 ) {
                    c9 = c9*-1
                  }
                  c9 = Math.round( c9 * 100 )/100
                  r1 = a+b
                  r2 = c*-1
                  r3 = r1*r2
                  r4 = (a*a)+(b*b)
                  n = r3/r4
                  m = r2-(b*n)
                  m = m/a

                  r5 = f*-1
                  r5 = r5*c
                  r6 = a*g
                  r7 = r5-r6
                  r8 = b*f
                  r8 = r8+(a*e)
                  q = r7/r8
                  p = r2-(b*q)
                  p = p/a

                  r9 = -1*e
                  r9 = r9*c
                  r10 = r9-(b*g)
                  v = r10/r8
                  u = g*-1
                  u = u-(f*v)
                  u = u/e

                  i1 = f*-1
                  i1 = i1*g
                  i1 = i1-(e*g)
                  i2 = f*f
                  i3 = e*e
                  i4 = i2+i3
                  t = i1/i4
                  s = g*-1
                  s = s-(f*t)
                  s = s/e

                  var z = document.getElementsByName("EjerProp")
                  z[0].value = "("+a+","+b+","+c+"),|("+b+","+a+","+c+"),|("+e+","+f+","+g+"),|("+f+","+e+","+g+")";



                  pas = "$$ solución \\ General $$"
                  pas1 = "$$ sean \\ las \\ rectas \\\\ l_1 = Ax+By+C = 0 \\\\ l_2 = Dx +Ey+F=0 \\\\ l_3 = Kx+Ly+O = 0 \\\\ l_4 = Rx+WY+Z = 0  $$"
                  pas2 = "$$ Observe \\ que \\ las \\ pendientes \\ son \\\\ M_1 = \\frac{-a}{b} \\\\ M_2 = \\frac{-d}{e} \\\\ M_3 = \\frac{-k}{l} \\\\ M_4 = \\frac{-r}{w}  $$"
                  pas3 = "$$ Necesitamos \\ que \\ se \\ cumpla \\ M_1*M_2=-1 \\ y \\ M_3=M_1 \\ , \\ M_2=M_4 \\ para \\ que \\ tenga \\ lados \\ perpendiculares \\ y \\ paralelos $$"
                  pas4 = "$$ Necesitamos \\ también \\ que \\ |l_1 l_3|=|l_2 l_4|  $$"
                Sol[1] = pas+pas1+pas2+pas3+pas4

                pas = "$$ Solucón \\ particular $$"
                pas1 = "$$ Sean \\ Las \\ rectas \\\\ l_1 = "+a+"x + ("+b+")y + ("+c+" )= 0 , \\\\ l_2 =   - ("+b+")x + ("+a+")y + ("+c+") = 0 \\\\ l_3 =  "+e+"x + ("+f+")y + ("+g+") = 0 , \\\\ l_4 =  - ("+f+")x + ("+e+")y + ("+g+") = 0   $$"
                pas2 = "$$ Usando \\ La \\ herramienta \\ obtenemos \\\\ m_1 = \\frac{-"+a+"}{"+b+"} \\\\ m_2 = \\frac{"+b+"}{"+a+"} \\\\ m_3 = \\frac{-"+e+"}{"+f+"} = \\frac{-"+a+"}{"+b+"} \\\\ m_4 = \\frac{"+f+"}{"+e+"}  = \\frac{"+b+"}{"+a+"}  $$"
                pas3 = "$$ Observe \\ que \\ como \\ m_1 = m_3 \\ entonces \\ l_1 \\ es \\ paralela \\ a \\ l_3 \\ y \\ tambien \\ Observe \\ que \\ como \\ m_2 = m_4 \\ entonces \\ l_2 \\ es \\ paralela \\ a \\ l_4 \\\\ Así \\ que \\ se \\ forma \\ un \\ paralelogramo \\  $$"
                pas4 = "$$ Observe \\ que \\ basta \\ con \\ tener \\ una \\ recta \\ perpendicular \\ a \\ otra \\ para \\ que \\ la \\ figura \\ sea \\ un \\ rectángulo  $$"
                pas5 = "$$ Así \\ que \\ multipliquemos \\ m_1 * m_2 \\ para \\ comprobarlo \\\\ \\frac{-"+a+"}{"+b+"} * \\frac{"+b+"}{"+a+"} = -1 \\\\ las \\ rectas \\ son \\ perpendiculares \\ es \\ un \\ rectángulo  $$"
                pas6 = "$$ Ahora \\ para \\ que \\ sea \\ un \\ cuadrado \\ basta \\ con \\ |l_1 l_3|=|l_2 l_4| \\  $$"
                pas7 = "$$ Para \\ la \\ primer \\ distancia \\ utilizaremos \\ el \\ punto \\ de \\ l_3 \\ donde \\ x = 0 \\ p(0,"+c0+") \\ utilizando \\ el \\ teorema \\ obtenemos \\\\  |l_1 l_3| = |l_1 p| = \\frac{("+a+")(0)+("+b+")("+c0+")+("+c+")}{\\sqrt{("+a+")^2 +("+b+")^2 }} = "+c5+"   $$"
                pas8 = "$$ Para \\ la \\ segunda \\ distancia \\ utilizaremos \\ el \\ punto \\ de \\ l_4 \\ donde \\ x = 0 \\ p(0,"+c7+") \\ utilizando \\ el \\ teorema \\ obtenemos \\\\  |l_2 l_4| = |l_2 p| = \\frac{(-"+b+")(0)+("+a+")("+c7+")+("+c+")}{\\sqrt{(-"+b+")^2 +("+a+")^2 }} = "+c9+"   $$"
                pas9 = "$$ Como \\ las \\ distancias \\ son \\ iguales \\ tenemos \\ que \\ es \\ un \\ cuadrado $$"

                  Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9

                document.getElementById("SOL1").innerHTML = Sol[1];
                document.getElementById("SOL2").innerHTML = Sol[2];
                //document.getElementById("SOL3").innerHTML = Sol[3];
                //document.getElementById("SOL4").innerHTML = Sol[4];
                //document.getElementById("SOL5").innerHTML = Sol[5];


                scene = "\\(\\"+Sol[1]+"\\)"
                MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])


                t = Graph5(p,n)
                function Graph5() {
                JXG.JSXGraph.freeBoard(board);
                board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -5], axis: true});
                var p1 = board.create('point', [m, n]);
                var p4 = board.create('point', [u, v]);
                var p2 = board.create('point', [p, q]);
                var p3 = board.create('point', [s, t]);
                var l1 = board.create('line', [[0, o1], [o2, 0]]);
                var l2 = board.create('line', [[0, o2], [o3, 0]]);
                var l3 = board.create('line', [[0, o4], [o5, 0]]);
                var l4 = board.create('line', [[0, o5], [o6, 0]]);

                var pol = board.create('polygon', [p1, p2, p3, p4]);
                g = board.create('angle',[p4, p1, p2], {radius:0.2});
                h = board.create('angle',[p2, p3, p4], {radius:0.2});
                i = board.create('angle',[p1, p2, p3], {radius:0.2});
                j = board.create('angle',[p3, p4, p1], {radius:0.2});
                var st = board.create('slopetriangle', [l1, p1]);
                var st1 = board.create('slopetriangle', [l2, p3]);
                var st2 = board.create('slopetriangle', [l3, p3]);
                var st3 = board.create('slopetriangle', [l4, p1]);
                var tape = board.create('tapemeasure', [[1, 2], [4, 2]], {name:'dist'});

}
}//fin 65
function Grupo65_1(M1){




                var   A,B,C,p,q,d, r,s,t, u, v, w, m,W,x,x1,x2, pas1,pas2,pas3,pas;
                var  P = [];
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  var   a,b,x,y,p,q,u,v,m,n,h,i,ang;
                  x = Math.floor(2*(Math.random() * 10)-20);
                ang = Math.floor((Math.random() * 80)-10);

                  s = x*Math.cos(ang)-0*Math.sin(ang)
                  t = x*Math.sin(ang)+0*Math.cos(ang)


                  a = Math.floor(2*(Math.random() * 10)-20);
                  b = Math.floor(2*(Math.random() * 10)-20);
                  c = Math.floor(2*(Math.random() * 10)-20);
                  d = Math.floor(2*(Math.random() * 10)-20);

                  e = a*d
                  f = b*d
                  g = Math.floor(2*(Math.random() * 10)-20);
                  c1 = (g*-1)/f
                  o1 = (c*-1)/b
                  o2 = (c*-1)/a
                  o3 = c/b
                  o4 = (g*-1)/f
                  o5 = (g*-1)/e
                  o6 = g/f
                  c0 = Math.round( c1 * 100 )/100
                  c2 = (b*c0)+c
                  c3 = (a*a)+(b*b)
                  c4 = Math.sqrt(c3)
                  c5 = c2/c4
                  if ( c5<0 ) {
                    c5 = c5*-1
                  }
                  c5 = Math.round( c5 * 100 )/100
                  c7 = Math.round( o5 * 100 )/100
                  c8 = (c7*a)+c
                  c9 = c8/c4
                  if ( c9<0 ) {
                    c9 = c9*-1
                  }
                  c9 = Math.round( c9 * 100 )/100
                  r1 = a+b
                  r2 = c*-1
                  r3 = r1*r2
                  r4 = (a*a)+(b*b)
                  n = r3/r4
                  m = r2-(b*n)
                  m = m/a

                  r5 = f*-1
                  r5 = r5*c
                  r6 = a*g
                  r7 = r5-r6
                  r8 = b*f
                  r8 = r8+(a*e)
                  q = r7/r8
                  p = r2-(b*q)
                  p = p/a

                  r9 = -1*e
                  r9 = r9*c
                  r10 = r9-(b*g)
                  v = r10/r8
                  u = g*-1
                  u = u-(f*v)
                  u = u/e

                  i1 = f*-1
                  i1 = i1*g
                  i1 = i1-(e*g)
                  i2 = f*f
                  i3 = e*e
                  i4 = i2+i3
                  t = i1/i4
                  s = g*-1
                  s = s-(f*t)
                  s = s/e

                  var z = document.getElementsByName("EjerProp")
                  z[0].value = "("+a+","+b+";"+c+"),|("+b+","+a+";"+c+"),|("+e+","+f+";"+g+"),|("+f+","+e+";"+g+")";



                  pas = "$$ solución \\ General $$"
                  pas1 = "$$ sean \\ las \\ rectas \\\\ l_1 = Ax+By+C = 0 \\\\ l_2 = Dx +Ey+F=0 \\\\ l_3 = Kx+Ly+O = 0 \\\\ l_4 = Rx+WY+Z = 0  $$"
                  pas2 = "$$ Observe \\ que \\ las \\ pendientes \\ son \\\\ M_1 = \\frac{-a}{b} \\\\ M_2 = \\frac{-d}{e} \\\\ M_3 = \\frac{-k}{l} \\\\ M_4 = \\frac{-r}{w}  $$"
                  pas3 = "$$ Necesitamos \\ que \\ se \\ cumpla \\ M_1*M_2=-1 \\ y \\ M_3=M_1 \\ , \\ M_2=M_4 \\ para \\ que \\ tenga \\ lados \\ perpendiculares \\ y \\ paralelos $$"
                  pas4 = "$$ Necesitamos \\ también \\ que \\ |l_1 l_3|=|l_2 l_4|  $$"
                Sol[1] = pas+pas1+pas2+pas3+pas4

                pas = "$$ Solucón \\ particular $$"
                pas1 = "$$ Sean \\ Las \\ rectas \\\\ l_1 = "+a+"x + ("+b+")y + ("+c+" )= 0 , \\\\ l_2 =   - ("+b+")x + ("+a+")y + ("+c+") = 0 \\\\ l_3 =  "+e+"x + ("+f+")y + ("+g+") = 0 , \\\\ l_4 =  - ("+f+")x + ("+e+")y + ("+g+") = 0   $$"
                pas2 = "$$ Usando \\ La \\ herramienta \\ obtenemos \\\\ m_1 = \\frac{-"+a+"}{"+b+"} \\\\ m_2 = \\frac{"+b+"}{"+a+"} \\\\ m_3 = \\frac{-"+e+"}{"+f+"} = \\frac{-"+a+"}{"+b+"} \\\\ m_4 = \\frac{"+f+"}{"+e+"}  = \\frac{"+b+"}{"+a+"}  $$"
                pas3 = "$$ Observe \\ que \\ como \\ m_1 = m_3 \\ entonces \\ l_1 \\ es \\ paralela \\ a \\ l_3 \\ y \\ tambien \\ Observe \\ que \\ como \\ m_2 = m_4 \\ entonces \\ l_2 \\ es \\ paralela \\ a \\ l_4 \\\\ Así \\ que \\ se \\ forma \\ un \\ paralelogramo \\  $$"
                pas4 = "$$ Observe \\ que \\ basta \\ con \\ tener \\ una \\ recta \\ perpendicular \\ a \\ otra \\ para \\ que \\ la \\ figura \\ sea \\ un \\ rectángulo  $$"
                pas5 = "$$ Así \\ que \\ multipliquemos \\ m_1 * m_2 \\ para \\ comprobarlo \\\\ \\frac{-"+a+"}{"+b+"} * \\frac{"+b+"}{"+a+"} = -1 \\\\ las \\ rectas \\ son \\ perpendiculares \\ es \\ un \\ rectángulo  $$"
                pas6 = "$$ Ahora \\ para \\ que \\ sea \\ un \\ cuadrado \\ basta \\ con \\ |l_1 l_3|=|l_2 l_4| \\  $$"
                pas7 = "$$ Para \\ la \\ primer \\ distancia \\ utilizaremos \\ el \\ punto \\ de \\ l_3 \\ donde \\ x = 0 \\ p(0,"+c0+") \\ utilizando \\ el \\ teorema \\ obtenemos \\\\  |l_1 l_3| = |l_1 p| = \\frac{("+a+")(0)+("+b+")("+c0+")+("+c+")}{\\sqrt{("+a+")^2 +("+b+")^2 }} = "+c5+"   $$"
                pas8 = "$$ Para \\ la \\ segunda \\ distancia \\ utilizaremos \\ el \\ punto \\ de \\ l_4 \\ donde \\ x = 0 \\ p(0,"+c7+") \\ utilizando \\ el \\ teorema \\ obtenemos \\\\  |l_2 l_4| = |l_2 p| = \\frac{(-"+b+")(0)+("+a+")("+c7+")+("+c+")}{\\sqrt{(-"+b+")^2 +("+a+")^2 }} = "+c9+"   $$"
                pas9 = "$$ Como \\ las \\ distancias \\ son \\ iguales \\ tenemos \\ que \\ es \\ un \\ cuadrado $$"

                  Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9

                document.getElementById("SOL1").innerHTML = "";
                document.getElementById("SOL2").innerHTML = "";
                //document.getElementById("SOL3").innerHTML = Sol[3];
                //document.getElementById("SOL4").innerHTML = Sol[4];
                //document.getElementById("SOL5").innerHTML = Sol[5];


                scene = "\\(\\"+Sol[1]+"\\)"
                MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])


                t = Graph5(p,n)
                function Graph5() {
                JXG.JSXGraph.freeBoard(board);
                board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -5], axis: true});
                var p1 = board.create('point', [m, n]);
                var p4 = board.create('point', [u, v]);
                var p2 = board.create('point', [p, q]);
                var p3 = board.create('point', [s, t]);
                var l1 = board.create('line', [[0, o1], [o2, 0]]);
                var l2 = board.create('line', [[0, o2], [o3, 0]]);
                var l3 = board.create('line', [[0, o4], [o5, 0]]);
                var l4 = board.create('line', [[0, o5], [o6, 0]]);

                var pol = board.create('polygon', [p1, p2, p3, p4]);
                g = board.create('angle',[p4, p1, p2], {radius:0.2});
                h = board.create('angle',[p2, p3, p4], {radius:0.2});
                i = board.create('angle',[p1, p2, p3], {radius:0.2});
                j = board.create('angle',[p3, p4, p1], {radius:0.2});
                var st = board.create('slopetriangle', [l1, p1]);
                var st1 = board.create('slopetriangle', [l2, p3]);
                var st2 = board.create('slopetriangle', [l3, p3]);
                var st3 = board.create('slopetriangle', [l4, p1]);
                var tape = board.create('tapemeasure', [[1, 2], [4, 2]], {name:'dist'});

}
}//fin 65_1
function Grupo65_2(M1){




                var   A,B,C,p,q,d, r,s,t, u, v, w, m,W,x,x1,x2, pas1,pas2,pas3,pas;
                var  P = [];
                  W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                  var   a,b,x,y,p,q,u,v,m,n,h,i,ang;
                  x = Math.floor(2*(Math.random() * 10)-20);
                ang = Math.floor((Math.random() * 80)-10);

                  s = x*Math.cos(ang)-0*Math.sin(ang)
                  t = x*Math.sin(ang)+0*Math.cos(ang)


                  a = Math.floor(2*(Math.random() * 10)-20);
                  b = Math.floor(2*(Math.random() * 10)-20);
                  c = Math.floor(2*(Math.random() * 10)-20);
                  d = Math.floor(2*(Math.random() * 10)-20);

                  e = a*d
                  f = b*d
                  g = Math.floor(2*(Math.random() * 10)-20);
                  var z = document.getElementsByName("EjerProp");
                    var   W = z[0].value
                  a = W.substring(1,W.indexOf(","));
                  b = W.substring(W.indexOf(",")+1,W.indexOf(";"));
                  c = W.substring(W.indexOf(";")+1,W.indexOf(")"));
                  W = W.substring(W.indexOf("|(")+1)
                  b = W.substring(1,W.indexOf(","));
                  a = W.substring(W.indexOf(",")+1,W.indexOf(";"));
                  c = W.substring(W.indexOf(";")+1,W.indexOf(")"));
                  W = W.substring(W.indexOf("|(")+1)
                  e = W.substring(1,W.indexOf(","));
                  f = W.substring(W.indexOf(",")+1,W.indexOf(";"));
                  g = W.substring(W.indexOf(";")+1,W.indexOf(")"));
                  W = W.substring(W.indexOf("|(")+1)
                  f = W.substring(1,W.indexOf(","));
                  e = W.substring(W.indexOf(",")+1,W.indexOf(";"));
                  g = W.substring(W.indexOf(";")+1,W.indexOf(")"));

                     a=parseFloat(a)
                     b=parseFloat(b)
                     c=parseFloat(c)
                     e=parseFloat(e)
                     f=parseFloat(f)
                     g=parseFloat(g)
                  c1 = (g*-1)/f
                  o1 = (c*-1)/b
                  o2 = (c*-1)/a
                  o3 = c/b
                  o4 = (g*-1)/f
                  o5 = (g*-1)/e
                  o6 = g/f
                  c0 = Math.round( c1 * 100 )/100
                  c2 = (b*c0)+c
                  c3 = (a*a)+(b*b)
                  c4 = Math.sqrt(c3)
                  c5 = c2/c4
                  if ( c5<0 ) {
                    c5 = c5*-1
                  }
                  c5 = Math.round( c5 * 100 )/100
                  c7 = Math.round( o5 * 100 )/100
                  c8 = (c7*a)+c
                  c9 = c8/c4
                  if ( c9<0 ) {
                    c9 = c9*-1
                  }
                  c9 = Math.round( c9 * 100 )/100
                  r1 = a+b
                  r2 = c*-1
                  r3 = r1*r2
                  r4 = (a*a)+(b*b)
                  n = r3/r4
                  m = r2-(b*n)
                  m = m/a

                  r5 = f*-1
                  r5 = r5*c
                  r6 = a*g
                  r7 = r5-r6
                  r8 = b*f
                  r8 = r8+(a*e)
                  q = r7/r8
                  p = r2-(b*q)
                  p = p/a

                  r9 = -1*e
                  r9 = r9*c
                  r10 = r9-(b*g)
                  v = r10/r8
                  u = g*-1
                  u = u-(f*v)
                  u = u/e

                  i1 = f*-1
                  i1 = i1*g
                  i1 = i1-(e*g)
                  i2 = f*f
                  i3 = e*e
                  i4 = i2+i3
                  t = i1/i4
                  s = g*-1
                  s = s-(f*t)
                  s = s/e






                  pas = "$$ solución \\ General $$"
                  pas1 = "$$ sean \\ las \\ rectas \\\\ l_1 = Ax+By+C = 0 \\\\ l_2 = Dx +Ey+F=0 \\\\ l_3 = Kx+Ly+O = 0 \\\\ l_4 = Rx+WY+Z = 0  $$"
                  pas2 = "$$ Observe \\ que \\ las \\ pendientes \\ son \\\\ M_1 = \\frac{-a}{b} \\\\ M_2 = \\frac{-d}{e} \\\\ M_3 = \\frac{-k}{l} \\\\ M_4 = \\frac{-r}{w}  $$"
                  pas3 = "$$ Necesitamos \\ que \\ se \\ cumpla \\ M_1*M_2=-1 \\ y \\ M_3=M_1 \\ , \\ M_2=M_4 \\ para \\ que \\ tenga \\ lados \\ perpendiculares \\ y \\ paralelos $$"
                  pas4 = "$$ Necesitamos \\ también \\ que \\ |l_1 l_3|=|l_2 l_4|  $$"
                Sol[1] = pas+pas1+pas2+pas3+pas4

                pas = "$$ Solucón \\ particular $$"
                pas1 = "$$ Sean \\ Las \\ rectas \\\\ l_1 = "+a+"x + ("+b+")y + ("+c+" )= 0 , \\\\ l_2 =   - ("+b+")x + ("+a+")y + ("+c+") = 0 \\\\ l_3 =  "+e+"x + ("+f+")y + ("+g+") = 0 , \\\\ l_4 =  - ("+f+")x + ("+e+")y + ("+g+") = 0   $$"
                pas2 = "$$ Usando \\ La \\ herramienta \\ obtenemos \\\\ m_1 = \\frac{-"+a+"}{"+b+"} \\\\ m_2 = \\frac{"+b+"}{"+a+"} \\\\ m_3 = \\frac{-"+e+"}{"+f+"} = \\frac{-"+a+"}{"+b+"} \\\\ m_4 = \\frac{"+f+"}{"+e+"}  = \\frac{"+b+"}{"+a+"}  $$"
                pas3 = "$$ Observe \\ que \\ como \\ m_1 = m_3 \\ entonces \\ l_1 \\ es \\ paralela \\ a \\ l_3 \\ y \\ tambien \\ Observe \\ que \\ como \\ m_2 = m_4 \\ entonces \\ l_2 \\ es \\ paralela \\ a \\ l_4 \\\\ Así \\ que \\ se \\ forma \\ un \\ paralelogramo \\  $$"
                pas4 = "$$ Observe \\ que \\ basta \\ con \\ tener \\ una \\ recta \\ perpendicular \\ a \\ otra \\ para \\ que \\ la \\ figura \\ sea \\ un \\ rectángulo  $$"
                pas5 = "$$ Así \\ que \\ multipliquemos \\ m_1 * m_2 \\ para \\ comprobarlo \\\\ \\frac{-"+a+"}{"+b+"} * \\frac{"+b+"}{"+a+"} = -1 \\\\ las \\ rectas \\ son \\ perpendiculares \\ es \\ un \\ rectángulo  $$"
                pas6 = "$$ Ahora \\ para \\ que \\ sea \\ un \\ cuadrado \\ basta \\ con \\ |l_1 l_3|=|l_2 l_4| \\  $$"
                pas7 = "$$ Para \\ la \\ primer \\ distancia \\ utilizaremos \\ el \\ punto \\ de \\ l_3 \\ donde \\ x = 0 \\ p(0,"+c0+") \\ utilizando \\ el \\ teorema \\ obtenemos \\\\  |l_1 l_3| = |l_1 p| = \\frac{("+a+")(0)+("+b+")("+c0+")+("+c+")}{\\sqrt{("+a+")^2 +("+b+")^2 }} = "+c5+"   $$"
                pas8 = "$$ Para \\ la \\ segunda \\ distancia \\ utilizaremos \\ el \\ punto \\ de \\ l_4 \\ donde \\ x = 0 \\ p(0,"+c7+") \\ utilizando \\ el \\ teorema \\ obtenemos \\\\  |l_2 l_4| = |l_2 p| = \\frac{(-"+b+")(0)+("+a+")("+c7+")+("+c+")}{\\sqrt{(-"+b+")^2 +("+a+")^2 }} = "+c9+"   $$"
                pas9 = "$$ Como \\ las \\ distancias \\ son \\ iguales \\ tenemos \\ que \\ es \\ un \\ cuadrado $$"

                  Sol[2] = pas+pas1+pas2+pas3+pas4+pas5+pas6+pas7+pas8+pas9

                document.getElementById("SOL1").innerHTML = Sol[1];
                document.getElementById("SOL2").innerHTML = Sol[2];
                //document.getElementById("SOL3").innerHTML = Sol[3];
                //document.getElementById("SOL4").innerHTML = Sol[4];
                //document.getElementById("SOL5").innerHTML = Sol[5];


                scene = "\\(\\"+Sol[1]+"\\)"
                MathJax.Hub.Queue(["Typeset",MathJax.Hub,scene])


                t = Graph5(p,n)

                function Graph5() {
                JXG.JSXGraph.freeBoard(board);
                board = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-5, 5, 5, -5], axis: true});
                var p1 = board.create('point', [m, n]);
                var p4 = board.create('point', [u, v]);
                var p2 = board.create('point', [p, q]);
                var p3 = board.create('point', [s, t]);
                var l1 = board.create('line', [[0, o1], [o2, 0]]);
                var l2 = board.create('line', [[0, o2], [o3, 0]]);
                var l3 = board.create('line', [[0, o4], [o5, 0]]);
                var l4 = board.create('line', [[0, o5], [o6, 0]]);

                var pol = board.create('polygon', [p1, p2, p3, p4]);
                g = board.create('angle',[p4, p1, p2], {radius:0.2});
                h = board.create('angle',[p2, p3, p4], {radius:0.2});
                i = board.create('angle',[p1, p2, p3], {radius:0.2});
                j = board.create('angle',[p3, p4, p1], {radius:0.2});
                var st = board.create('slopetriangle', [l1, p1]);
                var st1 = board.create('slopetriangle', [l2, p3]);
                var st2 = board.create('slopetriangle', [l3, p3]);
                var st3 = board.create('slopetriangle', [l4, p1]);
                var tape = board.create('tapemeasure', [[1, 2], [4, 2]], {name:'dist'});

}
}//fin 65_2
