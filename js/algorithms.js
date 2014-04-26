//assume dept_tbl is our department table
//eecs 111 5.1 5.0 2.4 ...
//assume student object with two tables
//assume we have an enrolled table
//dept num
//assume we have a taken table
//dept num gpa
//eecs 111 3.3

function compute_distance (tbl1, tbl2)

{
	if (tbl1.length!=tbl2.length)
		{
			//ERROR
			return -1;
		}
	var returnme=0;
	var first=0;
	var second=0;
	for(int i=0; i<tbl1.length;i++)
	{

		first=Math.pow(tbl1[i],2);
		second=Math.pow(tbl2[i],2);
		if (first>second)
			returnme+=first-second;
		else
			returnme+=second-first;
	}
	return Math.pow(returnme, 0.5);

}











function recommend_classes (dept_tbl, student_enrolled, student_taken, requested_dpt)
{

	var recommedations=[];

	//first build student description
	//calculate total ratings for classes taken
	var classes_taken=0;
	//counts classes taken

	var average_difference=0;
	//stores the avg distance from the average point

	//we store a 2d array of the average ratings and each individual rating
	var classes_scores=[[],[],[],[],[],[],[]];



	var classes_scores_average=[0,0,0,0,0,0,0]
	//iterate through all the classes
	//checks if the student has taken it
	for (var i = 0; i < dept_tbl.length; i++)
	{
		//iterates through every class ever
		var department=dept_tbl[i][0];
		var number=dept_tbl[i][1];
		//gets identifying information for the class
		//now query the student_taken table
		for (var x=0;x<student_taken.length;i++)
		{
			//iterates through the classes the student has taken
			if (student_taken[x][0]==department && student_taken[x][1]==number)
			{
				//if there is a match
				classes_taken++;
				//found a class he takes
				for (var counter=0; counter<7; counter++)
				{
					//pushes the score for that class into his classes_scores array
					classes_scores[counter].push(dept_tbl[i][counter+2]);
				}
			}
		}
	}

	//we now have a list of the scores for the classes the user took
	//classes_scores






	//we now need to compute averages
	for(var place=0; place<7; place++)
	{
		for(var counter=0; counter<classes_taken;counter++)
		{
			classes_scores_average[place]+=classes_scores[place][counter];
		}
		classes_scores_average[place]/=classes_taken;
	}
	//the average score is now computed






	//now how do we deterine the radius?
	//compute average radius by looping distance formula

	for (var counter=0; counter<classes_taken; counter++)
	//loops over classes taken
	{
	var temp=[];
		//this for loop fills temp
		for (var counter2=0; counter2<7; counter2++)
		{
			//loops over each rating
			temp.push(classes_scores[counter2][counter]);
			//gets a row in the 2d array
		}
	average_difference+=compute_distance(classes_scores_average,temp);
	}
	average_difference/=classes_taken;

	average_difference*=1.5;
		
	

	var arr=[];

	//we now have the average radius
	//now go through dpt_tbl
	//
	if (requested_dpt=="NULL")
	{
		for( var i=0; i<dpt_tbl.length; i++)
		{
			arr=[];

			//iterates over all the classes

			//now I iterate through the particular class
			for (var counter=0; counter<7; counter++)
				{
					//pushes the score for that class into his classes_scores array
					arr.push(dept_tbl[i][counter+2]);
				}
			var dist = compute_distance(classes_scores_average,arr);
			if (dist<average_difference)
			{
				//department, number, distance, title, inst, Loc

				recommedations.push({dept_tbl[i][0],dept_tbl[i][1],average_difference-dist,dept_tbl[i][9],dept_tbl[i][10],dept_tbl[i][1]});
				//suggest this class
			}
			//test distances
		}
		//search all classes
	}
	else
	{
		//we have a request
		for( var i=0; i<dpt_tbl.length; i++)
		{
			arr=[];

			if(dpt_tbl[i][0]==requested_dpt)
			{
				

				//iterates over all the classes

				//now I iterate through the particular class
				for (var counter=0; counter<7; counter++)
					{
						//pushes the score for that class into his classes_scores array
						arr.push(dept_tbl[i][counter+2]);
					}
				var dist = compute_distance(classes_scores_average,arr);
				if (dist<average_difference)
				{
					//department, number, distance, title, inst, Loc

					recommedations.push({dept_tbl[i][0],dept_tbl[i][1],average_difference-dist,dept_tbl[i][9],dept_tbl[i][10],dept_tbl[i][1]});
					//suggest this class
				}
			}
			//test distances
		}

	}
	return recommedations;
	//we now have all the scores for the classes
	//
}