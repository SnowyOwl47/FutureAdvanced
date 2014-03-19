material = "rock"
stepSound = "stone";
var tag = "000";
var cnt = 12;

creativeTab = "buildingBlocks";
name = "RageBrick" + tag;
id = config.getBlockId("RageBrick" + tag);

for(var lIdx=0; lIdx<cnt; lIdx++) {
   displayName[lIdx] = "Rage Brick " + tag + "-" + lIdx.toString();
   hardness[lIdx] = 1;
   resistance[lIdx] = 50;
   toolClass[lIdx] = "pickaxe";
   harvestLevel[lIdx] = 1;
   drop[lIdx] = id.toString() + ":" + lIdx.toString() + " 1";
   var tex = "/RageBrick" + tag + "abcdefghijklmnop"[lIdx];
   textureFileXP[lIdx] = tex;
   textureFileXN[lIdx] = tex;
   textureFileYP[lIdx] = tex;
   textureFileYN[lIdx] = tex;
   textureFileZP[lIdx] = tex;
   textureFileZN[lIdx] = tex;
   addToCreative[lIdx] = true;
}