# news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/zhaoxm0518-sys/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/zhaoxm0518-sys/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A deterministic Node program that renders a 1024×1024 newspaper front page summing up 21 November 2026's world news — Poland, the Shenzhen trilateral, the Berlin summit, the ICJ genocide ruling, EU aid, and the AI market rout — as one image, `entry.png`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

`main.ts` copies the rendered front page to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). Standard library only, no network; every run writes identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=ad59jmt6&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
