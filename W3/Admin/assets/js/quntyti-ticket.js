var qt_ny_tickets=99,qt_pr_tickets=100,qt_sf_tickets=100,total=100;

document.getElementById("ny-tickets").innerHTML=qt_ny_tickets;
document.getElementById("pr-tickets").innerHTML=qt_pr_tickets;
document.getElementById("sf-tickets").innerHTML=qt_sf_tickets;

document.getElementById("ny-sold-tickets").innerHTML=qt_ny_tickets=total-qt_ny_tickets;
document.getElementById("pr-sold-tickets").innerHTML=qt_pr_tickets=total-qt_pr_tickets;
document.getElementById("sf-sold-tickets").innerHTML=qt_sf_tickets=total-qt_sf_tickets;