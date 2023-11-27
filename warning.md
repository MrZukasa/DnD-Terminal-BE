# Prisma Warning

These fields were commented out because their names are currently not supported by Prisma. Please provide valid ones that match [a-zA-Z][a-zA-Z0-9_]* using the `@map` attribute:

- Composite type: `MonstersSpecialAbilitiesSpellcastingSlots`, field(s): [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
- Composite type: `SpellsDamageDamageAtCharacterLevel`, field(s): [`1`, `11`, `17`, `5`]
- Composite type: `SpellsDamageDamageAtSlotLevel`, field(s): [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
- Composite type: `SpellsHealAtSlotLevel`, field(s): [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`]
- Composite type: `TraitsTraitSpecificBreathWeaponDamageDamageAtCharacterLevel`, field(s): [`1`, `11`, `16`, `6`]

Could not determine the types for the following fields:

- Model: `subraces`, field: `languages`

The following fields had data stored in multiple types. Either use Json or normalize data to the wanted type:

- Model: `equipment`, field: `weight`, original data type: `Json`
- Model: `monsters`, field: `challenge_rating`, original data type: `Json`

The following fields had data stored in multiple types. Either use Json or normalize data to the wanted type:

- Composite type: `EquipmentSpeed`, field: `quantity`, chosen data type: `Json`
- Composite type: `LevelsClassSpecific`, field: `destroy_undead_cr`, chosen data type: `Json`
- Composite type: `LevelsClassSpecific`, field: `wild_shape_max_cr`, chosen data type: `Json`
- Composite type: `MonstersActionsActions`, field: `count`, chosen data type: `Json`
