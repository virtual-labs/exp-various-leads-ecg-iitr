//scripting of connectors begin
var rightconnection=false;
var datapoints1 = [];
jsPlumb.ready(function () {
    var instance,
        discs = [],
        addDisc = function (evt) {
            var info = createDisc();
            var e = prepare(info.id);
            instance.draggable(info.id);
            discs.push(info.id);
            evt.stopPropagation();
            evt.preventDefault();
        },
        reset = function (e) {
            for (var i = 0; i < discs.length; i++) {
                var d = document.getElementById(discs[i]);
                if (d) d.parentNode.removeChild(d);
            }
            discs = [];
            e.stopPropagation();
            e.preventDefault();
        },
        initAnimation = function (elId) {
            var el = document.getElementById(elId);
            instance.on(el, 'click', function (e, ui) {
                if (el.className.indexOf("jsPlumb_dragged") > -1) {
                    jsPlumb.removeClass(elId, "jsPlumb_dragged");
                    return;
                }   
            });
        },
 
        endpoint3 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare3 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint3);
        },
        
       endpoint1 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare1 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint1);
        },



        endpoint2 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#59981A" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare2 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint2);
        },



        endpoint9 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#59981A" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare9 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint9);
        },
        endpoint10 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare10 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint10);
        },
        endpoint11 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#59981A" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare11 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint11);
        },
        endpoint12 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#FF0000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare12 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint12);
        },
        endpoint13 = {
            anchor: [0.5, 0.5, 0, -1],
            connectorStyle: { strokeWidth :4, stroke: "#000000" },
            endpointsOnTop: true,
            isSource: true,
            maxConnections: 10,
            isTarget: true,
            dropOptions: { tolerance: "touch", hoverClass: "dropHover" }
        },
        prepare13 = function (elId) {
            initAnimation(elId);
            return instance.addEndpoint(elId, endpoint13);
        },
       
// this is overridden by the YUI demo.
        createDisc = function () {
            var d = document.createElement("div");
            d.className = "bigdot";
            document.getElementById("animation-demo").appendChild(d);
            var id = '' + ((new Date().getTime()));
            d.setAttribute("id", id);
            var w = screen.width - 162, h = screen.height - 200;
            var x = (5 * w) + Math.floor(Math.random() * (10 * w));
            var y = (5 * h) + Math.floor(Math.random() * (10 * h));
            d.style.top = y + 'px';
            d.style.left = x + 'px';
            return {d: d, id: id};
        };
 // get a jsPlumb instance, setting some appropriate defaults and a Container.
    instance = jsPlumb.getInstance({
        DragOptions: { cursor: 'wait', zIndex: 20 },
          Endpoint: [ "Image", { url: "littledot.png" } ], 
        Connector: [ "Bezier", { curviness: -70 } ],
        Container: "canvas"
    });
 // suspend drawing and initialise.
    instance.batch(function () {
        var e3 = prepare3("ld3"),
            e9 = prepare9("ld9"),
            e1 = prepare1("ld1"),
            e2 = prepare2("ld2"),
            e10 = prepare10("ld10"),
            e11 = prepare11("ld11"),
            e12 = prepare12("ld12"),
            e13 = prepare13("ld13"),
           
            clearBtn = jsPlumb.getSelector("#anim-clear"),
            addBtn = jsPlumb.getSelector("#add");
         var detachLinks = jsPlumb.getSelector(".littledot .detach");
            instance.on(detachLinks, "click", function (e) {
                instance.deleteConnectionsForElement(this.getAttribute("rel"));
                jsPlumbUtil.consume(e);
            });
            instance.on(document.getElementById("clear"), "click", function (e) {
                instance.detachEveryConnection();
                showConnectionInfo("");
                jsPlumbUtil.consume(e);
            });   
    });
    jsPlumb.fire("jsPlumbDemoLoaded", instance);
