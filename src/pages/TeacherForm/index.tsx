import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import iconWarning from '../../assets/images/icons/warning.svg';

import './styles.css';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherForm() {
    // essa variavel ira nos redirecionar para onde quisermos
    const history = useHistory();
    // vamos criar um estado para cada Input da sessão "seus dados"
    const [inputName, setInputName] = useState('');
    const [inputAvatar, setInputAvatar] = useState('');
    const [inputWhatsApp, setInputWhatsApp] = useState('');
    const [inputBio, setInputBio] = useState('');

    // sessão "Sobre a aula"
    const [inputSubject, setInputSubject] = useState('');
    const [inputCost, setInputCost] = useState('');

    const items = {
        week_day: 0,
        from: '',
        to: ''
    }
    const [scheduleItems, setScheduleItems] = useState(
        [ //função const, será que vai mudar? por meio do use state
            {week_day: 0, from: '', to: ''},
        ]
    ); 

    function addNewScheduleItem() {
        setScheduleItems(
            [...scheduleItems, items]
        );
    }

    function setScheduleItemValue(position:number, field:string, value:string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position){
                return {...scheduleItem, [field]:value};
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();
        api.post('classes', {
            name: inputName,
            avatar: inputAvatar,
            whatsapp: inputWhatsApp,
            bio: inputBio,
            subject: inputSubject,
            cost: Number(inputCost),
            schedule: scheduleItems, 
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(()=> {
            alert('Erro no cadastro!')
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aula."
                description="O primeiro passo é preencher o formulário de inscrição"/> 
       
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input 
                            name="name" 
                            label="Nome completo" 
                            value={inputName} 
                            onChange={(e) => {setInputName( e.target.value) }}/>

                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={inputAvatar} 
                            onChange={(e) => {setInputAvatar( e.target.value)} }/>

                        <Input 
                            name="whatsapp"
                            label="WhatsApp"
                            value={inputWhatsApp} 
                            onChange={(e) => {setInputWhatsApp( e.target.value) }}/>

                        <Textarea 
                            name="bio"
                            label="Biografia"
                            value={inputBio} 
                            onChange={(e) => {setInputBio( e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                        name="subject" 
                        label="Matéria"
                        value={inputSubject}
                        onChange={(e) => {setInputSubject(e.target.value)}} 
                        options = {[
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Portugês', label: 'Português'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Química', label: 'Química'},
                            {value: 'English', label: 'English'},
                        ]}
                        />
                        <Input 
                        name="cost" 
                        label="Custo da sua aula por hora"
                        value={inputCost}
                        onChange={(e) => {setInputCost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (        
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Dia da semana" 
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    options = {[
                                        {value: '0', label: 'Domingo'},
                                        {value: '1', label: 'Segunda-feira'},
                                        {value: '2', label: 'Terça-feira'},
                                        {value: '3', label: 'Quarta-feira'},
                                        {value: '4', label: 'Quinta-feira'},
                                        {value: '5', label: 'Sexta-feira'},
                                        {value: '6', label: 'Sabado'},
                                    ]}
                                />

                            <Input 
                            name="from" 
                            onChange={e => setScheduleItemValue(index, 'from', e.target.value)} 
                            value={scheduleItem.from}
                            label="Das" type="time" />

                            <Input name="to" 
                            onChange={e => setScheduleItemValue(index, 'to', e.target.value)} 
                            label="Até" 
                            value={scheduleItem.to}
                            type="time" />

                        </div>
                        );
                        })}
                        
                    </fieldset>

                    <footer>
                        <p>
                            <img src={iconWarning} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados!
                        </p>
                        <button type="submit">
                            Salvar Cadastro!
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;