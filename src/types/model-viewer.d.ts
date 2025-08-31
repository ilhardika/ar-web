declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": {
      src?: string;
      "ios-src"?: string;
      alt?: string;
      ar?: boolean;
      "ar-modes"?: string;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      style?: string;
      loading?: string;
      reveal?: string;
      "shadow-intensity"?: string;
      "environment-image"?: string;
      [key: string]: string | boolean | undefined;
    };
  }
}
