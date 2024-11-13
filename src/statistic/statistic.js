import 'statistic.css'

function Statistic() {
    const sub = (event) => {
        axios.get(`http://localhost:5000/get_by_param/`, {
            params: {
                number: location.state.number
            }
        }).then(res => res.json()).then(res => {
            if(res.message == 'Успешно!' && res.order != undefined) {
                console.log('Успех!')
            }
            console.log(res);
        }).catch((err) => console.log('Ошибка', err)) 
    }

    const sub2 = (event) => {
        axios.get(`http://localhost:5000/get_by_param/`, {
            params: {
                number: location.state.number
            }
        }).then(res => res.json()).then(res => {
            if(res.message == 'Успешно!' && res.order != undefined) {
                console.log('Успех!')
            }
            console.log(res);
        }).catch((err) => console.log('Ошибка', err)) 
    }

    const sub3 = (event) => {
        axios.get(`http://localhost:5000/get_by_param/`, {
            params: {
                number: location.state.number
            }
        }).then(res => res.json()).then(res => {
            if(res.message == 'Успешно!' && res.order != undefined) {
                console.log('Успех!')
            }
            console.log(res);
        }).catch((err) => console.log('Ошибка', err)) 
    }
    return(
        <>
            <button></button>
            <button></button>
            <button></button>
        </>
    );
}

export default Statistic;