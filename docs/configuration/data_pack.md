# Data Pack Creation

Ex Nihilo: Sequentia supports datapacks for the creation of recipes. Defined below are the templates for the recipes that are supported.

:::info
Anywhere that `item/tag` shows up means that you must use `item` or `tag`, not `item/tag`.
:::

## Compost

```json title="Compost Recipe"
{
  "type": "exnihilosequentia:compost",
  "input": {
    "item/tag": "minecraft:apple"
  },
  "amount": 100
}
```

| Value    | Description                                                           | Accepted Values      |
| :------- | :-------------------------------------------------------------------- | :------------------- |
| `input`  | The item/block being inserted into a barrel to be composted.          | Item or Tag          |
| `amount` | The amount an item/block contributes to the solid amount in a barrel. | Value greater than 0 |

## Crook

```json title="Crook Recipe"
{
  "type": "exnihilosequentia:crook",
  "results": [
    {
      "chance": 0.1,
      "item": "exnihilosequentia:silkworm",
      "count": 1
    },
    ...
  ],
  "input": {
    "item/tag": "minecraft:leaves"

}
```

```json title="Result Object"
{
  "chance": 0.1,
  "item": "exnihilosequentia:silkworm",
  "count": 1
}
```

| Value     | Description                                                                    | Accepted Values          |
| :-------- | :----------------------------------------------------------------------------- | :----------------------- |
| `results` | A list of items that can be dropped and the chance that they will be.          | List of Result Objects   |
| `chance`  | Percentage that this recipe will produce drop.                                 | A value from 0.0 to 1.0. |
| `item`    | The item to be dropped.                                                        | Item                     |
| `count`   | Number of result items to drop when recipe completes.                          | A value greater than 0.  |
| `input`   | The block/type of block that must be broken by a crook to produce the results. | Block or Tag             |

## Crucible

```json title="Crucible Recipe"
{
  "type": "exnihilosequentia:crucible",
  "input": {
    "item/tag": "minecraft:cobblestone"
  },
  "amount": 250,
  "fluidResult": {
    "fluid": "minecraft:lava"
  },
  "crucibleType": "fired"
}
```

| Value          | Description                                                                                                     | Accepted Values                          |
| :------------- | :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `input`        | The block/type of block to be placed in a crucible to produce the connected fluid.                              | Item or Tag                              |
| `amount`       | The amount of fluid that will be produced by the input (represented in millibuckets)                            | A value greater than 0.                  |
| `fluidResult`  | The fluid that results from the input.                                                                          | Fluid                                    |
| `crucibleType` | Type of crucible. `wood` crucible recipies can be processed by `fired` crucibles, but not the other way around. | <ul><li>`fired`</li><li>`wood`</li></ul> |

:::info
Since `wood` crucible recipies can be processed in `fired` crucibles, there is no need to create two separate recipies for `wood` and `fired` recipies that result in the same fluid and amount.
:::

## Fluid Item Transformation

```json title="Fluid Item Transformation"
{
  "type": "exnihilosequentia:fluid_item",
  "fluid": {
    "fluid": "exnihilosequentia:sea_water"
  },
  "input": {
    "item/tag": "exnihilosequentia:seed_pink_coral"
  },
  "result": {
    "item": "minecraft:brain_coral_block"
  }
}
```

| Value    | Description                                            | Accepted Values |
| :------- | :----------------------------------------------------- | :-------------- |
| `fluid`  | The fluid in the barrel.                               | Fluid           |
| `input`  | The item or type of item to be consumed by the recipe. | Item or Tag     |
| `result` | The resulting item/block.                              | Item            |

## Fluid On Top

```json title="Fluid On Top Recipe"
{
  "type": "exnihilosequentia:fluid_on_top",
  "fluidInTank": {
    "fluid": "minecraft:water"
  },
  "fluidOnTop": {
    "fluid": "minecraft:lava"
  },
  "result": {
    "item": "minecraft:cobblestone"
  }
}
```

