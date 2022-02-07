var Months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        var Days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'];
    
        function getDate(){
            let currentDate = new Date();
            document.getElementById("day").innerHTML= Days[currentDate.getDay()-1];
            document.getElementById("date").innerHTML=currentDate.getDate();
            document.getElementById("month").innerHTML=Months[currentDate.getMonth()];
            document.getElementById("year").innerHTML=currentDate.getFullYear(); 
            document.getElementById("time").innerHTML="("+currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()   + ")";

            
        }
        function getPageLocation(){
            document.getElementById("demo").innerHTML = "Page location is: " + window.location.href;
        }
        function getUseragent(){
            document.getElementById("useragent").innerHTML = "User-Agent: "+ window.navigator.userAgent;
        }

        function getTotalHyperlinks(){
            document.getElementById("hyperlink").innerHTML= "Total number of hyperlinks: "+ document.getElementsByTagName('a').length;
        }
        function getTotalForms(){
            document.getElementById("form").innerHTML= "Total number of forms: "+ document.getElementsByTagName('form').length;
        }
        function Loadall(){
            getDate();
            getTotalHyperlinks();
            getTotalForms();
            getPageLocation();
            getUseragent();
        }