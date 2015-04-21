#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.Label(Rect(200, 10, 100, 40), "You Win!");

	if (GUI.Button(Rect(200, 100, 90, 50), "PLay Again!")){
		
		print("start game");

		Application.LoadLevel ("sceneLevel");
	}

		// quit buttion
	if (GUI.Button(Rect(200, 200, 90, 50), "Exit Game")){
		
		print("exit");

		Application.Quit ();
	
	}

}