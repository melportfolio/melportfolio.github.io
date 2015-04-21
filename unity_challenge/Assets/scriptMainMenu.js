#pragma strict

function Start () {

}

function Update () {

}


function OnGUI () {

	if (GUI.Button(Rect(10, 10, 90, 50), "Start Game")){
		
		print("start game");

		Application.LoadLevel ("sceneLevel");
	}

	// quit buttion
	if (GUI.Button(Rect(10, 10, 90, 50), "Start Game")){
		
		print("exit");

		Application.Quit ();
	
	}

}