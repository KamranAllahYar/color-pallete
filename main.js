const { createApp } = Vue;

createApp({
  data() {
    return {
      colorInput: "#000000",
      colorSchemeType: "monochrome",
      colorSchemes: [
        { label: "Monochrome", value: "monochrome" },
        { label: "Monochrome Dark", value: "monochrome-dark" },
        { label: "Monochrome Light", value: "monochrome-light" },
        { label: "Analogic", value: "analogic" },
        { label: "Complement", value: "complement" },
        { label: "Analogic Complement", value: "analogic-complement" },
        { label: "triad", value: "Triad" },
        { label: "quad", value: "quad" },
      ],
      colors: [],
    };
  },
  methods: {
    getColorScheme() {
      fetch(
        `https://www.thecolorapi.com/scheme?hex=${this.colorInput.substring(
          1
        )}&mode=${this.colorSchemeType}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.colors = data.colors;
        });
    },
  },
  mounted() {
    this.$refs.app.style.display = 'initial'
    this.getColorScheme();
  },
}).mount("#app");
