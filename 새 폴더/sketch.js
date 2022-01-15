var b;
var b1;
var b2;
var b3;
var b4;
var b5;
function setup() {
  createCanvas(400, 400);
  
  var b = createButton('시작하기');
  b.size(70,50);
  b.position(200 - 70 / 2, 200 - 50 / 2);
  b.style('font-size', '10px');
  b.mousePressed(createB);
}

function draw() {
  background(50);
  if (b1 == mousePressed) {
    b1.c1
  }
}

function createB() {
  var b1 = createButton('옥션');
  var b2 = createButton('중고나라');
  var b3 = createButton('당근 마켓');
  var b4 = createButton('쿠팡');
  var b5 = createButton('11번가');

  b1.size(70, 70);
  b1.position(width / 4 - 70 /2, height / 4 - 70 / 2);
  b1.style('font-size', '10px');

  b2.size(70, 70);
  b2.position(300 - 50 /2, 100 - 70 / 2);
  b2.style('font-size', '10px');

  b3.size(70,70);
  b3.position(width / 4 - 70 /2, 300 - 70 / 2);
  b3.style('font-size', '10px');

  b4.size(70, 70);
  b4.position(300 - 50 /2, 300 - 70 / 2);
  b4.style('font-size', '10px');

  b5.size(70, 70);
  b5.position(200 - 70 /2, 200 - 70 / 2);
  b5.style('font-size', '10px');
  b1.mousePressed(c1);
  b2.mousePressed(c2);
  b3.mousePressed(c3);
  b4.mousePressed(c4);
  b5.mousePressed(c5);
  
}
function c1() {
  var d1 = createButton('');
  var e1 = createButton('환불승인 : 판매자가 옥션 쪽에 환불을 요청한 것을 허락');
  var e2 = createButton('반품승인 : 구매자의 반품을 허락- 반품을 받아 준다는 의사표시');
  d1.size(400, 400);
  d1.position(0, 0);
  e1.size(300, 50);
  e1.position(50, 100);
  e2.size(300, 50);
  e2.position(50, 300);
  d1.mousePressed(reset);
}
function reset() {
  var d1 = createButton('');
  d1.size(400, 400);
  d1.position(0, 0);
  var b1 = createButton('당근마켓');
  var b2 = createButton('중고나라');
  var b3 = createButton('옥션');
  var b4 = createButton('번개장터');
  var b5 = createButton('11번가');
  

  b1.size(70, 50);
  b1.position(width / 4 - 70 /2, height / 4 - 50 / 2);
  b1.style('font-size', '10px');

  b2.size(70, 50);
  b2.position(300 - 50 /2, 100 - 50 / 2);
  b2.style('font-size', '10px');

  b3.size(70,50);
  b3.position(width / 4 - 70 /2, 300 - 50 / 2);
  b3.style('font-size', '10px');

  b4.size(70, 50);
  b4.position(300 - 50 /2, 300 - 50 / 2);
  b4.style('font-size', '10px');

  b5.size(70, 50);
  b5.position(200 - 70 /2, 200 - 50 / 2);
  b5.style('font-size', '10px');
  b1.mousePressed(c1);
  b2.mousePressed(c2);
  b3.mousePressed(c3);
  b4.mousePressed(c4);
  b5.mousePressed(c5);
}
function c2() {
  var d1 = createButton('');
  var e3 = createButton('네고 : 가격과 관련된 협상(값 깎아달라 등)');
  var e4 = createButton('반택 : 편의점 반값 택배');
  var e5 = createButton('택포 : 택배비 포함');
  d1.size(400, 400);
  d1.position(0, 0);
  e3.size(300, 50);
  e3.position(50, 100);
  e4.size(300, 50);
  e4.position(50, 300);
  e5.size(300, 50);
  e5.position(50, 200);
  d1.mousePressed(reset);
}
function c5() {
  var d1 = createButton('');
  var e6 = createButton('개인통관 고유부호 : 해외배송 물품 통관 시 주민등록번호 대신 사용되는 번호');
  var e7 = createButton('집화 : 영업소에 택배물이 모인 곳. 배송보낼 물건을 수거한 다음 출고 처리를 함');
  var e8 = createButton('출고 : 터미널에서 물건을 가지고 나갔음');
  d1.size(400, 400);
  d1.position(0, 0);
  e6.size(300, 50);
  e6.position(50, 100);
  e7.size(300, 50);
  e7.position(50, 300);
  e8.size(300, 50);
  e8.position(50, 200);
  d1.mousePressed(reset);
}
function c3() {
  var d1 = createButton('');
  var e9 = createButton('네고 : 가격과 관련된 협상(값 깎아달라 등)');
  var e10 = createButton('교신 : 교환신청');
  var e11 = createButton('쿨거 : 빠른 거래');
  d1.size(400, 400);
  d1.position(0, 0);
  e9.size(300, 50);
  e9.position(50, 100);
  e10.size(300, 50);
  e10.position(50, 300);
  e11.size(300, 50);
  e11.position(50, 200);
  d1.mousePressed(reset);
}
function c4() {
  var d1 = createButton('');
  var e12 = createButton('합포 : 상자 1개로 배송 부탁');
  var e13 = createButton('급처 : 급하게 이 상품을 판매하고 싶음');
  var e14 = createButton('찔러보기 : 구매 하지 않을 것임에도 판매자에게 계속 물어보기만 함');
  d1.size(400, 400);
  d1.position(0, 0);
  e12.size(300, 50);
  e12.position(50, 100);
  e13.size(300, 50);
  e13.position(50, 300);
  e14.size(300, 50);
  e14.position(50, 200);
  d1.mousePressed(reset);
}