import './updateOrder.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

function UpdateOrder() {
    const location = useLocation();
    console.log(location);

    const [wishes, setWishes] = useState();
    const [administrator, setAdministrator] = useState();
    const [date_start, setDate_start] = useState();
    const [date_end, setDate_end] = useState();

    const wishesHandler = (e) => setWishes(e.target.value);
    const administratorHandler = (e) => setAdministrator(e.target.value);
    const date_startHandler = (e) => setDate_start(e.target.value);
    const date_endHandler = (e) => setDate_end(e.target.value);

    const sub = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:5000/`, {
            number: location.state.number,
            wishes: wishes,
            administrator: administrator,
            date_start: date_start,
            date_end: date_end
        }).then(res => {
            alert(res.data.message);
        }).catch((err) => console.log('Ошибка', err))
    }

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/get_by_param/`, {
    //         params: {
    //             number: location.state.number
    //         }
    //     }).then(res => res.json()).then(res => {
    //         if(res.message == 'Успешно!' && res.order != undefined) {
    //             console.log('Успех!')
    //         }
    //         console.log(res);
    //     }).catch((err) => console.log('Ошибка', err))
    // }, [])
  return (
    <>
        <Link to="/CreatePage" className="el1">Создать заявку</Link>
        <Link to="/" className="el">Посмотреть все заявки</Link>
            <form onSubmit={sub}>
                <label for="wishes">Введите предпочтения клиента</label><br/>
                <input type='text' name='wishes' value={wishes} onChange={wishesHandler}></input><br/>

                <label for="administrator">Введите имя администратора</label><br/>
                <input type='text' name='administrator' value={administrator} onChange={administratorHandler}></input><br/>

                <label for="date_start">Введите дату заезда</label><br/>
                <input type='date' name='date_start' value={date_start} onChange={date_startHandler}></input><br/>

                <label for="date_end">Введите дату выезда</label><br/>
                <input type='date' name='date_end' value={date_end} onChange={date_endHandler}></input><br/>

                <input type='submit'></input><br/>
            </form>
        <button>Удалить заявку</button>
    </>
  );
}

export default UpdateOrder;