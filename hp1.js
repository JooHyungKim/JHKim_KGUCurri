function List() {
    this.listSize = 0;              this.pos = 0;                 this.dataStore = [];
    this.clear = clear;             this.find = find;             this.toString = toString;
    this.insert = insert;           this.append = append;         this.remove = remove;
    this.front = front;             this.end = end;               this.prev = prev;
    this.next = next;               this.length = length;         this.currPos = currPos;
    this.moveTo = moveTo;           this.contains = contains;     this.get = get;
    this.getElement = getElement;    this.length = length;
}
// 배열 뒤에 요소 추가하는 함수
function append(element)      {this.dataStore[this.listSize++] = element;}
// 요소의 index를 구하는 함수 (존재하지 않는 경우 -1 반환)
function find(element) {
    for(var i=0; i<this.dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return i;
        }
    }
    return -1;
}
// 요소를 삭제하고 그 결과를 boolean 으로 반환하는 함수
function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}
// 리스트의 길이를 반환하는 함수
function length()       {return this.listSize;}
// 리스트 요소를 확인하는 함수
function toString()     {return "["+this.dataStore+"]";}
// 요소를 원하는 위치에 추가하고 그 결과를 boolean 으로 반환하는 함수
function insert(element, after){
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}
// 리스트의 모든 요소를 삭제하는 함수
function clear() {
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = 0;
}
// 리스트에 특정 요소가 있는지 그 결과를 boolean 으로 반환하는 함수
function contains(element) {
    for(var i=0;i<this.dataStore.length;i++) {
        if(this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}
// 리스트 탐색 관련 기능을 위한 pos 가 맨 앞을 보게 한다.
function front()        {this.pos = 0;}
// 리스트 탐색 관련 기능을 위한 pos 가 맨 뒤를 보게 한다.
function end()          {this.pos = this.listSize-1;}
// 리스트 탐색 관련 기능을 위한 pos 가 이전 위치를 보게 한다.
function prev() {
    if(this.pos > 0)
        --this.pos;
}
// 리스트 탐색 관련 기능을 위한 pos 가 다음 위치를 보게 한다.
function next() {
    if(this.pos < this.listSize-1) {
        ++this.pos;
    }
}
// 리스트 탐색 관련 기능을 위한 pos 가 보고 있는 현재 위치를 반환 한다.
function currPos()        {return this.pos;}
// 리스트 탐색 관련 기능을 위한 pos 가 특정 위치를 보게 한다.
function moveTo(position) {this.pos = position;}
// pos 가 보고 있는 현재 위치의 값을 반환 한다.
function getElement()     {return this.dataStore[this.pos];}
// index 로 요소를 반환하는 함수
function get(position)    {return this.dataStore[position];}
function printList(list) {
  var output = '';
  for (var i=0; i<list.listSize; ++i) {
    output += list.get(i);
  }
  alert(output);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Subject(code, name, track1, track2) {
  this.code = code;
  this.name = name;
  this.track1 = track1;
  this.track2 = track2;
};
function User(sno, name, track, lastModify, majorTotal, mathTotal, subArr) {
  this.sno = sno;
  this.name = name;
  this.track = track;
  this.lastModify = lastModify;
  this.majorTotal = majorTotal;
  this.mathTotal = mathTotal;
  this.subArr = new List();
}
var u1 = new User('201511797', '김주형', 'none', 0, 0, '2020.01.01', {});
// var userMajorTotal = u1.majorTotal;
// var userMathTotal = u1.mathTotal;
//////////////////////////////////////12학년도////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var subArr_12_1_1 = [
  new Subject('DD298', '컴퓨터과학전공및진로탐색', 'none', 'none'),
  new Subject('DD746', '창의기초설계', 'none', 'none'),
];
var subArr_12_1_2 = [
  new Subject('DD801', 'C프로그래밍', 'none', 'none')
];
var subArr_12_2_1 = [
  new Subject('DD017', '이산수학', 'softwareScience', 'none'),
  new Subject('CS343', '자료구조론', 'intelligenceInformation', 'none'),
  new Subject('DD747', '수치계산', 'none', 'none'),
  new Subject('EF624', '컴퓨터구조', 'iotembedded', 'none'),
  new Subject('DD802', '자바프로그래밍1', 'none', 'none')
];
var subArr_12_2_2 = [
  new Subject('DD748', '시스템소프트웨어', 'iotembedded', 'none'),
  new Subject('AS705', '컴퓨터네트워크', 'iotembedded', 'security'),
  new Subject('DD803', '자료구조설계', 'none', 'none'),
  new Subject('DD771', '계산이론', 'security', 'none'),
  new Subject('DD804', '자바프로그래밍2', 'softwareScience', 'none')
];
var subArr_12_3_1 = [
  new Subject('DD727', '데이터베이스', 'intelligenceInformation', 'none'),
  new Subject('DD805', '워크플로우관리시스템', 'none', 'none'),
  new Subject('DD726', '네트워크프로그래밍', 'none', 'none'),
  new Subject('DD724', '운영체제', 'iotembedded', 'security'),
  new Subject('DD703', '프로그래밍언어론', 'none', 'none'),
  new Subject('DD752', '컴퓨터교육론', 'none', 'none')
];
var subArr_12_3_2 = [
  new Subject('DD316', '소프트웨어공학', 'softwareScience', 'intelligenceInformation'),
  new Subject('DD313', '인공지능', 'intelligenceInformation', 'none'),
  new Subject('DD755', '분산및병렬처리', 'iotembedded', 'none'),
  new Subject('DD709', '컴퓨터그래픽스', 'softwareScience', 'none'),
  new Subject('DD754', '컴퓨터교재연구지도법', 'none', 'none'),
  new Subject('DD753', '웹서비스설계', 'none', 'none')
];
var subArr_12_4_1 = [
  new Subject('DD758', '컴퓨터보안', 'none', 'none'),
  new Subject('DD772', '알고리즘', 'none', 'none'),
  new Subject('DD806', '캡스톤설계', 'none', 'none'),
  new Subject('DD026', '멀티미디어처리기술', 'softwareScience')
];
var subArr_12_4_2 = [
  new Subject('DD807', '데이터베이스응용', 'softwareScience', 'intelligenceInformation'),
  new Subject('DD318', '컴파일러', 'softwareScience'),
  new Subject('DD031', '컴퓨터과학특강', 'none', 'none'),
  new Subject('DD751', '내장형시스템', 'iotembedded', 'none')
];
//////////////////////////////////////17학년도////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var subArr_17_1_1 = [
  new Subject('DD298', '컴퓨터과학전공및진로탐색', 'none', 'none'),
  new Subject('DD032', 'C프로그래밍기초', 'none', 'none')
];
var subArr_17_1_2 = [
  new Subject('DD746', '창의기초설계', 'none', 'none'),
  new Subject('DD801', 'C프로그래밍', 'none', 'none')
];
var subArr_17_2_1 = [
  new Subject('DD017', '이산수학', 'softwareScience', 'none'),
  new Subject('CS343', '자료구조론', 'intelligenceInformation', 'none'),
  new Subject('EF624', '컴퓨터구조', 'iotembedded', 'none'),
  new Subject('DD802', '자바프로그래밍', 'none', 'none'),
  new Subject('XXXXX', '웹프로그래밍', 'none', 'none')
];
var subArr_17_2_2 = [
  new Subject('DD804', '객체지향프로그래밍', 'softwareScience', 'none'),
  new Subject('DD748', '시스템소프트웨어', 'iotembedded', 'none'),
  new Subject('AS705', '컴퓨터네트워크', 'iotembedded', 'security'),
  new Subject('DD771', '계산이론', 'security', 'none'),
  new Subject('DD727', '데이터베이스', 'intelligenceInformation', 'none')
];
var subArr_17_3_1 = [
  new Subject('DD805', '워크플로우관리시스템', 'none', 'none'),
  new Subject('DD807', '데이터베이스프로그래밍', 'softwareScience', 'intelligenceInformation'),
  new Subject('DD726', '네트워크시스템프로그래밍', 'iotembedded', 'none'),
  new Subject('DD724', '운영체제', 'iotembedded', 'security'),
  new Subject('DD703', '프로그래밍언어론', 'none', 'none'),
  new Subject('DD752', '컴퓨터교육론', 'none', 'none')
];
var subArr_17_3_2 = [
  new Subject('DD034', '컴퓨터과학개별진로연구', 'none', 'none'),
  new Subject('DD316', '소프트웨어공학', 'softwareScience', 'intelligenceInformation'),
  new Subject('DD313', '인공지능', 'intelligenceInformation', 'none'),
  new Subject('DD755', '분산및병렬처리', 'iotembedded', 'none'),
  new Subject('DD709', '컴퓨터그래픽스', 'softwareScience', 'none'),
  new Subject('DD754', '컴퓨터교재연구지도법', 'none', 'none'),
  new Subject('DD758', '컴퓨터보안', 'none', 'none')
];
var subArr_17_4_1 = [
  new Subject('DD753', '웹서비스설계', 'none', 'none'),
  new Subject('DD772', '알고리즘', 'none', 'none'),
  new Subject('DD806', '캡스톤설계', 'none', 'none'),
  new Subject('DD026', '멀티미디어처리기술', 'softwareScience', 'none'),
  new Subject('XXXXX', '데이터마이닝', 'intelligenceInformation', 'none')
];
var subArr_17_4_2 = [
  new Subject('DD036', '컴퓨터비전', 'intelligenceInformation', 'none'),
  new Subject('DD031', '컴퓨터과학특강', 'none', 'none'),
  new Subject('DD751', '내장형시스템', 'iotembedded', 'none')
];
//////////////////////////////////////18학년도////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var subArr_18_1_1 = [
  new Subject('DD298', '컴퓨터공학전공및진로탐색', 'none', 'none'),
  new Subject('DD032', 'C프로그래밍기초', 'none', 'none')
];
var subArr_18_1_2 = [
  new Subject('DD746', '창의기초설계', 'none', 'none'),
  new Subject('DD801', 'C프로그래밍', 'none', 'none')
];
var subArr_18_2_1 = [
  new Subject('DD017', '이산수학', 'softwareScience', 'none'),
  new Subject('CS343', '자료구조론', 'intelligenceInformation', 'none'),
  new Subject('EF624', '컴퓨터구조', 'iotembedded', 'none'),
  new Subject('DD802', '자바프로그래밍', 'none', 'none'),
  new Subject('XXXXX', '웹프로그래밍', 'none', 'none')
];
var subArr_18_2_2 = [
  new Subject('XXXXX', '객체지향프로그래밍', 'softwareScience', 'none'),
  new Subject('DD748', '시스템소프트웨어', 'iotembedded', 'none'),
  new Subject('AS705', '컴퓨터네트워크', 'iotembedded', 'security'),
  new Subject('DD771', '계산이론', 'security', 'none'),
  new Subject('DD727', '데이터베이스', 'intelligenceInformation', 'none')
];
var subArr_18_3_1 = [
   new Subject('DD772', '알고리즘', 'none', 'none'),
   new Subject('DD316', '소프트웨어공학', 'softwareScience', 'intelligenceInformation'),
   new Subject('DD313', '인공지능', 'intelligenceInformation', 'none'),
   new Subject('DD724', '운영체제', 'iotembedded', 'security'),
   new Subject('XXXXX', '정보보호개론', 'security', 'none')
];
var subArr_18_3_2 = [
  new Subject('DD805', '비즈니스프로세스관리', 'none', 'none'),
  new Subject('DD034', '컴퓨터공학개별진로연구', 'none', 'none'),
  new Subject('DD709', '컴퓨터그래픽스', 'softwareScience', 'none'),
  new Subject('XXXXX', '모바일프로그래밍', 'none', 'none'),
  new Subject('XXXXX', '지능웹설계', 'softwareScience', 'intelligenceInformation'),
  new Subject('XXXXX', '머신러닝', 'intelligenceInformation', 'none'),
  new Subject('DD751', '내장형시스템', 'iotembedded', 'none'),
  new Subject('DD755', '분산및병렬처리', 'iotembedded', 'none'),
  new Subject('XXXXX', '네트워크보안', 'security', 'none')
];
var subArr_18_4_1 = [
  new Subject('DD703', '차세대프로그래밍언어', 'none', 'none'),
  new Subject('DD806', '캡스톤디자인', 'none', 'none'),
  new Subject('DD026', '멀티미디어처리기술', 'softwareScience', 'none'),
  new Subject('CF010', '데이터마이닝', 'intelligenceInformation', 'none'),
  new Subject('DD729', '데이터베이스프로그래밍', 'softwareScience', 'intelligenceInformation'),
  new Subject('XXXXX', '마이크로프로세서구조및활용', 'iotembedded', 'none'),
  new Subject('DD033', '네트워크시스템프로그래밍', 'iotembedded', 'none'),
  new Subject('XXXXX', '블록체인DApp설계', 'none', 'none'),
  new Subject('XXXXX', '응용보안', 'none', 'none'),
  new Subject('', '기업용소프트웨어실무', 'none', 'none')
];
var subArr_18_4_2 = [
  new Subject('DD036', '컴퓨터비전', 'intelligenceInformation', 'none'),
  new Subject('DD031', '컴퓨터과학특강', 'none', 'none'),
  new Subject('XXXXX', '소프트웨어검증', 'none', 'none'),
  new Subject('XXXXX', '컴파일러', 'softwareScience', 'none'),
  new Subject('XXXXX', '지능정보응용', 'intelligenceInformation', 'none'),
  new Subject('XXXXX', 'IoT통신시스템', 'iotembedded', 'none'),
  new Subject('XXXXX', '임베디드운영체제', 'iotembedded', 'none'),
  new Subject('XXXXX', '블록체인보안특강', 'none', 'none'),
  new Subject('XXXXX', '웹보안', 'security', 'none')
];//////////////////////////////////////수리와과학/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var subArrMathematicalScience = [
  new Subject('XXXXX', '미분적분학1', 'none', 'none'),
  new Subject('XXXXX', '미분적분학2', 'none', 'none'),
  new Subject('XXXXX', '일반통계론', 'none', 'none'),
  new Subject('XXXXX', '일반확률론', 'none', 'none'),
  new Subject('XXXXX', '일반화학및실험1', 'none', 'none'),
  new Subject('XXXXX', '일반화학및실험2', 'none', 'none'),
  new Subject('XXXXX', '일반물리및실험1', 'none', 'none'),
  new Subject('XXXXX', '일반물리및실험2', 'none', 'none'),
  new Subject('XXXXX', '일반생물및실험1', 'none', 'none'),
  new Subject('XXXXX', '일반생물및실험2', 'none', 'none'),
  new Subject('XXXXX', '수치계산', 'none', 'none')
];
//////////////////////////////////////3학점외의 과목//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var not3CreditSubject = [
  new Subject('DD298', '컴퓨터과학전공및진로탐색', 'none', 'none'),
  new Subject('DD034', '컴퓨터과학개별진로연구', 'none', 'none')
];
function showUserInformation() {
  var div = document.querySelector('.userDiv');
  var output = '<span id="userInfoForm">[사용자 정보]</span><span class="userInfo">';
  output += '<span>이름: ' + u1.name + ', 학번: ' + u1.sno + '</span>';
  div.innerHTML = output;
}
function createMathematicalScienceButton() {
  var div = document.querySelector('#mathmaticalScience');
  var output = '<ul>';
  for (var i=0; i<subArrMathematicalScience.length; ++i) {
    output += '<li><button name="';
    output += subArrMathematicalScience[i].code;
    output += '" class="subjectButton">';
    output += subArrMathematicalScience[i].code;
    output += '</br>' + subArrMathematicalScience[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade1Semester1() {
  var select = document.querySelector('#semester_grade1_semester1')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade1_semester1");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade1Semester2() {
  var select = document.querySelector('#semester_grade1_semester2')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade1_semester2");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade2Semester1() {
  var select = document.querySelector('#semester_grade2_semester1')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade2_semester1");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade2Semester2() {
  var select = document.querySelector('#semester_grade2_semester2')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade2_semester2");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade3Semester1() {
  var select = document.querySelector('#semester_grade3_semester1')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade3_semester1");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade3Semester2() {
  var select = document.querySelector('#semester_grade3_semester2')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade3_semester2");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade4Semester1() {
  var select = document.querySelector('#semester_grade4_semester1')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade4_semester1");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
function createGrade4Semester2() {
  var select = document.querySelector('#semester_grade4_semester2')
  var selectValue = select.options[select.selectedIndex].value;
  var div = document.querySelector("#grade4_semester2");
  var selectSubArr = 'subArr' + selectValue;
  subArr = eval(selectSubArr);
  var output = '<ul>';
  for (var i=0; i<subArr.length; ++i) {
    output += '<li><button name="';
    output += subArr[i].code;
    output += '" class="subjectButton';
    if (subArr[i].track1 != 'none') {
      output += " " + subArr[i].track1;
      if (subArr[i].track2 != 'none') {
        output += " " + subArr[i].track2;
      }
    }
    output += '">';
    output += subArr[i].code;
    output += '</br>';
    output += subArr[i].name;
    output += '</li>';
  }
  output += '</ul>';
  div.innerHTML  = output;
  $('.subjectButton').on('click', function(event) {
    event.stopPropagation();
    subjectButtonClicked(event);
  });
}
////////////////////////////////////////////////////////////////////////////////////////

function addSubjectArray(code) {
  u1.subArr.append(code);
  showUserSubjectArray();
}
function removeSubjectArray(code) {
  u1.subArr.remove(code);
  showUserSubjectArray();
}
function showUserSubjectArray() {
  printList(u1.subArr);
}
function addTotalGrade(code) {
  var is3 = true;
  for (var i=0; i<not3CreditSubject.length; ++i) {
    if (not3CreditSubject[i].code == code) {
      u1.majorTotal += 1;
      is3 = false;
      break;
    }
  }
  if (is3) {
    u1.majorTotal += 3;
  }
  alert("now majorTotal: " + u1.majorTotal);
}
function subjectTotalGrade(code) {
  var is3 = true;
  for (var i=0; i<not3CreditSubject.length; ++i) {
    if (not3CreditSubject[i].code == code) {
      u1.majorTotal -= 1;
      is3 = false;
      break;
    }
  }
  if (is3) {
    u1.majorTotal -= 3;
  }
  alert("now majorTotal: " + u1.majorTotal);
}
function subjectButtonClicked(event) {
  alert("Click Event Accur");
  event.stopPropagation();
  event.stopImmediatePropagation();
  var thisButton = $(event.target);
  var classes = thisButton.attr('class');
  var code = thisButton.attr('name');
  //alert(code);
  if (!classes.includes("clicked")) {
    //alert("click");
    //클릭되지않은 버튼을 클릭했을때
    thisButton.css('background-color', "#FFD5A6");
    thisButton.css('border-style', 'solid');
    addSubjectArray(code);
    addTotalGrade(code);
    thisButton.addClass('clicked');
  }
  else {
    //alert("unclick");
    //클릭된 버튼을 클릭 해제
    thisButton.removeAttr('style');
    removeSubjectArray(code);
    subjectTotalGrade(code);
    thisButton.removeClass('clicked');
  }
  //alert(classes);
}
function saveAndGoToInfoPage() {
  alert("SAVED");
  window.location.href="hp2.html";
}
$(function(){
  //alert(u1.sno + u1.name + u1.track + u1.lastModify + u1.subArr);
  showUserInformation();
  createMathematicalScienceButton();
});

function clicksoftwareScienceButton(event) {
  $(event.target).css('border-color', '#F5A9F2');
  $('.softwareScience').css('border-color', '#F5A9F2');
}
function clickIntelligenceInformationButton(event) {
  $(event.target).css('border-color', '#81F781');
  $('.intelligenceInformation').css('border-color', '#81F781');
}
function clickIotembeddedButton(event) {
  $(event.target).css('border-color', '#F2F5A9');
  $('.iotembedded').css('border-color', '#F2F5A9');
  $('.iotembedded.security').css('border-top-color', '#F2F5A9');
  $('.iotembedded.security').css('border-left-color', '#F2F5A9');
  $('.iotembedded.security').css('border-bottom-color', '#F78181');
  $('.iotembedded.security').css('border-right-color', '#F78181');
}
function clickSecurityButton(event) {
  $(event.target).css('border-color', '#F78181');
  $('.security').css('border-color', '#F78181');
  $('.iotembedded.security').css('border-top-color', '#F2F5A9');
  $('.iotembedded.security').css('border-left-color', '#F2F5A9');
  $('.iotembedded.security').css('border-bottom-color', '#F78181');
  $('.iotembedded.security').css('border-right-color', '#F78181');

}
