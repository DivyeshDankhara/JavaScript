// --->  word length counter

function Str_Len_Count(string) { 

    let count=0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] != " " ) {
          count++;
        }
      }
      document.getElementById('result').textContent = 'Word Count: ' + count;
      return count;
}