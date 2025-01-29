const $ = document.querySelector.bind(document);
const domObjects = {
  encoder: {
    input: $(".encoder-input"),
    output: $(".encoder-output"),
    submit: $(".submit-encoder"),
  },
  decoder: {
    input: $(".decoder-input"),
    output: $(".decoder-output"),
    submit: $(".submit-decoder"),
  },
};

domObjects.encoder.submit.onclick = () => {
  const input = domObjects.encoder.input.value;
  if (input) {
    const output = btoa(input);
    domObjects.encoder.output.value = output;
  }
};

domObjects.decoder.submit.onclick = () => {
  const input = domObjects.decoder.input.value;
  if (input) {
    const output = atob(input);
    domObjects.decoder.output.value = output;
  }
};
