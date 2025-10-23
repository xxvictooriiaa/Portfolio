let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

function desenhar_quadrados(ctx, cor, px, py, largura, altura){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(px, py, largura, altura);
    ctx.closePath();
}

function desenhar_linhas(ctx, cor, espessura, movex, movey, linex, liney){
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = espessura;
    ctx.moveTo(movex, movey);
    ctx.lineTo(linex, liney);
    ctx.stroke();
    ctx.closePath();
}

function desenhar_arco(ctx, cor, espessura, coordenadax, coordenaday, t_arco, posicao1, posicao2){
    ctx.beginPath();
    ctx.lineWidth = espessura;
    ctx.strokeStyle = cor;
    ctx.arc(coordenadax, coordenaday, t_arco, posicao1*Math.PI, posicao2*Math.PI); 
    ctx.stroke();
    ctx.closePath();
}

function preencher_arco(ctx, cor, coordenadax, coordenaday, t_arco, posicao1, posicao2){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.arc(coordenadax, coordenaday, t_arco, posicao1*Math.PI, posicao2*Math.PI); 
    ctx.fill();
    ctx.closePath();
}

function escrever(ctx, cor, tamanho_font, localizacao, texto, x, y){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.font = tamanho_font;
    ctx.textAlign = localizacao;
    ctx.fillText(texto, x, y);
    ctx.closePath();
}

function retangulo(ctx, cor, x, y, largura, altura){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
    ctx.closePath();
}

function triangulo(ctx, cor, movex, movey, linex1, liney1, linex2, liney2){
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.moveTo(movex, movey);
    ctx.lineTo(linex1, liney1);
    ctx.lineTo(linex2, liney2);
    ctx.fill();
    ctx.closePath();
}

// ===== Canvas 1 =====

// quadrados
desenhar_quadrados(ctx1, 'white', 0, 0, 300, 300);
desenhar_quadrados(ctx1, 'blue', 0, 0, 50, 50);
desenhar_quadrados(ctx1, 'red', 250, 0, 50, 50);
desenhar_quadrados(ctx1, 'yellow', 0, 270, 30, 30);
desenhar_quadrados(ctx1, 'yellow', 0, 240, 30, 30);
desenhar_quadrados(ctx1, 'yellow', 30, 270, 30, 30);
desenhar_quadrados(ctx1, 'black', 270, 270, 30, 30);
desenhar_quadrados(ctx1, 'black', 270, 240, 30, 30);
desenhar_quadrados(ctx1, 'black', 240, 270, 30, 30);
desenhar_quadrados(ctx1, 'cyan', 0, 120, 30, 30);
desenhar_quadrados(ctx1, 'cyan', 0, 150, 30, 30);
desenhar_quadrados(ctx1, 'cyan', 270, 135, 30, 30);
desenhar_quadrados(ctx1, 'red', 110, 150, 40, 40);

// linhas
desenhar_linhas(ctx1, 'green', 1, 0, 150, 300, 150);
desenhar_linhas(ctx1, 'gray', 1, 150, 150, 150, 300);
desenhar_linhas(ctx1, 'blue', 1, 150, 150, 0, 0);
desenhar_linhas(ctx1, 'red', 1, 150, 150, 300, 0);

// arcos
desenhar_arco(ctx1, 'green', 1, 150, 150, 60, 1.0, 2.0);
desenhar_arco(ctx1, 'green', 1, 150, 150, 80, 1.0, 1.25);
desenhar_arco(ctx1, 'green', 1, 150, 150, 80, 3.75, 4.0);
desenhar_arco(ctx1, 'green', 1, 150, 300, 40, 3.0, 4.0);
desenhar_arco(ctx1, 'green', 1, 150, 300, 60, 3.5, 4.0);
desenhar_arco(ctx1, 'green', 1, 150, 300, 85, 3.0, 3.5);
desenhar_arco(ctx1, 'green', 1, 70, 225, 13, 1.0, 4.0);
desenhar_arco(ctx1, 'green', 1, 225, 225, 13, 1.0, 4.0);
desenhar_arco(ctx1, 'blue', 1, 150, 115, 13, 1.0, 4.0);

// preenchimento de arcos
preencher_arco(ctx1, 'cyan', 150, 300, 40, 3.0, 4.0);
preencher_arco(ctx1, 'yellow', 70, 225, 13, 1.0, 4.0);
preencher_arco(ctx1, 'yellow', 225, 225, 13, 1.0, 4.0);
preencher_arco(ctx1, 'cyan', 150, 115, 13, 1.0, 4.0);

// escrita
escrever(ctx1, 'gray', '20px Arial', 'center', 'Canvas', 145, 40);

// ===== Canvas 2 =====
let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

// fundo
desenhar_quadrados(ctx2, 'rgb(143, 253, 212)', 0, 0, 300, 300);

// retângulos
retangulo(ctx2, 'gray', 0, 220, 300, 80);
retangulo(ctx2, 'rgb(69, 142, 252)', 0, 260, 105, 40);
retangulo(ctx2, 'rgb(69, 142, 252)', 0, 220, 40, 80);
retangulo(ctx2, 'rgb(134, 71, 26)', 105, 122, 90, 98);
retangulo(ctx2, 'rgb(98, 68, 35)', 140, 170, 23, 50);
retangulo(ctx2, 'rgb(134, 71, 26)', 40, 170, 20, 50);
retangulo(ctx2, 'rgb(134, 71, 26)', 260, 210, 20, 50);

// quadrados
desenhar_quadrados(ctx2, 'rgb(71, 189, 253)', 117, 147, 22, 22);
desenhar_quadrados(ctx2, 'rgb(71, 189, 253)', 162, 147, 22, 22);

// triângulo
triangulo(ctx2, 'rgb(245, 105, 77)', 105, 122, 195, 122, 150, 90);

// arcos preenchidos
preencher_arco(ctx2, 'rgb(69, 142, 252)', 0, 220, 40, 3.0, 4.0);
preencher_arco(ctx2, 'rgb(69, 142, 252)', 100, 299.5, 40, 1.0, 4.0);
preencher_arco(ctx2, 'green', 50, 160, 28, 1.0, 4.0);
preencher_arco(ctx2, 'green', 270, 190, 28, 1.0, 4.0);
preencher_arco(ctx2, 'yellow', 230, 75, 40, 1.0, 4.0);
