function getDay(){
    const day = new Date();
    day.toLocaleDateString('en-us',{weekday: 'short'});
    return day;
}