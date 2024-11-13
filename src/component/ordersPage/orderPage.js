// import './orderPage.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// .then(res => res.json())

function OrderPage() {
    const [orders, setOrders] = useState(false);
    const [number, setNumber] = useState();
    const [number_phone, setNumber_phone] = useState();
    const [number_apart, setNumber_apart] = useState();

    const numberHandler = (e) => setNumber(e.target.value);
    const number_phoneHandler = (e) => setNumber_phone(e.target.value);
    const number_apartHandler = (e) => setNumber_apart(e.target.value);

    const navigate = useNavigate();
    const apiGetAll = () => {
        fetch('http://localhost:5000/').then(res => res.json()).then(res => {
            if(res.message == 'Успешно!' && typeof res.orders != undefined && res.data.order != null) {
                setOrders(res.orders);
                console.log('Успех!')
            }
            else setOrders(false);
            console.log(res);
        }).catch((err) => console.log('Ошибка', err))
    }

    const apiGetBidByParam = (e) => {
        e.preventDefault();
        axios(`http://localhost:5000/get_by_param`, {
            params: {
                number: number
            }
        }).then(res => {
            if(res.data.message == 'Успешно!' && typeof res.data.order != undefined && res.data.order != null) {
                const result = [];
                result.push(res.data.order);
                setOrders(result);
                console.log('Успех!')
            }
            else setOrders(false);
        }).catch((err) => {console.log('Ошибка', err); setOrders(false)})
    }
    console.log(orders);

    return (
        <>
            <Link to="/CreatePage" className="el">Создать заявку</Link><br/>
            <button onClick={apiGetAll}>Просмотр всех заявок</button>
            <form onSubmit={apiGetBidByParam}>
                <input placeholder="Введите номер заявки" value={number} onChange={numberHandler}></input>
                <input placeholder="Введите номер телефона" value={number_phone} onChange={number_phoneHandler}></input>
                <input placeholder="Введите номер апартаментов" value={number_apart} onChange={number_apartHandler}></input>
                <input type='submit'></input>
            </form>
            { orders ? (
                <table>
                    <tr>
                        <th>number</th>
                        <th>client</th>
                        <th>number_phone</th>
                        <th>wishes</th>
                        <th>hotel_adress</th>
                        <th>number_apart</th>
                        <th>administrator</th>
                        <th>date_start</th>
                        <th>date_end</th>
                        <th>Редактирование</th>
                        <th>Удаление</th>
                    </tr>
                    {orders.map(elem =>
                        <tr>
                            {Object.values(elem).map(el => 
                                 <td>{el}</td> 
                            )}
                            <td><button onClick={() => navigate('UpdateOrder', { state: { number: elem.number } })} >Редактировать</button></td>
                            <td><button>Удалить</button></td>
                        </tr>
                    )}
                </table>
            ) : (
                <h1 className="hElem">Нет элементов!</h1>
            )}
        </>
    );
}


export default OrderPage;