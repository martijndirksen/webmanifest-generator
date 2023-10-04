# webmanifest-generator

This utility can be used to generate a web application manifest with assorted icons in appropriate sizes.

For more information about web application manifests, please visit [MDN](https://developer.mozilla.org/en-US/docs/Web/Manifest).

# Usage

The command below will generate various appropriately sized icons in the current working directory, by resizing the input file (`example.png`). For best results, use a high quality square image of at least 512x512 pixels. Finally, it will also generate a `manifest.webmanifest` file.

```bash
npx webmanifest-generator generate example.png --lang en --dir ltr --name my-app-name-here --description Some description --short-name my-app --scope / --id / --start-url / --display standalone --orientation any --theme-color ffffff --background-color ffffff
```

The command arguments should match the expected member values of the web application manifest. All options are optional, however, an input image file is required. [Reference here](https://developer.mozilla.org/en-US/docs/Web/Manifest#members)
