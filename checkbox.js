$(document).ready(function() {
    createList();
  });
  var courselist = [{
  "Type": "Communication Core",
  "Course": "ENC1101",
  "Name": "Introduction to Composition",
  },{
      "Type" : "Mathematics Core", 
    "Course": "MAC1105",
    "Name": "College Algebra",
    "OtherCourses" : ["CHM1020"]
  },{
      "Type" : "Natural Sciences Core", 
    "Course": "AST1002",
    "Name": "Astronomy (Requires MAC1105)",
    "PreReq": ["MAC1105"]
  },{
      "Type" : "Natural Sciences Core", 
    "Course": "DSC1005",
    "Name": "Survey of Biological Sciences (For Non-Science Majors)"
  }, {
      "Type" : "Natural Sciences Core", 
    "Course": "CHM1020",
    "Name": "Chemistry in Society"
  },{
      "Type" : "Natural Sciences Core", 
    "Course": "EVR2001",
    "Name": "Introduction to Environmental Science"
  },{
  "Type" : "Natural Sciences Core", 
    "Course": "PHY1020",
    "Name": "Energy and its Environmental Effects (Requires MAC1105)",
    "PreReq": ["MAC1105"]
  },{
  "Type": "Humanities Core", 
  "Course": "ARH1000", 
  "Name": "Art Appreciation"
  },{
  "Type": "Humanities Core", 
  "Course": "HUM2020", 
  "Name": "Introduction to Humanities (Requires ENC1101)",
  "PreReq": ["ENC1101"]
  },{
  "Type": "Humanities Core", 
  "Course": "LIT2000", 
  "Name": "Literature and Culture (Requires ENC1101)",
  "PreReq": ["ENC1101"]
  },{
  "Type": "Humanities Core", 
  "Course": "MUL2010", 
  "Name": "Music Appreciation"
  },{
  "Type": "Humanities Core", 
  "Course": "PHI2010", 
  "Name": "Introduction to Philosophy"
  },{
  "Type": "Humanities Core", 
  "Course": "THE1000", 
  "Name": "Theatre Appreciation"
  },{
  "Type": "Social Sciences Core", 
  "Course": "AMH2020", 
  "Name": "United States History 1865 to Present"
  },{
  "Type": "Social Sciences Core", 
  "Course": "POS2041", 
  "Name": "American Federal Government"
  },{
  "Type": "Program Specific Courses", 
  "Course": "CET2154", 
  "Name": "A+ Computer Repair"
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2360", 
  "Name": "C# Programming (Requires COP1000)",
  "PreReq": ["COP1000"]
  },{
  "Type": "Program Specific Courses", 
  "Course": "CET1600", 
  "Name": "Network Plus"
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP1000", 
  "Name": "Principles of Computer Programming"
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2654", 
  "Name": "iPhone/iPad Programming (or COP2660, requires COP2800)",
  "PreReq": ["COP2800"]
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2660", 
  "Name": "Programming for Mobile Devices (or COP2654, requires COP2800)",
  "PreReq": ["COP2800"]
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2800", 
  "Name": "Computer Programming Java (Requires COP1000)",
  "PreReq": ["COP1000"]
  },{
  "Type": "Program Specific Courses", 
  "Course": "CTS1851", 
  "Name": "Internet Web Foundations (HTML, CSS)"
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2700", 
  "Name": "Introduction to Database Management"
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2949", 
  "Name": "Cooperative Educational Experience in Computer Programming"
  },{
  "Type": "Program Specific Courses", 
  "Course": "EGS1000", 
  "Name": "Professional Performance for Technicians"
  },{
  "Type": "Program Specific Courses", 
  "Course": "CEN2002", 
  "Name": "Software Design and Development (Requires COP2360 OR COP2800 OR COP2842 AND COP2700)",
  "PreReq": ["COP2700"],
  "OtherPreReq": ["COP2360", "COP2800", "COP2842"]
  },{
  "Type": "Program Specific Courses", 
  "Course": "COP2842",
  "Name": "Web Scripting (Requires COP1000 AND COP2700)",
  "PreReq": ["COP2700", "COP1000"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CTS2321",
  "Name": "Linux Fundamentals"
  },{
  "Type": "Program Specific Electives", 
  "Course": "CIS2350",
  "Name": "Principles of Information Assurance (Requires CET1600)",
  "PreReq": ["CET1600"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CTS2214",
  "Name": "Project Management w/Microsoft Project (Requires CGS2100)",
  "PreReq": ["CGS2100"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CET2660",
  "Name": "Fundamentals of Cybersecurity Analysis (Requires CET1600)",
  "PreReq": ["CET1600"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CGS2820",
  "Name": "Web Programming (JavaScript, Ajax, ASP.Net)(Requires COP1000 and CTS1851)",
  "PreReq": ["COP1000", "CTS1851"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CAP2741",
  "Name": "Data Visualization(Requires COP2700)",
  "PreReq": ["COP2700"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CTS2361",
  "Name": "SharePoint Users"
  },{
  "Type": "Program Specific Electives", 
  "Course": "CTS2441",
  "Name": "Database Administration(Requires COP2700)",
  "PreReq": ["COP2700"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "COP2071",
  "Name": "Querying Database(Requires COP2700)",
  "PreReq": ["COP2700"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "DIG2100",
  "Name": "Web Design I(Requires CTS1851, DIG1109 or GRA1543)",
  "PreReq": ["CTS1851"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CAP2023",
  "Name": "Introduction to Game Programming (Requires COP1000)",
  "PreReq": ["COP1000"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CGS2100",
  "Name": "Microcomputer Applications"
  },{
  "Type": "Program Specific Electives", 
  "Course": "EET1011C",
  "Name": "Introduction to Electrical Circuits and Lab(Requires MAC1105)",
  "PreReq": ["MAC1105"]
  },{
  "Type": "Program Specific Electives", 
  "Course": "CET1112C",
  "Name": "Digital Fundamentals and Lab"
  }]
  
  
  function createList() {
  
    for (var i = 0; i < courselist.length; i++) {
  
      var _disabled = true;
      if (courselist[i].PreReq == null) {
        _disabled = false;
      }
  
      addCheckbox(courselist[i].Name, courselist[i].Course, courselist[i].Type, _disabled)
    }
  }
  
  function addCheckbox(_name, _id, _type, _disabled) {
    var container = $('#demo');
  
  
    $('<input />', {
      type: 'checkbox',
      id: _id,
      value: _name,
      disabled: _disabled,
      class: 'checkbox'
    }).appendTo(container);
  
    $('<label />', {
      'for': _id,
      text: _type + " - " + _id + ', ' + _name 
    }).appendTo(container);
  
    container.append('<br/>');
  }
  
  $("#demo").delegate("input", "click", function() {
    CC();
  });
  
  function pr(course, index) {
    var checked = true;
  
    var courseId = course.Course;
    var c1 = 0; 
    var c2 = 0;
    var classtype = course.OtherCourses; 
    var thisEnable = "y"; 
    var preReqArray = course.PreReq;
    var OtherPreReqArray = course.OtherPreReq; 
    
    if(classtype){
    for (var i = 0; i < classtype.length; i++){
    if (isChecked(classtype[i])){
    Disable(courseId); 
    }
    else Enable(courseId); 
  }}
  
  
    if (preReqArray == null) return;
   
    for (var i = 0; i < preReqArray.length; i++) {
      if (!isChecked(preReqArray[i])) {
        checked = false;
      }
    }
    if (checked) Enable(courseId)
    else Disable(courseId);
  }
  
  function CC() {
    courselist.forEach(pr);
  }
  
  function isChecked(item) {
    return (document.getElementById(item).checked == true);
  }
  
  function Enable(selection) {
    document.getElementById(selection).disabled = false;
  }
  
  function Disable(selection) {
    document.getElementById(selection).disabled = true;
  }