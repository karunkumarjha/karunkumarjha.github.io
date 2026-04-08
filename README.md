# Wedding Invitation — Karun & Ashwini

A digital wedding invitation built as a single-page web experience.

## Features

- Animated slideshow with cinematic slide transitions
- Background music with splash screen unlock
- Per-event slides: Haldi, Sangeet, Vivaah, Reception
- Summary slide with all events
- Touch/swipe support for mobile
- Personalised guest name via URL query param (`?guest=Name`)

## Structure

```
wedding-card/
├── index.html       # Single-file app (HTML + CSS + JS)
├── music.mp3        # Background music (not tracked in git)
└── README.md
```

## Usage

Open `index.html` in any modern browser. No build step required.

To personalise for a guest:
```
index.html?guest=Rahul
```

## Events

| Ceremony | Date | Time |
|---|---|---|
| Haldi | Tuesday, 30 June 2026 | 12:00 PM |
| Sangeet | Tuesday, 30 June 2026 | 4:00 PM |
| Vivaah | Wednesday, 1 July 2026 | 9:00 AM (Shubh Muhurat) |
| Reception | Wednesday, 1 July 2026 | 6:00 PM |

**Venue:** Ved Guest House
