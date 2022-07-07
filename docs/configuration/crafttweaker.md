# CraftTweaker Support

Ex Nihilo: Sequentia supports CraftTweaker scripts. Be sure to check the [CraftTweaker Documentation] before getting started here to make sure you understand how CraftTweaker works.

All Ex Nihilo: Sequentia recipes follow a builder pattern, so ordering is not important as long as all the required methods are there.

## Compost Recipes

| Method                        | Description                                       | Accepted Values               | Required |
| :---------------------------- | :------------------------------------------------ | :---------------------------- | :------- |
| `create(String name)`         | The name of the recipe.                           | Unique String. Must be first. | Required |
| `setInput(IIngredient input)` | Item to be inserted into barrel for composting.   | Item or Tag.                  | Required |
| `setAmount(int amount)`       | Amount of solids added to a barrel from the item. | A value greater than 0.       | Required |

#### Example

```js
import mods.exnihilosequentia.ZenCompostRecipe;

<recipetype:exnihilosequentia:compost>
    .create("example")
    .setInput(<item:minecraft:oak_leaves>)
    .setAmount(100);
```

## Crook Recipes

| Method                                   | Description                                                                      | Accepted Values                                           | Required |
| :--------------------------------------- | :------------------------------------------------------------------------------- | :-------------------------------------------------------- | :------- |
| `create(String name)`                    | The name of the recipe.                                                          | Must be a unique name. Must be first.                     | Required |
| `setInput(IIngredient input)`            | Block to be crooked.                                                             | May be a block or a tag.                                  | Required |
| `addDrop(IItemStack drop, float chance)` | The item to drop and its chance. May be called multiple times to add more drops. | <ol><li>Item</li> <li>Value between 0.0 and 1.0</li></ol> |          |

#### Example

```js
import mods.exnihilosequentia.ZenCrookRecipe;

<recipetype:exnihilosequentia:crook>
    .create("example")
    .setInput(<item:minecraft:oak_leaves>)
    .addDrop(<item:exnihilosequentia:silkworm>, 1)
    .addDrop(<item:minecraft:diamond>, 2);
```

## Crucible Recipes

| Method                                 | Description                                                                                            | Accepted Values                                | Required |
| :------------------------------------- | :----------------------------------------------------------------------------------------------------- | :--------------------------------------------- | :------- |
| `create(String name)`                  | The name of the recipe.                                                                                | Unique String. Must be first.                  | Required |
| `setInput(IIngredient input)`          | Block or type to be melted down                                                                        | Item or Tag                                    | Required |
| `setAmount(int amount)`                | Amount of fluid produced by an input block.                                                            | Value greater than 0.                          |          |
| `setCrucibleType(String crucibleType)` | Type of crucible. `wood` recipies can be processed by `fired` crucibles, but not the other way around. | Must be `wood` or `fired`. Defaults to `wood`. |          |
| `setResultFluid(IFluidStack fluid)`    | Resulting fluid.                                                                                       | Fluid                                          | Required |

#### Example

```js
import mods.exnihilosequentia.ZenCrucibleRecipe;

<recipetype:exnihilosequentia:crucible>
    .create("example")
    .setInput(<item:minecraft:cobblestone>)
    .setAmount(100)
    .setCrucibleType("fired")
    .setResutFluid(<fluid:minecraft:lava>);
```

## Fluid Item Recipes

| Method                                    | Description                                      | Accepted Values               | Required |
| :---------------------------------------- | :----------------------------------------------- | :---------------------------- | :------- |
| `create(String name)`                     | The name of the recipe.                          | Unique String. Must be first. | Required |
| `setFluidInTank(IFluidStack fluidInTank)` | Fluid in the tank                                | Fluid                         | Required |
| `setInputItem(IIngredient inputItem)`     | Item that acts as a catalyst to complete recipe. | Item or Tag.                  | Required |
| `setResult(IItemStack result)`            | Resulting item.                                  | Item                          | Required |

#### Example

```js
import mods.exnihilosequentia.ZenFluidItemRecipe;

<recipetype:exnihilosequentia:fluid_item>
    .create("example")
    .setFluidInTank(<fluid:minecraft:water>)
    .setInputItem(<item:minecraft:diamond>)
    .setResult(<item:minecraft:dirt>);
```

## Fluid On Top Recipes

| Method                                    | Description             | Accepted Values               | Required |
| :---------------------------------------- | :---------------------- | :---------------------------- | :------- |
| `create(String name)`                     | The name of the recipe. | Unique String. Must be first. | Required |
| `setFluidInTank(IFluidStack fluidInTank)` | Fluid in the tank       | Fluid                         | Required |
| `setFluidOnTop(IFluidStack fluidOnTop)`   | Fluid placed on top.    | Fluid                         | Required |
| `setResult(IItemStack result)`            | Resulting item.         | Block                         | Required |

