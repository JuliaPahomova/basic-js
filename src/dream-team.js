const CustomError = require("../extensions/custom-error");
module.exports = function createDreamTeam(members) {
  if ( !Array.isArray(members) || members.length === 0 || typeof(members)==='undefined') return false;
  let dreamarr = [];
  let name='';

  for (let i=0; i<members.length; i++ ){
    if(typeof (members[i])!=='string') continue;
       for (let n=0; n<members[i].length; n++ )
      {
        if (members[i].charAt(n)===' '){
        members[i]=members[i].replace(/\s+/g, '');
       } else break;
    }
      dreamarr.push(members[i].charAt(0));
  }
  let bukva;
  for (let i = 0; i < dreamarr.length; i++){
    bukva = dreamarr[i].toUpperCase();
    dreamarr[i] = bukva;
  }


  name = dreamarr.sort().join('');
  return name;
}

