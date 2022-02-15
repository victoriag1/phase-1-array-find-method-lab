const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record){
    const chiefsWin = record.find(win => win.result === "W")
   if (chiefsWin) {
return chiefsWin.year
   }
}    
//const chiefsWin =(record) => record.find(result => result === "W")



