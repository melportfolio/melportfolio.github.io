#pragma strict

//public variables
var numberOfClicks : int = 2;
var reappearTime : float = 2.0;
var shapeColor : Color[]; //coloe array for array of random colors
var explosion : Transform; //hold our explosion prefab
var enemyPoint : int = 1;
private var storeClicks : int = 1; //point given after the enemy is destroyed

function Start () {

	RandomPosition();
	RandomColor();
	

	if(numberOfClicks <=0) {
		storeClicks = 1;
		numberOfClicks = 1;
	}
		else{

		storeClicks = numberOfClicks;
	}

	
}


/*my functions*/
		
//creates time delay between reappearance
function ReappearWaitTime(){

	//make object invisible
	gameObject.renderer.enabled = false;

	// get random color and put it inside the renderer
	
	//wait for a few seconds
	yield WaitForSeconds(reappearTime);

}
	
	//make object visible again
function Update () {
	
	if(numberOfClicks <=0) {

		if(explosion){

			//instantate or make copy of our explostion prefab
			var explosionInstantiate = Instantiate(explosion, transform.position, transform.rotation);

			//destroy explosion clone after 2 seconds
			Destroy(explosionInstantiate.gameObject, 2);
			

			//ss
			if(audio.clip){

				audio.Play();
			}

		}

		//reappear delay
		ReappearWaitTime();
	
		RandomPosition();

		gameObject.renderer.enabled = true;

		numberOfClicks = storeClicks;

	}	
}
		
//change color before reapearing
function RandomColor() {

	//get new color
	var newColor = Random.RandomRange(0, shapeColor.length);

	//render our random color
	gameObject.renderer.material.color = shapeColor[newColor];


}

function RandomPosition(){

	var startRandomPosition = Vector3(Random.RandomRange (-6,6), Random.Range(-4,4), 0);
	transform.position = startRandomPosition;


}