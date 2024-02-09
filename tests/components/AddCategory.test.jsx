/* eslint-disable no-undef */

import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas al componente <AddCategory>', () => { 
  
  test('Debe de cambiar el valor de la caja de texto', () => { 

    render( <AddCategory onNewCategory={ () => {}} />)
    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: { value: 'Saitama'}});

    expect(input.value).toBe('Saitama');
    // screen.debug();

  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';

    const onNewCategory = jest.fn(); //? Un Mock es una simulación de una función.

    render( <AddCategory onNewCategory={ onNewCategory }/>);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: { value: inputValue}}); //? Lanzamos el evento mediante el input pasandole como segundo parámetro el value
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('No debe de llamar el onNewCategory si el input está vacio', () => {
    // const inputValue = '';

    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/>);

    // const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    // fireEvent.input(input, {target: { value: inputValue}}); 
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
  

});