//assume dept_tbl is our department table
//assume student object with two tables
//assume we have an enrolled table
//dept num
//assume we have a taken table
//dept num gpa
//eecs 111 3.3



function predict_classes (dept_tbl, student_enrolled, student_taken, requested_dpt)
{
	//first build student description
	//calculate total ratings for classes taken
	var classes_taken=0;
	//stores classes taken
	classes_scores=[[],[],[],[],[],[],[]];
	classes_scores_average=[0,0,0,0,0,0,0]
	//iterate through all the classes
	//checks if the student has taken it
	for ( i = 0; i < dept_tbl.length; i++)
	{
		//iterates through the classes table, gets a class identifier
		department=dept_tbl[i][0];
		number=dept_tbl[i][1];

		//now query the student_taken table
		for ( x=0;x<student_taken.length;i++)
		{
			if (student_taken[x][0]==department && student_taken[x][1]==number)
			{
				classes_taken++;
				//found a class he takes
				for (counter=0; counter<7; counter++)
				{
					classes_scores[counter].push(dept_tbl[i][counter+2]);
					//gets a total score
				}
			}
		}

		for (counter=0; counter<classes_scores.length;counter++)
		{
			classes_scores[counter]/=classes_taken;
		}	
	//we now have all the scores for the classes
	//



	}
}