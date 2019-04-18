const glyph = document.getElementById('glyph');
glyph.style.width = '100%';

const skycons = new Skycons();

skycons.add('glyph', Skycons.RAIN);
skycons.play();