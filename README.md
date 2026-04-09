# Karun & Ashwini — Wedding Invitation

**Live:** https://www.karun-weds-ashwini.com

A digital wedding invitation built as a single-page web experience with an Indian ethnic theme.

## Features

- Splash screen with pulsing concentric rings and music unlock
- Cinematic per-slide entry/exit animations (rise, zoom, sweep, drop, unfurl)
- Rotating SVG mandala background with dual counter-spinning rings
- Per-event theme particle bursts (turmeric dots, music notes, fire sparks, gold stars)
- Staggered card content reveal as each slide settles
- Floating petals in Indian festival colors (saffron, marigold, rose, jasmine)
- Background music auto-starts on splash dismiss and loops continuously
- Music synced to restart at slide 4 (Vivaah) so it plays once per 3 slides
- Touch/swipe navigation for mobile (horizontal pan blocked to prevent viewport drift)
- Keyboard navigation (arrow keys)
- Personalised guest greeting via URL query param (`?guest=Name`)
- Accessible: `aria-label` on all interactive elements and slide sections
- Open Graph meta tags for social sharing previews

## Structure

```
wedding-card/
├── index.html            # Single-file app (HTML + CSS + JS)
├── assets/
│   ├── audio/
│   │   └── music.mp3     # Background music (31 seconds)
│   └── images/
│       └── couple.jpg    # Couple photo
├── .gitignore
└── README.md
```

## Usage

Open `index.html` in any modern browser. No build step required.

To personalise for a guest:
```
index.html?guest=Rahul
```

## Slideshow

Each slide displays for **~8.3 seconds** before transitioning (3s cinematic transition). The 31-second music track plays once across slides 1–3, then restarts at slide 4.

| Slide | Content |
|---|---|
| 1 | Welcome — couple names, parents, photo |
| 2 | Haldi |
| 3 | Sangeet |
| 4 | Vivaah |
| 5 | Reception |
| 6 | All events summary |

## Events

| Ceremony | Date | Time |
|---|---|---|
| Haldi | Tuesday, 30 June 2026 | 12:00 PM onwards |
| Sangeet | Tuesday, 30 June 2026 | 4:00 PM onwards |
| Vivaah | Wednesday, 1 July 2026 | 9:00 AM onwards |
| Reception | Wednesday, 1 July 2026 | 6:00 PM onwards |

**Venue:** Ved Guest House, Kanpur
