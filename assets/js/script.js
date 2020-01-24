var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.shadowColor = 'black';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
/* début du tracer canvas */
ctx.moveTo(200,50);
ctx.lineTo(200,300);
/* 1er courbe canvas */
ctx.quadraticCurveTo(200, 450, 400, 450);
ctx.lineTo(700,450);
/* 2e courbe canvas */
ctx.quadraticCurveTo(900, 450, 900, 600);
ctx.lineTo(900,800);
/* 3e courbe canvas */
ctx.quadraticCurveTo(900, 1000, 650, 1000);
ctx.lineTo(450,1000);
/* 4e courbe canvas */
ctx.bezierCurveTo(350, 1000, 100, 1000, 100, 1200);
ctx.lineTo(100,1300);
/* 5e courbe canvas */
ctx.bezierCurveTo(100, 1500, 300, 1500, 300, 1500);
ctx.lineTo(400,1500);
ctx.lineTo(1000,1500);
/* début propriéter style du tracer canvas */
/* début du tracer canvas */
ctx.lineWidth='8';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* fin propriéter style du tracer canvas */
/* début propriéter style du texte canvas */
ctx.font = "25px Georgia";
ctx.fillStyle = '#ffffff';
/* fin propriéter style du texte canvas */
/* début du 1er texte canvas */
ctx.fillText("Préparation du Titre professionnel Developpeur web", 300, 100);
ctx.fillText(" et web mobile :", 320, 140);
ctx.font = "20px Georgia";
ctx.fillStyle = '#ffffff';
ctx.fillText("2019 / 2020", 50, 180);
ctx.fillText("La Manu à Amiens", 350, 190);
ctx.fillText("je suis actuellement en formation ou j'apprend différent language", 350, 230);
ctx.fillText("informatique, notament le HTML, CSS, JavaScript, PHP, jQuery.", 350, 270);
/* fin du 1er texte canvas */
/* début du 2e texte canvas */
ctx.font = "25px Georgia";
ctx.fillStyle = '#ffffff';
ctx.fillText("1er année de Bachelor, graphisme et multimédia validée :", 0, 600);
ctx.font = "20px Georgia";
ctx.fillText("2017 / 2018", 930, 680);
ctx.fillText("Durant cette année validée j'y ai appris les bases du", 50, 650);
ctx.fillText("graphisme et du webdesign, je n'ai malheureusement pas terminée", 50, 690);
ctx.fillText("ce diplôme, ce qui est dommage car je n'était pas mauvais", 50, 730);
/* fin du 2e paragraphe */
/* début du 3e paragraphe */
ctx.font = "25px Georgia";
ctx.fillStyle = '#ffffff';
ctx.fillText("2017 /", 0, 1240);
ctx.fillText("2018", 0, 1280);
ctx.fillText("DAEU A diplôme d'accée aux études universitaire :", 300, 1200);
ctx.fillText("(équivalent bac L) à UPJV Amiens", 350, 1240);
ctx.font = "20px Georgia";
ctx.fillText("Grace a ce diplome j'ai pu reprendre mes études supérieur ", 350, 1290);
/* fin du 3e paragraphe */
/* début du 4e paragraphe */
ctx.font = "25px Georgia";
ctx.fillStyle = '#ffffff';
ctx.fillText("2008 / 2010", 470, 1470);
ctx.fillText("BEP métiers de la communication et des industries graphique :", 100, 1600);
ctx.fillText("(Lep Montaigne à Amiens)", 150, 1640);
ctx.font = "20px Georgia";
ctx.fillText("Durant ce bep j'ai appris la PAO (production assistée par ordinateur)  ", 150, 1690);
ctx.fillText("j'ai pu travailler sur différent logiciel de production graphique.", 150, 1730);
ctx.fillText("et sur différente facon d'imprimer les production.", 150, 1770);
/* fin du 4e paragraphe  */
/* début des pointillé du 1er paragraphe */
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(200,180);
ctx.lineTo(330,180);
/* début style des pointillé */
ctx.lineWidth='3';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* fin des pointillé du 1er paragraphe */
/* début pointillé du 2e paragraphe */
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(770,670);
ctx.lineTo(900,670);

/* début style des pointillé */
ctx.lineWidth='3';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* fin des pointillé du 2e paragraphe */
/* début des pointillé 3e paragraphe */
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(110,1250);
ctx.lineTo(300,1250);
/* début style des pointillé */
ctx.lineWidth='3';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* fin des pointillé 3e paragraphe */
/* début des pointillé 4e paragraphe */
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(550,1500);
ctx.lineTo(550,1580);
/* début style des pointillé */
ctx.lineWidth='3';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* fin des pointillé 4e paragraphe */
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.shadowColor = 'black';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
/* début du tracer canvas */
ctx.moveTo(160,10);
ctx.lineTo(1000,10);
/* début propriéter style du tracer canvas */
ctx.lineWidth='8';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* barre blanche pour ancre presentation */
var c = document.getElementById("canvasPresentation");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.shadowColor = 'black';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.moveTo(170,10);
ctx.lineTo(1240,10);
ctx.lineWidth='8';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* barre blanche pour ancre experience professionnel */
var c = document.getElementById("canvasExpérience");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.shadowColor = 'black';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.moveTo(170,50);
ctx.lineTo(1000,50);
ctx.lineWidth='8';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
/* barre blanche pour ancre hobbie */
var c = document.getElementById("canvasHobbie");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.shadowColor = 'black';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.moveTo(90,50);
ctx.lineTo(1000,50);
ctx.lineWidth='8';
ctx.strokeStyle='white';
ctx.lineCap='round'
ctx.stroke();
