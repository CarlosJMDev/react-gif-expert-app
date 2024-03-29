/* eslint-disable no-undef */
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {

  test('Debe de regresar el estado inicial', () => {
    const { result } = renderHook( () => useFetchGifs('Naruto'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
    
    const { result } = renderHook( () => useFetchGifs('Naruto'));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      // {
      //   timeout: 1000 //? Sirve para que al cabo de los segundos de un error sino por defecto es 1s
      // }
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });

});