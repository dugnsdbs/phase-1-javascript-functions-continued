// code your solution here
let saturdayFun = function(activity = "This Saturday, I want to roller-skate!"){
  if(activity === "bathe my dog"){
    return "This Saturday, I want to bathe my dog!";
  }else{
    return  "This Saturday, I want to roller-skate!"
  }
  }

  let mondayWork = function (activity = "This Monday, I will go to the office."){
    if(activity === "work from home"){
      return "This Monday, I will work from home.";
    }else{
      return "This Monday, I will go to the office.";
    }
  }

  let wrapAdjective = function (highLight,string = "You are"){
    return function (special){
      return `${string} ${highLight}${special}${highLight}!`;
    };
}

wrapAdjective ("*")("a hard worker") 