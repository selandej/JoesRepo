var isClicked = "false";

function change(img)
	{
		if(isClicked == "false")
		{
			img.size=600;
			isClicked = "true";

		}
		else
		{
			img.size=140;
			isClicked = "false";
		}
	}
