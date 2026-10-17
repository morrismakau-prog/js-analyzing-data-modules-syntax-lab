require('datejs');

function combineUsers() {
  var flatUserList = [];
  for(var i = 0; i < arguments.length; i++) {
    var currentArray = arguments[i];
    for (var j = 0; j < currentArray.length; j++) {
     flatUserList.push(currentArray[j]); 
    }
  }
  
  return {
    users: flatUserList,
    merge_date: Date.today().toString("M/d/yyyy")
  };
}
module.exports = {
   combineUsers: combineUsers,
   merge_date: Date.today().toString("M/d/yyyy")
};
// Trigger CodeGrade















