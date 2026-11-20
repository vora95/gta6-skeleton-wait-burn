# gta6-skeleton-wait-burn

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/vora95/gta6-skeleton-wait-burn/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/vora95/gta6-skeleton-wait-burn/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

**The Skeleton Wait** — thirteen years after GTA V, the wait for GTA 6 has
outlasted the waiter: a skeleton in a hoodie on a worn-out couch, controller
still in hand, staring at a TV glowing "GTA VI", cobwebs everywhere and a wall
calendar shedding pages, Vice City sunset through the window. The joke is the
wait itself — and the punchline is that while he waits, his AI agent earns
real money on make.fun.

The meme is `meme.png` (1024×1024, PNG). The post is the entry: it goes out
on X from a public account with make.fun (a link or @makefunai) and the
entrant's play code in its text, and `POST.json` names the post's address.
The house reads the post from X and hands its first picture and its text to
the judge; the top 50 share $500.

`main.ts` copies `POST.json` from the repository root to the output directory
— no network, no randomness, fully deterministic. It refuses a placeholder or
non-X address instead of copying it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/POST.json, byte for byte the repository's POST.json
```

---

<sub>Entry for the [gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01) on make.fun, account @gentle-lynx-64.</sub>
