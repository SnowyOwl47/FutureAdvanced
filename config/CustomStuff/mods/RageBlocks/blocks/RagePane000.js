material = "iron"
stepSound = "metal";
var tag = "000";
var cnt = 7;

creativeTab = "buildingBlocks";
name = "RagePane" + tag;
id = config.getBlockId("RagePane" + tag);

for(var lIdx=0; lIdx<cnt; lIdx++) {
   displayName[lIdx] = "Rage Pane " + tag + "-" + lIdx.toString();
   hardness[lIdx] = 1;
   resistance[lIdx] = 50;
   toolClass[lIdx] = "pickaxe";
   harvestLevel[lIdx] = 1;
   drop[lIdx] = id.toString() + ":" + lIdx.toString() + " 1";
   var tex = "/RagePane" + tag + "abcdefghijklmnop"[lIdx];
   textureFileXP[lIdx] = tex;
   textureFileXN[lIdx] = tex;
   textureFileYP[lIdx] = tex;
   textureFileYN[lIdx] = tex;
   textureFileZP[lIdx] = tex;
   textureFileZN[lIdx] = tex;
   addToCreative[lIdx] = true;
}