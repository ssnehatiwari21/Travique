function categorize(listing) {
  const text = `${listing.title} ${listing.description} ${listing.location}`.toLowerCase();

  if (/treehouse|tree house|jungle|rainforest|borneo|ubud/.test(text)) return "safari";
  if (/safari|serengeti|mara|wildlife|kenya|tanzania/.test(text)) return "safari";
  if (/ski|slope|chalet|whistler|verbier|aspen.*ski/.test(text)) return "ski";
  if (/island|maldives|bora bora|fiji|seychell|zanzibar|overwater/.test(text)) return "island";
  if (/desert|sahara|wadi|dune|namib|dubai/.test(text)) return "desert";
  if (/historic|castle|fort|colonial|riad|ryokan|hacienda|canal house|trullo|windmill|plantation|cave|cappadocia|monastery|petra|brownstone|igloo|palazzo/.test(text)) return "historic";
  if (/mountain|peak|highland|alpine|dolomit|banff|rockies|pyrenees|himalaya|patagonia|fjord|canton/.test(text)) return "mountain";
  if (/beach|beachfront|coastal|seaside|shore|surf|lagoon|ocean view|cabana|bungalow.*bali|santorini|amalfi|positano|cinque terre|malibu|cancun/.test(text)) return "beach";

  return "trending";
}

module.exports = categorize;