//Declare SVG Animation
const svg = document.querySelectorAll('#svg path')
for(let i=0; i<svg.length; i++){
    console.log('Letter ${i} is ${svg[i],getTotalLength');
}

//Declare Icon Button
import { SlIconButton } from '@shoelace-style/shoelace/dist/react';

const SlIconButton = () => <SlIconButton name="apple" label="Logo" href="hhttps://www.apple.com/" target="_blank" />;

//Declare Dialog
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('sl-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());