// Function "myDictionary"
function vehicleSpecs()
{
    var vehicle = 
    {
        yearModel: "2024 Ranger Raptor",
        autoMaker: "Ford",
        engine: "3.0L Twin Turbo EcoBoost",
        Transmission: "10 Speed Automatic Transmission",
        power: "405HP 430lb-ft of Torque",
        driveSystem: "4X4 Off Road",
        tires: "33-inch BF Goodrich KO3 All Terrain",
        suspension: "Off-Road Suspension",
        color: "Black",
    };
    /* Delete driveSystem: Will return as "undefined", since 
    data object no longer exists in the dictionary*/
    delete vehicle.driveSystem;

    // Calling in the ID to retreive data object from the JS 
    document.getElementById( "dictionary" ).innerHTML = vehicle.driveSystem;
}