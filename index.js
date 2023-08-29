const imageOriginal = document.getElementById('image-original');
    const imageFiltered = document.getElementById('image-filtered');
    const grayscaleInput = document.getElementById('grayscale');
    const brightnessInput = document.getElementById('brightness');
    const contrastInput = document.getElementById('contrast');
    const sepiaInput = document.getElementById('sepia');
    const invertInput = document.getElementById('invert');
    const saturateInput = document.getElementById('saturate');
    const hueInput = document.getElementById('hue');
    const blurInput = document.getElementById('blur');
    const opacityInput = document.getElementById('opacity');


    grayscaleInput.addEventListener('input', applyFilters);
    brightnessInput.addEventListener('input', applyFilters);
    contrastInput.addEventListener('input', applyFilters);
    sepiaInput.addEventListener('input', applyFilters);
    invertInput.addEventListener('input', applyFilters);
    saturateInput.addEventListener('input', applyFilters);
    hueInput.addEventListener('input', applyFilters);
    blurInput.addEventListener('input', applyFilters);
    opacityInput.addEventListener('input', applyFilters);


    function applyFilters() {
      const grayscaleValue = grayscaleInput.value;
      const brightnessValue = brightnessInput.value;
      const contrastValue = contrastInput.value;
      const sepiaValue = sepiaInput.value;
      const invertValue = invertInput.value;
      const saturateValue = saturateInput.value;
      const hueValue = hueInput.value;
      const blurValue = blurInput.value;
      const opacityValue = opacityInput.value;
      


      const filters = [
        `grayscale(${grayscaleValue})`,
        `brightness(${brightnessValue})`,
        `contrast(${contrastValue})`,
        `sepia(${sepiaValue})`,
        `invert(${invertValue})`,
        `saturate(${saturateValue})`,
        `hue-rotate(${hueValue})`,
        `blur(${blurValue}px)`,
        `opacity(${opacityValue})`,

        // Add more filters here
      ];

      imageFiltered.style.filter = filters.join(' ');
    }