document.getElementById("check-button").addEventListener("click", function () {
      
        var correct_connections_1_12 = [
            {
                "source": "ld1",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld1"
            }
        ];
        var correct_connections_2_11 = [
            {
                "source": "ld2",
                "target": "ld11"
            },
            {
                "source": "ld2",
                "target": "ld11"
            }
        ];
        var correct_connections_3_13 = [
            {
                "source": "ld3",
                "target": "ld13"
            },
            {
                "source": "ld13",
                "target": "ld3"
            }
        ];
      
        var allowed_connections = [
           
            {
                "source": "ld1",
                "target": "ld12"
            },
            {
                "source": "ld12",
                "target": "ld1"
            },
            {
                "source": "ld2",
                "target": "ld11"
            },
            {
                "source": "ld2",
                "target": "ld11"
            },
            {
                "source": "ld3",
                "target": "ld13"
            },
            {
                "source": "ld13",
                "target": "ld3"
            },
           
         ];
         var actual_connections = instance.getAllConnections();
       
        var is_connected_1_12 = false;
        var is_connected_2_11 = false;
        var is_connected_3_13 = false;
        
        var unallowed_connection_present = false;
     
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_1_12){
                is_connected_1_12 = correct_connections_1_12 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_2_11){
                is_connected_2_11 = correct_connections_2_11 .find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
        actual_connections.forEach(function (connection) {
            var this_connection = {
                "source": connection.sourceId,
                "target": connection.targetId
            };
            if(!is_connected_3_13){
                is_connected_3_13 = correct_connections_3_13.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                  });
            }
           if(!unallowed_connection_present){
                unallowed_connection_present = !(allowed_connections.find(function (conn) {
                    return conn.source === this_connection.source && conn.target === this_connection.target;
                }));
            }
        });
       
        if ( is_connected_1_12&&is_connected_2_11&&is_connected_3_13&& !unallowed_connection_present) {
            alert("correct connection");
            rightconnection=true;
             document.getElementById("mcbb").disabled = false;
            document.getElementById("mcbb").classList.remove("disabled");
            return;
            }
        else if(!unallowed_connection_present){
                               alert("Please complete connection");
                               }
            else {
               alert("WRONG CONNECTION");
                return;
            } 
    });
});

//Scripting of connectors ends


//Scripting of mcb begins

var mcboffstate=true;
var were=240;
function mcbonoff()
{   
    if(rightconnection==false)
    {
        alert("Alert ! Please complete the connection first.");
    }
   else
    {
        if (mcboffstate==true)
        {       
            mcboffstate=false;
        document.getElementById('select_1').disabled = false;
        document.getElementById('mcbb').src='Assets/mcb2.png';
        document.getElementById('redled').src='Assets/redlittledot.png';
         document.getElementById('blink').src='Assets/dot.png';  
        document.getElementById('blink1').src='Assets/dot.png';  
         document.getElementById('blink2').src='Assets/dot.png';  
          document.getElementById('blink3').src='Assets/dot.png';  
         $("#testArray1").sevenSeg({
        digits:3, 
        value: 0.0, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 10
    });
    

          
     }  }     
}

//Scripting of mcb ends


//Scrypting of table begins

