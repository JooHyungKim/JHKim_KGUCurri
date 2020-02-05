function User(sno, name, track, lastModify, totalCredits, subMajArr, subMathArr, subSEArr, subAIArr, subIEArr, subBSArr) {
  this.sno = sno;
  this.name = name;
  this.track = track;
  this.lastModify = lastModify;
  this.totalCredits = totalCredits;
  this.subMajArr = subMajArr;
  this.subMathArr = subMathArr;
  this.subSEArr = subSEArr;
  this.subAIArr = subAIArr;
  this.subIEArr = subIEArr;
  this.subBSArr = subBSArr;
}

var user = new User('201511797', '김주형', 'intelligenceInformation', '2020.02.02', [30, 9,
          3, 12, 6, 3], ['DD122', 'DD213', 'DD212', 'DD533', 'DD121', 'DD521'], ['XXXXX', 'XXXXX', 'XXXXX'],
          ['DD732'], ['DD215', 'DD533', 'DD255', 'DD644'], ['DD631', 'DD126'], ['DD744']);

var progressBars = ['major', 'math', 'SE', 'AI', 'IE', 'BS'];
var creditsLimit = [67, 24, 21, 21, 21, 21];

function showUserInformation() {
  var div = document.querySelector('.userDiv');
  var output = '<span id="userInfoForm">[사용자 정보]</span><span class="userInfo">';
  output += '<span>이름: ' + user.name + ', 학번: ' + user.sno + '</span>';
  div.innerHTML = output;
}
function setBars() {
  alert("func");
  if (user.totalCredits.length != progressBars.length) {
    alert("Array Size Error");
    return;
  }
  for (var i=0; i<user.totalCredits.length; ++i) {
    var outputBar = "";
    var outputRate = "";
    var width = 0;
    outputBar = "#" + progressBars[i] + "Bar";
    outputRate = "#" + progressBars[i] + "Rate";
    width = Math.round(user.totalCredits[i] / creditsLimit[i] * 100);
    $(outputBar).attr('style', ('width:'+width+'%'));
    document.querySelector(outputRate).innerHTML = width + "%완료";
  }
}
function setSubjects() {
  document.querySelector("#majorArea").innerHTML = "이수과목코드: " + user.subMajArr;
  document.querySelector("#mathArea").innerHTML = "이수과목코드: " + user.subMathArr;
  document.querySelector("#SEArea").innerHTML = "이수과목코드: " + user.subSEArr;
  document.querySelector("#AIArea").innerHTML = "이수과목코드: " + user.subAIArr;
  document.querySelector("#IEArea").innerHTML = "이수과목코드: " + user.subIEArr;
  document.querySelector("#BSArea").innerHTML = "이수과목코드: " + user.subBSArr;
}
$(function(){
    showUserInformation();
    setBars();
    setSubjects();
});
