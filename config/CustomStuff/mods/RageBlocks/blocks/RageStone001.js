name = "RageStone001";
id = config.getBlockId("RageStone001");
material = "rock"
stepSound = "stone";
creativeTab = "buildingBlocks";

for(var i=0; i<16; i++) {
   displayName[i] = "Stone";
   hardness[i] = 1;
   resistance[i] = 50;
   toolClass[i] = "pickaxe";
   harvestLevel[i] = 1;
   canSilkHarvest[i] = false;
   drop[i] = "4 0-1";
   light[i] = i;
   textureFileXP[i] = "/stone.png";
   textureFileXN[i] = "/stone.png";
   textureFileYP[i] = "/stone.png";
   textureFileYN[i] = "/stone.png";
   textureFileZP[i] = "/stone.png";
   textureFileZN[i] = "/stone.png";
   addToCreative[i] = true;
}