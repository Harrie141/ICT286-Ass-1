let readline = require('readline-sync');
var name=[],marks =[],grade=[],percentage=[];
var highestMarks=0,HD=0,D=0,C=0,P=0,N=0;
var thisname, thismarks;
var i = 0,snum=0;
var checkname;



//returning the grade from the marks entered
function studentGrade(num){
	if(num>=80){
		HD=HD+1;
		return "HD";
	}
	else 
		if(num>=70){
			D=D+1;
			return "D";
			
		}
		else
			if(num>=60){
			C=C+1;
			return "C";
			
		}
		else
			if(num>=50){
			P=P+1;
			return "P";
		}
	else
	{	
		N=N+1;
		return "N";
	}
}
function searchingStudent(tname){
	for(let ti=0;ti<name.length;ti++){
		if(tname==name[ti]){
			snum=ti;
			checkname="Y";
			return snum;
			
		}
	}
	
}

//This is the while loop that is responsible for filling up the array;
while(true){
	thisname = readline.question("Enter the Student Name: ");
	
	if(thisname=='end'|| thisname=='END'){
		console.log("Program has ended");
		break;
	}

	else{
		name[i] = thisname.toUpperCase();
		thismarks = readline.question("Enter Marks: ");
		
			marks[i] = thismarks;
			grade[i]= studentGrade(thismarks);
			percentage[i] = thismarks.concat('% ') ;
				if(i>0){
					if(marks[highestMarks]< marks[i]){
						highestMarks = i;
					}
				}
		i=i+1;
		
	}
	
}


var table={};
table.HD={number:HD, '%':HD*100/i};
table.D={number:D, '%':D*100/i};
table.C={number:C, '%':C*100/i};
table.P={number:P, '%':P*100/i};
table.N={number:N, '%':N*100/i};
console.table(table);

console.log("\nThe best Student in the class is: ");
console.log("Name: "+name[highestMarks]);
console.log("Grade: "+ grade[highestMarks]);
console.log("Percentage: "+percentage[highestMarks]);
while(true){
	checkname="N";
	var searchname = (readline.question("Enter name to search: ")).toUpperCase();
	if(searchname=="STOP"){break;}
	searchingStudent(searchname);
	if(checkname=="Y"){
		console.log(name[snum]);
		console.log(percentage[snum]);
	}
	else{
		console.log("Name not found");
	}
}



