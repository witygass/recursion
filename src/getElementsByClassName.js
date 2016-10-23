// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodesWithTargetClass = [];
   function tryAdding(node) {
     if (!!node.classList){
       for (var i = 0; i < node.classList.length; i++){
         node.classList[i] === className ? nodesWithTargetClass.push(node) : 0
       }
     }
     for (var j = 0; j < node.childNodes.length; j++) {
       tryAdding(node.childNodes[j]);
     }
   }
   tryAdding(document.body);
   return nodesWithTargetClass;
};
