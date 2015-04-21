#pragma strict

// player script

//inspector variables (public)
var tagName		: String;
var rayDistance	: float = 100.0;
var score       : int = 0; //holds player score
var totalGameTime : float = 10.0;
var LevelLoadWaitTime : float = 3.0;
var numberOfPointsToWin : int = 5;

//inspector variables (public)

//called once
function Start () {
	//invoke the countdown function every second
	InvokeRepeating("CountDown", 1.0,1.0);
}

// called to update game 
function Update () {

//use mouse button to select on game objects in the scene
if(Input.GetMouseButtonDown(0)) {
	Debug.Log("Pressed left click.");
		
	//check if mouse click collided with obects
	var hitDirection : RaycastHit;
		
	//get pixel cordinates position of the mouse
	var ray : Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		
	//if the left click collided with and object do something
	if(Physics.Raycast(ray, hitDirection, 100.0)) {
	
			//checkning to see if the object collided with tagged enemy	
			if(hitDirection.transform.tag == tagName) {
		
			Debug.Log("you hit an object");
		
		
			var enemyScript = hitDirection.transform.GetComponent(scriptEnemy);
		
			//update click
			enemyScript.numberOfClicks -= 1;

			//add points when enemy destroyed
			if (enemyScript.numberOfClicks <= 0 ){
				score += enemyScript.enemyPoint;
			}


		}
	}
		else {
			Debug.Log("Pressed left click.");
	 	}
	 }

}



/*my functions*/

//countdown our time
function CountDown (){

	if (--totalGameTime <= 0) {

			CancelInvoke("CountDown"); //buint in unity function that takes a string

			if(score >= numberOfPointsToWin) {

				// load win screen if points higher than 5
				Application.LoadLevel("sceneWin");
			}
			else{
				//load lose screen if points lower than 5
				Application.LoadLevel("sceneLose");
		}
	}

}


function OnGUI () {

	//draw a rectangle and display score
	GUI.Label( Rect(10, 10, 100, 20), "Score" + score );

	//draw a rectangle and display time
	GUI.Label( Rect(10, 20, 100, 20), "Time" + totalGameTime );
}






