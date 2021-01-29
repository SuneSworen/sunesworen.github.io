import {Weapon} from "./modules/Weapon.mjs" 
import {weaponsData } from "Weapons.json";

for(var weapon in weaponsData){
    document.write("<p>" + weaponsData[weapon].name + "</p>");
}