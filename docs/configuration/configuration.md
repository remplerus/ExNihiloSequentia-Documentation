# Configuration File

Below is a detailed description of what a value does in the configuration file.

:::info
A tick is 1/20 of a second.<br />
A bucket holds 1000 millibuckets.
:::

## Infested Leaves

| Value                       | Description                                                    | Default | Range       |
| :-------------------------- | :------------------------------------------------------------- | :------ | :---------- |
| `secondsToTransformLeaves`  | Number of seconds to for leaves to become completely infested. | 10      | > 1         |
| `ticksBetweenSpreadAttempt` | Number of ticks between infested leave spread attempts.        | 100     | > 1         |
| `spreadChance`              | Percentage of the time that infested leaves will spread.       | 0.3     | 0.001 – 1.0 |

## Barrel

| Value                   | Description                                            | Default | Range      |
| :---------------------- | :----------------------------------------------------- | :------ | :--------- |
| `barrelNumberOfBuckets` | Number of buckets the barrel will hold.                | 1       | > 1        |
| `woodBarrelMaxTemp`     | The max temperature a barrel can accept; water is 300. | 300     | > 0        |
| `showParticles`         | Should the barrel create particles?                    | true    | true/false |
| `rainFillAmount`        | How much fluid rain will fill per iteration.           | 2       | > 1        |

### Mob Spawn

| Value                | Description                      | Default | Range |
| :------------------- | :------------------------------- | :------ | :---- |
| `secondsToSpawnMobs` | Number of seconds to spawn mobs. | 10      | > 1   |

### Compost

| Value              | Description                                                    | Default | Range |
| :----------------- | :------------------------------------------------------------- | :------ | :---- |
| `secondsToCompost` | Number of seconds to compost.                                  | 10      | > 1   |
| `maxSolidAmount`   | How much solids need to be in barrel before composting starts. | 1000    | > 1   |

### Fluid Transform

| Value                     | Description                            | Default | Range |
| :------------------------ | :------------------------------------- | :------ | :---- |
| `secondsToTransformFluid` | Number of seconds to transform fluids. | 10      | > 1   |

## Pebble

| Value          | Description                                     | Default | Range |
| :------------- | :---------------------------------------------- | :------ | :---- |
| `pebbleDamage` | How much half hearts damage a pebble should do. | 0       | > 0   |

## Ore

| Value                                                                                                                                                                                                                      | Description                                                                                                 | Default | Range      |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :------ | :--------- |
| `enableOreOverride`                                                                                                                                                                                                        | Allows ores to be enabled or disabled by this config file.                                                  | false   | true/false |
| `enablePlatinum`<br /> `enableUranium`<br /> `enableGold`<br /> `enableSilver`<br /> `enableCopper`<br /> `enableNickel`<br /> `enableIron`<br /> `enableAluminum`<br /> `enableLead`<br /> `enableZinc`<br /> `enableTin` | Enable ore type pieces, chunks and ingots if they exist. `enableOreOverride` must be true for this to work. | true    | true/false |

## Debug

| Value                | Description          | Default | Range      |
| :------------------- | :------------------- | :------ | :--------- |
| `enableDebugLogging` | Enable extra logging | false   | true/false |

## Crook

| Value                      | Description                                                                                                    | Default | Range |
| :------------------------- | :------------------------------------------------------------------------------------------------------------- | :------ | :---- |
| `maxBonusStringCount`      | Maximum additional string that a crook will drop from infested leaves in addition to the minimum string count. | 3       | > 0   |
| `minStringCount`           | Minimum string that a crook will drop from infested leaves.                                                    | 2       | > 1   |
| `vanillaDropSimulateCount` | Number of times the crook will "break" a leaf block to get drops.                                              | 3       | > 1   |

## Durability

### Hammers

| Value                  | Description                    | Default | Range |
| :--------------------- | :----------------------------- | :------ | :---- |
| `hammerWoodValue`      | Durability of Wooden Hammer    | 128     | > 1   |
| `hammerStoneValue`     | Durability of Stone Hammer     | 256     | > 1   |
| `hammerNetheriteValue` | Durability of Netherite Hammer | 8192    | > 1   |
| `hammerIronValue`      | Durability of Iron Hammer      | 512     | > 1   |
| `hammerDiamondValue`   | Durability of Diamond Hammer   | 4096    | > 1   |
| `hammerGoldValue`      | Durability of Gold Hammer      | 64      | > 1   |

### Crooks

| Value                | Description                  | Default | Range |
| :------------------- | :--------------------------- | :------ | :---- |
| `crookDiamondValue`  | Durability of Diamond Crook  | 2048    | > 1   |
| `crookIronValue`     | Durability of Iron Crook     | 256     | > 1   |
| `crookBoneValue`     | Durability of Bone Crook     | 256     | > 1   |
| `crookStoneValue`    | Durability of Stone Crook    | 256     | > 1   |
| `crookGoldValue`     | Durability of Gold Crook     | 32      | > 1   |
| `crookGraniteValue`  | Durability of Granite Crook  | 256     | > 1   |
| `crookAndesiteValue` | Durability of Andesite Crook | 256     | > 1   |
| `crookDioriteValue`  | Durability of Diorite Crook  | 256     | > 1   |
| `crookWoodValue`     | Durability of Wooden Crook   | 128     | > 1   |

### Meshes

| Value                | Description                                                                | Default | Range |
| :------------------- | :------------------------------------------------------------------------- | :------ | :---- |
| `meshNetheriteValue` | Durability of Netherite Mesh (Only useful if `enableMeshDurability` is true) | 2031    | > 1   |
| `meshDiamondValue`   | Durability of Diamond Mesh (Only useful if `enableMeshDurability` is true)   | 1561    | > 1   |
| `meshIronValue`      | Durability of Iron Mesh (Only useful if `enableMeshDurability` is true)      | 250     | > 1   |
| `meshStringValue`    | Durability of String Mesh (Only useful if `enableMeshDurability` is true)    | 59      | > 1   |
| `meshEmeraldValue`   | Durability of Emerald Mesh (Only useful if `enableMeshDurability` is true)   | 1561    | > 1   |
| `meshFlintValue`     | Durability of Flint Mesh (Only useful if `enableMeshDurability` is true)     | 131     | > 1   |

## Crucible

| Value                     | Description                              | Default | Range |
| :------------------------ | :--------------------------------------- | :------ | :---- |
| `ticksBetweenMelts`       | Ticks between melting operations         | 20      | > 1   |
| `crucibleNumberOfBuckets` | Number of buckets the crucible will hold | 4       | > 1   |

### Wooden Crucible

| Value          | Description                                                          | Default | Range |
| :------------- | :------------------------------------------------------------------- | :------ | :---- |
| `woodHeatRate` | Heat rate the Wood Crucible will use regardless of heat source below | 2       | > 1   |

## Sieve

| Value                  | Description                                                           | Default | Range      |
| :--------------------- | :-------------------------------------------------------------------- | :------ | :--------- |
| `flattenSieveRecipes`  | Sieve will get results for all mesh tiers below the one in the sieve  | true    | true/false |
| `maxSieveClicks`       | The number of sieve clicks required to sieve a block.                 | 10      | 1 – 10     |
| `enableMeshDurability` | Meshes will have durability and can break, but don't stack.           | true    | true/false |
| `meshStackSize`        | Meshes will stack, but don't have durability.                         | 64      | 1 – 64     |
| `sieveRange`           | Defines the radius that a sieve will attempt to activate other sieves | 2       | 0 – 5      |
