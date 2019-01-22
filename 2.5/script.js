var month_name = function(dt){
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];
};
document.write(month_name(new Date("1/11/2009 ")));
document.write(month_name(new Date("7/13/2014")));