export function EMDate(dateTime){

    const d = new Date(dateTime);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    return mo+' '+da+', '+ye;
}

export function EMExplode(string){
    return string.split(',')
}

export function EMStrToSlug(str){
  str = str.replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ').toLowerCase();  //replace all special characters | symbols with a space
  str = str.replace(/^\s+|\s+$/gm,''); // trim spaces at start and end of string
  str = str.replace(/\s+/g, '-');	// replace space with dash/hyphen
  return str;
}