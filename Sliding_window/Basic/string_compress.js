function stringCompress(chars) {
      var idx = 0;             // index of new array of size of idx
      var n = chars.length;
      
      for(var i=0; i<n;) {
        var ch = chars[i];       //stored first char
        cnt = 0;

        while(i < n && chars[i] == ch) {
            cnt ++;
            i++;
        }

        chars[idx++] = ch;       // agar cnt ki value is 1

        if(cnt > 1) {
            let str = cnt.toString();    // convert count to string form  "32"
            for(var dig of str) { 
                chars[idx++] = dig   
            }
        }
      }
      chars.length = idx;   
      return chars;
}

console.log(stringCompress(["a","a","b","b","c","c","c"]));
