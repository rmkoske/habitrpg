import {forOwn} from 'lodash';
let t = require('../translation.js');

/* eslint-disable camelcase */
let backgrounds = {
  backgrounds062014: {
    beach: {
      text: t('backgroundBeachText'),
      notes: t('backgroundBeachNotes'),
    },
    fairy_ring: {
      text: t('backgroundFairyRingText'),
      notes: t('backgroundFairyRingNotes'),
    },
    forest: {
      text: t('backgroundForestText'),
      notes: t('backgroundForestNotes'),
    },
  },
  backgrounds072014: {
    open_waters: {
      text: t('backgroundOpenWatersText'),
      notes: t('backgroundOpenWatersNotes'),
    },
    coral_reef: {
      text: t('backgroundCoralReefText'),
      notes: t('backgroundCoralReefNotes'),
    },
    seafarer_ship: {
      text: t('backgroundSeafarerShipText'),
      notes: t('backgroundSeafarerShipNotes'),
    },
  },
  backgrounds082014: {
    volcano: {
      text: t('backgroundVolcanoText'),
      notes: t('backgroundVolcanoNotes'),
    },
    clouds: {
      text: t('backgroundCloudsText'),
      notes: t('backgroundCloudsNotes'),
    },
    dusty_canyons: {
      text: t('backgroundDustyCanyonsText'),
      notes: t('backgroundDustyCanyonsNotes'),
    },
  },
  backgrounds092014: {
    thunderstorm: {
      text: t('backgroundThunderstormText'),
      notes: t('backgroundThunderstormNotes'),
    },
    autumn_forest: {
      text: t('backgroundAutumnForestText'),
      notes: t('backgroundAutumnForestNotes'),
    },
    harvest_fields: {
      text: t('backgroundHarvestFieldsText'),
      notes: t('backgroundHarvestFieldsNotes'),
    },
  },
  backgrounds102014: {
    graveyard: {
      text: t('backgroundGraveyardText'),
      notes: t('backgroundGraveyardNotes'),
    },
    haunted_house: {
      text: t('backgroundHauntedHouseText'),
      notes: t('backgroundHauntedHouseNotes'),
    },
    pumpkin_patch: {
      text: t('backgroundPumpkinPatchText'),
      notes: t('backgroundPumpkinPatchNotes'),
    },
  },
  backgrounds112014: {
    harvest_feast: {
      text: t('backgroundHarvestFeastText'),
      notes: t('backgroundHarvestFeastNotes'),
    },
    sunset_meadow: {
      text: t('backgroundSunsetMeadowText'),
      notes: t('backgroundSunsetMeadowNotes'),
    },
    starry_skies: {
      text: t('backgroundStarrySkiesText'),
      notes: t('backgroundStarrySkiesNotes'),
    },
  },
  backgrounds122014: {
    iceberg: {
      text: t('backgroundIcebergText'),
      notes: t('backgroundIcebergNotes'),
    },
    twinkly_lights: {
      text: t('backgroundTwinklyLightsText'),
      notes: t('backgroundTwinklyLightsNotes'),
    },
    south_pole: {
      text: t('backgroundSouthPoleText'),
      notes: t('backgroundSouthPoleNotes'),
    },
  },
  backgrounds012015: {
    ice_cave: {
      text: t('backgroundIceCaveText'),
      notes: t('backgroundIceCaveNotes'),
    },
    frigid_peak: {
      text: t('backgroundFrigidPeakText'),
      notes: t('backgroundFrigidPeakNotes'),
    },
    snowy_pines: {
      text: t('backgroundSnowyPinesText'),
      notes: t('backgroundSnowyPinesNotes'),
    },
  },
  backgrounds022015: {
    blacksmithy: {
      text: t('backgroundBlacksmithyText'),
      notes: t('backgroundBlacksmithyNotes'),
    },
    crystal_cave: {
      text: t('backgroundCrystalCaveText'),
      notes: t('backgroundCrystalCaveNotes'),
    },
    distant_castle: {
      text: t('backgroundDistantCastleText'),
      notes: t('backgroundDistantCastleNotes'),
    },
  },
  backgrounds032015: {
    spring_rain: {
      text: t('backgroundSpringRainText'),
      notes: t('backgroundSpringRainNotes'),
    },
    stained_glass: {
      text: t('backgroundStainedGlassText'),
      notes: t('backgroundStainedGlassNotes'),
    },
    rolling_hills: {
      text: t('backgroundRollingHillsText'),
      notes: t('backgroundRollingHillsNotes'),
    },
  },
  backgrounds042015: {
    cherry_trees: {
      text: t('backgroundCherryTreesText'),
      notes: t('backgroundCherryTreesNotes'),
    },
    floral_meadow: {
      text: t('backgroundFloralMeadowText'),
      notes: t('backgroundFloralMeadowNotes'),
    },
    gumdrop_land: {
      text: t('backgroundGumdropLandText'),
      notes: t('backgroundGumdropLandNotes'),
    },
  },
  backgrounds052015: {
    marble_temple: {
      text: t('backgroundMarbleTempleText'),
      notes: t('backgroundMarbleTempleNotes'),
    },
    mountain_lake: {
      text: t('backgroundMountainLakeText'),
      notes: t('backgroundMountainLakeNotes'),
    },
    pagodas: {
      text: t('backgroundPagodasText'),
      notes: t('backgroundPagodasNotes'),
    },
  },
  backgrounds062015: {
    drifting_raft: {
      text: t('backgroundDriftingRaftText'),
      notes: t('backgroundDriftingRaftNotes'),
    },
    shimmery_bubbles: {
      text: t('backgroundShimmeryBubblesText'),
      notes: t('backgroundShimmeryBubblesNotes'),
    },
    island_waterfalls: {
      text: t('backgroundIslandWaterfallsText'),
      notes: t('backgroundIslandWaterfallsNotes'),
    },
  },
  backgrounds072015: {
    dilatory_ruins: {
      text: t('backgroundDilatoryRuinsText'),
      notes: t('backgroundDilatoryRuinsNotes'),
    },
    giant_wave: {
      text: t('backgroundGiantWaveText'),
      notes: t('backgroundGiantWaveNotes'),
    },
    sunken_ship: {
      text: t('backgroundSunkenShipText'),
      notes: t('backgroundSunkenShipNotes'),
    },
  },
  backgrounds082015: {
    pyramids: {
      text: t('backgroundPyramidsText'),
      notes: t('backgroundPyramidsNotes'),
    },
    sunset_savannah: {
      text: t('backgroundSunsetSavannahText'),
      notes: t('backgroundSunsetSavannahNotes'),
    },
    twinkly_party_lights: {
      text: t('backgroundTwinklyPartyLightsText'),
      notes: t('backgroundTwinklyPartyLightsNotes'),
    },
  },
  backgrounds092015: {
    market: {
      text: t('backgroundMarketText'),
      notes: t('backgroundMarketNotes'),
    },
    stable: {
      text: t('backgroundStableText'),
      notes: t('backgroundStableNotes'),
    },
    tavern: {
      text: t('backgroundTavernText'),
      notes: t('backgroundTavernNotes'),
    },
  },
  backgrounds102015: {
    harvest_moon: {
      text: t('backgroundHarvestMoonText'),
      notes: t('backgroundHarvestMoonNotes'),
    },
    slimy_swamp: {
      text: t('backgroundSlimySwampText'),
      notes: t('backgroundSlimySwampNotes'),
    },
    swarming_darkness: {
      text: t('backgroundSwarmingDarknessText'),
      notes: t('backgroundSwarmingDarknessNotes'),
    },
  },
  backgrounds112015: {
    floating_islands: {
      text: t('backgroundFloatingIslandsText'),
      notes: t('backgroundFloatingIslandsNotes'),
    },
    night_dunes: {
      text: t('backgroundNightDunesText'),
      notes: t('backgroundNightDunesNotes'),
    },
    sunset_oasis: {
      text: t('backgroundSunsetOasisText'),
      notes: t('backgroundSunsetOasisNotes'),
    },
  },
  backgrounds122015: {
    alpine_slopes: {
      text: t('backgroundAlpineSlopesText'),
      notes: t('backgroundAlpineSlopesNotes'),
    },
    snowy_sunrise: {
      text: t('backgroundSnowySunriseText'),
      notes: t('backgroundSnowySunriseNotes'),
    },
    winter_town: {
      text: t('backgroundWinterTownText'),
      notes: t('backgroundWinterTownNotes'),
    },
  },
  backgrounds012016: {
    frozen_lake: {
      text: t('backgroundFrozenLakeText'),
      notes: t('backgroundFrozenLakeNotes'),
    },
    snowman_army: {
      text: t('backgroundSnowmanArmyText'),
      notes: t('backgroundSnowmanArmyNotes'),
    },
    winter_night: {
      text: t('backgroundWinterNightText'),
      notes: t('backgroundWinterNightNotes'),
    },
  },
  backgrounds022016: {
    bamboo_forest: {
      text: t('backgroundBambooForestText'),
      notes: t('backgroundBambooForestNotes'),
    },
    cozy_library: {
      text: t('backgroundCozyLibraryText'),
      notes: t('backgroundCozyLibraryNotes'),
    },
    grand_staircase: {
      text: t('backgroundGrandStaircaseText'),
      notes: t('backgroundGrandStaircaseNotes'),
    },
  },
};
/* eslint-enable quote-props */

forOwn(backgrounds, function prefillBackgroundSet (value) {
  forOwn(value, function prefillBackground (bgObject) {
    bgObject.price = 7;
  });
});

export default backgrounds;
