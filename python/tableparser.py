courses = []
fyle = open("table.txt")
for lyne in fyle :
	# Do string processing here
	arr_parsed = lyne.split(":")
	courses.append(arr_parsed)
fyle.close()

#checkpoint
for i in range(0, len(courses)):
	test = courses[i]
	for j in range(0, len(test)):
		print test[j]
	print "\n"
