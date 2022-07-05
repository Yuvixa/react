import { useState } from 'react';
import './App.css'

const Primercomponente = () =>{
    //Return tiene una funcion interna llamada useState
    //para usar useState debemos importarla desde REACT
    //al usar useState la forma en la cual creamos una variable cambia
    //porque debemos definir 2 cosas, primero el nombre de la variable 
    //y segundo, la funcion que se encargara de cambiar el estado
    //count : es la variable 
    const [count, setCount] = useState(0);

    //esta funcion retorna una vista
    //en REACT usamos RETURN () para indicar lo que esta dentro del parentesis

    const sumar =()=> setCount(count +1);
    const restar =()=>setCount(count -1);


    return (
        <div>
            <h1>HOLA MUNDO </h1>
            <h2>{count}</h2>
            <h3>Hola grupo8</h3>
            <button onClick={sumar}>sumar</button>
            <button onClick={restar}>restar</button>
        </div>
    );
}

export default (Primercomponente);

//React tienen una funcion interna llamada useState