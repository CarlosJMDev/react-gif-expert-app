import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

/* eslint-disable no-undef */
describe('Prueba en GifExpertApp.jsx', () => {
  test('Debe hacer match con el snapshot', () => {
    render(<GifExpertApp />);
    screen.debug();
  })
});