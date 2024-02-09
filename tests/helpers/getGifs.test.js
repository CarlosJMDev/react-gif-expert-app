/* eslint-disable no-undef */
import { getGifs } from "../../src/helpers/getGifs";

describe('Prueba en el helper getGifs.js', () => {
  
  test('Debe de retornar un arreglo de gifs', async() => {
    
    const gifs = await getGifs('Narutp');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });
})