#### Example

```js
import mods.exnihilosequentia.ZenFluidOnTopRecipe;

<recipetype:exnihilosequentia:fluid_on_top>
    .create("example")
    .setFluidInTank(<fluid:minecraft:lava>)
    .setFluidOnTop(<fluid:minecraft:water>)
    .setResult(<item:minecraft:obsidian>);
```

## Fluid Transform Recipes

| Method                                    | Description                                      | Accepted Values               | Required |
| :---------------------------------------- | :----------------------------------------------- | :---------------------------- | :------- |
| `create(String name)`                     | The name of the recipe.                          | Unique String. Must be first. | Required |
| `setFluidInTank(IFluidStack fluidInTank)` | Fluid in the tank                                | Fluid                         | Required |
| `setCatalyst(IIngredient catalyst)`       | Block to be placed below or item to be inserted. | Item or Tag                   | Required |
| `setResult(IFluidStack result)`           | Resulting fluid.                                 | Fluid                         | Required |

#### Example

```js
import mods.exnihilosequentia.ZenFluidTransformRecipe;

<recipetype:exnihilosequentia:fluid_transform>
    .create("example")
    .setFluidInTank(<fluid:minecraft:lava>)
    .setCatalyst(<item:minecraft:diamond>)
    .setResult(<fluid:minecraft:water>);
```

## Hammer Recipes

| Method                                     | Description                                                                        | Accepted Values               | Required |
| :----------------------------------------- | :--------------------------------------------------------------------------------- | :---------------------------- | :------- |
| `create(String name)`                      | The name of the recipe.                                                            | Unique String. Must be first. | Required |
| `setInput(IIngredient input)`              | Block to be hammerd.                                                               | May be a block to tag.        | Required |
| `addOutput(IItemStack drop)`               | The item to drop 100% of the time. May be called multiple times to add more drops. | Item                          |          |
| `addOutput(IItemStack drop, float chance)` | The item to drop and its chance. May be called multiple times to add more drops.   | Item                          |          |

#### Example

```js
import mods.exnihilosequentia.ZenHammerRecipe;

<recipetype:exnihilosequentia:hammer>
    .create("example")
    .setInput(<item:minecraft:cobblestone>)
    .addOutput(<item:minecraft:gravel>)
    .addOutput(<item:minecraft:diamond>, 0.01);
```

## Heat Recipes

| Method                                               | Description                                                              | Accepted Values               | Required |
| :--------------------------------------------------- | :----------------------------------------------------------------------- | :---------------------------- | :------- |
| `create(String name)`                                | The name of the recipe.                                                  | Unique String. Must be first. | Required |
| `setBlock(MCBlock input)`                            | Block to add as a heat source.                                           | Block                         | Required |
| `setAmount(int amount)`                              | Heating amount.                                                          | Value greater than 0.         | Required |
| `setProperties(StatePropertiesPredicate properties)` | A collection of block state properties. (See [StatePropertiesPredicate]) | StatePropertiesPredicate      |          |

#### Example

```js
import mods.exnihilosequentia.ZenHeatRecipe;

properties = StatePropertiesPredicate.withExactProperty("lit", true);

<recipetype:exnihilosequentia:heat>
    .create("example")
    .setBlock(<block:minecraft:campfire>)
    .setAmount(100)
    .setProperties(properties);
```

## Sieve Recipes

| Method                               | Description                                                                                               | Accepted Values                                                               | Required |
| :----------------------------------- | :-------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :------- |
| `create(String name)`                | The name of the recipe.                                                                                   | Unique String. Must be first.                                                 | Required |
| `setInput(IIngredient input)`        | Block to be sieved.                                                                                       | Block or Tag                                                                  | Required |
| `addDrop(IItemStack drop)`           | Item to be dropped in this recipe.                                                                        | Item                                                                          | Required |
| `addRoll(String mesh, float chance)` | A mesh and its associated drop chance for the above drop. May be called multiple times to add more rolls. | Mesh must be `string`, `flint`, `iron`, `diamond`, `emerald`, or `netherite`. |          |
| `setWaterlogged()`                   | Sets the recipe to require a waterlogged sieve.                                                           | N/A                                                                           |          |

#### Example

```js
import mods.exnihilosequentia.ZenSieveRecipe;

<recipetype:exnihilosequentia:sieve>
    .create("example")
    .setInput(<item:minecraft:cobblestone>)
    .addDrop(<item:minecraft:netherite_ingot>)
    .addRoll("diamond", 0.01)
    .addRoll("string", 1.0)
    .setWaterlogged();
```

[crafttweaker documentation]: https://docs.blamejared.com/
[statepropertiespredicate]: https://docs.blamejared.com/1.16/en/vanilla/api/predicate/StatePropertiesPredicate
