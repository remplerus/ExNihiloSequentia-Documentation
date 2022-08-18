# KubeJS

Ex Nihilo: Sequentia supports KubeJS scripts. Be sure to check the [KubeJS Documentation] before getting started here to make sure you understand how KubeJS works.

## Compost Recipes

| Method                   | Parameters | Description                    | Accepted Values        |
| ------------------------ | ---------- | ------------------------------ | ---------------------- |
| `compost(input, amount)` | input      | Item to be composted           | Item or Tag            |
|                          | amount     | Amount of solid to be inserted | A value greater than 0 |

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.compost('minecraft:cobblestone', 750)
}
```

## Crook Recipes

| Method                         | Parameters | Description                           | Accepted Values             |
| ------------------------------ | ---------- | ------------------------------------- | --------------------------- |
| `crook(input)`                 | input      | Block to be crooked                   | Block or Tag                |
| `addDrop(drop, count, chance)` | drop       | Item to be dropped                    | Item                        |
|                                | count      | Number of items to drop               | A value greater than 0      |
|                                | chance     | Percent that the item will be dropped | A value between 0.0 and 1.0 |

`addDrop` can be chained multiple times to add more drops to the recipe.

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.crook('minecraft:grass_block')
        .addDrop('minecraft:coal', 4, 0.5)
        .addDrop('minecraft:iron_ingot', 1, 0.25)
}
```

## Crucible Recipes

| Method                                               | Parameters   | Description                                   | Accepted Values        |
| ---------------------------------------------------- | ------------ | --------------------------------------------- | ---------------------- |
| `crucible(input, crucibleType, amount, resultFluid)` | input        | Item to be melted                             | Item or Tag            |
|                                                      | crucibleType | Type of crucible that is required for recipe. | `wood` or `fired`      |
|                                                      | amount       | Amount of fluid created by input              | A value greater than 0 |
|                                                      | resultFluid  | Fluid created from input                      | Fluid                  |

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.crucible('minecraft:dirt', 'fired', 500, 'minecraft:water')
}
```

## Fluid Item Transformation Recipes

| Method                                      | Parameters | Description                               | Accepted Values |
| ------------------------------------------- | ---------- | ----------------------------------------- | --------------- |
| `fluid_item(inputItem, output, inputFluid)` | inputItem  | Item to start transformation              | Item or Tag     |
|                                             | output     | Block as the result of the transformation | Block           |
|                                             | inputFluid | Fluid needed in the barrel                | Fluid           |

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.fluid_item('minecraft:stone', 'minecraft:stone_bricks', 'exnihilosequentia:witch_water')
}
```

## Fluid on Top Recipes

| Method                                            | Parameters    | Description                           | Accepted Values |
| ------------------------------------------------- | ------------- | ------------------------------------- | --------------- |
| `fluid_on_top(fluidInBarrel, fluidOnTop, output)` | fluidInBarrel | Fluid required in the barrel          | Fluid           |
|                                                   | fluidOnTop    | Fluid in the block space above barrel | Fluid           |
|                                                   | output        | Resulting block                       | Block           |

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.fluid_on_top('exnihilosequentia:witch_water', 'exnihilosequentia:sea_water', 'minecraft:coarse_dirt')
}
```

## Fluid Transform Recipes

| Method                                               | Parameters  | Description                           | Accepted Values |
| ---------------------------------------------------- | ----------- | ------------------------------------- | --------------- |
| `fluid_transform(inputFluid, outputFluid, catalyst)` | inputFluid  | Fluid required in the barrel          | Fluid           |
|                                                      | outputFluid | Result fluid of the transform         | Fluid           |
|                                                      | catalyst    | Item required to start transformation | Item or Tag     |

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.fluid_transform('minecraft:lava', 'minecraft:water', '#forge:ores')
}
```

## Hammer Recipes

| Method                         | Parameters | Description                           | Accepted Values             |
| ------------------------------ | ---------- | ------------------------------------- | --------------------------- |
| `hammer(input)`                | input      | Block to be hammered                  | Block or Tag                |
| `addDrop(drop, count, chance)` | drop       | Item to be dropped                    | Item                        |
|                                | count      | Number of items to drop               | A value greater than 0      |
|                                | chance     | Percent that the item will be dropped | A value between 0.0 and 1.0 |

`addDrop` can be chained multiple times to add more drops to the recipe.

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.hammer('minecraft:pumpkin')
        .addDrop('minecraft:melon_slice', 20, 0.75)
        .addDrop('minecraft:pumpkin_seeds', 1, 1)
}
```

## Heat Recipes

| Method                            | Parameters | Description                                             | Accepted Values            |
| --------------------------------- | ---------- | ------------------------------------------------------- | -------------------------- |
| `heat(input, amount, properties)` | input      | Block acting as heat source                             | Block                      |
|                                   | amount     | Amount of heat generated                                | A value greater than 0     |
|                                   | properties | [Block State] properties required to act as heat source | A JSON map. Optional value |

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.heat('minecraft:hay_block', 200)
    event.recipes.exnihilosequentia.heat('minecraft:campfire', 4, {"lit": "true"})
}
```

## Sieve Recipes

| Method                      | Parameters | Description                                            | Accepted Values                                                          |
| --------------------------- | ---------- | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| `sieve(input, output)`      | input      | Block to be sieved source                              | Block or Tag                                                             |
|                             | output     | Item dropped from sieved block generated               | Item                                                                     |
| `addRoll(chance, meshType)` | chance     | Chance associated with this mesh type                  | A value between 0.0 and 1.0                                              |
|                             | meshType   | Mesh required for item to be dropped at specified rate | `string`, `flint`, `iron`, `diamond`, `emerald`, `netherite`             |
| `setWaterlogged()`           |            | Makes recipe require sieve to be waterlogged           | If present, recipe is waterlogged. If absent, recipe is not waterlogged. |

`addRoll` can be chained multiple times to add more rolls that can trigger the drop.

#### Example

```javascript title="script.js"
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.sieve('minecraft:coarse_dirt', 'minecraft:cobblestone')
        .addRoll(1, 'iron')
        .addRoll(1, 'diamond')
}
```

[kubejs documentation]: https://mods.latvian.dev/books/kubejs
[block state]: https://minecraft.fandom.com/wiki/Block_states
