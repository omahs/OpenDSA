/*global ODSA */
// Written by Mohammed Farghally and Cliff Shaffer
// Best, Worst, Average Cases definitions
$(document).ready(function() {
  "use strict";
  var av_name = "BestWorstAverageCON";
  // Load the config object with interpreter and code created by odsaUtils.js
  var config = ODSA.UTILS.loadConfig({av_name: av_name}),
      interpret = config.interpreter,       // get the interpreter
      code = config.code;                   // get the code object
  var av = new JSAV(av_name);
  var pseudo = av.code(code).hide();
  var arr;
  var arr_values = [];
  var topAlign = 80;
  var leftAlign = 10;
  var rectWidth = 225;
  var rectHeight = 200;
  var arraySize = 7;
  var i;

  // Slide 1
  av.umsg(interpret("Slide 1"));
  av.displayInit();

  //Slide 2
  av.umsg(interpret("Slide 2"));
  var rect = av.g.rect(leftAlign + 380, topAlign - 25, rectWidth, rectHeight);
  var label = av.label(interpret("lab1"),  {top: topAlign - 25, left: leftAlign + 405});
  av.step();

  //Slide 3
  av.umsg(interpret("Slide 3"), {preserve: true});
  var nlabel = av.label("|---------------------------- $n$ ----------------------------|", {left: leftAlign + 25, top: topAlign + 60});
  var count = 0;
  while (count < arraySize) {
    var value = Math.round(Math.random() * 10) + 1;
    if (arr_values.indexOf(value) === -1) {
      arr_values[count] = value;
      count++;
    }
  }
  arr = av.ds.array(arr_values, {left: leftAlign, top: topAlign, indexed: true});
  av.step();

  //Slide 4
  av.umsg(interpret("Slide 4"));
  pseudo.show();
  av.step();

  //Slide 5
  av.umsg(interpret("Slide 5"));
  var pointer = av.pointer("$k$", arr.index(0));
  av.step();

  //Slide 6
  av.umsg(interpret("Slide 6"), {preserve: true});
  pseudo.highlight("comparison");
  av.step();

  //Slide 7
  av.umsg(interpret("Slide 7"), {preserve: true});
  pseudo.unhighlight("comparison");
  pseudo.highlight("return");
  var labelOutput =
  av.label("index  = $0$",  {top: topAlign + 15, left: leftAlign + 395 + rectWidth});
  av.step();

  //Slide 8
  av.umsg(interpret("Slide 8"));
  pseudo.unhighlight("return");
  arr.css([0], {"background-color": "green"});
  av.step();

  //Slide 9
  av.umsg(interpret("Slide 9"));
  arr.css([0], {"background-color": "white"});
  pointer.target(arr.index(arraySize - 1));
  arr.unhighlight(0);

  labelOutput.hide();
  av.step();

  //Slide 10
  av.umsg(interpret("Slide 10"), {preserve: true});
  pseudo.highlight("comparison");
  av.step();

  //Slide 11
  av.umsg("<br><br>After that the algorithm will terminate returning " + (arraySize - 1) + " as the target's index.", {preserve: true});
  pseudo.unhighlight("comparison");
  pseudo.highlight("return");
  labelOutput =
  av.label("index  = " + (arraySize - 1),  {top: topAlign + 15, left: leftAlign + 395 + rectWidth});
  av.step();

  //Slide 12
  av.umsg(interpret("Slide 12"));
  pseudo.unhighlight("return");
  var indices = [];
  for (i = 0; i < arr_values.length; i++) {
    indices[i] = i;
  }
  arr.css(indices, {"background-color": "red"});
  av.step();

  //Slide 13
  av.umsg(interpret("Slide 13"));
  arr.css(indices, {"background-color": "white"});
  pointer.target(arr.index(parseInt(arraySize / 2, 10)));
  arr.unhighlight();

  labelOutput.hide();
  av.step();

  //Slide 14
  av.umsg(interpret("Slide 14"), {preserve: true});
  pseudo.highlight("comparison");
  av.step();

  //Slide 15
  av.umsg("<br><br>After that the algorithm will terminate returning " + parseInt(arraySize / 2, 10) + " as the target's index.", {preserve: true});
  pseudo.unhighlight("comparison");
  pseudo.highlight("return");
  labelOutput =
  av.label("index  = " + parseInt(arraySize / 2, 10),  {top: topAlign + 15, left: leftAlign + 395 + rectWidth});
  av.step();

  //Slide 16
  av.umsg(interpret("Slide 16"));
  pseudo.unhighlight("return");
  for (i = 0; i <= parseInt(arraySize / 2, 10); i++) {
    arr.highlight(i);
  }
  av.step();

  //Slide 17
  av.umsg("Putting things all together...");
  rect.hide();
  arr.hide();
  nlabel.hide();
  pointer.hide();
  label.hide();
  pseudo.hide();
  labelOutput.hide();
  topAlign = 15;
  var arr1 = av.ds.array(arr_values, {left: leftAlign, top: topAlign + 20, indexed: true});
  av.pointer("$k$", arr1.index(0));
  arr1.css([0], {"background-color": "green"});
  av.label(interpret("lab2"),  {top: topAlign + 25, left: leftAlign + 395});
  var arr2 = av.ds.array(arr_values, {left: leftAlign, top: topAlign + 170, indexed: true});
  av.pointer("$k$", arr2.index(arraySize - 1));
  arr2.css(indices, {"background-color": "red"});
  av.label(interpret("lab3"),  {top: topAlign + 175, left: leftAlign + 395});

  var arr3 = av.ds.array(arr_values, {left: leftAlign, top: topAlign + 320, indexed: true});
  av.pointer("$k$", arr3.index(parseInt(arraySize / 2, 10)));
  for (i = 0; i <= parseInt(arraySize / 2, 10); i++) {
    arr3.highlight(i);
  }
  av.label(interpret("lab4"),  {top: topAlign + 325, left: leftAlign + 395});

  av.recorded();
});