var attcounter=1;
function addtotable()
        {
            if (mcboffstate==true)
                     {
                      alert("Alert! Please on mcb first");          
                     }
       else if(this.value==1 )
       {
          
           var currentVal1 = attcounter++;
  var currentVal2 = 0.6;
  var currentVal3 = 220;
  var currentVal4 = 3.0;
  var currentVal5 = 36;
  var currentVal6 = 0.011;
  var currentVal7 = 0.01125;
  var currentVal8 = 2.27;
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  document.getElementById("tb1").appendChild(tr);
}
else if(this.value==2 )
       {          
  var currentVal1 = attcounter++;
  var currentVal2 = 0.8;
  var currentVal3 = 220;
  var currentVal4 = 4.0;
  var currentVal5 = 46;
  var currentVal6 = 0.014666;
  var currentVal7 = 0.014375;
  var currentVal8 = 1.98;
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  document.getElementById("tb1").appendChild(tr);
}
else if(this.value==3 )
       {
           
           var currentVal1 = attcounter++;
  var currentVal2 = 1.0;
  var currentVal3 = 220;
  var currentVal4 = 4.5;
  var currentVal5 = 54;
  var currentVal6 = 0.0165;
  var currentVal7 = 0.016875;
  var currentVal8 = 2.27;
  var tr = document.createElement('tr');
  var td1 = tr.appendChild(document.createElement('td'));
  var td2 = tr.appendChild(document.createElement('td'));
  var td3 = tr.appendChild(document.createElement('td'));
  var td4 = tr.appendChild(document.createElement('td'));
  var td5 = tr.appendChild(document.createElement('td'));
  var td6 = tr.appendChild(document.createElement('td'));
  var td7 = tr.appendChild(document.createElement('td'));
  var td8 = tr.appendChild(document.createElement('td'));
  td1.innerHTML=currentVal1;
  td2.innerHTML=currentVal2;
  td3.innerHTML=currentVal3;
  td4.innerHTML=currentVal4;
  td5.innerHTML=currentVal5;
  td6.innerHTML=currentVal6;
  td7.innerHTML=currentVal7;
  td8.innerHTML=currentVal8;
  document.getElementById("tb1").appendChild(tr);
}
else
{
    return;
}
}



//Scrypting of table ends


//Scrypting of switch begins

function changeImage() {
  var image = document.getElementById('switchImage');
  if (image.src.match("switch_on.jpg")) {
    image.src = " switch_off.jpg" ;
  } else {
    image.src = "switch_on.jpg";
  }
}



function metercount() {
    var metercount= document.getElementById("metercount").value;


  if (this.value==1 &&  metercount==36)
  {
    document.getElementById("add").disabled = false;
            document.getElementById("add").classList.remove("disabled");
    alert("Entered correct value now click on AddButton to add values in table");
  }
else if(this.value==2 && metercount==46)
{
    document.getElementById("add").disabled = false;
            document.getElementById("add").classList.remove("disabled");
         alert("Entered correct value now click on AddButton to add values in table");
    }
else if (this.value==3 && metercount==54)
{
    document.getElementById("add").disabled = false;
            document.getElementById("add").classList.remove("disabled");
     alert("Entered correct value now click on AddButton to add values in table");
}
else{
     alert("Entered Wrong value try again");
}
}


//Scrypting of switch ends


//Scryting of variation of bulbs begins

