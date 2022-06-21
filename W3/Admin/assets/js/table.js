var num=0;
var email=document.getElementById('tickets-email');
var tikets;
var quantity;


function purchaseHistory(){
    let TH;
    let text ;
    let TR;
    TR=document.createElement("TR");
    TR.setAttribute("id","infTR");
    document.getElementById('ad-table').appendChild(TR);


    TH=document.createElement("Th");
    text=document.createTextNode(0);
    TH.appendChild(text);
    document.getElementById("infTR").appendChild(TH); 


    TH=document.createElement("Th");
    text=document.createTextNode('nqh.ktpm.k62@gmail.com');
    TH.appendChild(text);
    document.getElementById("infTR").appendChild(TH);


    TH=document.createElement("Th");
    text=document.createTextNode('NewYork Ticket');
    TH.appendChild(text);
    document.getElementById("infTR").appendChild(TH);


    TH=document.createElement("Th");
    text=document.createTextNode(1);
    TH.appendChild(text);
    document.getElementById("infTR").appendChild(TH);

};

purchaseHistory();

num+=1;
