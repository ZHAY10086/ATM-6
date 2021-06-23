//priority: 1000
const alltheores = ['aluminum', 'copper', 'lead', 'nickel', 'osmium', 'platinum', 'silver', 'tin', 'uranium', 'zinc']
const allthemodiumores = ['allthemodium', 'vibranium', 'unobtainium']

onEvent('item.tags', e => {
    allthemodiumores.forEach(item => {
        e.add(`mekanism:clumps/${item}`, `allthemodium:${item}_clump`)
        e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
        e.add(`mekanism:dirty_dusts/${item}`, `allthemodium:dirty_${item}_dust`)
        e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
        e.add(`mekanism:shards/${item}`, `allthemodium:${item}_shard`)
        e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
        e.add(`mekanism:crystals/${item}`, `allthemodium:${item}_crystal`)
        e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
    })
    alltheores.forEach(item => {
        e.add(`mekanism:clumps/${item}`, `alltheores:${item}_clump`)
        e.add(`mekanism:clumps`, `#mekanism:clumps/${item}`)
        e.add(`mekanism:dirty_dusts/${item}`, `alltheores:dirty_${item}_dust`)
        e.add(`mekanism:dirty_dusts`, `#mekanism:dirty_dusts/${item}`)
        e.add(`mekanism:shards/${item}`, `alltheores:${item}_shard`)
        e.add(`mekanism:shards`, `#mekanism:shards/${item}`)
        e.add(`mekanism:crystals/${item}`, `alltheores:${item}_crystal`)
        e.add(`mekanism:crystals`, `#mekanism:crystals/${item}`)
    })

    e.add('minecraft:logs_unstripped', '/^.+:(?!stripped_).+_log$/')

    e.add('forge:swords', ['allthemodium:alloy_paxel', 'allthemodium:alloy_sword'])
    e.add('forge:dusts/certus_quartz', ['appliedenergistics2:certus_quartz_dust'])
    e.add('curios:curio', ['simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet'])
    e.add('curios:angelring', ['botania:flight_tiara'])
    e.add('forge:ores/rat_gem', 'rats:ratlantean_gem_ore')
    e.add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
    e.add('forge:ores/dimensionalshard', [
        'rftoolsbase:dimensionalshard_overworld',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_end'
    ])
    e.add('forge:ores', [
        '#forge:ores/certus_quartz',
        '#forge:ores/oratchalcum',
        '#forge:ores/rat_gem',
        '#forge:ores/dimensionalshard',
        '#forge:ores/arcane_brick'
    ])
    e.add('forge:plastic', ['#pneumaticcraft:plastic_sheets', 'mekanism:hdpe_sheet'])
    e.add('misctags:farmland/tier6', ['mysticalagradditions:insanium_farmland'])
    e.add('misctags:farmland/tier5', ['mysticalagriculture:supremium_farmland', '#misctags:farmland/tier6'])
    e.add('misctags:farmland/tier4', ['mysticalagriculture:imperium_farmland', '#misctags:farmland/tier5'])
    e.add('misctags:farmland/tier3', ['mysticalagriculture:tertium_farmland', '#misctags:farmland/tier4'])
    e.add('misctags:farmland/tier2', ['mysticalagriculture:prudentium_farmland', '#misctags:farmland/tier3'])
    e.add('misctags:farmland/tier1', ['mysticalagriculture:inferium_farmland', '#misctags:farmland/tier2'])
    e.add('misctags:biofuel2', [
        '#minecraft:saplings',
        '#minecraft:leaves',
        '#forge:seeds',
        'minecraft:dried_kelp',
        'minecraft:kelp',
        'minecraft:seagrass',
        'minecraft:grass'
    ])
    e.add('misctags:biofuel4', [
        '#forge:fruits',
        'minecraft:tall_grass',
        'minecraft:nether_sprouts',
        'minecraft:dried_kelp_block',
        'minecraft:cactus',
        'minecraft:sugar_cane',
        'minecraft:weeping_vines',
        'minecraft:twisting_vines',
        'minecraft:vine',
        'minecraft:melon_slice',
        'byg:skyris_vine',
        'byg:embur_gel_vines'
    ])
    e.add('misctags:biofuel5', [
        '#forge:vegetables',
        '#forge:cookies',
        '#forge:flour_plants',
        '#forge:mushrooms',
        '#forge:mushroom_stems',
        '#minecraft:flowers',
        'minecraft:lily_pad',
        'minecraft:sea_pickle',
        'minecraft:shroomlight',
        'minecraft:large_fern',
        'minecraft:fern',
        'minecraft:crimson_roots',
        'minecraft:warped_roots',
        'minecraft:carved_pumpkin',
        'minecraft:nether_wart',
        'minecraft:cocoa_beans'
    ])
    e.add('misctags:biofuel7', [
        '#minecraft:wart_blocks',
        '#forge:mushroom_caps',
        'minecraft:baked_potato',
        'minecraft:hay_block',
        '#forge:bread'
    ])
    e.add('misctags:biofuel8', ['minecraft:cake', 'minecraft:pumpkin_pie'])
    e.add('forge:axes', ['byg:pendorite_battleaxe', 'engineerstools:redia_tool'])
    e.add('forge:shovels', ['engineerstools:redia_tool'])
    e.add('forge:pickaxes', ['allthemodium:alloy_pick', 'engineerstools:redia_tool'])
    e.add('minecraft:stone_tool_materials', ['#forge:stone', '#forge:cobblestone'])
    e.add('minecraft:stone_crafting_materials', ['#forge:stone', '#forge:cobblestone'])
    e.add('appliedenergistics2:nether_quartz_dust', '#forge:dusts/quartz')
    e.add('appliedenergistics2:dusts/nether_quartz', '#forge:dusts/quartz')
    e.add('appliedenergistics2:dusts/quartz', '#forge:dusts/quartz')
    e.add('forge:seeds', ['immersiveengineering:seed'])
    e.add('engineerstools:musli_bar_seeds', '#forge:seeds')
    e.add('forge:ingots', [
        '#forge:ingots/unobtainium_allthemodium_alloy',
        '#forge:ingots/vibranium_unobtainium_alloy',
        '#forge:ingots/vibranium_allthemodium_alloy',
        '#forge:ingots/oratchalcum'
    ])
    e.add('forge:sand', ['byg:white_sand', 'byg:black_sand', 'byg:purple_sand', 'byg:blue_sand'])
    e.add('forge:nuggets', '#forge:nuggets/oratchalcum')
    e.add('forge:fruits', ['byg:holly_berries'])
    e.add('forge:gems/dimensionalshard', 'rftoolsbase:dimensionalshard')
    e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
    e.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
    e.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
    e.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
    e.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
    e.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
    e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
    e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
    e.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
    e.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
    e.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
    e.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
    e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
    e.add('forge:mushroom_caps', [
        '#forge:mushroom_caps/red_mushroom',
        '#forge:mushroom_caps/brown_mushroom',
        '#forge:mushroom_caps/blue_glowshroom',
        '#forge:mushroom_caps/purple_glowshroom',
        '#forge:mushroom_caps/green_mushroom',
        '#forge:mushroom_caps/black_puff_mushroom',
        '#forge:mushroom_caps/weeping_milkcap_mushroom'
    ])
    e.add('forge:mushroom_stems', [
        '#forge:mushroom_stems/mushroom',
        '#forge:mushroom_stems/brown_mushroom',
        '#forge:mushroom_stems/white_mushroom',
        '#forge:mushroom_stems/red_glowshroom',
        '#forge:mushroom_stems/yellow_glowshroom'
    ])
    e.add('forge:mushrooms', [
        'minecraft:warped_fungus',
        'minecraft:crimson_fungus',
        'byg:blue_glowshroom',
        'byg:purple_glowshroom'
    ])
    e.add('forge:storage_blocks', ['#forge:storage_blocks/uraninite', '#forge:storage_blocks/oratchalcum'])
    e.add('forge:gems/rat_gem', 'rats:gem_of_ratlantis')
    e.add('forge:gems', ['#forge:gems/dimensionalshard', '#forge:gems/rat_gem'])
    e.add('misctags:flowers/draconic_flowers', ['minecraft:dragon_egg'])
    e.add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
    e.add('misctags:flowers/end_flower', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
    e.add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berries'])
    e.add('misctags:flowers/glowing_flowers', [
        'minecraft:shroomlight',
        'minecraft:glowstone',
        'minecraft:redstone_lamp'
    ])
    e.add('misctags:flowers/magical_flowers', [
        '#botania:special_flowers',
        '#botania:mystical_flowers',
        '#botania:double_mystical_flowers'
    ])
    e.add('misctags:flowers/nether_flowers', [
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:nether_wart',
        'minecraft:crimson_roots',
        'minecraft:warped_roots',
        'minecraft:weeping_vines',
        'minecraft:twisting_vines'
    ])
    e.add('misctags:flowers/swamp_flowers', [
        'byg:tiny_lilypads',
        'byg:reeds',
        'byg:cattail',
        'minecraft:lily_pad',
        'minecraft:sugar_cane',
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom'
    ])
    e.add('misctags:flowers/wither_flowers', ['minecraft:wither_rose'])
    e.add('forge:storage_blocks/nether_star', 'kubejs:nether_star_block')
    e.add('forge:storage_blocks', ['#forge:storage_blocks/nether_star'])
    e.add('dankstorage:blacklisted_usage', ['/^usefulbackpacks:/'])

    e.add('minecraft:wart_blocks', '/.+_wart_block/')
    e.add('forge:axes', ['/.+_axe/', '/.+_paxel/', '/.+:axe_.+/'])
    e.add('forge:pickaxes', ['/.+_pickaxe/', '/.+_paxel/', '/.+:pickaxe_.+/'])
    e.add('forge:shovels', ['/.+_shovel/', '/.+_paxel/', '/.+:shovel_.+/'])
    e.add('forge:swords', ['/.+_sword/', '/.+:sword_.+/'])
    e.add('forge:hoes', ['/.+_hoe/', '/.+:hoe_.+/'])

    e.add('forge:simple_honeycombs', '/^.+:(?!(catnip|rgbee)_).*honeycomb$/')
    e.add('forge:simple_honeycomb_blocks', '/^.+:(?!(catnip|rgbee)_).*honeycomb_block$/')

    e.remove(`minecraft:flowers`, `#botania:special_flowers`)
    e.remove('forge:leather', 'forbidden_arcanus:rotten_leather')
    e.remove('engineerstools:musli_bar_food_blacklisted', 'minecraft:chicken')
    e.remove('forge:dyes/yellow', 'mekanism:dust_sulfur')
    e.remove('forge:nether_stars', 'forbidden_arcanus:dark_nether_star')
    e.remove('curios:charm', ['angelring:itemring', 'simplemagnets:basicmagnet', 'simplemagnets:advancedmagnet'])
    e.remove('curios:head', ['botania:flight_tiara'])
    e.remove('appliedenergistics2:glass', ['#forge:glass', 'minecraft:glass'])
    e.remove('appliedenergistics2:metal_ingots', ['#forge:ingots/gold', '#forge:ingots/iron'])
    e.remove('appliedenergistics2:wool', '#minecraft:wool')
    e.remove('appliedenergistics2:workbench', 'minecraft:crafting_table')
    e.remove('minecraft:beehives', [
        'resourcefulbees:t1_beehive',
        'resourcefulbees:t2_beehive',
        'resourcefulbees:t3_beehive',
        'resourcefulbees:t4_beehive'
    ])
    e.remove('forge:cheese/silkentofu', 'pamhc2foodextended:silkentofuitem')
})

//Block tags
onEvent('block.tags', e => {
    e.add('forge:ores/certus_quartz', ['appliedenergistics2:quartz_ore', 'appliedenergistics2:charged_quartz_ore'])
    e.add('forge:ores/oratchalcum', 'rats:oratchalcum_ore')
    e.add('forge:ores/cheese', 'rats:cheese_ore')
    e.add('forge:ores/quartz', '#forge:ores/certus_quartz')
    e.add('forge:ores/rat_gem', 'rats:ratlantean_gem_ore')
    e.add('forge:ores/arcane_brick', 'ars_nouveau:arcane_ore')
    e.add('forge:ores/dimensionalshard', [
        'rftoolsbase:dimensionalshard_overworld',
        'rftoolsbase:dimensionalshard_nether',
        'rftoolsbase:dimensionalshard_end'
    ])
    e.add('forge:ores', [
        '#forge:ores/certus_quartz',
        '#forge:ores/oratchalcum',
        '#forge:ores/rat_gem',
        '#forge:ores/dimensionalshard',
        '#forge:ores/arcane_brick'
    ])
    e.add('misctags:no_moving', ['#minecraft:wither_immune', 'potionsmaster:cauldron', 'appliedenergistics2:cable_bus'])
    e.add('mekanism:cardboard_blacklist', '#misctags:no_moving')
    e.add('bagofyurting:blacklist', '#misctags:no_moving')
    e.add('misctags:flowers/draconic_flowers', ['minecraft:dragon_egg'])
    e.add('misctags:flowers/end_flowers', ['minecraft:chorus_flower', 'minecraft:chorus_plant'])
    e.add('misctags:flowers/forest_flowers', ['#minecraft:flowers', 'minecraft:sweet_berry_bush'])
    e.add('misctags:flowers/glowing_flowers', [
        'minecraft:shroomlight',
        'minecraft:glowstone',
        'minecraft:redstone_lamp'
    ])
    e.add('misctags:flowers/magical_flowers', [
        '#botania:special_flowers',
        '#botania:mystical_flowers',
        '#botania:double_mystical_flowers'
    ])
    e.add('misctags:flowers/nether_flowers', [
        'minecraft:crimson_fungus',
        'minecraft:warped_fungus',
        'minecraft:nether_wart',
        'minecraft:crimson_roots',
        'minecraft:warped_roots',
        'minecraft:weeping_vines',
        'minecraft:twisting_vines'
    ])
    e.add('misctags:flowers/swamp_flowers', [
        'byg:tiny_lilypads',
        'byg:reeds',
        'byg:cattail',
        'minecraft:lily_pad',
        'minecraft:sugar_cane',
        'minecraft:brown_mushroom',
        'minecraft:red_mushroom'
    ])
    e.add('misctags:flowers/wither_flowers', ['minecraft:wither_rose'])
    e.add('forge:mushroom_caps/black_puff_mushroom', 'byg:black_puff_mushroom_block')
    e.add('forge:mushroom_caps/blue_glowshroom', 'byg:blue_glowshroom_block')
    e.add('forge:mushroom_caps/weeping_milkcap_mushroom', 'byg:weeping_milkcap_mushroom_block')
    e.add('forge:mushroom_caps/green_mushroom', 'byg:green_mushroom_block')
    e.add('forge:mushroom_caps/purple_glowshroom', 'byg:purple_glowshroom_block')
    e.add('forge:mushroom_caps/brown_mushroom', 'minecraft:brown_mushroom_block')
    e.add('forge:mushroom_caps/red_mushroom', 'minecraft:red_mushroom_block')
    e.add('forge:mushroom_stems/brown_mushroom', 'byg:brown_mushroom_stem')
    e.add('forge:mushroom_stems/red_glowshroom', 'byg:red_glowshroom_stem')
    e.add('forge:mushroom_stems/white_mushroom', 'byg:white_mushroom_stem')
    e.add('forge:mushroom_stems/yellow_glowshroom', 'byg:yellow_glowshroom_stem')
    e.add('forge:mushroom_stems/mushroom', 'minecraft:mushroom_stem')
    e.add('forge:mushroom_caps', [
        '#forge:mushroom_caps/red_mushroom',
        '#forge:mushroom_caps/brown_mushroom',
        '#forge:mushroom_caps/blue_glowshroom',
        '#forge:mushroom_caps/purple_glowshroom',
        '#forge:mushroom_caps/green_mushroom',
        '#forge:mushroom_caps/black_puff_mushroom',
        '#forge:mushroom_caps/weeping_milkcap_mushroom'
    ])
    e.add('forge:mushroom_stems', [
        '#forge:mushroom_stems/mushroom',
        '#forge:mushroom_stems/brown_mushroom',
        '#forge:mushroom_stems/white_mushroom',
        '#forge:mushroom_stems/red_glowshroom',
        '#forge:mushroom_stems/yellow_glowshroom'
    ])
    e.add('forge:mushrooms', [
        'minecraft:warped_fungus',
        'minecraft:crimson_fungus',
        'byg:blue_glowshroom',
        'byg:purple_glowshroom'
    ])
    e.add('forge:storage_blocks', [
        '#forge:storage_blocks/uraninite',
        '#forge:storage_blocks/oratchalcum',
        '#forge:storage_blocks/nether_star'
    ])
    e.add('forge:storage_blocks/nether_star', 'kubejs:nether_star_block')
    e.add('forge:storage_blocks/uraninite', 'powah:uraninite_block')
    e.add('forge:storage_blocks/oratchalcum', 'rats:oratchalcum_block')
    e.add('cyclic:scythe_brush', ['#minecraft:flowers'])
    e.add('mcwwindows:window', '/mcwwindows:.+_win/')
    e.add('misctags:concrete', '/minecraft:.+_concrete/')
    e.add('misctags:no_moving', [
        '/refinedstorage:.+/',
        '/extrastorage:.+/',
        '/waystones:.+/',
        '/appliedenergistics2:.+/'
    ])
    e.add('create:brittle', 'cookingforblockheads:fridge')
    e.removeAll('minecraft:enderman_holdable')
})

//Entity tags
onEvent('entity_type.tags', e => {
    e.add('industrialforegoing:mob_imprisonment_tool_blacklist', [
        'iceandfire:dragon_multipart',
        'iceandfire:dragon_egg',
        /iceandfire:.+_dragon/
    ])
    e.add('industrialforegoing:mob_imprisonment_tool_blacklist', [/resourcefulbees:.+_bee/])
})

//Fluid tags
onEvent('fluid.tags', e => {
    e.add('forge:essence', 'pneumaticcraft:memory_essence')
    e.add('minecraft:water', [
        'cofh_core:honey',
        'cyclic:honey',
        'resourcefulbees:catnip_honey',
        'resourcefulbees:honey',
        'resourcefulbees:rainbow_honey_flowing',
        'resourcefulbees:rainbow_honey'
    ])
    alltheores.forEach(material => {
        e.add(`forge:molten_${material}`, [`alltheores:molten_${material}`, `#tconstruct:molten_${material}`])
        e.add(`tconstruct:metal_like`, `alltheores:molten_${material}`)
    })
})