var e = document.getElementById("select_1");
var strUser = e.options[e.selectedIndex].value;
var value = 0;
e.onchange = function(){  
    value = this.value;
   
    if (this.value == 1) {
        rangeChange1();
        blink3();
        $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.3, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 10
    });
    
   
    });

        document.getElementById('bulb5').src = 'Assets/bulbon.png'
        document.getElementById('bulb9').src = 'Assets/bulbon.png'
        document.getElementById('bulb8').src = 'Assets/bulbon.png'
        document.getElementById('bulb7').src = 'Assets/bulbon.png'
        document.getElementById('bulb6').src = 'Assets/bulboff.png'
        document.getElementById('bulb4').src = 'Assets/bulbon.png'
        document.getElementById('bulb3').src = 'Assets/bulbon.png'
        document.getElementById('bulb2').src = 'Assets/bulboff.png'
        document.getElementById('bulb1').src = 'Assets/bulboff.png'
        document.getElementById('bulb10').src = 'Assets/bulboff.png'
    }    
    else if (this.value == 2) {
        rangeChange2(); 
        blink2();  
        
        
        $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.4, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 10
    });
    
   
});
 
        document.getElementById('bulb5').src = 'Assets/bulbon.png'
        document.getElementById('bulb9').src = 'Assets/bulbon.png'
        document.getElementById('bulb8').src = 'Assets/bulbon.png'
        document.getElementById('bulb7').src = 'Assets/bulbon.png'
        document.getElementById('bulb6').src = 'Assets/bulbon.png'
        document.getElementById('bulb4').src = 'Assets/bulbon.png'
        document.getElementById('bulb3').src = 'Assets/bulbon.png'
        document.getElementById('bulb2').src = 'Assets/bulbon.png'
        document.getElementById('bulb1').src = 'Assets/bulboff.png'
        document.getElementById('bulb10').src = 'Assets/bulboff.png'
    }  
    else if (this.value == 3) {
        rangeChange3(); 
        blink1();   
        $(function () {
  
    $("#testArray1").sevenSeg({
        digits:3, 
        value: 13.5, 
        colorOff: "#003200", 
        colorOn: "Lime", 
        slant: 10
    });

    
   
});
    
        document.getElementById('bulb5').src = 'Assets/bulbon.png'
        document.getElementById('bulb9').src = 'Assets/bulbon.png'
        document.getElementById('bulb8').src = 'Assets/bulbon.png'
        document.getElementById('bulb7').src = 'Assets/bulbon.png'
        document.getElementById('bulb6').src = 'Assets/bulbon.png'
        document.getElementById('bulb4').src = 'Assets/bulbon.png'
        document.getElementById('bulb3').src = 'Assets/bulbon.png'
        document.getElementById('bulb2').src = 'Assets/bulbon.png'
        document.getElementById('bulb1').src = 'Assets/bulbon.png'
        document.getElementById('bulb10').src = 'Assets/bulbon.png'
    }
    else
    {
        return;
    }
};

//Scryting of variation of bulbs begins


//Scripting of needle range begins
    var rangeClock1 =  document.querySelector('#needle1');
    var rangeClock2 =  document.querySelector('#needle2');
    var rangeClock3 =  document.querySelector('#needle3');
 function rangeChange1() {
        rangeClock1.style.transform = 'rotate(2.60deg)';
        rangeClock2.style.transform = 'rotateZ(1.6deg)';
        rangeClock3.style.transform = 'rotate(-16.9deg)';
    }
    function rangeChange2() {
      rangeClock1.style.transform = 'rotate(2.60deg)';
      rangeClock2.style.transform = 'rotateZ(14.7deg)';
      rangeClock3.style.transform = 'rotate(-4.2deg)';
  }
  function rangeChange3() {
    rangeClock1.style.transform = 'rotate(2.60deg)';
    rangeClock2.style.transform = 'rotateZ(41.7deg)';
    rangeClock3.style.transform = 'rotate(8.4deg)';
  }

//Scripting of needle range ends


//Scrypting of blinking greenled begins

 function blink1() {
 var blink1 = document.getElementById('blink1');
 var blink2 = document.getElementById('blink2');
 var blink3 = document.getElementById('blink3');
var blink = document.getElementById('blink');
 document.getElementById("blink").style.visibility = "hidden";

         document.getElementById("blink2").style.visibility = "hidden";
        document.getElementById("blink3").style.visibility = "hidden";
            document.getElementById("blink1").style.visibility = "visible"; 

    }

    function blink2() {
    
        var blink1 = document.getElementById('blink1');
 var blink2 = document.getElementById('blink2');
 var blink3 = document.getElementById('blink3');
 
 var blink = document.getElementById('blink');
 document.getElementById("blink").style.visibility = "hidden";
  
        document.getElementById("blink2").style.visibility = "visible";
 document.getElementById("blink1").style.visibility = "hidden";
 document.getElementById("blink3").style.visibility = "hidden";

    }

    function blink3() {
        var blink1 = document.getElementById('blink1');
        var blink2 = document.getElementById('blink2');
 var blink3 = document.getElementById('blink3');
 var blink = document.getElementById('blink');
 document.getElementById("blink").style.visibility = "hidden";
 
       document.getElementById("blink1").style.visibility = "hidden";
        document.getElementById("blink2").style.visibility = "hidden";
 
            document.getElementById("blink3").style.visibility = "visible";

    }
//Scrypting of blinking greenled begins