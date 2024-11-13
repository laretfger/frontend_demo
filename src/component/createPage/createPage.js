import './createPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';


function CreatePage() {
    const [client, setClient] = useState();
    const [number_phone, setNumber_phone] = useState();
    const [wishes, setWishes] = useState();
    const [hotel_adress, setHotel_adress] = useState();
    const [number_apart, setNumber_apart] = useState();
    const [administrator, setAdministrator] = useState();
    const [date_start, setDate_start] = useState();
    const [date_end, setDate_end] = useState();

    const clientHandler  = (e) => setClient(e.target.value);
    const number_phoneHandler = (e) => setNumber_phone(e.target.value);
    const wishesHandler = (e) => setWishes(e.target.value);
    const hotel_adressHandler = (e) => setHotel_adress(e.target.value);
    const number_apartHandler = (e) => setNumber_apart(e.target.value);
    const administratorHandler = (e) => setAdministrator(e.target.value);
    const date_startHandler = (e) => setDate_start(e.target.value);
    const date_endHandler = (e) => setDate_end(e.target.value);

    useEffect(() => {
        console.log(123);
    })

    const sub = (event) => {
        event.preventDefault();
        if(!client || !number_phone || !wishes || !hotel_adress || !number_apart || !administrator ||  !date_start ||  !date_end) alert('Введите все данные!');
        else{
            // axios.post('http://localhost:5000/create', qs.stringify({
            //     client: client,
            //     number_phone: number_phone,
            //     wishes: wishes,
            //     hotel_adress: hotel_adress,
            //     number_apart: number_apart,
            //     administrator: administrator,
            //     date_start: date_start,
            //     date_end: date_end
            // })).then(res => {
            //     if(res.message == 'Успешно!') alert(res.message);
            //     else alert('Не успешно');
            // }).catch((err) => console.log('Ошибка', err))
            

            fetch('http://localhost:5000/create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    client: client,
                    number_phone: number_phone,
                    wishes: wishes,
                    hotel_adress: hotel_adress,
                    number_apart: number_apart,
                    administrator: administrator,
                    date_start: date_start,
                    date_end: date_end
                })
            }).then(res => res.json()).then(res => {
                if(res.message == 'Успешно!') alert(res.message);
                else alert('Не успешно');
            }).catch((err) => console.log('Ошибка', err))
            console.log(1234567);
        }
    }
    return (
        <>
            <Link to="/" className="el">Посмотреть все заявки</Link>
            <form onSubmit={sub}>
                <label for="client">Введите ФИО клиента</label><br/>
                <input type='text' name='client' value={client} onChange={clientHandler}></input><br/>

                <label for="number_phone">Введите номер телефона клиента</label><br/>
                <input type='text' name='number_phone' value={number_phone} onChange={number_phoneHandler}></input><br/>

                <label for="wishes">Введите предпочтения клиента</label><br/>
                <input type='text' name='wishes' value={wishes} onChange={wishesHandler}></input><br/>

                <label for="hotel_adress">Введите номер отеля клиента</label><br/>
                <input type='text' name='hotel_adress' value={hotel_adress} onChange={hotel_adressHandler}></input><br/>

                <label for="number_apart">Введите номер аппартоментов клиента</label><br/>
                <input type='text' name='number_apart' value={number_apart} onChange={number_apartHandler}></input><br/>

                <label for="administrator">Введите имя администратора</label><br/>
                <input type='text' name='administrator' value={administrator} onChange={administratorHandler}></input><br/>

                <label for="date_start">Введите дату заезда</label><br/>
                <input type='date' name='date_start' value={date_start} onChange={date_startHandler}></input><br/>

                <label for="date_end">Введите дату выезда</label><br/>
                <input type='date' name='date_end' value={date_end} onChange={date_endHandler}></input><br/>

                <input type='submit'></input><br/>
            </form>
            
        </>
    );
}

export default CreatePage;