material = "wood"
stepSound = "wood";
var tag = "000";
var cnt = 4;

creativeTab = "buildingBlocks";
name = "RagePlank" + tag;
id = config.getBlockId("RagePlank" + tag);

for(var lIdx=0; lIdx<cnt; lIdx++) {
   displayName[lIdx] = "Rage Plank " + tag + "-" + lIdx.toString();
   hardness[lIdx] = 1;
   resistance[lIdx] = 50;
   toolClass[lIdx] = "axe";
   harvestLevel[lIdx] = 1;
   drop[lIdx] = id.toString() + ":" + lIdx.toString() + " 1";
   var tex = "/RagePlank" + tag + "abcdefghijklmnop"[lIdx];
   textureFileXP[lIdx] = tex;
   textureFileXN[lIdx] = tex;
   textureFileYP[lIdx] = tex;
   textureFileYN[lIdx] = tex;
   textureFileZP[lIdx] = tex;
   textureFileZN[lIdx] = tex;
   addToCreative[lIdx] = true;
}