| Value         | Description                                                                   | Accepted Values |
| :------------ | :---------------------------------------------------------------------------- | :-------------- |
| `fluidInTank` | The fluid in the tank that will be consumed.                                  | Fluid           |
| `fluidOnTop`  | The fluid that will be placed on top of the barrel that will not be consumed. | Fluid           |
| `result`      | The resulting block.                                                          | Block           |

## Fluid Transformation

```json title="Fluid Transformation Recipe"
{
  "type": "exnihilosequentia:fluid_transform",
  "fluidInTank": {
    "fluid": "minecraft:water"
  },
  "catalyst": {
    "item/tag": "minecraft:sand"
  },
  "result": {
    "fluid": "exnihilosequentia:sea_water"
  }
}
```

| Value         | Description                                                                                                                                              | Accepted Values |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- |
| `fluidInTank` | The fluid to be transformed.                                                                                                                             | Fluid           |
| `catalyst`    | The block/type of block that must be below the barrel to transform the fluid. May also be an item that is inserted into the barrel with the fluid in it. | Item or Tag     |
| `result`      | The resulting fluid.                                                                                                                                     | Fluid           |

## Hammer

```json title="Hammer Recipe"
{
  "type": "exnihilosequentia:hammer",
  "results": [
    {
      "item": "minecraft:sand",
      "chance": 1.0,
      "count": 1
    }
  ],
  "input": {
    "item": "minecraft:gravel"
  }
}
```

```json title="Result Object"
{
  "item": "minecraft:sand",
  "chance": 1.0,
  "count": 1
}
```

| Value     | Description                                          | Accepted Values          |
| :-------- | :--------------------------------------------------- | :----------------------- |
| `results` | A list of possible drops.                            | List of Result Objects   |
| `item`    | The item to be dropped.                              | Item                     |
| `chance`  | The resulting fluid.                                 | A value from 0.0 to 1.0. |
| `count`   | Number of result items dropped when recipe completes | A value greater than 0.  |
| `input`   | The block to be hammered.                            | Block or Tag             |
| `result`  | The resulting block.                                 | Block                    |

## Heat

```json title="Heat Recipe"
{
  "type": "exnihilosequentia:heat",
  "block": "minecraft:campfire",
  "amount": 4,
  "state": {
    "lit": "true"
  }
}
```

| Value    | Description                                                                                                                                                   | Accepted Values         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------- |
| `block`  | The block placed below a crucible that will generate heat.                                                                                                    | Block                   |
| `amount` | The number of millibuckets that will be melted down per operation.                                                                                            | A value greater than 0. |
| `state`  | A collection of properties that the block must match for the heat recipe to be valid. Optional and may be omitted. (See [Block States] on the Minecraft Wiki) | Block State             |

## Sieve

```json title="Sieve Recipe"
{
  "type": "exnihilosequentia:sieve",
  "rolls": [
    {
      "chance": 1.0,
      "mesh": "string"
    }
  ],
  "input": {
    "item/tag": "minecraft:dirt"
  },
  "result": {
    "item": "exnihilosequentia:pebble_stone"
  },
  "waterlogged": true
}
```

```json title="Mesh Roll"
{
  "chance": 1.0,
  "mesh": "string"
}
```

| Value         | Description                                                 | Accepted Values                                                                                                   |
| :------------ | :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `rolls`       | A list of rolls for this recipe.                            | A list of Mesh Rolls                                                                                              |
| `chance`      | Chance that this recipe completes.                          | A value from 0.0 to 1.0.                                                                                          |
| `mesh`        | The mesh required to cause this roll to be considered.      | <ul><li>`string`</li><li>`flint`</li><li>`iron`</li><li>`diamond`</li><li>`emerald`</li><li>`netherite`</li></ul> |
| `input`       | The block/type of block that will be consumed by the sieve. | Block or Tag                                                                                                      |
| `result`      | The resulting item.                                         | Item                                                                                                              |
| `waterlogged` | The sieve must be placed in water to produce result.        | Either `true` or `false`. Optional and enitire tag may be omitted. Will default to `false`.                       |

[block states]: https://minecraft.fandom.com/wiki/Block_states
