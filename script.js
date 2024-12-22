let body = document.body;
let masseg = document.getElementById('masseg');
let SN = Math.floor(Math.random() * 100) + 1;

document.getElementById('guessbutton').addEventListener("click", function () {
    let userguess = parseInt(document.getElementById('ad').value);
    document.getElementById('ad').value = "";

    if (userguess === '' || userguess > 100 || userguess < 1) {
        masseg.innerHTML = "המספר לא תקין";
        masseg.className = "error";  // צביעת הודעת שגיאה
    } else {
        if (userguess === SN) {
            masseg.innerHTML = "אתה ניצחתה!";
            masseg.className = "success";  // צביעת הודעת הצלחה
            SN = Math.floor(Math.random() * 100) + 1;
            body.style.background = "green";  // שינוי צבע הרקע להצלחה
        } else if (userguess < SN) {
            masseg.innerHTML = "קטן מדי";
            masseg.className = "warning";  // צביעת הודעת אזהרה
            body.style.background = "red";  // שינוי צבע הרקע לאדום
        } else {
            masseg.innerHTML = "גדול מדי";
            masseg.className = "warning";  // צביעת הודעת אזהרה
            body.style.background = "red";  // שינוי צבע הרקע לאדום
        }
    }
});
