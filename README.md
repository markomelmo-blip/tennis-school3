# Kyiv Tennis School

Responsive Next.js landing page for Kyiv Tennis School.

## Local Preview

```bash
pnpm install
pnpm dev
```

Open `http://127.0.0.1:3003`.

## Images

Place final images in:

```text
public/images
```

Required filenames:

- `hero-athlete.png`
- `about-coaching.png`
- `testimonial-liam.png`
- `testimonial-anastasiia.png`
- `testimonial-olena.png`
- `pricing-court.png`
- `cta-player.png`
- `footer-court.png`

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload or push this project to the repository.
3. In GitHub, go to `Settings` -> `Pages`.
4. Under `Build and deployment`, choose `GitHub Actions`.
5. Push to the `main` branch.

The included workflow builds a static `out` folder and publishes it to GitHub Pages. It also handles repository subpaths automatically, so images and scripts load correctly for normal project pages like `https://username.github.io/repository-name/`.
